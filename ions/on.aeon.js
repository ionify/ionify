;
~
{ re:
    { id:  'on.aeon@ionify'
    , of: ['core','conduit']
    , as: ['transmission','sensation']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220707
    , at:  -0.033
    , is:
        [ "sensing all array-expressed object notations like these:"
                                        +
                      "ali: array-literal invocation emoji:"
                                        +
              "['~ . ~']  &  [{0 : 0}]  &  [/d(~ . ~)b/]  &  [0 . 0]"
                                        +
                    "aesop: array-expressed storie or phrase:"
                                        +
          '["get sensations", "activate them", "enjoy their reactions!"]'
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.aeons.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/on.aeons.tests.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://github.com/ionify/about/tree/public/team'
        },
      we:
        [ "WERE migrating to with@ specification"

        , "WERE exploring sharing aesop's current storie|phrase with its "
        + "operation; currently to help tests use their aesop storie|phrase in "
        + "their reports."
        + "know this'll also help aesop & aeon automate await|wait|pause|resume"

        , "WERE exploring challenge of ~find'ing aeon sensors like aesop"
        , "will rename on.array"
        , "must meet aeon [//+,''] sensors challenge 🤔 AEON run-time switching?"
        , "like fixing on:Array to have separate coexistent aeon & aesop handlers"
        , "want to move aesop@ to its own ion"
        , "... "
        ]
    },

  valueOf:function
  aeon()
    { var sensors       = this.my.sensors
      this.my.link.with = sensors.with = {its:this}
      this.my.link ()
      for (var sense in sensors) sensors [sense] = this [sensors [sense]]
      delete this.valueOf <- this
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
          { ion || (ion = link.with.its)
            for (var  member  in ion)
              { member = ion [member]
              ; if (member.my || ('my' in member)) continue
              ; member.my = ion.my
              }
          }
    },

  on:
    Array,
    Array:function
     aeon(array)
        { array ||  (array = this)

        ~ {debug: ["~[", array ,"]"]}

          var AEON      = aeon.with.its
            , sensors   = AEON.my.sensors
            , ionified  = aeon.our.ionified
            , next      = -1
            , last      = array.length
            , thing
            , sense
            , type
          //; ionified ['string'] = true

          while (++next < last)
            { thing =   array [next]
              type  =  typeof  thing
              sense = sensors [type]
              if (!thing)      continue
              if (ionified    [typeof thing]  && !('with' in thing)) thing.with = {its:array}
              if (!sense)     {~thing; continue }
              if (!ionified   [typeof sense])
                { ~{find:sense, in:sensors ||AEON, as:type}
                    sense = (sensors ||AEON) [type ||sense]
                    if (!sense)
                      { ~{warn:`aeon: couldn't sense ${type} ~${JSON.stringify (thing)}`}
                      ;   continue
                      }
                }
          //  if (!ionified [type])  continue
          ///*if (!thing.with && !('with' in thing))*/ (thing.with = array)
          //  if (+thing  && thing.did)  continue
              sense.next = next
              sensors [type] (array)
            }

          return next / array.length
        },

  aesopInfo:
    [ "aesop: array-expressed storie or phrase"
    , "were ensuring best phrase resolution"
    , "will find known words in each sentence"
    , "will interpret via sentence(s), paragraph(s), chapter(s) + book(s)"
    , "will handle ['0 . 0'] via sense [thing] && sense [thing] (thing)"
    , "will use tbd name-to-ion resolver"
    ],

  aesop:function
  aesop(ion)
    { ion || (aesop == this.aesop) && (ion = this)

      var phrase = ion [aesop.next]
      ion.next   = aesop.next //👈🏾temporary exploration
      aesop.next = void 0
      phrase  && ~{debug: ["+[", phrase ,"]"]}

      var sense =   (ion.with && ion.with.its [phrase])
      !   sense && ~{find:phrase, in:ion}
      && (sense =    ion [phrase])

      typeof sense == 'function'
          ? (ion.with.its || ion) [phrase] (ion)
          : ~sense
    }
}
;