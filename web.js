   ~   ~
+['0 . 0']+
     -

{ re:
    { id:  "web.0.1@ionify"
    , is:  "implicit object notations invented for your web"
    , by: ["mike.lee@ionify", "team@ionify"]
    , at:  "2017.12.13-08...2007.09-04"
        ,
      stories:
        [ /note: .../
        , /todo: Implement ~get,in,then/
        , /todo: Add tests for web@ionify + its actions/
        ]
    },


  debug
    : false
    ,

  on:
    [ ["get", "in", "then"]
    , ["get", "in"]
    , ["get", "then"]
    ,  "get"
    ],

  host
    : true
    ,


  valueOf:
    function ionifyWeb ()
      {   var web = this
      ;   delete web.valueOf
    //;   web.watch  ()
      ;   web.ready  ()
      ;   web.locate ()
      ;   web.get    ({get:"on.object@ionify", then:web})

      ;   var and_activate_ion_aeon_self_and_ions
              = { get
                :   ["ion@ionify", "aeon@ionify"]
                , in
                :    "order"
                , then
                :   [ web, {get:"ions"}]
                }

    //;   web.get (and_activate_ion_aeon_self_and_ions)
      },


  watch:
    function watch ()
      { onerror =
           function onUncaughtError (message, url, line, column, error)
             { ~{warn : [message, error && error.stack]}
               ~{debug: [message, "errorstack", url, line, column, error]}
               return true
             }
      },


  ready:
    function ready ()
      {   var error = this.errors
      ;   if (typeof document == "undefined") throw new Error (error.noDOM)
      ;   return true
      },


  errors:
    { noDOM: "web@ionify needs the DOM: Document Object Module API"
    },


  locateStories:
    [ "todo: Sense /ions/ path, don't hardcode it"
    , /.../
    ]
    ,
  locate:
    function locate ()
      { var script  =[  document.currentScript ,,]
                    ||  document.scripts
                    ||  document.head.getElementsByTagName ("script")
          , path    =   script && script [script.length - 2].src
          ; path    &&  (this.get$.PATH.ionify = path.replace (/(.+)\/.+$/, "$1/ions/"))
      },


  getStories:
    [ 'note: +{get: "ion.id" || "./script.js"}'
    , /todo: Keep updating get$.PATH with @domains + their paths/
    , /todo: Handle URLs with existing file extension(s)/
    , /todo: Move got() + .then code to +get.then/
    , "todo: Sense ion ids vs. script paths: ./script.js"
    , /todo: Use +method@ionify to define +get/
    , /todo: .../
    ]
    ,
  get$:
    { HTTP: (/^\w+:\/\//)                       // matches URL protocols
    ,   ID: (/(?:(.*)@(\D*)|(\D*))(\d+.*)*/)    // matches ((api)@(host.) | (api.)) version#
    , NAME: (/(.*)\.$/)                         // matches (api).         | (host).
    , PATH:
          { ionify    : "https://rawgit.com/ionify/ionify/public/"
          , undefined : "./"
          , null      : "./"
          , ""        : "./"
          }
    , TYPE: ".js"
    ,  EXT: (/(\.\D*$)/)    // matches file extensions
    ,  URL:
        function getURL (match, name, space, file, version, offset, string)
          {   var get$  = getURL.ion
          ,       ext   = get$.EXT.exec (match)
          ;       name  = name  && ( name.match (get$.NAME) || [, name])[1]
          ;       space = space && (space.match (get$.NAME) || [,space])[1]
          ;       file  = file  && ( file.match (get$.NAME) || [, file])[1]

          ;   return get$.PATH [space] + (name || file) + (version || "")
                                       + /*(ext ? ext [1] :*/(get$.TYPE)
          }
    }
    ,
  get:
    function get (ion)
      { var get$          = (get.ion || (get.ion = this)).get$
          , url           = ion.get
          , act           = ion.then
          ; get$.URL.ion  = get$
          ; get$.PATH           || (get$.PATH = this.path.ionify)
          ; Array.isArray (url) || (      url = [url])
          ; Array.isArray (act) || (      act = [act])
          ;

        for (var last=url.length, next=-1; ++next < last;)
          { function got ()
              {  var then = got.then
              ~  {debug: ["got ",got.path," doing ",then,"..."]}
              ;  typeof then === "string" ? ~ion[then] : ~then
              }

            var script  = document.createElement ("script")
              , then    = act [next] //|| (((then = {})[url [next]] = ion), then)

              , path    = url [next].match   (get$.HTTP)
                        ? url [next]
                        : url [next].replace (get$.ID, get$.URL)

              ; then && (got.then = then) && (script.onload = got)
              ; script.type   = "text/javascript"
              ; script.async  = ion.now !== true
              ; script.src    = got.path  = path
              ; document.head.appendChild (script)
              ~ {debug: ["get",path,"..."]}
          }
      },


  "get then stories":
    [ 'note: +{get: ["ion.id" || "./script.js"], then: ["actions"]}'
    ,(/todo: Move +get's code here + update +get to use this/)
    , /todo: Do +on:ion.id; faster than .onload/
    ]

, "get then"
:   function getThen (ion)
      { return getThen.ion.get (ion)
      }

, "get in then"
:   function getInThen (ion)
      { var  get = ion.get
          ,  how = ion.in
          , then = ion.then
          
      }


, getContainer
:   function getContainer (element)
      { if (!element           ) return window.document
      ; if ( element.write     ) return element
      ; if ( element.document  ) return element.document
      ; if ( element.parentNode) return getContainer (element.parentNode)
      ; return window.document
      }


, loadScript
:   function loadScript (ion)
      { var code = ion.code
          ,  url = ion.url
          
          ~/todo: use ajile.test.inlineLoader to load inline code!/
          
        if (!url && !code) return ~{warn:"No inline or external script specified"}
        
        var   then = ion.then
          ,  async = ion.async
          , script = document.createElement ("script")
          ,   path = url [next].match   (get$.HTTP)
                   ? url [next]
                   : url [next].replace (get$.ID, get$.URL)

          ; then && (got.then = then) && (script.onload = got)
          ; script.type   = "text/javascript"
          ; script.async  = ion.async !== true
          ; script.src    = url
          ; document.head.appendChild (script)
      }
      
, loadScriptAJILE
:   function Load (url, container, code, defer, title, type, language)
   {
      if (!(container = getContainer (container)))
         { log ("ERROR :: Container not found. Unable to load:\n\n[" + url + "]", arguments)
         ; return false
         }

      if (url)
         {  modulePaths.add  (unescape     (url))
         ;  REFRESH && (url = setRefresher (url))
         }

      if ( !language || !type)
         {  language = "JavaScript"
         ;  type     = "text/javascript"
         }

      (defer == undefined) && (defer = false);

      var script;

      isDOM && !isICab && (script = container.createElement("script"));

      if (!script)
         {  code    && (code = "setTimeout ('"+code+"', 0);")  //¿bug: runs before script@url, use inlineLoader?
         ;  LoadSimple (url, container, code, defer, title, type, language)
         ;  return false
         }

      true      && (script.async    = !!defer   ); //HACK.API: async and defer have different purposes!
      defer     && (script.defer    =   defer   );
      language  && (script.language =   language);
      title     && (script.title    =   title   );
      type      && (script.type     =   type    );

      if (url)
         {  log ((url +"..."), arguments)
         ;  ( isWebKit || !(isIE || isOpera))   && (script.src = url)
         ;  getMainLoader  (container).appendChild (script)
         ;  (!isWebKit ||   isIE || isOpera)    && (script.src = url)
         ;  log ((url +"...DONE"), arguments)
         }

      if (!code) return true;

      if (url)
         { Load (undefined, container, code, defer, title, type, language)
         ; return true
         }

      (typeof script.canHaveChildren == "undefined" || script.canHaveChildren)
         ?    script.appendChild     (container.createTextNode (code))
         :  (!script.canHaveChildren && (script.text         =  code))
         ;

      getMainLoader (container).appendChild (script);
      return false;
   }

, loadScriptDOM0
:   function LoadSimple (src, container, code, defer, title, type, language)
   {
      if (!(container = getContainer (container || window)))
         return;

      src && log ("...\t:: LoadSimple [ " + src + " ]", arguments)

      var scriptTag = '<'+"script"
                    + (defer   ?  ' defer="defer"'                   : '' )
                    + (language? (' language="'  + language + '"' )  : '' )
                    + (title   ? (' title="'     + title    + '"' )  : '' )
                    + (type    ? (' type="'      + type     + '"' )  : '' )
                    + (src     ? (' src="'       + src      + '">')  : '>')
                    + (code    ? (  src?''       : code     + ';' )  : '' )
                    + "<\/script>\n"
                    ;

      container.write     (scriptTag);
      var load;
      src  &&  log        ("DONE\t:: LoadSimple [ " + src + " ]", arguments);
      code && (load     =  LoadSimple.code = !LoadSimple.code);
      load &&  LoadSimple (null, container, code, defer, title, type, language);
   }
}
;