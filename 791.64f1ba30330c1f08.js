"use strict";(self.webpackChunkem_test_task=self.webpackChunkem_test_task||[]).push([[791],{9791:(ot,y,a)=>{a.r(y),a.d(y,{PostsModule:()=>tt});var S=a(6814),d=a(4828),x=a(1584),r=a(5313),u=a(1406),t=a(5879),A=a(9360),T=a(8251),w=a(2737),D=a(4825),z=a(4829);function h(o=1/0){let n;n=o&&"object"==typeof o?o:{count:o};const{count:i=1/0,delay:e,resetOnSuccess:s=!1}=n;return i<=0?w.y:(0,A.e)((l,c)=>{let m,v=0;const C=()=>{let O=!1;m=l.subscribe((0,T.x)(c,g=>{s&&(v=0),c.next(g)},void 0,g=>{if(v++<i){const M=()=>{m?(m.unsubscribe(),m=null,C()):O=!0};if(null!=e){const et="number"==typeof e?(0,D.H)(e):(0,z.Xf)(e(g,v)),P=(0,T.x)(c,()=>{P.unsubscribe(),M()},()=>{c.complete()});et.subscribe(P)}else M()}else c.error(g)})),O&&(m.unsubscribe(),m=null,C())};C()})}var f=a(6306),U=a(6232),$=a(9862);let b=(()=>{var o;class n{constructor(e){this.http=e}getList(){return this.http.get(`${u.C}/posts`).pipe(h(2),(0,f.K)(this.handleError))}getPost(e){return this.http.get(`${u.C}/posts/${e}`).pipe(h(2),(0,f.K)(this.handleError))}getUser(e){return this.http.get(`${u.C}/users/${e}`).pipe(h(2),(0,f.K)(this.handleError))}handleError(e){return console.log("Error:",e.message),U.E}}return(o=n).\u0275fac=function(e){return new(e||o)(t.LFG($.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),n})();var N=a(304),Y=a(3566);function I(o,n){1&o&&(t.TgZ(0,"th",11),t._uU(1,"#"),t.qZA())}function F(o,n){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&o){const i=n.$implicit;t.xp6(1),t.Oqu(i.id)}}function B(o,n){1&o&&(t.TgZ(0,"th",11),t._uU(1,"Title"),t.qZA())}function E(o,n){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&o){const i=n.$implicit;t.xp6(1),t.Oqu(i.title)}}function J(o,n){1&o&&(t.TgZ(0,"th",11),t._uU(1,"Preview"),t.qZA())}function Q(o,n){if(1&o&&(t.TgZ(0,"td",12),t._uU(1),t.TgZ(2,"span",13),t._uU(3,"click to read more"),t.qZA()()),2&o){const i=n.$implicit,e=t.oxw();t.xp6(1),t.hij(" ",e.preview(i.body)," ")}}function R(o,n){1&o&&t._UZ(0,"tr",14)}function L(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"tr",15),t.NdJ("click",function(){const l=t.CHM(i).$implicit,c=t.oxw();return t.KtG(c.show(l))}),t.qZA()}}const K=function(){return[5,10,20]};let j=(()=>{var o;class n{constructor(e,s,l){this.api=e,this.router=s,this.auth=l,this.displayedColumns=["id","title","body"],this.pageSize=10,this.page=0,this.stateKey=`${u.E}-state`}ngOnInit(){this.getState(),this.api.getList().subscribe(e=>{this.dataSource=new r.by(e),this.dataSource.paginator=this.paginator})}preview(e){return`${e.slice(0,100)}...`}show(e){this.saveState(),this.router.navigate([`/posts/${e.id}`])}saveState(){const e=JSON.stringify({pageSize:this.paginator?.pageSize,page:this.paginator?.pageIndex});localStorage.setItem(this.stateKey,e)}getState(){const e=localStorage.getItem(this.stateKey);e&&(this.pageSize=JSON.parse(e).pageSize,this.page=JSON.parse(e).page)}removeState(){localStorage.removeItem(this.stateKey)}}return(o=n).\u0275fac=function(e){return new(e||o)(t.Y36(b),t.Y36(d.F0),t.Y36(N.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-table"]],viewQuery:function(e,s){if(1&e&&t.Gf(x.NW,5),2&e){let l;t.iGM(l=t.CRH())&&(s.paginator=l.first)}},decls:15,vars:7,consts:[[1,"mat-elevation-z8"],["mat-table","","matSort","","matSortActive","created","matSortDisableClear","","matSortDirection","desc",1,"example-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","body"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page",3,"pageSizeOptions","pageSize","pageIndex"],["paginator",""],["mat-header-cell",""],["mat-cell",""],[1,"read-more-message"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"table",1),t.ynx(2,2),t.YNc(3,I,2,0,"th",3),t.YNc(4,F,2,1,"td",4),t.BQk(),t.ynx(5,5),t.YNc(6,B,2,0,"th",3),t.YNc(7,E,2,1,"td",4),t.BQk(),t.ynx(8,6),t.YNc(9,J,2,0,"th",3),t.YNc(10,Q,4,1,"td",4),t.BQk(),t.YNc(11,R,1,0,"tr",7),t.YNc(12,L,1,0,"tr",8),t.qZA(),t._UZ(13,"mat-paginator",9,10),t.qZA()),2&e&&(t.xp6(1),t.Q6J("dataSource",s.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(6,K))("pageSize",s.pageSize)("pageIndex",s.page))},dependencies:[r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,Y.YE,x.NW],styles:["[_nghost-%COMP%]{width:100%;max-width:1200px;display:flex;margin:0 auto;flex-direction:column;margin-top:2rem;padding-bottom:2rem}[_nghost-%COMP%]   .read-more-message[_ngcontent-%COMP%]{color:#ffe082;font-size:.75rem}[_nghost-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{padding:.5rem}[_nghost-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom:1px solid;border-top:1px solid;border-color:#5e35b1;background-color:#ede7f6;cursor:pointer}[_nghost-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:active   .mat-mdc-cell[_ngcontent-%COMP%]{background-color:#fff8e1;cursor:pointer}@media (min-width: 475px){[_nghost-%COMP%]{width:85%;max-width:1200px;display:flex;margin:0 auto;margin-top:2rem}[_nghost-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{padding:.5rem 1rem}}"]}),n})();var H=a(5619),G=a(7398),X=a(2296),p=a(5195),W=a(6385);let V=(()=>{var o;class n{constructor(e,s){this.api=e,this.route=s,this.isLoading$=new H.X(!0),this.id=s.snapshot.params.id}ngOnInit(){this.post=this.api.getPost(this.id),this.post.subscribe({next:e=>{this.title=e.title,this.body=e.body,this.userId=e.userId,this.author=this.api.getUser(this.userId).pipe((0,G.U)(s=>s.name)),this.isLoading$.next(!1)},error:e=>{console.log(e.cause)}})}ngOnDestroy(){this.isLoading$.unsubscribe()}}return(o=n).\u0275fac=function(e){return new(e||o)(t.Y36(b),t.Y36(d.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-details"]],decls:13,vars:5,consts:[["mat-stroked-button","","routerLink","/posts"],[1,"example-card"]],template:function(e,s){1&e&&(t.TgZ(0,"button",0),t._uU(1,"Back"),t.qZA(),t.TgZ(2,"mat-card",1)(3,"mat-card-header")(4,"mat-card-subtitle"),t._uU(5),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"mat-card-title"),t._uU(8),t.qZA()(),t.TgZ(9,"mat-card-content")(10,"p"),t._uU(11),t.qZA(),t._UZ(12,"mat-divider"),t.qZA()()),2&e&&(t.xp6(5),t.Oqu(t.lcZ(6,3,s.author)),t.xp6(3),t.Oqu(s.title),t.xp6(3),t.Oqu(s.body))},dependencies:[X.lW,p.a8,p.dn,p.dk,p.$j,p.n5,W.d,d.rH,S.Ov],styles:["[_nghost-%COMP%]{width:85%;max-width:1200px;display:flex;margin:0 auto;flex-direction:column;gap:1rem;margin-top:2rem}"]}),n})();var Z=a(8036);const k=[{path:"",component:j,canActivate:[Z.Z]},{path:":id",component:V,canActivate:[Z.Z]}];let q=(()=>{var o;class n{}return(o=n).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(k),d.Bz]}),n})();var _=a(6208);let tt=(()=>{var o;class n{}return(o=n).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[S.ez,_.m,q]}),n})()}}]);