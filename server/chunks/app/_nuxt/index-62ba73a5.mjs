import { u as useHttpPost, c as useAssets, _ as __nuxt_component_0, d as _sfc_main$6, a as __nuxt_component_3 } from './useHttp-92d1d6a1.mjs';
import { _ as __nuxt_component_2 } from './CTA-9d147b92.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { _ as _export_sfc, u as useHead, a as useI18n } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Works"
    });
    const { locale } = useI18n();
    const { data: list } = ([__temp, __restore] = withAsyncContext(() => useHttpPost("project-list", "/project/list", { body: { id: 9 } })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_I18nLink = _sfc_main$6;
      const _component_CTA = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "projects",
        style: { "opacity": "0" }
      }, _attrs))} data-v-f13e6d4e>`);
      _push(ssrRenderComponent(_component_Header, { class: "header" }, null, _parent));
      _push(`<div class="line-container" data-v-f13e6d4e><!--[-->`);
      ssrRenderList(7, (n) => {
        _push(`<div class="line" data-v-f13e6d4e><span data-v-f13e6d4e></span></div>`);
      });
      _push(`<!--]--></div><div class="page-content" data-v-f13e6d4e><div class="page-title" data-v-f13e6d4e><!--[-->`);
      ssrRenderList("WORKS".split(""), (char, index2) => {
        _push(`<span data-v-f13e6d4e>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></div><div class="projects-list" data-v-f13e6d4e><!--[-->`);
      ssrRenderList(unref(list), (item, index2) => {
        _push(`<div class="item" data-v-f13e6d4e>`);
        _push(ssrRenderComponent(_component_I18nLink, {
          to: `/project/${item.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.cover)} data-v-f13e6d4e${_scopeId}><div class="title" data-v-f13e6d4e${_scopeId}>${ssrInterpolate(item[unref(locale)].title)}</div><div class="icon" data-v-f13e6d4e${_scopeId}><img${ssrRenderAttr("src", ("useAssets" in _ctx ? _ctx.useAssets : unref(useAssets))("icons/Play.svg"))} data-v-f13e6d4e${_scopeId}></div>`);
            } else {
              return [
                createVNode("img", {
                  src: item.cover
                }, null, 8, ["src"]),
                createVNode("div", {
                  class: "title",
                  textContent: toDisplayString(item[unref(locale)].title)
                }, null, 8, ["textContent"]),
                createVNode("div", { class: "icon" }, [
                  createVNode("img", {
                    src: ("useAssets" in _ctx ? _ctx.useAssets : unref(useAssets))("icons/Play.svg")
                  }, null, 8, ["src"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_CTA, null, null, _parent));
      _push(`</div><div class="footer-container" data-v-f13e6d4e>`);
      _push(ssrRenderComponent(_component_Footer, { class: "footer" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f13e6d4e"]]);

export { index as default };
//# sourceMappingURL=index-62ba73a5.mjs.map
