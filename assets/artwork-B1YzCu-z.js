import{r}from"./index-CKTHfneF.js";function t(){return r.post("/oplus/query_artworks")}function o(t){return r.post("/oplus/query_artwork",{artwork_id:t})}function a(t,o,a,e="normal",n="normal",s=1){return r.post(`/oplus/upload_artwork?artwork_name=${o}&preview=${a}&artwork_filter=${n}&artwork_level=${e}&points=${s}`,t,{headers:{"Content-Type":"multipart/form-data"}})}function e(t,o,a,e,n="normal",s="normal",p=1){return r.post(`/oplus/update_artwork?artwork_id=${t}&artwork_name=${a}&preview=${e}&artwork_filter=${s}&artwork_level=${n}&points=${p}`,o,{headers:{"Content-Type":"multipart/form-data"}})}function n(t){return r.post("/oplus/delete_artwork",t)}export{t as a,n as d,o as g,a as s,e as u};