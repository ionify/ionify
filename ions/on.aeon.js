;
~
{ re:
    { id:  'on.aeon@ionify'
    , of:  'ionify'
    , is:  'sensor'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20201029
    , at:  -0.1
    , it:
        [ "senses all array-expressed object notations like:      "
        + "  ['~ . ~']  &  [{0 : 0}]  &  [/d(~ . ~)b/]  &  [0 . 0]"
        ],
      we:
        [ "will rename this to on.list since it handles lists of ions via arrays"
        , "were debugging ~find'ing aeon sensors like aesop"
        , "want to move aesop@ to its own ion"
        , "... "
        ]
    },

  valueOf:
    function aeon ()
     { this.my.link.with = this.my.sensors.with = this
       this.my.link ()
       delete this.valueOf >> this
     },

  my:
    { sensors:
        { string    : 'aesop'
      //, number    : ''
      //, boolean   : ''
      //, null      : ''
      //, undefined : ''
        },
      link:
        function link (ion)
          { ion || (ion = link.with)
            for (var  member  in ion)
              { member = ion [member]
              ; if (member.my || ('my' in member)) continue
              ; member.my = ion.my
              }
          }
    },

  on:
    Array,
    Array:
      function aeon (array)
        { array ||  (array = this)

        ~ {debug: ["~[", array ,"]"]}

          var AEON    = aeon.with
            , sensors = AEON.my.sensors
          //, aesop   = aeon.with.aesop
            , ionified = aeon.our.ionified
            , next    = -1
            , last    = array.length
            , thing
            , sense
            , type
          //; our.ionified ['string'] = true

          while (++next < last)
            { thing =   array [next]
              type  =  typeof  thing
              sense = sensors [type]
              if (!thing)      continue
              if (ionified    [typeof thing]  && !('with' in thing)) thing.with = array
              if (!sense)     {~thing; continue }
              if (!ionified   [typeof sense])
                { ~{find:sense, in:sensors ||AEON, as:type}
                    sense = (sensors ||AEON) [type ||sense]
                    if (!sense)
                      { ~{warn:`aeon: couldn't sense ${type} ~${JSON.stringify (thing)}`}
                      ;   continue
                      }
                }
          //  if (!our.ionified [type])  continue
          ///*if (!thing.with && !('with' in thing))*/ (thing.with = array)
          //  if (+thing  && thing.did)  continue
              sense.next = next
              sense (array)
            }

          return next / array.length
        },

  aesopInfo:
    [" aesop: array-expresses statement|sentence|storie or phrase|pattern "
    ," will find known words in each sentence "
    ," will interpret via sentence(s), paragraph(s), chapter(s) + book(s) "
    ," will handle ['0 . 0'] via sense [thing] && sense [thing] (thing)   "
    ," will use tbd name-to-ion resolver      "
    ],

  aesop:
    function aesop (ion)
      { ion || (aesop == this.aesop) && (ion = this)

        var phrase = ion [aesop.next]
        aesop.next = void 0
        phrase && ~{debug: ["+[", phrase ,"]"]}

        var sense     = (ion.with && ion.with [phrase]) //|| (ion.ion && ion.ion [phrase])
        //, shared    = aesop.our
        //, aesop     = aesop.with
        //, ionified  = shared.ionified
          ;
      ! sense                      && ~{find:phrase, in:ion} && (sense = ion[phrase])//(sense = shared .sense [phrase])
    //! ionified [typeof sense]    && (sense = shared [sense])
        typeof sense == "function"  ?   sense  (ion) : ~sense
      }
}
;