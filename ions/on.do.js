;
~
{ re:
    { id:  'on.do@ionify'
    , as: ['sensor',  'sense', 'listen', 'handle', 'delegate', 'event', 'pubsub'
          ,'message', 'messaging'
          ]
    , is: ['action', 'sensor']
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20201029
    , at:  -0.1
    , it:
        [" senses ~{on:'ion', as:[], has:[], id:[], is:[], do:action} "
        ],
      we:
        [" were re-implementing ionify's ~on action per:"
        +"    https://github.com/orgs/ionify/projects/1#card-47996813"
        ," were ..."
        ," want ..."
        ," must ..."
        ," like ..."
        ," have ..."
        ," wont ..."
        ," cant ..."
        ]
    },

  valueOf:
    function ondo ()
      { delete this.valueOf
      ~(this.ionify.is.with = this)
        this.ionify.is ()
      },

  ionify:
    { re:
        { is: 'method'
        , it:
            [ "initializes ionify's ~on.as.has.id.is.do.no sensors"
            , "activates linking for this on.do@ ion"
            ],
          we:
            [ "must fix on.ion.id work🐛round that is polluting ions with ~on.id"
            ]
        },
      my:
        {
        },
      is:
        function ionify ()
          { var ondo  = ionify.with || (ionify.with = ionify == this.ionify ? this : null)
              , terms = ondo.TERMS
              , sense = ondo.any.is
              ; ondo  . link.is.with = ondo
              ; ondo  . link.is ()

            for
              ( var term  in terms)
              {
              ~ {on:[['on',term,'do']], [`on ${term} do`]:sense}
              ~ {on:[['on',term,'no']], [`on ${term} no`]:sense}
              }

            ["Test ~on.as.has.id.is.do.no actions"]
            ^   {on:'ion',  as:[], do:Function}
            |   {on:'ion',  as:[], no:Function}
            |   {on:'ion', has:[], do:Function}
            |   {on:'ion', has:[], no:Function}
            |   {on:'ion',  id:[], do:Function}
            |   {on:'ion',  id:[], no:Function}
            |   {on:'ion',  is:[], do:Function}
            +   {on:'ion',  is:[], no:Function}

          //ondo.onion ({on:Object, do:ondo.onion})
          }
    },

  TERMS:
    { as:true, has:true, id:true, is:true
    },

  any:
    { re:
        { id:  'any.on.as.has.id.is.do.no'
        , is: ['sensor','method']
        , it: "senses ~{on:'ion',as:[],has:[],id:[],is:[],do:action,no:action}"
        , we:
            [ "were ..."
            , "will ..."
            , "must fix on.ion@ ion.id:true work🐛round interferring with ~on.do"
            , "must fix ion.on & ion.on$ 🐛's that override user-defined values!"
            ]
        },
      my:
        { TYPE:
            { function: (/function\s+(.*)]/)
            ,   object: (  /object\s+(.*)]/)
            },
          getType: Object.prototype.toString
        },
      is:
        function any (ion)
          { if (typeof ion.id == 'boolean') return

            var ondo  = any.with
              , my    = any.my
              , on    = ion.on
              , which = my.getType
              , TYPE  = my.TYPE
              , type

            (typeof on     != 'string')
                &&((type    =  which.call (on) .match (TYPE.function))
                || (type    =  which.call (on) .match (TYPE.object  )))
                && (type    = type [1])
                && (ion.on$ = on      )
                && (ion.on  = type    )

            var sense, terms = ondo.TERMS
            for
              ( var term in terms)
              { if (! ion[term] && ! (term in ion)) continue
                sense = ondo [term]
                sense ( ion  )
              }
          }
    },

  as:
    { re:
        { id: 'on.as.do.no'
        , is: 'method'
        , it: "senses ~{on:'ion', as:[], do:action, no:action}"
        , we:
            [ "were ..."
            , "will ..."
            ]
        },
      my:
        { sense:
            {    ion: true
            , Object: true
            }
        },
      is:
        function as (ion)
          { var ondo  = as.with
              , my    = ondo.my
              , on    = ion.on
              , az    = ion.as
              , d0    = ion.d0
              , type  = ion.on$

            az  && !Array.isArray (az) && (az = [az])

            for
              ( var a=az.length
              ;     a--   ;
              ) if (link [az [a]])  break
              ; if (a < 0)         return
return
            [" ~{on:'ion', has:[]} <= ~{on:'Object', has:[]} <= ~{on:Object, has:[]} "]+
            `
              Prepopulate types list with ion & Object
            `
            if (! sense [type]) sense [type] = d0;
            if (! sense [type]) /check for environment Type/  //return on  [type] (ion);
            ~ {on:'function', do:onType}
            + {on:'Object'  , do:onType}
            & {on:'ion'   , do:onion}
            & {on:'action', do:onFunction}
            [""]
          }
    },

  has:
    { re:
        { id: 'on.has.do.no'
        , is: 'method'
        , it: "senses ~{on:'ion', has:[], do:action, no:action}"
        , we:
            [ "were ..."
            , "will ..."
            ]
        },
      my:
        {
        },
      is:
        function has (ion)
          { var ondo  = has.with
              , my    = ondo.my
              , on    = ion.on
              , az    = ion.as
              , d0    = ion.d0
          }
    },

  id:
    { re:
        { id: 'on.id.do.no'
        , is: 'method'
        , it: "senses ~{on:'ion', id:[], do:action, no:action}"
        , we:
            [ "were ..."
            , "will ..."
            ]
        },
      my:
        {
        },
      is:
        function id (ion)
          { var ondo  = id.with
              , my    = ondo.my
              , on    = ion.on
              , az    = ion.as
              , d0    = ion.d0
          }
    },

  is:
    { re:
        { id: 'on.is.do.no'
        , is: 'method'
        , it: "senses ~{on:'ion', is:[], do:action, no:action}"
        , we:
            [ "were ..."
            , "will ..."
            ]
        },
      my:
        {
        },
      is:
        function is (ion)
          { var ondo  = is.with
              , my    = ondo.my
              , on    = ion.on
              , az    = ion.as
              , d0    = ion.d0
          }
    },

  onion:
    { re:
        { id: 'on.ion'
        , as:
            [ 'sensor',  'sense', 'listen', 'handle', 'delegate', 'event', 'pubsub'
            , 'message', 'messaging'
            ],
          is:
            [ 'sensor',  'method'
            ],
          we:
            [ "want to have this replacing on.ion@'s ion sensor but not sure how to"
            , "must enable  ~{on:Type,   no:action} so ionify won't sense that Type"
            , "have enabled ~{on:Type,   do:action} so ionify can   sense that Type"
            , "have enabled ~{on:Type, Type:action} so ionify can   sense that Type"
            ]
          },
      my:
        { core: {Function:'function', Object:'object'}
        , name: (/function\s+(.*)\s*\(/)
        , undo: {}
        },
      is:
        function onion (ion)
          { var ondo    = onion.with
              ||        ( onion.with = onion == this.onSensor ? this : null)
              , my      = onion.my
              , core    = my.core
              , name    = my.name
              , undo    = my.undo
              , known   = onion.our.ionified
              , Sensor  = ion.on
              , type    = Sensor.name     || String (Sensor).match (name)[1]
              ; undo  [type]              =  Sensor.prototype.valueOf
              ; Sensor.prototype.valueOf  =  ion [type] || ion.do
              ; known [type]              =  true
              ; known [core [type]]       =  !!core [type]

          ~ {debug: ["onion", type, JSON.stringify (known)] }
            return true
          }
    },

  link:
    { re:
        { id:  'ion.link@ionify'
        , as: ["literate", "software", "program", "context", "link"]
        , is:  'method'
        , by: ['mike👨🏾‍💻lee', 'team']
        , on:  -4.200709
        , to:  -7.20201029
        , at:  -0.1
        , it:
            [ "enables defining modular, encapsulated & descriptive code"
            , "links code's implementation & description for easy access"
            ],
          we:
            [ "were ..."
            , "must ..."
            , "will ..."
            , "want to move this to its own ion and apply it to all ionify ions"
            , "have implemented its initial working version 🙌🏾 enjoy 🤲🏾"
            , "wont ..."
            , "cant ..."
            ]
        },
      my:
        { types:
            { method  : true
            , function: true
            , object  : true
            }
        },
      is:
        function link ()
          { var is, my, thing, type
              , ondo  = link.with
              , types = ondo.link.my.types

            for
              ( var term in ondo )
              { if (term == 're' || ~term.indexOf('@')) continue

                thing = ondo [term]
                type  = thing.re && thing.re.is

                !Array.isArray (type) && (type = [type])
                thing.is && type.push (typeof thing.is)

                for
                  ( var t=type.length
                  ;     t--   ;
                  ) if (types [type [t]])  break
                  ; if (t < 0)         continue

                my        =   thing.my
                my        || (my = thing.my = {})
                my.me     =   thing
                my.me.re  =   thing.re || (thing.re = {})

                is      = thing.is
                is.my   = my
                is.our  = thing.our || {}
                is.with = ondo

                ondo  [term] = is
                delete thing . is
                delete thing . our
              }
          }
    },
}
;