;
~
{ re:
    { id:  'get@ionify'
    , of: ['core','public','api','launch']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike👨🏾‍💻lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221107
    , at:  -0.050
    , as:
        { acquisition   :-0.001, convention   :-0.001, sensation     :-0.001
        , composition   :-0.001, specification:-0.001, initialization:-0.001
        , transcription :-0.001
        },
      is:
        [ "ionify's public ~get api's implementation"
        , "an acquisition@  so it defines ~get actions for acquiring things"
        , "acquires things via its habitation's get function"
        , "its host application by ~get.ing its ions.js launch configuration"
        , "~get.ing ionify's ions to initialize the environment with ionify"
        ],
      go:
        { plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/get.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/get.test.js'
        , join: 'https://github.com/ionify/about/tree/public/team'
        , deal: 'https://github.com/ionify/ionify/blob/public/LICENSE.txt'
        , more: 'https://api.ionify.net/'
        },
      we:
        [ "WERE forming re.as & re.of relation sensing & ~get.ing convention"
        , "want to ~get & apply configuration(s) asap; coordinate with on.ions@"
        , "will set all ~get actions' ionid@ domains to the current ion's"
        , "like having a .resolve action@test.ionify to test/action.js"

        , "were ... "
        , "must ... "
        , "want ... "
        , "like ... "
        ]
    },

  on:
    [ ['get', 'in', 'then', 'after']
    , ['get'      , 'then', 'after']
    , ['get', 'in', 'then']
    , ['get'      , 'then']
    , ['get', 'in'  ]
    , ['get', 'and' ]
    , ['get']
    ,  '*'
    ],

 '*':'got'
    ,

  valueOf :function
  ionify  ()
    { var ions
        = [    'on.ion@ionify',        're@ionify',         'next.id@ionify'
          ,        'id@ionify',        'of@ionify',            'with@ionify'
          ,                       'on.aeon@ionify', 'find.link.share@ionify'
          ,        'no@ionify',  'on.error@ionify',       'on.errors@ionify'
          ,    'logger@ionify'                    ,              'do@ionify'
          ,   'on.ions@ionify', 'on.action@ionify',       'on.storie@ionify'
          ,       'use@ionify',      'ions@ionify',     'on.ionified@ionify'
        //,     'on.do@ionify'
          ,      'ions'
          ]

      var get       = this.get
        ; get.with  = {its:this}
        ; get.via   = this.via

      delete this.valueOf <- this <= /invoke habitation observation of get@/
      get ({get:ions, in:'sequence'||'order'})
    },

  getInfo:
    [" does ~{get: ['ion.id' || './script.js'], then: ['actions']} "
    ,' will update get$.PATH with new @domains & their paths.      '
    ,' will move got() & .then code to ~get.then                   '
    ,' will sense ion ids vs. script paths: ./script.js            '
    ," will use .then() as ~on.do where ~{on:''|[], do:ion, after:all|any|each}     "
    ,' will set .then() to ~on.do.after                            '
    ,' will set ~get.then to do ~on:ion.id & script.onload; 1st called cancels 2nd. '
    ,' ... '
    ],
 'get info':
    [ ' and: create & invoke a ~do with it'
    , " get: ensure it's an array         "
    , "  in: ensure it's an expected value"
    , 'then: create beacon  function      '
    , ' get: create scripts with in & then'
    , ' get: attach scripts to webi       '
    ]
,'get then'         :'get'
,'get then after'   :'get'
,'get in'           :'get'
,'get in then'      :'get'
,'get in then after':'get'
,'get and'          :'get'
, get :function
  get (action)
    { var ionified  = get.with.our && get.with.our.ionified
        , its       = get.with.its
        , host      = its.host
        , resolve   = its.resolve

      action      ||  (action = this)
      action.and  && ~{do:action.and}
      Array.isArray   (action.get) || (action.get = [action.get])

      var todo  = action.then
        , ions  = action.get

      if( todo )
        { var on    =   {on:ions, do:todo, after:action.after}
          ionified  &&  (   ionified [typeof todo]
                        || (+{find:todo, in:action}, todo = on.do = action [todo])
                        )
        ~ on
          todo = on.do
        }

      for ( var last = ions.length, id, ion, uri
          ,     next = -1
          ;  ++ next < last;
          )
          { id =ions[next]
            its.ions[id] = ion = {id:id, uri:uri}
            its.gets.push (id); its.gets[id] = its.gets.length - 1
            its.gots.push (id); its.gots[id] = its.gots.length - 1
            get.via ({at:id, in:its.ORDER[action.in], then:todo})
          }
    },

  ORDER:
    { ''        : 'parallel'
    , null      : 'parallel'
    , order     : 'order'
    , sequence  : 'order'
    , undefined : 'parallel'
    },

  gets:[],
  gots:[],
  ions:{},

  errors:
    { acquisition : "😞 no habitation@ has yet enabled ~get acquisition@"
    , skipping    : "🤔 skipping ~get.ing: "
    },

  via :function
  via (get)
    { var fail
        =   { get : errors.acquisition
            , skip:[errors.skipping, get.at, get]
            }
        , state = ~{warn: fail.get }
        ; state = ~{warn: fail.skip}

    ~/if transcription's return value is habitation@'s try console/
      if( state == -4.200709 && typeof console != 'undefined')
        { console.warn (fail.get)
        ; console.warn (fail.skip)
        }
    },

  got :function
  got (ion)
    {//unqueue the observed ion from gets
    //~/observe each ion's re.as & re.of relations then prioritize & ~get them/;
    }
}
;