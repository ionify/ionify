;
+
{ re:
    { id: "do@ionify.net.0.1"
    , is: "ionify's do action: activates ions, functions + methods"
    , by:
        [ {creator: "mike.lee@iskitz",  at: "2007.09-04",     in: "forest-hills.new-york.usa.earth"}
        , {authors:     "team@ionify",  at: "2016.11.22-08",  in:   "san-jose.california.usa.earth"}
        ],

    },

  on: "do",
  do:
    function onDo (ion)
      {   !ion && +{error:"do: expects an ion or an ion identifier"}
      ;   var action = ion.do
      ;   (action && !action.constructor) && (action = ion [action])
      ;   action  ? (action.this = ion)
                  : +{error:"do: expects an ion or an ion identifier"}
      ;   +action
      }
} //+do@ionify
;