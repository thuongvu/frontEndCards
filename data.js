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
		"topic"    : "css",
		"question" : "Floats:",
		"answer"   : "A float is a box shifted to the left or right of the current line.  It allows content to float aong its side, or be prohibited, by the clear property.  If you float an element, it will be sent to the left-most boundary of its parent element.  Floated elements are laid out according to normal flow, then taken out of normal flow, then sent left/right.  \n Cin = collapsing effect on parent container, and this is fixed by clearing the float."
	},
	{
		"topic"    : "css",
		"question" : "z-index",
		"answer"   : "determines the stack oevel of an html element, the position on the z axis.  The higher the value, the closer to the top.  This only works on positioned elements, not static. \n Normal stacking order goes background --> \n elements with negative z index --> \n nonpositioned, non floated, block elements --> \n non-positioned floated elements --> \n floated elements --> \n inline elements --> \n positioned elements"
	},
	{
		"topic"    : "css",
		"question" : "clear",
		"answer"   : "1. <div style='clear:both'></div> , but the con is that this creates a new html element \n 2. on parent element, set overflow: hidden/auto, and this will expand it to contain floats \n 3. pseudo property. generate pseudo element and set its display to table.  what this does is sets a new block formatting context, which means :before prevents collapse before, and :after has a clear:both to clear the floats"
	},
	{
		"topic"    : "css",
		"question" : "sprites",
		"answer"   : "Sprites are a way to speed up page-load times by combining images into one big image.  Then using the background-position property in css, define the exact position of the image to be displayed.  \n One might use this on a hover over a button.  Before, this might cause the user to have to do another http request, but with sprites, we just have one http request.  \n We can use sass/compass to import a folder of icons, and then compass gives you a list of css classes"
	},
	{
		"topic"    : "css",
		"question" : "image replacement",
		"answer"   : "border: 0 \n font: 0/0 a \n text-shadow: none \n color:transparent \n reduce font-size and line-height to 0. a value acts as a font family, because browsers don't accept 0/0. text-shadow makes sure that inherited text shadow is removed, overwise it will show over image.  color is transparent for brwosers that dont force text to be invisible"
	},
	{
		"topic"    : "css",
		"question" : "Graceful degradation vs progressive enhancement",
		"answer"   : "PE = make a baseline experience for all, and then enhance it for anyone with the latest browser \n GD = write fallbacks that make the website still functional for people with old browsers"
	},
	{
		"topic"    : "css",
		"question" : "accessibility",
		"answer"   : "aria attributes, like role='navigation', states like 'aria-checked', 'aria-disabled'"
	},
	{
		"topic"    : "css",
		"question" : "media queries",
		"answer"   : "Media query allows content to be tailored to a range of devices and screen dimensions without changing the content itself \n - consists of a media type and at least one expression that limits the style heets' scope with either width, height, color \n eg. @media (max-width: 600){} "
	},
	{
		"topic"    : "css",
		"question" : "gotcha's",
		"answer"   : "- keep specificity in mind. no inline selectors \n - use the most specific category as possible. better to use 1 rule than 3 rules.  keep it to 2 or 3, any more is hard to override + performance \n don't qualify id's with classes or tags \n don't qualify classes with tag names \n avoid descendant selctor and child selectors.  descendant = slowest, child = slightly better \n avoid universal rules"
	},
	{
		"topic"    : "css",
		"question" : "Major features of preprocessors",
		"answer"   : "-nesting \n - variables and mixins \n - math functions \n @import"
	},
	{
		"topic"    : "css",
		"question" : "specificity",
		"answer"   : "abcd \n a = 1 if declaration comes from inline styling \n b = id attributes in a selector \n c = other attributes and pseudo classes \n d = number of elements and pseudo elements \n a browser starts processing the moment it gets a complete tag/node.  it has one element and it is trying to figure out all the rules match for the element"
	},
	{
		"topic"    : "css",
		"question" : "Implementing fonts",
		"answer"   : "@font-face { font-family: nameOfFontFamily; src: url('fontFile.ttf')}"
	},
	{
		"topic"    : "css",
		"question" : "Box model",
		"answer"   : "Every element is considered a box, with content inside, height/width, padding, margin, and the goal of the rendering engine is to deterine the size, properties, and position of these elements \n content = content of element \n padding = extend content with empty area between content and border \n border \n margin = seperate element from neighbors \n you can change the box model by setting box-sizing property. default = content-box, width/height, but NOT paddig/border/margin \n padding-box = includes content, padding \n border-box = includes content, padding, border"
	},
	{
		"topic"    : "css",
		"question" : "display",
		"answer"   : "specifies type of rendering box used for an element: eg. inline, block, block, none "
	},
	{
		"topic"    : "css",
		"question" : "block elements",
		"answer"   : "if no set with, naturally fills parent container \n can have margins/padding \n if no height set, will expand to fit child elements \n it will be placed below previous elements \n ignores vertical align \n examples include p div form header nav ul li h1"
	},	
	{
		"topic"    : "css",
		"question" : "inline elements",
		"answer"   : "flows along with text content, will not clear previous content or drop to next line like block elements \n ignores top and bottom margin settings, but will apply left and right margins/adding \n ignores width and height properties \n if floated left or right, becomes block \n subject to vertical-align property \n it is a box that acts like text \n examples include a span b em i cite mark code"
	},	
	{
		"topic"    : "css",
		"question" : "inline-block",
		"answer"   : "is a way to make elements inline, but preserve block capabilities such as setting width and height, top and bottom margins/padding \n can be used to palce multiple block elements on same horizontal line without floating them \n allow inline elemnt to have width and height while remaining inline"
	},	
	{
		"topic"    : "css",
		"question" : "positioning",
		"answer"   : "static - you can't offset properties like top, right, bottom, left.  static does not create coordinate system for child element.  think of it like blocks \n relative - allows you to offset properties.  it creates a coordinate system for child elements, relative to its parent.  if you move something out of flow, other things remain as if nothing had changed.  eg, 3 blocks, move middle box to right, top and bottom boxes will remain still.  think of it like magic blocks \n absolute - removed from normal flow.  it doesn't affect and is not affected by elements in flow.  it creates coordinate system and offset coordinates are in respect to each parent element.  can stretch element without defining width or height, but bound to parent element.  think of it like velcro \n fixed - shares rules of absolutely positioned element, except absolute positions with parent element, while fixed positions with the browser view.  it does not move. \n inherit - inherits from parent element"
	},
	{
		"topic"    : "JS",
		"question" : "Event delegation",
		"answer"   : "Event delegation takes advantage of event bubbling to assign a single event handler to manage all elements of a partcular type.  For example, the click event, bubles up all the way to the document level.  Therefore it's possible to assign one onclick event handler for an entire page instead of one per each clickable element.  Then we check the event target to get the reference to the clicked node, then we can check the id property to determine the approciate action.  \n Pros \n the document object is immediately available and can have event ahndlers assigned right away, no need to wait for domcontentloaded or load events.  \n less event handlers = less time && less DOM references = less memory usage"
	},
	{
		"topic"    : "JS",
		"question" : "this",
		"answer"   : "This holds the value of the object that invokes the function where this is used.  If not set, it is bound to the window object, or in strict mode, undefined. It is not assigned value until runtime.  \n You have to explicitly set this when \n 1. in a callback. \n 2. closure accessing otuer function's this, must set it outside. \n 3. when a method is assigned to a var. \n 4. when borrowing methods. \n use call/bind/apply so that you can set the value of this explicitly.  when you use the 'new' keyword, it is bound to the instance.  "
	},
	{
		"topic"    : "JS",
		"question" : "prototypal inheritance",
		"answer"   : "We use Object.create(), pass in an object that we want to inherit from, as an argument.  \n eg. var anotherPerson = Object.create(person);  \n What Object.create() does is creates a temporary type, sets the temporary type's prototype to the object we pass in.  Therefore, on that prototype, it gets access to properties and methods of that object passed in.  Then, object.create returns an instance of the new temporary type we created.  "
	},
	{
		"topic"    : "JS",
		"question" : "Testing javascript",
		"answer"   : "Avoid singletons, as they have state pollution between tests"
	},
	{
		"topic"    : "JS",
		"question" : "Why doesn't this work as an iife? function foo() {}();",
		"answer"   : "When the interpreter encounters the function keyword, it treats it as a function declaration, and not a function expression.  If you wrap it in parentheses, like so, it would be treated as a function expression.  (function foo(){})"
	},
	{
		"topic"    : "JS",
		"question" : "What is the difference between null, undefined, and undeclared?  How do you check?",
		"answer"   : "Null is an empty object pointer. \n undefined = when a variable is declared (eg, using var), the var is not initialized.  its value is set to undefined.  undefined is a derivative of null \n both undefined and undeclared have a typeof 'undefined' \n null and undefined are the same value, but different types. \n null == undefined // true \n null === undefined // false \n you should use null when an object is expected but not available, but never explicitly set value of var to undefined, it's already automatically assigned that"
	},
	{
		"topic"    : "JS",
		"question" : "Closures",
		"answer"   : "Closures are functions that have access to  variables from another function's scope.  When a function is called, an execution context is created, and its scope chain is created.  The activation object for the function is initialized with values for arguments and any named arguments.  The outer function's activation object is the second object inthe scope chain.  This continues until the scope chain ends at the global execution context.  Its scope chain is built up by copying the objects in the function's scope property.  \n Properties \n It has access to the outer function's vars even after the outer function returns. \n It stores references to the outer function's variables, so it can change it.  \n Uses \n callbacks \n private vars, public methods \n usually \n a function's scope and vars are destroyed when a function has finished executing \n when a closure is returned from that function, its scope remains in memory until closure no longer exists \n CON: closures maintain extra scopes in memory, so overusing may increase memory consumption"
	},
	{
		"topic"    : "JS",
		"question" : "Use case for anonymous function",
		"answer"   : "IIFE, in which a function is created and called immediately, executing the code within but not leaving a reference to the function.  thereby, variables inside function are destroyed, no pollution of global scope.  "
	},
	{
		"topic"    : "JS",
		"question" : "Host object vs native object",
		"answer"   : "Native objects are ones specified by ES: arguments, array, boolean, date, error, function, json, math, number, object, egexp, string \n Host objects are any objects that are not native, but those that are in the context of the execution environment: window, document, location, history, xmlhttprequest, settimeout, getelementsbytagname, queryselectorall"
	},
	{
		"topic"    : "JS",
		"question" : "Difference between function Person(){},  var person = Person(), and var person = new Person()",
		"answer"   : "the first is a function declaration.  You are defining the Person function.  \n The second is a self executing anonymous function.  \n the third one uses the new keyword, meaning it 1. creates a new object. 2. sets the object's prototype to point to the constructor's prototype object.  3 assigns the this value to point to the new object.  4. executes the code inside the constructor function, eg. sets values and methods.  5. returns the new object.  "
	},
	{
		"topic"    : "JS",
		"question" : "Call vs apply",
		"answer"   : "Both set the context for the execution of a function.  The first argument they accept is what this will point to, and for apply, it accepts an array, and call requires arguments to be seperated by commas.  apply is better when you don't know the number of arguments to pass, or want to be flexible, eg. arguments object.  Array.prototype.slice.apply(this, arguments) vs fn.call(this, arg1, arg2, arg3)"
	},
	{
		"topic"    : "JS",
		"question" : "Function.prototype.bind",
		"answer"   : "This method is used to call a function while setting an object this will be bound to when the function is invoked. \n it allows us to borrow methods easily, eg cars.showData =user.showData.bind(cars) // there is a showData method on the user, and we want to borrow it to use it with cars \n good for function currying, transforming a function with multiple aridity into a function with less aridity, aka presetting one or more parameters.  For example, greet(firstName, lastName) {return 'hello' + firstname + lastname }; \n  var greetGeorge = greet.bind('george', null);  \n greetGeorge('lucas') // 'hello george lucas' "
	},
	{
		"topic"    : "JS",
		"question" : "When would you use document.write()?",
		"answer"   : "It writes a string of text to a document stream. \n Uses: google analytics, fallback for cdn's as  you can laod a script that way \n Cons: \n if you call it after the page is done laoding, it will overwrite the page \n doesn't work with xhtml documents"
	},
	{
		"topic"    : "JS",
		"question" : "Feature detection / feature inference / ua string",
		"answer"   : "Feature detection = checks a feature for existence.  eg. if (window.XMLHTTPRequest) {} \n feature inference = infers if X exists, then Y must exist too because we are in a modern browser.  eg if geolocation exists, local storage exists. \n browser detection/ua string.  it gives us a string about browser + version, then we must map each browser to know what it supports"
	},
	{
		"topic"    : "JS",
		"question" : "ajax",
		"answer"   : "- allows a client to make requests to the server without reloading the page.  it is a way to exchange data asnc between browser and server. \n 1. make an http request. var httpRequest = new XMLHttpRequest(); \n 2. when we receve a server response, invoke something else.  httpRequest.onreadystatechange = invokeAnotherFunction; \n 3. make a request. httpRequest.open('open', url, true) //third param = is this async? \n 4. set header if needed.  httpRequest.setRequestHeader('Content-Type', 'application/blahblah'); \n 5. handle server response.  if httpRequest.readyState === 5, do X. 0 = uninitialized. 1 = loading, 2 = loaded, 3 = interactive, 4 = complete"
	},
	{
		"topic"    : "JS",
		"question" : "difference between ajax and jsonp",
		"answer"   : "jsonp allows a user to make cross domain requests \n does not make an ajax request.  it does a var newData = document.createElement('script'; \n newData.src='anotherdomian.com?callback='mycallback') \n then the jsonp response object is passed as an argument to the callback function \n script elements bypass cors limiation.  when you make a request to a server that is jsonp enabled, you pass a parameter to that server that can wrap up its response in a way our page can handle.  if the server expects a parameter called 'callback', then your request looks like http.xyz.com/sendmedata?callback=mycallback.  witout jsonp, the server might send back {foo: bar}, whereas with jsonp, the server wraps it up like: mycallback({foo: bar}).  now, when it is received on the page, it invokes the method we specified, mycallback.  mycallback = function(data) {console.log(data)}" 
	},
	{
		"topic"    : "JS",
		"question" : "Event bubbling vs capture",
		"answer"   : "Event flow refers to the order in which events are received on the page.  With IE, an event starts at the most specific element, the deepest point, and then flows upward towards the least specific node of the document, firing at every node along the way.  Eg. element div, element body, element html, document.  \n With event capture, the least specific node receives the event first and the most specific node receives the event last.  It was made to intercept the event before it reached the intended target.  In modern browsers with DOM level 2, event caturing occurs first, providing the opportunity to intercept events if necessary.  Then, the actual ttarget receives the event, which is considered to be part of the bubbling phase, and in modern browsers, fire an e vent during the capturing phase on the event target, allowing for 2 opportunities to work with the event on the target  Event capturing has a lack of support in older browsers, so use event bubbling when possible.  The final phase is bubbling, which allows for a final response to the event.  "
	},
	{
		"topic"    : "JS",
		"question" : "Attributes vs property",
		"answer"   : "Attributes are defined by html, and properties are defined by the DOM.  \n on html, attributes allow marku to have data associated with events, rendering, etc.  eg. document.body.getAttribute('className');  \n Properties are defiend on the DOM, and gives access to properties that elong on the element nodes.  \n These properties are similar to attributes, ,but are only accessible trough JS. \n A DOM element is an object, which has properties.  Seperately, it has a map of attributes defined on the elemtn.  Some of the element's properties get their initial values from attributes with same or similar names.  "
	},
	{
		"topic"    : "JS",
		"question" : "Extending built in JS objects, pros/cons",
		"answer"   : "Pros: shimming, giving es3 something like Function.prototype.bind is a good example of an appropriate time.  "
	},
];
// {
// 	"topic"    : "",
// 	"question" : "",
// 	"answer"   : ""
// },

















