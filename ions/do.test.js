;
~
{ re:
    { id:  'do.test@ionify'
    , of:  'tests'
    , as:  'test.0'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211203
    , at:  -0.1
    , is: "testing ionify's ~do actions"
    , we:
        [ "must fix 🐛 ~on.do.after.all -8.20211203: only senses sets of unique@ids"
        , "must fix 🐛 ~on.do.after.#   -8.20211203: only senses sets of unique@ids"
        ]
    }
}

~
{ do:function()
    { +{log:"✅ ~do:Function"}
    }
}

~
{ do: 'hey'
, hey :function
   hi ()
      { +{log:"✅ ~do:Function:named"}
      }
}
~ {do: {log:"✅ ~do:ion:{}"}}
~ {do: 'went', went:{log:"✅ ~do:ion:{}:named"}}
~ {do: [{log:"✅ ~do:[]"}] }
~ {do: ['aesop'], aesop:{log:'✅ ~do:["aesop"]'}}
~ {do: null}


~
{ on: ['o@n.e','t@w.o','o@o.o'], after:'all'
, do:function
  go( actions)
    { actions || (actions = go.in)
    ; (   actions ['o@n.e'] == 1
      &&  actions ['t@w.o'] == 2
      &&  actions ['o@o.o'] == 0.0
      )   ?  ~ {log:'✅ ~on.i@ds.do.after.all'}
          :  ~ {log:'❌ ~on.i@ds.do.after.all'}
    }
}
~
[ {'o@n.e':1}
, {'t@w.o':2}
, {'o@o.o':0.0}
]

~
{ on:['t@e.st']
, after:2
, do:function
  go( action)
    {  action || (action = go.in)
    ; (action.test > 2) && ~{log:'✅ ~on.i@ds.do.after.#'}
    ; (action.test < 2) && ~{log:'❌ ~on.i@ds.do.after.#'}
    }
}
~
[ {'t@e.st':1, test:1}
, {'t@e.st':2, test:2}
, {'t@e.st':3, test:3}
]
;