/*!
Copyright (c) 2013 Gion Kunz <gion.kunz@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

!function(t,e){"function"==typeof define&&define.amd?define(["chartist"],function(o){return t.returnExportsGlobal=e(o)}):"object"==typeof exports?module.exports=e(require("chartist")):t["Chartist.plugins.tooltips"]=e(Chartist)}(this,function(t){return function(t,e,o){"use strict";var n={currency:void 0,currencyFormatCallback:void 0,tooltipOffset:{x:0,y:-20},anchorToPoint:!1,appendToBody:!1,class:void 0,pointClass:"ct-point"};function i(t){var e=new RegExp("tooltip-show\\s*","gi");t.className=t.className.replace(e,"").trim()}function a(t,e){return(" "+t.getAttribute("class")+" ").indexOf(" "+e+" ")>-1}o.plugins=o.plugins||{},o.plugins.tooltip=function(r){return r=o.extend({},n,r),function(n){var s=r.pointClass;n instanceof o.Bar?s="ct-bar":n instanceof o.Pie&&(s=n.options.donut?"ct-slice-donut":"ct-slice-pie");var c=n.container,l=c.querySelector(".chartist-tooltip");l||((l=e.createElement("div")).className=r.class?"chartist-tooltip "+r.class:"chartist-tooltip",r.appendToBody?e.body.appendChild(l):c.appendChild(l));var p=l.offsetHeight,f=l.offsetWidth;function u(t,e,o){c.addEventListener(t,function(t){e&&!a(t.target,e)||o(t)})}function d(e){p=p||l.offsetHeight;var o,n,i=-(f=f||l.offsetWidth)/2+r.tooltipOffset.x,a=-p+r.tooltipOffset.y;if(r.appendToBody)l.style.top=e.pageY+a+"px",l.style.left=e.pageX+i+"px";else{var s=c.getBoundingClientRect(),u=e.pageX-s.left-t.pageXOffset,d=e.pageY-s.top-t.pageYOffset;!0===r.anchorToPoint&&e.target.x2&&e.target.y2&&(o=parseInt(e.target.x2.baseVal.value),n=parseInt(e.target.y2.baseVal.value)),l.style.top=(n||d)+a+"px",l.style.left=(o||u)+i+"px"}}i(l),u("mouseover",s,function(t){var i,s=t.target,c="",u=(n instanceof o.Pie?s:s.parentNode)?s.parentNode.getAttribute("ct:meta")||s.parentNode.getAttribute("ct:series-name"):"",g=s.getAttribute("ct:meta")||u||"",m=!!g,h=s.getAttribute("ct:value");if(r.transformTooltipTextFnc&&"function"==typeof r.transformTooltipTextFnc&&(h=r.transformTooltipTextFnc(h)),r.tooltipFnc&&"function"==typeof r.tooltipFnc)c=r.tooltipFnc(g,h);else{if(r.metaIsHTML){var y=e.createElement("textarea");y.innerHTML=g,g=y.value}if(g='<span class="chartist-tooltip-meta">'+g+"</span>",m)c+=g+"<br>";else if(n instanceof o.Pie){var v=function(t,e){do{t=t.nextSibling}while(t&&!a(t,e));return t}(s,"ct-label");v&&(c+=((i=v).innerText||i.textContent)+"<br>")}h&&(r.currency&&(h=null!=r.currencyFormatCallback?r.currencyFormatCallback(h,r):r.currency+h.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1,")),c+=h='<span class="chartist-tooltip-value">'+h+"</span>")}c&&(l.innerHTML=c,d(t),function(t){a(t,"tooltip-show")||(t.className=t.className+" tooltip-show")}(l),p=l.offsetHeight,f=l.offsetWidth)}),u("mouseout",s,function(){i(l)}),u("mousemove",null,function(t){!1===r.anchorToPoint&&d(t)})}}}(window,document,t),t.plugins.tooltips});