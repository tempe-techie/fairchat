import{H as p,T as m,M as c}from"./components.219ef155.js";import{a as l,l as d,b as f,e,w as s,F as u,r as _,o as g,i as h,t as C}from"./entry.2281cc89.js";import{C as T}from"./ChatFeed.8c320038.js";import"./composables.af1a1cf9.js";import"./ChatPost.da5a42ad.js";import"./user.efa18751.js";import"./ProfileImage.4c9afe1c.js";import"./WaitingToast.b15d183c.js";import"./storageUtils.e16d31f7.js";import"./textUtils.95c501bb.js";import"./MintedPostImage.5e3c4d46.js";import"./SwitchChainButton.0b7453c0.js";import"./site.4592fe44.js";import"./ConnectWalletButton.40624d03.js";import"./FileUploadModal.5deed946.js";const $={name:"memesnfts",components:{ChatFeed:T},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext}},setup(){const{address:t,chainId:o}=d();return{address:t,chainId:o}}};function x(t,o,w,F,M,b){const n=m,r=c,a=p,i=_("ChatFeed");return g(),f(u,null,[e(a,null,{default:s(()=>[e(n,null,{default:s(()=>[h("Memes & NFTs | "+C(t.$config.projectMetadataTitle),1)]),_:1}),e(r,{property:"og:title",content:"Memes & NFTs | "+t.$config.projectMetadataTitle},null,8,["content"])]),_:1}),e(i,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,allPosts:!0,orbisContext:"kjzl6cwe1jw146cone6md8rij8pe51xa33gyxyz599l2k4aadl4p6j990af1gxt"},null,8,["showQuotedPost"])],64)}const R=l($,[["render",x]]);export{R as default};