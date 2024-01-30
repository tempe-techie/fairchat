import{H as x,T as S,M as T}from"./components.ef8849d8.js";import{a as U,p as P,I as b,C as y,$ as D,l as q,v as A,b as d,e as m,w as _,f as t,z as c,t as u,x as h,y as p,i as g,c as w,F as W,r as C,o as a}from"./entry.96e8d25e.js";import{C as H}from"./ConnectWalletButton.f6cbd955.js";import{W as I}from"./WaitingToast.19b5ff79.js";import{F as M}from"./FileUploadModal.770a97a8.js";import{u as j}from"./user.84f99b47.js";import{f as B}from"./storageUtils.64da3cbd.js";import"./composables.bf7d0aab.js";import"./site.9294b26f.js";const V={name:"NftCreate",data(){return{cDescription:null,cImage:null,cName:null,cSymbol:null,isMounted:!1,launchpadPaused:null,nftName:null,createPriceWei:null,ratio:null,uniqueId:null,waitingCreate:!1,waitingData:!1}},components:{ConnectWalletButton:H,FileUploadModal:M,WaitingToast:I},mounted(){this.isMounted=!0,this.ratio=this.$config.nftDefaultRatio,this.fetchData()},computed:{cleanDescription(){return this.cDescription?this.cDescription.replace(/"/g,"'"):null},createPrice(){if(!this.createPriceWei)return null;const e=Number(P(this.createPriceWei));return e>1?e.toFixed(0):e>.1?e.toFixed(4):e>.01?e.toFixed(5):e>.001?e.toFixed(6):e>1e-4?e.toFixed(7):e>1e-5?e.toFixed(8):e>1e-6?e.toFixed(9):e},fieldsValid(){return this.cName&&this.cSymbol&&this.cImage&&this.cDescription&&this.nftName&&this.ratio}},methods:{async createCollection(){if(this.waitingCreate=!0,this.signer){const e=new b([`function launch(
              address contractOwner_,
              address referrer_,
              string memory mdDescription_,
              string memory mdImage_,
              string memory mdName_,
              string memory name_,
              string memory symbol_,
              string calldata uniqueId_, 
              uint256 ratio_
            ) external payable`,"function getNftContractAddress(string calldata _uniqueId) external view returns(address)"]),o=new y(this.$config.nftLaunchpadBondingAddress,e,this.signer);try{const n=await o.launch(this.address,B(window),this.cleanDescription,this.cImage,this.nftName,this.cName,this.cSymbol,this.uniqueId,D(String(this.ratio)),{value:this.createPriceWei}),l=this.toast({component:I,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),i=await n.wait();if(i.status===1){this.toast.dismiss(l),this.toast("You have successfully created an NFT collection!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()});const r=await o.getNftContractAddress(this.uniqueId);this.makeOrbisPost(r),this.$router.push({path:"/nft/collection",query:{id:r}}),this.waitingCreate=!1}else this.toast.dismiss(l),this.waitingCreate=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(i)}catch(n){console.error(n),this.toast(n.message,{type:"error"}),this.waitingCreate=!1}}this.waitingCreate=!1},async fetchData(){this.waitingData=!0;let e=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(e=this.signer);const o=new b(["function paused() public view returns(bool)","function isUniqueIdAvailable(string calldata _uniqueId) public view returns(bool)","function price() public view returns(uint256)"]),n=new y(this.$config.nftLaunchpadBondingAddress,o,e);this.launchpadPaused=await n.paused(),this.uniqueId=Math.random().toString(36).slice(2),await n.isUniqueIdAvailable(this.uniqueId)||(this.uniqueId=Math.random().toString(36).slice(10)),this.createPriceWei=await n.price(),this.waitingData=!1},insertImage(e){this.cImage=e.replace("?.img","")},async makeOrbisPost(e){if(this.userStore.getIsConnectedToOrbis)try{!String(this.cImage).toLowerCase().endsWith("?.img")&&!String(this.cImage).toLowerCase().endsWith(".png")&&!String(this.cImage).toLowerCase().endsWith(".jpg")&&!String(this.cImage).toLowerCase().endsWith(".jpeg")&&!String(this.cImage).toLowerCase().endsWith(".gif")&&!String(this.cImage).toLowerCase().endsWith(".webp")&&(this.cImage=this.cImage+"?.img");const o={body:"I have launched a new NFT collection: "+this.cName+". Check it out here \u{1F447}",context:this.$config.orbisContext,tags:[{slug:"nfts",title:"Memes & NFTs"}],data:{type:"nftCollectionCreated",authorAddress:String(this.address),collectionAddress:String(e),collectionDescription:this.cleanDescription,collectionImage:this.cImage.replace("?.img",""),collectionName:this.cName,collectionRatio:this.ratio,collectionSymbol:this.cSymbol,collectionUniqueId:this.uniqueId,pricePaidWei:this.createPriceWei}};await this.$orbis.createPost(o)}catch(o){console.log(o)}}},setup(){const{address:e,chainId:o,isActivated:n,signer:l}=q(),i=j(),r=A();return{address:e,chainId:o,isActivated:n,signer:l,toast:r,userStore:i}}},E={class:"card border scroll-500"},L={class:"card-body"},R={class:"fs-3"},z=t("h3",{class:"mb-4 mt-3"},"Create NFT Collection",-1),O={key:0,class:"d-flex justify-content-center mb-3"},K=t("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),Y=[K],G={key:1,class:"mb-4"},J={class:"mb-4"},Q=t("label",{for:"cName",class:"form-label"},"Collection Name",-1),X=t("div",{id:"cNameHelp",class:"form-text"},"This is not a token name, but the whole collection name.",-1),Z={class:"mb-4"},$=t("label",{for:"cSymbol",class:"form-label"},"Collection Symbol",-1),ee=t("div",{id:"cSymbolHelp",class:"form-text"},"Collection symbol (required by the ERC-721 smart contract, but not really important).",-1),te={class:"mb-2"},ie=t("label",{for:"cImage",class:"form-label"},"Collection Image (can be changed later)",-1),oe={class:"input-group","aria-describedby":"cImageHelp",id:"cImage"},se=["data-bs-target"],ne=t("i",{class:"bi bi-file-earmark-image-fill"},null,-1),ae=t("div",{id:"cImageHelp",class:"form-text"},"Even if you want a generative PFP collection, put a single preview image for now and you will change it to a metadata link later.",-1),le={key:2,class:"mb-4"},re=["src"],ce=t("br",null,null,-1),de=t("small",null,"If image didn't appear above, then something is wrong with the link you added.",-1),ue={class:"mb-4"},me=t("label",{for:"cDescription",class:"form-label"},"Collection Description (can be changed later)",-1),he=t("div",{id:"cDescriptionHelp",class:"form-text"},"Too long description means higher gas cost for storing it.",-1),pe={class:"mb-4"},fe=t("label",{for:"nftName",class:"form-label"},"NFT Name (can be changed later)",-1),ge={key:0,id:"nftNameHelp",class:"form-text"},be={class:"mb-4"},ye=t("label",{for:"uniqueId",class:"form-label"},"Unique ID (store it - just in case)",-1),_e=t("div",{id:"uniqueIdHelp",class:"form-text"},"This is just in case the frontend will not show you the NFT collection address and you'll need to find it manually.",-1),we={class:"mb-4"},Ce=t("label",{for:"ratio",class:"form-label"},"Bonding Curve Ratio",-1),Ie={id:"ratioHelp",class:"form-text"},ve={class:"d-flex justify-content-center mt-5 mb-5"},Ne={key:0},ke=["disabled"],Fe={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},xe={key:1,class:"text-center mt-1"},Se=t("small",null,[t("em",null,"(+ gas fees of around $16)")],-1),Te=[Se],Ue={key:1,disabled:!0,class:"btn btn-primary"};function Pe(e,o,n,l,i,r){const v=S,f=T,N=x,k=C("ConnectWalletButton"),F=C("FileUploadModal");return a(),d(W,null,[m(N,null,{default:_(()=>[m(v,null,{default:_(()=>[g("Create NFT Collection | "+u(e.$config.projectMetadataTitle),1)]),_:1}),m(f,{property:"og:title",content:"Create NFT Collection | "+e.$config.projectMetadataTitle},null,8,["content"]),m(f,{name:"description",content:"Create your very own NFT collection on "+e.$config.projectName+"!"},null,8,["content"]),m(f,{property:"og:image",content:e.$config.projectUrl+e.$config.previewImageNftCreate},null,8,["content"]),m(f,{property:"og:description",content:"Create your very own NFT collection on "+e.$config.projectName+"!"},null,8,["content"]),m(f,{name:"twitter:image",content:e.$config.projectUrl+e.$config.previewImageNftCreate},null,8,["content"]),m(f,{name:"twitter:description",content:"Create your very own NFT collection on "+e.$config.projectName+"!"},null,8,["content"])]),_:1}),t("div",E,[t("div",L,[t("p",R,[t("i",{class:"bi bi-arrow-left-circle cursor-pointer",onClick:o[0]||(o[0]=s=>e.$router.back())})]),z,i.waitingData?(a(),d("div",O,Y)):c("",!0),r.createPrice?(a(),d("p",G," Price for creating a collection is "+u(r.createPrice)+" "+u(e.$config.tokenSymbol)+" (+ gas fees which are currently around $16). ",1)):c("",!0),t("div",J,[Q,h(t("input",{type:"text",class:"form-control",id:"cName","aria-describedby":"cNameHelp",placeholder:"e.g. Crypto Punks","onUpdate:modelValue":o[1]||(o[1]=s=>i.cName=s)},null,512),[[p,i.cName]]),X]),t("div",Z,[$,h(t("input",{type:"text",class:"form-control",id:"cSymbol","aria-describedby":"cSymbolHelp",placeholder:"e.g. PUNKS","onUpdate:modelValue":o[2]||(o[2]=s=>i.cSymbol=s)},null,512),[[p,i.cSymbol]]),ee]),t("div",te,[ie,t("div",oe,[h(t("input",{"onUpdate:modelValue":o[3]||(o[3]=s=>i.cImage=s),type:"text",class:"form-control",placeholder:"Enter image URL or click the upload button"},null,512),[[p,i.cImage]]),l.isActivated&&e.$config.fileUploadEnabled!==""?(a(),d("button",{key:0,class:"btn btn-outline-secondary rounded-end-2","data-bs-toggle":"modal","data-bs-target":"#fileUploadModal"+e.$.uid},[ne,g(" Upload ")],8,se)):c("",!0)]),ae]),i.cImage?(a(),d("div",le,[t("img",{src:i.cImage,class:"img-thumbnail img-fluid",style:{"max-width":"100px"}},null,8,re),ce,de])):c("",!0),t("div",ue,[me,h(t("input",{type:"text",class:"form-control",id:"cDescription","aria-describedby":"cDescriptionHelp",placeholder:"Keep it short and sweet.","onUpdate:modelValue":o[4]||(o[4]=s=>i.cDescription=s)},null,512),[[p,i.cDescription]]),he]),t("div",pe,[fe,h(t("input",{type:"text",class:"form-control",id:"cDescription","aria-describedby":"nftNameHelp",placeholder:"Short, will show up next to each NFT, e.g. Punk","onUpdate:modelValue":o[5]||(o[5]=s=>i.nftName=s)},null,512),[[p,i.nftName]]),i.nftName?(a(),d("div",ge,"The first minted NFTs will be "+u(i.nftName)+" #1, "+u(i.nftName)+" #2, "+u(i.nftName)+" #3 etc.",1)):c("",!0)]),t("div",be,[ye,h(t("input",{type:"text",class:"form-control",id:"uniqueId","aria-describedby":"uniqueIdHelp",disabled:"",readonly:"","onUpdate:modelValue":o[6]||(o[6]=s=>i.uniqueId=s)},null,512),[[p,i.uniqueId]]),_e]),t("div",we,[Ce,h(t("input",{type:"text",class:"form-control",id:"ratio","aria-describedby":"ratioHelp","onUpdate:modelValue":o[7]||(o[7]=s=>i.ratio=s)},null,512),[[p,i.ratio]]),t("div",Ie,"Leave at "+u(e.$config.nftDefaultRatio)+" unless you know what you're doing.",1)]),t("div",ve,[l.isActivated&&!i.launchpadPaused?(a(),d("div",Ne,[l.isActivated&&!i.launchpadPaused?(a(),d("button",{key:0,disabled:i.waitingCreate||!r.fieldsValid,class:"btn btn-primary",type:"button",onClick:o[8]||(o[8]=(...s)=>r.createCollection&&r.createCollection(...s))},[i.waitingData||i.waitingCreate?(a(),d("span",Fe)):c("",!0),g(" Create NFT Collection for "+u(r.createPrice)+" "+u(e.$config.tokenSymbol),1)],8,ke)):c("",!0),l.isActivated&&!i.launchpadPaused?(a(),d("p",xe,Te)):c("",!0)])):c("",!0),l.isActivated&&i.launchpadPaused?(a(),d("button",Ue," Paused ")):c("",!0),l.isActivated?c("",!0):(a(),w(k,{key:2,class:"btn btn-primary",btnText:"Connect wallet"}))]),i.isMounted?(a(),w(F,{key:3,onProcessFileUrl:r.insertImage,title:"Upload your NFT image",infoText:"Upload the NFT image.",componentId:e.$.uid,maxFileSize:e.$config.fileUploadSizeLimit},null,8,["onProcessFileUrl","componentId","maxFileSize"])):c("",!0)])])],64)}const Ee=U(V,[["render",Pe]]);export{Ee as default};
