(()=>{var e={365:()=>{!function(){var e,t,a,n,s,r;if((e=document.getElementById("site-navigation"))&&void 0!==(t=e.getElementsByTagName("button")[0]))if(void 0!==(a=e.getElementsByTagName("ul")[0])){for(a.setAttribute("aria-expanded","false"),-1===a.className.indexOf("nav-menu")&&(a.className+=" nav-menu"),t.onclick=function(){-1!==e.className.indexOf("toggled")?(e.className=e.className.replace(" toggled",""),t.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false")):(e.className+=" toggled",t.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"))},s=0,r=(n=a.getElementsByTagName("a")).length;s<r;s++)n[s].addEventListener("focus",o,!0),n[s].addEventListener("blur",o,!0);!function(e){var t,a,n=e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(t=function(e){var t,a=this.parentNode;if(a.classList.contains("focus"))a.classList.remove("focus");else{for(e.preventDefault(),t=0;t<a.parentNode.children.length;++t)a!==a.parentNode.children[t]&&a.parentNode.children[t].classList.remove("focus");a.classList.add("focus")}},a=0;a<n.length;++a)n[a].addEventListener("touchstart",t,!1)}(e)}else t.style.display="none";function o(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}}()},561:()=>{var e,t,a;e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,a=navigator.userAgent.toLowerCase().indexOf("msie")>-1,(e||t||a)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())}),!1)}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";a(561),a(365)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYUUsUUFHckIsSUFBSUMsRUFBU04sRUFBeUJFLEdBQVksQ0FHakRHLFFBQVMsQ0FBQyxHQU9YLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsT0FDZixDQ3JCQUosRUFBb0JPLEVBQUtGLElBQ3hCLElBQUlHLEVBQVNILEdBQVVBLEVBQU9JLFdBQzdCLElBQU9KLEVBQWlCLFFBQ3hCLElBQU0sRUFFUCxPQURBTCxFQUFvQlUsRUFBRUYsRUFBUSxDQUFFRyxFQUFHSCxJQUM1QkEsQ0FBTSxFQ0xkUixFQUFvQlUsRUFBSSxDQUFDTixFQUFTUSxLQUNqQyxJQUFJLElBQUlDLEtBQU9ELEVBQ1haLEVBQW9CYyxFQUFFRixFQUFZQyxLQUFTYixFQUFvQmMsRUFBRVYsRUFBU1MsSUFDNUVFLE9BQU9DLGVBQWVaLEVBQVNTLEVBQUssQ0FBRUksWUFBWSxFQUFNQyxJQUFLTixFQUFXQyxJQUUxRSxFQ05EYixFQUFvQmMsRUFBSSxDQUFDSyxFQUFLQyxJQUFVTCxPQUFPTSxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRlby8uL3NyYy9qcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2l0ZW8vLi9zcmMvanMvc2tpcC1saW5rLWZvY3VzLWZpeC5qcyIsIndlYnBhY2s6Ly9pdGVvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2l0ZW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaXRlby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaXRlby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBuYXZpZ2F0aW9uLmpzLlxuICpcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyBUQUIga2V5XG4gKiBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yIGRyb3Bkb3duIG1lbnVzLlxuICovXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgY29udGFpbmVyLCBidXR0b24sIG1lbnUsIGxpbmtzLCBpLCBsZW47XG5cbiAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2aWdhdGlvbicpO1xuICBpZiAoIWNvbnRhaW5lcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGJ1dHRvbiA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJylbMF07XG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGJ1dHRvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG1lbnUgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJylbMF07XG5cbiAgLy8gSGlkZSBtZW51IHRvZ2dsZSBidXR0b24gaWYgbWVudSBpcyBlbXB0eSBhbmQgcmV0dXJuIGVhcmx5LlxuICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBtZW51KSB7XG4gICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgaWYgKC0xID09PSBtZW51LmNsYXNzTmFtZS5pbmRleE9mKCduYXYtbWVudScpKSB7XG4gICAgbWVudS5jbGFzc05hbWUgKz0gJyBuYXYtbWVudSc7XG4gIH1cblxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoLTEgIT09IGNvbnRhaW5lci5jbGFzc05hbWUuaW5kZXhPZigndG9nZ2xlZCcpKSB7XG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKCcgdG9nZ2xlZCcsICcnKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gJyB0b2dnbGVkJztcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgYWxsIHRoZSBsaW5rIGVsZW1lbnRzIHdpdGhpbiB0aGUgbWVudS5cbiAgbGlua3MgPSBtZW51LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XG5cbiAgLy8gRWFjaCB0aW1lIGEgbWVudSBsaW5rIGlzIGZvY3VzZWQgb3IgYmx1cnJlZCwgdG9nZ2xlIGZvY3VzLlxuICBmb3IgKGkgPSAwLCBsZW4gPSBsaW5rcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdG9nZ2xlRm9jdXMsIHRydWUpO1xuICAgIGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0b2dnbGVGb2N1cywgdHJ1ZSk7XG4gIH1cblxuXHQvKipcblx0ICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxuXHQgKi9cbiAgZnVuY3Rpb24gdG9nZ2xlRm9jdXMoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gTW92ZSB1cCB0aHJvdWdoIHRoZSBhbmNlc3RvcnMgb2YgdGhlIGN1cnJlbnQgbGluayB1bnRpbCB3ZSBoaXQgLm5hdi1tZW51LlxuICAgIHdoaWxlICgtMSA9PT0gc2VsZi5jbGFzc05hbWUuaW5kZXhPZignbmF2LW1lbnUnKSkge1xuXG4gICAgICAvLyBPbiBsaSBlbGVtZW50cyB0b2dnbGUgdGhlIGNsYXNzIC5mb2N1cy5cbiAgICAgIGlmICgnbGknID09PSBzZWxmLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBpZiAoLTEgIT09IHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoJ2ZvY3VzJykpIHtcbiAgICAgICAgICBzZWxmLmNsYXNzTmFtZSA9IHNlbGYuY2xhc3NOYW1lLnJlcGxhY2UoJyBmb2N1cycsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmNsYXNzTmFtZSArPSAnIGZvY3VzJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmID0gc2VsZi5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfVxuXG5cdC8qKlxuXHQgKiBUb2dnbGVzIGBmb2N1c2AgY2xhc3MgdG8gYWxsb3cgc3VibWVudSBhY2Nlc3Mgb24gdGFibGV0cy5cblx0ICovXG4gIChmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgdmFyIHRvdWNoU3RhcnRGbiwgaSxcbiAgICAgIHBhcmVudExpbmsgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAucGFnZV9pdGVtX2hhc19jaGlsZHJlbiA+IGEnKTtcblxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgIHRvdWNoU3RhcnRGbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBtZW51SXRlbSA9IHRoaXMucGFyZW50Tm9kZSwgaTtcblxuICAgICAgICBpZiAoIW1lbnVJdGVtLmNsYXNzTGlzdC5jb250YWlucygnZm9jdXMnKSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG1lbnVJdGVtID09PSBtZW51SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJlbnRMaW5rLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHBhcmVudExpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoU3RhcnRGbiwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfShjb250YWluZXIpKTtcbn0pKCk7XG4iLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlzV2Via2l0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICd3ZWJraXQnICkgPiAtMSxcblx0ICAgIGlzT3BlcmEgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdvcGVyYScgKSAgPiAtMSxcblx0ICAgIGlzSWUgICAgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdtc2llJyApICAgPiAtMTtcblxuXHRpZiAoICggaXNXZWJraXQgfHwgaXNPcGVyYSB8fCBpc0llICkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdoYXNoY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZyggMSApLFxuXHRcdFx0XHRlbGVtZW50O1xuXG5cdFx0XHRpZiAoICEgKCAvXltBLXowLTlfLV0rJC8udGVzdCggaWQgKSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblxuXHRcdFx0aWYgKCBlbGVtZW50ICkge1xuXHRcdFx0XHRpZiAoICEgKCAvXig/OmF8c2VsZWN0fGlucHV0fGJ1dHRvbnx0ZXh0YXJlYSkkL2kudGVzdCggZWxlbWVudC50YWdOYW1lICkgKSApIHtcblx0XHRcdFx0XHRlbGVtZW50LnRhYkluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UgKTtcblx0fVxufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiXSwibmFtZXMiOlsiY29udGFpbmVyIiwiYnV0dG9uIiwibWVudSIsImxpbmtzIiwiaSIsImxlbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJvbmNsaWNrIiwicmVwbGFjZSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVGb2N1cyIsInRvdWNoU3RhcnRGbiIsInBhcmVudExpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwiZSIsIm1lbnVJdGVtIiwidGhpcyIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJhZGQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZWxmIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwicGFyZW50RWxlbWVudCIsImlzV2Via2l0IiwiaXNPcGVyYSIsImlzSWUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlbGVtZW50IiwiaWQiLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHJpbmciLCJ0ZXN0IiwidGFiSW5kZXgiLCJmb2N1cyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=