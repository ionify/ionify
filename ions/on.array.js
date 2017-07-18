~
{ re:
    { id: "on.array.0.1@ionify"
    , is: "bias: basic ionified array sensor"

    , by:["mike.lee@iskitz", "team@ionify"]
    , at: "2017.07.17-07...2007.09-04"

    , it: "Senses all array-expressed ions like:"
        + " ['~ . ~']  &  [{0 : 0}]  &  [/d(~ . ~)b/]  &  [0 . 0]"

    , im: "Refactoring onArray & onAESOP into their own ion(s) now that I've"
        + " created domain spaces. They'll be part of the @ionify domain space"
        + " which shares the sense & ionified types maps."

        + "Shared emojii actions will be resolved: 1:on.array --> 2:@ionify"
    }
    ,
  share:
    { '0 . 0': "activate"
    , '0 . -': "disable"
    , '- . 0': "disable"
    , '- . -': "deactivate"
    }
    ,
  on: Array,
      Array:
        function onArray (ion)
          { ion || (ion = this)

          ~ {debug: ["~[",ion,"]"]}

            var aesop = onArray.ion.onAESOP
              , get   = onArray.get
              , next  = -1
              , last  = ion.length
              , thing
              , type

        //~ {next:"ion", id:ion}
            get.id   (ion)
            get.link (ion)

            while (++next < last)
              { thing = ion [next]
                if (!thing)               continue
                if (+thing && thing.did)  continue
                ion.aesop = next
                aesop (ion)
              } delete ion.aesop

            return next / ion.length
          }
          ,
  onAESOPStories:
    [ /note: aesop: array-embedded statement|sentence|storie or phrase|pattern/
    , /todo: find known words in each sentence/
    , /todo: interpret via sentence(s), paragraph(s), chapter(s) + book(s)/
    , /todo: handle ['0 . 0'] via sense [thing] && sense [thing] (thing)/
    , /todo: use tbd name-to-ion resolver/
    ]
    ,
  onAESOP:
    function onAESOP (ion)
      { ion || (onAESOP == this.onAESOP) && (ion = this)

        var phrase = ion [ion.aesop]
        phrase && ~{debug: ["+[",phrase,"]"]}

        var sense     = ion.ion [phrase]
          , shared    = onAESOP.get
          , aesop     = onAESOP.ion
          , ionified  = shared.ionified

        !sense                      && (sense = shared .sense [phrase])
        !ionified [typeof sense]    && (sense = shared [sense])
        typeof sense == "function"  ?   sense  (ion) : ~sense
      }
}
;