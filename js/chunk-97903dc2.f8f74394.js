(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97903dc2"],{"214f":function(t,e,n){},3194:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-block d-sm-none"},[n("navigation-bottom-1")],1),t.busy?n("div",{staticStyle:{width:"100%",height:"1200px",position:"fixed","z-index":"200",background:"radial-gradient(circle, rgba(63,206,251,1) 0%, rgba(12,14,140,1) 100%)"}},[n("p",{staticClass:"animated infinite bounce font-bold font-times text-2xl text-black",staticStyle:{"margin-top":"50vh","margin-left":"30vw"}},[t._v("LOADING ...")])]):t._e(),n("div",{staticClass:"text-center d-sm-none"},[t.menuTrigger?t._e():n("v-touch",{staticStyle:{width:"20px",background:"transparent",height:"100vh",position:"absolute",left:"0","z-index":"10001"},on:{swiperight:t.onSwipeRight}})],1),n("div",{staticClass:"container-fluid anim "},[n("div",{staticClass:"row anim  bg-white "},[n("div",{staticClass:"anim col-4 col-sm-3 col-md-2 ",staticStyle:{position:"fixed",padding:"0",margin:"0",height:"100vh"},style:{background:t.bgleft1},on:{mouseenter:function(e){t.menuTrigger=!0},mouseleave:function(e){t.menuTrigger=!1}}},[n("div",{staticClass:"text-center text-white font-bold text-times text-xs",staticStyle:{height:"0px",margin:"none","padding-top":"10px"},style:{background:t.bgleft1}},[n("br"),n("br")]),n("div",{staticClass:"p-1",staticStyle:{"z-index":"100"},style:{background:t.bgleft1}},[n("p",{staticClass:"pl-2"},[t.$store.state.data.toko?n("img",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"d-inline",staticStyle:{height:"32px",width:"32px"},attrs:{src:t.$store.state.data.toko.logo,alt:""}}):t._e(),t.$store.state.data.toko?n("span",{staticClass:"font-bold text-md  italic ml-4",style:"color:"+t.$store.state.data.toko.warna_title},[t._v(t._s(t.$store.state.data.toko.nama_toko))]):t._e()]),n("br"),t._l(t.listMenu,(function(e,i){return n("div",{key:i+"listmenus"},[n("div",{staticClass:"bord hover:bg-orange-400  text-left pl-3 mt-3",staticStyle:{"font-size":"13px"},attrs:{id:"pertamaclick"},on:{click:function(e){t.muncul(e),!t.menuTrigger&&(t.menuTrigger=!t.menuTrigger)}}},[n("span",{staticClass:"typcn ",class:"typcn-"+e.icon,on:{click:function(e){return t.parent(e)}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.menuTrigger,expression:"menuTrigger"}],staticClass:"pl-2 capitalize"},[t._v(t._s(e.group))])])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.menuTrigger,expression:"menuTrigger"}],staticClass:"isaktif sm:pl-4 anim mb-3 text-white animated slideInRight ",staticStyle:{background:"#232E30"}},t._l(e.menu,(function(e,i){return n("li",{key:i+"menu",staticClass:"bord hover:bg-orange-400 text-left sm:pl-3",staticStyle:{"font-size":"13px"}},[n("router-link",{staticStyle:{color:"white"},attrs:{to:e.link}},[n("span",{staticClass:"mr-2",domProps:{innerHTML:t._s(e.name.replace("<br>"," "))}}),t._v(" "),n("span",{staticClass:"typcn ",class:"typcn-"+e.icon})])],1)})),0)])})),n("div",{staticClass:"bord hover:bg-orange-400  text-left pl-3 mt-2",staticStyle:{"font-size":"13px"},on:{click:function(e){return t.$router.push("/admin")}}},[n("span",{staticClass:"typcn typcn-th-large"}),t.menuTrigger?n("span",[t._v(" DASHBOARD ")]):t._e()])],2)]),n("div",{staticClass:"bg-black anim",class:{"col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2":t.menuTrigger,"menutrigger col-12 col-sm-11":!t.menuTrigger}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 bg-white",staticStyle:{padding:"0",margin:"0",position:"fixed","z-index":"10000"}},[n("div",{staticClass:"row justify-content-between align-items-center shadow rounded-lg",staticStyle:{height:"50px",padding:"3px","margin-left":"0px"}},[n("div",{staticClass:"col-2 "},[n("span",{staticClass:"typcn typcn-th-menu text-2xl d-inline-block d-sm-none",on:{click:function(e){t.menuTrigger=!t.menuTrigger}}}),t.$store.state.data.toko?n("div",{staticClass:"d-none d-sm-inline-block"},[t.$store.state.data?n("span",{staticClass:"font-bold text-md  italic",style:"color:"+t.$store.state.data.toko.warna_title},[t._v(t._s(t.$store.state.data.toko.nama_toko))]):t._e()]):t._e()]),n("div",{staticClass:"col-6"}),n("div",{staticClass:"col-4 row justify-content-center"},[n("div",{staticClass:"col-2 d-none d-sm-inline-block",on:{click:t.notifs}},[t.notif>0?n("button",{staticClass:"btn btn-sm btn-danger ",staticStyle:{position:"absolute"},attrs:{type:"button"}},[t._v(t._s(t.notif))]):t._e(),n("span",{staticClass:"text-lg typcn typcn-bell"})]),n("div",{staticClass:"col-2 d-none d-sm-inline-block"},[n("router-link",{attrs:{to:"/admin/transaksi/whistlist"}},[n("span",{staticClass:"text-lg typcn typcn-shopping-cart"})])],1),n("div",{staticClass:"col-2 d-none d-sm-inline-block"},[n("router-link",{attrs:{to:"/admin/chat"}},[t.notifchat>0?n("button",{staticClass:"btn btn-sm btn-danger ",staticStyle:{position:"absolute"},attrs:{type:"button"}},[t._v(t._s(t.notifchat))]):t._e(),n("span",{staticClass:"text-lg typcn typcn-message"})])],1),n("div",{staticClass:"col-12 col-sm-6 "},[n("img",{staticClass:"rounded-circle d-inline cursor-pointer",staticStyle:{height:"30px"},attrs:{src:"https://i1.sndcdn.com/artworks-aLhH4TJbrBBeAtX5-reSfbQ-t500x500.jpg",alt:""},on:{click:t.logout}})])])])]),n("div",{staticClass:"col-sm-12",staticStyle:{background:"white","min-height":"100vh",padding:"0",margin:"0"},on:{click:function(e){t.menuTrigger=!1,t.menuKanan=!1}}},[n("br"),n("br"),n("div",{staticClass:"sm:mt-2 pl-2 side-shadow ",staticStyle:{"min-height":"90vh"}},[n("div",{staticClass:"sm:pl-4",staticStyle:{position:"relative"}},[t.$store.state.data.toko?n("svg",{staticStyle:{position:"absolute",top:"0px",left:"-8px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[n("path",{attrs:{fill:t.$store.state.data.toko.warna_admin,"fill-opacity":"1",d:"M0,192L48,181.3C96,171,192,149,288,122.7C384,96,480,64,576,58.7C672,53,768,75,864,96C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"}})]):t._e(),n("router-view",{directives:[{name:"myimage",rawName:"v-myimage"},{name:"reload",rawName:"v-reload"}],staticStyle:{position:"absolute","z-index":"100",width:"100%"}})],1)])])])])])])])},a=[],s=n("2909"),o=(n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("4160"),n("159b"),n("4de4"),n("caad"),n("2532"),n("13d5"),n("e25e"),n("bc3a"),n("cc98")),r=n.n(o),l=n("8aa5"),c=n.n(l),u=n("4b97"),d=n("2833"),m=(c.a.firestore(),c.a.database()),p=new u["a"],g="https://undangan.officialapp.website",k=(n("03a0"),{components:{navigationBottom1:d["a"]},beforeMount:function(){var t=this;p.collection("table",!1,g).ceklogin(this.$store).then((function(t){}))["catch"]((function(e){t.$router.push("/login")}))},methods:{notifs:function(){var t=this;p.collection("app_kasir_notifikasi").doc().select("update app_kasir_notifikasi set dibaca='true' where tujuan='admin'").then((function(e){m.ref("/notifikasi/admin").set({uniq:r()()}),t.$router.push("/admin/notifikasi")}))},getToko:function(){var t=this;p.collection("app_kasir_toko").doc().select("select * from app_kasir_toko").then((function(e){t.toko=e,t.$store.state.data.toko=e[0],t.$forceUpdate()}))},exits:function(){document.addEventListener("deviceready",(function(t){navigator.app.exitApp()}),!0)},logout:function(){this.$store.dispatch("logout"),localStorage.removeItem("login"),this.$router.push("")},muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},parent:function(t){t.target.parentNode.click()},onSwipeRight:function(){this.menuTrigger=!0},getListComment:function(){var t=this;p.collection("app_kasir_chat").doc().select("select * from app_kasir_chat").then((function(e){var n=Object(s["a"])(new Set(e.map((function(t){return t["username"]}))));n=n.map((function(t){return{username:t}})),n.forEach((function(t,i){n[i].data=[],e.forEach((function(e){t.username==e.username&&n[i].data.push(e)}))})),n.forEach((function(t){t.unread=t.data.filter((function(t){if("false"==t.dibaca&&"admin"==t.penerima)return t})).length})),p.collection("tbuser").doc().select("select * from tbuser where level!='user'").then((function(e){var i=e.map((function(t){return t.username}));n=n.filter((function(t){if(!i.includes(t.username))return t})),console.log("unique",n),t.notifchat=n.reduce((function(t,e){return t+parseInt(e.unread)}),0),t.$forceUpdate()}))}))}},mounted:function(){},data:function(){return{bgleft1:"#fff",test:1,menuTrigger:!1,menuKanan:!1,notifikasi:[],notif:0,notifchat:0,toko:[],busy:!1,listMenu:[{group:"toko",icon:"home-outline",level:["SuperAdmin"],menu:[{name:"Toko",link:"/admin/toko/setting",level:["SuperAdmin"],icon:"home"},{name:"Cabang Toko",link:"/admin/toko/cabang",level:["SuperAdmin"],icon:"home"},{name:"Modal",link:"/admin/toko/modal",level:["SuperAdmin"],icon:"at"},{name:"Penambahan dana",link:"/admin/toko/penambahan",level:["SuperAdmin"],icon:"download"},{name:"Pengeluaran dana",link:"/admin/toko/pengeluaran",level:["SuperAdmin"],icon:"upload"},{name:"List Photo",link:"/admin/toko/photo",level:["SuperAdmin"],icon:"upload"}]},{group:"produk",icon:"dropbox",level:["SuperAdmin","Admin"],menu:[{name:"produk/Barang",link:"/admin/produk",level:["SuperAdmin","Admin"],icon:"dropbox"},{name:"Kategori<br>Produk",link:"/admin/produk/kategori",level:["SuperAdmin","Admin"],icon:"th-large"},{name:"satuan<br>Produk",link:"/admin/produk/satuan",level:["SuperAdmin","Admin"],icon:"sort-numerically"},{name:"Barcode",link:"/admin/produk/barcode",level:["SuperAdmin","Admin"],icon:"document"}]},{group:"Stok",icon:"download",level:["SuperAdmin","Admin"],menu:[{name:"Barang<br>Masuk/Beli",link:"/admin/stok/masuk",level:["SuperAdmin","Admin"],icon:"download"},{name:"Barang<br>Keluar",link:"/admin/stok/keluar",level:["SuperAdmin","Admin"],icon:"upload"}]},{group:"supplier",icon:"group",level:["SuperAdmin","Admin"],menu:[{name:"Supplier",link:"/admin/supplier",level:["SuperAdmin","Admin"],icon:"group"}]},{group:"Pelanggan",icon:"group-outline",level:["SuperAdmin","Admin","Kasir","_user1","_user2","_user3","_user4"],menu:[{name:"Pelanggan",link:"/admin/pelanggan",level:["SuperAdmin","Admin","Kasir","_user1","_user2","_user3","_user4"],icon:"group"},{name:"Membership",link:"/admin/pelanggan/membership",level:["SuperAdmin","Admin"],icon:"business-card"}]},{group:"transaksi",icon:"shopping-cart",level:["SuperAdmin","Admin","Kasir","_user1","_user2","_user3","_user4"],menu:[{name:"Transaksi",link:"/admin/transaksi/whistlist",level:["SuperAdmin","Kasir","_user1","_user2","_user3","_user4"],icon:"shopping-cart"},{name:"Transaksi (image)",link:"/admin/transaksi/whistlist2",level:["SuperAdmin","Kasir","_user1","_user2","_user3","_user4"],icon:"image"},{name:"Edit",link:"/admin/transaksi/edit",level:["SuperAdmin","Kasir","_user1","_user2","_user3","_user4"],icon:"cog"},{name:"Online",link:"/admin/transaksi/online",level:["SuperAdmin","Admin","Kasir","_user1","_user2","_user3","_user4"],icon:"world"}]},{group:"report",icon:"chart-bar",level:["SuperAdmin","Admin","Kasir","_user1","_user2","_user3","_user4"],menu:[{name:"List Report",link:"/admin/report",level:["SuperAdmin","Admin","Kasir","_user1","_user2","_user3","_user4"],icon:"chart-bar"}]},{group:"user",icon:"user",level:["SuperAdmin"],menu:[{name:"User<br>Pengguna",link:"/admin/user",level:["SuperAdmin"],icon:"group"}]}]}}}),f=k,h=(n("e95c"),n("2877")),v=Object(h["a"])(f,i,a,!1,null,"845c5da2",null);e["default"]=v.exports},e95c:function(t,e,n){"use strict";n("214f")}}]);
//# sourceMappingURL=chunk-97903dc2.f8f74394.js.map