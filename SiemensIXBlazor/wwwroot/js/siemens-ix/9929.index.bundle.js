"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[9929],{6826:(e,t,a)=>{a.d(t,{A:()=>l,a:()=>o,c:()=>r,u:()=>s});var n=a(1917);class i extends Event{constructor(e,t,a){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=a}}function o(e,t,a,n){let o;return e.dispatchEvent(new i(t,((e,t)=>{a(e,t),o=t}),n)),{unsubscribe:()=>{o()}}}function s(e,t,a){const i=new n.T,o=new n.T,s=new Set;return e.addEventListener("context-request",(e=>{(null==e?void 0:e.context.name)===t.name&&(e.stopPropagation(),e.subscribe&&s.add(e),i.emit(e),a&&e.callback(a,(()=>{s.delete(e)})))})),o.on((e=>{s.forEach((t=>t.callback(e,(()=>{s.delete(t)}))))})),{emit:e=>{o.emit(e)}}}const r=e=>e.closest("ix-menu"),l={name:"application-layout-context",initialValue:{hideHeader:!1,host:null,sidebar:!1}}},9929:(e,t,a)=>{a.r(t),a.d(t,{ix_map_navigation:()=>s});var n=a(4801),i=a(8137),o=a(6826);const s=class{constructor(e){(0,n.r)(this,e),this.navigationToggled=(0,n.c)(this,"navigationToggled",7),this.contextMenuClick=(0,n.c)(this,"contextMenuClick",7),this.applicationName=void 0,this.navigationTitle=void 0,this.hideContextMenu=!0,this.isSidebarOpen=!0,this.hasContentHeader=!1}get menu(){return this.hostElement.querySelector("ix-menu")}get menuOverlay(){return this.hostElement.querySelector("ix-menu-overlay")}get mapNavMenu(){return this.hostElement.shadowRoot.querySelector(".map-nav-menu")}get sidebar(){return this.hostElement.shadowRoot.querySelector(".map-nav-sidebar")}get overlay(){return this.hostElement.shadowRoot.querySelector("#overlay")}componentDidRender(){this.appendMenu(),this.closeOverlay()}componentWillLoad(){(0,o.u)(this.hostElement,o.A,{hideHeader:!1,host:"map-navigation"})}appendMenu(){this.menu.addEventListener("mapExpandChange",(e=>{const t=!e.detail;this.toggleSidebar(t)})),this.menu.enableMapExpand=!0}async toggleSidebar(e){this.isSidebarOpen=void 0!==e?e:!this.isSidebarOpen,this.isSidebarOpen?this.openSidebar():this.closeSidebar(),this.navigationToggled.emit(this.isSidebarOpen),this.menu.toggleMapExpand(this.isSidebarOpen)}closeSidebar(){(0,i.a)({targets:this.sidebar,duration:s.defaultTime,marginLeft:[0,"-29.75rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{this.sidebar.classList.add("d-none")}})}openSidebar(){(0,i.a)({targets:this.sidebar,duration:s.defaultTime,marginLeft:["-29.75rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{this.sidebar.classList.remove("d-none")}})}async openOverlay(e,t,a,n){(0,i.a)({targets:this.overlay,duration:s.slowTime,backdropFilter:[0,"blur(1rem)"],translateX:["-4rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{this.overlay.classList.remove("d-none")}});const o=document.createElement("ix-map-navigation-overlay");o.setAttribute("color",n),o.setAttribute("name",e),o.setAttribute("icon",a),o.setAttribute("slot","overlay"),o.addEventListener("closeClick",(()=>this.closeOverlay())),o.appendChild(t),this.hostElement.appendChild(o)}async closeOverlay(){(0,i.a)({targets:this.overlay,duration:s.slowTime,backdropFilter:["blur(1rem)",0],translateX:[0,"-4rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{var e;this.overlay&&(null===(e=this.overlay.firstChild)||void 0===e||e.remove(),this.overlay.classList.add("d-none"))}})}checkHasContentHeader(e){const t=e.currentTarget.assignedNodes({flatten:!0});this.hasContentHeader=0!==(null==t?void 0:t.length)}render(){return(0,n.h)(n.H,null,(0,n.h)("slot",{name:"menu"}),(0,n.h)("div",{class:"map-nav"},(0,n.h)("div",{class:"map-nav-sidebar"},(0,n.h)("div",{class:"map-nav-header"},(0,n.h)("ix-application-header",{name:this.applicationName,class:"map-nav-header-brand"},(0,n.h)("slot",{slot:"logo",name:"logo"}))),(0,n.h)("div",{class:"map-nav-sidebar-content"},(0,n.h)("div",{class:"map-nav-sidebar-static-content"},(0,n.h)("div",{class:"map-nav-title"},this.navigationTitle),this.hideContextMenu?"":(0,n.h)("ix-icon-button",{icon:"context-menu",ghost:!0,size:"24",variant:"secondary",onClick:e=>this.contextMenuClick.emit()})),(0,n.h)("div",{class:"map-nav-sidebar-user-content"},(0,n.h)("slot",{name:"sidebar-content"})))),(0,n.h)("div",{class:"content"},(0,n.h)("div",{class:{"map-nav-header-content":!0,"bg-2":!0,empty:!this.hasContentHeader}},(0,n.h)("slot",{name:"content-header",onSlotchange:e=>this.checkHasContentHeader(e)})),(0,n.h)("main",null,(0,n.h)("slot",null),(0,n.h)("slot",{name:"overlay"})))))}get hostElement(){return(0,n.g)(this)}};s.defaultTime=150,s.slowTime=500,s.style=":host{display:flex;position:relative;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .map-nav{display:flex;margin-left:3.25rem;position:relative;height:100%;flex-grow:1;overflow:hidden}:host .map-nav-sidebar{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);-webkit-border-end:0.125rem solid var(--theme-map-navigation-separator--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}:host .map-nav-sidebar-content{align-items:center;position:relative;overflow:auto;height:100%;width:100%}:host .map-nav-sidebar-content .map-nav-sidebar-static-content{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}:host .map-nav-header{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}:host .map-nav-header .map-nav-header-brand{background-color:var(--theme-map-navigation-background);display:flex;align-items:center;height:100%;width:100%;padding:0 1rem;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}:host .map-nav-header .map-nav-header-brand button{margin-left:1rem}:host .map-nav-header-content{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}:host .map-nav-header-content.empty{height:0}:host .map-nav-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}:host .content{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}:host ::slotted(ix-menu){position:absolute}"}}]);