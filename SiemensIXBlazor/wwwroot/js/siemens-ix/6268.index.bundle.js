"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[6268],{6268:(e,t,o)=>{o.r(t),o.d(t,{ix_tree_item:()=>i});var r=o(4801);const i=class{constructor(e){(0,r.r)(this,e),this.toggle=(0,r.c)(this,"toggle",7),this.itemClick=(0,r.c)(this,"itemClick",7),this.text=void 0,this.hasChildren=void 0,this.context=void 0}render(){var e,t,o;return(0,r.h)(r.H,{class:{selected:null===(e=this.context)||void 0===e?void 0:e.isSelected}},(0,r.h)("div",{class:"icon-toggle-container",onClick:e=>{e.preventDefault(),this.toggle.emit()}},this.hasChildren?(0,r.h)("ix-icon",{name:"chevron-right",size:"16",class:{"icon-toggle-down":null===(t=this.context)||void 0===t?void 0:t.isExpanded},color:"color-"+((null===(o=this.context)||void 0===o?void 0:o.isExpanded)?"primary":"std-text")}):null),(0,r.h)("div",{class:"tree-node-container",onClick:()=>{this.itemClick.emit()}},this.text,(0,r.h)("slot",null)))}};i.style=":host{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tree-node-container{display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem}:host .icon-toggle-container ix-icon{transition:transform 150ms ease-in-out}:host .icon-toggle-container ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(:disabled):not(.selected).hover),:host(:not(.disabled):not(:disabled):not(.selected):hover){background-color:var(--theme-tree-item--background--hover)}:host(:not(.disabled):not(:disabled):not(.selected).active),:host(:not(.disabled):not(:disabled):not(.selected):active){background-color:var(--theme-tree-item--background--active)}:host(.selected){background-color:var(--theme-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--theme-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--theme-tree-item--background--selected-active)}"}}]);