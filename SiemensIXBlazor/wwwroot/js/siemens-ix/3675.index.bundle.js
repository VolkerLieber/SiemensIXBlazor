"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[3675],{3675:(e,o,t)=>{t.r(o),t.d(o,{ix_filter_chip:()=>l,ix_select_item:()=>i});var r=t(4801);const l=class{constructor(e){(0,r.r)(this,e),this.closeClick=(0,r.c)(this,"closeClick",7),this.disabled=!1,this.readonly=!1}onCloseClick(e){e.preventDefault(),e.stopPropagation(),this.closeClick.emit()}render(){return(0,r.h)(r.H,{class:{disabled:this.disabled,readonly:this.readonly},title:this.el.textContent},(0,r.h)("div",{class:"slot-container"},(0,r.h)("slot",null)),this.disabled||this.readonly?null:(0,r.h)("ix-icon-button",{ghost:!0,oval:!0,icon:"close-small",size:"16",tabindex:this.disabled?-1:0,variant:"primary",disabled:this.disabled,onClick:e=>this.onCloseClick(e)}))}get el(){return(0,r.g)(this)}};l.style=":host{display:inline-flex;align-items:center;justify-content:space-between;height:1.5rem;padding-left:0.5rem;border:var(--theme-focus--border-thickness) solid var(--theme-chip-primary-outline--border-color);border-radius:2rem;background-color:var(--theme-color-ghost);color:var(--theme-chip-primary-outline--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .slot-container :host-context(.disabled){background-color:var(--theme-color-ghost);border-color:var(--theme-color-component-4);color:var(--theme-color-weak-text)}:host ix-icon-button{height:1.5rem;margin-left:0.25rem}:host ix-icon-button:not(.disabled):not(:disabled):focus-visible{outline:none}:host(.disabled){border:var(--theme-focus--border-thickness) solid var(--theme-color-component-4);color:var(--theme-color-weak-text);padding-right:0.5rem;cursor:default}:host(.readonly){padding-right:0.5rem}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:hover:not(.disabled):not(:disabled)){background-color:var(--theme-color-ghost-primary--hover);border-color:var(--theme-chip-primary-outline--border-color--hover);color:var(--theme-chip-primary-outline--color--hover)}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:active:not(.disabled):not(:disabled)){background-color:var(--theme-color-ghost-primary--active);border-color:var(--theme-chip-primary-outline--border-color--active);color:var(--theme-chip-primary-outline--color--active)}:host(:focus-visible:not(.disabled):not(:disabled)){outline:var(--theme-color-focus-bdr) solid var(--theme-focus--border-thickness);outline-offset:-0.125rem}";class s extends CustomEvent{constructor(e){super("ix-select-item:labelChange",{bubbles:!0,detail:e})}}const i=class{constructor(e){(0,r.r)(this,e),this.itemClick=(0,r.c)(this,"itemClick",7),this.label=void 0,this.value=void 0,this.selected=!1,this.hover=!1}async onItemClick(e){null==e||e.preventDefault(),null==e||e.stopPropagation(),this.itemClick.emit(this.value)}componentDidRender(){if(!this.value)throw Error("ix-select-item must have a `value` property")}labelChange(e,o){this.hostElement.dispatchEvent(new s({newValue:e,oldValue:o}))}render(){return(0,r.h)(r.H,null,(0,r.h)("ix-dropdown-item",{class:{"select-item-checked":this.selected},checked:this.selected,label:this.label?this.label:this.value,onItemClick:e=>this.onItemClick(e)}))}get hostElement(){return(0,r.g)(this)}static get watchers(){return{label:["labelChange"]}}};i.style=":host{display:block;position:relative}:host>ix-dropdown-item{width:100%}:host .select-item-checked{background-color:var(--theme-select-list-item--background--selected);--ix-dropdown-item-checked-color:var(--theme-color-std-text)}:host(.d-none){display:none}"}}]);