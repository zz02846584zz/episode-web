import { d as _sfc_main$6 } from './useHttp-92d1d6a1.mjs';
import { _ as _export_sfc, a as useI18n } from '../server.mjs';
import { useSSRContext, defineComponent, reactive, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CTA",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const ctaText = reactive({
      en: {
        heading: "<p> Let\u2019s Work Together!</p><p>Send Us an Email.</p>",
        button: "Get Started"
      },
      "zh-Hant": {
        heading: "<p>\u958B\u555F\u6211\u5011\u5408\u4F5C</p><p>\u806F\u7D61\u6211\u5011</p>",
        button: "\u7ACB\u5373\u8AEE\u8A62"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_I18nLink = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cta" }, _attrs))} data-v-cf7b27e2><div class="cta-heading" data-v-cf7b27e2>${unref(ctaText)[unref(locale)].heading}</div>`);
      _push(ssrRenderComponent(_component_I18nLink, {
        to: "/contact",
        class: "cta-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cta-btn-bg" data-v-cf7b27e2${_scopeId}></div><div class="cta-btn-hover" data-v-cf7b27e2${_scopeId}></div><div class="cta-btn-text" data-v-cf7b27e2${_scopeId}>${ssrInterpolate(unref(ctaText)[unref(locale)].button)}</div>`);
          } else {
            return [
              createVNode("div", { class: "cta-btn-bg" }),
              createVNode("div", { class: "cta-btn-hover" }),
              createVNode("div", { class: "cta-btn-text" }, toDisplayString(unref(ctaText)[unref(locale)].button), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf7b27e2"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=CTA-9d147b92.mjs.map
