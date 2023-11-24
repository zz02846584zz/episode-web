import { a as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { r as request } from './request.mjs';
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
import 'axios';

const info_post = defineEventHandler(async (event) => {
  const { id } = await readBody(event);
  try {
    const {
      code,
      message = "",
      data = {}
    } = await request.post("/page/index/info", { id });
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

export { info_post as default };
//# sourceMappingURL=info.post2.mjs.map
