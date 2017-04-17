;
+
{ re:
    { id: "do@ionify.net.0.1"
    , is: "ionify's do action: activates ions, functions + methods"
    , by:
        [ {creator: "mike.lee@iskitz",  at: "2007.09-04",     in: "forest-hills.new-york.usa.earth"}
        , {authors:     "team@ionify",  at: "2017.03.18-07",  in:   "san-jose.california.usa.earth"}
        ]
    },


  on: "do",

  doStories:
    [/ todo: Enable +{on: "" || [], do: ...} /
    ],

  do:
    function onDo (ion)
      {   ion || ~onDo.ion.errors.ionExpected
      ;
      ;   var todo = ion.do
      ;
      ;   todo && !(todo.ion || typeof todo == "object") && (todo = ion [todo])
      ~  (todo || onDo.ion.errors.ionExpected)
      },


  errors:
    { ionExpected: {error:"+do expects an ion or ion id"}
    }

} //+do@ionify
;