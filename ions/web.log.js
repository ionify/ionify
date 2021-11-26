;
~
{ re:
    { id:  'log@ionify'
    , is:  'action'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211126
    , at:  -0.1
    , is:" ionify's logging implementation providing:"
        +" ~debug ~error ~info ~log & ~warn "
        ,
      we:
        [" must fix bad valueOf() 🐛 of 'errors is not a function' ???"
        +"  maybe its affected by on.action@ which senses Functions? "
        ," must understand why initial ~debug state isn't logged.    "
        ," will create log@ & move console & all ~logging there.     "
        ," will update to only use alert() on mobile (e.g. iOS).     "
        ," will set .ready() to only throw noConsole if no alert().  "
        ," like moving display logic to host, e.g. alert vs console. "
        ]
    },

  on:
    [ 'error', 'warn', 'debug', 'log', 'info'
    ],

  valueOf:
    function log ()
      { this . logged ()
        delete this.valueOf
      ~ this & this.prepare.our.logging
      },

  debug:
    function debug (ion)
      { var    logger       =  debug.with
      ;        logger.level = 'debug'
      ; return logger.logged  (ion)
      },

  error:
    function error (ion)
      { var logger       =  error.with
      ;     logger.level = 'error'
      ; var state        =  logger.logged (ion)
      ; if (!state || typeof ion.error == 'boolean') return state
      ~ new Error (ion.error)
      },

  info:
    function info (ion)
      { var    logger       =  info.with
      ;        logger.level = 'info'
      ; return logger.logged  (ion)
      },

  log:
    function log (ion)
      { var    logger       =  log.with
      ;        logger.level = 'log'
      ; return logger.logged  (ion)
      },

  warn:
    function warn (ion)
      { var logger   =  warn.with
      ; logger.level = 'warn'
      ; return logger.logged (ion)
      },

  prepare:
    function prepare (ion)
      { var logger       = prepare. with
          , logging      = prepare. our  . logging   ||
                          (prepare. our  . logging = {})
          , level        = logger . level
          , message      = ion     [level]
          , state        = prepare [level]
          ; logger.state = state
          ; logger.id    = ion.re.from || logger.re.id

        if('string'  == typeof message && !message) return false
        if('boolean' == typeof message)
          if( state = message != state)
            { logger.state = prepare [level] = message
            ; message      = (logger.state ? "✅" : "🚫") + " ~" + level
            }

        logger.state   && Array.isArray (message) && (message = message.join (" "))
        logger.message  = logger.icon [logger.level] + logger.id + ": " + String (message)
        logging [level] = logger.state
        return state
      },

  errors:
    { noAlert   : "log@ionify needs the window.alert () API"
    , noConsole : "log@ionify needs the console.log  () API"
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
      { var errors= this.errors
          , has   = { console: typeof console != 'undefined'
                    ,   alert: typeof alert   != 'undefined'
                    }
          ! (has.console ||  has.alert)
          ? !has.console && ~errors & errors.noConsole
          : !has.alert   && ~errors & errors.noAlert

        function cons0le (ion)
          {  prepare (ion)
          && console [logger.level] (logger.message)
          ;  return   logger.state
          }

        function popup (ion)
          { prepare (ion) && alert (logger.message)
          ; return logger.state
          }

        var icon =
            { debug: "🐛"
            , error:  ""
            ,  info: "💡"
            ,   log: "📋"
            ,  warn:  ""
            }

        var icona =
            { debug: icon.debug
            , error: "🚫"
            ,  info: icon.info
            ,   log: icon.log
            ,  warn: "⚠️"//"⚠️" 🐛not sure why chromium not rendering with yellow color & fullsize...
            }

        var logger        = this
          , prepare       = logger.prepare
          , iOSPath       = (/^file:\/\/.*\/var\/mobile\//)
          , noConsole     = document && document.URL.match (iOSPath)
          ; logger.logged = noConsole ? popup : cons0le
          ; logger.icon   = noConsole ? icona : icon
      }
}
;