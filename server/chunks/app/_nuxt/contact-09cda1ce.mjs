import { b as useSocial, u as useHttpPost, c as useAssets, _ as __nuxt_component_0, a as __nuxt_component_3 } from './useHttp-92d1d6a1.mjs';
import { useSSRContext, defineComponent, withAsyncContext, reactive, ref, mergeProps, unref } from 'vue';
import { _ as _export_sfc, u as useHead, a as useI18n } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "contact",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Contact Us"
    });
    const { socialItems } = useSocial();
    const { locale } = useI18n();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useHttpPost("contact-page", "/page/info", { body: { id: 4 } })), __temp = await __temp, __restore(), __temp);
    const pageText = reactive({
      form: {
        name: {
          "zh-Hant": "\u59D3\u540D",
          en: "Name"
        },
        email: {
          "zh-Hant": "Email",
          en: "Email"
        },
        message: {
          "zh-Hant": "\u8A0A\u606F",
          en: "Message"
        },
        submit: {
          "zh-Hant": "\u767C\u9001\u8A0A\u606F",
          en: "SUBMIT"
        }
      },
      text: {
        slogan: {
          en: "Let us capture the essence of your brand! Contact us now to start creative cooperation!",
          "zh-Hant": "\u8B93\u6211\u5011\u6355\u6349\u60A8\u54C1\u724C\u7684\u7CBE\u9AD3\uFF01\u7ACB\u5373\u806F\u7D61\u6211\u5011\uFF0C\u958B\u555F\u5275\u610F\u5408\u4F5C\uFF01"
        },
        getInTouch: {
          en: "GET IN TOUCH",
          "zh-Hant": "\u8207\u6211\u5011\u806F\u7E6B"
        },
        address: {
          en: "ADDRESS",
          "zh-Hant": "\u5730\u5740"
        },
        phone: {
          en: "phone",
          "zh-Hant": "\u96FB\u8A71"
        },
        fax: {
          en: "FAX",
          "zh-Hant": "\u50B3\u771F"
        }
      }
    });
    const formGroups = ref([
      { key: "name", type: "input" },
      { key: "email", type: "input" },
      { key: "message", type: "textarea" }
    ]);
    const form = ref({
      name: "",
      email: "",
      message: ""
    });
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_Header = __nuxt_component_0;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact" }, _attrs))} data-v-205fc697>`);
      _push(ssrRenderComponent(_component_Header, { class: "header" }, null, _parent));
      _push(`<main data-v-205fc697><div class="page-content" data-v-205fc697><div class="body" data-v-205fc697><div class="contact-form" data-v-205fc697><div class="subtitle" data-v-205fc697><!--[-->`);
      ssrRenderList("SAY HI TO OUR TEAM".split(" "), (s, index) => {
        _push(`<span data-v-205fc697>${ssrInterpolate(s)}</span>`);
      });
      _push(`<!--]--></div><h1 class="title" data-v-205fc697><!--[-->`);
      ssrRenderList("CONTACT US".split(""), (char, index) => {
        _push(`<span data-v-205fc697>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></h1><form data-v-205fc697><!--[-->`);
      ssrRenderList(unref(formGroups), (group, index) => {
        _push(`<div class="${ssrRenderClass([{ active: unref(form)[group.key] }, "form-group"])}" data-v-205fc697>`);
        if (group.type == "input") {
          _push(`<input type="text"${ssrRenderAttr("id", group.key)}${ssrRenderAttr("value", unref(form)[group.key])} data-v-205fc697>`);
        } else {
          _push(`<textarea${ssrRenderAttr("id", group.key)} data-v-205fc697>${ssrInterpolate(unref(form)[group.key])}</textarea>`);
        }
        _push(`<label${ssrRenderAttr("for", group.key)} data-v-205fc697>${ssrInterpolate(unref(pageText).form[group.key][unref(locale)])}</label></div>`);
      });
      _push(`<!--]--><button type="submit" data-v-205fc697>${ssrInterpolate(unref(pageText).form.submit[unref(locale)])}</button></form><div class="social-links" data-v-205fc697><!--[-->`);
      ssrRenderList(unref(socialItems), (item, index) => {
        _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" data-v-205fc697><img${ssrRenderAttr("src", ("useAssets" in _ctx ? _ctx.useAssets : unref(useAssets))(item.icon))} data-v-205fc697></a>`);
      });
      _push(`<!--]--></div></div><div class="contact-information" data-v-205fc697><div class="information-item" data-v-205fc697><div class="subtitle" data-v-205fc697>${ssrInterpolate(unref(pageText).text.getInTouch[unref(locale)])}</div><div class="content" data-v-205fc697>${(_b = (_a = unref(page)) == null ? void 0 : _a[unref(locale)]) == null ? void 0 : _b.metaData.email}</div></div><div class="information-item" data-v-205fc697><div class="subtitle" data-v-205fc697>${ssrInterpolate(unref(pageText).text.address[unref(locale)])}</div><div class="content" data-v-205fc697>${(_d = (_c = unref(page)) == null ? void 0 : _c[unref(locale)]) == null ? void 0 : _d.metaData.address}</div></div><div class="information-item" data-v-205fc697><div class="subtitle" data-v-205fc697>${ssrInterpolate(unref(pageText).text.phone[unref(locale)])}</div><div class="content" data-v-205fc697>${(_f = (_e = unref(page)) == null ? void 0 : _e[unref(locale)]) == null ? void 0 : _f.metaData.phone}</div></div><div class="information-item" data-v-205fc697><div class="subtitle" data-v-205fc697>${ssrInterpolate(unref(pageText).text.fax[unref(locale)])}</div><div class="content" data-v-205fc697>${(_h = (_g = unref(page)) == null ? void 0 : _g[unref(locale)]) == null ? void 0 : _h.metaData.fax}</div></div></div></div></div><div class="footer-container" data-v-205fc697>`);
      _push(ssrRenderComponent(_component_Footer, { class: "footer" }, null, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-205fc697"]]);

export { contact as default };
//# sourceMappingURL=contact-09cda1ce.mjs.map
