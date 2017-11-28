;
~
{ re:
    { id: "on.do.0.1@ionify"
    , it: "senses ~{on:..., do:...} ions"

    , by:["mike.lee@iskitz", "team@ionify"]
    , at: "2017.11.26-08...2007.09-04"

    , im:
        [ /note: .../
        , /todo: .../
        ]
        
    , do: /set self as ~on,do sensor/
        + /for each ~on,do ensure ~on:[]/
        + /for each ~on sense its type/
        + /find that type's sensor & activate/
        + /if not found, add type & ~do sensor./
        + /.../
        + /.../
        
    }

, on:
    [ ["on", "do"]
    ]

, type
:   {}

,"on do"
:   function onDo (ion)
      { var on  = ion.on
          , it  = Object.prototype.toString.apply (on)
          ; it != "[object Array]" && (on = [on])

        var next = -1
          , last = on.length
          , my   = onDo.ion
          , is   = my.type
          , go

        while (++next < last)
          { it      = Object.prototype.toString.apply (on [next])
            go      = is [it]
            if (go) return typeof go == "function" ? go (ion) : +go
            is [it] = my.resolve ("do", ion)
          }
      }

, resolve
:   function resolve (name, ion)
      { ~/todo: move to on.object/
      
        var it = ion [name]
          , no = {}              ; ~/helps avoid infinite loop/

        while (typeof it != "function" && typeof it != "object")
          { no [it] = false      ; ~/remembers ion's visited properties/
            it      = ion [it]
            it in no && ~{error:["infinite loop registering ~on,do for",ion.re.id,]}
          }

        return it
      }
}

~
{ on:
    [["is", "type"]]

, "is type"
:   function isType (ion)
      { var type = Object.prototype.toString.apply (ion.is)
      ; return type == "[object "+ ion.type +"]"
      }
}

~
{ on:
    [["on", "do"]]

, known
:   {}

, "on do"
:   function onOnDo (ion)
      { var on = ion.on
          , d0 = ion.do
          ;
        +{is:on, type:"Array"} || (on = [on])

        var my   = onOnDo.ion
          , next = -1
          , last = on.length
          , type = {}
          , go
 
        while (++next < last)
          { ~{what:type, is:on[next]}
            go = my.known [type.is]
            ~{what:type, is:go}
          
            if (!go)
              { my.known [type.is] = ion.do
              ; continue
              }
              
            type.is == "Function"
                ? go (ion)
                : +go
          }
      }
}

~
{ on: Function
, do:
    function onType (ion)
      { 
      }
}
;

~
{ on:
    {name:"on", type:"Object"}
, do:
    function onObjectOn (ion)
      { var on   = onObjectOn.ion.on
          , name = on.name
          , type = on.type
          , it   = ion [name]
          , data = "data" in on ? on.data : it
          
        return  !!+{is: ion [name], type:type}
                && data == it
      }
}

~
{ on:
    [ [{name:"on", type:"function"}, "do"]
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