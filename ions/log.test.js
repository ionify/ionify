;
~
{ re:
    { id:  'log.test@ionify'
    , by: ['mike.lee@ionify.net','team']
    , on:  -4.200709
    , to:  -8.20211126
    , at:  -0.1
    , is: "testing ionify's logging actions"
    , we:
        [ "must update with try-catch for ~{error} state resetting"
        ]
    },

  valueOf :function
  testing ()
    { ~
      [/ test +[], +debug, +error, +info, +log, +warn /
      , (this.logstate = !!+{debug:''})
      , {debug: false}
      , {debug: "❌ ~debug test"}
      , {debug: true}
      , {debug: "✅ ~debug test"}
      , {debug: this.logstate}
      , (delete this.logstate)

      , (this.logstate = !!+{info:''})
      , {info: false}
      , {info: "❌ ~info test"}
      , {info: true}
      , {info: "✅ ~info test"}
      , {info: this.logstate}
      , (delete this.logstate)

      , (this.logstate = !!+{log:''})
      , {log: false}
      , {log: "❌ ~log test"}
      , {log: true}
      , {log: "✅ ~log test"}
      , {log: this.logstate}
      , (delete this.logstate)

      , (this.logstate = !!+{warn:''})
      , {warn: false}
      , {warn: "❌ ~warn test"}
      , {warn: true}
      , {warn: "✅ ~warn test"}
      , {warn: this.logstate}
      , (delete this.logstate)

    //, (this.logstate = !!+{error:''})
      , {error: false}
      , {error: "❌ ~error test"}
      , {error: true}
      , {error: "✅ ~error test"}
      , {error: this.logstate}
      , (delete this.logstate)
      ]
    }
}
;