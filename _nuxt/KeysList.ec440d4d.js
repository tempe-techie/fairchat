import{a as u,p as h,I as f,C as p,l as m,o as a,b as o,f as t,F as g,G as b,t as c,z as y}from"./entry.4231c9d7.js";const _={name:"KeysList",data(){return{featuredKeys:this.$config.keysFeatured,domainObjects:[],waiting:!1}},mounted(){this.getKeysPrices()},methods:{formatPrice(s){const e=Number(h(s));return e>1?e.toFixed(2):e>.1?e.toFixed(4):e>.01?e.toFixed(5):e>.001?e.toFixed(6):e>1e-4?e.toFixed(7):e>1e-5?e.toFixed(8):e>1e-6?e.toFixed(9):e},async getKeysPrices(){this.waiting=!0,this.domainObjects=[];const s=new f(["function getBuyPriceAfterFee(string memory domainName, uint256 amount) public view returns (uint256)"]);let e=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(e=this.signer);const n=new p(this.$config.keysAddress,s,e);for(let r=0;r<this.featuredKeys.length;r++){const i=this.featuredKeys[r],l=await n.getBuyPriceAfterFee(i,1);this.domainObjects.push({name:i,price:this.formatPrice(l)})}this.domainObjects.sort((r,i)=>Number(r.price)<Number(i.price)?1:-1),this.waiting=!1}},setup(){const{address:s,chainId:e,isActivated:n,signer:r}=m();return{address:s,chainId:e,isActivated:n,signer:r}}},F={class:"table bg-transparent text-center"},x=t("thead",null,[t("tr",null,[t("th",{class:"bg-transparent",scope:"col"},"Domain"),t("th",{class:"bg-transparent",scope:"col"},"Key price")])],-1),k={class:"bg-transparent text-break"},w={class:"bg-transparent text-nowrap"},K={key:0,class:"d-flex justify-content-center mb-3"},$=t("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),N=[$];function v(s,e,n,r,i,l){return a(),o("div",null,[t("table",F,[x,t("tbody",null,[(a(!0),o(g,null,b(i.domainObjects,d=>(a(),o("tr",{key:d.name},[t("td",k,c(d.name)+c(s.$config.tldName),1),t("td",w,c(d.price)+" "+c(s.$config.tokenSymbol),1)]))),128))])]),i.waiting?(a(),o("div",K,N)):y("",!0)])}const P=u(_,[["render",v]]);export{P as K};
