import{r as a}from"./index-CKTHfneF.js";function t(t){return a.post("/oplus/query_datas",t)}function s(t){return a.post("/oplus/query_data",t)}function u({data_type:t,data_status:s,data_id:u,data_name:n}){return a.post(`/oplus/update_data_?data_type=${t}&data_status=${s}&data_id=${u}&data_name=${n}`)}function n(t){return a.post("/oplus/delete_data",t)}function d(t){return a.post("/oplus/gen_train_data",t)}export{d as a,s as b,n as d,t as g,u};