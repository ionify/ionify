;
~
{'find.test@ionify':
    { of: ['tests','core','context','sensation','composition']
    , as:  {examination:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -8.20190107
    , to:  -7.20221129
    , at:  -0.06
    , is:  "ionify's ~find.in.as api examination"
    , go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/find.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/find.link.share.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "were ..."
        , "must ..."
        , "will ..."
        , "have intentionally given this sensation a top-level id vs an re.id 🤓"
        , "want tests to be done without being specified via a ~do."
        , "like ..."
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
      { var state = find_name.with.our.logging.log

      ~ {do:['a']
        , a:[{log:true}
            ,{log:'✅ ~find: name'}
            ,{log:state}
            ]
        }
      },

 'find name shared':function
  find_name_shared (tester)
      { var state = find_name_shared.with.our.logging.log
        ~
        {'name@sharedfindtest':{}
        , share:{a:'a'}
        , a:[{log:true}
            ,{log:'✅ ~find: name: shared'}
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
      { var state = find_alias.with.our.logging.log

      ~ {do: 'a'
        , a: 'b'
        , b:[{log:true}
            ,{log:'✅ ~find: alias'}
            ,{log:state}
            ]
        }
      },

 'find alias shared':function
  find_alias_shared (tester)
      { var state = find_alias_shared.with.our.logging.log
        ~
        {'alias@sharedfindtest':{}
        , share:{b:'b'}
        , b:[{log:true}
            ,{log:'✅ ~find: alias: shared'}
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
      { var state = find_aliases.with.our.logging.log

      ~ {do: 'a'
        , a: 'b'
        , b: 'c'
        , c:[{log:true}
            ,{log:'✅ ~find: aliases'}
            ,{log:find_aliases.with.our.logging.log}
            ]
        }
      },

 'find aliases cyclical':function
  find_aliases_cyclical (tester)
      { var state = find_aliases_cyclical.with.our.logging.log

      ~ {do: 'a'
        , a: 'b'
        , b: 'a'
        }
      + {log:true}
      + {log:'✅ ~find: aliases: cyclical'}
      + {log:find_aliases_cyclical.with.our.logging.log}
      }
}
;