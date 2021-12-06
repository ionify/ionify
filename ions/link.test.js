;
~
{'link.test@ionify':
  { of:  'tests'
  , as:  'test.0'
  , by: ['mike.lee', 'team']
  , on:  -8.20211205
  , to:  -8.20211205
  , at:  -0.0
  , is:  "testing ionify's ~link.to action. "
  , we:
      [~/were investigating why ~link.to:* wasn't working as expected.../

      ,~/know ~link doesn't set .with|our for ion's, only their function/
       +/or array members, so ions with none of those, have none.../

      , 'want tests to be done without being specified via a ~do.'
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
    { var from = link_to_object.with.my.from
        ,   to = {getourwith:[]}

      ~
      { link:
          {boolean:from.number}//boolean}
      , to:(~to, to.re.id)
      }

      to.getourwith.our.boolean == from.number//boolean
        ? ~{log: '✅ ~link.to: object'}
        :~ {log: '❌ ~link.to: object'}
    },

'link to *'   :function
 link_to_all  ()
    { var from    = link_to_all.with.my.from
        , to      = {getourwith:[]}
        , to_our  = (~to, to.getourwith.our)

      ~ {link:from, to:'*'}

      for (var thing in to_our)
          if(to_our.hasOwnProperty (thing) && to_our [thing] != from [thing])
              return ~ {log: '❌ ~link.to: *'}
      ~ {log: '✅ ~link.to: *'}
    }
}