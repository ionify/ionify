;
~
{ re:
    { id: 'log@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20190104
    , is:  -0.1
    , it:" implements ionify logging via    "
        +" ~debug ~error ~info ~log & ~warn "
    , we:
        [" must understand why initial ~debug state isn't logged.    "
        ," will create log@ & move console & all ~logging there.     "
        ," will update to only use alert() on mobile (e.g. iOS).     "
        ," will set .ready() to only throw noConsole if no alert().  "
        ," like moving display logic to host, e.g. alert vs console. "
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
      ;   this . logged ()
      ;   delete this.valueOf
      ~   this & this.prepare.our.logging
      },

  debug:
    function debug (ion)
      { var    logger       =  debug.ion
      ;        logger.level = 'debug'
      ; return logger.logged  (ion)
      },

  error:
    function error (ion)
      { var logger       =  error.ion
      ;     logger.level = 'error'
      ; var state        =  logger.logged (ion)
      ; if (typeof ion.error == 'boolean') return state
      ~ new Error (ion.error)
      },

  info:
    function info (ion)
      { var    logger       =  info.ion
      ;        logger.level = 'info'
      ; return logger.logged  (ion)
      },

  log:
    function log (ion)
      { var    logger       =  log.ion
      ;        logger.level = 'log'
      ; return logger.logged  (ion)
      },

  warn:
    function warn (ion)
      { var logger   =  warn.ion
      ; logger.level = 'warn'
      ; return logger.logged (ion)
      },

  prepare:
    function prepare (ion)
      { var logger       = prepare. ion
          , logging      = prepare. our . logging
          , level        = logger . level
          , message      = ion     [level]
          , state        = prepare [level]
          ; logger.state = state
          ; logger.id    = ion.re.from || logger.re.id

        if('boolean'    == typeof message)
          { logger.state = prepare [level] = message
          ; message      = "~" + level + (logger.state ? " on" : " off")
          ; state        = true
          }

      ; logger.state   && Array.isArray (message) && (message = message.join (" "))
      ; logger.message  = String        (message)
      ; logging [level] = logger.state
      ; return state
      },

  loggedInfo:
    [" ion: +{log:thing} logs some thing  "
    ," ion: +{log: true} enables  logging "
    ," ion: +{log:false} disables logging "
    ," ion: +{debug:...} is +{log:...} with debug level "
    ," ion: +{error:...} is +{log:...} with error level "
    ," ion: +{ info:...} is +{log:...} with  info level "
    ," ion: +{ warn:...} is +{log:...} woth  warn level "
    ],

  logged:
    function logging (ion)
      { function cons0le (ion)
          {  prepare (ion)
          && console [logger.level] (logger.id + ": " + logger.message)
          ;  return   logger.state
          }

        function popup (ion)
          { prepare (ion) && alert (icon [logger.level] + logger.id + logger.message)
          ; return logger.state
          }

        var icon =
            { debug: "🐛"
            , error: "🚫"
            ,  info: "💡"
            ,   log: "📋"
            ,  warn: "⚠️"
            }

        var logger        = this
          , prepare       = logger.prepare
          , iOSPath       = (/^file:\/\/.*\/var\/mobile\//)
          , noConsole     = document.URL.match (iOSPath)
          ; logger.logged = noConsole ? popup : cons0le
      }
}
;