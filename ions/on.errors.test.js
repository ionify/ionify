;
~
{ re:
    { id:  'on.errors.test@ionify'
    , of:  'tests'
    , as:  'test.0'
    , by: ['mike.lee','team']
    , on:  -7.20170414
    , to:  -8.20211126
    , at:  -0.1
    , is:  "testing ionify's ~errors action"
    },

  valueOf:
    function testErrors ()
      { var errors=
          { error1: "creates error type objects"
          , error2: "causes an error"
          }

      ~ {errors: errors}

      ; (typeof errors.error1 == 'object')
          ? ~{log: "✅ ~errors:       "+ errors.error1.message}
          : ~{log: "❌ ~errors:       "+ errors.error1}

        try
          { errors.error2
          & {log: "❌ ~errors.error: "+ String (errors.error2)}
          }
        catch (err)
          {
          ~ {log: "✅ ~errors.error: "+ String (err.message)}
          }
      }
  }
;