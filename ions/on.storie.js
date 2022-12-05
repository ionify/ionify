;
~
{ re:
    { id:  'on.storie@ionify'
    , of: ['core','public','conduit','api']
    , do: {transcription:-0.001}
    , as: {observation  :-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -8.20161116
    , to:  -8.20221205
    , at:  -0.008
    , is:
        [" sensing activated stories: string template or regular ion expressions like "
        ,"              ~/.../                                                       "
        ," currently transcribing storie content.                                            "
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/on.storie.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.storie.js'
        , plan: 'https://plan.ionify.net/'
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