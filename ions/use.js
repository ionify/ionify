;
/use@ionify activating.../
+

{ re:
    { id: "use.0.1@ionify"
    , is: "An action enabling the use of an ion's thing(s)"
    , by: "mike.lee@ionify"
    , at: "2017.07.11-07...2007.09-04"
        ,
      stories:
        [ /note: +get.use.in.as: helps wakatta + is like ajile/
                  +
                  { use: "thing"    || ["thing", "...", "other.thing"]
                  ,  in:  this.item || "ion.id"
                  ,  as: "alias"
                  }
        , /todo: Confirm ion id for each +on:use before acting/
        , /todo: Maybe support a "from" parameter?/
                  +{use:"show", from:"wakatta.view", in:"game"}
        , /todo: Enable using with ion ids/
                  +{use:"+wakatta.view.show", in:"+wakatta.game"}
                  +{use:"+view.thing", as:"+game.view.thing"}
                  +{use:"+view.show", as:"show", in:"+game"}
        ]
    }

    ,
  on:
    [ ["use", "as", "in"]
  //, ["use", "in"]
  //,  "use"
    ]

    ,
  errors:
    { badAs: "Can't use 'as' with more than 1 'use'"
    , badIn: "Can only use 'in' with objects"
    }

    ,
  getOnUseStories:
    [ /note: A helper function for using ready-for-use things/
    , /todo: .../
    ]
    ,
  getOnUse:
    function getOnUse (use)
      { return function onUse (ion)
          { var name        = use.use
          ; use.in [use.as] = ion [name]
          ~ {no:use.no}
          }
      }

    ,
  okIn:
    { function: true
    , object  : true
    }

    ,
  "use as in stories":
    [ /note: Enables using ion things within objects via aliases/
    , /todo: Switch "use" + "as" loops? Might not have an "as"/
    , /todo: Enable +{use: "thing" || ["..."], in: [{}]} /
    , /todo: Enable +{use: "thing", as:["alias", "..."], in:{}} /
    , /todo: Handle +{use: thing(s), from:ion}/
    ]
    ,
  "use as in":
    function useAsIn (ion)
      { var USE     = useAsIn.ion
          , errors  = USE.errors
          , onUse   = USE.getOnUse
          , validIn = USE.okIn
          , isArray = Array.isArray

        isArray (ion.as) && isArray (ion.use) && ~errors.badAs
        validIn [typeof ion.in]               || ~errors.badIn

        var use    = isArray (ion.use) ? ion.use : (ion.use = [ion.use])
          , as     = isArray (ion.as)  ? ion.as  : (ion.as  = [ion.as])
          , within = isArray (ion.in)  ? ion.in  : (ion.in  = [ion.in])
          , next   = within
          , last   = next.length
          , on

        for (var inThing = -1; ++inThing < last;)
          { within  = next [inThing]
            validIn [typeof within] || ~errors.badIn
            asThing = -1

                for (var  aliases = as.length; ++asThing < aliases;)
              { for (var     uses = use.length
                    ,       thing = -1
                    ,        name
                    ;     ++thing < uses;
                    )
                    { name        = use [thing]
                      on          = {on:name}
                      on  [name]  = onUse ({use:name, as:as[asThing] || name, in:within, no:on})
                      use [thing] = on
                    }
                ~use
              }
          }

        //; ("from" in use) || (use.from = from)
        return true
      }


    ,
  "use in stories":
    [ /note: Enables using things within a specific object/
    ]
    ,
  "use in":
    function useIn (ion)
      { return useIn.ion ["use as in"] (ion);
      }


    ,
  useStories:
    [ /note: Enables using things within the current ion/
    , /todo: .../
    ]
    ,
  use:
    function onUse (ion)
      { ion.in = ion
      ; onUse.ion ["use as in"] (ion)
      }
}

+
/use@ionify activated!/
;