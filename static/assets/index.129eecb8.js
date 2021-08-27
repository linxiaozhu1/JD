var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,c=(e,a)=>{for(var o in a||(a={}))s.call(a,o)&&n(e,o,a[o]);if(t)for(var o of t(a))r.call(a,o)&&n(e,o,a[o]);return e},i=(e,t)=>a(e,o(t));import{r as l,o as d,c as u,a as m,b as p,F as k,k as y,u as f,d as g,e as v,f as h,g as b,t as w,h as P,w as C,i as j,_ as A,j as _,l as I,m as x,n as L,p as S,q as U,s as V,v as N}from"./vendor.6b366356.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();const O={class:"main"},R={setup:e=>(e,a)=>{const o=l("Header"),t=l("router-view");return d(),u(k,null,[m(o),p("div",O,[m(t)])],64)}};const Q=y.create({prefixUrl:"/api",retry:{limit:0}});const D={setup(){const e=f();g();const a=v("");let o=h({nickName:void 0,timestamp:void 0});const t=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void s();const t=await function(e){const a=new URLSearchParams;return a.set("eid",e),Q.get("userinfo",{searchParams:a}).json()}(e);if(!t)return A.error("获取用户信息失败，请重重新登录"),void s();o.nickName=t.data.nickName,o.timestamp=new Date(t.data.timestamp).toLocaleString(),a.value=t.data.remark}catch(e){console.error(e)}};b(t);const s=()=>{localStorage.removeItem("eid"),e.push("/login")};return i(c({},w(o)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"京东试用",address:"京东APP-首页/十个小图标滑倒最右边-更多频道-0元试用(新品试用)"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:t,logout:s,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return Q.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?A.error(a.message):(A.success(a.message),setTimeout((()=>{s()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)},submitRemark:async()=>{try{const e=localStorage.getItem("eid");if(!e)return void s();const o={eid:e,remark:a.value};console.log(o);const t=await function(e){return Q.post("update/remark",{json:e}).json()}(o);A.success(t.message)}catch(e){console.error(e)}},remark:a})}},q={class:"content"},E={class:"card"},z=p("div",{class:"card-header"},[p("p",{class:"card-title"},"个人中心")],-1),K={class:"card-body"},T={class:"card-footer"},$=I("退出登录"),J=I("删除账号"),Z={class:"card"},B=p("div",{class:"card-header"},[p("p",{class:"card-title"},"添加备注通知管理员"),p("span",{class:"card-subtitle"}," 备注用于识别用户消息通知，登陆请先配置一次。定期会清除没有备注或备注格式不正确的的账号 "),p("p",null,[p("span",{class:"card-subtitle"}," 备注示例: 张三&08.27（姓名/微信 & 上车日期） ")])],-1),H={class:"card-body"},W={class:"card-footer"},F=I("提交"),M={class:"card"},X=p("div",{class:"card-header"},[p("p",{class:"card-title"},"常见活动位置"),p("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1),G={class:"card-body"},Y={class:"pr-2"},ee=["onClick"];D.render=function(e,a,o,t,s,r){const n=l("el-button"),c=l("el-input");return d(),u("div",q,[p("div",E,[z,p("div",K,[p("p",null,"昵称："+P(e.nickName),1),p("p",null,"更新时间："+P(e.timestamp),1)]),p("div",T,[m(n,{size:"small",auto:"",onClick:t.logout},{default:C((()=>[$])),_:1},8,["onClick"]),m(n,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:C((()=>[J])),_:1},8,["onClick"])])]),p("div",Z,[B,p("div",H,[m(c,{modelValue:t.remark,"onUpdate:modelValue":a[0]||(a[0]=e=>t.remark=e)},null,8,["modelValue"])]),p("div",W,[m(n,{type:"primary",size:"small",auto:"",onClick:t.submitRemark},{default:C((()=>[F])),_:1},8,["onClick"])])]),p("div",M,[X,p("div",G,[p("ul",null,[(d(!0),u(k,null,j(t.activity,((e,a)=>(d(),u("li",{key:a,class:"leading-normal"},[p("span",null,P(e.name)+"：",1),p("span",Y,P(e.address),1),e.href?(d(),u("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>t.openUrlWithJD(e.href)},"直达链接",8,ee)):_("",!0)])))),128))])])])])};const ae={setup(){const e=f();g();const a={}.VITE_NINJA_UA;let o=h({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1});const t=async()=>{try{const e=(await Q.get("info").json()).data;o.marginCount=e.marginCount,o.allowAdd=e.allowAdd}catch(e){console.error(e)}},s=async()=>{try{const e=await Q.get("qrcode").json();o.token=e.data.token,o.okl_token=e.data.okl_token,o.cookies=e.data.cookies,o.QRCode=e.data.QRCode,o.QRCode&&(o.waitLogin=!0,clearInterval(o.timer),o.timer=setInterval(r,3e3))}catch(e){console.error(e),A.error("生成二维码失败！请重试或放弃")}},r=async()=>{console.log(a);try{const t=await function(e){return Q.post("check",{json:e}).json()}({token:o.token,okl_token:o.okl_token,cookies:o.cookies,ua:a});switch(null==t?void 0:t.data.errcode){case 0:localStorage.setItem("eid",t.data.eid),A.success(t.message),clearInterval(o.timer),e.push("/");break;case 176:break;default:A.error(t.message),o.waitLogin=!1,clearInterval(o.timer)}}catch(t){clearInterval(o.timer),o.waitLogin=!1}};return b((()=>{t(),s()})),i(c({},w(o)),{getInfo:t,getQrcode:s,showQrcode:async()=>{o.qrCodeVisibility=!0},ckeckLogin:r,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${o.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const e=o.cookie.match(/pt_key=(.*?);/)&&o.cookie.match(/pt_key=(.*?);/)[1],a=o.cookie.match(/pt_pin=(.*?);/)&&o.cookie.match(/pt_pin=(.*?);/)[1];if(e&&a){const o=await function(e){return Q.post("cklogin",{json:e}).json()}({pt_key:e,pt_pin:a});200===o.code&&o.data.eid?(localStorage.setItem("eid",o.data.eid),A.success(o.message)):A.error(o.message||"cookie 解析失败，请检查后重试！")}else A.error("cookie 解析失败，请检查后重试！")}catch(e){console.error(e)}}})}},oe={class:"content"},te=x('<div class="card"><div class="card-header"><p class="card-title">公告！！！</p><span class="card-subtitle">     请认真阅读并同意以下内容 </span></div><div class="card-body"><p> ①，使用京东扫描二维码登录，提示升级版本无需理会，直接回到网页等待跳转，登录成功显示用户名或者提示添加成功即自动上车。 </p><p>②，使用手机用户可以点击跳转到京东，点击一键登录，然后直接回到浏览器，强烈建议修改备注为扫码日期+网名。</p><p>③，在登录以后页面，打开微信扫描推送二维码关注，申请加入，通过以后即可收取任务通知。</p><p>④，点退出登录，返回这个页面刷新网页，即可添加或更新第二个账号，不要随便点击删除账号。</p><p>⑤，扫码登录Cookie正常有效期最多1个月，建议15天重新登陆一次</p><p>⑥，已经上车的账号再次扫描登陆自动替换最新Cookie。Cookie失效长时间不替换的自动踢出车位。</p><p>⑦，为了你的财产安全，强烈建议关闭免密支付并且开启支付验证密码。</p></div></div>',1),se={class:"card"},re={class:"card-header"},ne={class:"flex items-center justify-between"},ce=p("p",{class:"card-title"},"扫码登录",-1),ie={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},le=p("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1),de={class:"card-body text-center"},ue={key:0,class:"flex flex-col w-48 m-auto mt-4"},me=I("扫描二维码登录"),pe=I("跳转到京东 App 登录"),ke=["src"],ye=p("div",{class:"card-footer"},null,-1),fe={class:"card hidden"},ge={class:"card-header"},ve={class:"flex items-center justify-between"},he=p("p",{class:"card-title"},"CK 登录",-1),be={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},we=p("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),Pe={class:"card-body text-center"},Ce=I("登录"),je=p("div",{class:"card-footet"},null,-1);ae.render=function(e,a,o,t,s,r){const n=l("el-button"),c=l("el-input");return d(),u("div",oe,[te,p("div",se,[p("div",re,[p("div",ne,[ce,p("span",ie,"余量："+P(e.marginCount),1)]),le]),p("div",de,[e.qrCodeVisibility?(d(),u("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,ke)):(d(),u("div",ue,[m(n,{type:"primary",round:"",onClick:t.showQrcode},{default:C((()=>[me])),_:1},8,["onClick"]),m(n,{class:"mt-4 ml-0",type:"primary",round:"",onClick:t.jumpLogin},{default:C((()=>[pe])),_:1},8,["onClick"])]))]),ye]),p("div",fe,[p("div",ge,[p("div",ve,[he,p("span",be,"余量："+P(e.marginCount),1)]),we]),p("div",Pe,[m(c,{modelValue:e.cookie,"onUpdate:modelValue":a[0]||(a[0]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),m(n,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:C((()=>[Ce])),_:1},8,["onClick"])]),je])])};const Ae=[{path:"/",component:D},{path:"/login",component:ae}],_e=L({history:S(),routes:Ae}),Ie=[V,N,A],xe=[A],Le=U(R);Ie.forEach((e=>{Le.component(e.name,e)})),xe.forEach((e=>{Le.use(e)})),Le.use(_e),Le.mount("#app");
