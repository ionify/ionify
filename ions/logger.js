;
~
{ re:
    { id:  'logger@ionify'
    , of:  'core'
    , as:  'action'
    , by: ['mike.lee', 'kaito.lee', 'team']
    , in: ['silicon-valley.california.us.earth']
    , on:  -4.200709
    , to:  -8.20211201
    , at:  -0.1
    , is:
        [ "ionify's log recording actions:"
        ,  " ~{debug}, ~{error}, ~{info}, ~{log} & ~{warn}"

        , "~ {log_level: true || false}"
        +  "  true enables & false disables recording at that log level"
        +  "  i.e. debug, error, info, log, or warn."

        , "+ {log_level: null}"
        ,  "  reports if the log level is enabled:1:true | disabled:0:false"
        ,  "  the unary operator is critical for acquiring a correct log level state"
        ,  "  +|- unary operators always correctly report the log level's state"
        ,  "  a ~ unary operator  always reports the log level state as enabled 👎🏾"
        ,  "  ~~ {loglevel:null} can be used to report the correct log level"

        , '+ {log_level: "message"}'
        ,  "  records a message at that log level if it's enabled"

        , '+ {log_level: reference}'
        ,  "  passes the referenced object to the underlying logger, e.g. console"
        +  "  enabling more elaborate, developer-level, object rendering."
        ],
      we:
        [ "want '⚠️' 🐛 in blink web views to render with full yellow color & size"
        , "like updating to only use alert() on mobile (e.g. iOS)"
        , "like moving display logic to host, e.g. web:alert vs web+node:console"
        ]
    },

  on:
    [ 'error', 'warn', 'debug', 'log', 'info'
    ],

  valueOf :function
  logger  ()
      { this.report ()
        delete this.valueOf
      ~ this & this.record.our.logging
      },

  debug :function
  debug (action)
    { var    logger       =  debug.with
    ;        logger.level = 'debug'
    ; return logger.report  (action)
    },

  error :function
  error (action)
    { var logger       = error.with
        ; logger.level = 'error'

      var state   = logger.report (action)
        , message = action.error

      if( null === message) return state
      if('boolean' != typeof message && state) ~new Error (message)

      return state
    },

  info :function
  info (action)
    { var    logger       =  info.with
    ;        logger.level = 'info'
    ; return logger.report  (action)
    },

  log :function
  log (action)
    { var    logger       =  log.with
    ;        logger.level = 'log'
    ; return logger.report  (action)
    },

  warn :function
  warn (action)
    { var    logger       =  warn.with
    ;        logger.level = 'warn'
    ; return logger.report  (action)
    },

  record :function
  record (action)
    { var logger  = record.with
        , logging = record.our.logging   ||
                   (record.our.logging = {})
        , level   =  logger.level
        , message = action [level]
        , state   = record [level]
        ; logger.state  = !!state
        ; logger.id     =   action.re.from || logger.re.id

      if (null === message) return false

      if('boolean' == typeof message)
        if( state = message != state)
          { logger.state = record [level] = message
          ; message      = (logger.state ? "✅" : "🚫") + " ~" + level
          }

      logger.state
        &&  Array.isArray   ( message   )
        && 'string' == typeof message [0]
        && (message =  message.join (" "))

      logger.message
        = 'string' == typeof message
        ?  logger.icon [logger.level] + logger.id + ": " + message
        : [logger.icon [logger.level] + logger.id + ": " , message]

      logging [level] = logger.state

      return state
    },

  errors:
    { noAlert   : "logger@ionify needs the window.alert () api"
    , noConsole : "logger@ionify needs the console.log  () api"
    },

  report :function
  report ()
    { var errors= this.errors
        , has   = { console: typeof console != 'undefined'
                  ,   alert: typeof alert   != 'undefined'
                  }

      ! (has.console ||   has.alert)
      ? !has.console && ~ new Error (errors.noConsole)
      : !has.alert   && ~ new Error (errors.noAlert)

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
          ,  warn: "⚠️"
          }

      var iOSPath       = (/^file:\/\/.*\/var\/mobile\//)
        , onMobile      = document && document.URL.match (iOSPath)
        , logger        = this
        ; logger.report = onMobile ? logger.popup : logger.console
        ; logger.icon   = onMobile ?        icona : icon
    },

  console :function
  cons0le (action)
    { var    logger=cons0le.with
    ;        logger.record (action) && console [logger.level] (logger.message)
    ; return logger.state
    },

  popup :function
  popup (action)
    { var    logger=popup.with
    ;        logger.record (action) && alert (logger.message)
    ; return logger.state
    }
}
;