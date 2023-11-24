import { u as useHttpPost, _ as __nuxt_component_0, a as __nuxt_component_3 } from './useHttp-d4b068f5.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, ref, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_2 } from './CTA-158c7193.mjs';
import { u as useHead, a as useI18n, b as useRoute } from '../server.mjs';
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

const _sfc_main$1 = {
  __name: "MediaPlayer",
  __ssrInlineRender: true,
  props: ["video", "cover"],
  setup(__props) {
    const props = __props;
    const playerOptions = ref({
      playbackRates: [0.7, 1, 1.5, 2],
      autoplay: true,
      controls: true,
      muted: false,
      loop: false,
      preload: "auto",
      language: "zh-TW",
      aspectRatio: "16:7",
      fluid: true,
      sources: [
        {
          type: "video/mp4",
          src: props.video
        }
      ],
      poster: props.cover,
      notSupportedMessage: "\u6B64\u89C6\u9891\u6682\u65E0\u6CD5\u64AD\u653E\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
      controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: false,
        fullscreenToggle: true
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_video_player = resolveComponent("video-player");
      _push(ssrRenderComponent(_component_video_player, mergeProps({
        class: "vjs-custom-skin",
        options: unref(playerOptions)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MediaPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-51afafe5"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Project"
    });
    const { locale } = useI18n();
    const route = useRoute();
    const slug = route.params.slug;
    const { data: project } = ([__temp, __restore] = withAsyncContext(() => useHttpPost("project-page", "/project/info", { body: { slug } })), __temp = await __temp, __restore(), __temp);
    console.log(project);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_MediaPlayer = __nuxt_component_1;
      const _component_CTA = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project" }, _attrs))} data-v-7499fff6>`);
      _push(ssrRenderComponent(_component_Header, { class: "header" }, null, _parent));
      _push(`<main data-v-7499fff6><div class="line-container" data-v-7499fff6><!--[-->`);
      ssrRenderList(7, (n) => {
        _push(`<div class="line" data-v-7499fff6><span data-v-7499fff6></span></div>`);
      });
      _push(`<!--]--></div><div class="page-content" data-v-7499fff6><div class="video" data-v-7499fff6>`);
      if (unref(project)) {
        _push(ssrRenderComponent(_component_MediaPlayer, {
          video: unref(project).video,
          cover: unref(project).cover
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="subtitle" data-v-7499fff6><!--[-->`);
      ssrRenderList("PROJECT".split(""), (char, index) => {
        _push(`<span data-v-7499fff6>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></div><div class="title" data-v-7499fff6><!--[-->`);
      ssrRenderList(unref(project)[unref(locale)].title.split(""), (char, index) => {
        _push(`<span data-v-7499fff6>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></div><div class="introduction" data-v-7499fff6>${unref(project)[unref(locale)].intro}</div></div><div class="cta-container" data-v-7499fff6>`);
      _push(ssrRenderComponent(_component_CTA, null, null, _parent));
      _push(`</div><div class="footer-container" data-v-7499fff6>`);
      _push(ssrRenderComponent(_component_Footer, { class: "footer" }, null, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7499fff6"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-060c6b5f.mjs.map
