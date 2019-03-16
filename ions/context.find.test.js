;
~
{'context.find.test@ionify'
: { as:  'test'
  , by: ['mike.lee', 'team']
  , at:  'ionify.net'
  , on:  -8.20190107
  , to:  -8.20190109
  , is:  -0.1
  , it:  "tests ionify's ~find.in.as action. "
  , we: ["want tests to be done without being specified via a ~do."
        ]
  },

do:
  ["find name"
  ,"find shared name"
  ,"find alias"
  ,"find shared alias"
  ,"find aliases"
  ,"find circular aliases"
  ],

"find name"
: function name (tester)
    { var state = name.our.logging.log

    ~ {do:['a']
      , a:[{log:true}
          ,{log:"✅ ~find name"}
          ,{log:state}
          ]
      }
    },

"find shared name"
: function sharedName (tester)
    { var state = sharedName.our.logging.log
      ~
      {'name@sharedfindtest':{}
      , share:{a:'a'}
      , a:[{log:true}
          ,{log:"✅ ~find shared name"}
          ,{log:state}
          ]
      }
      +
      {'do.a@sharedfindtest':{}
      , do:['a']
      }
    },

"find alias"
: function aliased (tester)
    { var state = aliased.our.logging.log

    ~ {do: 'a'
      , a: 'b'
      , b:[{log:true}
          ,{log:"✅ ~find alias"}
          ,{log:state}
          ]
      }
    },

"find shared alias"
: function sharedAlias (tester)
    { var state = sharedAlias.our.logging.log
      ~
      {'alias@sharedfindtest':{}
      , share:{b:'b'}
      , b:[{log:true}
          ,{log:"✅ ~find shared alias"}
          ,{log:state}
          ]
      }
      +
      {'do.a.b@sharedfindtest':{}
      , do:['a']
      ,  a: 'b'
      }
    },

"find aliases"
: function multi (tester)
    { var state = multi.our.logging.log

    ~ {do: 'a'
      , a: 'b'
      , b: 'c'
      , c:[{log:true}
          ,{log:"✅ ~find aliases"}
          ,{log:multi.our.logging.log}
          ]
      }
    },

"find circular aliases"
: function circular (tester)
    { var state = circular.our.logging.log

    ~ {do: 'a'
      , a: 'b'
      , b: 'a'
      }
    + {log:true}
    + {log:"✅ ~find circular aliases"}
    + {log:circular.our.logging.log}
    }
}
;