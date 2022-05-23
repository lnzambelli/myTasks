"use strict";(self.webpackChunkmy_tasks=self.webpackChunkmy_tasks||[]).push([[188],{3188:(S,m,n)=>{n.r(m),n.d(m,{ListModule:()=>q});var c=n(8583),u=n(5987),t=n(7716),p=n(3738),g=n(1552),l=n(8341),_=n(7001);function f(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"mat-card"),t.TgZ(1,"div",2),t.TgZ(2,"mat-icon"),t._uU(3,"task"),t.qZA(),t.TgZ(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"mat-icon",3),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().eliminarTarea(s.id)}),t._uU(7,"clear"),t.qZA(),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.qZA()}if(2&a){const e=r.$implicit;t.xp6(5),t.Oqu(e.titulo),t.xp6(4),t.Oqu(e.descripcion)}}function Z(a,r){1&a&&(t.TgZ(0,"mat-card"),t.TgZ(1,"p"),t._uU(2,"No tiene tareas cargadas"),t.qZA(),t.qZA())}function T(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"mat-card"),t.TgZ(1,"div",2),t.TgZ(2,"mat-icon",4),t._uU(3,"groups"),t.qZA(),t.TgZ(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"mat-chip-list"),t.TgZ(7,"mat-chip",5),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",2),t.TgZ(10,"p"),t._uU(11),t.qZA(),t.TgZ(12,"mat-icon",3),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().eliminarReunion(s.id)}),t._uU(13,"delete"),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=r.$implicit;t.xp6(5),t.hij(" ",e.titulo,""),t.xp6(3),t.Oqu(e.hora),t.xp6(3),t.Oqu(e.integrantes)}}function A(a,r){1&a&&(t.TgZ(0,"mat-card"),t.TgZ(1,"p"),t._uU(2,"No tiene reuniones cargadas"),t.qZA(),t.qZA())}function h(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"mat-card"),t.TgZ(1,"div",2),t.TgZ(2,"mat-icon"),t._uU(3,"notifications_active"),t.qZA(),t.TgZ(4,"h2",6),t._uU(5),t.qZA(),t.TgZ(6,"mat-icon",3),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().eliminarAlerta(s.id)}),t._uU(7,"clear"),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=r.$implicit;t.xp6(5),t.Oqu(e.titulo)}}function C(a,r){1&a&&(t.TgZ(0,"mat-card"),t.TgZ(1,"p"),t._uU(2,"No tiene alertas cargadas"),t.qZA(),t.qZA())}let x=(()=>{class a{constructor(e){this.snackBar=e,this.arrayTareas=[],this.arrReuniones=[],this.arrayAlertas=JSON.parse(localStorage.getItem("misAlertas")||"")}ngOnInit(){this.cargarDatos()}cargarDatos(){this.arrayTareas=JSON.parse(localStorage.getItem("misTareas")||""),this.arrReuniones=JSON.parse(localStorage.getItem("misReuniones")||""),this.arrayAlertas=JSON.parse(localStorage.getItem("misAlertas")||""),console.log(this.arrayAlertas),console.log(this.arrReuniones),console.log(this.arrayTareas)}eliminarTarea(e){this.snackBar.open("Eliminando Tareas..","Cerrar",{duration:2e3});let i=JSON.parse(localStorage.getItem("misTareas")||"");this.arrayTareas=i.filter(o=>o.id!=e),localStorage.setItem("misTareas",JSON.stringify(this.arrayTareas)),this.cargarDatos()}eliminarReunion(e){this.snackBar.open("Eliminando Reunion..","Cerrar",{duration:2e3});let i=JSON.parse(localStorage.getItem("misReuniones")||"");this.arrReuniones=i.filter(o=>o.id!=e),localStorage.setItem("misReuniones",JSON.stringify(this.arrReuniones)),this.cargarDatos()}eliminarAlerta(e){this.snackBar.open("Eliminando Alerta..","Cerrar",{duration:2e3});let i=JSON.parse(localStorage.getItem("misAlertas")||"");this.arrayAlertas=i.filter(o=>o.id!=e),localStorage.setItem("misAlertas",JSON.stringify(this.arrayAlertas)),this.cargarDatos()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(_.ux))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list-view"]],decls:6,vars:6,consts:[[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"flex","flex-row","justify-between"],[3,"click"],[2,"font-size","30px"],["selected","",2,"background-color","#E6B0AA","color","#212F3C"],[1,"mx-8"]],template:function(e,i){1&e&&(t.YNc(0,f,10,2,"mat-card",0),t.YNc(1,Z,3,0,"mat-card",1),t.YNc(2,T,14,3,"mat-card",0),t.YNc(3,A,3,0,"mat-card",1),t.YNc(4,h,8,1,"mat-card",0),t.YNc(5,C,3,0,"mat-card",1)),2&e&&(t.Q6J("ngForOf",i.arrayTareas),t.xp6(1),t.Q6J("ngIf",0==i.arrayTareas.length),t.xp6(1),t.Q6J("ngForOf",i.arrReuniones),t.xp6(1),t.Q6J("ngIf",0==i.arrReuniones.length),t.xp6(1),t.Q6J("ngForOf",i.arrayAlertas),t.xp6(1),t.Q6J("ngIf",0==i.arrayAlertas.length))},directives:[c.sg,c.O5,p.a8,g.Hw,l.qn,l.HS],styles:["mat-card[_ngcontent-%COMP%]{background-color:#212f3c;margin:8px}","p[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], mat-icon[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%]{color:#d4e6f1}"]}),a})(),y=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[c.ez,p.QW,g.Ps,l.Hi]]}),a})();const L=[{path:"",component:(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list"]],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"app-list-view")},directives:[x],styles:[""]}),a})()}];let O=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[u.Bz.forChild(L)],u.Bz]}),a})(),q=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[c.ez,O,y]]}),a})()}}]);