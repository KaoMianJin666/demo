import{r as t}from"./index-CjIeNt3m.js";function a(a){return t.post("/oplus/query_datas",a)}function s(a){return t.post("/oplus/query_data",a)}function d({data_type:a,data_status:s,formData:d}){return t.post(`/oplus/upload_data?data_type=${a}&data_status=${s}`,d,{headers:{"Content-Type":"multipart/form-data"}})}function u({data_type:a,data_status:s,data_id:d,formData:u}){return t.post(`/oplus/update_data?data_type=${a}&data_status=${s}&data_id=${d}`,u,{headers:{"Content-Type":"multipart/form-data"}})}function e(a){return t.post("/oplus/delete_data",a)}export{s as a,e as d,a as g,d as s,u};
