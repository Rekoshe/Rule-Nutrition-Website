(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6297:function(e,a,t){Promise.resolve().then(t.bind(t,7407))},6789:function(e,a,t){"use strict";t.d(a,{Z:function(){return NavBar}});var r=t(7437),n=t(1396),s=t.n(n),o=t(6691),c=t.n(o),i=t(9715),l=t.n(i),d=t(6114),u=t(504),g=t(2759);function NavBar(e){return(0,r.jsxs)("div",{className:l().navContainer,style:{backgroundColor:"".concat(e.color)},children:[(0,r.jsx)("div",{children:(0,r.jsx)(s(),{className:l().navLinks,href:"/",children:(0,r.jsx)(c(),{src:"".concat(d.basePath,"/Content.png"),style:{filter:"".concat(e.filter)},width:149.1,height:41.3,alt:"nutrition rule logo"})})}),(0,r.jsxs)("div",{className:l().navBarItems,children:[(0,r.jsx)(s(),{className:l().navLinks,style:{color:"".concat(e.textColor)},href:"/AllProducts",children:"products"}),(0,r.jsx)(s(),{className:l().navLinks,style:{color:"".concat(e.textColor)},href:"#",children:"about us"}),(0,r.jsx)(s(),{className:l().navLinks,style:{color:"".concat(e.textColor)},href:"#",children:"contact us"})]}),(0,r.jsx)("div",{className:l().mobileMenuButton,children:(0,r.jsx)("button",{style:{backgroundColor:"transparent",border:"none"},children:(0,r.jsx)(u.G,{style:{color:"white"},icon:g.xiG})})})]})}},7407:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return Home}});var r=t(7437),n=t(2265),s=t(6691),o=t.n(s),c=t(9715),i=t.n(c);function Card(e){var a;return(0,r.jsxs)("div",{className:i().cardContainer,style:{width:(e=>{if(null!=e&&0!=e)return e<=720&&(l=2),e/l})(e.pageWidth),padding:"5px"},children:[(0,r.jsx)("div",{children:(0,r.jsx)(o(),{fill:!0,style:{padding:null!=(a=e.pageWidth)&&a<=720?30:70,paddingTop:140},className:i().cardImage,src:e.image,alt:e.children})}),(0,r.jsx)("h5",{className:i().cardName,children:e.children}),(0,r.jsx)("h6",{style:{opacity:.5,color:"white"},className:i().cardPrice,children:e.flavor}),(0,r.jsx)("div",{children:(0,r.jsx)("h5",{style:{color:"orange"},children:"★  ★  ★  ★  ★"})}),(0,r.jsx)("button",{className:i().cardButton,children:"View Product"})]})}var l=5,d=t(6114);function SlideShow(){let e=(0,n.useRef)(null),[a,t]=(0,n.useState)(0),s=(0,n.useRef)(null),[o,c]=(0,n.useState)(0);(0,n.useEffect)(()=>{c(s.current?s.current.offsetWidth:0)},[s.current,o]),(0,n.useEffect)(()=>{let e=setInterval(()=>{scroll()},10);return()=>clearInterval(e)},[a]);let scroll=()=>{t(a+1),null!=e.current&&(e.current.scroll({left:a}),a+o>=e.current.scrollWidth&&t(0))},[l,u]=(0,n.useState)(0);return(0,r.jsxs)("div",{ref:s,children:[(0,r.jsxs)("div",{style:{padding:"2rem"},children:[(0,r.jsx)("div",{className:i().trendingSection,children:(0,r.jsx)("span",{className:i().trendingTitle,children:"best selling products!"})}),(0,r.jsx)("p",{className:i().trendingPara,children:" Most Popular Products By Demand!"})]}),(0,r.jsx)("div",{className:i().slideShow,children:(0,r.jsxs)("div",{ref:e,className:i().cardsContainer,children:[(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"someOtherFlavor",children:"Rule Pre-Workout1"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout2"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout3"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout4"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout5"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"someOtherFlavor",children:"Rule Pre-Workout6"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout7"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout8"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout9"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout10"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"someOtherFlavor",children:"Rule Pre-Workout1"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout2"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout3"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout4"}),(0,r.jsx)(Card,{image:"".concat(d.basePath,"/ruleProduct.png"),pageWidth:o,flavor:"Pineapple & Coconut",children:"Rule Pre-Workout5"})]})})]})}function Category(e){let[a,t]=(0,n.useState)(1.2);return(0,r.jsxs)("div",{className:i().catCard,children:[(0,r.jsxs)("div",{className:i().cardImages,children:[(0,r.jsx)("div",{className:i().maskImage,children:(0,r.jsx)(o(),{src:e.maskImg,fill:!0,alt:"image background",style:{objectFit:"contain",transform:"scale(".concat(a,")")},className:i().mask})}),(0,r.jsx)("div",{className:i().productImage,children:(0,r.jsx)(o(),{onMouseEnter:()=>{t(1.5)},onMouseLeave:()=>{t(1.2)},src:e.productImg,fill:!0,alt:"image of whey jar",style:{objectFit:"contain"},className:i().img})})]}),(0,r.jsx)("span",{className:i().productNameText,children:e.productName+" >>"})]})}var u=t(2759),g=t(504);function ReviewCard(e){return(0,r.jsxs)("div",{className:i().reviewCardCont,children:[(0,r.jsx)("h3",{children:e.title}),(0,r.jsx)(g.G,{className:i().reviewQoute,icon:u.y1i}),(0,r.jsx)("p",{className:i().reviewPara,children:e.children}),(0,r.jsx)("p",{style:{textAlign:"right",margin:0},className:i().reviewQoute,children:(0,r.jsx)(g.G,{icon:u.Elr})}),(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)(o(),{src:e.icon,alt:"review Icon",width:60,height:60,style:{marginRight:"1rem"}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{style:{margin:0},children:e.reviewerName}),(0,r.jsx)("h5",{style:{color:"yellow",margin:0},children:" ★  ★  ★  ★  ★"})]})]})]})}var h=t(6789),p=t(1396),m=t.n(p),v=t(62);function BackgroundSlider(){let[e,a]=(0,n.useState)("yellow"),[t,s]=(0,n.useState)("gray"),[c,l]=(0,n.useState)("gray"),[u,h]=(0,n.useState)(0);(0,n.useEffect)(()=>{let e=setInterval(()=>{2==u?scroll(0):scroll(u+1)},5e3);return()=>clearInterval(e)},[u]);let p=(0,n.useRef)(null),scroll=e=>{var t=0;switch(h(e),e){case 0:a("yellow"),s("gray"),l("gray");break;case 1:a("gray"),s("yellow"),l("gray"),t=3;break;case 2:a("gray"),s("gray"),l("yellow"),t=1}null!=p.current&&p.current.scroll({left:p.current.scrollWidth/t,behavior:"smooth"})};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{ref:p,style:{position:"relative",display:"flex",backgroundColor:"black",height:"40vw",overflow:"hidden"},children:[(0,r.jsx)("div",{className:i().backgroundImg,children:(0,r.jsx)(o(),{src:"".concat(d.basePath,"/heroDesktop.png"),fill:!0,objectFit:"contain",alt:"rule background"})}),(0,r.jsx)("div",{className:i().backgroundImg,children:(0,r.jsx)(o(),{src:"".concat(d.basePath,"/heroDesktop.png"),fill:!0,objectFit:"contain",alt:"rule background"})}),(0,r.jsx)("div",{className:i().backgroundImg,children:(0,r.jsx)(o(),{src:"".concat(d.basePath,"/heroDesktop.png"),fill:!0,objectFit:"contain",alt:"rule background"})})]}),(0,r.jsxs)("div",{style:{backgroundColor:"black",paddingBottom:"2rem"},children:[(0,r.jsxs)("div",{className:i().backgroundButtonSection,children:[(0,r.jsx)("button",{onClick:()=>scroll(0),className:i().backgroundButton,style:{backgroundColor:e}}),(0,r.jsx)("button",{onClick:()=>scroll(1),className:i().backgroundButton,style:{backgroundColor:t}}),(0,r.jsx)("button",{onClick:()=>scroll(2),className:i().backgroundButton,style:{backgroundColor:c}})]}),(0,r.jsxs)("div",{style:{textAlign:"center",color:"white"},children:[(0,r.jsx)("div",{style:{fontSize:"1.4vw"},children:"@NutriRule"}),(0,r.jsx)(m(),{href:"#",className:i().socialIcons,children:(0,r.jsx)(g.G,{icon:v.Zzi})}),(0,r.jsx)(m(),{href:"#",className:i().socialIcons,children:(0,r.jsx)(g.G,{icon:v.opf})}),(0,r.jsx)(m(),{href:"#",className:i().socialIcons,children:(0,r.jsx)(g.G,{icon:v.ABo})})]})]})]})}function Home(){return(0,r.jsxs)("div",{style:{overflow:"hidden"},children:[(0,r.jsx)(h.Z,{color:"black",textColor:"white",filter:""}),(0,r.jsx)(BackgroundSlider,{}),(0,r.jsxs)("div",{className:i().categoryContainer,children:[(0,r.jsxs)("div",{className:i().categoryText,children:[(0,r.jsx)("h1",{className:i().catTitle,children:"browse by category"}),(0,r.jsx)("div",{className:i().catPara,children:"Browse our Products Based on What YOU Need!"})]}),(0,r.jsxs)("div",{className:i().cardRowsContainer,children:[(0,r.jsxs)("div",{className:i().catCardsRow,children:[(0,r.jsx)(Category,{productName:"all supplements",maskImg:"".concat(d.basePath,"/MaskShape.png"),productImg:"".concat(d.basePath,"/allSups.png")}),(0,r.jsx)(Category,{productName:"BCAA & ENERGY DRINKS",maskImg:"".concat(d.basePath,"/MaskShape.png"),productImg:"".concat(d.basePath,"/takeOff.png")}),(0,r.jsx)(Category,{productName:"pre-workout",maskImg:"".concat(d.basePath,"/MaskShape.png"),productImg:"".concat(d.basePath,"/preWorkout.png")})]}),(0,r.jsxs)("div",{className:i().catCardsRow,children:[(0,r.jsx)(Category,{productName:"intra-workout",maskImg:"".concat(d.basePath,"/MaskShape.png"),productImg:"".concat(d.basePath,"/EAA.png")}),(0,r.jsx)(Category,{productName:"post-workout",maskImg:"".concat(d.basePath,"/MaskShape.png"),productImg:"".concat(d.basePath,"/Creatine.png")}),(0,r.jsx)(Category,{productName:"Protein",maskImg:"".concat(d.basePath,"/MaskShape.png"),productImg:"".concat(d.basePath,"/WheyJar.png")})]})]})]}),(0,r.jsx)("div",{style:{position:"relative",margin:"2rem auto",backgroundColor:"black"},children:(0,r.jsx)(SlideShow,{})}),(0,r.jsx)("div",{className:i().reviewsSection,children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-xxl-5",style:{position:"relative",display:"flex",justifyContent:"center"},children:[(0,r.jsx)(o(),{src:"".concat(d.basePath,"/changeTheRules.png"),alt:"message from team background",width:552,height:1272}),(0,r.jsx)("div",{style:{position:"absolute",width:500,top:200},children:(0,r.jsxs)("div",{className:i().teamText,children:[(0,r.jsx)("p",{className:i().teamParagraph,children:"We understand that the journey to optimal health is unique for each individual, and with Nutrition Rule, you have a steadfast partner supporting you every step of the way. Embrace our supplements with confidence, knowing that they are designed to unlock your potential, elevate your performance, and ultimately, make a positive impact on your life."}),(0,r.jsx)("p",{className:i().teamParagraph,children:"Thank you for choosing Nutrition Rule. Together, we are redefining the rules of nutrition for a healthier and brighter future."}),(0,r.jsx)("p",{className:i().teamBigText,children:"Sincerely, The Nutrition Rule Team."})]})})]}),(0,r.jsxs)("div",{className:"col-xxl-7",style:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)("div",{className:i().reviewTitle,children:"See What Our Customers Say About Us!"}),(0,r.jsx)("div",{className:i().reviewsContainer,children:(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("div",{style:{marginTop:"8rem"},children:[(0,r.jsx)(ReviewCard,{title:"Life-Changing Supplements!",icon:"".concat(d.basePath,"/Lydia.png"),reviewerName:"Lydia Anderson",children:"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."}),(0,r.jsx)(ReviewCard,{title:"Life-Changing Supplements!",icon:"".concat(d.basePath,"/Lydia.png"),reviewerName:"Lydia Anderson",children:"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."}),(0,r.jsx)(ReviewCard,{title:"Life-Changing Supplements!",icon:"".concat(d.basePath,"/Lydia.png"),reviewerName:"Lydia Anderson",children:"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."})]}),(0,r.jsxs)("div",{style:{marginBottom:"8rem"},children:[(0,r.jsx)(ReviewCard,{title:"Life-Changing Supplements!",icon:"".concat(d.basePath,"/Lydia.png"),reviewerName:"Lydia Anderson",children:"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."}),(0,r.jsx)(ReviewCard,{title:"Life-Changing Supplements!",icon:"".concat(d.basePath,"/Lydia.png"),reviewerName:"Lydia Anderson",children:"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."}),(0,r.jsx)(ReviewCard,{title:"Life-Changing Supplements!",icon:"".concat(d.basePath,"/Lydia.png"),reviewerName:"Lydia Anderson",children:"I've tried countless supplements, but Nutrition Rule stands out! Their products are top-notch, and I've seen incredible results. I can't recommend them enough."})]})]})}),(0,r.jsx)(o(),{style:{margin:"5rem"},src:"".concat(d.basePath,"/Splash.png"),alt:"reviews background",width:"1200",height:"1200"})]})]})})]})}t(9611)},6114:function(e){"use strict";e.exports={output:"export",images:{unoptimized:!0},basePath:"/Rule-Nutrition-Website"}},9611:function(){},9715:function(e){e.exports={cardContainer:"page_cardContainer__K2nsw",cardName:"page_cardName__XXxD1",cardPrice:"page_cardPrice__9BRKm",cardImage:"page_cardImage__iAjll",cardButton:"page_cardButton__eP5zC",cardsContainer:"page_cardsContainer__NnqLv",slideShow:"page_slideShow__Uq35I",rightbutton:"page_rightbutton__bESq_",leftbutton:"page_leftbutton__gA_9G",navContainer:"page_navContainer___nJWt",navLinks:"page_navLinks__tbKao",mobileMenuButton:"page_mobileMenuButton__XmF_c",navBarItems:"page_navBarItems__omy4x",backgroundText:"page_backgroundText__ILjSh",bgTextCont:"page_bgTextCont__4rOPl",socialIcons:"page_socialIcons__I3hDU",backgroundButtonSection:"page_backgroundButtonSection__4WVaq",backgroundButton:"page_backgroundButton__4eB_X",backgroundImg:"page_backgroundImg__moGpD",categoryContainer:"page_categoryContainer__vvT3K",catCard:"page_catCard__NMvJC",cardRowsContainer:"page_cardRowsContainer__fg8HO",catCardsRow:"page_catCardsRow__vrTU_",productNameText:"page_productNameText__kCpzh",catTitle:"page_catTitle__7t_pt",catPara:"page_catPara__nVg6g",categoryText:"page_categoryText__KHMcQ",cardImages:"page_cardImages__C3clf",productImage:"page_productImage__1QeYR",maskImage:"page_maskImage__yW67A",mask:"page_mask__e4YF9",img:"page_img__p7lpS",trendingTitle:"page_trendingTitle__3BFaf",trendingPara:"page_trendingPara__4W12h",reviewsSection:"page_reviewsSection__LXQUv",trendingSection:"page_trendingSection__I0cTo",reviewTitle:"page_reviewTitle__PrFUT",reviewsContainer:"page_reviewsContainer__olGtA",reviewCardCont:"page_reviewCardCont__lV4zC",reviewQoute:"page_reviewQoute__DauXg",reviewPara:"page_reviewPara__qSHNm",teamText:"page_teamText__QNKzV",teamBigText:"page_teamBigText__2I9Wj",fotnavLinks:"page_fotnavLinks__uwUye",footerNavCont:"page_footerNavCont__ZYs4v"}}},function(e){e.O(0,[676,958,929,748,971,864,744],function(){return e(e.s=6297)}),_N_E=e.O()}]);