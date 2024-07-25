import{m as w}from"./mapComponent-4RV1k2oF.js";import{_ as U,j as C,c as d,a as e,t as m,b as n,z as f,F as k,g,k as i,l as b,v as _,s as p,q as x,y as V,i as v,o as r,n as B,p as T,h as S}from"./index-XFxa4HIO.js";const I={components:{mapComponent:w},data(){return{contactUs:{contactFirstName:"",contactLastName:"",contactEmail:"",contactPhone:"",companyName:""},imageUrls:[],videoUrls:[],selectedFile:null,propertyTitle:"اقامتگاه ویلایی",propertyCategory:"",propertyType:"",selectedBusinessType:"",citySelected:"",citySelect:"",areaSelect:"",postalCode:"",addressInput:"",meterageInput:"",selectedBedrooms:"4",service:"2",parking:"",selectedCheckboxes:[],dicText:"",animal:{allowCats:!1,allowDogs:!1},price:{value:0,currency:"toman",duration:"month"}}},methods:{handleFileUpload(){const s=this.$refs.fileInput.files;if(s.length>0){const h=s[0].size,u=10*1024*1024;if(h>u){alert("حجم فایل باید زیر ده مگابایت باشد .");return}}for(let h=0;h<s.length;h++){const u=new FileReader;u.onload=()=>{const o=u.result;s[h].type.startsWith("image/")?this.imageUrls.push(o):s[h].type.startsWith("video/")&&this.videoUrls.push(o),console.log("عکس",this.imageUrls),console.log("ویدیو",this.videoUrls)},u.readAsDataURL(s[h])}},updateCheckbox(c){const s=this.selectedCheckboxes.findIndex(h=>h.name===c.name);s===-1?this.selectedCheckboxes.push(c):this.selectedCheckboxes=this.selectedCheckboxes.filter((h,u)=>u!==s)},async saveAndContinue(){if(this.videoUrls.length>1&&(this.videoUrls=[this.videoUrls[0]]),console.log(this.videoUrls),this.propertyTitle&&this.propertyCategory)try{const c={contactUs:{...this.contactUs},title:this.propertyTitle,category:this.propertyCategory,type:this.propertyType,type2:this.selectedBusinessType,city:this.citySelected,city2:this.citySelect,area:this.areaSelect,postalCode:this.postalCode,address:this.addressInput,Bedrooms:this.selectedBedrooms,service:this.service,parking:this.parking,selectedCheckboxes:this.selectedCheckboxes,animal:this.animal,dicText:this.dicText,price:this.price,file:this.selectedFile,meter:this.meterageInput,img:this.imageUrls,video:this.videoUrls};if(this.selectedFile&&this.selectedFile.size>8*1024*1024){alert("حجم فایل باید کمتر از 8 مگابایت باشد.");return}console.log(c);const s=await C.post("https://jsonplaceholder.typicode.com/posts",c,{headers:{"Content-Type":"multipart/form-data"}});console.log("Response:",s.data),this.$router.push("/plan")}catch(c){console.error("Error sending data:",c)}else alert("Please fill in all the required fields")},async updateBusinessType(c){this.selectedBusinessType=c},handleBedroomsClick(c){this.selectedBedrooms=c}}},t=c=>(T("data-v-354055f7"),c=c(),S(),c),q={class:"modal fade",id:"preview-modal",tabindex:"-1"},z={class:"modal-dialog modal-fullscreen",role:"document"},F={class:"modal-content"},N=v('<div class="modal-header d-block d-sm-flex" data-v-354055f7><h3 class="h5 text-muted fw-normal modal-title d-none d-sm-block" data-v-354055f7> پیش نمایش ملک </h3><div class="d-flex align-items-center" data-v-354055f7><a data-bs-dismiss="modal" class="btn btn-primary btn-sm me-4" href="#" data-v-354055f7>ذخیره و ادامه</a><span class="fs-xs text-muted ms-auto me-2" data-v-354055f7>بستن</span><button class="btn-close me-0" type="button" data-bs-dismiss="modal" data-v-354055f7></button></div></div>',1),j={class:"modal-body p-0"},D={class:"container mt-2 mt-sm-0 py-4 py-sm-5"},L={class:"h2 mb-2"},M={class:"mb-2 pb-1 fs-base"},E={class:"d-flex mb-4 list-unstyled"},R={class:"me-3 pe-3 border-end"},A={class:"me-1"},P=t(()=>e("i",{class:"fi-bed mt-n1 lead align-middle text-muted"},null,-1)),H={class:"me-3 pe-3 border-end"},W={class:"me-1"},Y=t(()=>e("i",{class:"fi-bath mt-n1 lead align-middle text-muted"},null,-1)),G={class:"me-3 pe-3 border-end"},J={class:"me-1"},K=t(()=>e("i",{class:"fi-car mt-n1 lead align-middle text-muted"},null,-1)),O={class:"overflow-auto pb-3 px-2 mx-n2 mb-4","data-simplebar":""},Q={class:"row g-2 g-md-3",style:{"min-width":"30rem"}},X={class:"col-8"},Z=["src"],$={key:1,width:"100%",height:"610px",style:{"margin-top":"-75px"},controls:""},ee=["src"],se={class:"col-4"},oe=["src"],te=["src"],le={class:"row"},ie={class:"col-md-7 mb-md-0 mb-4"},ne=t(()=>e("span",{class:"badge bg-success me-2 mb-3"},"تایید",-1)),ae=t(()=>e("span",{class:"badge bg-info me-2 mb-3"},"جدید",-1)),ce={class:"h3 mb-4 pb-4 border-bottom"},de={key:0,class:"d-inline-block ms-1 fs-base fw-normal text-body"},re={key:1,class:"d-inline-block ms-1 fs-base fw-normal text-body"},me={key:2,class:"d-inline-block ms-1 fs-base fw-normal text-body"},pe={key:3,class:"d-inline-block ms-1 fs-base fw-normal text-body"},he={key:4,class:"d-inline-block ms-1 fs-base fw-normal text-body"},be={key:5,class:"d-inline-block ms-1 fs-base fw-normal text-body"},ue={class:"mb-4 pb-md-3"},fe=t(()=>e("h3",{class:"h4"},"توضیحات در مورد ملک",-1)),_e={class:"mb-1"},ve={class:"mb-4 pb-md-3"},ye=t(()=>e("h3",{class:"h4"},"جزئیات ملک",-1)),ke={class:"list-unstyled mb-0"},ge=t(()=>e("b",null,"نوع: ",-1)),xe=t(()=>e("b",null,"متراژ: ",-1)),we=t(()=>e("b",null,"تعداد اتاق خواب: ",-1)),Ue=t(()=>e("b",null,"تعداد سرویس بهداشتی: ",-1)),Ce=t(()=>e("b",null,"پارکینگ: ",-1)),Ve={class:"mb-sm-3"},Be=t(()=>e("h3",{class:"h4"},"امکانات رفاهی",-1)),Te={class:"list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap"},Se={class:"container mt-5 mb-md-4 py-5"},Ie={class:"row"},qe={class:"col-lg-8 add-property"},ze=v('<nav class="mb-3 pt-md-3" aria-label="Breadcrumb" data-v-354055f7><ol class="breadcrumb" data-v-354055f7><li class="breadcrumb-item" data-v-354055f7><a href="/" data-v-354055f7>خانه</a></li><li class="breadcrumb-item active" aria-current="page" data-v-354055f7> ثبت ملک </li></ol></nav>',1),Fe=t(()=>e("div",{class:"mb-4"},[e("h1",{class:"h2 mb-0"},"ثبت ملک جدید"),e("div",{class:"d-lg-none pt-3 mb-2"},"65% اطلاعات تکمیل شده است."),e("div",{class:"progress d-lg-none mb-4",style:{height:"0.25rem"}},[e("div",{class:"progress-bar bg-warning",role:"progressbar",style:{width:"65%"},"aria-valuenow":"65","aria-valuemin":"0","aria-valuemax":"100"})])],-1)),Ne={class:"card card-body border-0 shadow-sm p-4 mb-4",id:"basic-info"},je=t(()=>e("h2",{class:"h5 mb-4"},[e("i",{class:"fi-info-circle text-primary fs-5 mt-n1 me-2"}),n("اطلاعات پایه ")],-1)),De={class:"mb-3"},Le=t(()=>e("label",{class:"form-label",for:"ap-title"},[n("نام ملک "),e("span",{class:"text-danger"},"*")],-1)),Me=t(()=>e("span",{class:"form-text"},"48 کاراکتر باقی مانده است ",-1)),Ee={class:"row"},Re={class:"col-sm-6 mb-3"},Ae=t(()=>e("label",{class:"form-label",for:"ap-category"},[n("دسته بندی "),e("span",{class:"text-danger"},"*")],-1)),Pe=t(()=>e("option",{value:"",disabled:"",hidden:""},"انتخاب دسته بندی",-1)),He=t(()=>e("option",{value:"اجاره"},"اجاره",-1)),We=t(()=>e("option",{value:"فروش"},"فروش",-1)),Ye=[Pe,He,We],Ge={class:"col-sm-6 mb-3"},Je=t(()=>e("label",{class:"form-label",for:"ap-type"},[n("نوع ملک "),e("span",{class:"text-danger"},"*")],-1)),Ke=v('<option value="" disabled hidden data-v-354055f7>انتخاب نوع ملک</option><option value="آپارتمان" data-v-354055f7>آپارتمان</option><option value="خانه" data-v-354055f7>خانه</option><option value="اداری" data-v-354055f7>اداری</option><option value="سوئیت" data-v-354055f7>سوئیت</option>',5),Oe=[Ke],Qe=t(()=>e("div",{class:"form-label fw-bold pt-3 pb-2"}," آیا به عنوان یک شخص حقوقی آگهی ثبت می کنید؟ ",-1)),Xe={class:"form-check"},Ze=t(()=>e("label",{class:"form-check-label",for:"ap-company"},"ملک تجاری می باشد.",-1)),$e={class:"form-check"},es=t(()=>e("label",{class:"form-check-label",for:"ap-individual"},"ملک شخصی می باشد.",-1)),ss={class:"card card-body border-0 shadow-sm p-4 mb-4",id:"location"},os=t(()=>e("h2",{class:"h5 mb-4"},[e("i",{class:"fi-map-pin text-primary fs-5 mt-n1 me-2"}),n("موقعیت مکانی ")],-1)),ts={class:"row"},ls={class:"col-sm-6 mb-3"},is=t(()=>e("label",{class:"form-label",for:"ap-country"},[n(" استان "),e("span",{class:"text-danger"},"*")],-1)),ns=v('<option value="" disabled data-v-354055f7>انتخاب استان</option><option value="bojnord" selected data-v-354055f7>خراسان شمالی</option><option value="mashahad" data-v-354055f7>خراسان رضوی</option><option value="tehran" data-v-354055f7>تهران</option><option value="esfhan" data-v-354055f7>اصفهان</option><option value="azarba" data-v-354055f7>آذربایجان شرقی</option>',6),as=[ns],cs={class:"col-sm-6 mb-3"},ds=t(()=>e("label",{class:"form-label",for:"ap-city"},[n("شهر "),e("span",{class:"text-danger"},"*")],-1)),rs=v('<option value="" disabled data-v-354055f7>انتخاب شهر</option><option value="bojnord" selected data-v-354055f7>بجنورد</option><option value="mashhad" data-v-354055f7>مشهد</option><option value="tehran" data-v-354055f7>تهران</option><option value="esfhan" data-v-354055f7>اصفهان</option><option value="tabriz" data-v-354055f7>تبریز</option>',6),ms=[rs],ps={class:"row"},hs={class:"col-sm-8 mb-3"},bs=t(()=>e("label",{class:"form-label",for:"ap-district"},[n("منطقه "),e("span",{class:"text-danger"},"*")],-1)),us=v('<option value="" disabled data-v-354055f7>انتخاب منطقه</option><option value="1" data-v-354055f7>منطقه 1</option><option value="2" data-v-354055f7>منطقه 2</option><option value="3" data-v-354055f7>منطقه 3</option><option value="4" data-v-354055f7>منطقه 4</option><option value="5" selected data-v-354055f7>منطقه 5</option>',6),fs=[us],_s={class:"col-sm-4 mb-3"},vs=t(()=>e("label",{class:"form-label",for:"ap-zip"},[n("کد پستی "),e("span",{class:"text-danger"},"*")],-1)),ys={class:"mb-3"},ks=t(()=>e("label",{class:"form-label",for:"ap-address"},[n("آدرس "),e("span",{class:"text-danger"},"*")],-1)),gs={class:"card card-body border-0 shadow-sm p-4 mb-4",id:"details"},xs=t(()=>e("h2",{class:"h5 mb-4"},[e("i",{class:"fi-edit text-primary fs-5 mt-n1 me-2"}),n("جزئیات ملک ")],-1)),ws={class:"mb-4",style:{"max-width":"25rem"}},Us=t(()=>e("label",{class:"form-label",for:"ap-area"},"مساحت کل بر اساس متر مربع",-1)),Cs={class:"mb-4"},Vs=t(()=>e("label",{class:"form-label d-block fw-bold mb-2 pb-1"},"تعداد اتاق خواب",-1)),Bs={class:"btn-group btn-group-sm",role:"group","aria-label":"Choose number of bedrooms"},Ts=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"studio"},"0",-1)),Ss=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"bedrooms-1"},"1",-1)),Is=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"bedrooms-2"},"2",-1)),qs=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"bedrooms-3"},"3",-1)),zs=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"bedrooms-4"},"4",-1)),Fs=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"bedrooms-5"},"5+",-1)),Ns={class:"mb-4"},js=t(()=>e("label",{class:"form-label d-block fw-bold mb-2 pb-1"},"تعداد سرویس بهداشتی",-1)),Ds={class:"btn-group btn-group-sm",role:"group","aria-label":"Choose number of bathrooms"},Ls=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"bathrooms-1"},"1",-1)),Ms=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"bathrooms-2"},"2",-1)),Es=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"bathrooms-3"},"3",-1)),Rs=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"bathrooms-4"},"4",-1)),As={class:"mb-4"},Ps=t(()=>e("label",{class:"form-label d-block fw-bold mb-2 pb-1"},"تعداد پارکینگ",-1)),Hs={class:"btn-group btn-group-sm",role:"group","aria-label":"Choose number of parking spots"},Ws=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"parking-1"},"1",-1)),Ys=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"parking-2"},"2",-1)),Gs=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"parking-3"},"3",-1)),Js=t(()=>e("label",{class:"btn btn-outline-secondary fw-normal",for:"parking-4"},"4",-1)),Ks={class:"mb-4"},Os=t(()=>e("label",{class:"form-label d-block fw-bold mb-2 pb-1"},"امکانات رفاهی",-1)),Qs={class:"row"},Xs={class:"col-sm-4"},Zs=t(()=>e("input",{class:"form-check-input",type:"checkbox",value:"wifi"},null,-1)),$s=t(()=>e("label",{class:"form-check-label",for:"wifi"},"وای فای",-1)),eo=[Zs,$s],so=t(()=>e("input",{class:"form-check-input",type:"checkbox",value:"air-condition"},null,-1)),oo=t(()=>e("label",{class:"form-check-label",for:"air-condition"},"تهویه هوا",-1)),to=[so,oo],lo=t(()=>e("input",{class:"form-check-input",type:"checkbox",id:"gym"},null,-1)),io=t(()=>e("label",{class:"form-check-label",for:"gym"},"باشگاه بدنسازی",-1)),no=[lo,io],ao=t(()=>e("input",{class:"form-check-input",type:"checkbox",value:"free-parking"},null,-1)),co=t(()=>e("label",{class:"form-check-label",for:"free-parking"},"پارکینگ رایگان",-1)),ro=[ao,co],mo={class:"col-sm-4"},po=t(()=>e("input",{class:"form-check-input",type:"checkbox",value:"pets-friendly"},null,-1)),ho=t(()=>e("label",{class:"form-check-label",for:"pets-friendly"},"نگهداری حیوانات خانگی",-1)),bo=[po,ho],uo=t(()=>e("input",{class:"form-check-input",type:"checkbox",id:"pool"},null,-1)),fo=t(()=>e("label",{class:"form-check-label",for:"pool"},"استخر",-1)),_o=[uo,fo],vo=t(()=>e("input",{class:"form-check-input",type:"checkbox",value:"tv"},null,-1)),yo=t(()=>e("label",{class:"form-check-label",for:"tv"},"تلویزیون",-1)),ko=[vo,yo],go=t(()=>e("input",{class:"form-check-input",type:"checkbox",value:"heating"},null,-1)),xo=t(()=>e("label",{class:"form-check-label",for:"heating"},"سیستم گرمایشی",-1)),wo=[go,xo],Uo={class:"col-sm-4"},Co=t(()=>e("input",{class:"form-check-input",type:"checkbox",value:"dishwasher"},null,-1)),Vo=t(()=>e("label",{class:"form-check-label",for:"dishwasher"},"ماشین لباسشویی",-1)),Bo=[Co,Vo],To=t(()=>e("input",{class:"form-check-input",type:"checkbox",value:"hair-dryer"},null,-1)),So=t(()=>e("label",{class:"form-check-label",for:"hair-dryer"},"آسانسور",-1)),Io=[To,So],qo=t(()=>e("input",{class:"form-check-input",type:"checkbox",value:"kitchen"},null,-1)),zo=t(()=>e("label",{class:"form-check-label",for:"kitchen"},"آشپزخانه",-1)),Fo=[qo,zo],No=t(()=>e("input",{class:"form-check-input",type:"checkbox",value:"security-cameras"},null,-1)),jo=t(()=>e("label",{class:"form-check-label",for:"security-cameras"},"دوربین مداربسته",-1)),Do=[No,jo],Lo={class:"mb-4"},Mo=t(()=>e("label",{class:"form-label d-block fw-bold mb-2 pb-1"},"نگهداری حیوانات خانگی",-1)),Eo={class:"row"},Ro={class:"col-sm-4"},Ao={class:"form-check"},Po=t(()=>e("label",{class:"form-check-label",for:"allow-cats"},"گربه مجاز است",-1)),Ho={class:"form-check"},Wo=t(()=>e("label",{class:"form-check-label",for:"allow-dogs"},"سگ مجار است",-1)),Yo=t(()=>e("label",{class:"form-label",for:"ap-description"},"توضیحات ",-1)),Go=t(()=>e("span",{class:"form-text"},"1500 کاراکتر باقی مانده است",-1)),Jo={class:"card card-body border-0 shadow-sm p-4 mb-4",id:"price"},Ko=t(()=>e("h2",{class:"h5 mb-4"},[e("i",{class:"fi-cash text-primary fs-5 mt-n1 me-2"}),n("قیمت ")],-1)),Oo=t(()=>e("label",{class:"form-label",for:"ap-price"},[n("قیمت "),e("span",{class:"text-danger"},"*")],-1)),Qo={class:"d-sm-flex"},Xo=t(()=>e("option",{value:"toman"},"تومان",-1)),Zo=t(()=>e("option",{value:"dollar"},"دلار",-1)),$o=[Xo,Zo],et=t(()=>e("option",{value:"day"},"روزانه",-1)),st=t(()=>e("option",{value:"week"},"هفتگی",-1)),ot=t(()=>e("option",{value:"month",selected:""},"ماهیانه",-1)),tt=t(()=>e("option",{value:"year"},"سالیانه",-1)),lt=[et,st,ot,tt],it={class:"card card-body border-0 shadow-sm p-4 mb-4",id:"photos"},nt=t(()=>e("h2",{class:"h5 mb-4"},[e("i",{class:"fi-image text-primary fs-5 mt-n1 me-2"}),n("عکس / ویدئو ")],-1)),at={class:"imgDiv"},ct=["src"],dt={class:"mt-2"},rt={key:0,width:"150px",height:"110px",controls:"",style:{"margin-right":"10px"}},mt=["src"],pt=t(()=>e("div",{class:"alert alert-info mb-4",role:"alert"},[e("div",{class:"d-flex"},[e("i",{class:"fi-alert-circle me-2 me-sm-3"}),e("p",{class:"fs-sm mb-1"},[n(" حداکثر حجم عکس 8 مگابایت است. فرمت ها: jpeg ، jpg ، png. ابتدا تصویر اصلی را قرار دهید."),e("br"),n("حداکثر حجم فیلم 10 مگابایت است. فرمت ها: mp4 ، mov. ")])])],-1)),ht={class:"file-input",style:{display:"flex","align-items":"center","justify-content":"center"}},bt=t(()=>e("label",{class:"file-input__label",for:"file-input"},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"upload",class:"svg-inline--fa fa-upload fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"})]),e("span",null,"آپلود عکس و ویدئو ")],-1)),ut={class:"card card-body border-0 shadow-sm p-4 mb-4",id:"contacts"},ft=t(()=>e("h2",{class:"h5 mb-4"},[e("i",{class:"fi-phone text-primary fs-5 mt-n1 me-2"}),n("تماس با ما ")],-1)),_t={class:"row"},vt={class:"col-sm-6 mb-3"},yt=t(()=>e("label",{class:"form-label",for:"ap-fn"},[n("نام "),e("span",{class:"text-danger"},"*")],-1)),kt={class:"col-sm-6 mb-3"},gt=t(()=>e("label",{class:"form-label",for:"ap-sn"},[n("نام خانوادگی "),e("span",{class:"text-danger"},"*")],-1)),xt={class:"row"},wt={class:"col-sm-6 mb-3"},Ut=t(()=>e("label",{class:"form-label",for:"ap-email"},[n("پست الکترونیکی"),e("span",{class:"text-danger"},"*")],-1)),Ct={class:"col-sm-6 mb-3"},Vt=t(()=>e("label",{class:"form-label",for:"ap-phone"},[n("شماره تماس "),e("span",{class:"text-danger"},"*")],-1)),Bt=t(()=>e("label",{class:"form-label",for:"ap-company-name"},"نام شرکت",-1)),Tt={class:"d-sm-flex justify-content-between pt-2"},St=t(()=>e("a",{class:"btn btn-outline-primary btn-lg d-block ps-3 mb-3 mb-sm-2",href:"#preview-modal","data-bs-toggle":"modal"},[e("i",{class:"fi-eye-on me-2"}),n("پیش نمایش")],-1)),It=t(()=>e("aside",{class:"col-lg-3 offset-lg-1 d-none d-lg-block"},[e("div",{class:"sticky-top pt-5"},[e("h6",{class:"pt-5 mt-3 mb-2"}," محتوای زیر را تکمیل کنید ."),e("div",{class:"progress mb-4",style:{height:"0.25rem"}},[e("div",{class:"progress-bar bg-warning",role:"progressbar",style:{width:"100%"},"aria-valuenow":"65","aria-valuemin":"0","aria-valuemax":"100"})]),e("ul",{class:"list-unstyled"},[e("li",{class:"d-flex align-items-center"},[e("i",{class:"fi-check text-primary me-2"}),e("a",{class:"nav-link fw-normal ps-1 p-0",href:"#basic-info","data-scroll":"","data-scroll-offset":"20"},"اطلاعات شخصی")]),e("li",{class:"d-flex align-items-center"},[e("i",{class:"fi-check text-primary me-2"}),e("a",{class:"nav-link fw-normal ps-1 p-0",href:"#location","data-scroll":"","data-scroll-offset":"20"},"موقعیت مکانی")]),e("li",{class:"d-flex align-items-center"},[e("i",{class:"fi-check text-primary me-2"}),e("a",{class:"nav-link fw-normal ps-1 p-0",href:"#details","data-scroll":"","data-scroll-offset":"20"},"جزئیات ملک")]),e("li",{class:"d-flex align-items-center"},[e("i",{class:"fi-check text-primary me-2"}),e("a",{class:"nav-link fw-normal ps-1 p-0",href:"#price","data-scroll":"","data-scroll-offset":"20"},"قیمت")]),e("li",{class:"d-flex align-items-center"},[e("i",{class:"fi-check text-primary me-2"}),e("a",{class:"nav-link fw-normal ps-1 p-0",href:"#photos","data-scroll":"","data-scroll-offset":"20"},"عکس / ویدئو")]),e("li",{class:"d-flex align-items-center"},[e("i",{class:"fi-check text-primary me-2"}),e("a",{class:"nav-link fw-normal ps-1 p-0",href:"#contacts","data-scroll":"","data-scroll-offset":"20"},"تماس با ما")])])])],-1));function qt(c,s,h,u,o,a){return r(),d("div",null,[e("div",q,[e("div",z,[e("div",F,[N,e("div",j,[e("div",D,[e("h1",L,m(this.propertyTitle),1),e("p",M,m(this.addressInput),1),e("ul",E,[e("li",R,[e("b",A,m(this.selectedBedrooms),1),P]),e("li",H,[e("b",W,m(this.service),1),Y]),e("li",G,[e("b",J,m(this.parking),1),K]),e("li",null,[e("b",null,m(this.meterageInput),1),n(" مترمربع ")])]),e("div",O,[e("div",Q,[e("div",X,[o.imageUrls.length>0&&(o.videoUrls.length===0||!o.videoUrls[0])?(r(),d("img",{key:0,width:"100%",height:"510px",src:o.imageUrls[0],alt:""},null,8,Z)):f("",!0),o.videoUrls.length>0&&o.videoUrls[0]?(r(),d("video",$,[e("source",{src:o.videoUrls[0],type:"video/mp4"},null,8,ee),n(" Your browser does not support the video tag. ")])):f("",!0)]),e("div",se,[o.imageUrls.length>0?(r(),d("img",{key:0,width:"100%",height:"200px",src:o.imageUrls[0],alt:""},null,8,oe)):f("",!0),o.imageUrls.length>1?(r(),d("img",{key:1,width:"100%",height:"200px",style:{"margin-top":"15px"},src:o.imageUrls[1],alt:""},null,8,te)):f("",!0)])])]),e("div",le,[e("div",ie,[ne,ae,e("h2",ce,[n(m(o.price.value)+" ",1),o.price.currency==="toman"?(r(),d("span",de,"/تومان")):o.price.currency==="dollar"?(r(),d("span",re,"/دلار")):f("",!0),o.price.duration==="day"?(r(),d("span",me,"/روزانه")):o.price.duration==="week"?(r(),d("span",pe,"/هفتگی")):o.price.duration==="month"?(r(),d("span",he,"/ماهیانه")):o.price.duration==="year"?(r(),d("span",be,"/سالیانه")):f("",!0)]),e("div",ue,[fe,e("p",_e,m(o.dicText),1)]),e("div",ve,[ye,e("ul",ke,[e("li",null,[ge,n(m(o.propertyType),1)]),e("li",null,[xe,n(m(o.meterageInput)+" مترمربع",1)]),e("li",null,[we,n(m(o.selectedBedrooms),1)]),e("li",null,[Ue,n(m(o.service),1)]),e("li",null,[Ce,n(m(o.parking),1)])])]),e("div",Ve,[Be,e("ul",Te,[(r(!0),d(k,null,g(o.selectedCheckboxes,(l,y)=>(r(),d("li",{class:"col",key:y},[e("i",{class:B(["mt-n1 me-2 fs-lg align-middle",l.icon])},null,2),n(" "+m(l.name),1)]))),128))])])])])])])])])]),e("div",Se,[e("div",Ie,[e("div",qe,[ze,Fe,e("section",Ne,[je,e("div",De,[Le,i(e("input",{class:"form-control",type:"text",id:"ap-title",placeholder:"نام ملک",value:"اقامتگاه ویلایی","onUpdate:modelValue":s[0]||(s[0]=l=>o.propertyTitle=l),required:""},null,512),[[b,o.propertyTitle]]),Me]),e("div",Ee,[e("div",Re,[Ae,i(e("select",{class:"form-select","onUpdate:modelValue":s[1]||(s[1]=l=>o.propertyCategory=l),id:"ap-category",required:""},Ye,512),[[_,o.propertyCategory]])]),e("div",Ge,[Je,i(e("select",{class:"form-select",id:"ap-type","onUpdate:modelValue":s[2]||(s[2]=l=>o.propertyType=l),required:""},Oe,512),[[_,o.propertyType]])])]),Qe,e("div",Xe,[e("input",{class:"form-check-input",type:"radio",id:"ap-company",name:"ap-business-type",onClick:s[3]||(s[3]=l=>a.updateBusinessType("company"))}),Ze]),e("div",$e,[e("input",{class:"form-check-input",type:"radio",id:"ap-individual",name:"ap-business-type",onClick:s[4]||(s[4]=l=>a.updateBusinessType("individual"))}),es])]),e("section",ss,[os,e("div",ts,[e("div",ls,[is,i(e("select",{class:"form-select",id:"ap-country","onUpdate:modelValue":s[5]||(s[5]=l=>o.citySelected=l),required:""},as,512),[[_,o.citySelected]])]),e("div",cs,[ds,i(e("select",{class:"form-select",id:"ap-city","onUpdate:modelValue":s[6]||(s[6]=l=>o.citySelect=l),required:""},ms,512),[[_,o.citySelect]])])]),e("div",ps,[e("div",hs,[bs,i(e("select",{class:"form-select",id:"ap-district","onUpdate:modelValue":s[7]||(s[7]=l=>o.areaSelect=l),required:""},fs,512),[[_,o.areaSelect]])]),e("div",_s,[vs,i(e("input",{class:"form-control",type:"text",id:"ap-zip",placeholder:"0000000",value:"67234",required:"","onUpdate:modelValue":s[8]||(s[8]=l=>o.postalCode=l)},null,512),[[b,o.postalCode]])])]),e("div",ys,[ks,i(e("input",{class:"form-control",type:"text",id:"ap-address",value:"خیابان قائم مقام فراهانی پلاک 210","onUpdate:modelValue":s[9]||(s[9]=l=>o.addressInput=l),required:""},null,512),[[b,o.addressInput]])])]),e("section",gs,[xs,e("div",ws,[Us,i(e("input",{class:"form-control",type:"text",id:"ap-area",value:"210","onUpdate:modelValue":s[10]||(s[10]=l=>o.meterageInput=l),required:""},null,512),[[b,o.meterageInput]])]),e("div",Cs,[Vs,e("div",Bs,[i(e("input",{class:"btn-check",type:"radio",id:"studio",name:"bedrooms","onUpdate:modelValue":s[11]||(s[11]=l=>o.selectedBedrooms=l),value:"0"},null,512),[[p,o.selectedBedrooms]]),Ts,i(e("input",{class:"btn-check",type:"radio",id:"bedrooms-1",name:"bedrooms","onUpdate:modelValue":s[12]||(s[12]=l=>o.selectedBedrooms=l),value:"1"},null,512),[[p,o.selectedBedrooms]]),Ss,i(e("input",{class:"btn-check",type:"radio",id:"bedrooms-2",name:"bedrooms","onUpdate:modelValue":s[13]||(s[13]=l=>o.selectedBedrooms=l),value:"2"},null,512),[[p,o.selectedBedrooms]]),Is,i(e("input",{class:"btn-check",type:"radio",id:"bedrooms-3",name:"bedrooms","onUpdate:modelValue":s[14]||(s[14]=l=>o.selectedBedrooms=l),value:"3"},null,512),[[p,o.selectedBedrooms]]),qs,i(e("input",{class:"btn-check",type:"radio",id:"bedrooms-4",name:"bedrooms","onUpdate:modelValue":s[15]||(s[15]=l=>o.selectedBedrooms=l),checked:"",value:"4"},null,512),[[p,o.selectedBedrooms]]),zs,i(e("input",{class:"btn-check",type:"radio",id:"bedrooms-5",name:"bedrooms",value:"5","onUpdate:modelValue":s[16]||(s[16]=l=>o.selectedBedrooms=l)},null,512),[[p,o.selectedBedrooms]]),Fs])]),e("div",Ns,[js,e("div",Ds,[i(e("input",{class:"btn-check",type:"radio",id:"bathrooms-1",name:"bathrooms","onUpdate:modelValue":s[17]||(s[17]=l=>o.service=l),value:"1"},null,512),[[p,o.service]]),Ls,i(e("input",{class:"btn-check",type:"radio",id:"bathrooms-2",name:"bathrooms","onUpdate:modelValue":s[18]||(s[18]=l=>o.service=l),value:"2",checked:""},null,512),[[p,o.service]]),Ms,i(e("input",{class:"btn-check",type:"radio",id:"bathrooms-3",name:"bathrooms","onUpdate:modelValue":s[19]||(s[19]=l=>o.service=l),value:"3"},null,512),[[p,o.service]]),Es,i(e("input",{class:"btn-check",type:"radio",id:"bathrooms-4",name:"bathrooms","onUpdate:modelValue":s[20]||(s[20]=l=>o.service=l),value:"4"},null,512),[[p,o.service]]),Rs])]),e("div",As,[Ps,e("div",Hs,[i(e("input",{class:"btn-check",type:"radio",id:"parking-1",name:"parking",value:"1","onUpdate:modelValue":s[21]||(s[21]=l=>o.parking=l)},null,512),[[p,o.parking]]),Ws,i(e("input",{class:"btn-check",type:"radio",id:"parking-2",name:"parking",value:"2","onUpdate:modelValue":s[22]||(s[22]=l=>o.parking=l),checked:""},null,512),[[p,o.parking]]),Ys,i(e("input",{class:"btn-check",type:"radio",id:"parking-3",name:"parking",value:"3","onUpdate:modelValue":s[23]||(s[23]=l=>o.parking=l)},null,512),[[p,o.parking]]),Gs,i(e("input",{class:"btn-check",type:"radio",id:"parking-4",name:"parking",value:"4","onUpdate:modelValue":s[24]||(s[24]=l=>o.parking=l)},null,512),[[p,o.parking]]),Js])]),e("div",Ks,[Os,e("div",Qs,[e("div",Xs,[e("div",{class:"form-check",onClick:s[25]||(s[25]=l=>a.updateCheckbox({name:"وای فای",icon:"fi-wifi"}))},eo),e("div",{class:"form-check",onClick:s[26]||(s[26]=l=>a.updateCheckbox({name:"تهویه هوا",icon:"fi-snowflake"}))},to),e("div",{class:"form-check",onClick:s[27]||(s[27]=l=>a.updateCheckbox({name:"باشگاه بدنسازی",icon:"fi-snowflake"}))},no),e("div",{class:"form-check",onClick:s[28]||(s[28]=l=>a.updateCheckbox({name:"پارکینگ",icon:"fi-parking"}))},ro)]),e("div",mo,[e("div",{class:"form-check",onClick:s[29]||(s[29]=l=>a.updateCheckbox({name:"حیوانات",icon:"fi-pet"}))},bo),e("div",{class:"form-check",onClick:s[30]||(s[30]=l=>a.updateCheckbox({name:"استخر",icon:"fi-dish"}))},_o),e("div",{class:"form-check",onClick:s[31]||(s[31]=l=>a.updateCheckbox({name:"تلویزیون",icon:"fi-tv"}))},ko),e("div",{class:"form-check",onClick:s[32]||(s[32]=l=>a.updateCheckbox({name:"سیستم گرمایشی",icon:"fi-thermometer"}))},wo)]),e("div",Uo,[e("div",{class:"form-check",onClick:s[33]||(s[33]=l=>a.updateCheckbox({name:"ماشین لباسشویی",icon:"fi-laundry"}))},Bo),e("div",{class:"form-check",onClick:s[34]||(s[34]=l=>a.updateCheckbox({name:"آسانسور",icon:"fi-cctv"}))},Io),e("div",{class:"form-check",onClick:s[35]||(s[35]=l=>a.updateCheckbox({name:"آشپزخانه",icon:"fi-iron"}))},Fo),e("div",{class:"form-check",onClick:s[36]||(s[36]=l=>a.updateCheckbox({name:"دوربین مدار بسته",icon:"fi-cctv"}))},Do)])])]),e("div",Lo,[Mo,e("div",Eo,[e("div",Ro,[e("div",Ao,[i(e("input",{class:"form-check-input",type:"checkbox",id:"allow-cats","onUpdate:modelValue":s[37]||(s[37]=l=>o.animal.allowCats=l)},null,512),[[x,o.animal.allowCats]]),Po]),e("div",Ho,[i(e("input",{class:"form-check-input",type:"checkbox",id:"allow-dogs","onUpdate:modelValue":s[38]||(s[38]=l=>o.animal.allowDogs=l)},null,512),[[x,o.animal.allowDogs]]),Wo])])])]),Yo,i(e("textarea",{class:"form-control",id:"ap-description",rows:"5",placeholder:"ملک خود را شرح دهید","onUpdate:modelValue":s[39]||(s[39]=l=>o.dicText=l)},null,512),[[b,o.dicText]]),Go]),e("section",Jo,[Ko,Oo,e("div",Qo,[i(e("input",{class:"form-control w-100 me-2 mb-2",type:"number",id:"ap-price",min:"200",step:"50","onUpdate:modelValue":s[40]||(s[40]=l=>o.price.value=l),required:""},null,512),[[b,o.price.value]]),i(e("select",{"onUpdate:modelValue":s[41]||(s[41]=l=>o.price.currency=l),class:"form-select w-50 me-2 mb-2"},$o,512),[[_,o.price.currency]]),i(e("select",{"onUpdate:modelValue":s[42]||(s[42]=l=>o.price.duration=l),class:"form-select w-50 mb-2"},lt,512),[[_,o.price.duration]])])]),e("section",it,[nt,e("div",at,[(r(!0),d(k,null,g(o.imageUrls,(l,y)=>(r(),d("img",{width:"150px",key:y,src:l,alt:"",style:{"margin-right":"10px"}},null,8,ct))),128))]),e("div",dt,[o.videoUrls.length>0&&o.videoUrls[0]?(r(),d("video",rt,[e("source",{src:o.videoUrls[0],type:"video/mp4"},null,8,mt),n(" Your browser does not support the video tag. ")])):f("",!0)]),pt,e("div",ht,[e("input",{ref:"fileInput",type:"file",name:"file-input",id:"file-input",class:"file-input__input",onChange:s[43]||(s[43]=(...l)=>a.handleFileUpload&&a.handleFileUpload(...l)),multiple:""},null,544),bt])]),e("section",ut,[ft,e("div",_t,[e("div",vt,[yt,i(e("input",{class:"form-control",type:"text",id:"ap-fn",placeholder:"نام خود را وارد کنید","onUpdate:modelValue":s[44]||(s[44]=l=>o.contactUs.contactFirstName=l),required:""},null,512),[[b,o.contactUs.contactFirstName]])]),e("div",kt,[gt,i(e("input",{class:"form-control",type:"text",id:"ap-sn","onUpdate:modelValue":s[45]||(s[45]=l=>o.contactUs.contactLastName=l),placeholder:"نام خانوادگی خود را وارد کنید",required:""},null,512),[[b,o.contactUs.contactLastName]])])]),e("div",xt,[e("div",wt,[Ut,i(e("input",{class:"form-control",type:"text",id:"ap-email","onUpdate:modelValue":s[46]||(s[46]=l=>o.contactUs.contactEmail=l),placeholder:"ایمیل"},null,512),[[b,o.contactUs.contactEmail]])]),e("div",Ct,[Vt,i(e("input",{class:"form-control",type:"tel",id:"ap-phone","data-format":"custom","data-delimiter":"-","data-blocks":"3 3 4",placeholder:"000-000-0000","onUpdate:modelValue":s[47]||(s[47]=l=>o.contactUs.contactPhone=l)},null,512),[[b,o.contactUs.contactPhone]])])]),Bt,i(e("input",{class:"form-control",type:"text",id:"ap-company-name",placeholder:"نام شرکت را وارد کنید","onUpdate:modelValue":s[48]||(s[48]=l=>o.contactUs.companyName=l)},null,512),[[b,o.contactUs.companyName]])]),e("section",Tt,[St,e("a",{onClick:s[49]||(s[49]=V((...l)=>a.saveAndContinue&&a.saveAndContinue(...l),["prevent"])),class:"btn btn-primary btn-lg d-block mb-2",href:"#"},"ذخیره و ادامه")])]),It])])])}const Nt=U(I,[["render",qt],["__scopeId","data-v-354055f7"]]);export{Nt as default};