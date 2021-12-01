;
~
{ re:
    { id:  'logger@ionify'
    , of:  'core'
    , as:  'action'
    , by: ['mike.lee', 'kaito.lee', 'team']
    , in: ['queens-county.new-york.us.earth', 'silicon-valley.california.us.earth']
    , on:  -4.200709
    , to:  -8.20211201
    , at:  -0.1
    , is:
        [ "ionify's log recording actions:"
        ,  " ~{debug:*}, ~{error:*}, ~{info:*}, ~{log:*} & ~{warn:*}"

        , "~ {log_level: true || false}"
        +  "  true enables & false disables recording at the specified log level"
        +  "  i.e. debug, error, info, log, or warn."

        , "+ {log_level: null}"
        ,  "  reports if the log level is enabled:1:true | disabled:0:false"
        ,  "  the unary operator is critical for acquiring a correct log level state"
        ,  "  +|- unary operators always correctly report the log level's state"
        ,  "  a ~ unary operator  always reports the log level state as enabled 👎🏾"
        ,  "  ~~ {log_level:null} can be used to report the correct log level"

        , '+ {log_level: "message"}'
        ,  "  records a message at the specified log level if it's enabled"

        , '+ {log_level: reference}'
        ,  "  passes the referenced object to the underlying logger, e.g. console,"
        +  "  to enable more informative, developer-level, object rendering"
        ],
      we:
        [ "want '⚠️' 🐛 in blink web views to render with full yellow color & size"
        , "like moving display logic to host, e.g. web:alert vs web+node:console"
        ]
    },

  on:
    [ 'error', 'warn', 'debug', 'log', 'info'
    ],


  valueOf :function
   logger ()
      { this.report ({error:null, warn:null, debug:null, log:null, info:null})
        this.ionify ()
      },

  ionify :function
  ionify ()
    { delete (this.valueOf)  &&  ~this
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
    { var toggled
        , logger  = record.with
        , logging = record.our.logging   ||
                   (record.our.logging = {})
        , level   =  logger.level
        , message =  action [level]
        , state   = logging [level]
        ; logging [level] = logger.state = state

      if (null === message) return false

      if('boolean' ==  typeof message)
      if( toggled  =  (message !=  state))
          {   logging [level]   =  state = logger.state = message
          ;   message           = (state ? "✅" : "🚫") + " ~"  + level
          }

      state
        &&   Array.isArray   ( message   )
        &&  'string' == typeof message [0]
        &&  (message =  message.join (" "))

      logger.id = action.re.from || logger.re.id

      logger.message
        =   'string' == typeof message
        ?    logger.icon [logger.level] + logger.id + ": " + message
        :   [logger.icon [logger.level] + logger.id + ": " , message]

      return toggled ? true : action [level] === true ? false : state
    },

  messages:
    { noConsole: "logger@ionify is more informative with the console.*() reporting api"
    , noReports: "logger@ionify couldn't find the alert() or console.*() reporting apis"
    },

  report :function
  report (action)
    { var icono =
          { debug: "🐛"
          , error:  ""
          ,  info: "💡"
          ,   log: "📋"
          ,  warn:  ""
          }

      var icons =
          { debug: icono.debug + ' '
          , error: "❌ "
          ,  info: icono.info  + ' '
          ,   log: icono.log   + ' '
          ,  warn: "⚠️ "
          }

      var iOSPath  = (/^file:\/\/.*\/var\/mobile\//)
        , onMobile = document && document.URL.match (iOSPath)
        , logger   = this
        , missing  = logger.missing
        ; missing.console = typeof console == 'undefined'
        ; missing.alert   = typeof alert   == 'undefined'

      logger.report
        = !onMobile
        ?     logger.console
        :     missing.alert ? logger.console : logger.popup

        = onMobile
        ?    !missing.alert ? logger.popup : logger.console
        :     logger.console

      logger.icon
        = missing.console
        ?     icons
        :    !onMobile ? icono
                       : missing.alert ? icono : icons

      if( missing.console)
        if( missing.alert)
          { logger.report = missing
            logger.ionify ()
          ~ action
          ~ new Error (logger.messages.noReports)
          }
        else
          { logger.report = logger.popup
            logger.ionify ()
          ~ {warn: true }
          & {warn: logger.messages.noConsole}
          & {warn: logger.report.our.logging.warn}
          }
      else logger.ionify ()

    ~ action
    },

  missing :function
  missing (action)
    { var    logger=missing.with
    ;        logger.record (action)
    ; return logger.state
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