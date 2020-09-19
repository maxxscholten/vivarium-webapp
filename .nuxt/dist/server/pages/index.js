exports.ids = [1];
exports.modules = {

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html{background:#000}.container{margin:0 auto;min-height:100vh;align-items:center;text-align:center;flex-direction:column}.container,.row{width:100%;display:flex;justify-content:center}.row{flex-direction:row}.chart,.controls,.stats{background:#111;text-align:left;padding:20px;border-radius:4px;width:100%;max-width:400px;font:1rem Inconsolata,monospace}.chart{margin-left:20px;padding:0;min-height:300px}.apexcharts-legend-text,.chart text{color:green!important;fill:green;font:1rem Inconsolata,monospace!important}.stats{color:green}.controls{color:#fff;margin-left:20px}.button,.switch{background:#0e2135;border-color:#0e2135;color:#fff}@media screen and (max-width:768px){.chart,.controls,.stats{width:90%;margin:0}.stats{margin-top:20px}.chart{margin:20px 0}.row{flex-direction:column;justify-content:center;align-items:center}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7dab982c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"stats\">"+(_vm._s(_vm.stats))+"</div> "),_vm._ssrNode("<div class=\"chart\">","</div>",[_c('client-only',[_c('apexchart',{ref:"chart",staticClass:"apex-chart",attrs:{"width":"100%","height":"100%","options":_vm.chartOptions,"series":_vm.chartSeries}})],1)],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7dab982c&

// EXTERNAL MODULE: external "moment-timezone"
var external_moment_timezone_ = __webpack_require__(85);
var external_moment_timezone_default = /*#__PURE__*/__webpack_require__.n(external_moment_timezone_);

// EXTERNAL MODULE: external "pretty-ms"
var external_pretty_ms_ = __webpack_require__(86);
var external_pretty_ms_default = /*#__PURE__*/__webpack_require__.n(external_pretty_ms_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {},
  props: {},
  data: function () {
    return {
      lightsStatus: 0,
      chartSeries: [{
        name: 'Humidity',
        data: []
      }, {
        name: 'Temperature',
        data: []
      }],
      chartOptions: {
        legend: {
          show: true,
          offsetX: 0,
          offsetY: 5,
          markers: {
            width: 8,
            height: 8
          }
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 10,
            left: 0
          }
        },
        colors: ['#FF0000', '#0000FF'],
        chart: {
          id: 'realtime',
          height: 350,
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000 * 60
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2,
          curve: 'smooth'
        },
        markers: {
          size: 0
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: true,
            formatter: val => {
              return external_moment_timezone_default()(val).format('hh:mm:ss a');
            }
          }
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          range: 600000,
          tickAmount: 2,
          tooltip: {
            formatter: val => {
              return external_moment_timezone_default()(val).format('hh:mm:ss a');
            }
          },
          labels: {
            show: true,
            datetimeUTC: false,
            formatter: val => {
              return external_moment_timezone_default()(val).format('hh:mm a');
            },
            datetimeFormatter: {
              year: 'yyyy',
              month: "MMM 'yy",
              day: 'dd MMM',
              hour: 'hh:mm a'
            }
          }
        },
        yaxis: [{
          // seriesName: 'Temperature',
          decimalsInFloat: 0,
          tickAmount: 3,
          min: 50,
          max: 100,
          title: {
            text: 'Temperature (°F)',
            style: {}
          }
        }, {
          // seriesName: 'Humidity',
          decimalsInFloat: 0,
          tickAmount: 3,
          opposite: true,
          min: 50,
          max: 100,
          title: {
            text: 'Humidity (%)',
            style: {}
          }
        }]
      }
    };
  },
  computed: { ...Object(external_vuex_["mapGetters"])({
      vivStore: 'vivStore'
    }),

    stats() {
      return `
        Temperature: ${this.vivStore.humiture.temperature}<br/>
        Humidity: ${this.vivStore.humiture.humidity}<br/><br/>

        Waterbowl State: ${this.vivStore.water.sensor.state ? '<span style="background: green; color: black;">Full</span>' : '<span style="background: red; color: black;">Empty</span>'}<br/><br/>

        Waterpump: ${this.vivStore.water.pump.state ? '<span style="background: green; color: black;">Running</span>' : '<span style="background: red; color: black;">Off</span>'}<br/>
        Waterpump Automation: ${this.vivStore.water.pump.automate ? 'Automatic' : 'Manual'}<br/>
        Waterpump Countdown: ${external_pretty_ms_default()(this.vivStore.water.pump.countdown)}<br/>
        Waterpump Runtime: ${external_pretty_ms_default()(this.vivStore.water.pump.runtime)}<br/><br/>

        Mister: ${this.vivStore.mister.state ? '<span style="background: green; color: black;">Running</span>' : '<span style="background: red; color: black;">Off</span>'}<br/>
        Mister Automation: ${this.vivStore.mister.automate ? 'Automatic' : 'Manual'}<br/>
        Mister Countdown: ${external_pretty_ms_default()(this.vivStore.mister.countdown)}<br/>
        Mister Runtime: ${external_pretty_ms_default()(this.vivStore.mister.runtime)}<br/><br/>

        Lights: ${this.vivStore.lights.state ? '<span style="background: green; color: black;">On</span>' : '<span style="background: red; color: black;">Off</span>'}<br/>
        Lights Automation: ${this.vivStore.lights.automate ? 'Automatic' : 'Manual'}<br/>
        Lights Countdown: ${external_pretty_ms_default()(this.vivStore.lights.countdown)}<br/>
        Lights Runtime: ${external_pretty_ms_default()(this.vivStore.lights.runtime)}<br/><br/>

        Sunrise: ${this.secondsToTime(this.vivStore.lights.sunrise)}a<br/>
        Sunset: ${this.secondsToTime(this.vivStore.lights.sunset)}p
      `;
    }

  },
  watch: {
    vivStore: {
      deep: true,
      handler: function (val, oldVal) {
        this.lightsStatus = val.lights.state;
      }
    }
  },

  mounted() {
    this.lightsStatus = this.vivStore.lights.state;
    this.updateChart();
    setInterval(() => {
      this.updateChart();
    }, 1000); // Reset the dataset to prevent memory leak

    setInterval(() => {
      this.chartSeries.forEach(series => {
        series.data = series.data.slice(series.data.length - 20);
      });
    }, 1000 * 60 * 60);
  },

  methods: {
    secondsToTime(t) {
      const dt = new Date(t);
      const hr = (dt.getHours() + 24) % 12 || 12;
      const m = '0' + dt.getMinutes();
      return hr + ':' + m.substr(-2);
    },

    updateChart() {
      const time = new Date().getTime();
      let chartSeries = JSON.parse(JSON.stringify(this.chartSeries));
      chartSeries[0].data.push({
        x: time,
        y: this.vivStore.humiture.humidity
      });
      chartSeries[1].data.push({
        x: time,
        y: this.vivStore.humiture.temperature
      });
      this.chartSeries = chartSeries;

      if (false) {}
    },

    async switchLight() {
      const status = +!this.lightsStatus;
      await this.$axios.get(`/api/proxy/lights/${status}`);
    },

    async runMister() {
      await this.$axios.get('/api/proxy/mist');
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0ca725ab"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map