(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{482:function(n,t,o){"use strict";o.r(t);var a=o(20),e=Object(a.a)({},(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h1",{attrs:{id:"category-scale"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#category-scale"}},[n._v("#")]),n._v(" Category Scale")]),n._v(" "),o("p",[n._v("Zooming is performed by clicking and selecting an area over the chart with the mouse. Pan is activated by keeping "),o("code",[n._v("ctrl")]),n._v(" pressed.")]),n._v(" "),o("chart-editor",{attrs:{code:"// <block:data:1>\nconst DATA_COUNT = 20;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [{\n    label: 'Dataset 1',\n    borderColor: Utils.randomColor(0.7),\n    backgroundColor: Utils.randomColor(0.5),\n    data: Utils.numbers(NUMBER_CFG),\n  }, {\n    label: 'Dataset 2',\n    borderColor: Utils.randomColor(0.7),\n    backgroundColor: Utils.randomColor(0.5),\n    data: Utils.numbers(NUMBER_CFG),\n  }, {\n    label: 'Dataset 3',\n    borderColor: Utils.randomColor(0.7),\n    backgroundColor: Utils.randomColor(0.5),\n    data: Utils.numbers(NUMBER_CFG),\n  }]\n};\n// </block:data>\n\n// <block:scales:2>\nconst scaleOpts = {\n  grid: {\n    borderColor: Utils.randomColor(1),\n    color: 'rgba( 0, 0, 0, 0.1)',\n  },\n  title: {\n    display: true,\n    text: (ctx) => ctx.scale.axis + ' axis',\n  }\n};\nconst scales = {\n  x: {\n    type: 'category',\n  },\n  y: {\n    type: 'linear',\n    ticks: {\n      callback: (val, index, ticks) => index === 0 || index === ticks.length - 1 ? null : val,\n    },\n  },\n};\nObject.keys(scales).forEach(scale => Object.assign(scales[scale], scaleOpts));\n// </block:scales>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    scales: scales,\n    plugins: {\n      tooltip: false,\n      zoom: {\n        pan: {\n          enabled: true,\n          mode: 'x',\n          modifierKey: 'ctrl',\n        },\n        zoom: {\n          drag: {\n            enabled: true\n          },\n          mode: 'x',\n        },\n      }\n    },\n  }\n};\n// </block:config>\n\nconst actions = [\n  {\n    name: 'Reset zoom',\n    handler(chart) {\n      chart.resetZoom();\n    }\n  }\n];\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);