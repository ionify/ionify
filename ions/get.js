;
~
{ re:
    { id:  'get@ionify'
    , of: ['core','public','api','launch']
    , do: { transcription :-0.001 }
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221116
    , at:  -0.051
    , as:
        { acquisition :-0.001, sensation    :-0.001, composition   :-0.001
        , convention  :-0.001, specification:-0.001, initialization:-0.001
        },
      is:
        [ "ionify's public ~get api's specification@.s implementation@"
        , "an acquisition@  so it defines ~get action@s for acquiring things"
        , "acquires things via its habitation@ .get() method"
        , "~get.ing ionify's configuration@ habitation@ initialization@"
        , "~get.ing ionify's ions to ionify its habitation@"
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/get.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/get.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WERE assaying re.as, re.do & re.of relationships & before ~get.ing."
        , "WERE implementing a convention to introspect & ~get re.as relation@s"
        , "HAVE processed ~get.d ions' re.as; now need their space definitions@"
        , "want to ~get & apply configuration(s) asap; coordinate with on.ions@"

        , "will set all ~get actions' ionid@ domains to the current ion's"
        , "like having a .resolve of action@test.ionify to test/action.js"

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
  //,  '*'
    ],
       /*
 '*':'got'
    , //*/

  valueOf :function
  ionify  ()
    { var ions
        = [    'on.ion@ionify',   /*'on.do@ionify'
          ,*/      're@ionify',   /*'re.hi@ionify'
          ,*/ 'next.id@ionify',        'id@ionify'
          ,      'with@ionify',        'of@ionify'
          ,                       'on.aeon@ionify', 'find.link.share@ionify'
          ,        'no@ionify',  'on.error@ionify',       'on.errors@ionify'
          ,    'logger@ionify'                    ,              'do@ionify'
          ,   'on.ions@ionify', 'on.action@ionify',       'on.storie@ionify'
          ,       'use@ionify',                         'on.ionified@ionify'
          //*/
          ]

      var get       = this.get
        ; get.with  = {its:this}
        ; get.via   = this.via

      delete this.valueOf <- this <= /invoke habitation observation of get@/
      get ({get:ions, in:'sequence'||'order'})
    },

  getInfo:
    [ "does ~{get: ['ion.id@domain' || './script.js'], then: ['actions']} "
    , "note and: create & invoke a ~do with ~get"
    , "note  get: ensure ~get    is an array"
    , "note   in: ensure ~get.in is an expected value"
    , "note then: create beacon  function"
    , "note  get: create scripts with ~get.in & ~get.then"
    , "note  get: attach scripts to webi"

    , "will update get$.PATH with new @domains & their paths."
    , "will move got() & .then code to ~get.then"
    , "will sense ion ids vs. script paths: ./script.js"
    , "will use .then() as ~on.do where ~{on:''|[], do:ion, after:all|any|each}"
    , "will set .then() to ~on.do.after"
    , "will set ~get.then to do ~on:ion.id & script.onload; 1st called cancels 2nd."
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
            its.gets[id] = its.gots[id] = true
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

  gets:{},
  gots:{},
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
    { var list
        , spaces= got.with.our.settings.relations
        , its   = got.with.its
        , gets  = its.gets
        , gots  = its.gots
        , id    = ion.re.id
        , as    = ion.re.as
        , needs = []
        , name  =(/(.*)@$/)
        , d
        , domain=(/.*(@.*)/)
        , found = id.match (domain)
        ; found = found  ?  found[1] : ''

      gets[id] && delete gets[id]

    //~/observe each ion's re.as & re.of relations then prioritize & ~get them/;
      for
        ( var a in as )
        { if(!as.hasOwnProperty(a)) continue
          list = spaces[a]

          if(!list)
            {   d   = a.match (domain)
            ;   a  += d ?  d[1] : found
            ; list  = spaces[a]
            ; if (!list) continue
            }

          for
            ( var s=-1, S=list.length, space
            ;     s <-- S;
            )
            { space = list [S]

             ~space.search (name )
                && (list   = spaces [a.match (name)[1]] || '')
                && (needs  = needs.concat (list))

             ~space.search (found)
                || (space += found)
                && ! gots[space]
                && !needs[space]
                &&  needs.push (space)
                && (needs[space] = needs.length-1)
            }
        }

      its.get ({get:needs})
    //gots[id] && delete gots[id]
    }
}
;