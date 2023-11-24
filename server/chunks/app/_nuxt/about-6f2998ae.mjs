import { u as useHttpPost, _ as __nuxt_component_0, a as __nuxt_component_3 } from './useHttp-d4b068f5.mjs';
import { _ as __nuxt_component_2 } from './CTA-158c7193.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref } from 'vue';
import { u as useHead, a as useI18n } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "about",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "About Us"
    });
    const { locale } = useI18n();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useHttpPost("about-page", "/page/info", { body: { id: 3 } })), __temp = await __temp, __restore(), __temp);
    const { data: members } = ([__temp, __restore] = withAsyncContext(() => useHttpPost("about-members", "/member/info")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_Header = __nuxt_component_0;
      const _component_CTA = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-f5c077d5>`);
      _push(ssrRenderComponent(_component_Header, { class: "header" }, null, _parent));
      _push(`<main data-v-f5c077d5><div class="page-content" data-v-f5c077d5><div class="top" data-v-f5c077d5><div class="slogan border-r" data-v-f5c077d5><h1 class="subtitle" data-v-f5c077d5><!--[-->`);
      ssrRenderList("ABOUT".split(""), (char, index) => {
        _push(`<span data-v-f5c077d5>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--><span style="${ssrRenderStyle({ "padding-right": "8px" })}" data-v-f5c077d5></span><!--[-->`);
      ssrRenderList("US".split(""), (char, index) => {
        _push(`<span data-v-f5c077d5>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></h1><div class="content" data-v-f5c077d5>${(_b = (_a = unref(page)) == null ? void 0 : _a[unref(locale)]) == null ? void 0 : _b.metaData.slogan}</div></div><div class="tablet-hidden mobile-hidden" data-v-f5c077d5></div><div class="border-r tablet-hidden mobile-hidden" data-v-f5c077d5></div><div class="intro" data-v-f5c077d5>${(_d = (_c = unref(page)) == null ? void 0 : _c[unref(locale)]) == null ? void 0 : _d.metaData.intro}</div></div><div class="body" data-v-f5c077d5><h2 class="subtitle" data-v-f5c077d5><!--[-->`);
      ssrRenderList("MEMBERS".split(""), (char, index) => {
        _push(`<span data-v-f5c077d5>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></h2><div class="slogan" data-v-f5c077d5>${(_f = (_e = unref(page)) == null ? void 0 : _e[unref(locale)]) == null ? void 0 : _f.metaData.memberSlogan}</div><div class="members-list" data-v-f5c077d5><!--[-->`);
      ssrRenderList(unref(members), (member, index) => {
        _push(`<div class="item" data-v-f5c077d5><div class="left" data-v-f5c077d5><div class="avatar" data-v-f5c077d5><img src="https://hyogen.design/asset/img/whoweare/thumb_ryo_kawano_01.jpg" data-v-f5c077d5></div></div><div class="right" data-v-f5c077d5><div class="name" data-v-f5c077d5>${ssrInterpolate(member[unref(locale)].name)}</div><div class="job" data-v-f5c077d5>${ssrInterpolate(member[unref(locale)].job)}</div><div class="intro" data-v-f5c077d5>${member[unref(locale)].intro}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="cta-container" data-v-f5c077d5>`);
      _push(ssrRenderComponent(_component_CTA, null, null, _parent));
      _push(`</div><div class="footer-container" data-v-f5c077d5>`);
      _push(ssrRenderComponent(_component_Footer, { class: "footer" }, null, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5c077d5"]]);

export { about as default };
//# sourceMappingURL=about-6f2998ae.mjs.map
