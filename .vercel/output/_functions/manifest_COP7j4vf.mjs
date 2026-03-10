import 'piccolore';
import { k as decodeKey } from './chunks/astro/server_BqDKN7hD.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bjwmr9wT.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/user/GIOIA/","cacheDir":"file:///home/user/GIOIA/node_modules/.astro/","outDir":"file:///home/user/GIOIA/dist/","srcDir":"file:///home/user/GIOIA/src/","publicDir":"file:///home/user/GIOIA/public/","buildClientDir":"file:///home/user/GIOIA/dist/client/","buildServerDir":"file:///home/user/GIOIA/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"attivita/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/attivita","isIndex":false,"type":"page","pattern":"^\\/attivita\\/?$","segments":[[{"content":"attivita","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/attivita.astro","pathname":"/attivita","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"chi-siamo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/chi-siamo","isIndex":false,"type":"page","pattern":"^\\/chi-siamo\\/?$","segments":[[{"content":"chi-siamo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chi-siamo.astro","pathname":"/chi-siamo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contatti/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contatti","isIndex":false,"type":"page","pattern":"^\\/contatti\\/?$","segments":[[{"content":"contatti","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contatti.astro","pathname":"/contatti","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"donazioni/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/donazioni","isIndex":false,"type":"page","pattern":"^\\/donazioni\\/?$","segments":[[{"content":"donazioni","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/donazioni.astro","pathname":"/donazioni","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.CV67MxV0.css"}],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/user/GIOIA/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/user/GIOIA/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/user/GIOIA/src/pages/attivita.astro",{"propagation":"none","containsHead":true}],["/home/user/GIOIA/src/pages/chi-siamo.astro",{"propagation":"none","containsHead":true}],["/home/user/GIOIA/src/pages/contatti.astro",{"propagation":"none","containsHead":true}],["/home/user/GIOIA/src/pages/donazioni.astro",{"propagation":"none","containsHead":true}],["/home/user/GIOIA/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/attivita@_@astro":"pages/attivita.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/chi-siamo@_@astro":"pages/chi-siamo.astro.mjs","\u0000@astro-page:src/pages/contatti@_@astro":"pages/contatti.astro.mjs","\u0000@astro-page:src/pages/donazioni@_@astro":"pages/donazioni.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_COP7j4vf.mjs","/home/user/GIOIA/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BCiPl4n4.mjs","/home/user/GIOIA/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/user/GIOIA/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CJ-4k4EK.mjs","/home/user/GIOIA/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.nddpIU-W.js","@astrojs/react/client.js":"_astro/client.BJGBxOWp.js","/home/user/GIOIA/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.Cy9YVjgt.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/user/GIOIA/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"menu-toggle\"),a=document.getElementById(\"mobile-menu\"),s=document.getElementById(\"bar1\"),n=document.getElementById(\"bar2\"),i=document.getElementById(\"bar3\");t?.addEventListener(\"click\",()=>{const d=a?.classList.toggle(\"hidden\")===!1;t.setAttribute(\"aria-expanded\",d?\"true\":\"false\");const e=!a?.classList.contains(\"hidden\");t.setAttribute(\"aria-expanded\",String(e)),t.setAttribute(\"aria-label\",e?\"Chiudi menu\":\"Apri menu di navigazione\"),e?(s?.classList.add(\"rotate-45\",\"translate-y-2\"),n?.classList.add(\"opacity-0\"),i?.classList.add(\"-rotate-45\",\"-translate-y-2\")):(s?.classList.remove(\"rotate-45\",\"translate-y-2\"),n?.classList.remove(\"opacity-0\"),i?.classList.remove(\"-rotate-45\",\"-translate-y-2\"))});"]],"assets":["/_astro/keystatic-astro-page.CV67MxV0.css","/_astro/attivita.BdRfEmoK.css","/_astro/client.BJGBxOWp.js","/_astro/index.BbrLBU_f.js","/_astro/keystatic-page.nddpIU-W.js","/images/blog/placeholder.svg","/attivita/index.html","/blog/index.html","/chi-siamo/index.html","/contatti/index.html","/donazioni/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"rsyStJCyjU5CarfZsZDfawq2IBduD7rLvokR18Wqthw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
