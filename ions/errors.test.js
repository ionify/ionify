;
/errors.test@ionify activating/

+
{ re:
    { id: "errors.test.0.1.2017.04.15@ionify"
    , is: "A suite of tests for ionify's +errors action"
    , by: "mike.lee@ionify"
    , at: "2017.04.14-07"
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

+
/errors.test@ionify activated!/
;