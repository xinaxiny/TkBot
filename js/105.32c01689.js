"use strict";(self.webpackChunkpuls=self.webpackChunkpuls||[]).push([[105],{4105:function(e,t,o){o.r(t),o.d(t,{default:function(){return _}});var l=o(311),r=o(1158),a=o(7467),n=o.n(a),i=o(1020);const c=(0,i.Q_)("loca",{state:()=>({config:{}}),persist:!0,actions:{},getters:{}});(0,i.Q_)("xxx",{state:()=>({query:{},mt:{}}),persist:{storage:sessionStorage}});let s=c();const d=n().create({baseURL:"http://"+(s.config.api||"127.0.0.1")+":3000/api",timeout:5e3});d.interceptors.request.use((e=>{let t=f("token");return e.headers["x-token"]=t,e}),(e=>(r.ElMessage.error("拦截器异常"),Promise.reject(e)))),d.interceptors.response.use((e=>0===e.data.code?e.data.data:(r.ElMessage.error(e.data.msg),Promise.reject(e))),(e=>(r.ElMessage.error(e),Promise.reject(e))));const u=e=>{let{url:t,params:o,data:l,loading:r=!0}=e;return d({url:t,method:l?"post":"get",params:o,data:l})};let f=e=>{if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!==t){t=t+e.length+1;var o=document.cookie.indexOf(";",t);return-1===o&&(o=document.cookie.length),unescape(document.cookie.substring(t,o))}}return localStorage.getItem(e)};const p=e=>u({url:"start",data:e}),m=e=>u({url:"stop",data:e}),g=e=>u({url:"Login",data:e});function w(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function h(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var l=o.call(e,t||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const V={class:"box-main"},y={class:"f-",style:{margin:"0px 0px 10px"}},N={class:"gva-table-box"},x={class:"fs12",style:{color:"#409eff"}},v={class:"fs12",style:{color:"#409eff"}},C={class:"fs12"},b={class:"fs12",style:{color:"red"}},k={class:"mt20"},S={class:"dialog-footer"},E={class:"dialog-footer"};var I={__name:"index",setup(e){let t=c(),o=(0,l.ref)(),a=(0,l.ref)([]),n=(0,l.ref)(!1),i=(0,l.ref)(!1),s=t.config,d=(0,l.reactive)({});function f(){let e=prompt("请输入要打开的网站地址","");null!=e&&""!=e&&((e=>{u({url:"OpenUri",data:e})})({list:o.value.getSelectionRows().map((e=>e.Inof.Uid)),url:e}),r.ElMessage.success("任务已提交"))}function I(){let e=[];for(let t=1;t<21;t++)e.push({text:t+"组",value:t});return e}(0,l.onMounted)((async()=>{var e;d=await u({url:"DeviceList",params:e}),a.value=d.list.map((e=>(e.Inof.Group=e.Inof.Group?e.Inof.Group:"99",e.Inof.Identifier=e.Inof.Identifier?e.Inof.Identifier:"00",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(Object(o),!0).forEach((function(t){h(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e)))),await(0,l.nextTick)(),o.value.sort("Group","ascending")}));const _=(e,t,l)=>{const r=l.property;return o.value.clearSelection(),t.Inof[r]==e};function D(e){if(""==e||null==e)return"未获取到";let t=e;return t.query?"".concat(t.query," (").concat(t.country,"-").concat(t.city,")"):"未获取到"}let B=()=>{window.open("https://pan.baidu.com/s/12GfqGvmHkWAwcNRW-1FYWg?pwd=urd9")};function T(e){if(0==e)return"";const t=Math.floor(Date.now()/1e3)-e,o=Math.floor(t/3600),l=Math.floor(t%3600/60),r=t%60;return"".concat(o,"时").concat(l,"分").concat(r)}return(e,t)=>{var c;const u=(0,l.resolveComponent)("el-table-column"),w=(0,l.resolveComponent)("el-tag"),h=(0,l.resolveComponent)("el-table"),O=(0,l.resolveComponent)("el-button"),R=(0,l.resolveComponent)("el-upload"),U=(0,l.resolveComponent)("el-input"),j=(0,l.resolveComponent)("el-form-item"),M=(0,l.resolveComponent)("el-option"),P=(0,l.resolveComponent)("el-select"),L=(0,l.resolveComponent)("el-switch"),A=(0,l.resolveComponent)("el-form"),F=(0,l.resolveComponent)("el-dialog"),G=(0,l.resolveComponent)("el-tab-pane"),W=(0,l.resolveComponent)("el-tabs");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createElementVNode)("div",V,[(0,l.createElementVNode)("div",y,[(0,l.createElementVNode)("span",null,"已连接："+(0,l.toDisplayString)((0,l.unref)(a).length),1),(0,l.createElementVNode)("span",null,"可用账号："+(0,l.toDisplayString)(null===(c=(0,l.unref)(d).tknamelist)||void 0===c?void 0:c.length),1),(0,l.createElementVNode)("span",null,"今日收益："+(0,l.toDisplayString)((0,l.unref)(d).deyincome),1),(0,l.createElementVNode)("span",null,"总收益："+(0,l.toDisplayString)((0,l.unref)(d).todayincome),1),(0,l.createElementVNode)("span",null,"总余额："+(0,l.toDisplayString)((0,l.unref)(d).totalBalance),1),(0,l.createElementVNode)("span",null,"授权数量："+(0,l.toDisplayString)((0,l.unref)(d).Authorized),1),(0,l.createElementVNode)("span",null,"设备码："+(0,l.toDisplayString)((0,l.unref)(d).ID),1)]),(0,l.createElementVNode)("div",N,[(0,l.createVNode)(h,{ref_key:"Table",ref:o,style:{width:"100%",color:"#000"},"max-height":700,"tooltip-effect":"dark",data:(0,l.unref)(a),"highlight-current-row":!0,border:"","row-class-name":e=>{let{row:t,rowIndex:o}=e;return t.Inof.State?"warning-row":"success-row"},onRowClick:t[0]||(t[0]=(e,t,o)=>(0,l.isRef)(i)?i.value=e:i=e)},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(u,{type:"selection"}),(0,l.createVNode)(u,{label:"分组",property:"Group",width:"80",filters:I(),"filter-method":_,"filter-multiple":!1,align:"center"},{default:(0,l.withCtx)((e=>[(0,l.createTextVNode)((0,l.toDisplayString)(e.row.Inof.Group)+"/"+(0,l.toDisplayString)(e.row.Inof.Identifier),1)])),_:1},8,["filters"]),(0,l.createVNode)(u,{label:"连接状态",property:"Errs","filter-multiple":!1,filters:[{text:"在线",value:!1},{text:"离线",value:!0}],width:"100","filter-method":_,align:"center"},{default:(0,l.withCtx)((e=>[(0,l.createVNode)(w,{effect:"dark","disable-transitions":"",type:e.row.Inof.Errs?"danger":"success"},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)((0,l.toDisplayString)(e.row.Inof.Errs?"离线":"在线"),1)])),_:2},1032,["type"])])),_:1}),(0,l.createVNode)(u,{label:"工作状态",property:"State","filter-multiple":!1,filters:[{text:"空闲",value:!1},{text:"工作中",value:!0}],width:"100","filter-method":_,align:"center"},{default:(0,l.withCtx)((e=>[(0,l.createVNode)(w,{effect:"dark","disable-transitions":"",type:e.row.Inof.State?"danger":"success"},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)((0,l.toDisplayString)(e.row.Inof.State?"工作中":"空闲"),1)])),_:2},1032,["type"])])),_:1}),(0,l.createVNode)(u,{label:"当前任务",property:"WorLog",width:"120","show-overflow-tooltip":!0,align:"center"},{default:(0,l.withCtx)((e=>[(0,l.createElementVNode)("div",x,(0,l.toDisplayString)(e.row.Inof.WorLog?e.row.Inof.WorLog.content:"未启动"),1)])),_:1}),(0,l.createVNode)(u,{label:"账号",width:"100","show-overflow-tooltip":!0,align:"center"},{default:(0,l.withCtx)((e=>[(0,l.createElementVNode)("div",v,(0,l.toDisplayString)(e.row.Inof.Name),1)])),_:1}),(0,l.createVNode)(u,{label:"已运行","show-overflow-tooltip":!0,width:"100",align:"center"},{default:(0,l.withCtx)((e=>[(0,l.createElementVNode)("div",C,(0,l.toDisplayString)(T(e.row.Inof.WorTime)),1)])),_:1}),(0,l.createVNode)(u,{label:"成功","show-overflow-tooltip":!0,width:"100",align:"center"},{default:(0,l.withCtx)((e=>[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.row.Accounts,((e,t)=>((0,l.openBlock)(),(0,l.createElementBlock)("span",{class:"fd fs12",style:{color:"red"},key:t},(0,l.toDisplayString)(e.Success),1)))),128))])),_:1}),(0,l.createVNode)(u,{label:"失败","show-overflow-tooltip":!0,width:"100",align:"center"},{default:(0,l.withCtx)((e=>[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.row.Accounts,((e,t)=>((0,l.openBlock)(),(0,l.createElementBlock)("span",{class:"fd fs12",style:{color:"red"},key:t},(0,l.toDisplayString)(e.Fail),1)))),128))])),_:1}),(0,l.createVNode)(u,{label:"收益","show-overflow-tooltip":!0,width:"100",align:"center"},{default:(0,l.withCtx)((e=>[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.row.Accounts,((e,t)=>((0,l.openBlock)(),(0,l.createElementBlock)("span",{class:"fd fs12",style:{color:"red"},key:t},(0,l.toDisplayString)(e.Income),1)))),128))])),_:1}),(0,l.createVNode)(u,{label:"余额","show-overflow-tooltip":!0,width:"130",align:"center"},{default:(0,l.withCtx)((e=>[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.row.Accounts,((e,t)=>((0,l.openBlock)(),(0,l.createElementBlock)("span",{class:"fd fs12",style:{color:"red"},key:t},(0,l.toDisplayString)(e.Balance),1)))),128))])),_:1}),(0,l.createVNode)(u,{label:"设备信息","show-overflow-tooltip":!0,align:"center"},{default:(0,l.withCtx)((e=>[(0,l.createElementVNode)("div",b,[(0,l.createElementVNode)("span",null,"账号："+(0,l.toDisplayString)(e.row.Accounts.length),1),(0,l.createElementVNode)("span",null," 网络: "+(0,l.toDisplayString)(e.row.Inof.Ip)+"---"+(0,l.toDisplayString)(D(e.row.Inof.Ips)),1)])])),_:1})])),_:1},8,["data","row-class-name"]),(0,l.createElementVNode)("div",k,[(0,l.createVNode)(O,{type:"primary",onClick:t[1]||(t[1]=e=>(0,l.unref)(o).toggleAllSelection())},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("全选/取消")])),_:1}),(0,l.createVNode)(O,{type:"primary",onClick:t[2]||(t[2]=e=>(0,l.unref)(o).getSelectionRows().length?function(){let e=o.value.getSelectionRows().map((e=>e.Inof.Uid));p({list:e,data:s}).then((e=>{})),r.ElMessage.success("启动成功")}():(0,l.unref)(r.ElMessage).error("请选择要操作的设备"))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("启动脚本")])),_:1}),(0,l.createVNode)(O,{type:"danger",onClick:t[3]||(t[3]=e=>(0,l.unref)(o).getSelectionRows().length?function(){let e=o.value.getSelectionRows().map((e=>e.Inof.Uid));m({list:e}),r.ElMessage.success("脚本已停止")}():(0,l.unref)(r.ElMessage).error("请选择要操作的设备"))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("停止脚本")])),_:1}),(0,l.createVNode)(O,{type:"primary",onClick:t[4]||(t[4]=e=>(0,l.isRef)(n)?n.value=!0:n=!0)},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("脚本配置")])),_:1}),(0,l.createVNode)(O,{type:"primary",onClick:(0,l.unref)(B)},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("下载脚本")])),_:1},8,["onClick"]),(0,l.createVNode)(O,{type:"primary",onClick:t[5]||(t[5]=e=>(0,l.unref)(o).getSelectionRows().length?f():(0,l.unref)(r.ElMessage).error("请选择要操作的设备"))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("打开网站")])),_:1}),(0,l.createVNode)(O,{type:"primary",onClick:t[6]||(t[6]=e=>(0,l.unref)(o).getSelectionRows().length?function(){let e=o.value.getSelectionRows().map((e=>e.Inof.Uid));g({list:e,data:s}),r.ElMessage.success("任务已提交")}():(0,l.unref)(r.ElMessage).error("请选择要操作的设备"))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("登录账号")])),_:1})]),(0,l.createVNode)(R,{ref:"uploadRef",class:"mt20",action:"http://".concat((0,l.unref)(d).ServeUri,":3000/api/importTkName")},{trigger:(0,l.withCtx)((()=>[(0,l.createVNode)(O,{type:"primary"},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("导入账号")])),_:1})])),_:1},8,["action"])])]),(0,l.createVNode)(F,{modelValue:(0,l.unref)(n),"onUpdate:modelValue":t[14]||(t[14]=e=>(0,l.isRef)(n)?n.value=e:n=e),title:"脚本配置信息",width:"30%",center:""},{footer:(0,l.withCtx)((()=>[(0,l.createElementVNode)("span",S,[(0,l.createVNode)(O,{type:"primary",onClick:t[13]||(t[13]=e=>(0,l.isRef)(n)?n.value=!1:n=!1),style:{width:"50%",height:"40px"}},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("保存配置")])),_:1})])])),default:(0,l.withCtx)((()=>[(0,l.createVNode)(A,{"label-width":"100px",model:(0,l.unref)(s),"label-position":"left"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(j,{label:"脚本服务端"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(U,{modelValue:(0,l.unref)(s).api,"onUpdate:modelValue":t[7]||(t[7]=e=>(0,l.unref)(s).api=e),placeholder:"默认本机ip地址",style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,l.createVNode)(j,{label:"OCR服务端"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(U,{modelValue:(0,l.unref)(s).ocr,"onUpdate:modelValue":t[8]||(t[8]=e=>(0,l.unref)(s).ocr=e),placeholder:"默认本机ip地址",style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,l.createVNode)(j,{label:"选择脚本"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(P,{modelValue:(0,l.unref)(s).step,"onUpdate:modelValue":t[9]||(t[9]=e=>(0,l.unref)(s).step=e),placeholder:"点击选择"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(M,{label:"养号+抢宝",value:"1"}),(0,l.createVNode)(M,{label:"养号+福袋",value:"2"}),(0,l.createVNode)(M,{label:"采集模式",value:"20"})])),_:1},8,["modelValue"])])),_:1}),(0,l.createVNode)(j,{label:"是否检测代理"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(L,{modelValue:(0,l.unref)(s).agent,"onUpdate:modelValue":t[10]||(t[10]=e=>(0,l.unref)(s).agent=e),style:{"margin-right":"10px"}},null,8,["modelValue"]),(0,l.createTextVNode)("Kit ")])),_:1}),(0,l.createVNode)(j,{label:"养号间隔:"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(U,{modelValue:(0,l.unref)(s).develop,"onUpdate:modelValue":t[11]||(t[11]=e=>(0,l.unref)(s).develop=e),placeholder:"分钟计算单位",style:{width:"50%","margin-right":"10px"}},null,8,["modelValue"]),(0,l.createTextVNode)("分 ")])),_:1}),(0,l.createVNode)(j,{label:"切换间隔:"},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(U,{modelValue:(0,l.unref)(s).switch,"onUpdate:modelValue":t[12]||(t[12]=e=>(0,l.unref)(s).switch=e),placeholder:"分钟计算单位",style:{width:"50%","margin-right":"10px"}},null,8,["modelValue"]),(0,l.createTextVNode)("分 ")])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"]),(0,l.unref)(i)?((0,l.openBlock)(),(0,l.createBlock)(F,{key:0,modelValue:(0,l.unref)(i),"onUpdate:modelValue":t[20]||(t[20]=e=>(0,l.isRef)(i)?i.value=e:i=e),title:"设备详情",center:""},{footer:(0,l.withCtx)((()=>[(0,l.createElementVNode)("span",E,[(0,l.createVNode)(O,{type:"primary",onClick:t[17]||(t[17]=e=>((0,l.unref)(p)({data:(0,l.unref)(s),list:[(0,l.unref)(i).Inof.Uid]}),(0,l.isRef)(i)?i.value=!1:i=!1))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("启动脚本")])),_:1}),(0,l.createVNode)(O,{type:"primary",onClick:t[18]||(t[18]=e=>((0,l.unref)(m)({list:[(0,l.unref)(i).Inof.Uid]}),(0,l.isRef)(i)?i.value=!1:i=!1))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("停止脚本")])),_:1}),(0,l.createVNode)(O,{type:"primary",onClick:t[19]||(t[19]=e=>((0,l.unref)(g)({list:[(0,l.unref)(i).Inof.Uid],data:(0,l.unref)(s)}),(0,l.isRef)(i)?i.value=!1:i=!1))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("登录账号")])),_:1})])])),default:(0,l.withCtx)((()=>[(0,l.createElementVNode)("p",null," 总余额："+(0,l.toDisplayString)((0,l.unref)(i).Inof.Balance)+" 设备ID："+(0,l.toDisplayString)((0,l.unref)(i).Inof.Uid)+" 分辨率："+(0,l.toDisplayString)((0,l.unref)(i).Inof.Size.Width)+"*"+(0,l.toDisplayString)((0,l.unref)(i).Inof.Size.Height)+"-"+(0,l.toDisplayString)((0,l.unref)(i).Inof.Name),1),(0,l.createVNode)(W,{type:"border-card",class:"mt10",modelValue:(0,l.unref)(i).Inof.Name,"onUpdate:modelValue":t[16]||(t[16]=e=>(0,l.unref)(i).Inof.Name=e)},{default:(0,l.withCtx)((()=>[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)((0,l.unref)(i).Accounts,((e,o)=>((0,l.openBlock)(),(0,l.createBlock)(G,{label:e.Name,name:e.Name,key:o},{default:(0,l.withCtx)((()=>[(0,l.createElementVNode)("p",null,"成功："+(0,l.toDisplayString)(e.Success),1),(0,l.createElementVNode)("p",null,"失败："+(0,l.toDisplayString)(e.Fail),1),(0,l.createElementVNode)("p",null,"收益："+(0,l.toDisplayString)(e.Income),1),(0,l.createElementVNode)("p",null,"余额："+(0,l.toDisplayString)(e.Balance),1),(0,l.createVNode)(O,{type:"primary",onClick:t[15]||(t[15]=e=>((0,l.unref)(m)({list:[(0,l.unref)(i).Inof.Uid]}),(0,l.isRef)(i)?i.value=!1:i=!1))},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("清除账户")])),_:1})])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])):(0,l.createCommentVNode)("",!0)],64)}}};var _=(0,o(89).Z)(I,[["__scopeId","data-v-59e05862"]])}}]);