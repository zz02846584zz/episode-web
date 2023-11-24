import { d as _sfc_main$6 } from './useHttp-f4d5d11f.mjs';
import { a as useI18n } from '../server.mjs';
import { useSSRContext, defineComponent, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CTA",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const ctaText = reactive({
      en: {
        heading: "<p>Let\u2019s talk about</p><p>You!</p>",
        contact: "<p>Call us on</p><p>+886 2 6613-0680</p>",
        consultation: "Free consultation",
        cta: "Ready to shape a unique visual story for your brand?<br />Fill out the contact form and join us on an immortal journey of creativity and imagery!",
        button: "Get Started"
      },
      "zh-Hant": {
        heading: "<p>\u4F86\u8AC7\u8AC7\u60A8\u7684\u9700\u6C42\u5427\uFF01</p>",
        contact: '<p>\u6253\u7D66\u6211\u5011</p><p style="font-weight: bold;">+886 2 6613-0680</p>',
        consultation: "\u514D\u8CBB\u8AEE\u8A62",
        cta: "\u6E96\u5099\u597D\u70BA\u60A8\u7684\u54C1\u724C\u5851\u9020\u7368\u7279\u8996\u89BA\u6545\u4E8B\u4E86\u55CE\uFF1F<br />\u586B\u5BEB\u806F\u7D61\u8868\u55AE\uFF0C\u8207\u6211\u5011\u4E00\u540C\u958B\u555F\u5275\u610F\u8207\u5F71\u50CF\u7684\u4E0D\u673D\u65C5\u7A0B\uFF01",
        button: "\u7ACB\u5373\u8AEE\u8A62"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_I18nLink = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cta" }, _attrs))} data-v-42e4d920><div class="cta-heading" data-v-42e4d920>${unref(ctaText)[unref(locale)].heading}</div><div class="cta-body" data-v-42e4d920><div class="left" data-v-42e4d920>${unref(ctaText)[unref(locale)].contact}</div><div class="right" data-v-42e4d920><div class="title" data-v-42e4d920>${ssrInterpolate(unref(ctaText)[unref(locale)].consultation)}</div><div class="description" data-v-42e4d920>${unref(ctaText)[unref(locale)].cta}</div>`);
      _push(ssrRenderComponent(_component_I18nLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(ctaText)[unref(locale)].button)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(ctaText)[unref(locale)].button), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="glow" data-v-42e4d920></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-42e4d920"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=CTA-84bc34cd.mjs.map
