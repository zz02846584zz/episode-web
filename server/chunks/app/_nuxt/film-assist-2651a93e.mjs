import { u as useHttpPost, _ as __nuxt_component_0, a as __nuxt_component_3 } from './useHttp-d4b068f5.mjs';
import { _ as __nuxt_component_2 } from './CTA-158c7193.mjs';
import { useSSRContext, defineComponent, withAsyncContext, reactive, mergeProps, unref } from 'vue';
import { u as useHead, a as useI18n } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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
  __name: "film-assist",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Film Assist"
    });
    const { locale } = useI18n();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useHttpPost("film-assist-page", "/page/info", { body: { id: 9 } })), __temp = await __temp, __restore(), __temp);
    const serviceHeading = reactive({
      en: "Our Service features",
      "zh-Hant": "\u6211\u5011\u7684\u670D\u52D9\u7279\u8272"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_Header = __nuxt_component_0;
      const _component_CTA = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "film-assist" }, _attrs))} data-v-dff10dff>`);
      _push(ssrRenderComponent(_component_Header, { class: "header" }, null, _parent));
      _push(`<main data-v-dff10dff><div class="page-content" data-v-dff10dff><div class="top" data-v-dff10dff><div class="left" data-v-dff10dff><h1 class="subtitle" data-v-dff10dff><!--[-->`);
      ssrRenderList((_b = (_a = unref(page)) == null ? void 0 : _a[unref(locale)]) == null ? void 0 : _b.title.split(""), (char, index) => {
        _push(`<span data-v-dff10dff>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></h1></div><div class="right" data-v-dff10dff><div class="intro" data-v-dff10dff>${(_d = (_c = unref(page)) == null ? void 0 : _c[unref(locale)]) == null ? void 0 : _d.metaData.intro}</div><div class="advantage" data-v-dff10dff>${(_f = (_e = unref(page)) == null ? void 0 : _e[unref(locale)]) == null ? void 0 : _f.metaData.advantage}</div></div></div><div class="body" data-v-dff10dff><h2 class="subtitle" data-v-dff10dff><!--[-->`);
      ssrRenderList(unref(serviceHeading)[unref(locale)].split(""), (char, index) => {
        _push(`<span data-v-dff10dff>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></h2><div class="service" data-v-dff10dff>${(_h = (_g = unref(page)) == null ? void 0 : _g[unref(locale)]) == null ? void 0 : _h.metaData.service}</div></div></div><div class="cta-container" data-v-dff10dff>`);
      _push(ssrRenderComponent(_component_CTA, null, null, _parent));
      _push(`</div><div class="footer-container" data-v-dff10dff>`);
      _push(ssrRenderComponent(_component_Footer, { class: "footer" }, null, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/film-assist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const filmAssist = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dff10dff"]]);

export { filmAssist as default };
//# sourceMappingURL=film-assist-2651a93e.mjs.map
