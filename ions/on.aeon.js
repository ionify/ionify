;
~
{ re:
    { id:  'on.aeon@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -7.20190328
    , is:  -0.1
    , it:
        [" senses all array-expressed ions like:                   "
        +"   ['~ . ~']  &  [{0 : 0}]  &  [/d(~ . ~)b/]  &  [0 . 0] "
        ]
        ,
      we:
        [" were debugging ~find'ing aeon sensors like aesop "
        ," want to move aesop@ to its own ion               "
        ," ... "
        ]
    },

  valueOf
  : function hiphop ()
     { this.my.link.ion = this.my.sensors.ion = this
     ; this.my.link ()
     ; delete this.valueOf && ~{link:'my', to:this} >> this
     },

  my:
    { sensors
    :   { string    : 'aesop'
      //, number    : ''
      //, boolean   : ''
      //, null      : ''
      //, undefined : ''
        }
    , link
    :   function link (ion)
          { ion || (ion = link.ion)
            for (var  member  in ion)
              { member = ion [member]
              ; if (member.my || ('my' in member)) continue
              ; member.my = ion.my
              }
          }
    },

  on: Array
    , Array
    : function aeon (array)
        { array ||  (array = this)

        ~ {debug: ["~[", array ,"]"]}
        
          var AEON    = aeon.ion
            , sensors = AEON.my.sensors
          //, aesop   = aeon.ion.aesop
            , ionified = aeon.our.ionified
            , next    = -1
            , last    = array.length
            , thing
            , sense
            , type
          //; our.ionified ['string'] = true
            ;

          while (++next < last)
            { thing =   array [next]
            ; type  =  typeof  thing
            ; sense = sensors [type]
            ; if (!thing)      continue
            ; if (ionified    [typeof thing]  && !('ion' in thing)) thing.ion = array
            ; if (!sense)     {~thing; continue }
            ; if (!ionified   [typeof sense])
                { ~{find:sense, in:sensors ||AEON, as:type}
                ;   sense = (sensors ||AEON) [type ||sense]
                ;   if (!sense)
                      { ~{warn:`aeon: couldn't sense ${type} ~${JSON.stringify (thing)}`}
                      ;   continue
                      }
                }
          //; if (!our.ionified [type])  continue
          //;/*if (!thing.ion && !('ion' in thing))*/ (thing.ion = array)
          //; if (+thing  && thing.did)  continue
            ; sense.next = next
            ; sense (array)
            }

          return next / array.length
        },

  aesopInfo
  : [" aesop: array-expresses statement|sentence|storie or phrase|pattern "
    ," will find known words in each sentence "
    ," will interpret via sentence(s), paragraph(s), chapter(s) + book(s) "
    ," will handle ['0 . 0'] via sense [thing] && sense [thing] (thing)   "
    ," will use tbd name-to-ion resolver      "
    ],

  aesop
  : function aesop (ion)
      { ion || (aesop == this.aesop) && (ion = this)

      ; var phrase = ion [aesop.next]
      ; aesop.next = void 0
      ; phrase && ~{debug: ["+[", phrase ,"]"]}

      ; var sense     = ion.ion && ion.ion [phrase]
        //, shared    = aesop.our
        //, aesop     = aesop.ion
        //, ionified  = shared.ionified
          ;
      ! sense                      && ~{find:phrase, in:ion} && (sense = ion[phrase])//(sense = shared .sense [phrase])
    //! ionified [typeof sense]    && (sense = shared [sense])
      ; typeof sense == "function"  ?   sense  (ion) : ~sense
      }
}
;