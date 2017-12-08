   ~   ~
+['0 . 0']+
     -

{ re:
    { id:  "web.0.1@ionify"
    , is:  "implicit object notations invented for your web"
    , by: ["mike.lee@ionify", "team@ionify"]
    , at:  "2017.12.05-07...2007.09-04"
        ,
      stories:
        [ /note: .../
        , /todo: Add tests for web@ionify + its actions/
        , /todo: Implement ~get,in,then/
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
    , /todo: Move +get's code here + update +get to use this/
    , /todo: Do +on:ion.id; faster than .onload/
    ]
    ,
  "get then":
    function getThen (ion)
      { return getThen.ion.get (ion)
      }
}
;