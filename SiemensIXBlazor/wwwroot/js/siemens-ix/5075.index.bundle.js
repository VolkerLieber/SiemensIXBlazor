"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[5075],{5075:(t,r,i)=>{i.r(r),i.d(r,{ix_split_button:()=>e});var o=i(4801);const e=class{constructor(t){(0,o.r)(this,t),this.buttonClick=(0,o.c)(this,"buttonClick",7),this.variant="primary",this.outline=!1,this.ghost=!1,this.label=void 0,this.icon="",this.splitIcon="context-menu",this.disabled=!1,this.placement="bottom-start",this.toggle=!1}linkTriggerRef(){this.triggerElement&&this.dropdownElement&&(this.dropdownElement.trigger=this.triggerElement)}componentDidLoad(){this.linkTriggerRef()}render(){const t={variant:this.variant,outline:this.outline,ghost:this.ghost,disabled:this.disabled,class:{"left-button-border":!this.outline}};return(0,o.h)(o.H,null,(0,o.h)("div",{class:{"btn-group":!0,"middle-gap":!this.outline}},this.label?(0,o.h)("ix-button",Object.assign({},t,{icon:this.icon,onClick:t=>this.buttonClick.emit(t)}),this.label):(0,o.h)("ix-icon-button",Object.assign({},t,{icon:this.icon,onClick:t=>this.buttonClick.emit(t)})),(0,o.h)("ix-icon-button",Object.assign({},t,{ref:t=>this.triggerElement=t,class:"anchor",icon:this.splitIcon}))),(0,o.h)("ix-dropdown",{ref:t=>this.dropdownElement=t},(0,o.h)("slot",null)))}get hostElement(){return(0,o.g)(this)}};e.style=".btn-group ix-button:first-child .btn{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.btn-group ix-button:last-child .btn{border-top-left-radius:0px;border-bottom-left-radius:0px}.btn-group ix-button:not(:first-child):not(:last-child) .btn{border-radius:0px;border-right:0px}:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .btn-group{position:relative;display:inline-flex;vertical-align:middle;width:100%}:host .btn-group>ix-button:nth-child(1){width:calc(100% - 2rem)}:host .btn-group>ix-button:nth-child(2){width:2rem}:host .middle-gap{gap:0.125rem}:host .left-button-border{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}"}}]);