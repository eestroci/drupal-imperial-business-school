(self.webpackChunkweb=self.webpackChunkweb||[]).push([[78878],{7922:(e,t,i)=>{"use strict";i.d(t,{Z:()=>v});var o=i(67294),n=i(37974),r=i(29208),a=i.n(r),l=i(84149),s=i(85882),d=i(61248),p=i(33487),u=i(72307),c=i.n(u);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},g.apply(this,arguments)}const v=(e,t)=>{const i=i=>{const[n,r]=(0,o.useState)(null),[a,s]=(0,o.useState)(!1),[u,c]=(0,o.useState)(""),[v,m]=(0,o.useState)(""),[f,h]=(0,o.useState)(!1),{loadTOIPlusNudgeData:x,isWapView:y,geo:w,userData:b,homePagenudges:$,storyPageNudges:_,storyPageNudgesNew:k,primeStripNudges:P,payPerStoryNudges:S,inGracePeriod:O,graceDate:I,daysRemaining:T,ispreExpired:E,frmapp:D,bundleCardMessage:B,storyPageOffers:N,storyBlockerNewPaywall:C,toiHPWidget:R,loading:z}=i,Z=()=>{switch(t){case"homepage":return $;case"storypage":return _;case"storypagenew":return k;case"storyPagePinkStrip":return a?S:P;case"storyBlockerV3":return C;case"homepagerenewnudge":return R;default:return null}};let A=Z();(0,o.useEffect)((()=>{A=Z()}),[b,O,E]);const L=()=>{null!=w&&w.currentCountry&&x(y,null==w?void 0:w.currentCountry)};return(0,o.useEffect)((()=>{if((null==b||!b.isLoggedIn||z&&z!==l.Vu.LOADING)&&A){let e=(0,d.Qw)();for(;e>=0;){1!==e&&5!==e||(e=-1);const t=`prc${e}`;if(A[t]){r(A[t]);break}r(null),e-=1}}}),[A,b,O,E,z]),(0,o.useEffect)((()=>{var e,t;const i=null!=b&&b.prcValue?b.prcValue:0;(i!==p.BGv||i!==p.nxK)&&"undefined"!=typeof window&&(null===(e=sessionStorage)||void 0===e||null===(t=e.getItem("paidstories"))||void 0===t?void 0:t.length)>0&&s(!0),i!==p.nxK&&i!==p.BGv||(0,d.zw)()}),[b]),(0,o.useEffect)((()=>{if((null==b||!b.isLoggedIn||z&&z!==l.Vu.LOADING)&&A){let o=(0,d.Qw)(),n="";if(!y&&!D||!A.showFreeTrailBlocker||o!==p.OT&&o!==p.Gdt)if(o===p.nxK&&O&&!D){var e;if(n="grace",h(!1),A[n])c(null===(e=A[n].h1)||void 0===e?void 0:e.replace("<gracedate>",`${I}`)),r(A[n])}else if(o===p.nxK&&E&&!D){if(n="preExpiry",h(!1),A[n]){var t;const e=T>1?`${T} days`:"Today";m(null===(t=A[n].h1)||void 0===t?void 0:t.replace("<span class='expriedaysremaining'><remainingDays></span>",`${T>1?"in":""} <span class=expriedaysremaining>${e}</span>`)),r(A[n])}}else if(o===p.nxK&&O&&D){var i;if(n="frmappgrace",h(!1),A[n])c(null===(i=A[n].h1)||void 0===i?void 0:i.replace("<gracedate>",`${I}`)),r(A[n])}else for(h(!1);o>=0;){if(o!==p.BGv&&o!==p.nxK||(o=-1),n=`prc${o}`,A[n]){r(A[n]);break}r(null),o-=1}else if(h(!0),D){const e=A.frmapp_freeTrail||{};r(e)}else{const e=A.prc0_freeTrail||{};r(e)}}}),[A,b,O,E,z]),!w||!A||!n&&"storyPagePinkStrip"!==t&&"homepage"!==t&&"homepagerenewnudge"!==t||(1===(null==b?void 0:b.prcValue)||5===(null==b?void 0:b.prcValue))&&"storyPagePinkStrip"!==t&&"homepage"!==t&&"homepagerenewnudge"!==t||1===b.prcValue||5===b.prcValue&&!O&&T<0||5!==b.prcValue&&O||5!==b.prcValue&&E?"storypage"===t||"storypagenew"===t||"storyBlockerV3"===t?o.createElement(e,g({},i,{nudges:A,nudgeText:n,replaceDate:u,preExpireHeading:v,bundleCardMessage:B,storyPageOffers:N,geo:null==w?void 0:w.currentCountry,daysRemaining:T,onRetryToipTransCallback:L,showFreeTrailBlocker:f})):null:o.createElement(e,g({},i,{nudges:A,nudgeText:n,replaceDate:u,preExpireHeading:v,bundleCardMessage:B,storyPageOffers:N,geo:null==w?void 0:w.currentCountry,daysRemaining:T,onRetryToipTransCallback:L,showFreeTrailBlocker:f}))},r=function(){let e={geo:{},userData:{}};return t=>(c()(e,t)||(e=t),e)}();return i.defaultProps={isWapView:!1,userData:void 0,viewType:"",inGracePeriod:!1,graceDate:"",daysRemaining:0,ispreExpired:!1},(0,n.$j)((e=>{var t,i;return{transLoading:e.translationConfig.transLoading,homePagenudges:a()(e.translationConfig.nudges,"tpHomepageNudgesNew",null),storyPageNudges:a()(e.translationConfig.nudges,"tpArticlePayPerBlockernew",null),storyPageNudgesNew:a()(e.translationConfig.nudges,"storyBlockerNewNudge",null),primeStripNudges:a()(e.translationConfig.nudges,"renewalStoryStrip",null),payPerStoryNudges:a()(e.translationConfig.nudges,"PayPerStoryStrip",null),credStoryStrip:a()(e.translationConfig.nudges,"credStoryStrip",null),bundleCardMessage:a()(e.translationConfig.nudges,"bundleCardMessage",null),storyPageOffers:a()(e.translationConfig.nudges,"toiplusdomain.primeshow.Offers",null),toiHPWidget:a()(e.translationConfig.nudges,"toiHPWidget",null),userData:null===(t=r({userData:a()(e,"login.userData",{}),geo:a()(e,"geo",null)}))||void 0===t?void 0:t.userData,geo:null===(i=r({userData:a()(e,"login.userData",{}),geo:a()(e,"geo",null)}))||void 0===i?void 0:i.geo,userPrcData:e.login.userPrcData,unifiedNodes:a()(e.translationConfig.nudges,"unifiedNodes",null),loading:e.login.isLoading,storyBlockerNewPaywall:a()(e.translationConfig.nudges,"storyBlockerNewPaywall",null)}}),(e=>({loadTOIPlusNudgeData:(t,i)=>{e((0,s.PS)(t,i))},getUserPrcData:t=>e((0,l.qD)(t))})))(i)}},78878:(e,t,i)=>{"use strict";i.d(t,{Z:()=>ni});var o=i(67294),n=i(45697),r=i.n(n),a=i(61248),l=i(29208),s=i.n(l),d=i(33487),p=i(94829),u=i(96705),c=i(81419),g=i(88784),v=i(41663),m=i(42947),f=i(99408),h=i(40255),x=i(37974),y=i(54467),w=i(72688),b=i.n(w),$=i(19809),_=i(93998),k=i(7922),P=i(10204),S=i(72216),O=i(54620);let I,T,E,D,B,N,C,R,z,Z,A,L,H,V,j,G,M,W,U,F,Q,X,Y,K=e=>e;function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function J(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(Object(i),!0).forEach((function(t){ee(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function ee(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const te={storyBlocker:{border:"1px solid #F6F6F6",boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.04)",borderRadius:"12px",padding:"40px",paddingMobile:"16px",marginMobile:"16px"}},ie={storyBlockerInner:{display:"flex",alignItems:"center"}},oe={heading:{fontSize:"32px",lineHeight:"36px",color:"#1a1a1a",marginBottom:"24px",fontSizeMobile:"16px",lineHeightMobile:"24px",marginBottomMobile:"16px"}},ne={popup:{display:"none",position:"absolute",bottom:"32px",right:"-20px",background:"#1a1a1a",width:"417px",boxShadow:"0px 8px 25px rgba(0, 0, 0, 0.08)",borderRadius:"8px",zIndex:"1",widthMobile:"208px"}},re=(J(J({},ne),{},{popup:J(J({},ne.popup),{},{display:"flex"})}),$.Z.span(I||(I=K`
  position: ${0};
  width: ${0};
  height: ${0};
  right: ${0};
  top: ${0};
  cursor: ${0};
  &:before,
    &:after {
      position: ${0};
      content: ${0};
      width: ${0};
      height: ${0};
      left: ${0};
      top: ${0};
      background: ${0};
      transform: ${0};
    }
    &:before {
      transform: ${0};
    }
    &:after {
      transform: ${0};
    }
  @media screen and (max-width:767px) {
    right: ${0};
  }
`),(e=>{var t;return null===(t=e.styles.closeBtn)||void 0===t?void 0:t.position}),(e=>{var t;return null===(t=e.styles.closeBtn)||void 0===t?void 0:t.width}),(e=>{var t;return null===(t=e.styles.closeBtn)||void 0===t?void 0:t.height}),(e=>{var t;return null===(t=e.styles.closeBtn)||void 0===t?void 0:t.right}),(e=>{var t;return null===(t=e.styles.closeBtn)||void 0===t?void 0:t.top}),(e=>{var t;return null===(t=e.styles.closeBtn)||void 0===t?void 0:t.cursor}),(e=>{var t,i;return null===(t=e.styles)||void 0===t||null===(i=t.clsBtnArrow)||void 0===i?void 0:i.position}),(e=>{var t,i;return null===(t=e.styles)||void 0===t||null===(i=t.clsBtnArrow)||void 0===i?void 0:i.content}),(e=>{var t,i;return null===(t=e.styles)||void 0===t||null===(i=t.clsBtnArrow)||void 0===i?void 0:i.width}),(e=>{var t,i;return null===(t=e.styles)||void 0===t||null===(i=t.clsBtnArrow)||void 0===i?void 0:i.height}),(e=>{var t,i;return null===(t=e.styles)||void 0===t||null===(i=t.clsBtnArrow)||void 0===i?void 0:i.left}),(e=>{var t,i;return null===(t=e.styles)||void 0===t||null===(i=t.clsBtnArrow)||void 0===i?void 0:i.top}),(e=>{var t,i;return null===(t=e.styles)||void 0===t||null===(i=t.clsBtnArrow)||void 0===i?void 0:i.background}),(e=>{var t,i;return null===(t=e.styles)||void 0===t||null===(i=t.clsBtnArrow)||void 0===i?void 0:i.transform}),(e=>{var t,i;return null===(t=e.styles)||void 0===t||null===(i=t.clsBtnPrevArrow)||void 0===i?void 0:i.transform}),(e=>{var t,i;return null===(t=e.styles)||void 0===t||null===(i=t.clsBtnNextArrow)||void 0===i?void 0:i.transform}),(e=>{var t;return null===(t=e.styles.closeBtn)||void 0===t?void 0:t.mobileRight})),$.Z.div(T||(T=K`
  // background: url(https://static.toiimg.com/photo/99553042.cms) no-repeat;
  // backgroundsize: contain;
  border: ${0};
  box-shadow: ${0};
  border-radius: ${0};
  padding: ${0};
  @media screen and (max-width:767px) {
    padding: ${0};
    margin: ${0};
  }
  .gdprBlocker{
    display: flex;
    align-items: center;
    flex-flow: column;
  }
`),(e=>{var t;return null===(t=e.styles.storyBlocker)||void 0===t?void 0:t.border}),(e=>{var t;return null===(t=e.styles.storyBlocker)||void 0===t?void 0:t.boxShadow}),(e=>{var t;return null===(t=e.styles.storyBlocker)||void 0===t?void 0:t.borderRadius}),(e=>{var t;return null===(t=e.styles.storyBlocker)||void 0===t?void 0:t.padding}),(e=>{var t;return null===(t=e.styles.storyBlocker)||void 0===t?void 0:t.paddingMobile}),(e=>{var t;return null===(t=e.styles.storyBlocker)||void 0===t?void 0:t.marginMobile}))),ae=$.Z.div(E||(E=K`
// background: #fff;

  @media screen and (min-width:768px) {
    display: ${0};
    align-items: ${0};
  }

  .gdprHeading{
    text-align: center;
  }

  .btnGrp {
    margin-bottom:20px;
    @media screen and (min-width:768px) {
      display: flex;
    }

    a {
      font-size: 24px;
      line-height: 30px;
      font-weight: 700;
      padding: 24px 16px;
      border-radius: 12px;
      @media screen and (min-width:1000px) and (max-width:1420px) {
        font-size: 22px;
      }
      @media screen and (min-width:768px) and (max-width:999px) {
        font-size: 16px;
      }
      @media screen and (min-width:768px) {
        cursor: pointer;
        +a {
          margin-left: 12px;
        }
      }
      @media screen and (max-width:767px) {
        font-size: 12px;
        line-height: 16px;
        padding: 8px 16px;
        border-radius: 8px;
        display: block;
      }

      &.viewplan {
        color: #E21B22;
        font-weight: 600;
        text-align: center;
        font-size: 24px;
        line-height: 32px;
        margin-top: 20px;
        border: 1px solid #E21B22;
        @media screen and (max-width:767px) {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
        }
      }

      &.buyplan {
        background: #E21B22;
        color: #fff;
        text-align:center;
        flex:1;
        position: relative;
        z-index: 1;

        &:before, &:after {
          content: '';
          position: absolute;
          left:0;
          height: 100%;
          border-radius:inherit;
        }

        &:before {
          bottom: 0;
          width: 0%;
          background-color: rgba(26, 26, 26, 0.2);
          transition: all 0.5s;
          z-index: -1;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }

        &:after {
          width: 100%;
          background-color: #e21b22;
          top: 0;
          z-index: -2;
        }
        &:hover {
          background: #fff;
        }
      }
    }
  }
  .offer {
    display: flex;
    flex-flow: column;
    align-items: center;
    @media screen and (min-width:767px) {
      padding-top: 24px;
    }
    > p {
      font-size: 24px;
      font-weight: 700;
      line-height: 24px;
      color: #1A1A1A;
      text-align:center;
      strong {
        font-weight:600;
      }
      @media screen and (max-width:767px) {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
  @media screen and (min-width:768px) {
    .storyblockercontent {
      margin-left: 40px;
    }
  }
`),(e=>{var t;return null===(t=e.styles.storyBlockerInner)||void 0===t?void 0:t.display}),(e=>{var t;return null===(t=e.styles.storyBlockerInner)||void 0===t?void 0:t.alignItems})),le=($.Z.div(D||(D=K`
  @media screen and (max-width:767px) {
    display: ${0};
  }
`),(e=>{var t;return null===(t=e.styles.headingWrapper)||void 0===t?void 0:t.display})),$.Z.h2(B||(B=K`
  font-size: ${0};
  line-height: ${0};
  color: ${0};
  margin-bottom: ${0};
  @media screen and (max-width:767px) {
    font-size: ${0};
    line-height: ${0};
    margin-bottom: ${0};
  }
  img {
    vertical-align: top;
  }
`),(e=>{var t;return null===(t=e.styles.heading)||void 0===t?void 0:t.fontSize}),(e=>{var t;return null===(t=e.styles.heading)||void 0===t?void 0:t.lineHeight}),(e=>{var t;return null===(t=e.styles.heading)||void 0===t?void 0:t.color}),(e=>{var t;return null===(t=e.styles.heading)||void 0===t?void 0:t.marginBottom}),(e=>{var t;return null===(t=e.styles.heading)||void 0===t?void 0:t.fontSizeMobile}),(e=>{var t;return null===(t=e.styles.heading)||void 0===t?void 0:t.lineHeightMobile}),(e=>{var t;return null===(t=e.styles.heading)||void 0===t?void 0:t.marginBottomMobile}))),se=($.Z.h6(N||(N=K`
  font-size: ${0};
  line-height: ${0};
  color: ${0};
  font-weight: ${0};
  margin-bottom: ${0};
  @media screen and (max-width:767px) {
    font-size: ${0};
    line-height: ${0};
    margin-bottom: ${0};
  }
`),(e=>{var t;return null===(t=e.styles.subHeading)||void 0===t?void 0:t.fontSize}),(e=>{var t;return null===(t=e.styles.subHeading)||void 0===t?void 0:t.lineHeight}),(e=>{var t;return null===(t=e.styles.subHeading)||void 0===t?void 0:t.color}),(e=>{var t;return null===(t=e.styles.subHeading)||void 0===t?void 0:t.fontWeight}),(e=>{var t;return null===(t=e.styles.subHeading)||void 0===t?void 0:t.marginBottom}),(e=>{var t;return null===(t=e.styles.subHeading)||void 0===t?void 0:t.fontSizeMobile}),(e=>{var t;return null===(t=e.styles.subHeading)||void 0===t?void 0:t.lineHeightMobile}),(e=>{var t;return null===(t=e.styles.subHeading)||void 0===t?void 0:t.marginBottomMobile})),$.Z.ul(C||(C=K`
  margin-bottom: ${0};
  @media screen and (max-width:767px) {
    margin-bottom: ${0};
  }
`),(e=>{var t;return null===(t=e.styles.listWrapper)||void 0===t?void 0:t.marginBottom}),(e=>{var t;return null===(t=e.styles.listWrapper)||void 0===t?void 0:t.marginBottomMobile})),$.Z.li(R||(R=K`
  font-size: ${0};
  line-height: ${0};
  color: ${0};
  padding-left: ${0};
  position: ${0};
  &:not(:last-child) {
    margin-bottom: ${0};
  }
  @media screen and (max-width:767px) {
    font-size: ${0};
    line-height: ${0};
  }
  &:before, &:after {
  position: ${0};
  content: '';
  height: ${0};
  background: ${0};
  border-radius: ${0};
  }
  &:before {
    width: ${0};
    left: ${0};
    top: ${0};
    transform: ${0};
    @media screen and (max-width:767px) {
      top: ${0};
    }
  }
  &:after {
    width: ${0};
    left: ${0};
    top: ${0};
    transform: ${0};
    @media screen and (max-width:767px) {
      top: ${0};
    }
  }
`),(e=>{var t;return null===(t=e.styles.listItem)||void 0===t?void 0:t.fontSize}),(e=>{var t;return null===(t=e.styles.listItem)||void 0===t?void 0:t.lineHeight}),(e=>{var t;return null===(t=e.styles.listItem)||void 0===t?void 0:t.color}),(e=>{var t;return null===(t=e.styles.listItem)||void 0===t?void 0:t.paddingLeft}),(e=>{var t;return null===(t=e.styles.listItem)||void 0===t?void 0:t.position}),(e=>{var t;return null===(t=e.styles.listItem)||void 0===t?void 0:t.marginBottom}),(e=>{var t;return null===(t=e.styles.listItem)||void 0===t?void 0:t.fontSizeMobile}),(e=>{var t;return null===(t=e.styles.listItem)||void 0===t?void 0:t.lineHeightMobile}),(e=>{var t;return null===(t=e.styles.listItemIcon)||void 0===t?void 0:t.position}),(e=>{var t;return null===(t=e.styles.listItemIcon)||void 0===t?void 0:t.height}),(e=>{var t;return null===(t=e.styles.listItemIcon)||void 0===t?void 0:t.background}),(e=>{var t;return null===(t=e.styles.listItemIcon)||void 0===t?void 0:t.borderRadius}),(e=>{var t;return null===(t=e.styles.listItemIconBefore)||void 0===t?void 0:t.width}),(e=>{var t;return null===(t=e.styles.listItemIconBefore)||void 0===t?void 0:t.left}),(e=>{var t;return null===(t=e.styles.listItemIconBefore)||void 0===t?void 0:t.top}),(e=>{var t;return null===(t=e.styles.listItemIconBefore)||void 0===t?void 0:t.transform}),(e=>{var t;return null===(t=e.styles.listItemIconBefore)||void 0===t?void 0:t.topMobile}),(e=>{var t;return null===(t=e.styles.listItemIconAfter)||void 0===t?void 0:t.width}),(e=>{var t;return null===(t=e.styles.listItemIconAfter)||void 0===t?void 0:t.left}),(e=>{var t;return null===(t=e.styles.listItemIconAfter)||void 0===t?void 0:t.top}),(e=>{var t;return null===(t=e.styles.listItemIconAfter)||void 0===t?void 0:t.transform}),(e=>{var t;return null===(t=e.styles.listItemIconAfter)||void 0===t?void 0:t.topMobile})),$.Z.div(z||(z=K`
  position: ${0};
  width: ${0};
`),(e=>{var t;return null===(t=e.styles.infoWrapper)||void 0===t?void 0:t.position}),(e=>{var t;return null===(t=e.styles.infoWrapper)||void 0===t?void 0:t.width})),$.Z.div(Z||(Z=K`
  display: ${0};
  position: ${0};
  bottom: ${0};
  right: ${0};
  background: ${0};
  width: ${0};
  box-shadow: ${0};
  z-index: ${0};
  border-radius: ${0};
  @media screen and (max-width:767px) {
    width: ${0};
  }
  .closePopup {
    position: fixed;
    width:100%;
    height: 100%;
    left:0;
    top:0;
  }
`),(e=>{var t;return null===(t=e.styles.popup)||void 0===t?void 0:t.display}),(e=>{var t;return null===(t=e.styles.popup)||void 0===t?void 0:t.position}),(e=>{var t;return null===(t=e.styles.popup)||void 0===t?void 0:t.bottom}),(e=>{var t;return null===(t=e.styles.popup)||void 0===t?void 0:t.right}),(e=>{var t;return null===(t=e.styles.popup)||void 0===t?void 0:t.background}),(e=>{var t;return null===(t=e.styles.popup)||void 0===t?void 0:t.width}),(e=>{var t;return null===(t=e.styles.popup)||void 0===t?void 0:t.boxShadow}),(e=>{var t;return null===(t=e.styles.popup)||void 0===t?void 0:t.zIndex}),(e=>{var t;return null===(t=e.styles.popup)||void 0===t?void 0:t.borderRadius}),(e=>{var t;return null===(t=e.styles.popup)||void 0===t?void 0:t.widthMobile})),$.Z.div(A||(A=K`
  position: ${0};
  right: ${0};
  top: ${0};
  @media screen and (min-width:768px) {
    right: ${0};
    top: ${0};
  }
`),(e=>{var t;return null===(t=e.styles.info)||void 0===t?void 0:t.position}),(e=>{var t;return null===(t=e.styles.info)||void 0===t?void 0:t.right}),(e=>{var t;return null===(t=e.styles.info)||void 0===t?void 0:t.top}),(e=>{var t;return null===(t=e.styles.info)||void 0===t?void 0:t.desktopRight}),(e=>{var t;return null===(t=e.styles.info)||void 0===t?void 0:t.desktopTop})),$.Z.span(L||(L=K`
  font-size: ${0};
  line-height: ${0};
  color: ${0};
  font-weight: ${0};
  border: ${0};
  display: ${0};
  width: ${0};
  height: ${0};
  text-align: ${0};
  border-radius: ${0};

  @media screen and (min-width:768px) {
    cursor: ${0};
    font-size: ${0};
    line-height: ${0};
    width: ${0};
    height: ${0};
  }
`),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.fontSize}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.lineHeight}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.color}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.fontWeight}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.border}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.display}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.width}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.height}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.textAlign}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.borderRadius}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.cursor}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.desktopFontSize}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.desktopLineHeight}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.desktopWidth}),(e=>{var t;return null===(t=e.styles.infoIcon)||void 0===t?void 0:t.desktopHeight})),$.Z.div(H||(H=K`
  margin: 16px;
  border-radius: 0;
  background: #FFE9E2;
  padding: 8px;
  border: 1px solid #F6F6F6;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
`))),de=$.Z.div(V||(V=K`
  background: white;
  padding: 16px;
`)),pe=$.Z.h1(j||(j=K`
  font-size: 16px;
  line-height: 24px;
  margin-top: 0px;
  margin-bottom: 16px;
  font-weight: 400;
  color: #1a1a1a;
`)),ue=$.Z.h2(G||(G=K`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  color: #1a1a1a;
  font-weight: 600;
`)),ce=$.Z.p(M||(M=K`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 12px;
  color: #1a1a1a;
`)),ge=$.Z.ul(W||(W=K`
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #E6E6E6;
`)),ve=$.Z.li(U||(U=K`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  font-size: 15px;
  line-height: 24px;
  color: #595959;
  padding-left: 20px;
  position: relative;
  list-style: none;
  &::before {
    top: 8px;
    height: 7px;
    background: #ED193B;
    left: 2px;
    z-index: 10;
    transform: rotate(45deg);
  }
  &::after {
    display:none;
  }
  &::before, &::after {
    position: absolute;
    content: '';
    width: 7px !important;
  }
`)),me=$.Z.div(F||(F=K`
  margin-bottom: 12px;
  text-align: center;
  a {
    background: #E21B22;
    color: #fff;
    text-align: center;
    position: relative;
    z-index: 1;
    display: inline-block;
    margin: 0 auto;
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;
    padding: 6px 16px;
    width: 100%;
    font-weight: 700;
    &:before {
      bottom: 0;
      width: 0%;
      background-color: rgba(26, 26, 26, 0.2);
      transition: all 0.5s;
      z-index: -1;
    }
    &:after {
      width: 100%;
      background-color: #e21b22;
      top: 0;
      z-index: -2;
    }
    &:before, &:after{
      content: '';
      position: absolute;
      left: 0;
      height: 100%;
      border-radius: inherit;
    }
  }
`)),fe=$.Z.div(Q||(Q=K`
  text-align: center;

  a {
    font-size: 14px;
    color: #ED193B;
    text-decoration: underline;
    background-color: transparent;
  }
`)),he=$.Z.div(X||(X=K`
  text-align: center;

  div {
    background: transparent;
    color: #000000;
    font-size: 13px;
    padding: 0;

    a {
      font-size: 13px;
      text-decoration: underline;

      &:after {
        display: none;
      }
    }
  }
`));$.Z.div(Y||(Y=K`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 18px;
    text-align: center;
    line-height: 24px;
    & span{
      color: #E21B22;
    }
`));var xe,ye;function we(e,t,i,o){ye||(ye="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=o;else if(r>1){for(var a=new Array(r),l=0;l<r;l++)a[l]=arguments[l+3];t.children=a}if(t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});return{$$typeof:ye,type:e,key:void 0===i?null:""+i,ref:null,props:t,_owner:null}}const be=e=>{const{isLoggedIn:t,loginComponent:i}=e;return we(re,{styles:te},void 0,we(ae,{styles:ie,className:"gdprBlocker"},void 0,we(le,{styles:oe,className:"gdprHeading"},void 0,"CA"===(0,a.DO)()&&"US"===(0,a.Th)()?"You can only purchase TOI+ on the IOS app in your region.Download the app &amp; get TOI+ for free by signing up with TimesClub on the app.":"You can only purchase TOI+ on the IOS app in your region."),xe||(xe=we("div",{className:"btnGrp"},void 0,we("a",{href:"https://apps.apple.com/us/app/the-times-of-india/id427589329",className:"buyplan"},void 0,"DOWNLOAD APP NOW"))),t?null:i))};let $e,_e,ke,Pe,Se,Oe,Ie=e=>e;var Te;function Ee(e,t,i,o){Te||(Te="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=o;else if(r>1){for(var a=new Array(r),l=0;l<r;l++)a[l]=arguments[l+3];t.children=a}if(t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});return{$$typeof:Te,type:e,key:void 0===i?null:""+i,ref:null,props:t,_owner:null}}const De=$.Z.div(Pe||(Pe=Ie`
    display: flex;
    flex-flow: column;
    width: 500px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    min-height: 170px;
    text-align: center;

    @media (max-width: 768px) {
        width: 300px;
    }
`)),Be=$.Z.div(Se||(Se=Ie`
    font-size: 16px;
    line-height: 24px;
    color: #000;
    font-weight: 400;
    padding: 16px 0 22px;
`)),Ne=$.Z.button(Oe||(Oe=Ie`
    background: #e21b22;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    border-radius: 8px;
    color: #fff;
    border: 0;
    padding: 8px;
    cursor: pointer;
    width: 100%;
    max-width: 328px;
    text-transform: uppercase;
`)),Ce=({transLoading:e,onRetryToipTransCallback:t})=>Ee(De,{},void 0,$e||($e=Ee("img",{src:"https://static.toiimg.com/photo/97721339.cms",width:"62",height:"62",alt:""})),"ERROR"!==e&&(_e||(_e=Ee(Be,{},void 0,"Oops, something went wrong, please check again after sometime"))),"ERROR"===e&&Ee("div",{},void 0,ke||(ke=Ee(Be,{},void 0,"Oops, something went wrong, please try again")),Ee(Ne,{onClick:e=>{e.preventDefault(),t()}},void 0,"Retry Now")));var Re=i(84149);let ze,Ze,Ae,Le,He,Ve,je,Ge,Me,We,Ue,Fe,Qe,Xe,Ye,Ke,qe,Je,et,tt,it,ot,nt,rt,at,lt,st,dt,pt,ut,ct,gt,vt,mt,ft,ht,xt,yt,wt=e=>e;var bt;function $t(e,t,i,o){bt||(bt="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=o;else if(r>1){for(var a=new Array(r),l=0;l<r;l++)a[l]=arguments[l+3];t.children=a}if(t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});return{$$typeof:bt,type:e,key:void 0===i?null:""+i,ref:null,props:t,_owner:null}}function _t(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function kt(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?_t(Object(i),!0).forEach((function(t){Pt(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Pt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const St=$.Z.div(ze||(ze=wt`
    background: ${0};
    padding: 8px 8px 0;
    box-shadow: 0px 12px 24px 0px rgba(0,0,0,0.1);
`),(e=>{var t,i;return null!=e&&null!==(t=e.customStyles)&&void 0!==t&&t.backgroundColor?null==e||null===(i=e.customStyles)||void 0===i?void 0:i.backgroundColor:"#FFF0EC"})),Ot=$.Z.div(Ze||(Ze=wt`
    background: ${0};
    padding: 8px 8px 0;
    box-shadow: 0px 12px 24px 0px rgba(0,0,0,0.1);
    max-width: 840px;
    margin: 0 auto;
`),(e=>{var t,i;return null!=e&&null!==(t=e.customStyles)&&void 0!==t&&t.backgroundColor?null==e||null===(i=e.customStyles)||void 0===i?void 0:i.backgroundColor:"#FFF0EC"})),It=$.Z.div(Ae||(Ae=wt`
    background: #fff;
    padding: 32px;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    ${0}
    @media screen and (max-width: 1366px) and (min-width: 1180px) {
        padding: 16px;
    }
`),(e=>1==e.mobile&&(0,_.Z)(Le||(Le=wt`
        padding: 16px;
    `)))),Tt=$.Z.p(He||(He=wt`
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
    margin-bottom: 12px;
    ${0}
    @media screen and (max-width: 1366px) and (min-width: 1180px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
    }
`),(e=>1==e.mobile&&(0,_.Z)(Ve||(Ve=wt`
        font-size: 16px;
        line-height: 20px;
    `)))),Et=$.Z.h3(je||(je=wt`
    font-size: 24px;
    line-height: 32px;
    letter-specing: - 0.5px;
    font-weight: 700;
    margin-bottom: 32px;
    ${0}
     @media screen and (max-width: 1366px) and (min-width: 1180px) {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 16px;
    }
`),(e=>1==e.mobile&&(0,_.Z)(Ge||(Ge=wt`
        font-size: 20px;
        line-height: 28px;
    `)))),Dt=$.Z.button(Me||(Me=wt`
    border-radius: 2px;
    background: #E21B22;
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    padding: 8px 24px;
    letter-specing: - 0.5px;
    font-weight: 700;
    margin-bottom: 12px;
`)),Bt=$.Z.p(We||(We=wt`
    color: #000;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 12px;
    ${0}
    @media screen and (max-width: 1366px) and (min-width: 1180px){
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 0;
    }
`),(e=>1==e.mobile&&(0,_.Z)(Ue||(Ue=wt`
        font-size: 16px;
        line-height: 20px;
    `)))),Nt=$.Z.div(Fe||(Fe=wt`
    padding: 24px;
    display: flex;
    flex-flow: column;
    align-items: center;
      ${0}
    background-size: cover;
`),(e=>(0,_.Z)(Qe||(Qe=wt`
        background: url(${0}/photo/${0}.cms) no-repeat 0 0;
    `),d.g0,e.bannerImage))),Ct=$.Z.button(Xe||(Xe=wt`
display: flex;
flex-flow: column;
align-items: center;
${0}
background-size: 100%;
width: 100%;
&::after {
    display: block;
    content: '';
    width: 100%;
    
    ${0}
}
`),(e=>(0,_.Z)(Ye||(Ye=wt`
    background: url(${0}/photo/${0}.cms) no-repeat 0 0;
`),d.g0,e.bannerImage)),(e=>{let t;return t=null!=e&&e.isWapView?"58.4%":null!=e&&e.isPopUp?"14.06%":"19.66%",`padding-bottom: ${t};`})),Rt=$.Z.div(Ke||(Ke=wt`
    background: #fff;
    padding: 24px;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    ${0}
    @media screen and (max-width: 1366px) and (min-width: 1180px){
        padding: 16px;
    }
`),(e=>1==e.mobile&&(0,_.Z)(qe||(qe=wt`
        padding: 16px;
        text-align: left;
        align-items: flex-start;
    `)))),zt=$.Z.p(Je||(Je=wt`
    color: #000;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 12px;
    ${0}
    @media screen and (max-width: 1366px) and (min-width: 1180px){
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
    }
`),(e=>1==e.mobile&&(0,_.Z)(et||(et=wt`
        font-size: 24px;
        line-height: 32px;
        font-weight: 700;
    `)))),Zt=$.Z.h3(tt||(tt=wt`
    color: #000;
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    margin-bottom: 24px;
    ${0}
     @media screen and (max-width: 1366px) and (min-width: 1180px){
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 16px;
    }
`),(e=>1==e.mobile&&(0,_.Z)(it||(it=wt`
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 12px;
    `)))),At=$.Z.button(ot||(ot=wt`
    border-radius: 2px;
    background: #E21B22;
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    padding: 8px 24px;
    letter-specing: - 0.5px;
    font-weight: 700;
    margin: 12px 0;
    ${0}
    @media screen and (max-width: 1366px) and (min-width: 1180px){
        font-size: 16px;    
        padding: 5px 24px;
        letter-spacing: -0.5px;
    }
`),(e=>1==e.mobile&&(0,_.Z)(nt||(nt=wt`
        display: none;
    `)))),Lt=$.Z.h3(rt||(rt=wt`
    color: #E21B22;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 12px;
    max-width: 60%;
    text-align: center;
    ${0}
    @media screen and (max-width: 1366px) and (min-width: 1180px){
        font-size: 16px;
        line-height: 24px;
    }
`),(e=>1==e.mobile&&(0,_.Z)(at||(at=wt`
        max-width: 100%;
    `)))),Ht=$.Z.button(lt||(lt=wt`
    border-radius: 2px;
    border: 1px solid #E21B22;
    background: #fff ;
    color: #E21B22;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 24px;
    font-weight: 700;
    text-transform: capitalize;
    @media screen and (max-width: 1366px) and (min-width: 1180px){
        font-size: 14px;
    }
`)),Vt=$.Z.div(st||(st=wt`
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    ${0}
`),(e=>!0===e.mobile&&(0,_.Z)(dt||(dt=wt`
        flex-flow: column;
        width: 100%;
    `)))),jt=$.Z.div(pt||(pt=wt`
    max-width: 700px;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    ${0}
    @media screen and (max-width: 1366px) and (min-width: 1180px){
       max-width: 640px;
    }
`),(e=>!0===e.mobile&&(0,_.Z)(ut||(ut=wt`
        flex-flow: column;
        width: 100%;
    `)))),Gt=$.Z.div(ct||(ct=wt`
    flex: 0 0 50%;
    flex: 0 0 calc(50% - 16px);
    margin: 8px;
    display: flex;
    align-items: center;
    ${0}
   @media screen and (max-width: 1366px) and (min-width: 1180px){
        margin: 8px;
    }
`),(e=>!0===e.mobile&&(0,_.Z)(gt||(gt=wt`
        margin: 8px 8px 8px 0;
    `)))),Mt=$.Z.div(vt||(vt=wt`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #f7f7f7;
    border: 1px solid #D8D8D8;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-right: 8px;
    ${0}
    @media screen and (max-width: 1366px) and (min-width: 1180px){
        width: 32px;
        height: 32px;
    }
`),(e=>!0===e.mobile&&(0,_.Z)(mt||(mt=wt`
        width: 32px;
        height: 32px;
    `)))),Wt=$.Z.img(ft||(ft=wt`
    ${0}
    ${0}
    @media screen and (max-width: 1366px) and (min-width: 1180px){
        height: 18px;
    }
`),(e=>(0,_.Z)(ht||(ht=wt`
        background: url(https://static.toiimg.com/photo/${0}.cms) no-repeat 0 0;
    `),e.imageIcon)),(e=>!0===e.mobile&&(0,_.Z)(xt||(xt=wt`
        width: 16px;
        height: 16px;
    `)))),Ut=$.Z.span(yt||(yt=wt`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    @media screen and (max-width: 1366px) and (min-width: 1180px){
        font-size: 12px;
        line-height: 16px;
    }
`)),Ft=(0,k.Z)((({nudgeText:e,loginComponent:t,isWapView:i,userData:n,msid:r,isToiPlusAllowReadOnly:l,isAppView:s,isUpgrade:c,userPrcData:g,transLoading:v,onRetryToipTransCallback:m,getLoadingStatus:f,shouldShowPopUp:h,blockerPopUp:x,showFreeTrailBlocker:y,loading:w})=>{const b=n&&n.isLoggedIn?n.isLoggedIn:void 0;(0,o.useEffect)((()=>{if("function"==typeof f&&f("DONE"),i){var e;const i=(0,a.To)();var t;if(null!==(e=i.Params)&&void 0!==e&&e.isampuser)null!==(t=i.Params)&&void 0!==t&&t.toLogin&&!b&&(0,u.fd)(void 0,{}),(0,a.zw)()}}),[]);const $=e=>{const t=kt(kt({},(0,p.l0)()||{}),{},{event:"click"===(null==e?void 0:e.action)?"select_item":"view_item_list"});return(0,p.s0)(t,{item_name:window.location.href.indexOf(".cms")>-1?document.title:window.location.href,item_id:r||"",item_brand:"product_interventions",item_category:"Nudges",item_category2:"articleshow",item_category3:null!=e&&e.item_category3?null==e?void 0:e.item_category3:"N/A",item_category4:null!=e&&e.item_category4?null==e?void 0:e.item_category4:"N/A"})},_=(e,t)=>{if(e.preventDefault(),s)if((0,P.OR)()){const{dealCode:e,planCode:i,planCodeAutoSelected:o}=(0,S.vQ)(kt(kt({},t),{},{featureCode:d.iGC}));let n="";n=c?p.gn?"toiapp://open-$|$-id=1-$|$-type=planPage-$|$-source=listing-$|$-dealcode=<dealCode>-$|$-featurecode=TOIPRED-$|$-planautoselected=<planAutoSelected>-$|$-plangroup=<planGroup>":`toiapp://open-$|$-id=1-$|$-type=upgradePlan-$|$-source=listing-$|$-dealcode=${e}-$|$-featurecode=TOIPRED-$|$-planautoselected=${o}-$|$-planGroup=upgrade_plans`:p.gn?"toiapp://open-$|$-id=1-$|$-type=planPage-$|$-source=listing-$|$-dealcode=<dealCode>-$|$-featurecode=TOIPRED-$|$-planautoselected=<planAutoSelected>-$|$-plangroup=<planGroup>":`toiapp://open-$|$-id=1-$|$-type=planPage-$|$-source=listing-$|$-dealcode=${e}-$|$-featurecode=TOIPRED-$|$-planautoselected=${o}-$|$-planGroup=${i}`;const r={type:"deeplink",value:n,requestReason:"payment"};(0,P.gW)(r)}else if(p.gn)(0,P.jd)((e=>(0,P.DM)(e)));else try{(0,P.DM)()}catch(e){console.log("bridge not generated",e)}else if((e.target instanceof HTMLButtonElement||e.target instanceof HTMLAnchorElement)&&e.target){var o,l;const s=["paywall",{client_source:"cdp",event_nature:"click",event_category:"subscription",cta_text:(null==e?void 0:e.target)instanceof HTMLElement?e.target.innerText:"",unique_subscription_id:O.ZP.get("_grx")+"_"+(new Date).getTime(),paywalling_type:y?"free_trial":""}];let p="";p=x?"regular"===e.target.getAttribute("data-type")?"paywall_bottomsheet_blocker_cta_main":"paywall_bottomsheet_blocker_cta_secondary":"regular"===e.target.getAttribute("data-type")?"paywall_blocker_cta_main":"paywall_blocker_cta_secondary";let u={};void 0!==window.grx&&"function"==typeof(null===(o=window)||void 0===o||null===(l=o.grx_module)||void 0===l?void 0:l.hitPaywallEventReact)?(window.grx_module.hitPaywallEventReact(...s),u=window.grx_module.getCdpInfo()||{}):"undefined"!=typeof window&&window.Times.setGRXDataInLocalStorage&&window.Times.setGRXDataInLocalStorage("GRX_QUEUE_EVENT",{eventName:s[0],payload:s[1]});const c=s[1]||{},v={accessiblefeatures:null==g?void 0:g.accessibleFeatures,msid:r,source:null==g?void 0:g.source,accessType:null==g?void 0:g.accessType,analytics_cdp:kt(kt({eventName:s[0]},c),u),objUserData:{email:void 0!==n.getEmail?n.getEmail():"",fname:void 0!==n.getFirstName?n.getFirstName():""},ga4Items:$({action:"click",item_category4:e.target.innerText||"",item_category3:`${p}${y?"_freeTrial":""}`})};(0,S.GK)(v).then((()=>(e=>{b||O.ZP.get("ssoid")||O.ZP.get("ssoId")?(0,a.YY)(i).then((t=>{window.location.href=(0,S.Zo)((0,S.vQ)(e,t))})):window.location.href=(0,S.Zo)((0,S.vQ)(e))})(kt(kt({},t),{},{acqSubSource:`${(e.target instanceof HTMLButtonElement||e.target instanceof HTMLAnchorElement)&&e.target&&"regular"===e.target.getAttribute("data-type")?"paywall_blocker_cta_main":"paywall_blocker_cta_secondary"}_${r}`,featureCode:d.iGC}))))}};if(!(e&&5!==n.prcValue&&"ERROR"!==v||"LOADING"===v||x))return null==n||!n.isLoggedIn||w&&w!==Re.Vu.LOADING?(h(!1),$t(Ce,{transLoading:v,onRetryToipTransCallback:m})):null;if(l&&!x)return h(!1),$t(be,{isLoggedIn:b,loginComponent:t});void 0!==h&&h(!0);const{storyBlocker:k,offers:I,storyBlockerPopUp:T}=e||{},E=(t,i)=>!t&&i?null!=e&&e.offerBanner?null==e?void 0:e.offerBanner:I.popupOfferImage:null!=e&&e.offerBottomsheet?null==e?void 0:e.offerBottomsheet:I.bannerImage,D=t=>{if(I)return null!=e&&e.offerBanner&&e.offerBottomsheet?$t(Ct,{bannerImage:E(i,t),isWapView:i,isPopUp:t,onClick:t=>_(t,e),"data-type":"offer","aria-label":"Offer Banner"}):$t(Nt,{bannerImage:E(i,t)},void 0,$t(Bt,{mobile:i},void 0,I.h1),$t(Lt,{mobile:i},void 0,I.h2),$t(Ht,{onClick:t=>_(t,e),"data-type":"offer"},void 0,I.ctaText))};var B,N,C;return y?o.createElement(o.Fragment,null,e&&o.createElement(o.Fragment,null,$t(se,{},void 0,$t(de,{},void 0,$t(pe,{},void 0,e.h1),$t(ue,{},void 0,e.h2),$t(ce,{},void 0,null===(B=e.benefit)||void 0===B?void 0:B.h1),$t(ge,{},void 0,null===(N=e.benefit)||void 0===N||null===(C=N.benefits)||void 0===C?void 0:C.map(((e,t)=>$t(ve,{dangerouslySetInnerHTML:{__html:e}},t)))),$t(me,{},void 0,$t("a",{href:d.LUu,onClick:e=>(e=>{var t,i,o;e.preventDefault();const n=["subscriptions_blocker",{client_source:"cdp",event_nature:"impression",event_category:"subscription",cta_text:"",paywalling_type:"free_trial"}];if(void 0!==(null===(t=window)||void 0===t?void 0:t.grx)&&"function"==typeof(null===(i=window)||void 0===i||null===(o=i.grx_module)||void 0===o?void 0:o.hitPaywallEventReact)?window.grx_module.hitPaywallEventReact(...n):window.Times.setGRXDataInLocalStorage("GRX_QUEUE_EVENT",{eventName:n[0],payload:n[1]}),(e.target instanceof HTMLAnchorElement||e.target instanceof HTMLButtonElement)&&e.target&&$({action:"click",item_category3:"paywall_blocker_cta_main_free_Trial",item_category4:e.target.innerText||""}),s){const e={requestReason:"freeTrial",type:"deeplink",value:"toiapp://open-$|$-id=1-$|$-type=freeTrial"};(0,P.gW)(e)}else{const e=(0,a.iB)("ARTICLESHOW_FREETRAIL");e&&(window.location.href=e)}})(e)},void 0,e.mainCtaText)),$t(fe,{},void 0,$t("a",{href:d.LUu,className:"viewplan",onClick:t=>_(t,e)},void 0,e.secCtaText)))),$t(he,{},void 0,b?null:t))):x&&T?$t(Ot,{customStyles:{backgroundColor:null==e?void 0:e.backgroundColor}},void 0,$t(Rt,{mobile:i},void 0,$t(zt,{mobile:i},void 0,T.h1),$t(Zt,{mobile:i},void 0,T.h2),$t(Vt,{mobile:i},void 0,$t(jt,{mobile:i},void 0,T.benefits.map((e=>$t(Gt,{mobile:i},void 0,$t(Mt,{mobile:i},void 0,$t(Wt,{mobile:i,src:`https://static.toiimg.com/photo/${e.icon}.cms`})),$t(Ut,{},void 0,e.text)))))),$t(At,{mobile:i,onClick:t=>_(t,e),"data-type":"regular"},void 0,T.ctaText),i||b?null:t),D(!0)):o.createElement(o.Fragment,null,k?$t(St,{customStyles:{backgroundColor:null==e?void 0:e.backgroundColor}},void 0,$t(It,{mobile:i},void 0,$t(Tt,{mobile:i},void 0,k.h1),$t(Et,{mobile:i},void 0,k.h2),$t(Dt,{onClick:t=>_(t,e),"data-type":"regular"},void 0,k.ctaText),b?null:t),D(!1)):null)}),"storyBlockerV3");var Qt,Xt;function Yt(e,t,i,o){Xt||(Xt="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=o;else if(r>1){for(var a=new Array(r),l=0;l<r;l++)a[l]=arguments[l+3];t.children=a}if(t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});return{$$typeof:Xt,type:e,key:void 0===i?null:""+i,ref:null,props:t,_owner:null}}function Kt(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function qt(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Kt(Object(i),!0).forEach((function(t){Jt(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Kt(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Jt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const ei=o.lazy((()=>i.e(59833).then(i.bind(i,59833)))),ti=o.lazy((()=>i.e(93306).then(i.bind(i,93306)))),ii=o.lazy((()=>Promise.all([i.e(46066),i.e(81489)]).then(i.bind(i,81489)))),oi=({viewType:e,showToiPlusNudges:t,isToiPlusAllowReadOnly:i,isWapView:n,userData:r,msid:l,title:x,isPrime:w,frmapp:$,isAppView:_,geo:k,storyTitle:P,userPrcData:S,transLoading:O,unifiedNodes:I,shouldShowPopUp:T,blockerPopUp:E,showFreeTrailBlocker:D,closePopUpRef:B,siteConfig:N,translationData:C})=>{var R,z,Z,A;const L=s()(C,"healthStripNudge",{}),[H,V]=(0,o.useState)(!1),[j,G]=(0,o.useState)("LOADING"),[M,W]=(0,o.useState)(""),[U,F]=(0,o.useState)(!1),[Q,X]=(0,o.useState)(""),[Y,K]=(0,o.useState)(!1),[q,J]=(0,o.useState)(!1),[ee,te]=(0,o.useState)({}),ie=(0,o.useRef)(!1),[oe,ne]=(0,o.useState)(null),[re,ae]=(0,o.useState)(!1),[le,se]=(0,o.useState)(0),[de,pe]=(0,o.useState)(!1),[ue,ce]=(0,o.useState)(!1),ge="timesHealthStripClosedAtTOIPHome";(0,o.useEffect)((()=>{const e=localStorage.getItem(ge),t=Date.now();(!e||t-parseInt(e)>864e5)&&ce(!0)}),[ue]);const ve=e=>{const t=qt(qt({},(0,p.l0)()||{}),{},{event:"click"===(null==e?void 0:e.action)?"select_item":"view_item_list"});return(0,p.s0)(t,{item_name:window.location.href.indexOf(".cms")>-1?document.title:window.location.href,item_id:l||"",item_brand:"product_interventions",item_category:"Nudges",item_category2:(null==e?void 0:e.item_category2)||"N/A",item_category3:null!=e&&e.item_category3?null==e?void 0:e.item_category3:"N/A",item_category4:null!=e&&e.item_category4?null==e?void 0:e.item_category4:"N/A"})},me=()=>{pe(!0),localStorage.setItem(ge,Date.now().toString()),ce(!1);const e=["timesHealth_top_banner_close_button_toiplus_landing_click",{client_source:"cdp",event_nature:"click",event_category:"timeshealth_banner_close_button_toiplus_landing",cta_text:""}];var t;"undefined"!=typeof window&&(void 0!==window.grx&&"function"==typeof(null===(t=window.grx_module)||void 0===t?void 0:t.hitPaywallEventReact)?window.grx_module.hitPaywallEventReact(...e):window.Times&&"function"==typeof window.Times.setGRXDataInLocalStorage&&window.Times.setGRXDataInLocalStorage("GRX_QUEUE_EVENT",{eventName:e[0],payload:e[1]}));ve({action:"click",item_category3:"times_Health_banner_closed",item_category2:"toiplus_landing",item_category4:"close_button"})},fe=()=>{ve({action:"click",item_category3:"timesHealth_banner_click",item_category2:"toiplus_landing",item_category4:"start_your_journey_banner"});const e=["timesHealth_top_banner_toiplus_landing_click",{client_source:"cdp",event_nature:"click",event_category:"timeshealth_banner_toiplus_landing",cta_text:"start_your_journey"}];var t;"undefined"!=typeof window&&(void 0!==window.grx&&"function"==typeof(null===(t=window.grx_module)||void 0===t?void 0:t.hitPaywallEventReact)?window.grx_module.hitPaywallEventReact(...e):window.Times&&"function"==typeof window.Times.setGRXDataInLocalStorage&&window.Times.setGRXDataInLocalStorage("GRX_QUEUE_EVENT",{eventName:e[0],payload:e[1]}))},he=()=>Yt(y.gC,{isClosing:de},void 0,R||(R=Yt(y.ju,{onClick:me},void 0,"×")),Yt(y.$Y,{href:L.ctaLink,target:"_blank",rel:"noopener noreferrer",onClick:fe},void 0,Yt(y.zU,{src:L.imageLink,alt:"Times Health Banner Strip"}))),xe=(0,o.useRef)(D),ye=r&&r.isLoggedIn?r.isLoggedIn:void 0,we=r&&r.prcValue?r.prcValue:0,be=e=>{let t="",i="prime-login_blocker_Radio|View";switch(ie.current&&(i="blocked_prime-login_blocker|View"),e){case"toiplushomepage":t=n?"WAP-primehome":"WEB-Prime-Home";break;case"toiplusprimeshow":case"newtoiplusprimeshow":t=n?"WAP-newprimeshow":"WEB-newprimeshow";break;default:t=n?"WAP-primelist":"WEB-Prime-HPListing"}(0,f.Z)("ga","send","event",t,i,`Ps-${ye||0!==we?we:-1}`)};(0,o.useEffect)((()=>{V(!0),S&&((0,a.Q)(S).then((e=>{F(e)})),(0,a.O4)(S).then((e=>{X(e)})),(0,a.sc)(S).then((e=>{K(e)})),(0,a.WY)(S).then((e=>{J(e)})),te((0,a.gJ)()))}),[S]),(0,o.useEffect)((()=>{ie.current=i}),[i]),(0,o.useEffect)((()=>{S&&(0,a.Uw)(S).then((e=>{ne(e)}))}),[S]),(0,o.useEffect)((()=>{window.addEventListener("scroll",(()=>{const e=window.pageYOffset;ae(le-e>0&&e>50),se(e)}))})),(0,o.useEffect)((()=>{xe.current=D}),[D]);const $e=()=>"toiplusprimeshow"===e?Yt(g.Z,{overwriteWrapper:b().spinnerwrapper,overwriteLoader:b().spinner}):"newtoiplusprimeshow"===e||"toiplusprimeshowV3"===e?Yt("img",{src:`${d.yAj}99553042.cms`,alt:"shimmer"}):null,_e=e=>{G(e)},ke=(e=0)=>{W(e)},Pe=e=>{const t=n?"wap-newprimeshow":"web-newprimeshow";"undefined"!=typeof window&&(0,f.Z)("ga","send","event",t,e,`Ps-${ye||0!==we?we:-1}`)},Se=(0,o.useCallback)((()=>{var e,t,i;const o=xe.current,n=["subscriptions_blocker",{client_source:"cdp",event_nature:"impression",event_category:"subscription",cta_text:"",paywalling_type:o?"free_trial":""}];void 0!==(null===(e=window)||void 0===e?void 0:e.grx)&&"function"==typeof(null===(t=window)||void 0===t||null===(i=t.grx_module)||void 0===i?void 0:i.hitPaywallEventReact)?window.grx_module.hitPaywallEventReact(...n):window.Times.setGRXDataInLocalStorage("GRX_QUEUE_EVENT",{eventName:n[0],payload:n[1]}),ve({action:"view",item_category2:o?"articleshow_free_Trial":"articleshow"})}),[]),Oe=async()=>{Pe("prime-login_blocker_Radio_CTA");const t=(0,a.Th)()||"IN";let i;i=n?`${d.IWC}&cc=${t}`:`${d.ySm}&cc=${t}`;const o=await m.Z.get(i),{data:l={}}=o;(0,h.Ju)(null,l,r,n,(0,a.Th)(),{isGracePeriod:U,ispreExpired:q,userType:oe,daysRemaining:Y,pageType:e,justPayRedirect:!0,offer:!1})},Ie=()=>{const e=e=>{let t;Pe("prime-login_blocker|LoginCTA"),(0,u.fd)(void 0,{}),E&&null!=B&&B.current&&B.current(e,!1),t=E?"paywall_bottomsheet_blocker_alreadySubscribed":D?"paywall_blocker_alreadySubscribed_freeTrial":"paywall_blocker_alreadySubscribed",ve({action:"click",item_category4:e.target.innerText||"",item_category3:t,item_category2:"articleshow"})};return Yt("div",{className:`${b().login} ${xe.current?"":b().space}`},void 0,"Already a Member?",Yt("a",{onClick:t=>(t=>{ye?(window.showLogoutToastMsg=!0,(0,u.zH)(),setTimeout((()=>{e(t)}),1e3)):e(t)})(t),className:b().loginLink},void 0,xe.current?"Sign in":"Sign In Now"))},Te=()=>{if(Object.keys(r).length>0)switch(e){case"toiplushomepage":return ue&&!n&&"true"===(null==N?void 0:N.isTimesHealthBannerVisible)&&L.imageLink?Yt("div",{className:b().timesHealthStripWrapper},void 0,z||(z=Yt(he,{}))):Yt(v.default,{className:`${b().nudge_sticky} ${r.prcValue===d.OT||r.prcValue===d.Gdt?b().sticky:""} ${re?b().scrollup:b().scrolldown}`,inViewCallback:()=>{be(e)},viewMargin:"0px 0px 0px 0px"},void 0,Yt("div",{className:`${b().nudge_wraper} ${"DONE"===j?b().loaded:""} ${U?b().graceUser:""}`,style:qt({height:M},0===M?{margin:0}:{})},void 0,Yt(ei,{viewType:e,isWapView:n,userData:r,isToiPlusAllowReadOnly:i,inGracePeriod:U,graceDate:Q,daysRemaining:Y,ispreExpired:q,accessPayload:ee,frmapp:$,geo:null==k?void 0:k.currentCountry,getLoadingStatus:_e,getNudgeHeight:ke,userPrcData:S,unifiedNodes:I})));case"toiplusplanpage":case"newtoiplusprimeshow":return null;case"storyRenewStrip":return Yt("div",{className:`${b().nudge_wraper} ${"DONE"===j?b().loaded:""} ${U?b().graceUser:""}`,style:{height:M}},void 0,Z||(Z=Yt(ti,{isWapView:n,title:x,userData:r,msid:l,accessPayload:ee,isPrime:w,isAppView:_,userPrcData:S,getNudgeHeight:ke,inGracePeriod:U,graceDate:Q,daysRemaining:Y,ispreExpired:q})));case"ToiHpRenewNudge":return Yt("div",{className:`${b().nudge_wraper} ${"DONE"===j?b().loaded:""} ${U?b().graceUser:""}`,style:{height:M,marginBottom:"16px"}},void 0,A||(A=Yt(ii,{userData:r,isToiPlusAllowReadOnly:i,inGracePeriod:U,graceDate:Q,daysRemaining:Y,ispreExpired:q,userPrcData:S,getNudgeHeight:ke})));case"toiplusprimeshowV3":return Yt(v.default,{inViewCallback:Se,viewMargin:"0px 0px 0px 0px"},void 0,Yt(Ft,{loginComponent:Ie(),onPlanClickHandler:Oe,isWapView:n,userData:r,storyTitle:P,msid:l,isToiPlusAllowReadOnly:i,userPrcData:S,getLoadingStatus:_e,shouldShowPopUp:T,blockerPopUp:E,closePopUpRef:B}));default:return Yt(v.default,{className:b().nudge_sticky,inViewCallback:()=>{be(e)},viewMargin:"0px 0px 0px 0px"},void 0,Yt("div",{className:`${b().nudge_wraper} ${"DONE"===j?b().loaded:""} ${U?b().graceUser:""}`,style:qt({height:M},0===M?{margin:0}:{})},void 0,Yt(ei,{viewType:e,isWapView:n,userData:r,isToiPlusAllowReadOnly:i,inGracePeriod:U,graceDate:Q,daysRemaining:Y,ispreExpired:q,accessPayload:ee,frmapp:$,geo:null==k?void 0:k.currentCountry,getLoadingStatus:_e,getNudgeHeight:ke,userPrcData:S,unifiedNodes:I})))}return null};return(0,o.useEffect)((()=>{"true"===(null==N?void 0:N.isTimesHealthBannerVisible)&&Te()}),[ue]),ue&&!n&&"true"===(null==N?void 0:N.isTimesHealthBannerVisible)&&"toiplushomepage"===e?Yt("div",{className:b().timesHealthStripWrapper},void 0,L.imageLink&&Yt(he,{})):t||"toiplusprimeshow"===e||"newtoiplusprimeshow"===e||"storyRenewStrip"===e||"toiplusprimeshowV3"===e?Yt(c.Z,{},void 0,(!H||"LOADING"===j&&"DONE"!==O||"LOADING"===O)&&Yt($e,{}),H&&Yt(o.Suspense,{fallback:Qt||(Qt=Yt("div",{}))},void 0,Te())):null},ni=o.memo((0,x.$j)((e=>{var t,i,o;return{transLoading:e.translationConfig.transLoading,showToiPlusNudges:null===(t=e.toiplusconfig)||void 0===t?void 0:t.showToiPlusNudges,isToiPlusAllowReadOnly:null===(i=e.toiplusconfig)||void 0===i?void 0:i.isToiPlusAllowReadOnly,userPrcData:e.login.userPrcData,unifiedNodes:s()(e,"translationConfig.nudges.unifiedNodes",{}),siteConfig:null===(o=e.common)||void 0===o?void 0:o.siteConfig,translationData:s()(e,"translationConfig.nudges",{})}}))(oi));oi.defaultProps={viewType:"",isWapView:!1,userData:r().shape({prcValue:void 0,isLoggedIn:!1}),msid:"",isToiPlusAllowReadOnly:!1,frmapp:!1,isAppView:!1,title:"",isPrime:!1,geo:{},storyTitle:"",transLoading:"",blockerPopUp:!1,shouldShowPopUp:()=>{},showFreeTrailBlocker:!1,translationData:{healthStripNudge:{}}}},54467:(e,t,i)=>{"use strict";i.d(t,{$Y:()=>y,Nx:()=>f,gC:()=>m,ju:()=>x,zU:()=>h});var o=i(19809),n=i(70917);let r,a,l,s,d,p,u,c,g=e=>e;const v=(0,n.F4)(r||(r=g`
  from {
    opacity: 1;
    transform: scaleY(1);
    height: auto;
  }
  to {
    opacity: 0;
    transform: scaleY(0);
    height: 0;
    margin: 0;
    padding: 0;
  }
`)),m=o.Z.div(a||(a=g`
  position: relative;
  width: 100%;
  overflow: hidden;
  transform-origin: top;
  margin 0 auto;
  cursor: pointer;


  ${0}
`),(({isClosing:e})=>e&&(0,n.iv)(l||(l=g`
      animation: ${0} 1s ease forwards;
    `),v))),f=o.Z.div(s||(s=g`
  position: relative;
  width: 100%;
  overflow: hidden;
  transform-origin: top;
  max-width:1168px;
  margin 0 auto;
  cursor: pointer;


  ${0}
`),(({isClosing:e})=>e&&(0,n.iv)(d||(d=g`
      animation: ${0} 1s ease forwards;
    `),v))),h=o.Z.img(p||(p=g`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
`)),x=o.Z.span(u||(u=g`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 22px;
  color: #000;
  border-radius: 50%;
  padding: 4px 8px;
  cursor: pointer;
  z-index: 2;
`)),y=o.Z.a(c||(c=g`
  display: block;
  position: relative;
`))},72688:e=>{e.exports={spinnerwrapper:"AzVQZ",spinner:"vKAxh",nudge_sticky:"v2YhQ",sticky:"xBmix",scrollup:"jRka1",scrolldown:"oEfIO",upsell:"kvjrG",nudge_wraper:"_pM9i",loaded:"uwfQu",topNudge:"VyfdP",graceUser:"v1NwK",heading:"m9oFf",subscribeBtn1:"_59LUS",btnText:"Vbboc",toipLogo:"sQ1Qx",benefits:"WrUZP",login:"RBxKE",space:"GRdF4",user_expiry_info:"Tg04P",inner:"cSVeh",button_container:"YfeA4",btn:"Dsffe",red:"SGwlX",cross:"XvLZn",timesHealthStripWrapper:"FCN54"}}}]);
//# sourceMappingURL=78878_es6_module.28acf213.chunk.js.map