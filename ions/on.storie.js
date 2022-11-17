;
~
{ re:
    { id:  'on.storie@ionify'
    , of: ['core','public','conduit','api']
    , as: {observation:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -8.20161116
    , to:  -8.20221117
    , at:  -0.007
    , is:
        [" sensing activated stories: string template or regular ion expressions like "
        ,"              ~/.../                                                       "
        ," currently transcribing storie content.                                            "
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/on.storie.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.storie.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [" will enable inline & referrable notes & todos via ion.methodInfo:[/.../]! "
        ," want to disable ion during storie evaluations to enable code stories!     "
        ," will ... "
        ," wish we could ~{on:/.../, as:'storie@ionify', $1:Function, $2:Function}   "
        ," wish we could ~{on:/.../, as: 'aesop@ionify', $1:Function, $2:Function}   "
      ]
    },

  on:
    RegExp,
    RegExp:
        function onStorie (ion)
          {~ {info:this.source}
             return this //true
          }
}
;