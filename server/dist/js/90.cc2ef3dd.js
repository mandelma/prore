"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[90],{2165:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(3396);function o(e,t,n,o,r,s){const a=(0,i.up)("ContentToHome");return(0,i.wg)(),(0,i.j4)(a,{msg:"kiitos, että päätit käyttää alustaamme!"})}var r=n.p+"img/deal.91bd0280.png";const s=e=>((0,i.dD)("data-v-10057ce6"),e=e(),(0,i.Cn)(),e),a={id:"content"},d={id:"inner",class:"text-center"},l=s((()=>(0,i._)("img",{class:"mb-4",src:r,alt:"logo",style:{width:"360px"}},null,-1))),c=s((()=>(0,i._)("h1",{class:"solution"},"Nopeat ratkaisut kauttamme",-1))),u={style:{"margin-top":"30px"}};function g(e,t,n,o,r,s){const g=(0,i.up)("MDBCol"),h=(0,i.up)("MDBRow"),p=(0,i.up)("MDBBtn"),m=(0,i.up)("MDBContainer");return(0,i.wg)(),(0,i.j4)(m,{id:"main"},{default:(0,i.w5)((()=>[(0,i._)("div",a,[(0,i._)("div",d,[l,(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{lg:"2"}),(0,i.Wm)(g,{lg:"8"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(g,{lg:"2"})])),_:1}),(0,i._)("div",u,[(0,i.Wm)(p,{class:"prore-receive",size:"lg",color:"info",onClick:s.recipientButton},{default:(0,i.w5)((()=>[(0,i.Uk)("Etsin palvelua")])),_:1},8,["onClick"]),(0,i.Wm)(p,{class:"prore-offer",white:"",size:"lg",color:"warning",onClick:s.provideButton},{default:(0,i.w5)((()=>[(0,i.Uk)("Tarjoan palvelua")])),_:1},8,["onClick"])])])])])),_:1})}n(7658);var h=n(4313),p=n(4870),m=n(9242);const w={name:"home-page",props:{msg:String,userIsProvider:Object},components:{MDBContainer:h.L5,MDBBtn:h.$v,MDBRow:h.uZ,MDBCol:h.TK},setup(){const e=(0,p.iH)(window.innerWidth),t=(0,p.iH)(window.innerHeight);return{mainWidth:e,mainHeight:t}},data(){return{userLogged:null,isPressedProviderBtn:!1,isPressedReceiverBtn:!1}},created(){},mounted(){const e=window.localStorage.getItem("loggedAppUser");if(e){const t=JSON.parse(e);this.userLogged=t}this.mainWidth=window.innerWidth,this.mainHeight=window.innerHeight},methods:{resizeMainPage(){const e=document.getElementById("main");e&&(e.style.width=`${this.mainWidth}px`,e.style.height=`${this.mainHeight}px`,console.log("Height::: "+this.mainHeight))},resizeMainContent(){const e=document.getElementById("content"),t=document.getElementById("inner");e&&console.log("Inner height "+t.clientHeight),console.log("Inner divided height "+(this.mainHeight-t.clientHeight)/2),e&&(e.style.paddingTop=(this.mainHeight-t.clientHeight-90)/2+"px")},recipientButton(){this.$router.push("/recipient-form")},provideButton(){this.$router.push({name:"provider-public"})},submitProvider(){this.$router.push({name:"provider-public"})},backToDashboard(){this.isPressedProviderBtn=!1}}},v=()=>{(0,m.sj)((e=>({"8d745302":e.windowWidth,"55a5ff8e":e.windowHeight})))},B=w.setup;w.setup=B?(e,t)=>(v(),B(e,t)):v;var f=w,H=n(89);const k=(0,H.Z)(f,[["render",g],["__scopeId","data-v-10057ce6"]]);var C=k,_={name:"dash-board",components:{ContentToHome:C}};const W=(0,H.Z)(_,[["render",o]]);var b=W}}]);
//# sourceMappingURL=90.cc2ef3dd.js.map