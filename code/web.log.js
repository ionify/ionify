;

+
{ re:
    { id: "web.log@ionify.0.1"
    , is: "web-based logging for ionify"
    , by:
        [ {creator: "mike.lee@iskitz", at: "2007.09-04"   }
        , {authors:     "team@ionify", at: "2016.12.06-08"}
        ],

      todo:
        [ "on: Update ionify.js to handle action grammar"
        , "qa: Add tests for web@ionify + its actions"
        ]
    },

  do: "works",

  works:
    function works ()
      {   var error = works.this.errors
      ;   if (typeof  console == "undefined") throw error.noConsole
      ;   if (typeof    alert == "undefined") throw error.noAlert
      ;   return true
      },

  errors:
    { noAlert   : new Error ("web@ionify.net needs the window.alert() API")
    , noConsole : new Error ("web@ionify.net needs the console.log() API")
    },

  on:
    [ "log", "debug", "error", "warn"
    ],

  debug:
    function debug (ion)
      { ion.as  = "debug"
      ; ion.log = ion.debug
      ; debug.this.log (ion)
      },

  error:
    function error (ion)
      { throw ion.error
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
          { id         = (ion.from || th1s.re.id) + ": "
          ; level      = ion.as    || "log"
          ; ("boolean" == typeof ion [level]) && (sense [level] = ion [level])
          ; return sense [level]
          }

        var id
          , level
          , th1s        = log.this
          , iOSPath     = (/^file:\/\/.*\/var\/mobile\//)
          , noConsole   = document.URL.match (iOSPath)
          ; sense.debug = false
          ; sense.error = true
          ; sense.log   = true
          ; sense.warn  = true
          ; (th1s.log   = noConsole ? popup : cons0le) (ion)
      },

  warn:
    function warn (ion)
      { ion.as = "warn"
      ; ion.log = ion.warn
      ; warn.this.log (ion)
      }
} //+web.log@ionify

;