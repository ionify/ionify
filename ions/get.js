;
~
{ re:
    { id:  'get@ionify'
    , of: ['core','public','api','launch']
    , do: { transcription :-0.001 }
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -24.200709
    , to:  -18.578309204
    , at:  - 0.056
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
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/get.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/get.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "HAVE processed ~get.d ions' re.as; now need their space definitions@"
        , "want to ~get & apply configuration(s) asap; coordinate with on.ions@"

        , "must place ion into .gets before get@habitation to catch any error(s)"
        , "must clear ion from .gets after  get@habitation to sense any error(s)"
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
    ],

  with:
    { its:
        { get:
            { gets  :  'gets@get@ionify'
            , gots  :  'gots@get@ionify'
            , order : 'ORDER@get@ionify'
            }
        },
      our:
        { acquisition:'get@get@ionify'
        }
    },

  valueOf :function
  ionify  ()
    { var ions
        = [          'on.ion@ionify',     /*'on.do@ionify'
          ,*/            're@ionify',       're.id@ionify'
          ,        'on.error@ionify',   'on.storie@ionify',   'on.action@ionify'
          ,         'on.aeon@ionify',        'with@ionify', 're.do.as.of@ionify'
          , 'find.link.share@ionify',          'no@ionify',   'on.errors@ionify'
          ,          'logger@ionify',          'do@ionify',     'on.ions@ionify'
          ,             'use@ionify', 'on.ionified@ionify'
          ]

      var GET         = this
        , with_       = GET.with
        , get$        = with_.its.get

        , get         = GET.get
        ; get.with    ={its:GET}
        ; get.via     = GET.via

        ; GET.gots[GET.re.id]   = true
        ; with_.our.acquisition = get         ;+ /until we've with@-declaration/
        ; get$.gets   = GET.gets              ;+ /name-resolution, manually set/
        ; get$.gots   = GET.gots              ;+ /with@ declarations via 💃🏾:hip/
        ; get$.order  = GET.ORDER             ;+ /with@ declarations via 💃🏾:hip/

      delete GET.valueOf <=  GET <= /invoke habitation@ get@ observation/
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
    { var with_     = get.with
        , our       = with_.our
        , sensible  = our && our.ionified
        , sense     = our && our.on
        , atDomain  = (/.*@$/)

      action  ||    (action = this)
     ~action.and
      Array.isArray (action.get) || (action.get = [action.get])

      var todo  = action.then
        , ions  = action.get

      if( todo )
        { var on = {on:ions, do:todo, after:action.after}
          sensible                                          &&(
          sensible [typeof todo]                            ||(
         +{find:todo, in:action}, todo = on.do = action [todo]))
          sense (on)
        }

      for ( var how  = action.in  , domain  = action.from || ''
          ,     GET  = with_.its  , resolve = GET.resolve
          ,     gets = GET.gets   , id
          ,     gots = GET.gots   , ion
          ,     last = ions.length, uri
          ,     next = -1
          ;  ++ next < last;
          )
          { id = ions [next]
            if (id/*is*/===/*missing*/void 0) continue
            id = id.replace (atDomain, domain)
            GET.ions [id]  =  ion = {id:id, uri:uri}
            gets [id] = gots [id] =  true
            get.via ({at:id, in: GET.ORDER [how], then:todo})
            gets [id] && delete gets [id]
          }
    },

  gets:{},
  gots:{},
  ions:{},

  ORDER:
    { ''        : 'parallel'
    , null      : 'parallel'
    , order     : 'order'
    , sequence  : 'order'
    , true      : 'order'
    , false     : 'parallel'
    , undefined : 'parallel'
    },

  errors:
    { acquisition : "😞 no habitation@ has yet enabled ~get acquisition@"
    , skipping    : "🤔 skipping ~get.ing: "
    },

  via :function
  via (get)
    { var errors  = via.with.its.errors
        , fail    = { get : errors.acquisition
                    , skip:[errors.skipping, get.at, get]
                    }
        , state   = +{warn: fail.get }
        ; state   = +{warn: fail.skip}

    ~/if transcription's return value is habitation@'s try console/
      if( state == -4.200709 && typeof console != 'undefined')
        { console.warn (fail.get)
        ; console.warn (fail.skip)
        }
    }
}
;