;
~
{ re:
    { id:  'errors@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181203
    , is:  +0.1
    , it:
        [/ converts messages to Error objects /
        ,/ usage:                             /
        ,     { errors
              :   { error1: "1st error"
                  , error2: "2nd error"
                  , error3: "3rd error"
                  }
              }
        ]
    , we:
        [/ will ... /
        ]
    }

, on:'errors'
,     errors
:       function onErrors (ion)
          { var next = ion.errors
            for (var error in next)
              next [ error ] = new Error (next [error])
          }
}
;