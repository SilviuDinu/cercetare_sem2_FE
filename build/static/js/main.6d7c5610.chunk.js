(this["webpackJsonpdisease-prediction"]=this["webpackJsonpdisease-prediction"]||[]).push([[0],{15:function(s,t,e){},17:function(s,t,e){},19:function(s,t,e){"use strict";e.r(t);var i,m=e(1),o=e.n(m),n=e(9),d=e.n(n),p=(e(15),e(7)),a=e(8),r=e(6),c=e.n(r),l=e(10),y=e(2);e(17);!function(s){s.HEADER="Please fill in the information below",s.NO_RESULTS="No result found for your search criteria",s.SEARCH_PLACEHOLDER="Search for a symptom by name...",s.PREDICTION="Based on your symptoms, your predicted diagnosis is: "}(i||(i={}));var u=e(0);function h(s){var t=s.isVisible;return Object(u.jsx)(u.Fragment,{children:t?Object(u.jsx)("div",{className:"message "+s.type,children:Object(u.jsx)("span",{children:s.message})}):null})}function b(s){var t=s.options,e=s.filter,m=t.filter((function(s){return s.symptom.startsWith(e.searchValue)||s.symptom.includes(e.searchValue)}));return Object(u.jsx)("div",{className:m.length>0?"options-wrapper":"options-wrapper empty",children:m.length>0?m.map((function(t){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"option",children:[Object(u.jsx)("label",{htmlFor:t.id,className:"label",children:t.symptom}),Object(u.jsx)("input",{type:"checkbox",onChange:function(e){return s.onSelect(t,e.target.checked)},name:t.id,className:"symptom-checkbox "+t.symptom})]}),Object(u.jsx)("span",{className:"divider"})]},t.id)})):Object(u.jsx)(h,{message:i.NO_RESULTS,isVisible:0===m.length})})}function f(s){var t=s.options,e=s.filter;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{className:"symtpoms-form",method:"POST",onSubmit:s.onSubmit,children:[Object(u.jsx)(b,{filter:e,options:t,onSelect:s.onSelect}),Object(u.jsx)("button",{className:"submit-btn",type:"submit",children:"Send"})]})})}function j(s){return Object(u.jsx)("div",{className:"search",children:Object(u.jsx)("input",{type:"text",value:s.value,onChange:function(t){return s.onChange(t)},placeholder:i.SEARCH_PLACEHOLDER})})}function g(s){return Object(u.jsx)("div",{className:"selected",children:s.options.length>0?s.options.map((function(s,t){return Object(u.jsx)("span",{children:s.symptom},t)})):null})}var v,O=[{id:0,symptom:"itching"},{id:1,symptom:"skin rash"},{id:2,symptom:"nodal skin eruptions"},{id:3,symptom:"continuous sneezing"},{id:4,symptom:"shivering"},{id:5,symptom:"chills"},{id:6,symptom:"joint pain"},{id:7,symptom:"stomach pain"},{id:8,symptom:"acidity"},{id:9,symptom:"ulcers on tongue"},{id:10,symptom:"muscle wasting"},{id:11,symptom:"vomiting"},{id:12,symptom:"burning micturition"},{id:13,symptom:"spotting  urination"},{id:14,symptom:"fatigue"},{id:15,symptom:"weight gain"},{id:16,symptom:"anxiety"},{id:17,symptom:"cold hands and feets"},{id:18,symptom:"mood swings"},{id:19,symptom:"weight loss"},{id:20,symptom:"restlessness"},{id:21,symptom:"lethargy"},{id:22,symptom:"patches in throat"},{id:23,symptom:"irregular sugar level"},{id:24,symptom:"cough"},{id:25,symptom:"high fever"},{id:26,symptom:"sunken eyes"},{id:27,symptom:"breathlessness"},{id:28,symptom:"sweating"},{id:29,symptom:"dehydration"},{id:30,symptom:"indigestion"},{id:31,symptom:"headache"},{id:32,symptom:"yellowish skin"},{id:33,symptom:"dark urine"},{id:34,symptom:"nausea"},{id:35,symptom:"loss of appetite"},{id:36,symptom:"pain behind the eyes"},{id:37,symptom:"back pain"},{id:38,symptom:"constipation"},{id:39,symptom:"abdominal pain"},{id:40,symptom:"diarrhoea"},{id:41,symptom:"mild fever"},{id:42,symptom:"yellow urine"},{id:43,symptom:"yellowing of eyes"},{id:44,symptom:"acute liver failure"},{id:45,symptom:"fluid overload"},{id:46,symptom:"swelling of stomach"},{id:47,symptom:"swelled lymph nodes"},{id:48,symptom:"malaise"},{id:49,symptom:"blurred and distorted vision"},{id:50,symptom:"phlegm"},{id:51,symptom:"throat irritation"},{id:52,symptom:"redness of eyes"},{id:53,symptom:"sinus pressure"},{id:54,symptom:"runny nose"},{id:55,symptom:"congestion"},{id:56,symptom:"chest pain"},{id:57,symptom:"weakness in limbs"},{id:58,symptom:"fast heart rate"},{id:59,symptom:"pain during bowel movements"},{id:60,symptom:"pain in anal region"},{id:61,symptom:"bloody stool"},{id:62,symptom:"irritation in anus"},{id:63,symptom:"neck pain"},{id:64,symptom:"dizziness"},{id:65,symptom:"cramps"},{id:66,symptom:"bruising"},{id:67,symptom:"obesity"},{id:68,symptom:"swollen legs"},{id:69,symptom:"swollen blood vessels"},{id:70,symptom:"puffy face and eyes"},{id:71,symptom:"enlarged thyroid"},{id:72,symptom:"brittle nails"},{id:73,symptom:"swollen extremeties"},{id:74,symptom:"excessive hunger"},{id:75,symptom:"extra marital contacts"},{id:76,symptom:"drying and tingling lips"},{id:77,symptom:"slurred speech"},{id:78,symptom:"knee pain"},{id:79,symptom:"hip joint pain"},{id:80,symptom:"muscle weakness"},{id:81,symptom:"stiff neck"},{id:82,symptom:"swelling joints"},{id:83,symptom:"movement stiffness"},{id:84,symptom:"spinning movements"},{id:85,symptom:"loss of balance"},{id:86,symptom:"unsteadiness"},{id:87,symptom:"weakness of one body side"},{id:88,symptom:"loss of smell"},{id:89,symptom:"bladder discomfort"},{id:90,symptom:"foul smell of urine"},{id:91,symptom:"continuous feel of urine"},{id:92,symptom:"passage of gases"},{id:93,symptom:"internal itching"},{id:94,symptom:"toxic look (typhos)"},{id:95,symptom:"depression"},{id:96,symptom:"irritability"},{id:97,symptom:"muscle pain"},{id:98,symptom:"altered sensorium"},{id:99,symptom:"red spots over body"},{id:100,symptom:"belly pain"},{id:101,symptom:"abnormal menstruation"},{id:102,symptom:"dischromic  patches"},{id:103,symptom:"watering from eyes"},{id:104,symptom:"increased appetite"},{id:105,symptom:"polyuria"},{id:106,symptom:"family history"},{id:107,symptom:"mucoid sputum"},{id:108,symptom:"rusty sputum"},{id:109,symptom:"lack of concentration"},{id:110,symptom:"visual disturbances"},{id:111,symptom:"receiving blood transfusion"},{id:112,symptom:"receiving unsterile injections"},{id:113,symptom:"coma"},{id:114,symptom:"stomach bleeding"},{id:115,symptom:"distention of abdomen"},{id:116,symptom:"history of alcohol consumption"},{id:117,symptom:"fluid overload"},{id:118,symptom:"blood in sputum"},{id:119,symptom:"prominent veins on calf"},{id:120,symptom:"palpitations"},{id:121,symptom:"painful walking"},{id:122,symptom:"pus filled pimples"},{id:123,symptom:"blackheads"},{id:124,symptom:"scurring"},{id:125,symptom:"skin peeling"},{id:126,symptom:"silver like dusting"},{id:127,symptom:"small dents in nails"},{id:128,symptom:"inflammatory nails"},{id:129,symptom:"blister"},{id:130,symptom:"red sore around nose"},{id:131,symptom:"yellow crust ooze"}];!function(s){s.PREDICT_DISEASE="http://localhost:5000/api/v2/predict"}(v||(v={}));var x=function(){var s=Object(m.useState)(O),t=Object(y.a)(s,1)[0],e=Object(m.useState)({selected:!1,searchValue:""}),o=Object(y.a)(e,2),n=o[0],d=o[1],r=Object(m.useState)([]),b=Object(y.a)(r,2),x=b[0],S=b[1],w=Object(m.useState)(),k=Object(y.a)(w,2),E=k[0],N=k[1],C=Object(m.useState)(),D=Object(y.a)(C,2),R=D[0],P=D[1],T=function(){var s=Object(l.a)(c.a.mark((function s(t){var e,m,o,n;return c.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t.preventDefault(),e=x.map((function(s){return s.id})),m={symptoms:x,ids:e},s.next=5,fetch(v.PREDICT_DISEASE,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});case 5:return o=s.sent,s.next=8,o.json();case 8:n=s.sent,N(n),P({message:i.PREDICTION+n.disease,type:"notification"});case 11:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"App-header",children:i.HEADER}),Object(u.jsxs)("div",{className:"body",children:[Object(u.jsx)(h,{isVisible:!!E&&R,message:null===R||void 0===R?void 0:R.message,type:null===R||void 0===R?void 0:R.type}),Object(u.jsx)(j,{value:n.searchValue,onChange:function(s){d(Object(a.a)(Object(a.a)({},n),{},{searchValue:s.target.value}))}}),Object(u.jsx)(g,{options:x}),Object(u.jsx)(f,{filter:n,onSubmit:T,onSelect:function(s,t){var e=Object(p.a)(x),i=e.find((function(t){return t.symptom===s.symptom})),m=e.indexOf(i);!0===t?S([].concat(Object(p.a)(x),[s])):(e.splice(m,1),S(e)),P({message:""})},options:t})]})]})},S=function(s){s&&s instanceof Function&&e.e(3).then(e.bind(null,20)).then((function(t){var e=t.getCLS,i=t.getFID,m=t.getFCP,o=t.getLCP,n=t.getTTFB;e(s),i(s),m(s),o(s),n(s)}))};d.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),S()}},[[19,1,2]]]);
//# sourceMappingURL=main.6d7c5610.chunk.js.map