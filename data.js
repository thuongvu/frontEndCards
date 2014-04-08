var cards = [
	{
		"topic"    : "general",
		"question" : "semantic html",
		"answer"   : "Using html markup to reinforce meaning of information in webpages rather than merely define its presentation"
	},
	{
		"topic"    : "general",
		"question" : "optimize",
		"answer"   : "file concat, minification, cdn, caching, sprites, minimize DNS lookups, redirects, no bad reqyests, avoid document.write, prefer asynchronous resources, parallelize downloads across hostnames, "
	},
	{
		"topic"    : "general",
		"question" : "Why is serving resources from multiple domains better?",
		"answer"   : "Stick to 1-5 hosts for DNS-lookup optimization, but you can indice parallel downloads, as a browser allows 4 concurrent connections per hostname, that means 4 resources per RTT"
	},
	{
		"topic"    : "general",
		"question" : "Differences between long-polling, websockets and sse?",
		"answer"   : 
		"http: 1. client requests page. 2 server calculates response. 3 server responds \n ajax polling: 1. client sends http request. 2. request page executes JS, request resource from server at intervals, sends http \n websockets: 1. client requests http. 2. request page executes JS, opens connection with server. 3. server client bilateral realtime. \n sse (server send events): 1. client requests http. 2. request page JS opens connection to server. 3. sever sends event to client whenever new info available.  \n webrtc: tcp/udp/agnostic.  peer to peer transport that uses a centalized server to establish connections"
	},
	{
		"topic"    : "general",
		"question" : "FOUC",
		"answer"   : "Put css in the head, wait for everything to load while keeping e verything blank white"
	},
	{
		"topic"    : "html",
		"question" : "What does the doctype do?",
		"answer"   : "It tells the browser to render the page in standards-compliant mode, rendering html, css, dom"
	},
	{
		"topic"    : "html",
		"question" : "Strict mode vs quirks mode",
		"answer"   : "In standards-compliant mode, browser rendering follows the html/css specs, whereas in quirks mode, the browder rendering ollows nonstandard behavior for backwards compatibility"
	},
	{
		"topic"    : "html",
		"question" : "Serving xhtml pages, yay or nay",
		"answer"   : "Nay, does not have good browser support + html5 spec offers so much more"
	},
	{
		"topic"    : "html",
		"question" : "Concerns of multilingual websites",
		"answer"   : "-text spacing, eg, german and russian text = takes up more space \n left-right, right-left, top-bottom"
	},
	{
		"topic"    : "html",
		"question" : "how to server multilingual websites",
		"answer"   : "-set language in html tag for screen readers \n - lang attribute on html elements \n - character encoding in unicode"
	},
	{
		"topic"    : "html",
		"question" : "What is the data attribute good for?",
		"answer"   : "It allows for the extensibility for data that should be in the html, but not visible.  Data- attributes allow you to store extra information on semantic html elements without polluting class names, eg. <article data-columns='3'  data-parent='cars'...  Then you can access these with getAttribute() in JS"
	},
	{
		"topic"    : "html",
		"question" : "What are the building blocks of html5?",
		"answer"   : "html, css, dom, javascript. \n - interaction/events = geolocation \n -storage = web api \n real time communication = websockets, xmlhttprequest \n html/dom = aria, classlist, selectorsapi, dom parsing \n performance = web workers, \n security = cors \n foundation = http, uri, tls, cookies, unicode, mime, encoding"
	},
	{
		"topic"    : "html",
		"question" : "Differences between cookies, sessionStorage, and localStorage",
		"answer"   : "-html5web storage = umbrella term client side data storage \n -localstorage = persistant and scoped to domain, until your app deletes it or user deletes it \n -session storage = only available until the window that created it is open \n cookies are key-value storage to be read server-side"
	},
	{
		"topic"    : "css",
		"question" : "what is a css reset?",
		"answer"   : "It reduces browser inconsistencies like line heights, margins, font sizs, headings.  It styles everything to 0: margiin, padding, border. font size 100%. font: inheit, vertical-align: baseline"
	},
	{
		"topic"    : "css",
		"question" : "normalize.css",
		"answer"   : "It reduces browser inconsistencies by preserving useful styles rather than setting everything to 0.  Button styling in iOs, font inheritance in form elements, and so on"
	},
	{
		"topic"    : "",
		"question" : "",
		"answer"   : ""
	},
];
// {
// 	"topic"    : "",
// 	"question" : "",
// 	"answer"   : ""
// },

















