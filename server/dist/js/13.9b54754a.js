"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[13],{6013:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=n(6768),r=n(4232);const a=["onClick"];function s(e,t,n,s,l,d){const u=(0,o.g2)("MDBCardTitle"),i=(0,o.g2)("router-link"),c=(0,o.g2)("MDBCardText"),g=(0,o.g2)("msg-content"),k=(0,o.g2)("df"),p=(0,o.g2)("MDBCardFooter"),C=(0,o.g2)("MDBCardBody"),v=(0,o.g2)("MDBCard"),m=(0,o.g2)("MDBContainer");return(0,o.uX)(),(0,o.Wv)(m,{style:{"padding-top":"50px"}},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.notes,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id},[(0,o.bF)(v,{text:"white",bg:"dark",class:"msgCardStyle"},{default:(0,o.k6)((()=>[(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,{style:{display:"flex","justify-content":"right",color:"limegreen","padding-right":"20px"}},{default:(0,o.k6)((()=>[(0,o.Lk)("p",{style:{cursor:"pointer"},onClick:t=>d.removeNote(e)},"Selvä",8,a)])),_:2},1024),e.isLink?((0,o.uX)(),(0,o.Wv)(c,{key:0},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(e.content)+" ",1),(0,o.bF)(i,{to:"/provider-panel",onClick:t=>d.removeNote(e)},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("kalenterissa!")]))),_:2},1032,["onClick"])])),_:2},1024)):((0,o.uX)(),(0,o.Wv)(c,{key:1},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(e.content)+" ",1),""!==e.reason?((0,o.uX)(),(0,o.Wv)(g,{key:0,reason:e.reason},null,8,["reason"])):(0,o.Q3)("",!0)])),_:2},1024)),(0,o.bF)(p,{class:"text-muted"},{default:(0,o.k6)((()=>[(0,o.bF)(k,{date:e.time},null,8,["date"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128))])),_:1})}var l=n(5846),d=n(907);const u={style:{color:"cadetblue"}};function i(e,t,n,a,s,l){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("p",u,[t[0]||(t[0]=(0,o.Lk)("span",{style:{color:"#35bbc7"}},"Syynä:",-1)),(0,o.eW)(" "+(0,r.v_)(n.reason),1)])])}var c={name:"MessageContent",props:{reason:String}},g=n(1241);const k=(0,g.A)(c,[["render",i]]);var p=k,C={name:"Messages",props:{notes:Array},components:{df:d.A,MDBContainer:l.Dj,MDBCard:l.kv,MDBCardBody:l.ee,MDBCardTitle:l.gw,MDBCardText:l.tV,MDBCardFooter:l.$c,msgContent:p},data(){return{user:null,messages:this.notes}},mounted(){const e=window.localStorage.getItem("loggedAppUser");e&&(this.user=JSON.parse(e))},methods:{async removeNote(e){this.$emit("remove_note",e)}}};const v=(0,g.A)(C,[["render",s],["__scopeId","data-v-22ac4873"]]);var m=v}}]);
//# sourceMappingURL=13.9b54754a.js.map