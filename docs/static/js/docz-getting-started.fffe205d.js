(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docz/GettingStarted.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),b=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),l={},c="wrapper";function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"with-breakpoints"},"with-breakpoints"),Object(r.b)("p",null,"A react component that used for use css mediaquery as you know easily and flexible."),Object(r.b)("p",null,"This component is created using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia"}),Object(r.b)("em",{parentName:"a"},"window.matchMedia"))," that can show the information at a resolution that matches a particular media query.\nAlso, you can receive props the matches status of the mediaquery set by HOC component."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"Install with npm:  "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"npm install with-breakpoints\n")),Object(r.b)("p",null,"Install with yarn:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-console"}),"yarn add with-breakpoints\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"You can use like other react component or HOC."),Object(r.b)("h3",{id:"using-a-react-component"},"Using a react component"),Object(r.b)("p",null,"Basic usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import Breakpoint from 'with-breakpoints'\n\nconst Component = (props) => (\n  <Breakpoint mq='screen and (max-width: 767px)'>\n    Hello world!\n  </Breakpoint>\n)\n")),Object(r.b)("p",null,"Render child with function"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import Breakpoint from 'with-breakpoints'\n\nconst Component = (props) => (\n  <Breakpoint mq='screen and (max-width: 767px)'>\n    {(matches) => {\n      return matches ? 'Hello world!' : 'Not matches'\n    }}\n  </Breakpoint>\n)\n")),Object(r.b)("p",null,"Server side rendering"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import Breakpoint from 'with-breakpoints'\n\nconst Component = (props) => (\n  <Breakpoint\n    mq='screen and (max-width: 767px)'\n    defaultMatches={true}\n  >\n    Hello world!\n  </Breakpoint>\n)\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Notice: defaultMatches only can used at node. Browser will be ignored.")),Object(r.b)("h3",{id:"using-a-hoc"},"Using a HOC"),Object(r.b)("p",null,"Basic usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { withBreakpoints } from 'with-breakpoints'\n\nconst Component = ({ pc, mobile }) => (\n  pc ? 'Hello pc!' : mobile ? 'Hello mobile!' : null\n)\n\nconst mqs = [\n  { name: 'pc', mq: 'screen and (min-width: 768px)' },\n  { name: 'mobile', mq: 'screen and (max-width: 767px)' }\n]\n\nexport default withBreakpoints(mqs)(Component)\n")),Object(r.b)("p",null,"Server side rendering"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { withBreakpoints } from 'with-breakpoints'\n\nconst Component = ({ pc, mobile }) => (\n  pc ? 'Hello pc!' : mobile ? 'Hello mobile!' : null\n)\n\nconst mqs = [\n  { name: 'pc', mq: 'screen and (min-width: 768px)', defaultMatches: true },\n  { name: 'mobile', mq: 'screen and (max-width: 767px)', defaultMatches: false }\n]\n\nexport default withBreakpoints(mqs)(Component)\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Notice: defaultMatches only can used at node. Browser will be ignored.")),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("p",null,"Below components's ",Object(r.b)("inlineCode",{parentName:"p"},"mq")," props is used be ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/akiran/json2mq"}),"json2mq"),". Therefore, you can pass the mqs as an object or array."),Object(r.b)("h3",{id:"breakpoint"},"Breakpoint"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Props"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mq"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string,object,array")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"all")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CSS mediaqueries")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultMatches"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default match for server side rendering (Browser will be ignored)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"func")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange event (This function will get 'matches' argument)")))),Object(r.b)("h3",{id:"withbreakpoints"},"withBreakpoints"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Props"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of props")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mq"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string,object,array")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"all")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CSS mediaqueries")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultMatches"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bool")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default match for server side rendering (Browser will be ignored)")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This component is HOC. Therefore, you can pass the props via function argument like a react-redux's ",Object(r.b)("inlineCode",{parentName:"p"},"connect"),".",Object(r.b)("br",{parentName:"p"}),"\n","The argument that ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#using-a-hoc"}),"mqs")," must be an array and its elements must be an object.")),Object(r.b)("h2",{id:"license"},"License"),Object(r.b)("p",null,"MIT ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/socker210/with-breakpoints/blob/develop/LICENSE.md"}),"\xa9"," socker210")))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docz/GettingStarted.mdx"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=docz-getting-started.4f33f050ff3903523378.js.map