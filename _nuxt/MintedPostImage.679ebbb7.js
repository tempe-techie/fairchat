import{a as r,I as c,C as d,l as g,o as u,c as l,w as m,f as h,T as p}from"./entry.4231c9d7.js";const f={name:"MintedPostImage",props:["id"],data(){return{streamId:null,image:null}},mounted(){this.fetchMetadata()},methods:{async fetchMetadata(){let t=localStorage.getItem("minted-post-"+this.id);if(!t){let i=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(i=this.signer);const n=new c(["function uri(uint256 _tokenId) external view returns (string memory)"]);t=await new d(this.$config.iggyPostAddress,n,i).uri(this.id),localStorage.setItem("minted-post-"+this.id,t)}const s=atob(t.substring(29)),e=JSON.parse(s);this.streamId=e.external_url.split("?id=")[1],this.image=e.image}},setup(){const{isActivated:t,chainId:s,signer:e}=g();return{isActivated:t,chainId:s,signer:e}}},_=["src"];function I(t,s,e,i,n,a){const o=p;return u(),l(o,{to:"/minted-post/?id="+e.id},{default:m(()=>[h("img",{class:"img-fluid rounded",src:n.image},null,8,_)]),_:1},8,["to"])}const C=r(f,[["render",I]]);export{C as M};
