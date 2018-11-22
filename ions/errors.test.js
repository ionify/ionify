;
~
{ re:
    { id: 'errors.test@ionify'
    , is: "A suite of tests for ionify's +errors action"
    , by: 'mike.lee@ionify'
    , at: -7.20170414
    , to: -7.20170415
    , at: -0.1
    }
}
+
function testErrors ()
  { var errors=
          { error1: "1st error"
          , error2: "2nd error"
          , error3: "3rd error"
          }

    ~
    [ /test +{errors:{2: "2nd Error"}} /
    , {errors:errors}
    ,  errors.error2
    ]
  }
;