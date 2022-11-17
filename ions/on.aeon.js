;
~
{ re:
    { id:  'on.aeon@ionify'
    , of: ['core','public','conduit','api']
    , as: {observation:-0.001}
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -8.20221117
    , at:  -0.037
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
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/on.aeons.tests.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.aeons.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "MUST migrate anemojii's aeon await logic here & integrate with .next"

        , "WERE exploring sharing aesop's current storie|phrase via aesop.next"
        + "operation; currently to help tests use their aesop storie|phrase in "
        + "their reports."
        + "know this'll also help aesop & aeon automate await|wait|pause|resume"

        , "were ..."
        , "must ..."
        , "will ..."
        , "need ..."
        , "have ..."
        , "wont ..."
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

        ~ {debug: [true, "+[...]", array]}

          var AEON      = aeon.with.its
            , sensors   = AEON.sensors
            , sensible  = aeon.with.our.ionified
            , next      = -1
            , last      = array.length
            , thing     , sense
            , type

          while (++next < array.length) //✨await shortens its length; test often
            { thing =   array [next]
              type  = thing === null ? 'null' : typeof thing
              sense = sensors [type]
              sensible [type] && !('with' in thing) && (thing.with = array.with)

              if( !sense) {+thing; AEON.unwith (thing); continue}

              if( !sensible [typeof sense] && sense)
                { +{find:sense,  in:sensors, as:type}
                    sense = (sensors) [type]
                    if( !sense )
                      { +{warn:`aeon: couldn't sense ${type} ~${JSON.stringify (thing)}`}
                      ;   AEON.unwith (thing)
                      ;   continue
                      }
                }

          //  if (+thing  && thing.did)  continue
              sense && (sense.next = next)
              sensors  [type] (array)
              AEON.unwith     (thing)
            }

          return next / array.length
        },

  unwith :function
  unwith (thing)
    { thing.with
      && thing.with.its
      && thing.with.its.re
      && thing.with.its.re    != thing.re && thing.re
      && thing.with.its.re.id != thing.re.id
      && (delete thing.with)
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
      phrase  && +{debug: [true, "+[...]", phrase]}

      var sense =   (ion.with && ion.with.its [phrase])
      !   sense && +{find:phrase, in:ion}
      && (sense =    ion [phrase])

      typeof sense == 'function'
          ? (ion.with.its || ion) [phrase] (ion)
          : +sense

      if(ion.next > ion.length) ion.next = ion.length
    }
}
;