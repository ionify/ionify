;

~
{ re:
    { id: "web.log.0.1@ionify"
    , is: "web-based logging for ionify"
    , by:
        [ {creator: "mike.lee@iskitz", at: "2007.09-04"   }
        , {authors:     "team@ionify", at: "2017.04.04-07"}
        ],

      todo:
        [ "on: Update ionify.js to handle action grammar"
        , "qa: Add tests for web@ionify + its actions"
        ]
    },


  on:
    [ "error", "warn", "log", "info", "debug"
    ],


  do:
    [ {debug:true}
    , "works"
    ],


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
          ; sense.debug = false
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

} //+web.log@ionify

;