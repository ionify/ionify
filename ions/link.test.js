;
~
{'link.test@ionify':
    { of: ['tests','core','context','sensation','composition']
    , as: ['examination.0']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -8.20211205
    , to:  -7.20220707
    , at:  -0.02
    , is:  "ionify's ~link.to api examination"
    , go:
        { help: 'https://github.com/ionify/ionify/issues'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/find.link.share.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/link.test.js'
        , deal: 'https://deal.ionify.net/'
        , join: 'https://github.com/ionify/about/tree/public/team'
        , seek: 'https://api.ionify.net/'
        },
      we:
        [ "WERE migrating to with@ & of@ specifications"
        ,~/were investigating why ~link.to:* wasn't working as expected.../

        ,~/know ~link doesn't set .with|our for ion's, only their function/
         +/or array members, so ions with none of those, have none.../

        , 'want tests to be done without being specified via a ~do'
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
        ,   to = {getourwith:[]}

      ~
      { link:
          {boolean:from.number}//boolean}
      , to:(~to, to.re.id)
      }

      to.getourwith.our.boolean == from.number//boolean
        ? ~{log  : '✅ ~link: to:object'}
        : ~{error: '❌ ~link: to:object', halt:false}
    },

 'link to *'   :function
  link_to_all  ()
    { var from    = link_to_all.with.its.my.from
        , to      = {getourwith:[]}
        , to_our  = (~to, to.getourwith.our)

      ~ {link:from, to:'*'}

      for (var thing in to_our)
          if(to_our.hasOwnProperty (thing) && to_our [thing] != from [thing])
              return ~ {error: '❌ ~link: to:*', halt:false}
      ~ {log: '✅ ~link: to:*'}
    }
}