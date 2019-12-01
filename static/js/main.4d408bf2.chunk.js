(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1IER2",Modal:"Modal_Modal__3-Xes"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2hxsB",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__3deUK"}},15:function(e,t,a){e.exports={App:"App_App__3BJ0R"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__bf3dg"}},18:function(e,t,a){e.exports={Button:"Button_Button__3nioo"}},19:function(e,t,a){e.exports=a(48)},24:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(2),c=a.n(o),l=(a(24),a(13)),i=a(3),s=a(4),u=a(6),m=a(5),h=a(7),p=a(10),d=(a(25),a(15)),f=a.n(d),g=a(11),b=a.n(g),y=document.querySelector("#modal-root"),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.onClose()},a.handleBackdropRefClick=function(e){var t=a.backdropRef.current;t&&e.target!==t||a.props.onClose()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(r.a.createElement("div",{className:b.a.Overlay,role:"presentation",ref:this.backdropRef,onClick:this.handleBackdropRefClick},r.a.createElement("div",{className:b.a.Modal},e)),y)}}]),t}(n.Component),S=a(12),v=a.n(S),O=function(e){var t=e.keys,a=e.url,n=e.fullUrl,o=e.isModalOpen;return r.a.createElement("li",{className:v.a.ImageGalleryItem,key:t},r.a.createElement("img",{src:o?n:a,alt:"",className:v.a.ImageGalleryItem_image}))},I=a(16),E=a.n(I),k=function(e){var t=e.images;return r.a.createElement("ul",{className:E.a.ImageGallery},t.map((function(e){return r.a.createElement(O,{keys:e.id,url:e.webformatURL,fullUrl:e.largeImageURL})})))},j=a(8),C=a.n(j),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSearch(a.state.query),a.setState({query:""})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:C.a.Searchbar},r.a.createElement("form",{className:C.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:C.a.SearchForm_button},r.a.createElement("span",{className:C.a.SearchForm_button_label},"Search")),r.a.createElement("input",{className:C.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})))}}]),t}(n.Component),F=a(17),M=a.n(F),w=(a(47),function(){return r.a.createElement(M.a,null)}),R="https://pixabay.com/api/",q="key=14462661-6a591cd8dedfbd6803de54cb4",G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(R,"?").concat(q,"q=").concat(e,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){return console.log(e.hits)}))},x=(a(18),"Error"),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],isModalOpen:!1,isLoading:!1,error:null,pageNumber:1,query:""},a.onSearch=function(e){a.setState({query:e,images:[],pageNumber:1})},a.fetchImages=function(){a.setState({isLoading:!0}),G(a.state.query,a.state.pageNumber).then((function(e){console.log(e),a.setState((function(t){return{images:[].concat(Object(l.a)(t.images),Object(l.a)(e)),pageNumber:t.pageNumber+1}}))})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a.closeModal=function(){a.setState({isModalOpen:!a.state.isModalOpen})},a.notifyInvalid=function(){return Object(p.b)(x,{position:p.b.POSITION.TOP_CENTER})},a.handleImageRefClick=function(e){var t=a.imageRef.current;t&&e.target===t&&a.setState({isModalOpen:!a.state.isModalOpen})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.isModalOpen,a=e.images,n=e.isLoading,o=e.error;return r.a.createElement("div",{className:f.a.App},r.a.createElement(N,{onSearch:this.onSearch}),o&&r.a.createElement(p.a,null),n&&r.a.createElement(w,{type:"CradleLoader",color:"#00BFFF",height:100,width:100,timeout:3e3}),a.length>0&&r.a.createElement(k,{images:a}),t&&r.a.createElement(_,{onClose:this.closeModal},r.a.createElement(O,{isModalOpen:t,ref:this.imageRef,onClick:this.handleImageRefClick})))}}]),t}(n.Component);c.a.render(r.a.createElement(B,null),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1QmLE",SearchForm:"Searchbar_SearchForm__37nK3",SearchForm_button:"Searchbar_SearchForm_button__1XvZ_",SearchForm_button_label:"Searchbar_SearchForm_button_label__1X10P",SearchForm_input:"Searchbar_SearchForm_input__nqcoB"}}},[[19,1,2]]]);
//# sourceMappingURL=main.4d408bf2.chunk.js.map