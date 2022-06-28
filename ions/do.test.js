;
~
{ re:
    { id:  'do.test@ionify'
    , of: ['tests','core','sensation','composition']
    , as: ['examination']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220627
    , at:  -0.06
    , is: "ionify's ~on.do.after api examination"
    , go:
        { help: 'https://github.com/ionify/ionify/issues'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/do.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/do.test.js'
        , deal: 'https://deal.ionify.net/'
        , join: 'https://github.com/ionify/about/tree/public/team'
        , seek: 'https://api.ionify.net/'
        },
      we:
        [ "were ..."
        , "must fix 🐛 ~on.do.after.all -8.20211203: only senses sets of unique@ids"
        , "must fix 🐛 ~on.do.after.#   -8.20211203: only senses sets of unique@ids"
        , "will ..."
        , "want ..."
        , "like ..."
        ]
    },

  valueOf:function
  test_do()
    { delete this.valueOf <- this

      ~
      { do:function()
          { ~{log:"✅ ~do: Function"}
          }
      }
      ~
      { do: 'hey'
      , hey :function
         hi ()
            { ~{log:"✅ ~do: Function: named"}
            }
      }

      ~ {do: {log:"✅ ~do: {}: oli: object-literal ion"}}
      ~ {do: 'went', went:{log:"✅ ~do: {}: oli: named"}}

      ~ {do: [{log:"✅ ~do: []: ali: array-literal ion"}] }
      ~ {do: 'many', many:[{log:"✅ ~do: []: ali: named"}] }
      ~ {do: ['aesop'], aesop:{log:'✅ ~do: ["aesop: array-expressed storie or phrase"]'}}
      ~ {do: null}


      ~
      { on: ['o@n.e','t@w.o','o@o.o'], after:'all'
      , do:function
        go( actions)
          { actions || (actions = go.in)
          ; (   actions ['o@n.e'] == 1
            &&  actions ['t@w.o'] == 2
            &&  actions ['o@o.o'] == 0.0
            )   ?  ~ {log  :'✅ ~on: i@ds do:Function after:all'}
                :  ~ {error:'❌ ~on: i@ds do:Function after:all', halt:false}
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
          ; (action.test > 2) && ~{log  :'✅ ~on: i@ds do:Function after:#'}
          ; (action.test < 2) && ~{error:'❌ ~on: i@ds do:Function after:#', halt:false}
          }
      }
      ~
      [ {'t@e.st':1, test:1}
      , {'t@e.st':2, test:2}
      , {'t@e.st':3, test:3}
      ]
    }
}
;