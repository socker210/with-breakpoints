(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docz/Examples.mdx":function(A,e,o){"use strict";o.r(e);var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=o("./node_modules/react/index.js"),s=o.n(i),a=o("./node_modules/@mdx-js/react/dist/index.es.js"),g=o("./node_modules/docz/dist/index.esm.js"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),B=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),m=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),h=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),d=o("./node_modules/json2mq/index.js"),Q=o.n(d),p=function(){function A(e){Object(c.a)(this,A),this.mm="undefined"===typeof window||"undefined"===typeof window.matchMedia?void 0:window.matchMedia(e)}return Object(r.a)(A,[{key:"addListener",value:function(A){this.mm&&(this.func=A,this.mm.addListener(A))}},{key:"removeListener",value:function(){this.mm&&this.func&&this.mm.removeListener(this.func)}},{key:"getMatches",value:function(){var A=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.mm&&"undefined"!==typeof this.mm.matches?this.mm.matches:A}},{key:"getMediaQueryList",value:function(){return this.mm}}]),A}();function w(A){return new p(A)}w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"matchMedia",filename:"src/matchMedia.js"}});var C=function(A){function e(A){var o;return Object(c.a)(this,e),(o=Object(B.a)(this,Object(m.a)(e).call(this,A))).state={mm:void 0,matches:void 0},o.updateMatches=o.updateMatches.bind(Object(l.a)(o)),o}return Object(h.a)(e,A),Object(r.a)(e,[{key:"componentWillMount",value:function(){var A=this.props,e=A.mq,o=A.defaultMatches,t=w("string"===typeof e?e:Q()(e));t.addListener(this.updateMatches),this.setState({mm:t.getMediaQueryList(),matches:t.getMatches(o)})}},{key:"componentWillUnmount",value:function(){this._unmount=!0,this.state.mm.removeListener(this.updateMatches)}},{key:"updateMatches",value:function(A){var e=this,o=A.matches;this._unmount||this.setState({matches:o},function(){"function"===typeof e.props.onChange&&e.props.onChange(o)})}},{key:"render",value:function(){var A=this.state.matches,e=this.props.children;return"function"===typeof e?e(A):A&&e||null}}]),e}(s.a.Component);C.defaultProps={mq:"all",defaultMatches:!0};var E=C;"undefined"!==typeof C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Breakpoint",filename:"src/Breakpoint.jsx"}});var u=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),M=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),I=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),D=o("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),j=o.n(D),y=["name"];var Y=function(A){return function(e){if(!Array.isArray(A))throw new Error("Invalid type of 'mqs': must be an array");A.map(function(A){var e=function(A){if("object"!==typeof A)throw new Error("Invalid type of 'mqs''s element: must be an object");var e=Object.keys(A),o=y.filter(function(A){return-1===e.indexOf(A)});return[!o.length,o]}(A),o=Object(u.a)(e,2),t=o[0],n=o[1];if(!t)throw new Error("Cannot read property '".concat(n.join(", "),"'"))});var o=function(A,e){return function(o){function t(A){var o;Object(c.a)(this,t),o=Object(B.a)(this,Object(m.a)(t).call(this,A));var n={};return e.map(function(A){var e=A.name,t=w(A.mq?"string"===typeof A.mq?A.mq:Q()(A.mq):"all"),i=t.getMatches(A.defaultMatches),s=function(A){var t=A.matches;return o.setState(Object(I.a)({},e,Object.assign(o.state[e],{matches:t})))};t.addListener(s),n[e]={matches:i},n[e].removeListener=function(){return t.removeListener(s)}}),o.state=n,o}return Object(h.a)(t,o),Object(r.a)(t,[{key:"componentWillUnmount",value:function(){var A=this;this._unmount=!0,Object.keys(this.state).map(function(e){return A.state[e].removeListener()})}},{key:"getProps",value:function(){var A=this,e=Object.keys(this.state).reduce(function(e,o){return e[o]=A.state[o].matches,e},{});return Object(M.a)({},this.props,e)}},{key:"render",value:function(){var e=this.getProps();return s.a.isValidElement(A)?A:s.a.createElement(A,e)}}]),t}(s.a.Component)}(e,A);return j()(o,e),o}},S=E;"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Breakpoint",filename:"src/index.js"}}),"undefined"!==typeof Y&&Y&&Y===Object(Y)&&Object.isExtensible(Y)&&Object.defineProperty(Y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"withBreakpoints",filename:"src/index.js"}}),o.d(e,"default",function(){return k});O="HOC";var O,U={},G="wrapper";function k(A){var e=A.components,o=Object(n.a)(A,["components"]);return Object(a.b)(G,Object(t.a)({},U,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"examples"},"Examples"),Object(a.b)("h2",{id:"breakpoint"},"Breakpoint"),Object(a.b)("h3",{id:"basic-usage"},"Basic usage"),Object(a.b)(g.c,{__position:0,__code:'<>\n  <Breakpoint>\n    <div>Default mediaquery is all</div>\n  </Breakpoint>\n  <Breakpoint mq="screen and (max-width: 767px)">\n    <div>Screen width less than 767px</div>\n  </Breakpoint>\n  <Breakpoint mq="screen and (min-width: 768px)">\n    <div>Screen width more than 768px</div>\n  </Breakpoint>\n</>',__scope:{props:this?this.props:o,Playground:g.c,Breakpoint:S,withBreakpoints:Y},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1NbZBTQAglig_M8EI8ViMoUi7DQo1ZXaD04AEchcIg9hA0ldDmNNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGc1IAFh09gADYdL09YwGAgAxb1oESNT-GcQ4EQdTAYKEfgliIahKDgQyEVs6t7JoZwICwy52AARlM_T5CEkSpgAQTmWT2AjKDyBsKB0DDVCOVksQcujGR2BRaSYG4YBsMk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGF1WOGAwDCKApnWsqKr2zLl2rBMeIIHAHMyFIrwINqa1rH7ftrajXFo0j_oB2sDq1c7LubbIIFcABHBkBGSWwQgSfbYxXX6pCBkGaDBmtGDxkjMyIBG-BAOByC6YJKhyqIsHNHF0AmK4AHZLPZnSuRAQmcYO5waaCcwWYLLE7Amdx2E57msEx2RsaJyQSbogmlYTVXSPYcnKep2nzHpiMiDQZmuDZmXLIADh58QNaJwXheCMW8UCrp8WlzmbflndFaegHcaI0nvqVqR_qkF63o-r62qkB7DrML8qfYyRVGwf8tAoYD9AYPDTq1zMmPdFWg7Vl9bVOyiC4IOwi5YyQq9L-j2iEk77UwC7Qiu9hq-OrB8Pk9ZG5o4O4DMeQk7Y8gS5HsuM6wQDdBAgwwLz-0Xr4k1NRb1A16maCB0sQb4E39p-0oGZzSk-Y4B3vf2E0agACZydPx_UBfhG764qICHyvU4auFPh6X-_9AE7zMOQOCcA7DV2hFgEC6A7CRzXNQF0ClqxpTRJKIUOVz53FKhg369JYQRnwXAI6_sJi2BwCiLI2UiEAyIEQK4yEO5oGyPpcGoDNj3FyOGSAzp0Arl2iuahcAcChBmOgLIepoj5RPnJcRkjpGyPkbwnAHhVARnEW-CwojMGOjQTQAA6tAKAeo2iZhuowiwaV5I6wRksDuMM5F_14ahbKyjyErnscw7KPCAEsFcDo4-w1HGyUmu0FE04UgLWWq_K479P7GwRhyShv1mE4CMgAGVsCBSMyipEyNoG4hRFChK_WUXAUckksi5SVswq4WTTxBPhgARWRokPJKJ1pcKYeo-AzSiAnlHGU3hEYXFdwIOM-AeiazyHmQYuxRiMwEDMQkAAqqgQKyFrqELEQSHAAB9ZCuzMxKLRIyf0VCjl0NoDgLJXRAqsBgD0gpAgdFHOKWo9xcz1jLNyKo0pgy7C5R1qCkqg9_YQGaF8mhpydlWIIKVLoBA-g3MOTQmpBA6m0HBTwk-SgcqlW4OVWxNZYU5WvjAcJ3iBwSOoPYPwM5ugTTku0aawluzzVKvSi-jLUDMvcGkY2oL5n6KWZUicdApwkuhb9exUFCUMS8XcggWRfHUFEnlAq21PFKKOT4m5v0qWhKGiNPV40olctmtQV8Mr0UCHMFtNaKqMk1jRRiiFfy7DLVdcEAAPoG9gqAu5QHYFcMNCQAXjyEtXHAUyroHwFQwxSCM1LxCgOFCwSaZmgquKiBkcabkJvwUfG-abqzkyuCmmYFb4A4DQTqMADaIwAG0Vx1obRImJBR-kWG7cfRlHh1BbDIl2w-w7skCEyIkdYABdDk_SmUsrSLWqdN8cC2v6Xm2ZfCh1bq8JQKAJa-4DzzT3Ju9AlDJ2nsPYGo8M6L2zqBcCA8N51wEuXXeXFhj5IAHLUBeni2Itc3TtH_Sic0qBqDmm_eae5YHv4D2Sa_OuaGv4V3tIEwBwDJC4eCRA4S2qphdCRhALo6AADSMBEh2Dku29oqBvQwHaAuoStqeXsFYPELgsiEYMzSQqzgcKaXhNfgAQiiZQUd46HUTCEGMZ0YwzyzqFI-BoqBeNQC4ANeYexmi8F4O0cmY8TPGeidCS8-hml5CmIEEI5hZNjsVB6-x59WBcGyLR-j2UdRyclDgbYdG4CpPmfY2DqAU1ecwDR0L2VyOhEoz50L27oC0E-SF5IZK-xCFi6l-jOA05YBbRGbLpLJrmnih6r1zr2Cdv9pJqLMXvPxaK7AGcEwB2huoK1uLvmx7Vg4ztTjM1uPCyyAACR1PYHKJjMhzGyKgtZAUEYUJE1A_wdgZtzewIg5BmocArfQVq1AMTQg4KOGQhlBz_YWBIZGchHrFWkeqhq2gDDAWZPW482YqTboUte-dqYLGjwBIRjgMH1zwYrJB-wJGGQcuOMeYJ5a5raXNHJqjyJHK-0zniSjxJD84DP3Jqk1H6TI1yizTvWHhZ4f-LkoR-GEZEcowlQDexaAXjwwsZC5nIzWmgop3u8V9t7G6ZROkI4ckCWQsWbdaptSPswHBe26HC6rgBdc69bbEAUioHhb21XGvWMLvIj68pULFnSu4SM3J-SZcRilx8l7AN7kwDN0eBdDCre8KuDzmI8R92oXtp773MAF2hhgC8t5TvnSy_lblp5sfKCvPec713MvOeSrtzWapqvsqe5Efnz465THmO2ec_ZImqlHMRTXrxVz88WB1-O4LoXje0NV7nmsf2ZgA9y4XrI7bybR-een-P0vE_rU599kcBA61gru-Dexnv_OBdetlsLI_aB94sDH9Al21cRiXq4DhAgljQ9JeS-2cONWX8j77w12LTea7-761vAM6suuAhfxPe2YlYAW3E1H_Ucb1IHfvHAHAflO4HrX6GAnvTVe7MPf2BfScDIeVKAjzBlNVGhU8Zfdab_X_biI7WwAANT43QAvFj30AjAW1mHmHQBOxoFKmWkYKWxYNWRdCuEYE4OYNYMgiQPITQk3FL2rEBVIN2zPWdH7lOkvTM1ugEOWx4IuTv2rDNUk3SlnXgmKzgB0LnVSQoT5TwCU1DRgFU3U0-XaC0x0z0xpUM3YEszM0szs1Ekc2llcF0MSFfGlTMwHyHw0OB1EnbVsGcEuwRBgWvz63yza0Gxfx42oIE3C3zy0PCMiPgA20U1GAsKsKEE-WKHsHcFgzI3FByHwQyCkjlAABJgAWs4iBs0t1A1ZHwlhXx5B2higll3M3szxUAWUvI5JJtaBdsGDFtBC1CyJHEKkwCoMCAgNUAQMPswMIx-jBiYAlgVDuD0x9BasID6t1j3AERx5J4U4WdXBn1tAl4c4wItsYF2Bxk2kgFGEsFLsIhrtyZV8C8jkmd9NMc8xVBcj2U5Q2FzoOF0AFpg1_jwkcQMBRhP8wFglcdQSBEITCcwTBFcwrg4STgRhES8BnjUjJDpVHcZ8sCIxbVviLAtDlFmFUUDjMVbkaFbVspbUsUJEskySPlKSZopUwDJ8M8E8KTqTRMcpJNu9_E-p8QWS-SGSnUmT68aFU849M9Z9lEqTY0wDhdfUcoxddTLkGRRTSDJM6TZRoTxNmgzSCTFEolMT0SlozpO4rpQ9C1fiRkVUtT1hWlAFOkkd3lsCVxSCzStSDE24phL0uM5p_dnihNvjSCVNHj1EiSvjTjb1QpthXA0gM5qAX09A31GF-Bod-Arh-AfhixqgMhzQfwyRGQQB-l-BXkBB8hqASznCQB1IcBOz1J_J1h-BygaYIAZgeU2z-B0pqo8JYB4FvRayzoyRKBEhcw8gCgZUzRzRyy_hSxezqx-Aog0BRyVBwwNAx56y-yQBMB5hwxhIIB4A2yKV-zxIDyAA9eKHAJ-Ls7c36fgb9Z8-KSyHAK2HASyT8msfgTDZ8zs98ns08_2fgeYmDODBDJDM4Z8pMHANC6Cnrb8zUS0SIX8_8wC4CkAUMyeTc3AXQSAFIHM1APM5eBgBSEAWgH0TVJAMs00WgeDHCpg_gCeeQPioAA",mdxType:"Playground"},Object(a.b)(s.a.Fragment,null,Object(a.b)(S,{mdxType:"Breakpoint"},Object(a.b)("div",null,"Default mediaquery is all")),Object(a.b)(S,{mq:"screen and (max-width: 767px)",mdxType:"Breakpoint"},Object(a.b)("div",null,"Screen width less than 767px")),Object(a.b)(S,{mq:"screen and (min-width: 768px)",mdxType:"Breakpoint"},Object(a.b)("div",null,"Screen width more than 768px")))),Object(a.b)("h3",{id:"render-child-with-function"},"Render child with function"),Object(a.b)(g.c,{__position:1,__code:"<>\n  <Breakpoint mq=\"screen and (max-width: 767px)\">\n    {matches => {\n      return matches ? 'Matches' : 'Not matches'\n    }}\n  </Breakpoint>\n</>",__scope:{props:this?this.props:o,Playground:g.c,Breakpoint:S,withBreakpoints:Y},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1NbZBTQAglig_M8EI8ViMoUi7DQo1ZXaD04AEchcIg9hA0ldDmNNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGc1IAFh09gADYdL09YwGAgAxb1oESNT-GcQ4EQdTAYKEfgliIahKDgQyEVs6t7JoZwICwy52AARlM_T5CEkSpgAQTmWT2AjKDyBsKB0DDVCOVksQcujGR2BRaSYG4YBsMk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGF1WOGAwDCKApnWsqKr2zLl2rBMeIIHAHMyFIrwINqa1rH7ftrajXFo0j2CIABHPgQDgcgumCSocqiLBzRxdAJiuAB2SyMZ0rkQH-gH5KiAh8vgW6FKewmay6Ag-nMYnSbsZb2j1aJGYWtSADkRDBtnNjgdoV0J-Rdqp2tJCBkGaAJ8X_qkF63o-r62qkB7DrML9ofYyRVGwf8tAoYD9AYPDTslkjMyY90JaIi2X1tU7KPNuiaDsK2WMkJ3bZdggBaEk77UwC7Qiu9hndI46sHw-T1i9mi7bgMx5E1tjyBt-Off1rBAN0ECDDA037ReviTU1QXUELqZoIHSxBrJ93-0oGZzSk-Y_YrrjNGoAAmCGS_aLvUF78Hy8r3mSbwPVsggVx-49BnJ-n1xy7Mcg4LgOxw8zbAQPQOwFbXagXQpiw0rRSUhRyxu7lKk-a3pWEI2vuAjspiZbBwFEsmyu_fqIIgrjISDmgbI-lCYL3gIA8MkBnToBXLtFc784A4FCDMdAWRWYTzJnJJBKC0EYL5vAHAHhVARiQW-CwCDqyfHXDQAA6tAKAeo2iZhur_QsqBRJQQhksIOl0CCYMZqhbKuDn4rjSmDWUckF5TxYK4Mhddhpg3BrJSa7QUTThSAtZafcriD2HhGCGHJX5_yIDgIyAAZWwIFIy4NQeg2ggj-YmJrLguAo5JJZFykLSRVx_4nlHLImeABFBkAhEhWJROtMBAMIH3EkQEgRhC4ARj4SHJJWCX7wIoahISp9HRH3oYwgAqqgQKyFrq30QQSHAAB9ZC5TMw4LRIyf0b8alf1oDgfxXRAqsBgJEmxAgyE1PsQQzJOSqEWDGY45JOVuFzPkFUymEBmgjI_vUspLCCClRpnTPJriOkeIIF4hZmTUJLButwcq7CLCrJyq3GASjREDmQdQewfgZzdAmnJdo01hLdnmqVF5Tc3moA-e4NIhjkk5MoZMg5k4Mg5WWb9CRZyhFoRwR0k5tBxHUC4StMawRMX4g_mItpv17kKKGiNAq21VG_P-bNagr4JyjjpoS7a0KJkHIsHsgQ9M5nLS2sVAAPqK9gqAQ5QHYFcKVCR1i7SoVvV6aSrrV1BT_RS4M1LxCgOFCwaqMmMyuKiBkSchIqpwNfWubctXVghlcDVMxbVEKPjqMArqIwAG0VzOtdcgjRBQYkWH9XXN5Hh1BbDIn6mu4bzECEyIkdYABdDkMT3mfLSE6uNbccBMpiUapxkDfJNwDcQ4QUALVtIDlMI1YdvakRTtrOOwME76xzkbUC4Fo7F3dgJe2Hdo7DGsdzVAL1PExDOP3EdKJzSoGoOaAd5pOmxHbmPfRfd3abpHg7e0Mil5z0kAeuRK9hL4qmF0cGoQIBdHQAAaRgIkOwclvXtFQN6GA7QU1CSZYC9grB4hcAwSowx4MUWcDWY8pRfcACEajKCRujayiYQgxjOjGGeRNQpHwNFQIBqAXABrzD2M0XgvB2gQ0ThR8j6joSXn0H4vIUxAghHMIhqNioXESMbqwLg2RH3PuyjqJDkocDbCfSkox6wJELtQBqvjmAH2Seylem9d7BPIMgFdSMEnkjXL7EIRTAnJM4F1lgD1EY9OlR-ewc08UXH8vML6ymsG5MKf48p59OBYAzgmCGyV1APNKc06m6tZg_1zR6KaWgAAJHU9gcp0MyHMbIh8MxkWUS_GO1D152Hi4lnedA97cU1DgdLx88WcLNRfI4T9XkQd-g_SMz8XGoovdVHF3z5JTNieDZBUQZhgfJj4_J1XJWfuyhDHAH6jyjY4aJa9GR9PKO6So5a1KnnNGm33Wz6jUQFG0at3R7Ad1gbW8Y2Vco9XlzFhI_-U2-ZBPkUt8JsKAYSLQC8GeTC5nSLMaeYtUnwY4CLTC-bEjCMonSEcOSuVx4Yps-VNxxzTnsG9bNmAKargic469fw-QUioHWYGrrGPP0pvIgj_mJUSq8tiWYyx1iYcRih0MtrANOkwHJ0eFNP9qclq-zEeIQPcmUya2TzHKbQwwD6QM5nzpYfItuj02XlB-mDJZ2zmH724X04sG4rr2UufwPpzQwpBAGEJFKY0ypOXCa4M2bbkRLT9fsFx9G8TkmSefy67rms3TZjDYM4brI3qIbS96er-X0PFfrXe71iwp5nV2DYT4iRXPhOidenplJofaD-4sDL9AoQEQRgjLnVwICBBLEx0j-3YsOEnOrzzrHIjsVh6l4HzJbvfpOab1XxX82lA9Y53y9lAqG-ExwDPkFdwAu_Rn77rIPjRY1kT2y8MdXGs1h4689vH9k-vPWm7_vCtbAADUgPoAvLL_QEZkuzHmOgCrNBSrLUf6ll_BSMtXcYJ_5_V_SCJfZ-NCTcU3asXrfvArcLZ0KOU6etKjW6AAtLH_F0AzO-KlWDdKRNeCMzOAHApNMDF-YFPANDSVGATDbDYZdoPDAjIjR5UjdgWjKjWjJjUSVjdwEIXAxIV8A5KjQPIbXbG5KrUSb1WwZwUvBEDeWvILIzTzTTPnOSeghxGAPUcGMDDnLAiQqQ-AbLVDUYCgqgoQYZYoewdwBdS9cUHIa-DIKSOUAAEmAHc3kJC1M3UBdkfCWFfHkHaGKEmW4w6zPFQE-S8jklhnFDiwSwfxS0ALQJoACn6xcVnQIDHQnRxTXQjGCNCJgCWBQO_3TH0Ecwn3MGyPcARCTmbTThPRng7W0FzmNjAjXgJ3YCcWewbzPlLwiDqyMSn1JQGykWIy2zzFUEML2yAXOhAXQAWnFSGKURxAwFGG73ynaPGOgSmKOwmJgVzCuAWJOBGGWMXjkU0MVQOSZ1jyRQjCZR3ywNwX_l2RKPp1wSZWyiZWqQ_n8XOKGSuJmnhQpTZTl010V2V3YSwJ9wez6n6PzV-IeNpgFSeJqVV0BIV1sRqWuNOP-MBzmVSXOn4VF2aQZB3371gzuNlFmOg2aFJMOOwTUS2I2KWjOmDiulF1NURLMTiQxPWEByXlCWW0GRBJXH71JIxKoVrUZP4UNBmn_RqNnk0Ib37ww1aKeyXhOJ2k1lCm2FcDSH1moE7T0G7Tvn4Ex34CuH4B-GLGqAyHNB_DJEZBABiX4H6QEHyGoBNOYJAHUhwE9PUn8nWH4HKFhggBmEBTdP4HSmqjwlgGhCwG9FtLOjJEoESFzDyAKDZTNHNHNL-FLF9OrH4CiDQFDJUHDA0ETntL9JAEwHmHDGEggHgDdPYX9PEkLIAD14ocBu4vSczfp-AB0Wz4pLIcAAAOHASyLsmsfgHdFsz0jsn0ssymfgFI-dRdZdVdM4FspMHADc2cgLHszUS0SIPsgc4c0ckAEUlOLM3AXQSAFIHU1APUvOBgBSEAWgH0FfJAM0mLGAJdPcp_fgZOEWeQIAA",mdxType:"Playground"},Object(a.b)(s.a.Fragment,null,Object(a.b)(S,{mq:"screen and (max-width: 767px)",mdxType:"Breakpoint"},function(A){return A?"Matches":"Not matches"}))),Object(a.b)("h3",{id:"pass-mq-as-an-object"},"Pass mq as an object"),Object(a.b)(g.c,{__position:2,__code:"<>\n  <Breakpoint mq={{ orientation: 'landscape' }}>Hello landscape!</Breakpoint>\n  <Breakpoint mq={{ orientation: 'portrait' }}>Hello portrait!</Breakpoint>\n</>",__scope:{props:this?this.props:o,Playground:g.c,Breakpoint:S,withBreakpoints:Y},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1NbZBTQAglig_M8EI8ViMoUi7DQo1ZXaD04AEchcIg9hA0ldDmNNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGc1IAFh09gADYdL09YwGAgAxb1oESNT-GcQ4EQdTAYKEfgliIahKDgQyEVs6t7JoZwICwy52AARlM_T5CEkSpgAQTmWT2AjKDyBsKB0DDVCOVksQcujGR2BRaSYG4YBsMk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGF1WOGAwDCKApnWsqKr2zLl2rBMeIIHAHMyFIrwINqa1rH7ftrajXFo0j2CIABHeqoKFCB9GiOa1LgjA4DieYFvkVqVwB9gAAl5ygYckfQFHZhgABCLGaykIGQZof7fsYGmSMzCGob2OEaHh6g1PwqkX1QzGnux3H8eHXnXBeCmhYZyQmbounKakf6pBet6Pq-tqpAew6zC_EA2PISRVGwf8tAoYD9AYPDTrl0GmPdWWiOZl9bVOyjbZoOx7ZYyR3ad-WCDgdohJO-1MAu0IrvYD3RGdLB8Pk9Y_Zo524DMeQ9YNx2U4D02sEA3QQIMMDrftF6-JNTVg9QUupmggdLEG-AK_aftKBmc0pPmIPXftTRqAAJghlv-9QIfwer2uweifK9WyCBXBbj0ogIWf59cauzHIOC4DsGPoSwEDie4zUcDXagXQU6s0rRSUhRytu7lKq_fvpWEI0fuAjqFiZbBwFEsjZRfgDIgRArjIXDmgbI-lsYr3yvAcB4ZIDOnQCuXaK5f5wBwKEGY6Ash6hnpsOwclMHYNwfgwh8AcAeFUBGTBb4LDoOvo6C-NAADq0AoB6jaJmG6wCLBpXkmDcGSxw6XQIAQ1eRDULZVIZ_FcgjQHZTgXgOeLBXB0KbsNYRslJrtBRNOFIC1lrDyuKPceEYIYcm_r9UBOAjIABlbAgUjKQnBeDaCSPgV_ISv1SFwFHJJLIuVKagKuHY08aiF4AEUGQCESE4lE60YEgMofcMGRATyji8UQiMYjI4SLSQwms8hilMIESwjMBAOEJAAKqoECsha6z8MEEhwAAfWQo0zMJC0SMn9D_NpADaA4DsV0QKrAYCJJcQIOhbT3EUKkfAMpvjcjkM8WknKUEVHN1KYnIWEBmhzL_p0hpPCCClS6AQPoAzWl_wCQQIJtBcrTyWQxJYN1uDlX4TWQ5OUu4wG0XIgcWDqD2D8DOboE05LtGmsJbs81SrAvbqC1A4L3BpEsUUtBKyBkWEnBkHKLShaCO2ZstCJChkECyAo6gok8oFW2jIylf95F4t-UcgF2itrjT0XC2a1BXwTlHDclaY06BYreTYmsVzRU7LsMtHlwQAA-yr2CoEjlAdgVwNUJHWLtJhMccD5KuvXFFQDFLgzUvEKA4ULAmsKW8q4qIGTpyEkax-jdu4WurBDK4ZqZheqoRfHUYAg0RgANorgDUGrBBiCgpIsDGpuoKPDqC2GRaNDcU32IEJkRI6wAC6HIUlgohWkf12bu44H5Skh1OSEG-XbrG6hwgoBuoGaHKYDro7-1IpndivtcQxywQBbQhdLYly4uXb2AkXY1y4sMZxAA5agL0nmxC9m6doS6UTmlQNQc0c7zTDM3ZPLi5jh7e0vRPXuzZCFRMXt7ZeD716b2EnSqYXRwahAgF0dAABpGAiRiHsAje0VA3oYDtELUJflCL2CsHiFwfB4McpWP2RYP5mihrNGHmTPRlA00ZqFRMIQYxnRjDPHmoUj4GioCQ1ALgA15h7GaLwXg7QIZp04xx_R0JLz6HCXkKYgQQjmCI-mxU0rBFt1YFwbIQGQPZR1MRyUOBtjAbgJY8GxTBEHtQGa-TmBANaeyt-39_6lNYMgFdSMmnkhfL7EIYzimtM4GNlgUNEYHOlWhewc08VpWyoEOYKNQsyYGaMwp0zIGcCwBnBMRN6rqDRZM9ZotHazDwbmj0U0tAcY6nsDlNhmQ5jZHPlUgK4Mv6YZ6DvOwhXivYCPnYVWlXL60tQAY0Id8jgfxBcS7Gb9Iyf2lb9QRwyoXyXKSAmrozZg6duj8ibn71VQeUeDHAkGjyUwqd1qYP6MiOeEaMtDy0cOArw1t4e_n9GogKMY07pj2A3p02d6x2q5Q2ursLQsB2MnKNfeoiMR34nFOxoItALwF5cM2XJCJ2S0nvfrdi6WNZBFMZROkI4ckXnypKrdfxgTqXPKghGnbMBC1XFU1J16_h8gpFQMcuNpOYAU6g4W8irzvGE9Kas2BmTHHOJxxGLHMzxsAymxzo8hagE86IVcaHMR4gNoYnt6qbOZdU9DDACZUyRfOlx0S26Yy9eUEmdM0X4uccQ5KZLiw_i2fZSm2ggXhZ0z6BqVAep3Tml1b8W005fvZF9PdxYWnGaNNaZZ__NndvfoLZmEtpzTusgRohoW3X-urdG_Wnb2bFhTwBrsHwymk3ndyUj-phz2m0-0ATzWXX6BeswAjBGQuEsjdLEp3575Gv9vUqgQIbXcuWWs_T5TrP8rw8AxC-YTvw-NdKBmw74V1zQsB4BjgHfyK7jJcTzv136Pdq_UL8K8M_WhsA1kyC2RbTi8gvWrP-fJ8zQebgAANWQ-gC8ev9ARilazDzDoAdY0ClTLRAHlagGVIuhXCMBQEgFgGQQ744CfxoSbhu7Vizav5NZZZxwJw9rca3SIEVawE9L97VjYZkzpR5rwQf60H5o6ZfxIp4DkbqowBUY0azLtD0aMbMYApsbsB8bcZ8bCaiRibuAhB0GJCvirLcZJ4p6UGrYA4Rq2DOC9YIi7w96pYuYxbWZj6IY_6oY6aS7UHqGaHwC1ZkajAcFcFCCzLFD2DuAHpfrig5CPwZBSRygAAkwAUWeh6W7m6g8sj4Swr48g7QxQZSMma2Z4qAEKXkck5A-WMATWgBZWSB5BZEwiPi7Ku6BAq6qA66pOm6EY8RiRMASwpBMBnu4Bqyr-FR7gCI6cA6hsKij6psBcFsoEOgDW7AOSj6dWN8vWEQ_WGGPypCSiJCWizQOIGAthd2EC50UC6AC0qqLGV2eYqgowC2UiQxSxSCqxT2yxyCuYVw8xJwIwexa8IOVi-qqywu2ORuOU_K1-WGRyZMUxRAlyIqoW7upC_K2U_KdyWCdiTxMyEYbxDx7K4yFuBuzxhKZeBynxseSifU-If8bxvxG-tygyf8ZuOehuribS0J2BqykSmyeS504iauoeDI7x6-oqXxbSSiGxXKzQ3xNx0ihxkCKCT2qObyX2XJM-5J7KkS68sSx20yJuPyr-3xMJTCXaZ0EcUcOWzIHR686GumdWr-lGAxwOC8phrRSgIAoU2wrgaQps1A3RegvRwC_AlO_AVw_APwxY1QGQ5oP4ZIjIIAKS_AkyAg-Q1AzpwhIA6kOAEZ6k_k6w_A5QKREAMwCKoZ_A6U1UeEsAB83oPpZ0ZIlAiQuYeQBQwqZo5obpfwpYMZ1Y_AUQaAKZKg4YGgacfpsZIAmA8w4YwksMzZVwPycZ4k9ZAAevFDgAPJGVWb9PwHOkOfFJZDgAABw4CWQTk1j8A3pDkRljnRktlCz8AFH7qHrHqnpnBDlJg4BnnbnJZTmaiWiRAzlzmLnLkgCKmZwVm4C6CQApDWmoC2lFwMAKQgC0A-g0pICumpFHo3nAH8AZwYzyBAA",mdxType:"Playground"},Object(a.b)(s.a.Fragment,null,Object(a.b)(S,{mq:{orientation:"landscape"},mdxType:"Breakpoint"},"Hello landscape!"),Object(a.b)(S,{mq:{orientation:"portrait"},mdxType:"Breakpoint"},"Hello portrait!"))),Object(a.b)("h3",{id:"onchange-event"},"onChange event"),Object(a.b)(g.c,{__position:3,__code:"<>\n  <h3>Check out console!</h3>\n  <Breakpoint\n    mq={{ screen: true, minWidth: 768 }}\n    onChange={matches => console.log(`Matches is ${matches}`)}\n  >\n    {matches => (matches ? 'Matches will be true' : 'Matches will be false')}\n  </Breakpoint>\n</>",__scope:{props:this?this.props:o,Playground:g.c,Breakpoint:S,withBreakpoints:Y},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1NbZBTQAglig_M8EI8ViMoUi7DQo1ZXaD04AEchcIg9hA0ldDmNNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGc1IAFh09gADYdL09YwGAgAxb1oESNT-GcQ4EQdTAYKEfgliIahKDgQyEVs6t7JoZwICwy52AARlM_T5CEkSpgAQTmWT2AjKDyBsKB0DDVCOVksQcujGR2BRaSYG4YBsMk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGF1WOGAwDCKApnWsqKr2zLl2rBMeIIHAHMyFIrwINqa1rH7ftrSt7E2HY9nCQtUDgShYAAQgrFMV1-xhqNcWjSMRgGiAAR3qqC4HILo6CuVEGQCtAAHUuAmK4AHZLIADlQ3aAYB6hgfcNJ6qiAh8vgW6ROhv8oEoFII2KPVol5uxbHYAASYBual-Rig5ZmWfYf6WYVyXNjsbhNfVxXdaWuUJZ542cQSdhAnGNEYAWtSzalvNoCga3uguqA4HtjHfrVlmpBRtGaANqR_qkF63o-r62qkB7DrML8QDY8hJFUbB_y0ChgP0Bg8NOoOSMzJj3UkQu6JodpbVOyjy_ovjS9roii4IOAq_9Z0sHws6LtCK72Drmhjq706FOrJuaJbuAzHkJOU7L5uK9ezQsEA3QQIMMD8_tF6G_lM12-3qZoIHSxBr5kv2n7SgZnNKT5jb6v7U0agACZsb3l_UHfrHD64o29TZAgK4PeHoAFANcO3Mw5A4JwDsIPKY2AQLoDsJHNc1AXRjwsGlNEkohQ5WvncUqWCaz0lhBGQhcAjpPXxLYHAKIsjZRIb9IgRArjIUwJAZ0iwMZG3gOw8MXDsgrl2iuCYdDQgzHQFkJ2xs5LiLgDgSR0jaCyPgDgDwqgIwKLfBYUR1ZPjrhoJTBIeo2iZhuswiGokoLYyWJwy6BA1EMWygonAlCVxpXYKw7K4CWCuG0efYa3isayUmu0FE04UgLWWh_K4X8f4RmxhyahLCiA4CMgAGVsCBSMbjlEyJ1vAVJNY3HewIJJLIuVeFsO8ek08gD_EAEUGQCESNklE619Isz4fcOpJ5RzOIjA4vuTiilUJEbo1CQlsGOgwcY12ABVVAgVkLXWIWIgkOAAD6yFVmZnkXbGZpStkMNoDgVhoYYCBVYDADpuSBDaK2QU1R4ypn6IsC8mAzicq2PGSVeSK4IDNCeXQ3ZKzzEEFKl0AgfQO6bLoeUyptBcreP-UoHKpV9aApoRYYFOV74wGCW4yhOA2Z-BnN0Cacl2jTWEt2eapUSUDkUeSjmMAklvMmesD5E46BTkxTi36Xi_nmz5mheRpyCBZE8dQGxK0xrBAlbQxRHiO6_XxYEoaI0CrbTCTSuls1qCvj5bCgQ5gtprV6SUiwMK4VorFXYZalrggAB9XXsFQH3N2VwvUJB5TPISCCcAjKuifG-eshUhLUvEKA4ULChrGY64mRydpBsXqRdxp9z6RpIdjK44aZhnwfmS50OowDFo5QAbRXIWytijIkFG6TWOtOayUeHUFsMitbs0ltcAITIiR1gAF0OTNrZZSgtvb1GGubYm5xU6b71o0cIKAgaO4nXtImgeGb6BKGTuxSQE9UZT0zmvHOoFwLd13pfASL4n5TGGDkgActQF6yLYh2Evk-lE5pUDUHNHe80ZzP1_27gkj-l8IO_wfQ6_KjTgGgMkH44BUDhJyqmF0LGoQIBdHQAAaRgIkSNVb2ioG9PbYdQlDUMvYKweIXAZGhKSVjDZ1ZNWEuCR_GG4TKAdq7SaiYQgxjOjGGeAdQpHwNFQPRqAXABrzD2M0XgvB2jY2nqplTEToSXn0FcIgeQpg23cHsfjioSleOvqwLg2RCPEeyjqMzr1thEbgCxqZXj_2oHDdZzABHXPZSwzhvDdnFGQCupGFzyRsVWZs_54jOB05YHLRGKLWLJrmniiUu15r2A1poTDLzPm4uhZwLAGcExm0WCK0IXztnXMjvXWYGjc0eimloAACR1PYHK5NMhzGyOgjMZEQlUKjTA_wdgus9aQfy1BmocBDcwbKyGJM8FHAoSytjLMyGRkoTamsXizlUvkrylhWNFFRBmCx26VjhUYc9RR3xWMcDkaPL7axUxsMZGiyEi5oTlpaqJc0bG_39VykbTOGJf24nsGgyx_7KT2AxoSO3dWn26m-J1ghgJ322lTJZl4tALxgFQB-XJS5DTxkI_nVy3Fh2HtyZROkI4clUW9IBdispo5kUcqglWt7MBh1XEc52yUGS4EQBSKgUFDbpW0AFxR4d5E4PG3kKVdXxyenpKyTklnEYmcPIO79Y7iujzDqYar_hnBUAk_iD8_2ANTeC-HVcm5dy9fOlZ4K7Flyuju_ufrw3LOCc1k1-qgGZT5cneOyIrXhZ0z6BMVAZZ-z1lRt-m48FafXGpoxqLrtOAotuaj1kUPv0LmzBu1zqVWQq3Y1d_7ygtzA9e_WqHs7I4CCFrsJYjGR3o8Oac0X1zsv6HR_LzWK56BQgIgjBGderg0AZCWILrF5U7sA0X8vgQZuheuNrwrl3lfHXx5Zjli1wEl9e4-xi4A4eMYX4zwDHAr_mURqqy_1_sf6eO875ODIQVTfSzFlA_OhU8HvdaM_U1e1SOWwAANQY3QAvGuX0AjD61mHmHQCWxoFKmWgwIG2wLmWG2R1rAIKwJwMglfyzQjTQk3Dj2rF5Sf2mya07m7m3XU1unIMG2IJdGxRIU1RhnSgHXgkSzgGEMHRYyoSZTwGE09RgDEwk0eXaGk1k3k0JSU3YC03Uy0300M3dhCHMH7UHVfGOXU0r2uw_n4JW1EirVsGcFnwRDgVX2oGKz81CwtzkjUJUW-Sxnc3j0EPsMcPgDGyE1GHkMUKEEeWKHsHcH_Uw3FByEIQyCkjlHlhq2bxK1c3_ArkfCWFfHkHaBVh5QswezPFQApS8jkgJnFE6263QP6woN4JoACguxKR_QIFfVQHfXl0_QjHKMqJgCWG4KIMT1wOOSfwGPcARBnjnkPRQ1cDPW0HXlzjAgmzgXYFkRx3Gww1wQiA22SWfzcR8XkSCWaBxAwHCOpTlA4XOmX3QAWndQU2BxdkuJGBP3gwgXB3aFuKEQeJNl-PuNIIuJOHeIWP8MYOOV12Zy9xykNW2xrEEOOKIGhVHDhXjzcUNWykNQRUux107Fb0jHhIDQjybxb090AL7xoUELHx8T6hVRwHhNRLNXhRoWRLd2bw9xhLyS2WJMhIjyp0dRylpyFMOQZARNtTRNyxhmRPYCeM42aHZI52uJ-MEXuOhxFOdmJi2UuV6RJPWAaQgRaR-3uSAJXCf2RJJP0U3SmG3Ra2ZAWJykOJISf1E02OxwgQhNnn3VCm2FcDSEzmoHPT0EvRIX4EF34CuH4B-GLGqAyHNB_DJEZBAGbX4FuQEHyGoEjK0JAHUhwDzPUn8nWH4HKAJggBmAZWzP4HSmqjwlgGhCwG9CTLOjJEoESFzDyAKD5TNHNBjL-FLCLOrH4CiDQCrJUHDA0GnhTOLJAEwHmHDGEggHgGzKsRLPEjHIAD14ocBX58zBzfp-A71Nz4pLIcB6YcBLJ9yax-BoNNy8zdzCzpyaF-AOi_0AMgMQMzhNykwcAfzHzP9DzNRLRIhjzTzzzLyQArS55-zcBdBIAUhAzUBgyN4GAFIQBaAfQZUkBoz2sYBAMgLMD-BvT5B5AgA",mdxType:"Playground"},Object(a.b)(s.a.Fragment,null,Object(a.b)("h3",null,"Check out console!"),Object(a.b)(S,{mq:{screen:!0,minWidth:768},onChange:function(A){return console.log("Matches is ".concat(A))},mdxType:"Breakpoint"},function(A){return A?"Matches will be true":"Matches will be false"}))),Object(a.b)("h2",{id:"withbreakpoints"},"withBreakpoints"),Object(a.b)("h3",{id:"basic-usage-1"},"Basic usage"),Object(a.b)(g.c,{__position:4,__code:"() => {\n  const Component = ({ landscape, portrait }) => (\n    <>\n      <div>landscape: {landscape.toString()}</div>\n      <div>portrait: {portrait.toString()}</div>\n    </>\n  )\n  const mqs = [\n    { name: 'landscape', mq: '(orientation: landscape)' },\n    { name: 'portrait', mq: '(orientation: portrait)' },\n  ]\n  const HOC = withBreakpoints(mqs)(Component)\n  return <HOC />\n}",__scope:{props:this?this.props:o,Playground:g.c,Breakpoint:S,withBreakpoints:Y},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1NbZBTQAglig_M8EI8ViMoUi7DQo1ZXaD04AEchcIg9hA0ldDmNNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGc1IAFh09gADYdL09YwGAgAxb1oESNT-GcQ4EQdTAYKEfgliIahKDgQyEVs6t7JoZwICwy52AARlM_T5CEkSpgAQTmWT2AjKDyBsKB0DDVCOVksQcujGR2BRaSYG4YBsMk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGF1WOGAwDCKApnWsqKr2zLl2rCxgBu7hyoUp6azSh10xdOTcvYOCMDgOJ5lJdUqSmeRSreu6a3h2s2oRmsY1kIH0BB2Y4uAdHMfmHAIkk6cUnW-R9tjFdkdRsR8Mhq5gFp1wXgJygiYKUnydkSmUc3bm32R76iAARzsOSAG1uee9hUG9OL2lx0GYD09hhbUiMhQgfRojmq4FaxjkFqUSX5Ol2W1MZl5ldVuV1bhGhteoK4LYIA3UP05GAF1ue-gAJHV7GyyjqNcWj6IjYW4A5CM12ofR-YRroCD6cxGD9gPec--Rdu3B7DrML8QDY8hJFUbB_y0ChgP0Bg8NO4PQ8zJj3UkeuSJodpbVOoOiLbgg7CbljJG7mje7gDv_WdLB8LOi7Qiu9hW7omhjqn06PosYeQ9Hsx5ALouW57peCHLrBAN0ECDDA2v7R4qU3XlM1x-vqZoIHSxBvgPi5X7SgZnNKT5hj07vaTQ1AABMwsv7tFAagCBQsn5cSiAQfKepsgQFcFAj0SCUFoNcOPMw5A4JwDsIvUi0IsAgQxtxTUOAY4ZkgusNKaJJRChyj_O4pV141npLCCM7DI5CXhhMWwOAURZGylw-GRAiBXGQpgSAzpFjc2wZse4uRwwKOyCuXaK5hFwBwKEGY6Ash6miPlT-ck9EGKMSYsxqicAeFUBGPR8cdHVk-OuGgAB1aAUA9RtEzDdSRhZUCiSgsLJY8jLoEFMcg1RqFspWP4SuQWso5IqNQSwVwziP7DRVkLWSk12gomJgtZakCrgwLgeHIWHIjqfWkTgIyAAZWwIFIxWMMcY2gsTzECInkIgkojRySSyLlZRMiVZEBPKOTJ6CACKDIBCJFaSida7sEYqPgFcRpp5emqIjFEueMS7HwHjhYaG6w3EWA8bHbxviACqqBArIWupw3RQyAD6yEXmZksWiRkAyaxWLEbQHAjSuiBVYDAVZ7SBDOKGV02xcSzlXMEbkGxPTTl2ABlshi7zPoQGaAikR3znkBJdhOUcyd0UWBBSMggYzwnYrdjlGG71uZEpygAmAeSkkDn0dQewfgZzdAmnJdo01hLdnmqVflv9BWoGFe4NI4dsXnJKmioFk4Mhsvkik6gYSVYsrQpYoZoLAXw2-nlAq20ElmpEckoFFguU5KGiNW140ilStmtQV8VKk4CHMFtNaeL6nw0TsnY1KK7DLRDcEAAPgm6Wc8oDsCuKgVNWq3GkJoDgI5V1X4KokYpIWal4hQHChYAtJyY1XFRAyHeQlc3H3Ye_QBJbqzWyLTMdt8AcCxx1GAPtEYJafR7X2_RJSCgbIsBOj-gqPDqC2GRFc87AFNIEJkRI6wPYcg2UKkVaQrjrv7T6jZNb9nbN8r_SdDjhBQCbRPE69oa0L0PqRPe7Eh64hbfogC2hz7VyvlxW-UCBIvmAVMYYbSABy1Bb6jJiGcKBMGUTmlQNQc0EHzSgtiEA1Az92BVMgQPEj8CoPRpwVkzBkgMm4PwcJQ1UwuhC1CBALo6AADSMBEii3YGLdoMsjztC9hPH1Mr2CsHiFwExBSakEpdcSnleTIEAEIimUCXSu_1EwhBjGdGMM8W6hSPgaKgaTUAuADXmHsZovBeDtAjg5jujm7DzhgFeAgOy8hTECCEcwWnl2KnDSE0SP9WBcGyDxvj2UdTaclDgbYvG4AKcYcx6W1Ai2RcwNxlL2VWPsc4zF_RkArqRmS8kWGEWot5b4zgUuWAh0RkqzDSa5p4qhcjUGgTK41OYdQNl2rJWcCwBnBMWdmXBtCBy9FlLu6n1mAk3NHoppaBpxyl4zIcxsh0P0AFEWimehELsBt7AlC7C31oY6O5DDPpMNCCwo4fCBVHfhjwyM_DQtWoyxaiR1zNki3BbMGpt1gk_dCVMYTYr8k4Gh8bb6bGMhVdh5A5abreXNGFuCgp4q5TTpnGU1HBTKlwHAcLGpOO6nprlBW8eyMbkZekdlejWSIxI-WRqiHok0AvHQX4ll6Tpl7OxZTy96qEcZasyidIRx_rMpjSVW69KCBIZgADMW0OPZXHi8F4-_h8gpFQCSqdjLaCa9lh7ciVH4nQ01c6zZ0yWltNlxGaXcLvsIwtRbo8HsJE2-vbzmI8Qr0MWNt7rXoZPOUGhbC2X2VXrlQhdH2PLvnTwvd7Lrn9vuYgrNzDi12jaWFl-vchITzflvP1Z9OlXyfkUsSQC4vFhdcrqSylk3oj8_Z4sMDmYoPYZ56yGLYWHso9QphWnyMdSi8O9PD2nFb2vq_fz3FhLx9KupaH7QHv7Ao_oEe-riM58mbp6WND9l1eGfL_tmgDIPuYB-4dab4fke8XN4TtSnrJ-78CGNkoeSS5B3CwbrcwcHGsHASA-VO4SbeGSArvLIbmbOGsAHEAugKcPVcA76fhRJIZefAVdaD_UA6hM0BrOAAANRk3QAvE830AjC21mHmHQD2xoFKmWgYJ22YJu3oRp0YA4KYJYMgngP4TQgznhmQIB2ILTkW0nmnjfQjlun4N224L-g5WrFdTU3Si3XgjIK0O3RqUjjlTwH02lhgCMxM3hXaHM0s2sx5Ts3YBc2c0cx81En83cBCG0MSFfHRQjj7wHzUO5ymDFlsGcEewRGIXPyyxm2GxSyfykyoLkzSwdw0JCLCPgEjnxBMMM3YGMyEHhWKHsHcEwxY3FByHYQyCkjlAABJgABshtcsRt1Al5HwlhXx5B2hihXFQtvozxUARUvI5JyA1sYA056DtsBCVCaADt-l1g0MCB4NUBEMzd8MIxej-iYAlglCuDS8XZ0ViC1j3AEQd4v1i5Wd0Fy4z4q5QIdATt2B9k5kMEuEHsnscphYl8rFmdLFclmgcQMBRhCkJU5Fzo790AFok0bNMc8xVBRhgc4kHiAS5QgTNFQSlp1F5EQSadfiTgRhYTqN0EkiLl0VncZd08cofUl8NCPiiBSpQDi8rEfVsofUPkRFGliS4UIxyStV1hIUY9J8STdUgkVwNDO9mc-p8QRFySaSv8J5mT9Fk8J84909O9OTqwAcRdFdDlzpolQ9G8GQl9iC1MqT2BwSVNmgqTcT4k8d2gkSQSidxdFd60hlGl39VT0U9lcFFlkdYVMCVxiCqTs0hIX0pg31ltmQziMEFMr8A0o1sj7jcEkjd4lAQBQpthXA0hy5qBLi9BriuF-B4ckAHCgJyg_hSxzQfwyRGQQANl-BoUBB8hqB-Arh-B1IcAWz1J_J1h-ByghiIAZgZVGzCz0pqo8JYByFvQKyzoyRKBEhcw8gCgqUzRzQfhixqhQQqzOyQAog0ABz-BGty4OzqwuyYB5hwxhJNY4ABzgkuzxIdyQAAA9eKHAMBVsg8-GfgCDW8h8yyHAAADhwEslfJrH4HI0_JbOfPbPXM-n4DmIwywxwzwzOE_KTBwGQogsm3fM1EtEiE_Pim_L_IApAGzT3hLNwF0EgBSAzNQCzIvgYAUhAFoB9EQKQH4CGPFFoGw0wsYP4ETKziAA",mdxType:"Playground"},function(){var A=Y([{name:"landscape",mq:"(orientation: landscape)"},{name:"portrait",mq:"(orientation: portrait)"}])(function(A){var e=A.landscape,o=A.portrait;return Object(a.b)(s.a.Fragment,null,Object(a.b)("div",null,"landscape: ",e.toString()),Object(a.b)("div",null,"portrait: ",o.toString()))});return Object(a.b)(A,{mdxType:"HOC"})}),Object(a.b)("h3",{id:"pass-mq-as-an-object-1"},"Pass mq as an object"),Object(a.b)(g.c,{__position:5,__code:"() => {\n  const Component = ({ pc, mobile }) => (\n    <>\n      <div>pc: {pc.toString()}</div>\n      <div>mobile: {mobile.toString()}</div>\n    </>\n  )\n  const mqs = [\n    { name: 'pc', mq: { screen: true, minWidth: 768 } },\n    { name: 'mobile', mq: { screen: true, maxWidth: 767 } },\n  ]\n  const HOC = withBreakpoints(mqs)(Component)\n  return <HOC />\n}",__scope:{props:this?this.props:o,Playground:g.c,Breakpoint:S,withBreakpoints:Y},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZr1NbZBTQAglig_M8EI8ViMoUi7DQo1ZXaD04AEchcIg9hA0ldDmNNRUwVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGc1IAFh09gADYdL09YwGAgAxb1oESNT-GcQ4EQdTAYKEfgliIahKDgQyEVs6t7JoZwICwy52AARlM_T5CEkSpgAQTmWT2AjKDyBsKB0DDVCOVksQcujGR2BRaSYG4YBsMk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyUBlQdp2AAfg2LqwwjUqrlG7rUBS6spBkKs3zMGF1WOGAwDCKApnWsqKr2zLl2rCxgBu7hyoUp6azSh10xdOTcr7cgAsoDxoG6eRSreu6axh2s2thmsY1kGZyCuYAUZwCJJOnFJ1vkfbYxXBGkbEQLQdgNGybBzHKGxgo8YJ2QicRzdmbfBHvqIABHOw5IAbWZ572FQb04vaFG9PYbm0eq8gujoK5UQZAK0AAdS4CYrgAdksgAOVDUP0hGhZFo81Kp30Aq5mW4DloJVPGNEYAC1wsHV9BNfYHWtYNpRmYAXWZ76AAkdXsbLKOo1xaPoiNubgDkIzXah9HZ2GugIPpzEYUPw9Zz75F27cHsOswvxANjyEkVRsH_LQKGA_QGDw06o5jzMmPdSQ25Imh2ltU7I6I3uCDsTuWMkIeaJHuB-_9Z0sHws6LtCK72B7uiaGOxfTo-iwp-jmezHkcvK-74fN4IOusEA3QQIMMCW_tHipTdeUzTnp-pmggdLEG-A-Jyn7JQGY5opLzFngPe0mhqAACZuaAPaDA1A8Cuafy4lEAg-U9TZAgK4RBHpMHYNwa4OeZhyBwTgHYDepFoRYBAugOwL8cDJwzJBdYaU0SSiFDlYBdxSp7xrPSWEEY-EJyEjDCYtgcAoiyNlQRMMiBECuMhTAkBnSLGZkQzY9xcjhnUdkFcu0VxSLgDgUIMx0BZD1NEfKAC5KmPMZY6xtidE4FBhgCMpi07GOrJ8dcNB1YJD1G0TMN0FGFlQKJKC3MlhqMugQGxWCdEGwcQSHAYiVyc1lHJbROCWCuC8f_YaUsuayUmu0FEOMFrLQQVcZBqC45cw5EdT6SicBGQADK2BApGRxFirG0CSXY8R89JHpLgKOSSWRcpaOUVLIgJ5Rz5LwQARQZAIRI3SUTrSNrDbR8ArjtNPMMnREZ4mr0Sa4-AacLAQ3WL4iw_iU6BOgFAAAqqgQKyFroCJMekgA-shb5mYHFOwkTWRxsjaA4HaV0QKrAYDbN6QILx6SBkuOSTch5EKMVDOuXYAGByGJ_M-hAZoaLpFAq-aEggpUM5ZwhRYKFUyCAzJiQSw2OVIbvWZuSnK4CYAlMcWInA1B7B-BnN0Cacl2jTWEt2eapURUDjMeKyVaQ44EtuSVHFYyJx0CnNy-SWTqDRKlpytCaTpHQsZJ9b6eUCrbVSfiaRmT9UWH5UUoaI0nXjQqfK2a1BXwGszgIcwW01rEtaTDBl4aLVYrsMtSNwQAA-qbharygOwK4qAs16t8TQmgOALlXR_iA3mJrqzSzlPEKA4ULClquYmxW4KdpCSLVfPhf8IHyMUtbXyICe3wDFc6HUYBh0RgFp9ctMxh1mKqQUPZFhZ3zrFR4dQWwyIrlXf_MxrgBCZESOsf2HI9nqvcGkK4u6IE4EDXsptpzDmDrnXu9xwgoDHyEide0Tb14X1Iqfdik9cSdrMQBbQd8m6Py4i_RBAkXxQKmMMHpAA5agL9pkxDOIglDKJzSoGoOaBD5poWxEgagL-7AGkIPHjRtBSGE3EIKQQyQeSSFkOEmaqYXQuahAgF0dAABpGAiRK183aKbGA7RA7z0DYq9grB4hcGsWUpppLPUUsFSUhBABCCpINN2KmVXgIQYxnRjDPIeoUj4GioCU1ALgA15h7GaLwXg7R47uf7h5uw84YBXgIEcvIUxAghHMIZrdr4IXfWAawLg2QRNieyjqDdW6cDbFE3AdTHDuPC2oOW-LmBhNZeyrx_jgmktmMgFdSMmXkhQziwlkrYmcA1ywOOiM9XIaTXNPFGNoas7sGnTDXThHUCFea1VnAsAZwTGXflibQgiuJayyer9cmZoKbtlkXOOVVaZDmNkVh-grYJyrU8yhdg9vYAYUwzULDHQvPYfa7jXCIhHFEaqjTsNhGRjEQNmG31bXyMefsnmsLZhNNuhEoHeWpPZW5jgKTgtImiT4xkBrpTYVlOWt6oVzQkcIJlXKRdM4anY7qdRuAcDuZNJxy0nNtaEhz2Nmj5sOSmN4BWYUjHmydVw6iWOSjMR4hPsrcc5ZBL6ePu1aj76jmUTpCOP9DliaSq3RZQQLDMAAZ8yk_7K4qWjNX38PkFIqBKULrZbQfXot_bkS5wAiGuqPX7MWV0npyuIyK5RYD37NuYB26PP7eRTvdFoBeHgqA4vUKo9tcHmA_tQwBcoIi5FyvsqvXKnC1P6evfOlRb75XAvXfMyhYH7KtqjFMsLL9V5CRPkgt-Rd2GjjqXN-ykrO1zNjfpfq9livWRS8WEhzMaHUMh-2-5sn-FaekUF8jC0mvbvTyzsJT9wXokQdyT75KDLWWrcyMDyP9gKf0ChARBGCMd9XBoAyEsKTPLW9s9v_fgQifQ_Wut1kT_kPE214IxxoRrAR36F6o5KDyT3Ju4WDAEv6ww4CIEqoVoLYwyIHH5ZDMxFw1hg6wGGoZDGqw7s59iqpd7pJr6qrrSAGDbxrMK2AABqym6AF4AW-gEYB2sw8w6AJ2NApUy0HBR23BT2bCTOjAAhXBPBkE6BYiaE-cMM2BYOcBucG228S8f68ct04hx2whf0vK1YXqum6Uh68EbWcARhR6TSCcJmZmwsMAlm1mqK7QdmDmTmgqrm7A3mXmHmwWokYW7gIQxhiQ0W-q8cY-E-ehW-UwfMtgzgl-CIVCj-BWy2U2WWX-imTBqmOWbuBhMRcR8A52EwNhFm7AVmQgqKxQ9g7ghGPG4oOQfCGQUkcoAAJMAONpNsVtNuoJvI-EsK-PIO0MUD4gNt9GeKgJKl5HJDtrQLnOwYdhIToTQGdgNnhgQOhqgJhjbuRhGKMeMc7OwFoUIfXnShCnATse4AiMfEBlXOxgUnXLfI3KBDoFduwKcjzq3pwpfh9jlNzJvq6mYkol3sUs0DiBgKMOUrKqoudPfugAtOms5gTnmKoKMP_sxnguCXKJCQYjCUtHomotCUziCScCMCidziQlkXchCp7kroXjlIGr8QYY4kovSqOIym7o4oGtlIGv8tIu0lSSihGHSXqusHPvntSQQeEiuAYUfgCX1H8XejNIzsAbXoyYsiKQvmKaiuyQqUKdWCcpyucudAkrHmCgyL8XAbpiqewHCdps0CqSSfYhUpidCRTrLurorOku0sSjqRYCciQuspjsioQSuHASqQWt-jvL-oaZcoaFtnNFzm8epq3nAcUa8WST8ZcUoCAKFNsK4GkHXNQPcXoI8YIvwCjkgB4UBOUH8KWOaD-GSIyCAHsvwIigIPkNQPwFcPwOpDgN2epP5OsPwOUHLBADMIqh2RWelNVHhLAHQt6PWWdGSJQIkLmHkAUAamaOaD8MWNUKCI2QOSAFEGgOOfwO1nXP2dWIOTAPMOGMJBAPAOOREoOeJMeSAAAHrxQ4CwI9nnkwz8AIYvnvmWQ4C6w4CWQ_k1j8D0YAXdlfl9l7mfT8ArEEZEYkZkZnAAVJg4CYVwULZ_maiWiRAAXxRAUgVgUgAFqnzVm4C6CQApD5moCFn3wMAKQgC0A-iYFID8BTEwDEb4WcH8AnyFzyBAA",mdxType:"Playground"},function(){var A=Y([{name:"pc",mq:{screen:!0,minWidth:768}},{name:"mobile",mq:{screen:!0,maxWidth:767}}])(function(A){var e=A.pc,o=A.mobile;return Object(a.b)(s.a.Fragment,null,Object(a.b)("div",null,"pc: ",e.toString()),Object(a.b)("div",null,"mobile: ",o.toString()))});return Object(a.b)(A,{mdxType:"HOC"})}))}k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docz/Examples.mdx"}}),k.isMDXComponent=!0}}]);
//# sourceMappingURL=docz-examples.f69494dd345eea5c96f4.js.map