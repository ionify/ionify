;
~
{ re:
    { id:  'on.errors@ionify'
    , of: ['core','public','api']
    , as: {malfunction:-0.001, sensation:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike👨🏾‍💻lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221117
    , at:  -0.007
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
      go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/on.errors.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.errors.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
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