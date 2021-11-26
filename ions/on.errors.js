;
~
{ re:
    { id:  'on.errors@ionify'
    , of:  'core'
    , as:  'action'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211126
    , at:  -0.1
    , is:
        [ "converting messages to Error objects"
        , "usage:"
        ,     { errors:
                  { error1: "1st error"
                  , error2: "2nd error"
                  , error3: "3rd error"
                  }
              }
        ],
      we:
        [ "will ..."
        ]
    },

  on:'errors',
      errors:
        function onErrors (ion)
          { var next = ion.errors
            for (var error in next)
              next [ error ] = new Error (String (next [error]))
          }
}
;