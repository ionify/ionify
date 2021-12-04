;
~
{ re:
    { id:  'do@ionify'
    , of:  'core'
    , as:  'action'
    , by: ['mike.lee','team']
    , on:  -4.200709
    , to:  -8.20211203
    , at:  -0.1
    , is:
        [ "implementing ~on.do.after to do something after sensing specific ions"
        , "implementing: "
        , "~ {   on:['ids'], do:action, after:'all'|'any'|'each'|'1..n'}"
        , "+ {after:['ids'], do:action}  "
        , "+ {on: String || [], do: ...} "
        , "+ {do: String || []}          "
        ],
      we:
        [ "were implementing & testing on.do.after.# sensor disabling..."
        , "must ... "
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

  do:
    function doing (ion)
      { var todo  = ion.do
      ;     todo && ! doing.our.ionified [typeof todo] && ~{find:todo, in:ion, as:'do'} && (todo = ion.do)
      ;   ~ todo
      ; return true
      },

 'after do':
    function afterDo ()
      { this.on    = this.after
      ; this.after = 'all'
      ; afterDo.with.after.call (this)
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

  after:
    function doAfter ()
      { var ion   = this
          , ions  = ion.on
          , after = ion.after || 'all'
          , own   = doAfter.with
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

  all:
    function afterAll (ion)
      { var go   = afterAll.with.go
          , got  = {}
          , ions = ion.on
          , todo = ion.do
          , them = {}
          , done = false
          ;
        function afterAllIons ()
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
          ~ {on:ions, no:afterAllIons}
            go ({do:todo, with:them})
          }
        return afterAllIons
      },

  any:
    function afterAny (action)
      { var done = false
          , todo = action.do
          ,   go = afterAny.with.go

        function afterAnyIon ()
          { var ion = this
          ~ {on:ion.re.id, no:afterAnyIon}
            if (done) return
            done = true
            go ({do:todo, with:ion})
          }
        return afterAnyIon
      },

  each:
    function afterEach (ion)
      { var todo = ion.do
          , go = afterEach.with.go

        function afterEachIon ()
          { if (!this) return
            ("function" == typeof todo && todo.length)
            ?   todo (this)
            : ~ todo <= / todo? remove duplicate todo from script.onload /
          }
        return afterEachIon
      },

  number:
    function afterNumberOf (ion)
      { var count = 0
          , todo  = ion.do
          , go = afterNumberOf.with.go

        function afterNumberOfIons ()
          { if (isNaN (ion.after) || (ion.after >= ++count)) return
            go ({do:todo, with:this})
          }
        return afterNumberOfIons
      },

   go :function
   go (todo)
      { var can = ! ('in' in todo.do)
        can && (todo.do.in = todo.with)
             ~  todo.do
        can && (todo.do.in = null)
      }
}
;