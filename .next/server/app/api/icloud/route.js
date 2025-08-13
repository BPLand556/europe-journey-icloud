/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/icloud/route";
exports.ids = ["app/api/icloud/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "?4c03":
/*!***********************!*\
  !*** debug (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ficloud%2Froute&page=%2Fapi%2Ficloud%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ficloud%2Froute.ts&appDir=%2FUsers%2Fbenlandry%2FDownloads%2Feurope-journey-icloud%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbenlandry%2FDownloads%2Feurope-journey-icloud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ficloud%2Froute&page=%2Fapi%2Ficloud%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ficloud%2Froute.ts&appDir=%2FUsers%2Fbenlandry%2FDownloads%2Feurope-journey-icloud%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbenlandry%2FDownloads%2Feurope-journey-icloud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_benlandry_Downloads_europe_journey_icloud_app_api_icloud_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/icloud/route.ts */ \"(rsc)/./app/api/icloud/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/icloud/route\",\n        pathname: \"/api/icloud\",\n        filename: \"route\",\n        bundlePath: \"app/api/icloud/route\"\n    },\n    resolvedPagePath: \"/Users/benlandry/Downloads/europe-journey-icloud/app/api/icloud/route.ts\",\n    nextConfigOutput,\n    userland: _Users_benlandry_Downloads_europe_journey_icloud_app_api_icloud_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/icloud/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZpY2xvdWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmljbG91ZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmljbG91ZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmJlbmxhbmRyeSUyRkRvd25sb2FkcyUyRmV1cm9wZS1qb3VybmV5LWljbG91ZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZiZW5sYW5kcnklMkZEb3dubG9hZHMlMkZldXJvcGUtam91cm5leS1pY2xvdWQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3dCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXVyb3BlLWpvdXJuZXkvP2YwNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2JlbmxhbmRyeS9Eb3dubG9hZHMvZXVyb3BlLWpvdXJuZXktaWNsb3VkL2FwcC9hcGkvaWNsb3VkL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9pY2xvdWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9pY2xvdWRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2ljbG91ZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9iZW5sYW5kcnkvRG93bmxvYWRzL2V1cm9wZS1qb3VybmV5LWljbG91ZC9hcHAvYXBpL2ljbG91ZC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvaWNsb3VkL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ficloud%2Froute&page=%2Fapi%2Ficloud%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ficloud%2Froute.ts&appDir=%2FUsers%2Fbenlandry%2FDownloads%2Feurope-journey-icloud%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbenlandry%2FDownloads%2Feurope-journey-icloud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/icloud/route.ts":
/*!*********************************!*\
  !*** ./app/api/icloud/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   revalidate: () => (/* binding */ revalidate)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var icloud_shared_album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! icloud-shared-album */ \"(rsc)/./node_modules/icloud-shared-album/build/index.js\");\n/* harmony import */ var icloud_shared_album__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(icloud_shared_album__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Revalidate every 15 minutes (900 seconds) on Vercel\nconst revalidate = 900;\nasync function GET() {\n    try {\n        const token = process.env.ICLOUD_SHARED_ALBUM_TOKEN;\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing ICLOUD_SHARED_ALBUM_TOKEN\"\n            }, {\n                status: 500\n            });\n        }\n        const data = await (0,icloud_shared_album__WEBPACK_IMPORTED_MODULE_1__.getImages)(token);\n        const photos = (data.photos || []).map((p)=>{\n            const heights = Object.keys(p.derivatives || {}).map((h)=>parseInt(h, 10)).sort((a, b)=>b - a);\n            const key = String(heights[0] || \"\");\n            const d = p.derivatives?.[key];\n            return {\n                url: d?.url || null,\n                width: d?.width || null,\n                height: d?.height || null,\n                caption: p.caption || \"\",\n                id: p.guid || Math.random().toString(36).slice(2),\n                ts: p.ts || null\n            };\n        }).filter((x)=>!!x.url);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            metadata: data.metadata,\n            photos\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: e?.message || \"Failed to fetch iCloud album\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ljbG91ZC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNLO0FBRWhELHNEQUFzRDtBQUMvQyxNQUFNRSxhQUFhLElBQUk7QUFFdkIsZUFBZUM7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MseUJBQXlCO1FBQ25ELElBQUksQ0FBQ0gsT0FBTztZQUNWLE9BQU9KLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBb0MsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3pGO1FBQ0EsTUFBTUMsT0FBTyxNQUFNViw4REFBU0EsQ0FBQ0c7UUFFN0IsTUFBTVEsU0FBUyxDQUFDRCxLQUFLQyxNQUFNLElBQUksRUFBRSxFQUFFQyxHQUFHLENBQUMsQ0FBQ0M7WUFDdEMsTUFBTUMsVUFBVUMsT0FBT0MsSUFBSSxDQUFDSCxFQUFFSSxXQUFXLElBQUksQ0FBQyxHQUFHTCxHQUFHLENBQUNNLENBQUFBLElBQUtDLFNBQVNELEdBQUcsS0FBS0UsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQUlBLElBQUVEO1lBQ3pGLE1BQU1FLE1BQU1DLE9BQU9WLE9BQU8sQ0FBQyxFQUFFLElBQUk7WUFDakMsTUFBTVcsSUFBSVosRUFBRUksV0FBVyxFQUFFLENBQUNNLElBQUk7WUFDOUIsT0FBTztnQkFDTEcsS0FBS0QsR0FBR0MsT0FBTztnQkFDZkMsT0FBT0YsR0FBR0UsU0FBUztnQkFDbkJDLFFBQVFILEdBQUdHLFVBQVU7Z0JBQ3JCQyxTQUFTaEIsRUFBRWdCLE9BQU8sSUFBSTtnQkFDdEJDLElBQUlqQixFQUFFa0IsSUFBSSxJQUFJQyxLQUFLQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxLQUFLLENBQUM7Z0JBQy9DQyxJQUFJdkIsRUFBRXVCLEVBQUUsSUFBSTtZQUNkO1FBQ0YsR0FBR0MsTUFBTSxDQUFDQyxDQUFBQSxJQUFLLENBQUMsQ0FBQ0EsRUFBRVosR0FBRztRQUV0QixPQUFPM0IscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFZ0MsVUFBVTdCLEtBQUs2QixRQUFRO1lBQUU1QjtRQUFPO0lBQzdELEVBQUUsT0FBTzZCLEdBQVE7UUFDZixPQUFPekMscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFQyxPQUFPZ0MsR0FBR0MsV0FBVztRQUErQixHQUFHO1lBQUVoQyxRQUFRO1FBQUk7SUFDbEc7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V1cm9wZS1qb3VybmV5Ly4vYXBwL2FwaS9pY2xvdWQvcm91dGUudHM/Y2E5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldEltYWdlcyB9IGZyb20gXCJpY2xvdWQtc2hhcmVkLWFsYnVtXCI7XG5cbi8vIFJldmFsaWRhdGUgZXZlcnkgMTUgbWludXRlcyAoOTAwIHNlY29uZHMpIG9uIFZlcmNlbFxuZXhwb3J0IGNvbnN0IHJldmFsaWRhdGUgPSA5MDA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdG9rZW4gPSBwcm9jZXNzLmVudi5JQ0xPVURfU0hBUkVEX0FMQlVNX1RPS0VOO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgSUNMT1VEX1NIQVJFRF9BTEJVTV9UT0tFTlwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRJbWFnZXModG9rZW4pO1xuXG4gICAgY29uc3QgcGhvdG9zID0gKGRhdGEucGhvdG9zIHx8IFtdKS5tYXAoKHA6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaGVpZ2h0cyA9IE9iamVjdC5rZXlzKHAuZGVyaXZhdGl2ZXMgfHwge30pLm1hcChoID0+IHBhcnNlSW50KGgsIDEwKSkuc29ydCgoYSxiKT0+Yi1hKTtcbiAgICAgIGNvbnN0IGtleSA9IFN0cmluZyhoZWlnaHRzWzBdIHx8IFwiXCIpO1xuICAgICAgY29uc3QgZCA9IHAuZGVyaXZhdGl2ZXM/LltrZXldO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBkPy51cmwgfHwgbnVsbCxcbiAgICAgICAgd2lkdGg6IGQ/LndpZHRoIHx8IG51bGwsXG4gICAgICAgIGhlaWdodDogZD8uaGVpZ2h0IHx8IG51bGwsXG4gICAgICAgIGNhcHRpb246IHAuY2FwdGlvbiB8fCBcIlwiLFxuICAgICAgICBpZDogcC5ndWlkIHx8IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLFxuICAgICAgICB0czogcC50cyB8fCBudWxsXG4gICAgICB9O1xuICAgIH0pLmZpbHRlcih4ID0+ICEheC51cmwpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWV0YWRhdGE6IGRhdGEubWV0YWRhdGEsIHBob3RvcyB9KTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGU/Lm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZmV0Y2ggaUNsb3VkIGFsYnVtXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEltYWdlcyIsInJldmFsaWRhdGUiLCJHRVQiLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJJQ0xPVURfU0hBUkVEX0FMQlVNX1RPS0VOIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZGF0YSIsInBob3RvcyIsIm1hcCIsInAiLCJoZWlnaHRzIiwiT2JqZWN0Iiwia2V5cyIsImRlcml2YXRpdmVzIiwiaCIsInBhcnNlSW50Iiwic29ydCIsImEiLCJiIiwia2V5IiwiU3RyaW5nIiwiZCIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiY2FwdGlvbiIsImlkIiwiZ3VpZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwidHMiLCJmaWx0ZXIiLCJ4IiwibWV0YWRhdGEiLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/icloud/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/axios","vendor-chunks/icloud-shared-album","vendor-chunks/follow-redirects","vendor-chunks/lodash.chunk"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ficloud%2Froute&page=%2Fapi%2Ficloud%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ficloud%2Froute.ts&appDir=%2FUsers%2Fbenlandry%2FDownloads%2Feurope-journey-icloud%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fbenlandry%2FDownloads%2Feurope-journey-icloud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();