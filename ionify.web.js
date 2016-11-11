;

+ {0:0}
+
{  re:
    { id: "web@ionify.net"
    , is: "web-based implicit object notation invented for you"
    , by: {"Michael Lee": ["iskitz.net", "@iskitz"]}
    , at: "2007.09...2016.08.19-07.00"
    , in:
        [ "forest-hills.new-york.usa.earth"
        ,   "san-jose.california.usa.earth"
        ]

    , todo:
        [ "get: Auto-resolve paths"
        ]
    },

  valueOf:
    function wionify ()
      {  var web       = this
      ;  web.check.web = web
      ;  delete web.valueOf
      ;  web.check()
      ;  web.get ({get: "https://rawgit.com/ionify/ionify/public/ionify.js", got:web})
      },

  on: ["get", "log"] ||
    [ ["get", "on", "go"]
    , ["get", "go"]
    , "get"
    ],

  go:
    { get: "ions.js"
    },

  check:
    function check ()
      {  var error = check.web.errors
      ;  if (typeof document == "undefined") throw error.noDOM
      ;  if (typeof    alert == "undefined") throw error.noAlert
      ;  return true
      },

  get:
    function get (ion)
      { if (ion.get === get) return;

        var url = ion.get
          , act = ion.got
          , next
          , last
          , go

        !Array.isArray (url) && (url = [url]);
        !Array.isArray (act) && (act = [act]);

        for (last=url.length, next=-1; ++next < last;)
          { function got ()
              {  var go = got.go
              ;  typeof go === "string" ? +(ion [go]) : +go
              }

            var script        = document.createElement ("script")
              ; script.type   = "text/javascript"
              ; script.async  = !(ion.now === true)
              ; script.onload = got
              ; script.src    = url [next]
              ; got.go        = act [next]

            ; document.head.appendChild (script)
          }
      },

  log:
    function log (thing)
      {  var web        = log.web
           , id         = web.re.id
           , iOSPath    = (/^file:\/\/\/var\/mobile\//)
           , consoleOff = document.URL.match (iOSPath)
           ;

         function con$ole (thing)
           {  console.log (id + ": " + String (thing.log));
           }

         function popup (thing)
           {  alert (id + ": " + String (thing.log));
           }

         (web.log = consoleOff ? popup : con$ole)(thing);
      },

  errors:
    { noAlert : new Error ("web@ionify.net needs the window.alert() API")
    , noDOM   : new Error ("web@ionify.net needs the DOM: Document Object Module API")
    }

} //+web@ionify.net
;