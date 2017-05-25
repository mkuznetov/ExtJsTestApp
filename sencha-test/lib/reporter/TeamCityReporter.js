"use strict";function _interopRequireDefault(a){return a&&a.__esModule?a:{"default":a}}var _stringify=require("babel-runtime/core-js/json/stringify"),_stringify2=_interopRequireDefault(_stringify),_typeof2=require("babel-runtime/helpers/typeof"),_typeof3=_interopRequireDefault(_typeof2),_getPrototypeOf=require("babel-runtime/core-js/object/get-prototype-of"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=require("babel-runtime/helpers/inherits"),_inherits3=_interopRequireDefault(_inherits2),Base=require("orion-core/lib/Base"),ReporterBase=require("orion-core/lib/reporter/ReporterBase"),TeamCityReporter=function(a){function b(){return(0,_classCallCheck3["default"])(this,b),(0,_possibleConstructorReturn3["default"])(this,(b.__proto__||(0,_getPrototypeOf2["default"])(b)).apply(this,arguments))}return(0,_inherits3["default"])(b,a),(0,_createClass3["default"])(b,[{key:"ctor",value:function(a){this._flowIdSeed=1,this._flows={},this._browsers={}}},{key:"testSuiteEnter",value:function(a){this._getFlow(a.agent).testSuiteEnter(a)}},{key:"testRunStarted",value:function(a){this._getFlow(a.agent).testRunStarted(a)}},{key:"testSuiteStarted",value:function(a){this._getFlow(a.agent).testSuiteStarted(a)}},{key:"testStarted",value:function(a){this._getFlow(a.agent).testStarted(a)}},{key:"testFinished",value:function(a){this._getFlow(a.agent).testFinished(a)}},{key:"testSuiteFinished",value:function(a){this._getFlow(a.agent).testSuiteFinished(a)}},{key:"testRunFinished",value:function(a){this._getFlow(a.agent).testRunFinished(a)}},{key:"systemError",value:function(a){var b=a.error||a.message;"object"===("undefined"==typeof b?"undefined":(0,_typeof3["default"])(b))&&(b=(0,_stringify2["default"])(b,null,4)),this._getFlow(a.agent).testFailed("System error",b)}},{key:"_getFlow",value:function(a){var b=this;return b._flows[a.id]||(b._flows[a.id]=b._newFlow(a))}},{key:"_newFlow",value:function(a){var b=this,c=a.agentGroup,d=a.browserFullName,e=b._browsers[c.id]||(b._browsers[c.id]=d);return new Flow({id:b._flowIdSeed++,reporter:b,browserName:e})}}],[{key:"meta",get:function(){return{prototype:{supportedMessages:{testSuiteEnter:1,testSuiteStarted:1,testSuiteFinished:1,testStarted:1,testFinished:1,testFailed:1,testRunStarted:1,testRunFinished:1}}}}}]),b}(ReporterBase),Flow=function(a){function b(){return(0,_classCallCheck3["default"])(this,b),(0,_possibleConstructorReturn3["default"])(this,(b.__proto__||(0,_getPrototypeOf2["default"])(b)).apply(this,arguments))}return(0,_inherits3["default"])(b,a),(0,_createClass3["default"])(b,[{key:"ctor",value:function(a){this._files={}}},{key:"reportMessage",value:function(a){var b=a.type,c=a.name,d=a.error,e=a.details,f=this.state;if("testRunStarted"==b){f.push("suite");var g=this.group;this.testSuiteStarted(g.os+"@"+g.name+"@"+g.version)}else if("testRunFinished"==b){f.pop();var g=this.group;this.testSuiteFinished(g.os+"@"+g.name+"@"+g.version)}else"testSuiteStarted"==b?(f.push("suite"),this.testSuiteStarted(c)):"testSuiteFinished"==b?(f.pop(),this.testSuiteFinished(c)):"testStarted"==b?(f.push("test"),this.testStarted(c)):"testFinished"==b?(f.pop(),this.testFinished(c)):"testFailed"==b&&("test"!=f[f.length-1]&&this.testStarted(c),this.testFailed(c,d,e),"test"!=f[f.length-1]&&this.testFinished(c))}},{key:"testRunStarted",value:function(a){console.log("##teamcity[testSuiteStarted flowId='%d' name='%s']",this.id,this.browserName)}},{key:"testRunFinished",value:function(a){console.log("##teamcity[testSuiteFinished flowId='%d' name='%s']",this.id,this.browserName)}},{key:"testSuiteEnter",value:function(a){var b=a.fileName;b&&(this._files[a.id]=b)}},{key:"testSuiteStarted",value:function(a){var b=this,c=b._files[a.id];c&&console.log("##teamcity[testSuiteStarted flowId='%d' name='%s']",b.id,c);var d=escape(a.name);console.log("##teamcity[testSuiteStarted flowId='%d' name='%s']",b.id,d)}},{key:"testSuiteFinished",value:function(a){var b=this,c=escape(a.name);console.log("##teamcity[testSuiteFinished flowId='%d' name='%s']",b.id,c);var d=b._files[a.id];d&&console.log("##teamcity[testSuiteFinished flowId='%d' name='%s']",b.id,d)}},{key:"testStarted",value:function(a){var b=escape(a.name);console.log("##teamcity[testStarted flowId='%d' name='%s']",this.id,b)}},{key:"testFinished",value:function(a){var b=this,c=escape(a.name);a.passed||a.expectations.forEach(function(a){a.passed||b.testFailed(c,a.message,"")}),console.log("##teamcity[testFinished flowId='%d' name='%s']",this.id,c)}},{key:"testFailed",value:function(a,b,c){a=escape(a),b=escape(b),c=escape(c),console.log("##teamcity[testFailed flowId='%s' name='%s' message='%s' details='%s']",this.id,a,b,c)}}]),b}(Base),escape=function(a){return null===a||void 0===a?"":a.replace(/\|/g,"||").replace(/\n/g,"|n").replace(/\r/g,"|r").replace(/\[/g,"|[").replace(/\]/g,"|]").replace(/\u0085/g,"|x").replace(/\u2028/g,"|l").replace(/\u2029/g,"|p").replace(/'/g,"|'")};module.exports=TeamCityReporter;