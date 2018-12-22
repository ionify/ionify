;
~
{ re:
    { id: 'web.log@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181222
    , is:  -0.1
    , it:" implements ionify logging via    "
        +" ~debug ~error ~info ~log & ~warn "
    , we:
        [" will create log@ & move console & all ~logging there     "
        ," will update to only use alert() on mobile (e.g. iOS)     "
        ," will set .ready() to only throw noConsole if no alert()  "
        ]
    },

  on:
    [ 'error', 'warn', 'debug', 'log', 'info'
    ],

  errors:
    { noAlert   : "log@ionify needs the window.alert () API"
    , noConsole : "log@ionify needs the console.log  () API"
    },

  valueOf:
    function hiphop ()
      {   var errors = this.errors
      ;  (typeof console == 'undefined') && errors & errors.noConsole
      ;  (typeof alert   == 'undefined') && errors & errors.noAlert
      ;   this . log()
      ;   delete this.valueOf
      ~   this
      },

  debug:
    function debug (ion)
      { ion.as  = 'debug'
      ; ion.log = ion.debug
      ; return debug.ion.log (ion)
      },

  error:
    function error (ion)
      { ion.as    = 'error'
      ; ion.log   = ion.error
      ; var state = error.ion.log (ion)
      ; if (typeof ion.error == 'boolean') return state
      ~ new Error (ion.error)
      },

  info:
    function info (ion)
      { ion.as  = 'info'
      ; ion.log = ion.info
      ; return info.ion.log (ion)
      },

  warn:
    function warn (ion)
      { ion.as  = 'warn'
      ; ion.log = ion.warn
      ; return warn.ion.log (ion)
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
          {  prepare (ion)
          && console [level] (icon [level] + id + ": " + String (ion.log))
          ;  return  state
          }

        function popup (ion)
          { prepare (ion) && alert (icon [level] + id + String (ion.log))
          ; return state
          }

        function prepare (ion)
          {   id    =   ion.re.from || web.re.id
          ;   level =   ion.as      || 'log'
          ;   state =   prepare [level]
          ; ('boolean'  == typeof ion     [level])
                    && (state   = prepare [level] = ion [level])
                    && (ion.log = level +   ": "  + state)
          ;   state &&  Array.isArray (ion.log) && (ion.log = ion.log.join (" "))
          ;   return state
          }

        var icon =
            { debug: "🐛"
            , error: "🚫"
            ,  info: "💡"
            ,   log: "📋"
            ,  warn: "⚠️"
            }

        var id
          , level
          , state
          , web           = this
          , iOSPath       = (/^file:\/\/.*\/var\/mobile\//)
          , noConsole     = document.URL.match (iOSPath)
          ; prepare.debug = false
          ; prepare.error = false
          ; prepare.info  = false
          ; prepare.log   = false
          ; prepare.warn  = false
          ; web.log       = noConsole ? popup : cons0le
      }
}
;