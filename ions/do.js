;
~
{ re:
    { id:  'do@ionify'
    , of: ['core','public','api']
    , as: {sensation:-0.001, composition:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221117
    , at:  -0.030
    , is:
        [ "implementing ~on.do.after to do something after sensing specific ions"
        , "implementing: "
        , "   ~ {   on:['ids'], do:action, after:'all'|'any'|'each'|'1..n'}"
        , "   + {after:['ids'], do:action}  "
        , "   + {on: String || [], do: ...} "
        , "   + {do: String || []}          "
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/do.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/do.test.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "must ... "
        , "will ... "
        , "like ionified [typeof todo] --> + {is:todo, type:'ionified'} "
        , "like ... "
        ]
    },

  on:
    [ ['on'   , 'do', 'after']
    , ['on'   , 'do']
    , ['after', 'do']
    ,           'do'
    ],

  do:function
  dO( ion )
    { var todo  =    ion.do
    ;     todo  && ! dO.with.our.ionified [typeof todo]
                && +{find:todo, in:ion, as:'do'}
                &&  (todo = ion.do)
    ;   + todo
    ; return true
    },

 'after do':function
  after_do ()
    { this.on    = this.after
    ; this.after = 'all'
    ; after_do.with.its.after.call (this)
    },

 'on do after':'after',
 'on do'      :'after',

  ensure:
    {        '':'all'
    ,       all:'all'
    ,       any:'any'
    ,      each:'each'
    ,      null:'all'
    ,    number:'number'
    , undefined:'all'
    },

  after :function
  after ()
    { var ion   = this
        , ions  = Array.isArray (ion.on) ? ion.on : [ion.on]
        , aftr  = ion.after || 'all'
        , its   = after.with.its
        , sense = its.ensure [aftr] || its.ensure [typeof aftr] || 'all'
        , ready = its [sense] (ion)
        , todo  = ion.do/*
        ; todo  = after.with.our.ionified [typeof todo]
                ?   todo
                : +{find:todo, in:ion} && ion [todo]
        ; todo || (todo = ion.do)//*/

      if (!todo) return void +{warn:`+on.do.after: unable to find ${ion.do}`}
      var on = {on:ions, after:aftr}
      for (var next=-1, last=ions.length; ++next < last; on [ions [next]] = ready)
      ion.do = ready
    ~ on
    },

  all :function
  all (ion)
    { var go   = all.with.its.go
        , got  = {}
        , ions = Array.isArray (ion.on) ? ion.on : [ion.on]
        , todo = ion.do
        , them = {}
        , done = false

      function
      after_all ()
        { if (done)  return

          var   id = (this.re && this.re.id) || this.id
          them[id] = this[id]
          got [id] = true

        ~ {debug: `\nget: ${ions}\ngot: ${Object.keys (got)}`}

          for ( var next = -1
              ,     last = ions.length
              ;  ++ next < last
              ;
              ) if (!got [ions [next]]) return

          done = true
           ~  {on:ions, no:after_all}
          go ({do:todo, with:them})
        }

      return after_all
    },

  go :function
  go (todo)
    { var can = ! ('in' in todo.do)
      can && (todo.do.in = todo.with)
             ~todo.do
      can && (delete todo.do.in)
    },

  any :function
  any (action)
    { var done = false
        , todo = action.do
        ,   go = any.with.its.go

      function after_any ()
        { var ion = this
        ~ {on:ion.re.id, no:after_any}
          if (done) return
          done = true
          go ({do:todo, with:ion})
        }
      return after_any
    },

  each :function
  each (ion)
    { var todo = ion.do
        , go = each.with.its.go

      function after_each ()
        { if (!this) return
          ('function' == typeof todo && todo.length)
          ?   todo (this)
          : + todo <- / todo? remove duplicate todo from script.onload /
        }
      return after_each
    },

  number :function
  number (ion)
    { var count = 0
        , todo  = ion.do
        , go = number.with.its.go

      function after_number ()
        { if (isNaN (ion.after) || (ion.after >= ++count)) return
          go ({do:todo, with:this})
        }
      return after_number
    }
}
;