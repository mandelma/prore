"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[747],{8747:function(e,t,u){u.r(t),u.d(t,{default:function(){return g}});var o=u(6768),r=u(4232);const n=["onClick"];function a(e,t,u,a,s,l){const d=(0,o.g2)("MDBCardTitle"),i=(0,o.g2)("MDBCardText"),k=(0,o.g2)("MDBCardFooter"),c=(0,o.g2)("MDBCardBody"),g=(0,o.g2)("MDBCard"),m=(0,o.g2)("MDBContainer");return(0,o.uX)(),(0,o.Wv)(m,{style:{"padding-top":"50px"}},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.notes,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id},[(0,o.bF)(g,{text:"white",bg:"dark",class:"mb-3"},{default:(0,o.k6)((()=>[(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,{style:{display:"flex","justify-content":"right",color:"limegreen"}},{default:(0,o.k6)((()=>[(0,o.Lk)("p",{style:{cursor:"pointer"},onClick:t=>l.removeNote(e.id)},"Selvä",8,n)])),_:2},1024),(0,o.bF)(i,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(e.content),1)])),_:2},1024),(0,o.bF)(k,{class:"text-muted"},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(s.dateStr(e.time)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128))])),_:1})}var s=u(5846);const l=e=>{const t=[];t[0]="Tammikuu",t[1]="Helmikuu",t[2]="Maaliskuu",t[3]="Huhtikuu",t[4]="Toukokuu",t[5]="Kesäkuu",t[6]="Heinäkuu",t[7]="Elokuu",t[8]="Syyskuu",t[9]="Lokakuu",t[10]="Marraskuu",t[11]="Joulukuu",console.log("Date... "+e);const u=new Date(e);let o=u.getHours(),r=u.getMinutes();o=o<10?"0"+o:o,r=r<10?"0"+r:r;let n=o+":"+r;return u.getDate()+" "+t[new Date(e).getMonth()]+" "+u.getFullYear()+" "+n};var d=l,i={name:"Messages",props:{notes:Array},components:{MDBContainer:s.Dj,MDBCard:s.kv,MDBCardBody:s.ee,MDBCardTitle:s.gw,MDBCardText:s.tV,MDBCardFooter:s.$c},data(){return{user:null,messages:this.notes,dateStr:d}},mounted(){const e=window.localStorage.getItem("loggedAppUser");e&&(this.user=JSON.parse(e))},methods:{async removeNote(e){this.$emit("remove_note",e)}}},k=u(1241);const c=(0,k.A)(i,[["render",a]]);var g=c}}]);
//# sourceMappingURL=747.2f22e49f.js.map