jQuery.webshims.register("form-number-date-api",function(g,f){(function(){var a=f.validityMessages,b=function(a,c){g.each(c,function(c,d){a[c]?typeof d=="object"&&b(a[c],d):a[c]=d})},c={typeMismatch:{number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input."},d={typeMismatch:{number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}"};
["date","time","datetime-local"].forEach(function(a){c.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){c.rangeOverflow[a]="Value must be at or before {%max}."});["date","time","datetime-local"].forEach(function(a){d.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
b(a.en,c);b(a.de,d)})();f.getStep=function(a,b){var c=g.attr(a,"step");if(c==="any")return c;b=b||i(a);if(!e[b]||!e[b].step)return c;c=h.number.asNumber(c);return(!isNaN(c)&&c>0?c:e[b].step)*e[b].stepScaleFactor};f.addMinMaxNumberToCache=function(a,b,c){a+"AsNumber"in c||(c[a+"AsNumber"]=e[c.type].asNumber(b.attr(a)),isNaN(c[a+"AsNumber"])&&a+"Default"in e[c.type]&&(c[a+"AsNumber"]=e[c.type][a+"Default"]))};var l=parseInt("NaN",10),e=f.inputTypes,j=function(a){return typeof a=="number"||a&&a==a*1},
m=function(a){return Modernizr.input.valueAsNumber&&g('<input type="'+a+'" />').prop("type")===a},i=function(a){return(a.getAttribute("type")||"").toLowerCase()},p=f.addMinMaxNumberToCache,k=function(a,b){a=""+a;b-=a.length;for(var c=0;c<b;c++)a="0"+a;return a};f.addValidityRule("stepMismatch",function(a,b,c,d){if(b==="")return!1;if(!("type"in c))c.type=i(a[0]);if(c.type=="date")return!1;d=(d||{}).stepMismatch;if(e[c.type]&&e[c.type].step){if(!("step"in c))c.step=f.getStep(a[0],c.type);if(c.step==
"any")return!1;if(!("valueAsNumber"in c))c.valueAsNumber=e[c.type].asNumber(b);if(isNaN(c.valueAsNumber))return!1;p("min",a,c);a=c.minAsNumber;isNaN(a)&&(a=e[c.type].stepBase||0);d=Math.abs((c.valueAsNumber-a)%c.step);d=!(d<=1.0E-7||Math.abs(d-c.step)<=1.0E-7)}return d});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){f.addValidityRule(a.name,function(b,c,d,f){f=(f||{})[a.name]||!1;if(c==="")return f;if(!("type"in d))d.type=i(b[0]);if(e[d.type]&&
e[d.type].asNumber){if(!("valueAsNumber"in d))d.valueAsNumber=e[d.type].asNumber(c);if(isNaN(d.valueAsNumber))return!1;p(a.attr,b,d);if(isNaN(d[a.attr+"AsNumber"]))return f;f=d[a.attr+"AsNumber"]*a.factor<d.valueAsNumber*a.factor-1.0E-7}return f})});f.reflectProperties(["input"],["max","min","step"]);var n=f.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var a=i(this),a=e[a]&&e[a].asNumber?e[a].asNumber(g.prop(this,"value")):n.prop._supget&&n.prop._supget.apply(this,arguments);
a==null&&(a=l);return a},set:function(a){var b=i(this);e[b]&&e[b].numberToString?isNaN(a)?g.prop(this,"value",""):(b=e[b].numberToString(a),b!==!1?g.prop(this,"value",b):f.warn("INVALID_STATE_ERR: DOM Exception 11")):n.prop._supset&&n.prop._supset.apply(this,arguments)}}}),o=f.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var a=i(this);return e[a]&&e[a].asDate&&!e[a].noAsDate?e[a].asDate(g.prop(this,"value")):o.prop._supget&&o.prop._supget.call(this)||null},set:function(a){var b=
i(this);if(e[b]&&e[b].dateToString&&!e[b].noAsDate){if(a===null)return g.prop(this,"value",""),"";b=e[b].dateToString(a);if(b!==!1)return g.prop(this,"value",b),b;else f.warn("INVALID_STATE_ERR: DOM Exception 11")}else return o.prop._supset&&o.prop._supset.apply(this,arguments)||null}}}),h={number:{mismatch:function(a){return!j(a)},step:1,stepScaleFactor:1,asNumber:function(a){return j(a)?a*1:l},numberToString:function(a){return j(a)?a:!1}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(a){if(!a||
!a.split||!/\d$/.test(a))return!0;var b=a.split(/\u002D/);if(b.length!==3)return!0;var c=!1;g.each(b,function(a,b){if(!(j(b)||b&&b=="0"+b*1))return c=!0,!1});if(c)return c;if(b[0].length!==4||b[1].length!=2||b[1]>12||b[2].length!=2||b[2]>33)c=!0;return a!==this.dateToString(this.asDate(a,!0))},step:1,stepScaleFactor:864E5,asDate:function(a,b){return!b&&this.mismatch(a)?null:new Date(this.asNumber(a,!0))},asNumber:function(a,b){var c=l;if(b||!this.mismatch(a))a=a.split(/\u002D/),c=Date.UTC(a[0],a[1]-
1,a[2]);return c},numberToString:function(a){return j(a)?this.dateToString(new Date(a*1)):!1},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+k(a.getUTCMonth()+1,2)+"-"+k(a.getUTCDate(),2):!1}},time:{mismatch:function(a,b){if(!a||!a.split||!/\d$/.test(a))return!0;a=a.split(/\u003A/);if(a.length<2||a.length>3)return!0;var c=!1,d;a[2]&&(a[2]=a[2].split(/\u002E/),d=parseInt(a[2][1],10),a[2]=a[2][0]);g.each(a,function(a,b){if(!(j(b)||b&&b=="0"+b*1)||b.length!==2)return c=!0,!1});
if(c)return!0;if(a[0]>23||a[0]<0||a[1]>59||a[1]<0)return!0;if(a[2]&&(a[2]>59||a[2]<0))return!0;if(d&&isNaN(d))return!0;d&&(d<100?d*=100:d<10&&(d*=10));return b===!0?[a,d]:!1},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=l,a=this.mismatch(a,!0);a!==!0&&(b=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0),a[1]&&(b+=a[1]));return b},dateToString:function(a){if(a&&a.getUTCHours){var b=k(a.getUTCHours(),2)+":"+k(a.getUTCMinutes(),
2),c=a.getSeconds();c!="0"&&(b+=":"+k(c,2));c=a.getUTCMilliseconds();c!="0"&&(b+="."+k(c,3));return b}else return!1}},"datetime-local":{mismatch:function(a,b){if(!a||!a.split||(a+"special").split(/\u0054/).length!==2)return!0;a=a.split(/\u0054/);return e.date.mismatch(a[0])||e.time.mismatch(a[1],b)},noAsDate:!0,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=l,c=this.mismatch(a,!0);c!==!0&&(a=a.split(/\u0054/)[0].split(/\u002D/),b=Date.UTC(a[0],a[1]-
1,a[2],c[0][0],c[0][1],c[0][2]||0),c[1]&&(b+=c[1]));return b},dateToString:function(a,b){return e.date.dateToString(a)+"T"+e.time.dateToString(a,b)}}};(!Modernizr.input.valueAsNumberSet||!m("number"))&&f.addInputType("number",h.number);(!Modernizr.input.valueAsNumberSet||!m("range"))&&f.addInputType("range",g.extend({},h.number,h.range));(!Modernizr.input.valueAsNumberSet||!m("date"))&&f.addInputType("date",h.date);(!Modernizr.input.valueAsNumberSet||!m("time"))&&f.addInputType("time",g.extend({},
h.date,h.time));(!Modernizr.input.valueAsNumberSet||!m("datetime-local"))&&f.addInputType("datetime-local",g.extend({},h.date,h.time,h["datetime-local"]))});