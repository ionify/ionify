;
/errors@ionify activating.../
+

{ re:
    { id: "errors.0.1.2017.04.14-07@ionify"
    , is: "An action that converts messages to Error objects"
    , by: "mike.lee@ionify"
    , at: "2017.04.14-07...2007.09-04"

        ,
      stories:
        [ /note: usage:/
                  +{errors:
                     { error1:"1st error"
                     , error2:"2nd error"
                     , error3:"3rd error"
                     }
                   }
        , /todo: .../
        ]
    }

    ,
  on: "errors"

    ,
  errors:
    function onErrors (ion)
      { var next = ion.errors
        for (var error in next)
          next [error] = new Error (next [error])
      }
}

~
/errors@ionify activated!/
;