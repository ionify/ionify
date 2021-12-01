;
~
{ re:
    { id:  'logger.test@ionify'
    , of:  'tests'
    , as:  'test.0'
    , by: ['mike.lee', 'kaito.lee', 'team']
    , in: ['silicon-valley.california.us.earth']
    , on:  -4.200709
    , to:  -8.20211201
    , at:  -0.1
    , is: "testing ionify's log recording actions"
    , we:
        [ "were ..."
        , "must ..."
        , "will ..."
        , "plan ..."
        , "need ..."
        , "want ..."
        , "know ..."
        , "like ..."
        , "hope ..."
        , "wont ..."
        ]
    },

  valueOf     :function
  test_logger ()
    { this.test_debug ()
      this.test_error ()
      this.test_info  ()
      this.test_log   ()
      this.test_warn  ()
    },

  my:
    { own:
        { message:
            { disabled: "can be disabled"
            , operates: "can be enabled, recorded & disabled"
            }
        }
    },

  test_debug :function
  test_debug ()
    { var  mode = this.my.own.message
        ,  debug= +{debug:null}
        ~ {debug: false}
        - {debug: "❌ ~debug " + mode.disabled}
        + {debug: true}
        + {debug: "✅ ~debug " + mode.operates}
        ~ {debug: !!debug}
    },

  test_info :function
  test_info ()
    { var  mode= this.my.own.message
        ,  info= +{info:null}
        ~ {info: false}
        - {info: "❌ ~info " + mode.disabled}
        + {info: true}
        + {info: "✅ ~info " + mode.operates}
        ~ {info: !!info}
    },

  test_log :function
  test_log ()
    { var mode= this.my.own.message
        ,  log= +{log:null}
        ~ {log: false}
        - {log: "❌ ~log " + mode.disabled}
        + {log: true}
        + {log: "✅ ~log " + mode.operates}
        ~ {log: !!log}
    },

  test_warn :function
  test_warn ()
    { var  mode= this.my.own.message
        ,  warn= +{warn:null}
        ~ {warn: false}
        - {warn: "❌ ~warn " + mode.disabled}
        + {warn: true}
        + {warn: "✅ ~warn " + mode.operates}
        ~ {warn: !!warn}
    },

  test_error :function
  test_error ()
    { var  mode = this.my.own.message
        ,  error= +{error:null}
        ~ {error: false}
        - {error: "❌ ~error " + mode.disabled}
        + {error: true}

      try
        {
        ~ {error: "✅ ~error " + mode.operates}
        - {error: "❌ ~error " + mode.operates}
        }
      catch (err)
        {
        ~ /~error test try-catch prevents disrupting subsequent tests/
        & /~error records the error message before throwing the error/
        }

        ~ {error: !!error}

        ~ {debug:true}
        + {debug
          : "kaito lee & michael daddy lee\n\t"
          + "@ -8.20211129\n\t"
          + "🍭🥣🚘🚞🚞🚘👨🏾‍🦱💪🏽🐛🧑🏾‍🦱🧸🛏😗👨🏾‍🦱🆎\n\t"
          + "🆚🈸💮🈴🆘📛🅰️🅱️㊗️🈚️🈶🆚🈴🈲㊗️🅰️\n\t"
          + "㊙️㊗️✴️✴️✴️🈷️🆘🅾️🆘🆘🅾️🅰️🅱️🆎🅱️🅾️\n\t"
          + "🅾️🆘🆎🆎🅾️🈲🈲㊙️🖤🤍☦️☦️✡️⛎⛎🉑\n\t"
          + "♌️🎅🏾🧑🏾‍🎄💤\n\t"
          + "goodmbvgddfbzfttdx\n\t"
          + "goodphone"
          }
        + {debug:false}
    }
}
;