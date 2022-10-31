;
~
{ re:
    { id: 'documenter@ions.iskitz.net'
    , as: 'action'
    , by: 'mike.lee'
    , on: -4.200709
    , to: -7.20221031
    , at: -0.1
    , is:
        [ "observes & presents live code documentation via these apis:    "
        + "  ~I: do documentation once; only the 1st time per ~I instance."
        + "  ~i: do documentation every time an ~i instance is sensed.    "
        ],
      we:
        [ "plan to improve & expand this ion's behavior   "
        , "will rename this ion's file to documenter.js"
        , "will move this ion to ionified.net             "
        ]
    },

  on:
    [ 'I', 'i'
    ],

  presented:
    {}

, I        :'document'
, i        :'document'
, document :function
  document (action)
    { var its     =  document.with.its
        , message =  action.I || action.i
        , who     = ('I' in action) ? 'I' : 'i'

      if( 'I' == who)
        { if( its.presented [message] ) return
              its.presented [message] = true
        }

    + {info: true}
    ~ {info: who + String (message)}
    }
}
;