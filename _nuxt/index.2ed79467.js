import{a as r,l as n,c as i,r as p,o as a}from"./entry.05153387.js";import{C as c}from"./ChatFeed.c2c352cf.js";import"./ChatPost.c928b9e1.js";import"./user.5190531e.js";import"./ProfileImage.773fdcd0.js";import"./WaitingToast.ae8b2615.js";import"./storageUtils.f31e4859.js";import"./textUtils.b97fe180.js";import"./MintedPostImage.616c5f04.js";import"./SwitchChainButton.34d11b83.js";import"./site.0bb78975.js";import"./ConnectWalletButton.b37dec56.js";import"./FileUploadModal.5e403aa5.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,u,f,h,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",allPosts:!0,showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(m,[["render",d]]);export{Q as default};
