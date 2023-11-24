import { r as request } from './request.mjs';
import { a as defineEventHandler } from './nitro/node-server.mjs';
import 'axios';
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

const list_post = defineEventHandler(async () => {
  try {
    const {
      code,
      message = "",
      data = {}
    } = await request.post("/project/index/list");
    return { error: code !== 1e3, code, message, data };
  } catch (err) {
    const { code, message = "" } = err;
    return { error: code !== 1e3, code, message };
  }
});

export { list_post as default };
//# sourceMappingURL=list.post.mjs.map
