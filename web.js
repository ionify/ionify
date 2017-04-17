~['• . •']+


{ re:
    { id: "web@ionify.0.1"
    , is: "implicit object notation invented for your web"
    , by:
        [ {creator: "mike.lee@iskitz", at: "2007.09-04"   }
        , {authors:     "team@ionify", at: "2017.03.22-07"}
        ],

      todo:
        [ "on: Update ionify.js to handle action grammar"
        , "qa: Add tests for web@ionify + its actions"
        ]
    },


  on:
    [ ["get", "then"  ]
    , ["get", "use" ]
    ,  "get"
    ,  "debug", "error", "info", "log", "warn"
    ],


  valueOf:
    function ionifyWeb ()
      {   delete this.valueOf

      ;   this.watch  ()
      ;   this.works  ()
      ;   this.locate ()

      ;   var initialize =
            [ this
            , { debug: !true}
            , {   log: "やた！アイオニファイログわばちり！"}
            , {hosted:  true}
            ]

      ;   this.get ({get:"on@ionify", then:[initialize]})
      },


  watch:
    function watch ()
      { onerror =
           function onUncaughtError (message, url, line, column, error)
             { ~{warn : [message, error.stack]}
               ~{debug: [message, error.stack, url, line, column, error]}
               return true
             }
      },


  works:
    function works ()
      {   var error = this.errors
      ;   if (typeof document == "undefined") throw error.noDOM
      ;   if (typeof    alert == "undefined") throw error.noAlert
      ;   return true
      },


  errors:
    { noAlert : new Error ("web@ionify.net needs the window.alert() API")
    , noDOM   : new Error ("web@ionify.net needs the DOM: Document Object Module API")
    },


  locate:
    function locate ()
      { var script  =[  document.currentScript ,,]
                    ||  document.scripts
                    ||  document.head.getElementsByTagName ("script")
          , path    =   script && script [script.length - 2].src
          ; path    &&  (this.get$.PATH.ionify = path.replace (/(.+)\/.+$/, "$1/ions/"))
      },


  getStories:
    [ /2016.11.16-08/
    , /ionify: todos: Enable inline + referrable via ion.methodStorie:[storie(s)]/
    , /ionify: todos: Disable eon during todo evaluations to allow sample code/
    , /   get: Handle URLs with existing file extension(s)/
    , /ionify: Enable ion.methods to define static method variables via method$/
    , /ionify: ion.method: Auto-set .method$ members on ion while it evaluates/
    , /ionify: Enhanced methods with static variables:/
                +
                { get:
                    { re: {id:"...", todo:["..."]}
                    , var1: 9
                    , var2: {}
                    , then: ["function1", "act1"]
                    , function1:function f1(){ f1.var1 + f1.var2 }
                    , act1:{log:"Convenient!"}
                    }
                }
    ],


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
          {   var web   = getURL.this
          ,       ext   = web.EXT.exec (match)
          ;   name      = name  && ( name.match (web.NAME) || [, name])[1]
          ;   space     = space && (space.match (web.NAME) || [,space])[1]
          ;   file      = file  && ( file.match (web.NAME) || [, file])[1]

          ;   return web.PATH [space] + (name || file) + (version || "")
                                       + /*(ext ? ext [1] :*/(web.TYPE)
          }
    },


  get:
    function get (ion)                                                          // for +{get: "script.js"}
      { var get$          = (get.this || (get.this = this)).get$
          , url           = ion.get
          , act           = ion.then
          ; get$.URL.this = get$

          ; !get$.PATH           && (get$.PATH = this.path.ionify)
          ; !Array.isArray (url) && (      url = [url])
          ; !Array.isArray (act) && (      act = [act])
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


  "get then":
    function getThen (ion)                                                       // for +{get: "script.js", then: "action"}
      { return getThen.this.get (ion)
      },


  "get use":
    function getUse (ion)                                                      // for +{get: "script.js", use: "member"}
      { function use (from)
          { for (var thing, u=uses.length; u--;)
              { thing       = uses [u]
              ; ion [thing] = from [thing]
              }
          }

      ; var uses = ion.use
      ; !Array.isArray (uses) && (uses = [uses])
      ~ {on:uses, do:use}
      ; return getUse.this.get (ion)
      },


  debug:
    function debug (ion)
      { ion.as  = "debug"
      ; ion.log = ion.debug
      ; debug.this.log (ion)
      },


  error:
    function logError (ion)
      { ion.as  = "error"
      ; ion.log = ion.error
      ; logError.this.log (ion)
      ~ new Error (ion.error)
      },


  info:
    function logInfo (ion)
      { ion.as  = "info"
      ; ion.log = ion.info
      ; logInfo.this.log (ion)
      },


  log:
    function log (ion)
      {/* Causes an infinite loop log...onObject...debug...log
          Maybe move logging to own flow | queue | thread so it
          won't interupt other ion handling...

        +/ ion: +{log:thing} logs some thing    /
        +/ ion: +{log: true} enables  logging   /
        +/ ion: +{log:false} disables logging   /
        +/ ion: +{debug:...} same as +{log:...} /
        +/ ion: +{error:...} same as +{log:...} /
        +/ ion: +{ warn:...} same as +{log:...} /
       */

        function cons0le (ion)
          {  sense (ion)
          && console [level] (id + String (ion.log))
          }

        function popup (ion)
          {  sense (ion)
          && alert (id + level + ": " + String (ion.log))
          }

        function sense (ion)
          { id         = (ion.re.from || web.re.id) + ": "
          ; level      = ion.as       || "log"
          ; ("boolean" == typeof ion [level]) && (sense [level] = ion [level])
          ; return sense [level]
          }

        var id
          , level
          , web         = log.this
          , iOSPath     = (/^file:\/\/.*\/var\/mobile\//)
          , noConsole   = document.URL.match (iOSPath)
          ; sense.debug = true
          ; sense.error = true
          ; sense.log   = true
          ; sense.warn  = true
          ; (web.log    = noConsole ? popup : cons0le) (ion)
      },


  warn:
    function logWarn (ion)
      { ion.as  = "warn"
      ; ion.log = ion.warn
      ; logWarn.this.log (ion)
      }
} //+web@ionify