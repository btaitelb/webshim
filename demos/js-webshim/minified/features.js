(function(a){a.webshims.loader.addModule("jquery-ui",{src:"http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js",test:function(){return!!(a.ui&&a.widget&&(a.fn.datepicker||a.fn.slider))}});a.webshims.loader.addModule("swfobject",{src:"http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",test:function(){return"swfobject"in window}});a.support.es5=!!(String.prototype.trim&&Function.prototype.bind&&!isNaN(Date.parse("T00:00"))&&Date.now&&Date.prototype.toISOString);a.support.es5&&
a.each(["filter","map","every","reduce","reduceRight","lastIndexOf"],function(c,b){if(!Array.prototype[b])return a.support.es5=false});a.support.es5&&a.each(["keys","isExtensible","isFrozen","isSealed","preventExtensions","defineProperties","create","getOwnPropertyNames"],function(c,b){if(!Object[b])return a.support.es5=false});a.webshims.addPolyfill("es5",{test:function(){return a.support.es5},combination:["combined-ie7","combined-ie8","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ff3-light"]});
a.support.geolocation="geolocation"in navigator;a.webshims.addPolyfill("geolocation",{test:function(){return a.support.geolocation},options:{destroyWrite:true},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ie7-light","combined-ie8-light","combined-ie9-light"]});a.support.canvas="getContext"in a("<canvas />")[0];a.webshims.addPolyfill("canvas",{test:function(){return a.support.canvas},methodNames:[{name:"getContext",elementNames:["canvas"]}],combination:["combined-ie7","combined-ie8",
"combined-ie7-light","combined-ie8-light"]});a.support.validity="checkValidity"in a('<form action="#" />')[0];a.webshims.addPolyfill("validity",{feature:"forms",test:function(){return a.support.validity},methodNames:[{name:"setCustomValidity",elementNames:["input","select","textarea"]},{name:"checkValidity",elementNames:["form","fieldset","input","select","textarea"]}],options:{},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ie9-light",
"combined-ff3-light"]});if(a.support.validity===true){a.webshims.capturingEvents(["input"]);a.webshims.capturingEvents(["invalid"],true)}(function(){a.webshims.validityMessages=[];a.webshims.inputTypes={};var c=a('<form action="#"><fieldset><input name="a" required /></fieldset></form>'),b=a("fieldset",c)[0];a.support.validationMessage=!!c.find("input").attr("validationMessage");a.support.fieldsetValidation=!!(b.elements&&b.checkValidity&&"disabled"in b&&!b.checkValidity());a.webshims.addPolyfill("validation-base",
{feature:"forms",test:function(){return false},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light"]})})();a.webshims.addPolyfill("implement-types",{feature:"forms",test:function(){return!(a.support.validity===true&&(a('<input type="datetime-local" />').attr("type")!=="datetime-local"||a('<input type="range" />').attr("type")!=="range"))},combination:["combined-ff4"]});a.webshims.addPolyfill("number-date-type",
{feature:"forms",test:function(){return a('<input type="datetime-local" />').attr("type")==="datetime-local"&&a('<input type="range" />').attr("type")==="range"},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4"],options:{stepArrows:{number:1,time:1}}});a.support.placeholder=a('<input type="text" />').attr("placeholder")!==undefined;a.webshims.addPolyfill("placeholder",{feature:"forms",test:function(){return a.support.placeholder},combination:["combined-ie7",
"combined-ie8","combined-ie9","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light"]});a.support.jsonStorage="JSON"in window&&"localStorage"in window&&"sessionStorage"in window;a.webshims.addPolyfill("json-storage",{test:function(){return a.support.jsonStorage},noAutoCallback:true,combination:["combined-ie7","combined-ie7-light"]});a.webshims.light=["es5","canvas","validity","validation-base","placeholder","json-storage"]})(jQuery);