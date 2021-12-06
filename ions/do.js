;
~
{ re:
    { id:  'do@ionify'
    , of:  'core'
    , as:  'action'
    , by: ['mike.lee','team']
    , on:  -4.200709
    , to:  -8.20211205
    , at:  -0.1
    , is:
        [ "implementing ~on.do.after to do something after sensing specific ions"
        , "implementing: "
        , "   ~ {   on:['ids'], do:action, after:'all'|'any'|'each'|'1..n'}"
        , "   + {after:['ids'], do:action}  "
        , "   + {on: String || [], do: ...} "
        , "   + {do: String || []}          "
        ],
      we:
        [ "must ... "
        , "will ... "
        , "like ionified [typeof todo] --> ~ {is:todo, type:'ionified'} "
        , "like ... "
        ]
    },

  on:
    [ ['on'   , 'do', 'after']
    , ['on'   , 'do']
    , ['after', 'do']
    ,           'do'
    ],

  do :function
  d0 (ion)
    { var todo  =    ion.do
    ;     todo  && ! d0.our.ionified [typeof todo]
                && ~{find:todo, in:ion, as:'do'}
                &&  (todo = ion.do)
    ;   ~ todo
    ; return true
    },

 'after do':function
  after_do ()
    { this.on    = this.after
    ; this.after = 'all'
    ; after_do.with.after.call (this)
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
  afteR ()
    { var ion   = this
        , ions  = ion.on
        , after = ion.after || 'all'
        , own   = afteR.with
        , sense = own.ensure [after] || own.ensure [typeof after] || 'all'
        , ready = own [sense] (ion)
        , todo  = ion.do/*
        ; todo  = doAfter.our.ionified [typeof todo]
                ?   todo
                : ~{find:todo, in:ion} && ion [todo]
        ; todo || (todo = ion.do)*/

      if (!todo) return void ~{warn:`~on.do.after: unable to find ${ion.do}`}
      var on = {on:ions, after:after}
      for (var next=-1, last=ions.length; ++next < last; on [ions [next]] = ready)
      ion.do = ready
    ~ on
    },

  all :function
  all (ion)
    { var go   = all.with.go
        , got  = {}
        , ions = ion.on
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
            ~  todo.do
      can && (todo.do.in = null)
    },

  any :function
  any (action)
    { var done = false
        , todo = action.do
        ,   go = any.with.go

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
        , go = each.with.go

      function after_each ()
        { if (!this) return
          ("function" == typeof todo && todo.length)
          ?   todo (this)
          : ~ todo <= / todo? remove duplicate todo from script.onload /
        }
      return after_each
    },

  number :function
  number (ion)
    { var count = 0
        , todo  = ion.do
        , go = number.with.go

      function after_number ()
        { if (isNaN (ion.after) || (ion.after >= ++count)) return
          go ({do:todo, with:this})
        }
      return after_number
    }
}
;