import { u as useHttpPost, _ as __nuxt_component_0, a as __nuxt_component_3 } from './useHttp-92d1d6a1.mjs';
import { _ as __nuxt_component_2 } from './CTA-9d147b92.mjs';
import { useSSRContext, defineComponent, withAsyncContext, reactive, mergeProps, unref } from 'vue';
import { _ as _export_sfc, u as useHead, a as useI18n } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-295e6065.mjs';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "production-service",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Production Service"
    });
    const { locale } = useI18n();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useHttpPost("production-service-page", "/page/info", { body: { id: 9 } })), __temp = await __temp, __restore(), __temp);
    const serviceHeading = reactive({
      en: "Our Service features",
      "zh-Hant": "\u6211\u5011\u7684\u670D\u52D9\u7279\u8272"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_Header = __nuxt_component_0;
      const _component_CTA = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "production-service" }, _attrs))} data-v-8236495d>`);
      _push(ssrRenderComponent(_component_Header, { class: "header" }, null, _parent));
      _push(`<main data-v-8236495d><div class="page-content" data-v-8236495d><div class="top" data-v-8236495d><div class="top-container" data-v-8236495d><h1 class="subtitle" data-v-8236495d><!--[-->`);
      ssrRenderList((_b = (_a = unref(page)) == null ? void 0 : _a[unref(locale)]) == null ? void 0 : _b.title.split(""), (char, index) => {
        _push(`<span data-v-8236495d>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></h1><div class="intro" data-v-8236495d>${(_d = (_c = unref(page)) == null ? void 0 : _c[unref(locale)]) == null ? void 0 : _d.metaData.intro}</div></div></div><div class="body" data-v-8236495d><h2 class="subtitle" data-v-8236495d><!--[-->`);
      ssrRenderList(unref(serviceHeading)[unref(locale)].split(""), (char, index) => {
        _push(`<span data-v-8236495d>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></h2><div class="service" data-v-8236495d>${(_f = (_e = unref(page)) == null ? void 0 : _e[unref(locale)]) == null ? void 0 : _f.metaData.service}</div></div></div><div class="cta-container" data-v-8236495d>`);
      _push(ssrRenderComponent(_component_CTA, null, null, _parent));
      _push(`</div><div class="footer-container" data-v-8236495d>`);
      _push(ssrRenderComponent(_component_Footer, { class: "footer" }, null, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/production-service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const productionService = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8236495d"]]);

export { productionService as default };
//# sourceMappingURL=production-service-88464d86.mjs.map
