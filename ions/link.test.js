;
~
{'link.test@ionify':
    { of: ['tests','core','context','sensation','composition']
    , as: ['examination.0']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -8.20211205
    , to:  -7.20221117
    , at:  -0.04
    , is:  "ionify's ~link.to api examination"
    , go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/link.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/find.link.share.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ 'want tests to be done without being specified via a ~do'
        ]
    },

  do:
    [ 'link name'
    , 'link *'
    , 'link * with exceptions'
    , 'link to'
    , 'link to object'
    , 'link to *'
    ],

  my:
    { from:
      { array     : Array
      , boolean   : false
      , function  : Function
      , number    : Infinity
      , object    : Object
      , regex     : /regex/
      , string    : String
      , undefined : void 0
      }
    },

 'link to object' :function
  link_to_object  ()
    { var from = link_to_object.with.its.my.from
        ,   to = {}

      ~
      { link: {number:from.number}
      ,   to: (+to, to.re.id)
      }

      to.domain.number == from.number
        ? +{log  : '✅ ~link: to:object'}
        : +{error: '❌ ~link: to:object', halt:false}
    },

 'link to *'   :function
  link_to_all  ()
    { var from    = link_to_all.with.its.my.from
        , to      = {}
        , to_our  = (+to, to.domain)

      ~ {link:from, to:'*'}

      for (var thing in from)
          if(from.hasOwnProperty (thing) && from [thing] != to_our [thing])
              return + {error: '❌ ~link: to:*', halt:false}
      ~ {log: '✅ ~link: to:*'}
    }
}