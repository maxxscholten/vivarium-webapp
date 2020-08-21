exports.ids = [1];
exports.modules = {

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;flex-direction:column}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7286f82f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('el-button',{on:{"click":function($event){return _vm.runMister()}}},[_vm._v("Mist")]),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<br> <br> <br> <label>Lights</label> "),_c('el-switch',{attrs:{"active-value":1,"inactive-value":0},on:{"change":_vm.switchLight},model:{value:(_vm.lightsStatus),callback:function ($$v) {_vm.lightsStatus=$$v},expression:"lightsStatus"}}),_vm._ssrNode(" "),_c('apexchart',{ref:"chart",staticClass:"apex-chart",attrs:{"width":600,"height":300,"options":_vm.chartOptions,"series":_vm.chartSeries}})],2),_vm._ssrNode(" <div>"+_vm._ssrEscape("\n    "+_vm._s(_vm.chartSeries)+"\n  ")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7286f82f&

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

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {},
  props: {},

  data() {
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
        chart: {
          id: 'realtime',
          height: 350,
          type: 'line',
          animations: {
            // enabled: true,
            easing: 'linear',
            dynamicAnimation: {// speed: 5000,
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
          curve: 'smooth'
        },
        markers: {
          size: 2
        },
        xaxis: {
          type: 'datetime' // range: 60000,

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
        }],
        legend: {
          show: true
        }
      }
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      humiture: 'humiture'
    })
  },
  watch: {
    humiture(val, oldVal) {
      const time = new Date().getTime();
      this.chartSeries[0].data.push({
        x: time,
        y: val.humidity
      });
      this.chartSeries[1].data.push({
        x: time,
        y: val.temperature
      });
      this.$refs.chart.updateSeries(this.chartSeries);
    }

  },

  mounted() {
    setInterval(() => {
      this.chartSeries.forEach(series => {
        series.data = series.data.slice(series.data.length - 20);
      });
    }, 60000);
  },

  methods: {
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
  
  var style0 = __webpack_require__(86)
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
  "80825794"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map