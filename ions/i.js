;
~
{ re:
    { id: 'documenter@ions.iskitz.net'
    , of: ['more','public','tools','api']
    , as: {documentation:-0.001, sensation:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on: -4.200709
    , to: -8.20221117
    , at: -0.007
    , is:
        [ "observes & presents live code documentation via these apis:    "
        + "  ~I: do documentation once; only the 1st time per ~I instance."
        + "  ~i: do documentation every time an ~i instance is sensed.    "
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/i.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/i.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
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