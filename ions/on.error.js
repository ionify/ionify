;
~
{ re:
    { id:  'on.error@ionify'
    , of: ['core','public','conduit','api']
    , as: {malfunction:-0.001, observation:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike👨🏾‍💻lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221117
    , at:  -0.005
    , is: "sensing error ions"
    , go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/on.error.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.error.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "were ... "
        , "will ... "
        ]
    },

  on:
    Error,
    Error:
      function onError (ion)
        {  throw ion || this
        }
}
;