export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.gUz2ihZM.js",app:"_app/immutable/entry/app.ru55E7OL.js",imports:["_app/immutable/entry/start.gUz2ihZM.js","_app/immutable/chunks/BwBAkA0z.js","_app/immutable/chunks/IFBgyxxx.js","_app/immutable/chunks/B3AvFPL-.js","_app/immutable/entry/app.ru55E7OL.js","_app/immutable/chunks/IFBgyxxx.js","_app/immutable/chunks/B0-Y8MfQ.js","_app/immutable/chunks/DcefS2WK.js","_app/immutable/chunks/BxtQUBLj.js","_app/immutable/chunks/B3AvFPL-.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
