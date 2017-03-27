;

+
{ re:
    { id: "web@ionify.0.1"
    , is: "web-based implicit object notification invented for you"
    , by:
        [ {creator: "mike.lee@iskitz", at: "2007.09-04"   }
        , {authors:     "team@ionify", at: "2016.12.06-08"}
        ],

      todo:
        [ "on: Update ionify.js to handle action grammar"
        , "qa: Add tests for web@ionify + its actions"
        ]
    },

  valueOf:
    function ionifyWeb ()
      {   delete this.valueOf
      ;   this.works  ()
      ;   this.locate ()
      ;   this.get    ({get:["on@ionify","web.log@ionify"], do:this})
      },

  works:
    function works ()
      {   var error = this.errors
      ;   if (typeof document == "undefined") throw error.noDOM
      ;   return true
      },

  errors:
    { noDOM: new Error ("web@ionify.net needs the DOM: Document Object Module API")
    },

  locate:
    function locate ()
      { var script  =[  document.currentScript,,] || document.scripts
                    ||  document.head.getElementsByTagName ("script")
          , path    =   script && script [script.length - 2].src
          ; path    &&  (this.get$.PATH.ionify = path.replace (/(.+\/).+$/, "$1"))
      },

  on:
    [ ["get", "do"  ]
    , ["get", "use" ]
    ,  "get"
    ],

  do:
    [ {debug:true}
    ,//{get:"web.log@ionify"}
    ],

  getTodo:
    [ /2016.11.16-08/
    , /ionify: todos: Enable inline + referrable via ion.methodTodo:[storie(s)]/
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
                    , do: ["function1", "act1"]
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
          {   var th1s  = getURL.this
          ,       ext   = th1s.EXT.exec (match)
          ;   name      = name  && ( name.match (th1s.NAME) || [, name])[1]
          ;   space     = space && (space.match (th1s.NAME) || [,space])[1]
          ;   file      = file  && ( file.match (th1s.NAME) || [, file])[1]

          ;   return th1s.PATH [space] + (name || file) + (version || "")
                                       + /*(ext ? ext [1] :*/(th1s.TYPE)
          }
    },
  get:
    function get (ion)                                                          // for +{get: "script.js"}
      { var get$          = (get.this || (get.this = this)).get$
          , url           = ion.get
          , act           = ion.do
          ; get$.URL.this = get$

          ; !get$.PATH           && (get$.PATH = this.path.ionify)
          ; !Array.isArray (url) && (      url = [url])
          ; !Array.isArray (act) && (      act = [act])
          ;

        for (var last=url.length, next=-1; ++next < last;)
          { function got ()
              {  var then = got.then
              ;  typeof then === "string" ? +(ion [then]) : +then
              }

            var script  = document.createElement ("script")
              , then    = act [next] //|| (((then = {})[url [next]] = ion), then)
              , path    = url [next].match   (get$.HTTP)
                        ? url [next]
                        : url [next].replace (get$.ID, get$.URL)
              ; then && (got.then = then) && (script.onload = got)
              ; script.type   = "text/javascript"
              ; script.async  = !(ion.now === true)
              ; script.src    = path
              ; document.head.appendChild (script)
              ; +{debug:"getting: "+path}
          }
      },

  "get do":
    function getDo (ion)                                                       // for +{get: "script.js", do: "action"}
      { return getDo.this.get (ion)
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
      ; +{on:uses, do:use};
      ; return getUse.this.get (ion)
      }
} //+web@ionify

;