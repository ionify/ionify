;
/web.log activating.../
+

{ re:
    { id: "log.0.1@ionify"
    , is: "web-based logging for ionify"

        ,
      by:
        [ {creator: "mike.lee@iskitz", at: "2007.09-04"   }
        , {authors:     "team@ionify", at: "2017.07.13-07"}
        ]

        ,
      stories:
        [ /todo: Create log@ + move console + all +logging there/
        , /todo: Update to only use alert() on iOS/
        , /todo: works(): only throw noConsole if no alert() /
        ]
    }

    ,
  on:
    [ "error", "warn", "log", "info", "debug"
    ]

    ,
  errors:
    { noAlert   : "log@ionify needs the window.alert() API"
    , noConsole : "log@ionify needs the console.log() API"
    }

    ,
  do:
    [ {debug:true}
    , "works"
    ]

    ,
  works:
    function works ()
      {   var error = works.ion.errors
      ;   (typeof  console == "undefined") && ~error.noConsole
      ;   (typeof    alert == "undefined") && ~error.noAlert
      ;   return true
      }

    ,
  debug:
    function debug (ion)
      { ion.as  = "debug"
      ; ion.log = ion.debug
      ; debug.ion.log (ion)
      },


  error:
    function logError (ion)
      { ion.as  = "error"
      ; ion.log = ion.error
      ; logError.ion.log (ion)
      ~ new Error (ion.error)
      },


  info:
    function logInfo (ion)
      { ion.as  = "info"
      ; ion.log = ion.info
      ; logInfo.ion.log (ion)
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
          && console [level] (id + ": " + String (ion.log))
          }

        function popup (ion)
          {  sense (ion)
          && alert (id + icon[level] + String (ion.log))
          }

        function sense (ion)
          { id         =  ion.re.from || web.re.id
          ; level      =  ion.as      || "log"
          ; ("boolean" == typeof ion [level]) && (sense [level] = ion [level])
          ; return sense [level]
          }

        var icon =
            { debug: "🐛"
            , error: "❌"
            ,  info: "💡"
            ,   log: "📋"
            ,  warn: "⚠️"
            }

        var id
          , level
          , web         = log.ion
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
      ; logWarn.ion.log (ion)
      }

}

+
/web.log@ionify activated!/
;