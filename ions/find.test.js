;
~
{'find.test@ionify':
  { of:  'tests'
  , as:  'test.0'
  , by: ['mike.lee', 'team']
  , on:  -8.20190107
  , to:  -8.20211205
  , at:  -0.1
  , is:  "testing ionify's ~find.in.as action. "
  , we:
      [ 'want tests to be done without being specified via a ~do.'
      ]
  },

do:
  [ 'find name'
  , 'find name shared'
  , 'find alias'
  , 'find alias shared'
  , 'find aliases'
  , 'find aliases cyclical'
  ],

'find name':function
 find_name (tester)
    { var state = find_name.our.logging.log

    ~ {do:['a']
      , a:[{log:true}
          ,{log:'✅ ~find name'}
          ,{log:state}
          ]
      }
    },

'find name shared':function
 find_name_shared (tester)
    { var state = find_name_shared.our.logging.log
      ~
      {'name@sharedfindtest':{}
      , share:{a:'a'}
      , a:[{log:true}
          ,{log:'✅ ~find name shared'}
          ,{log:state}
          ]
      }
      +
      {'do.a@sharedfindtest':{}
      , do:['a']
      }
    },

'find alias':function
 find_alias (tester)
    { var state = find_alias.our.logging.log

    ~ {do: 'a'
      , a: 'b'
      , b:[{log:true}
          ,{log:'✅ ~find alias'}
          ,{log:state}
          ]
      }
    },

'find alias shared':function
 find_alias_shared (tester)
    { var state = find_alias_shared.our.logging.log
      ~
      {'alias@sharedfindtest':{}
      , share:{b:'b'}
      , b:[{log:true}
          ,{log:'✅ ~find alias shared'}
          ,{log:state}
          ]
      }
      +
      {'do.a.b@sharedfindtest':{}
      , do:['a']
      ,  a: 'b'
      }
    },

'find aliases':function
 find_aliases (tester)
    { var state = find_aliases.our.logging.log

    ~ {do: 'a'
      , a: 'b'
      , b: 'c'
      , c:[{log:true}
          ,{log:'✅ ~find aliases'}
          ,{log:find_aliases.our.logging.log}
          ]
      }
    },

'find aliases cyclical':function
 find_aliases_cyclical (tester)
    { var state = find_aliases_cyclical.our.logging.log

    ~ {do: 'a'
      , a: 'b'
      , b: 'a'
      }
    + {log:true}
    + {log:'✅ ~find aliases cyclical'}
    + {log:find_aliases_cyclical.our.logging.log}
    }
}
;