;
~
{ re:
    { id:  'do@ionify'
    , is:  'action'
    , by: ['mike.lee','team']
    , on:  -4.200709
    , to:  -7.20210417
    , at:  -0.1
    , it:
        [" implements ~on.do.after to do something after sensing specific ions"
        ," implements: "
        ," ~ {   on:['ids'], do:action, after:'all'|'any'|'each'|'1..n'}"
        ," + {after:['ids'], do:action}  "
        ," + {on: String || [], do: ...} "
        ," + {do: String || []}          "
        ],
      we:
        [" were ... "
        ," must ... "
        ," will ... "
        ," like ionified [typeof todo] --> ~ {is:todo, type:'ionified'} "
        ," like ... "
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
    , undefined:'all'
    },

  after:
    function doAfter ()
      { var ion   = this
          , ions  = ion.on
          , after = ion.after || 'all'
          , own   = doAfter.with
          , ready = own [own.ensure [after] || 'all'] (ion)
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
      { var got  = {}
          , ions = ion.on
          , todo = ion.do
          , done = false
          ;
        function afterAllIons ()
          { if (done)  return
            var  id  = (this.re && this.re.id) || this.id
            got [id] = true
          ~ {debug: `\nget: ${ions}\ngot: ${Object.keys (got)}`}
            for ( var next = -1
                ,     last = ions.length
                ;  ++ next < last
                ;
                ) if (!got [ions [next]]) return
            done = true
          ~ {on:ions, no:afterAllIons}
          ~ todo
          }
        return afterAllIons
      },

  any:
    function afterAny (ion)
      { var done = false
          , todo = ion.do

        function afterAnyIon ()
          { var ion = this
          ~ {on:ion.re.id, no:afterAnyIon}
            if (done) return
            done = true
          ~ todo
          }
        return afterAnyIon
      },

  each:
    function afterEach (ion)
      { var todo = ion.do

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

        function afterNumberOfIons ()
          { !isNaN (ion.after) && (ion.after == ++count) && ~todo
          }
        return afterNumberOfIons
      }
}
;