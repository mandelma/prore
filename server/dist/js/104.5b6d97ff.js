"use strict";(self["webpackChunkprore_mongo"]=self["webpackChunkprore_mongo"]||[]).push([[104],{4482:function(t,e,i){var a=i(6768);const s=({message:t})=>null===t?null:(0,a.bF)("div",{className:"error"},[t,(0,a.bF)("img",{className:"errorImg",alt:"error",src:i(1644)},null)]);e.A=s},8104:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var a=i(6768),s=i(4232);const n={style:{display:"flex","justify-content":"right",padding:"13px"}},o={class:"container mt-5"},r={class:"text-center mb-4"},l={style:{"min-width":"19px","font-size":"14px"}},g={style:{"min-width":"19px","font-size":"14px"}},d=["disabled"];function u(t,e,i,u,c,h){const m=(0,a.g2)("MDBBtnClose"),p=(0,a.g2)("warning-message"),v=(0,a.g2)("error-message"),k=(0,a.g2)("MDBIcon"),b=(0,a.g2)("MDBBadge"),f=(0,a.g2)("MDBCol"),R=(0,a.g2)("MDBRow"),C=(0,a.g2)("MDBTextarea"),M=(0,a.g2)("MDBCardBody"),y=(0,a.g2)("MDBCard"),B=(0,a.g2)("MDBContainer");return(0,a.uX)(),(0,a.Wv)(B,{style:{"padding-top":"50px"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",n,[(0,a.bF)(m,{white:"",onClick:h.backFromFeedbackClient},null,8,["onClick"])]),(0,a.bF)(p,{message:c.rateWarning},null,8,["message"]),(0,a.bF)(v,{message:c.ratingError},null,8,["message"]),(0,a.Lk)("div",o,[(0,a.bF)(y,{text:"white",bg:"dark",class:"p-4"},{default:(0,a.k6)((()=>[(0,a.bF)(M,null,{default:(0,a.k6)((()=>[(0,a.Lk)("h3",r,(0,s.v_)(i.customer.company)+" odottaa palautetta tarjoamastaan palvelusta!",1),(0,a.bF)(R,{style:{"margin-bottom":"30px"},class:"mb-3"},{default:(0,a.k6)((()=>[(0,a.bF)(f,{col:"6"},{default:(0,a.k6)((()=>[(0,a.bF)(k,{style:{padding:"10px",cursor:"pointer"},i:"",class:"fas fa-smile",size:"3x",onClick:h.ratePlus},null,8,["onClick"]),(0,a.bF)(b,{color:"success",class:"translate-middle p-1",pill:"",notification:""},{default:(0,a.k6)((()=>[(0,a.Lk)("p",l,(0,s.v_)(c.positiveRating),1)])),_:1})])),_:1}),(0,a.bF)(f,{col:"6"},{default:(0,a.k6)((()=>[(0,a.bF)(k,{style:{padding:"10px",cursor:"pointer"},class:"far fa-frown",size:"3x",onClick:h.rateMinus},null,8,["onClick"]),(0,a.bF)(b,{color:"danger",class:"translate-middle p-1",pill:"",notification:""},{default:(0,a.k6)((()=>[(0,a.Lk)("p",g,(0,s.v_)(c.negativeRating),1)])),_:1})])),_:1})])),_:1}),c.isRatingGiven?((0,a.uX)(),(0,a.Wv)(C,{key:0,white:"",modelValue:c.feedbackContent,"onUpdate:modelValue":e[0]||(e[0]=t=>c.feedbackContent=t),type:"textarea",label:"Additional Comments",rows:"3",class:"mb-3"},null,8,["modelValue"])):(0,a.Q3)("",!0),(0,a.Lk)("button",{class:"mt-4 w-full bg-blue-500 text-white py-2 rounded-md disabled:opacity-50",onClick:e[1]||(e[1]=(...t)=>h.confirmFeedback&&h.confirmFeedback(...t)),disabled:!c.isRatingGiven}," Lähettää palaute ",8,d)])),_:1})])),_:1}),e[3]||(e[3]=(0,a.Lk)("br",null,null,-1)),(0,a.Lk)("p",{style:{float:"right",color:"#e4548e",cursor:"pointer"},onClick:e[2]||(e[2]=(...t)=>h.noRatingToConfirm&&h.noRatingToConfirm(...t))},"Ei halua antaa palautetta"),e[4]||(e[4]=(0,a.Lk)("br",null,null,-1)),e[5]||(e[5]=(0,a.Lk)("br",null,null,-1))])])),_:1})}i(4114),i(8111),i(116);var c=i(5846),h=i(6765);const m=({message:t})=>null===t?null:(0,a.bF)("div",{className:"warning"},[t]);var p=m,v=i(4482),k=(i(407),i(1769)),b=i(3198),f=i(2815),R={name:"Feedback",props:{customer:Object},components:{monthConverter:h.A,warningMessage:p,errorMessage:v.A,MDBContainer:c.Dj,MDBBtn:c.al,MDBRow:c.gU,MDBCol:c.m6,MDBIcon:c.$u,MDBBadge:c.nf,MDBTextarea:c.QP,MDBTable:c.EU,MDBBtnClose:c.uR,MDBCard:c.kv,MDBCardBody:c.ee,MDBInput:c.gk,MDBRadio:c.Zq},data(){return{author:null,fbc:{},isRatingGiven:!1,isReview:!1,ratedTimes:0,isRatedPos:!1,isRatedMinus:!1,positiveRating:0,negativeRating:0,feedbackContent:"",rateWarning:null,ratingError:null,rating:0}},methods:{reload(){location.reload()},async getClient(t){const e=await b.A.getClientHistory(),i=e.find((t=>"no rated"===t.status));this.positiveRating=i.rating.positive,this.negativeRating=i.rating.negative,this.fbc=i},ratePlus(){this.isRated=!0,console.log("Pos rating before "+this.positiveRating),this.isRatedMinus?(console.log("Not, only one time is allowed!"),this.rateWarning="Arvostella saa vain kerran!",setTimeout((()=>{this.rateWarning=null}),3e3)):(this.ratedTimes+=1,1===this.ratedTimes?(this.positiveRating=this.positiveRating+1,console.log("Pos rating after "+this.positiveRating),this.isRatingGiven=!0):(console.log("Not, only one time is allowed!"),this.rateWarning="Arvostella saa vain kerran!",setTimeout((()=>{this.rateWarning=null}),3e3)),this.isRatedPlus=!0,this.isRatedMinus=!1)},rateMinus(){this.isRated=!0,this.isRatedPlus?(this.rateWarning="Arvostella saa vain kerran, negatiivisen tai positiivisen!",setTimeout((()=>{this.rateWarning=null}),3e3)):(this.ratedTimes+=1,1===this.ratedTimes?(this.negativeRating=this.negativeRating+1,this.isRatingGiven=!0):(this.rateWarning="Arvostella saa vain kerran, negatiivisen tai positiivisen!",setTimeout((()=>{this.rateWarning=null}),3e3)),this.isRatedPlus=!1,this.isRatedMinus=!0)},async confirmFeedback(){const t=this.customer.proID,e=new Date,i=(0,f.Ay)(e,"dd-mm-yyyy,  HH:MM"),a={pos:i+": ( "+this.author.username+" ) "+this.feedbackContent},s={neg:i+": ( "+this.author.username+" ) "+this.feedbackContent},n={positive:this.positiveRating,negative:this.negativeRating};this.feedbackContent.length>0&&(this.isRatedPlus&&(await k.A.addPositiveFeedback(t,a),this.feedbackContent=""),this.isRatedMinus&&(console.log("Rated minus"),await k.A.addNegativeFeedback(t,s),this.feedbackContent="")),this.isRatedPlus&&(await k.A.setPositiveRating(t),this.$emit("isRated",this.customer.proID,"positiivista",this.customer.company,n),this.$router.go(-1)),this.isRatedMinus&&(await k.A.setNegativeRating(t),this.$emit("isRated",this.customer.proID,"negatiivista",this.customer.company,n),this.$router.go(-1))},noRatingToConfirm(){this.$emit("isRated",this.customer.proID,"no-rating",this.customer.company),this.$router.go(-1)},backFromFeedbackClient(){this.$router.go(-1)}},mounted(){const t=window.localStorage.getItem("loggedAppUser");if(t){const e=JSON.parse(t);this.author=e,this.positiveRating=this.customer.rating.positive,this.negativeRating=this.customer.rating.negative}else this.$router.push("/")}},C=i(1241);const M=(0,C.A)(R,[["render",u]]);var y=M},1644:function(t,e,i){t.exports=i.p+"img/error.9510853e.png"}}]);
//# sourceMappingURL=104.5b6d97ff.js.map