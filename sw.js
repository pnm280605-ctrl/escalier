const V="escalier-v2";
const CORE=["./","./index.html","./manifest.webmanifest","./config.js","./icon-180.png","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
 const r=e.request;if(r.method!=="GET")return;
 const u=new URL(r.url);
 if(u.origin===location.origin){
  // Trang chính: lấy bản mới khi có mạng, không có mạng thì dùng bản đã lưu
  if(r.mode==="navigate"){
   const net=fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put("./index.html",cp));}return res;});
   e.respondWith(caches.match("./index.html").then(m=>{if(m){e.waitUntil(net.catch(()=>{}));return m;}return net;}));return;}
  if(u.pathname.endsWith("/config.js")){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res;}).catch(()=>caches.match(r)));return;}
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res;})));return;
 }
 if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)||(u.hostname==="www.gstatic.com"&&u.pathname.startsWith("/firebasejs/"))){
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res;}).catch(()=>new Response("",{status:200,headers:{"Content-Type":"text/css"}}))));
 }
});
