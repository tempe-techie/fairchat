import{H as I,T as w,M as k}from"./components.07918e11.js";import{a as C,I as N,C as P,R as v,v as T,l as $,b as p,e as r,w as y,f as e,z as m,t as h,i as l,c as B,r as U,o as d}from"./entry.4231c9d7.js";import{C as j}from"./ChatPost.0ec61f83.js";import"./composables.13e9800d.js";import"./user.4ceb481a.js";import"./ProfileImage.657e45f5.js";import"./WaitingToast.3bdba704.js";import"./storageUtils.7800332f.js";import"./textUtils.bb230738.js";import"./MintedPostImage.679ebbb7.js";const x={data(){return{created:null,currentUserBalance:null,image:null,post:null}},components:{ChatPost:j},mounted(){this.getPostObject()},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext},getPostAuthor(){return this.post?this.post.creator_details.metadata.address:null},getQueryId(){return this.route.query.id}},methods:{async getPostObject(){this.post=null;const t=this.route.query.id;let s=localStorage.getItem("minted-post-"+t),a=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(a=this.signer);const u=new N(["function balanceOf(address _owner, uint256 _tokenId) external view returns (uint256)","function doesPostExist(string memory _postId, address _authorId) external view returns (bool)","function uri(uint256 _tokenId) public view returns (string memory)"]),o=new P(this.$config.iggyPostAddress,u,a);s||(s=await o.uri(t),localStorage.setItem("minted-post-"+t,s));const i=atob(s.substring(29)),c=JSON.parse(i),n=c.external_url.split("?id=").pop();this.image=c.image;const g=c.attributes[2].value,f={year:"numeric",month:"long",day:"numeric"};this.created=new Date(g*1e3).toLocaleDateString("en-US",f);let{data:b,error:_}=await this.$orbis.getPost(n);this.post=b,_&&(console.log("Orbis error:",_),this.toast("The post has been deleted.",{type:"warning"})),this.address&&(this.currentUserBalance=sessionStorage.getItem("balanceOf-"+this.address+"-postNft-"+t),this.currentUserBalance||(this.currentUserBalance=Number(await o.balanceOf(this.address,t)),sessionStorage.setItem("balanceOf-"+this.address+"-postNft-"+t,this.currentUserBalance)))}},setup(){const t=v(),s=T(),{address:a,isActivated:u,chainId:o,signer:i}=$();return{address:a,isActivated:u,chainId:o,route:t,signer:i,toast:s}},watch:{getQueryId(t,s){this.getPostObject()}}},O={key:0,class:"card mb-3 border scroll-500"},F={class:"card-body row"},S={class:"fs-3"},A={class:"col-sm-12 col-md-6 offset-md-3 mb-3"},M=["src"],Q={key:1,class:"card mb-3 border"},V={class:"card-body"},D=e("h4",{class:"mb-3 text-body"},"Info",-1),E={class:"text-break"},H={key:0},q={class:"text-primary"},R=["href"],z=e("i",{class:"bi bi-box-arrow-up-right"},null,-1),J=["href"],L=e("i",{class:"bi bi-box-arrow-up-right"},null,-1);function Y(t,s,a,u,o,i){const c=w,n=k,g=I,f=U("ChatPost");return d(),p("div",null,[r(g,null,{default:y(()=>[r(c,null,{default:y(()=>[l("Post NFT | "+h(t.$config.projectMetadataTitle),1)]),_:1}),r(n,{property:"og:title",content:"Post NFT | "+t.$config.projectMetadataTitle},null,8,["content"]),r(n,{name:"description",content:"Check out this minted post NFT on "+t.$config.projectName+"!"},null,8,["content"]),r(n,{property:"og:image",content:t.$config.projectUrl+t.$config.previewImagePostNft},null,8,["content"]),r(n,{property:"og:description",content:"Check out this minted post NFT on "+t.$config.projectName+"!"},null,8,["content"]),r(n,{name:"twitter:image",content:t.$config.projectUrl+t.$config.previewImagePostNft},null,8,["content"]),r(n,{name:"twitter:description",content:"Check out this minted post NFT on "+t.$config.projectName+"!"},null,8,["content"])]),_:1}),o.image?(d(),p("div",O,[e("div",F,[e("p",S,[e("i",{class:"bi bi-arrow-left-circle cursor-pointer",onClick:s[0]||(s[0]=b=>t.$router.back())})]),e("div",A,[e("img",{class:"img-fluid rounded",src:o.image},null,8,M)])])])):m("",!0),o.image?(d(),p("div",Q,[e("div",V,[D,e("ul",E,[e("li",null,"NFT ID: "+h(i.getQueryId),1),e("li",null,"First minted on: "+h(o.created),1),o.currentUserBalance||o.currentUserBalance===0?(d(),p("li",H,[l(" You own "),e("span",q,h(o.currentUserBalance),1),l(" of these post NFTs ")])):m("",!0),e("li",null,[e("a",{class:"text-decoration-none",target:"_blank",href:t.$config.marketplacePostNftItemUrl+i.getQueryId},[l(" See it on NFT marketplace "),z],8,R)]),e("li",null,[e("a",{class:"text-decoration-none",target:"_blank",href:t.$config.blockExplorerBaseUrl+"/token/"+t.$config.iggyPostAddress},[l(" Smart contract on block explorer "),L],8,J)])])])])):m("",!0),o.post?(d(),B(f,{key:2,post:o.post,showQuotedPost:!0,orbisContext:i.getOrbisContext},null,8,["post","orbisContext"])):m("",!0)])}const rt=C(x,[["render",Y]]);export{rt as default};
