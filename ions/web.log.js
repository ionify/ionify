;
~
{ re:
    { id: 'log@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181218
    , is:  -0.1
    , it:" enables ionify web logging "
    , we:
        [" will create log@ & move console & all ~logging there     "
        ," will update to only use alert() on mobile (e.g. iOS)     "
        ," will set .ready() to only throw noConsole if no alert()  "
        ]
    },

  do:
    [ {on:['error', 'warn', 'debug', 'log', 'info']}
    , {errors
      :   { noAlert   : "log@ionify needs the window.alert () API"
          , noConsole : "log@ionify needs the console.log  () API"
      }   }
    , 'ready'
    ],

  ready:
    function ready ()
      {   var    error    =  ready.ion.errors
      ;  (typeof console == 'undefined') && ~error.noConsole
      ;  (typeof alert   == 'undefined') && ~error.noAlert
      ;   return true
      },

  debug:
    function debug (ion)
      { ion.as  = 'debug'
      ; ion.log = ion.debug
      ; debug.ion.log (ion)
      },

  error:
    function error (ion)
      { ion.as  = 'error'
      ; ion.log = ion.error
      ; error.ion.log (ion)
      ~ new Error (ion.error)
      },

  info:
    function info (ion)
      { ion.as  = 'info'
      ; ion.log = ion.info
      ; info.ion.log (ion)
      },

  log:
    function log (ion)
      {/* Uncommenting the following stories causes an infinite
          loop log...onObject...debug...log
          Maybe move logging to own flow | queue | thread so it
          won't interupt other ion handling? Needs debugging.

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
          && alert (id + icon [level] + String (ion.log))
          }

        function sense (ion)
          {   id          = ion.re.from || web.re.id
          ;   level       = ion.as      || 'log'
          ; ('boolean'   == typeof  ion [level])
              && ( on     = sense [level] = ion [level])
              && (ion.log = level + ": "  + ion [level])
          ;   on && Array.isArray (ion.log) && (ion.log = ion.log.join (" "))
          ;   return on
          }

        var icon =
            { debug: "🐛"
            , error: "❌"
            ,  info: "💡"
            ,   log: "📋"
            ,  warn: "⚠️"
            }

        var id, level, on
          , web         = log.ion
          , iOSPath     = (/^file:\/\/.*\/var\/mobile\//)
          , noConsole   = document.URL.match (iOSPath)
          ; sense.debug = false
          ; sense.error = true
          ; sense.info  = false
          ; sense.log   = false
          ; sense.warn  = true
          ; (web.log    = noConsole ? popup : cons0le) (ion)
      },

  warn:
    function warn (ion)
      { ion.as  = 'warn'
      ; ion.log = ion.warn
      ; warn.ion.log (ion)
      }
}
;