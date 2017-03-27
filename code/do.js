;
+
{ re:
    { id: "do@ionify.net.0.1"
    , is: "ionify's do action: activates ions, functions + methods"
    , by:
        [ {creator: "mike.lee@iskitz",  at: "2007.09-04",     in: "forest-hills.new-york.usa.earth"}
        , {authors:     "team@ionify",  at: "2016.12.11-08",  in:   "san-jose.california.usa.earth"}
        ],

    },

  on: "do",
  do:
    function onDo (ion)
      {   if (onDo.this == ion) return
	  ;   !ion && +onDo.this.noDo

      ;   var action = ion.do
      ;   onDo.this.isPrimitive [typeof action] && (action = ion [action])
      ;   action ? (action.this = ion) : +onDo.this.noDo
      ;   +action
      },

  noDo:
    {error: "do: expects an ion or an ion identifier"}
    ,

  isPrimitive:
    { boolean  : true
    , number   : true
    , string   : true
    , undefined: true
	}
} //+do@ionify
;