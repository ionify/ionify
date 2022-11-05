;
~
{ re:
    { id:  'on.aeon@ionify'
    , of: ['core','conduit']
    , as: {observation:0.001}
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20221102
    , at:  -0.035
    , is:
        [ "sensing all aeon: array-expressed object notations like these:"
                                        +
                      "ali: array-literal invocation emoji:"
                                        +
              "['~ . ~']  &  [{0 : 0}]  &  [/d(~ . ~)b/]  &  [0 . 0]"
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
        [ "WERE exploring sharing aesop's current storie|phrase via aesop.next"
        + "operation; currently to help tests use their aesop storie|phrase in "
        + "their reports."
        + "know this'll also help aesop & aeon automate await|wait|pause|resume"

        , "... "
        ]
    },

  valueOf :function
  aeon( )
    { var sensors  = this.sensors
      sensors.with = {its:this}
    //for (var sense in sensors) sensors [sense] = this [sensors [sense]]
      delete this.valueOf <- this
    },

  sensors:
    { boolean   : 'aesop'
    , null      : 'aesop'
    , number    : 'aesop'
    , string    : 'aesop'
    , undefined : 'aesop'
    },

  on:
    Array,
    Array:function
     aeon(array)
        { array || (array = this)

        ~ {debug: ["~[", array ,"]"]}

          var AEON      = aeon.with.its
            , sensors   = AEON.sensors
            , ionified  = aeon.with.our.ionified
            , next      = -1
            , last      = array.length
            , thing
            , sense
            , type

          while (++next < last)
            { thing =   array [next]
              type  = thing === null ? 'null' : typeof thing
              sense = sensors [type]

              if(  ionified  [type] && !('with' in thing)) thing.with = array.with
              if( !sense)   {~thing; continue}

              if( !ionified  [typeof sense] && sense)
                { ~{find:sense, in:sensors, as:type}
                    sense = (sensors) [type]
                    if( !sense )
                      { ~{warn:`aeon: couldn't sense ${type} ~${JSON.stringify (thing)}`}
                      ;   continue
                      }
                }

          //  if (+thing  && thing.did)  continue
              sense && (sense.next = next)
              sensors  [type] (array)
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

  aesop :function
  aesop (ion)
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