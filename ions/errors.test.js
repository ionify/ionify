;
~
{ re:
    { id:  'errors.test@ionify'
    , by: ['mike.lee','team']
    , at:  'ionify.net'
    , on:  -7.20170414
    , to:  -8.20190102
    , is:  -0.1
    , it:  "tests ionify's ~errors action"
    }
  
, valueOf
:   function testErrors ()
      { var errors=
          { error1: "1st error"
          , error2: "✅ ~errors & ~errors.error"
          , error3: "3rd error"
          }

      ~ { errors:errors }
      &   errors.error2
      }
  }
;