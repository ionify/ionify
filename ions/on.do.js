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
      [" implements ionify's ~on:type,as,do,has,id,is action which enables"
      +" sensing ions"
      ],
    we:
      [" were ..."
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
      ~ this
        this.ionify ()
      },

  ionify:
    function ionify ()
      { var ondo = ionify . with  || (ionify.with = ionify == this.ionify ? this : null)
            ondo . link   . is    .   with  = ondo
            ondo . link   . is    ()
            ondo . onion          ({on:'ion',as:1,has:1,id:1,is:1,do:1})
         // ondo . onSensor       ({on:Object, do:ondo.onion})
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

  onion:
    { re:
        { is: 'method'
        , it: "senses ~{on:'ion', as:[], has:[], id:[], is:[], do:action}"
        , we:
            [ "were confused about how to initiate & integrate these sensors 🤔"
            , "were re-implementing the ~on action per:"
            + "   https://github.com/orgs/ionify/projects/1#card-47996813"
            , "will handle oli's here & delegate others to other sensors"
            ]
        },
      my:
        { terms: {as:true, has:true, id:true, is:true}
        },
      is:
        function onion (ion)
          { if (!ion.on && !('on' in ion) && !ion.do && !('do' in ion)) return

            var ondo  = onion.with
              , terms = onion.my.terms

            for
              (var  term  in terms)
              (ion [term] || term in ion)
              && ~ {on: [['on',term,'do']], [`on ${term} do`]: ondo [term]}
          }
    },

  as:
    { re:
        { id: 'on.as.do'
        , is: 'method'
        , it: "senses ~{on:'ion', as:[], has:[], id:[], is:[], do:action}"
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
        , name: (/function\s+(.*)\s*\(/)
        },
      is:
        function as (ion)
          { var ondo  = as.with
              , my    = ondo.my
              , on    = ion.on
              , az    = ion.as
              , d0    = ion.d0
              , type

            (typeof on != 'string')
                && (type = Object.prototype.toString.call (on) .match (my.name)[1])
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

  onSensor:
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
            [ "must enable  ~{on:Type,   no:action} so ionify won't sense that Type"
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
        function onSensor (ion)
          { var ondo    = onSensor.with
              ||        ( onSensor.with = onSensor == this.onSensor ? this : null)
              , my      = onSensor.my
              , core    = my.core
              , name    = my.name
              , undo    = my.undo
              , known   = onSensor.our.ionified
              , Sensor  = ion.on
              , type    = Sensor.name     || String (Sensor).match (name)[1]
              ; undo  [type]              =  Sensor.prototype.valueOf
              ; Sensor.prototype.valueOf  =  ion [type] || ion.do
              ; known [type]              =  true
              ; known [core [type]]       =  !!core [type]

          ~ {debug: ["onType", type, JSON.stringify (known)] }
            return true
          }
    },
}
;