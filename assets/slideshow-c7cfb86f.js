import{_ as z}from"./5-c832a3b8.js";import{h as R,r as d,l as c,o as I,c as N,a as t,m as e,n as s,q as _,x as g,F as j,g as f,p as q,f as B,_ as T}from"./index-0a8c6bc7.js";const o=r=>(q("data-v-b5d5b155"),r=r(),B(),r),E={class:"right-a"},F=o(()=>t("div",{class:"right-s"},[t("i",{class:"iconfont icon-liebiaofenlei"}),t("span",null,"轮播图")],-1)),L={class:"right-t"},$=o(()=>t("i",{class:"iconfont icon-24gl-questionCircle"},null,-1)),U=o(()=>t("i",{class:"iconfont icon-lingdang"},null,-1)),A=o(()=>t("div",null,[t("img",{src:z,alt:""})],-1)),D=o(()=>t("span",null,"管理员:112300",-1)),G=o(()=>t("span",null,"|",-1)),H=o(()=>t("i",{class:"iconfont icon-tuichu"},null,-1)),J=o(()=>t("span",null,"退出",-1)),K={class:"hader"},M={class:"header-a"},O={class:"fight"},P={class:"fight-a"},Q={class:"demo-date-picker"},W={class:"block"},X=o(()=>t("span",{class:"demonstration"},"上传时间：",-1)),Y=f('<div class="fight-i" data-v-b5d5b155> 上传人： <select name="" id="" data-v-b5d5b155><option value="" data-v-b5d5b155>牛牛</option><option value="" data-v-b5d5b155>牛魔王</option><option value="" data-v-b5d5b155>牛夫人</option><option value="" data-v-b5d5b155>勇敢牛牛</option></select></div>',1),Z=f('<div class="fight-b" data-v-b5d5b155><div class="fight-l" data-v-b5d5b155> 手动搜索：<input type="text" placeholder="请输入课程标题或者关键词" data-v-b5d5b155></div><div class="fight-n" data-v-b5d5b155><button style="background-color:rgba(43, 193, 123, 1);" data-v-b5d5b155>搜索</button><button style="background-color:#fff;color:rgba(43, 193, 123, 1);border:1px solid rgba(43, 193, 123, 1);" data-v-b5d5b155>重置</button></div></div>',1),tt={class:"tab"},et={class:"tab-a"},ot={class:"tab-c"},st=o(()=>t("span",null,"轮播图列表",-1)),at=o(()=>t("i",{class:"iconfont icon-tianjiawenjian"},null,-1)),lt=o(()=>t("span",null,"添加轮播图",-1)),nt={class:"tab-q"},it={class:"tab-y"},dt=["src"],ct={style:{height:"30px"}},_t={class:"tab-k"},rt={style:{"margin-top":"20px"}},pt={class:"tab-m"},ut=o(()=>t("span",null,"共10页，100条数据",-1)),ht=R({__name:"slideshow",setup(r){const h=d("");d(""),d(!0);const m=d("default"),u=d(),y=d(),w=l=>{console.log(l),l&&l.forEach(n=>{u.value.toggleRowSelection(n,l)})},k=l=>{u.value.clearSelection()},x=l=>{y.value=l},b=[{date:"牛魔王",name:"https://img.js.design/assets/img/6180ac4e7e06ae1cf4581e18.png",address:"轮播图说明文字示例1如果超出十个个字则显…这是说明示例3是说明名称示例4说明名称示例5说明名称示例6说明名称示例7说明名称示例8说明名称示例9说明名称示例10",state:"牛夫人",sales:"2023/8/1"}];return(l,n)=>{const v=c("RouterLink"),S=c("el-date-picker"),i=c("el-table-column"),p=c("el-button"),C=c("el-table"),V=c("el-pagination");return I(),N(j,null,[t("div",E,[F,t("div",L,[$,U,A,D,G,H,e(v,{to:"/"},{default:s(()=>[J]),_:1})])]),t("div",K,[t("div",M,[t("div",O,[t("div",P,[t("div",Q,[t("div",W,[X,e(S,{modelValue:h.value,"onUpdate:modelValue":n[0]||(n[0]=a=>h.value=a),type:"daterange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",size:m.value},null,8,["modelValue","size"])])]),Y]),Z])]),t("div",tt,[t("div",et,[t("div",ot,[st,t("div",null,[at,e(v,{to:"/slideshow2"},{default:s(()=>[lt]),_:1})])])]),t("div",nt,[t("div",it,[t("div",null,[e(C,{ref_key:"multipleTableRef",ref:u,data:b,style:{width:"100%"},onSelectionChange:x},{default:s(()=>[e(i,{type:"selection",width:"66"}),e(i,{label:"名称",width:"200"},{default:s(a=>[_(g(a.row.date),1)]),_:1}),e(i,{label:"缩略图",width:"200"},{default:s(a=>[t("img",{src:a.row.name,alt:""},null,8,dt)]),_:1}),e(i,{label:"说明",width:"200"},{default:s(a=>[t("div",ct,g(a.row.address),1)]),_:1}),e(i,{property:"state",label:"上传人",width:"200"}),e(i,{property:"sales",label:"提交时间",width:"200"}),e(i,{fixed:"right",label:"操作",width:"200"},{default:s(()=>[e(p,{link:"",type:"primary",size:"small"},{default:s(()=>[_("编辑")]),_:1}),e(p,{link:"",type:"primary",size:"small"},{default:s(()=>[_("删除")]),_:1})]),_:1})]),_:1},512)])]),t("div",_t,[t("div",rt,[e(p,{onClick:n[1]||(n[1]=a=>w(b))},{default:s(()=>[_("全选")]),_:1}),e(p,{onClick:n[2]||(n[2]=a=>k())},{default:s(()=>[_("取消")]),_:1})]),t("div",pt,[ut,e(V,{small:"",background:"",layout:"prev, pager, next",total:50,class:"mt-4"})])])])])])],64)}}});const gt=T(ht,[["__scopeId","data-v-b5d5b155"]]);export{gt as default};
