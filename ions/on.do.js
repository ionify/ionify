;
~
{ re:
    { id: "on.do.0.1@ionify"
    , it: "handles ~{on:..., do:...} ions"

    , by:["mike.lee@iskitz", "team@ionify"]
    , at: "2017.11.19-08...2007.09-04"

    , im:
        [ /note: .../
        , /todo: .../
        ]
    }

, on:
    [ ["on", "do"]
    ]

, type
:   {}

,"on do"
:   function onDo (ion)
      { var on = ion.on
          , it = typeof on
          , is = onDo.ion.type
          , go = is [it]

        if (go) return typeof go == "function" ? go (ion) : +go

        var d0 = ion.do
          , no = {}              ; ~/helps avoid infinite loop/

        while (typeof d0 != "function" && typeof d0 != "object")
          { no [d0] = false      ; ~/remembers ion's visited properties/
            d0      = ion [d0]
            d0 in no && ~{error:["infinite loop registering ~on,do for",ion.re.id,]}
          }

        is [it] = d0
      }
}

~
{ on:
    [ {name:"on", type:"function"}, "do"
    ]

, do:
    "onTypeSensor"

, onSensor$:
    { core: {Function:"function", Object:"object"}
    , name: (/function\s+(.*)\s*\(/)
    , undo: {}
    }

, onTypeSensor:
    function onSensor (ion)
      { var on        = onSensor.ion
          , known     = on.ionified
          , onSensor$ = on.onSensor$
          , core      = onSensor$.core
          , name      = onSensor$.name
          , undo      = onSensor$.undo
          , Type      = ion.on
          , type      = Type.name    || String(Type).match(name)[1]
          ; undo [type]            =  Type.prototype.valueOf
          ; Type.prototype.valueOf =  ion [type]
          ; known [type]           =  true
          ; known [core [type]]    =  !!core [type]

      ~ {debug: ["onSensor",type,JSON.stringify(known)]}
        return true
      }
}

~
{ on: Error
, do:
    function onError (error)
      { throw error
      }
}

+ new Error ("Test ~Error")
;