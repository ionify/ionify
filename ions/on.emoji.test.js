;
~
{ re:
    { id:  'on.emoji.test@ionify'
    , of: ['tests','core','emoji','sensation','composition']
    , as: ['examination']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220627
    , at:  -0.06
    , is:  "ionify's emoji composition test suite"
    , go:
      { help: 'https://github.com/ionify/ionify/issues'
      , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
      , code: 'https://github.com/ionify/ionify/blob/public/ions/on.emoji.js'
      , test: 'https://github.com/ionify/ionify/blob/public/ions/on.emoji.test.js'
      , deal: 'https://deal.ionify.net/'
      , join: 'https://github.com/ionify/about/tree/public/team'
      , seek: 'https://api.ionify.net/'
      },
    we:
      [ "were examining ~on.as ¿partial 🐛 matching?"
      , "must ..."
      , "like ..."
      , "have ..."
      , "wont ..."
      ]
    },

  valueOf:function
  test_emoji()
    { delete this.valueOf <- this

    ~['- . 0']- {error: "❌ ~['- . 0']-  <= /ionify isn't disabled/", halt:false}
    +['0 . 0']+ {log  : "✅ +['0 . 0']+  <= /ionify is     enabled/"}
    -['0 . -']- {error: "❌ -['0 . -']-  <= /ionify isn't disabled/", halt:false}
    &['0 . 0']& {log  : "✅ &['0 . 0']&  <= /ionify is     enabled/"}

    }
}
;