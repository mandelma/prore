"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[917],{4917:function(e,i,t){t.r(i),t.d(i,{default:function(){return k}});var o=t(6768),s=t(4232);const l={key:0},r={key:1};function n(e,i,t,n,a,u){const d=(0,o.g2)("MDBBtn"),c=(0,o.g2)("MDBCol"),m=(0,o.g2)("MDBRow"),k=(0,o.g2)("MDBContainer");return(0,o.uX)(),(0,o.CE)(o.FK,null,[i[2]||(i[2]=(0,o.Lk)("div",{style:{"padding-top":"20px"}},"Admin sivu:",-1)),(0,o.bF)(k,null,{default:(0,o.k6)((()=>[(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,{color:"secondary",block:"",size:"lg",onClick:u.printProviders},{default:(0,o.k6)((()=>i[0]||(i[0]=[(0,o.eW)(" Teenuse pakkujad ")]))),_:1},8,["onClick"]),(0,o.bF)(d,{color:"secondary",block:"",size:"lg",onClick:u.getMore},{default:(0,o.k6)((()=>i[1]||(i[1]=[(0,o.eW)(" Teenuse saajad ")]))),_:1},8,["onClick"])])),_:1}),(0,o.bF)(c,null,{default:(0,o.k6)((()=>[a.isGetProviders?((0,o.uX)(),(0,o.CE)("div",l,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.dataList,(e=>((0,o.uX)(),(0,o.CE)("ul",{key:e.id},[(0,o.Lk)("li",null,(0,s.v_)(e.user.firstName),1)])))),128))])):e.isGetMore?((0,o.uX)(),(0,o.CE)("div",r," Here is "+(0,s.v_)(a.more),1)):(0,o.Q3)("",!0)])),_:1})])),_:1})])),_:1})],64)}t(1454);var a=t(5846),u=t(1769),d={name:"AdminPanel",components:{MDBContainer:a.Dj,MDBRow:a.gU,MDBCol:a.m6,MDBBtn:a.al},data(){return{isGetProviders:!1,isGetmore:"",dataList:[],more:""}},methods:{async printProviders(){const e=await u.A.getProviders();this.dataList=e,this.isGetProviders=!0,this.isGetMore=!1},getMore(){this.more="more info...",this.isGetMore=!0,this.isGetProviders=!1},filter(){console.log("Filtering...");const e=[{item:"Yks",isTrue:!1},{item:"Kaks",isTrue:!0},{item:"Kolm",isTrue:!1},{item:"Neli",isTrue:!0},{item:"Viis",isTrue:!0}];e.map((e=>console.log(e.item)));let i=e.filter((e=>!e.isTrue));i.map((e=>console.log("selected false: "+e.item)));let t=e.filter((e=>e.isTrue));t.map((e=>console.log("selected: "+e.item)));let o=t.concat(i);o.map((e=>console.log("Final items: "+e.item)))}}},c=t(1241);const m=(0,c.A)(d,[["render",n]]);var k=m}}]);
//# sourceMappingURL=917.3d56bd12.js.map