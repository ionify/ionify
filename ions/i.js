;
~
{ re:
    { id: 'documentation@ions.iskitz.net'
    , as: 'action'
    , by: 'mike.lee'
    , on: -4.200709
    , to: -8.20211125
    , at: -0.1
    , is:
        [" observes & presents live code documentation via these apis:     "
        +"   ~I: do documentation once; only the 1st time per ~I instance. "
        +"   ~i: do documentation every time an ~i instance is sensed.     "
        ],
      we:
        [" plan to improve & expand this ion's behavior    "
        ," will rename this ion's file to documentation.js "
        ," will move this ion to ionified.net              "
        ]
    },

  on:
    [ 'I', 'i'
    ],

  my:
    { own:
        { presented: {}
        }
    }

, I        :'document'
, i        :'document'
, document :function
  document (action)
    { var my      =  document.with.my.own
        , message =  action.I || action.i
        , state   = ('I' in action) ? 'I' : 'i'

      if( 'I' == state)
        { if( my.presented [message] ) return
              my.presented [message] = true
        }

    + {info: true}
    ~ {info: state + String (message)}
    }
}
;