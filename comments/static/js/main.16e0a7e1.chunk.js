(this["webpackJsonpts-ast-viewer"]=this["webpackJsonpts-ast-viewer"]||[]).push([[2],{107:function(e,t){},108:function(e,t){},12:function(e,t,n){"use strict";var r,a;n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),function(e){e[e.getChildrenWithComments=0]="getChildrenWithComments"}(r||(r={})),function(e){e[e.Loading=0]="Loading",e[e.Loaded=1]="Loaded",e[e.Error=2]="Error"}(a||(a={}))},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"SET_CODE",(function(){return T})),n.d(r,"SET_API_LOADING_STATE",(function(){return w})),n.d(r,"REFRESH_SOURCEFILE",(function(){return F})),n.d(r,"SET_SELECTED_NODE",(function(){return I})),n.d(r,"SET_OPTIONS",(function(){return x}));var a=n(0),i=n.n(a),o=n(23),c=n.n(o),u=n(26),l=n(29),s=n(7),d=n.n(s),p=n(14),m=n(9),f=n(8),h=n(30),g=n(3),v=n(4),b=n(15),E=n(10),y=n(11),S=n(57);function C(e){var t=e.backgroundColor;return(i.a.createElement("div",{className:"verticallyCenter horizontallyCenter fillHeight",style:{backgroundColor:t}},i.a.createElement(S.BeatLoader,{color:"#fff",loading:!0,size:25})))}var O=n(2),k=function(e){Object(y.a)(r,e);var t=Object(E.a)(r);function r(e){var a;Object(g.a)(this,r),(a=t.call(this,e)).editor=void 0,a.outerContainerRef=i.a.createRef(),a.deltaDecorations=[],a.lineAndColumnComputer=new O.c(""),a.state={position:0,lineNumber:1,column:1,editorComponent:void 0},a.editorDidMount=a.editorDidMount.bind(Object(b.a)(a));var o=Promise.all([n.e(0),n.e(8)]).then(n.t.bind(null,386,7));return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,446)).then((function(e){e.languages.typescript.typescriptDefaults.setCompilerOptions({target:e.languages.typescript.ScriptTarget.ESNext,allowNonTsExtensions:!0}),o.then((function(e){a.setState({editorComponent:e.default})})).catch((function(e){console.log(e),a.setState({editorComponent:!1})}))})).catch((function(e){console.log(e),a.setState({editorComponent:!1})})),a}return Object(v.a)(r,[{key:"render",value:function(){return this.updateHighlight(),i.a.createElement("div",{id:this.props.id,ref:this.outerContainerRef,className:function(e){var t=["codeEditor"];e&&t.push("hasInfo");return t.join(" ")}(this.props.showInfo)},i.a.createElement("div",{className:"editorContainer"},this.getEditor()),this.props.showInfo&&this.getInfo())}},{key:"getInfo",value:function(){return i.a.createElement("div",{className:"editorInfo"},"Pos ",this.state.position,", Ln ",this.state.lineNumber,", Col ",this.state.column)}},{key:"updateHighlight",value:function(){if(null!=this.editor){this.lineAndColumnComputer.text!==this.props.text&&(this.lineAndColumnComputer=new O.c(this.props.text));var e=this.props.highlight,t=this.lineAndColumnComputer,n=function(){if(null==e)return;var n=t.getNumberAndColumnFromPos(e.start),r=t.getNumberAndColumnFromPos(e.end);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}}();this.deltaDecorations=this.editor.deltaDecorations(this.deltaDecorations,null==n?[]:[{range:n,options:{className:"editorRangeHighlight"}}])}}},{key:"getEditor",value:function(){var e=this;return null==this.state.editorComponent?i.a.createElement(C,{backgroundColor:"#1e1e1e"}):!1===this.state.editorComponent?i.a.createElement("div",{className:"errorMessage"},"Error loading code editor. Please refresh the page to try again."):i.a.createElement(this.state.editorComponent,{width:"100%",height:"100%",value:this.props.text,theme:"vs-dark",language:"typescript",onChange:function(t){return e.props.onChange&&e.props.onChange(t)},editorDidMount:this.editorDidMount,options:{automaticLayout:!1,renderWhitespace:this.props.renderWhiteSpace?"all":"none",minimap:{enabled:!1},readOnly:this.props.readOnly,quickSuggestions:!1,occurrencesHighlight:!1,selectionHighlight:!1,codeLens:!1,suggestOnTriggerCharacters:!1}})}},{key:"editorDidMount",value:function(e,t){var n=this;this.editor=e,e.onDidChangeCursorPosition((function(t){var r=e.getModel();null!=r&&n.setState({position:r.getOffsetAt(t.position),lineNumber:t.position.lineNumber,column:t.position.column})})),e.onMouseDown((function(t){if(null!=t.target&&null!=t.target.range&&null!=n.props.onClick){var r=e.getPosition();if(null!=r){var a=n.lineAndColumnComputer.getPosFromLineAndColumn(r.lineNumber,r.column);n.props.onClick([a,a])}}}));var r=0,a=0;setInterval((function(){var t=n.outerContainerRef.current;if(null!=t){var i=t.offsetWidth,o=t.offsetHeight;r===o&&a===i||(e.layout(),r=o,a=i)}}),500),this.updateHighlight(),this.props.editorDidMount&&this.props.editorDidMount(e,t)}}]),r}(i.a.Component),N=function(e){Object(y.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(g.a)(this,n),(r=t.call(this,e)).lastResetHash=void 0,r.state={hasError:!1},r}return Object(v.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e,errorInfo:t}),console.error(e),null!=this.props.getResetHash&&(this.lastResetHash=this.props.getResetHash())}},{key:"render",value:function(){return this.getHasError()?i.a.createElement("div",null,i.a.createElement("h2",null,"Something went wrong"),i.a.createElement("div",{style:{whiteSpace:"pre-wrap"}},i.a.createElement("div",null,this.state.error&&this.state.error.toString()),i.a.createElement("div",null,this.state.errorInfo.componentStack))):this.props.children}},{key:"getHasError",value:function(){return!!this.state.hasError&&(!this.hasHashChanged()||(this.lastResetHash=void 0,this.setState({hasError:!1,error:void 0}),!1))}},{key:"hasHashChanged",value:function(){return null!=this.props.getResetHash&&this.props.getResetHash()!==this.lastResetHash}}]),n}(i.a.Component),j=n(12),T="SET_CODE",w="SET_API_LOADING_STATE",F="REFRESH_SOURCEFILE",I="SET_SELECTED_NODE",x="SET_OPTIONS",A={id:"options",buttonId:"optionsButton",compilerVersionSelectionId:"compilerVersionSelection",treeModeId:"treeMode",bindingEnabledId:"bindingEnabled",showFactoryCodeId:"showFactoryCode",showInternalsId:"showInternals"},L={id:"codeEditor"},P={id:"treeViewer",selectedNodeClass:"selected"},D={node:{id:"node"},type:{id:"type"},symbol:{id:"symbol"},signature:{id:"signature"}},M=150;function R(e){return i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.text)}var _=function(e){Object(y.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(g.a)(this,n),(r=t.call(this,e)).state={showOptionsMenu:!1},r}return Object(v.a)(n,[{key:"render",value:function(){var e=this;return(i.a.createElement("div",{id:A.id},i.a.createElement("div",{id:A.buttonId,onClick:function(){return e.setState({showOptionsMenu:!e.state.showOptionsMenu})}},"Options"),i.a.createElement("div",{className:"menuLine",hidden:!this.state.showOptionsMenu}),i.a.createElement("div",{className:"menu",hidden:!this.state.showOptionsMenu},this.getCompilerVersions(),this.getTreeMode(),this.getScriptKind(),this.getScriptTarget(),this.getBindingEnabled(),this.getShowInternals(),i.a.createElement("div",{className:"bottomLinks"},i.a.createElement(R,{text:"About",url:"https://github.com/dsherret/ts-ast-viewer/tree/master/docs/about.md"}),i.a.createElement("span",null,"\xa0|\xa0"),i.a.createElement(R,{text:"View on GitHub",url:"https://github.com/dsherret/ts-ast-viewer"})))))}},{key:"getCompilerVersions",value:function(){var e=this,t=i.a.createElement("select",{id:A.compilerVersionSelectionId,value:this.props.options.compilerPackageName,onChange:function(t){return e.onChange({compilerPackageName:t.target.value})}},f.compilerVersionCollection.map((function(e){return i.a.createElement("option",{value:e.packageName,key:e.packageName},e.version)})));return i.a.createElement(H,{name:"Version",value:t})}},{key:"getTreeMode",value:function(){var e=this,t=i.a.createElement("select",{id:A.treeModeId,value:this.props.options.treeMode,onChange:function(t){return e.onChange({treeMode:parseInt(t.target.value,10)})}},i.a.createElement("option",{value:j.b.getChildrenWithComments},"node.getChildrenWithComments() - ts-morph (experimental)"));return i.a.createElement(H,{name:"Tree mode",value:t})}},{key:"getScriptKind",value:function(){var e=this,t=this.props.api;if(null!=t)return this.getEnumOption("Script kind","ts.ScriptKind",t.ScriptKind,this.props.options.scriptKind,(function(t){return e.onChange({scriptKind:t})}))}},{key:"getScriptTarget",value:function(){var e=this,t=this.props.api;if(null!=t)return this.getEnumOption("Script target","ts.ScriptTarget",t.ScriptTarget,this.props.options.scriptTarget,(function(t){return e.onChange({scriptTarget:t})}))}},{key:"getBindingEnabled",value:function(){var e=this,t=i.a.createElement("div",null,i.a.createElement("input",{id:A.bindingEnabledId,type:"checkbox",checked:this.props.options.bindingEnabled,onChange:function(t){return e.onChange({bindingEnabled:!!t.target.checked})}}));return i.a.createElement(H,{name:"Binding",value:t})}},{key:"getShowInternals",value:function(){var e=this,t=i.a.createElement("div",null,i.a.createElement("input",{id:A.showInternalsId,type:"checkbox",checked:this.props.options.showInternals,onChange:function(t){return e.onChange({showInternals:!!t.target.checked})}}));return i.a.createElement(H,{name:"Show internals",value:t})}},{key:"getEnumOption",value:function(e,t,n,r,a){var o=i.a.createElement("select",{value:r,onChange:function(e){return a(parseInt(e.target.value,10))}},O.b.getNamesForValues(n).map((function(e){return n=e.value,r=e.names,i.a.createElement("option",{value:n,key:n},t,".",r.join(" / "));var n,r})));return(i.a.createElement(H,{name:e,value:o}))}},{key:"onChange",value:function(e){this.props.onChange(Object(m.a)({},e))}}]),n}(i.a.Component),H=function(e){Object(y.a)(n,e);var t=Object(E.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"option"},i.a.createElement("div",{className:"optionName"},this.props.name,":"),i.a.createElement("div",{className:"optionValue"},this.props.value))}}]),n}(i.a.Component),K=n(59),V=n.n(K),W=n(21),U=n.n(W),z=function(e){Object(y.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(g.a)(this,n),(r=t.call(this,e)).state={collapsed:e.defaultCollapsed},r.toggleState=r.toggleState.bind(Object(b.a)(r)),r}return Object(v.a)(n,[{key:"render",value:function(){return this.state.collapsed?i.a.createElement(U.a,{nodeLabel:this.props.nodeLabel,collapsed:!0,onClick:this.toggleState}):i.a.createElement(U.a,{nodeLabel:this.props.nodeLabel,collapsed:!1,onClick:this.toggleState},this.props.getChildren())}},{key:"toggleState",value:function(){this.setState({collapsed:!this.state.collapsed})}}]),n}(a.Component),B=function(e){Object(y.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(g.a)(this,n),(r=t.call(this,e)).state={isHovering:!1},r.onMouseHoverChanged=r.onMouseHoverChanged.bind(Object(b.a)(r)),r}return Object(v.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"toolTippedText",onMouseEnter:this.onMouseHoverChanged,onMouseLeave:this.onMouseHoverChanged},i.a.createElement("div",{className:"titleText"},this.props.text),this.state.isHovering&&this.getToolTip())}},{key:"onMouseHoverChanged",value:function(){this.setState({isHovering:!this.state.isHovering})}},{key:"getToolTip",value:function(){return i.a.createElement("div",{className:"tooltipText"},this.props.children)}}]),n}(i.a.Component),J=function(e){Object(y.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(g.a)(this,n),(r=t.call(this,e)).state={publicApiInfo:void 0,lastCompilerPackageName:void 0},r}return Object(v.a)(n,[{key:"render",value:function(){this.updatePublicApiInfo();var e=this.props,t=e.selectedNode,n=e.sourceFile,r=e.bindingEnabled,a=e.bindingTools,o={api:this.props.compiler.api,publicApiInfo:this.state.publicApiInfo,showInternals:this.props.showInternals,sourceFile:n};return null==this.state.publicApiInfo?i.a.createElement(C,{backgroundColor:"#1e1e1e"}):i.a.createElement("div",{className:"propertiesViewer"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",null,"Node"),i.a.createElement("div",{id:D.node.id},function(e,t){return i.a.createElement(z,{nodeLabel:Object(O.h)(e.api,t),defaultCollapsed:!1,getChildren:function(){var a=e.sourceFile;return(i.a.createElement(i.a.Fragment,null,q(e,t),n("getChildCount()",t.getChildCount(a)),n("getFullStart()",t.getFullStart()),n("getStart()",t.getStart(a)),n("getStart(sourceFile, true)",Object(f.getStartSafe)(t,a)),n("getFullWidth()",t.getFullWidth()),n("getWidth()",t.getWidth(a)),n("getLeadingTriviaWidth()",t.getLeadingTriviaWidth(a)),n("getFullText()",t.getFullText(a)),n("getText()",a.text.substring(t.getStart(e.sourceFile),t.getEnd())),r("ts.getLeadingCommentRanges(fileFullText, ".concat(t.getFullStart(),")"),e.api.getLeadingCommentRanges(e.sourceFile.text,t.getFullStart())),r("ts.getTrailingCommentRanges(fileFullText, ".concat(t.end,")"),e.api.getTrailingCommentRanges(e.sourceFile.text,t.end))))}});function n(e,t){return Q(e,"string"===typeof t?t:JSON.stringify(t))}function r(t,n){return null==n?Q(t,"undefined"):$(e,t,n)}}(o,t)),r&&function(e,t,n){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Type"),i.a.createElement("div",{id:D.type.id},function(e,t,n){if(t.kind===e.api.SyntaxKind.SourceFile)return i.a.createElement(i.a.Fragment,null,"[None]");var r=G((function(){return n.getTypeAtLocation(t)}));return null==r?i.a.createElement(i.a.Fragment,null,"[None]"):"string"===typeof r?i.a.createElement(i.a.Fragment,null,"[Error getting type: ",r,"]"):X(e,r,a()||"Type");function a(){try{return n.typeToString(r,t)}catch(e){return"[Problem getting type text: ".concat(e,"]")}}}(e,t,n)),i.a.createElement("h2",null,"Symbol"),i.a.createElement("div",{id:D.symbol.id},function(e,t,n){var r=G((function(){return t.symbol||n.getSymbolAtLocation(t)}));return null==r?i.a.createElement(i.a.Fragment,null,"[None]"):"string"===typeof r?i.a.createElement(i.a.Fragment,null,"[Error getting symbol: ",r,"]"):X(e,r,function(){try{return r.getName()}catch(e){return"[Problem getting symbol name: ".concat(e,"]")}}()||"Symbol")}(e,t,n)),i.a.createElement("h2",null,"Signature"),i.a.createElement("div",{id:D.signature.id},function(e,t,n){var r=G((function(){return n.getSignatureFromDeclaration(t)}));return null==r||"string"===typeof r?i.a.createElement(i.a.Fragment,null,"[None]"):X(e,r,"Signature")}(e,t,n)))}(o,t,a().typeChecker)))}},{key:"updatePublicApiInfo",value:function(){var e=this;this.state.lastCompilerPackageName!==this.props.compiler.packageName&&setTimeout((function(){e.setState({lastCompilerPackageName:e.props.compiler.packageName}),Object(f.getPublicApiInfo)(e.props.compiler.packageName).then((function(t){e.setState({publicApiInfo:t})})).catch((function(t){console.error(t),e.setState({publicApiInfo:!1})}))}),0)}}]),n}(i.a.Component);function G(e){try{return e()}catch(t){return JSON.stringify(t)}}function X(e,t,n){return i.a.createElement(z,{nodeLabel:n,defaultCollapsed:!1,getChildren:function(){return q(e,t)}})}function q(e,t){var n=ee(e,t);return i.a.createElement(i.a.Fragment,null,n.map((function(n){var r,a,o,c=(r=n.key,a=n.value,o=t,null===a?Q(r,"null"):void 0===a?Q(r,"undefined"):a instanceof Array?$(e,r,a):ae(a)?function(e,t,n){return i.a.createElement("div",{className:"object",key:t,"data-name":t},i.a.createElement("div",{className:"key"},t,":"),i.a.createElement("div",{className:"value"},Y(e,n)))}(e,r,a):function(e){return"function"===typeof e.keys&&"function"===typeof e.values}(a)?function(e,t,n){var r=O.a.from(n.entries());return 0===r.length?Q(t,"{}"):i.a.createElement("div",{className:"array",key:t,"data-name":t},i.a.createElement("div",{className:"key"},t,":","{"),i.a.createElement("div",{className:"value"},r.map((function(t,n){return Y(e,t[1],t[0],n)}))),i.a.createElement("div",{className:"suffix"},"}"))}(e,r,a):"object"===typeof a?function(e,t,n){return 0===ee(e,n).length?Q(t,"{}"):i.a.createElement("div",{className:"object",key:t,"data-name":t},i.a.createElement("div",{className:"key"},t,":"),i.a.createElement("div",{className:"value"},Y(e,n)))}(e,r,a):function(e,t,n,r){return i.a.createElement("div",{className:"text",key:t,"data-name":t},i.a.createElement("div",{className:"key"},t,":"),i.a.createElement("div",{className:"value"},function(){if(ae(r))switch(t){case"kind":return"".concat(n," (SyntaxKind.").concat(Object(O.h)(e.api,n),")");case"flags":return ue(e.api.NodeFlags,n)}return ie(r)&&"objectFlags"===t?ue(e.api.ObjectFlags,n):ie(r)&&"flags"===t?ue(e.api.TypeFlags,n):oe(r)&&"flags"===t?ue(e.api.SymbolFlags,n):V.a.stringify(n)}()))}(e,r,a,o));return"internal"===n.permission?i.a.createElement("div",{className:"internal",key:n.key,"data-name":n.key},c):c})))}function $(e,t,n){return 0===n.length?Q(t,"[]"):i.a.createElement("div",{className:"array",key:t,"data-name":t},i.a.createElement("div",{className:"key"},t,": ["),i.a.createElement("div",{className:"value"},n.map((function(t,n){return Y(e,t,void 0,n)}))),i.a.createElement("div",{className:"suffix"},"]"))}function Q(e,t){return i.a.createElement("div",{className:"text",key:e,"data-name":e},null==e?void 0:i.a.createElement("div",{className:"key"},e,":"),i.a.createElement("div",{className:"value"},t))}function Y(e,t,n,r){var a=Z(e,t);return n=function(){if(null==n)return a;if(null!=a)return"".concat(n,": ").concat(Z(e,t));return n}(),"string"===typeof t?Q(n,'"'.concat(t,'"')):"number"===typeof t?Q(n,t.toString()):"boolean"===typeof t?Q(n,t.toString()):i.a.createElement(z,{nodeLabel:n,key:r,defaultCollapsed:!0,getChildren:function(){return q(e,t)}})}function Z(e,t){if(null!=t){if(ae(t))return r(Object(O.h)(e.api,t));if(ce(t))return r("Signature");if(ie(t))return r("Type");if(oe(t))return r("Symbol");var n=typeof t;if("string"!==n&&"number"!==n&&"boolean"!==n)return r("Object")}function r(e){var n=function(){try{return"function"===typeof t.getName?t.getName():ae(t)&&null!=t.name?t.name.getText():void 0}catch(e){return}}();return null==n?e:"".concat(e," (").concat(n,")")}}function ee(e,t){return null==t?[]:Object.keys(t).map((function(n){return{key:n,permission:re(e,t,n),value:t[n]}})).filter((function(t){return!1!==t.permission&&(e.showInternals||"internal"!==t.permission)}))}var te=new Set(["parent","_children","symbol"]),ne=new Set(["checker","symbol"]);function re(e,t,n){var r=e.publicApiInfo;if(ae(t)){if(te.has(n))return!1;if(!r)return!0;var a=Object(O.h)(e.api,t);return i(r.nodePropertiesBySyntaxKind.get(a))}return ie(t)?!ne.has(n)&&i(r&&r.typeProperties):ce(t)?i(r&&r.signatureProperties):!oe(t)||i(r&&r.symbolProperties);function i(e){return!e||(!!e.has(n)||"internal")}}function ae(e){return"number"===typeof e.kind}function ie(e){return null!=e.getBaseTypes}function oe(e){return null!=e.getDeclarations}function ce(e){return null!=e.declaration&&ae(e.declaration)}function ue(e,t){var n=Object(O.g)(e,t);return 0===n.length?i.a.createElement(i.a.Fragment,null,t):i.a.createElement(B,{text:t.toString()},i.a.createElement("ul",null,n.map((function(e,t){return i.a.createElement("li",{key:t},e)}))))}var le=function(e){Object(y.a)(n,e);var t=Object(E.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props,t=e.sourceFile,n=e.selectedNode,r=e.onSelectNode,a=e.mode,o=e.api,c=0;return i.a.createElement("div",{id:P.id},function e(t,a){var u=a(t),l="nodeText"+(t===n?" "+P.selectedNodeClass:""),s=Object(O.h)(o,t),d=i.a.createElement("div",{onClick:function(){return r(t)},className:l},s);return 0===u.length?i.a.createElement("div",{key:c++,className:"endNode","data-name":s},d):i.a.createElement("div",{"data-name":s,key:c++},i.a.createElement(U.a,{nodeLabel:d},u.map((function(t){return e(t,a)}))))}(this.props.sourceFile,Object(f.getChildrenFunction)(a,t)))}}]),n}(i.a.Component);n(134);function se(e){return{type:r.SET_API_LOADING_STATE,loadingState:e}}function de(e,t){return{type:r.REFRESH_SOURCEFILE,compilerPackageName:e,api:t}}var pe=Object(l.b)((function(e){return Object(m.a)({},e)}),(function(e){var t=Object(O.f)((function(e){return n(e)}),M);return n("typescript"),{onCodeChange:function(n,a){e(function(e){return{type:r.SET_CODE,code:e}}(a)),t(n)},onNodeChange:function(t){return e(function(e){return{type:r.SET_SELECTED_NODE,node:e}}(t))},onOptionsChange:function(n,a){var i=void 0!==a.scriptKind||void 0!==a.scriptTarget||void 0!==a.compilerPackageName||void 0!==a.bindingEnabled;e(function(e){return{type:r.SET_OPTIONS,options:e}}(a)),i&&t(n)}};function n(e){return a.apply(this,arguments)}function a(){return(a=Object(p.a)(d.a.mark((function t(n){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=!Object(f.hasLoadedCompilerApi)(n),t.prev=1,r&&e(se(j.a.Loading)),t.next=5,Object(f.getCompilerApi)(n);case 5:a=t.sent,e(de(n,a)),r&&e(se(j.a.Loaded)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0),r&&e(se(j.a.Error));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}}))((function(e){var t=e.compiler;return(i.a.createElement("div",{className:"App"},i.a.createElement(h.a,{split:"horizontal",defaultSize:50,allowResize:!1},i.a.createElement("header",{className:"AppHeader clearfix"},i.a.createElement("h2",{id:"title"},"TypeScript AST Viewer"),i.a.createElement(_,{api:null==t?void 0:t.api,options:e.options,onChange:function(t){return e.onOptionsChange(t.compilerPackageName||e.options.compilerPackageName,t)}})),i.a.createElement(h.a,{split:"vertical",minSize:50,defaultSize:"33%"},i.a.createElement(k,{id:L.id,onChange:function(t){return e.onCodeChange(e.options.compilerPackageName,t)},onClick:function(t){if(null!=e.compiler){var n=Object(f.getDescendantAtRange)(e.options.treeMode,e.compiler.sourceFile,t,e.compiler.api);e.onNodeChange(n)}},text:e.code,highlight:n(),showInfo:!0,renderWhiteSpace:!0,editorDidMount:r}),function(){if(null==t||e.apiLoadingState===j.a.Loading)return i.a.createElement(C,null);if(e.apiLoadingState===j.a.Error)return i.a.createElement("div",{className:"errorMessage"},"Error loading compiler API. Please refresh the page to try again.");return(i.a.createElement(N,null,i.a.createElement(h.a,{split:"vertical",minSize:50,defaultSize:"50%"},i.a.createElement(le,{api:t.api,selectedNode:t.selectedNode,sourceFile:t.sourceFile,onSelectNode:function(t){return e.onNodeChange(t)},mode:e.options.treeMode}),i.a.createElement(J,{compiler:t,selectedNode:t.selectedNode,sourceFile:t.sourceFile,bindingTools:t.bindingTools,bindingEnabled:e.options.bindingEnabled,showInternals:e.options.showInternals}))))}()))));function n(){if(null!=e.compiler){var t=e.compiler,n=t.selectedNode,r=t.sourceFile;return n===r?void 0:{start:Object(f.getStartSafe)(n,r),end:n.end}}}function r(e){setTimeout((function(){return e.focus()}),100),window.setMonacoEditorText=function(t){var n=e.getModel();null!=n&&e.executeEdits("my-source",[{range:n.getFullModelRange(),text:t}])}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(135),n(136),n(137);var me=new O.d;var fe=Object(u.b)((function(e,t){if(null==e)throw new Error("State was undefined. Ensure it never is.");switch(t.type){case r.SET_SELECTED_NODE:return null==e.compiler?e:Object(m.a)({},e,{compiler:Object(m.a)({},e.compiler,{selectedNode:t.node})});case r.SET_API_LOADING_STATE:return Object(m.a)({},e,{apiLoadingState:t.loadingState});case r.REFRESH_SOURCEFILE:var n=Object(m.a)({},e,{options:Object(f.convertOptions)(null==e.compiler?void 0:e.compiler.api,t.api,e.options)});return function(e,t,n,r,a){var i=Object(f.createSourceFile)(t,r,a.scriptTarget,a.scriptKind),o=i.sourceFile,c=i.bindingTools;n.compiler={packageName:e,api:t,sourceFile:o,bindingTools:c,selectedNode:o}}(t.compilerPackageName,t.api,n,e.code,e.options),me.updateUrl(e.code),n;case r.SET_CODE:return Object(m.a)({},e,{code:t.code});case r.SET_OPTIONS:return Object(m.a)({},e,{options:Object(m.a)({},e.options,{},t.options)});default:return e}}),{apiLoadingState:j.a.Loading,code:(new O.d).getUrlCode(),options:{compilerPackageName:"typescript",treeMode:j.b.getChildrenWithComments,scriptTarget:6,scriptKind:4,bindingEnabled:!0,showInternals:!1},compiler:void 0});c.a.render(i.a.createElement(l.a,{store:fe},i.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),console.log("[ts-ast-viewer]: Inspect the ts, sourceFile, node, symbol, type, signature, program, and checker/typeChecker global variables here in the console."),fe.subscribe((function(){var e=fe.getState();if(null!=e.compiler&&null!=e.compiler.selectedNode){var t=window,n=e.compiler.selectedNode;if(t.ts=e.compiler.api,t.node=n,t.selectedNode=n,t.sourceFile=e.compiler.sourceFile,e.options.bindingEnabled){var r=e.compiler.bindingTools();t.checker=r.typeChecker,t.typeChecker=r.typeChecker,t.program=r.program,t.type=a((function(){return r.typeChecker.getTypeAtLocation(n)})),t.symbol=a((function(){return n.symbol||r.typeChecker.getSymbolAtLocation(n)})),t.signature=a((function(){return r.typeChecker.getSignatureFromDeclaration(n)}))}else t.typeChecker=void 0,t.program=void 0,t.type=void 0,t.symbol=void 0,t.signature=void 0}function a(e){try{return e()}catch(t){return}}}))},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n(7),a=n.n(r),i=n(14),o=n(2),c=[{version:"3.7.4",packageName:"typescript"}];function u(e){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="typescript"===e.t0?3:6;break;case 3:return e.next=5,Promise.all([n.e(74),n.e(6)]).then(n.t.bind(null,139,7));case 5:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",Object(o.e)(t,"Not implemented version: ".concat(t)));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="typescript"===e.t0?3:6;break;case 3:return e.next=5,n.e(13).then(n.bind(null,142));case 5:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",Object(o.e)(t,"Not implemented version: ".concat(t)));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="typescript"===e.t0?3:6;break;case 3:return e.next=5,n.e(14).then(n.bind(null,141));case 5:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",Object(o.e)(t,"Not implemented version: ".concat(t)));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2:function(e,t,n){"use strict";function r(e,t){throw new Error(t)}n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return g}));var a=n(3),i=n(4),o=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,null,[{key:"from",value:function(e){for(var t=[];;){var n=e.next();if(n.done)return t;t.push(n.value)}}},{key:"binarySearch",value:function(e,t){for(var n=e.length-1,r=0;r<=n;){var a=Math.floor((n+r)/2),i=t(e[a]);if(0===i)return a;i<0?n=a-1:r=a+1}return-1}}]),e}(),c=(n(7),n(13));function u(e,t){var n;return function(r){null!=n&&clearTimeout(n),n=setTimeout((function(){n=void 0,e(r)}),t)}}var l=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,null,[{key:"getNames",value:function(e){return Object.keys(e).filter((function(t){return"number"===typeof e[t]}))}},{key:"getValues",value:function(e){return Object.keys(e).map((function(t){return e[t]})).filter((function(e){return"number"===typeof e}))}},{key:"getNamesForValues",value:function(e){var t,n={},r=Object(c.a)(this.getNames(e));try{for(r.s();!(t=r.n()).done;){var a=t.value,i=e[a];null==n[i]&&(n[i]=[]),n[i].push(a)}}catch(o){r.e(o)}finally{r.f()}return Object.keys(n).map((function(e){return{value:parseInt(e,10),names:n[e]}}))}}]),e}();function s(e,t){var n=Object.keys(e).map((function(t){return e[t]})).filter((function(e){return"number"===typeof e})).filter((function(e){return 0!==(e&t)}));return n.filter((function(e,t){return n.indexOf(e)===t})).map((function(t){return e[t]}))}var d=n(20);function p(e,t){return d.CommentNodeParser.isCommentList(t)?"CommentList"+d.CommentListKind[t.commentListKind]:function(e){null==m[e.tsAstViewer.packageName]&&(m[e.tsAstViewer.packageName]=function(e){var t,n={},r=Object(c.a)(Object.keys(e.SyntaxKind).filter((function(e){return isNaN(parseInt(e,10))})));try{for(r.s();!(t=r.n()).done;){var a=t.value,i=e.SyntaxKind[a];null==n[i]&&(n[i]=a)}}catch(o){r.e(o)}finally{r.f()}return n}(e));return m[e.tsAstViewer.packageName]}(e)[t.kind]}var m={};var f=function(){function e(t){Object(a.a)(this,e),this.text=t,this.lineInfos=void 0,this.lineInfos=function(e){for(var t=[],n=0,r=0;r<e.length;r++)"\n"===e[r]&&a(r);return a(e.length),t;function a(e){t.push({pos:n,length:e-n,number:t.length+1}),n=e+1}}(t)}return Object(i.a)(e,[{key:"getNumberAndColumnFromPos",value:function(e){if(e<0)return{lineNumber:1,column:1};var t=o.binarySearch(this.lineInfos,(function(t){return e<t.pos?-1:e>=t.pos&&e<t.pos+t.length+1?0:1})),n=t>=0?this.lineInfos[t]:this.lineInfos[this.lineInfos.length-1];return null==n?{lineNumber:1,column:1}:{lineNumber:n.number,column:Math.min(e-n.pos+1,n.length+1)}}},{key:"getPosFromLineAndColumn",value:function(e,t){if(0===this.lineInfos.length||e<1)return 0;var n=this.lineInfos[e-1];if(null==n){var r=this.lineInfos[this.lineInfos.length-1];return r.pos+r.length}return n.pos+Math.min(n.length,t-1)}}]),e}(),h=n(37),g=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,[{key:"getUrlCode",value:function(){if(document.location.hash&&document.location.hash.startsWith("#code"))try{var e=document.location.hash.replace("#code/","").trim();return Object(h.decompressFromEncodedURIComponent)(e)||""}catch(t){console.error(t)}return""}},{key:"updateUrl",value:function(e){function t(e){window.history.replaceState(void 0,"","#".concat(e))}0===e.length?t(""):t("code/".concat(Object(h.compressToEncodedURIComponent)(e)))}}]),e}()},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(20),a=n(12),i=n(2);function o(e,t){switch(e){case a.b.getChildrenWithComments:return function(e){return r.CommentNodeParser.getOrParseTokens(e,t)};default:return Object(i.e)(e,"Unhandled mode: ".concat(e))}}},25:function(e,t,n){"use strict";function r(e,t){var n=e.jsDoc;return n&&n.length>0?n[0].getStart(t):e.getStart(t)}n.d(t,"a",(function(){return r}))},43:function(e,t){},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(9);function a(e,t,n){if(null==e||e===t)return n;var a=t.ScriptTarget[e.ScriptTarget[n.scriptTarget]],i=t.ScriptKind[e.ScriptKind[n.scriptKind]];return Object(r.a)({},n,{scriptTarget:null==a?t.ScriptTarget.Latest:a,scriptKind:null==i?t.ScriptKind.TSX:i})}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(60),a=n(27),i=n(9),o=n(2);function c(e,t,n,c){var u,l="/ts-ast-viewer".concat(function(e,t){switch(t){case e.ScriptKind.TS:return".ts";case e.ScriptKind.TSX:return".tsx";case e.ScriptKind.JS:return".js";case e.ScriptKind.JSX:return".jsx";case e.ScriptKind.JSON:return".json";case e.ScriptKind.External:case e.ScriptKind.Deferred:case e.ScriptKind.Unknown:return"";default:return Object(o.e)(t,"Not implemented ScriptKind: ".concat(e.ScriptKind[t]))}}(e,c)),s=e.createSourceFile(l,t,n,!1,c);return{sourceFile:s,bindingTools:function(){null==u&&(u=function(){var t={strict:!0,target:n,allowJs:!0,module:e.ModuleKind.ES2015},o=Object(i.a)(Object(a.a)({},l,s),e.tsAstViewer.cachedSourceFiles),c={getSourceFile:function(e,t,n){return o[e]},getDefaultLibFileName:function(t){return"/"+e.getDefaultLibFileName(t)},writeFile:function(){},getCurrentDirectory:function(){return"/"},getDirectories:function(e){return[]},fileExists:function(e){return null!=o[e]},readFile:function(e){return null!=o[e]?o[e].getFullText():void 0},getCanonicalFileName:function(e){return e},useCaseSensitiveFileNames:function(){return!0},getNewLine:function(){return"\n"},getEnvironmentVariable:function(){return""}},u=e.createProgram(Object(r.a)(Object.keys(o)),t,c);return{typeChecker:u.getTypeChecker(),program:u}}());return u}}}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(7),a=n.n(r),i=n(13),o=n(14),c=n(18),u={},l={};function s(e){return null==u[e]&&(u[e]=function(e){return p.apply(this,arguments)}(e),u[e].catch((function(){return delete u[e]}))),u[e]}function d(e){return!0===l[e]}function p(){return(p=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,s,d,p,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=function(){return Object.keys(u).map((function(e){return u[e]})).map((function(e){return o.createSourceFile(e.fileName,e.text,o.ScriptTarget.Latest,!1,o.ScriptKind.TS)}))},n=Object(c.d)(t),r=Object(c.c)(t),e.next=5,r;case 5:return(o=e.sent).tsAstViewer={packageName:t,cachedSourceFiles:{}},e.next=9,n;case 9:u=e.sent,s=Object(i.a)(m());try{for(s.s();!(d=s.n()).done;)p=d.value,o.tsAstViewer.cachedSourceFiles[p.fileName]=p}catch(a){s.e(a)}finally{s.f()}return l[t]=!0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(13),a=n(24),i=n(25);function o(e,t,n,o){var c=Object(a.a)(e,t),u=o.SyntaxKind,l={node:t,start:t.getStart(t)};return function e(a){var o,s=c(a),d=Object(r.a)(s);try{for(d.s();!(o=d.n()).done;){var p=o.value,m=p.kind===u.SyntaxList;if(m||!(p.end<n[0])){var f=Object(i.a)(p,t);if(!m&&((v=f)>=n[0]&&v>n[1]))return;var h=p.kind===u.EndOfFileToken,g=l.start===f&&n[0]===f;m||h||g||(l={node:p,start:f}),e(p)}}}catch(b){d.e(b)}finally{d.f()}var v}(t),l.node}},61:function(e,t,n){e.exports=n(138)},8:function(e,t,n){"use strict";var r=n(43);n.o(r,"compilerVersionCollection")&&n.d(t,"compilerVersionCollection",(function(){return r.compilerVersionCollection})),n.o(r,"convertOptions")&&n.d(t,"convertOptions",(function(){return r.convertOptions})),n.o(r,"createSourceFile")&&n.d(t,"createSourceFile",(function(){return r.createSourceFile})),n.o(r,"getChildrenFunction")&&n.d(t,"getChildrenFunction",(function(){return r.getChildrenFunction})),n.o(r,"getCompilerApi")&&n.d(t,"getCompilerApi",(function(){return r.getCompilerApi})),n.o(r,"getDescendantAtRange")&&n.d(t,"getDescendantAtRange",(function(){return r.getDescendantAtRange})),n.o(r,"getPublicApiInfo")&&n.d(t,"getPublicApiInfo",(function(){return r.getPublicApiInfo})),n.o(r,"getStartSafe")&&n.d(t,"getStartSafe",(function(){return r.getStartSafe})),n.o(r,"hasLoadedCompilerApi")&&n.d(t,"hasLoadedCompilerApi",(function(){return r.hasLoadedCompilerApi}));var a=n(18);n.d(t,"compilerVersionCollection",(function(){return a.a})),n.d(t,"getPublicApiInfo",(function(){return a.b}));var i=n(51);n.d(t,"convertOptions",(function(){return i.a}));var o=n(52);n.d(t,"createSourceFile",(function(){return o.a}));var c=n(24);n.d(t,"getChildrenFunction",(function(){return c.a}));var u=n(53);n.d(t,"getCompilerApi",(function(){return u.a})),n.d(t,"hasLoadedCompilerApi",(function(){return u.b}));var l=n(54);n.d(t,"getDescendantAtRange",(function(){return l.a}));var s=n(25);n.d(t,"getStartSafe",(function(){return s.a}))},83:function(e,t){},84:function(e,t){},85:function(e,t){},86:function(e,t){},87:function(e,t){},88:function(e,t){},89:function(e,t){},90:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=90},91:function(e,t){},98:function(e,t){}},[[61,3,4]]]);