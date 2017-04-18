
;

   ~   ~
+['0 . 0']+    / on.error@ionify activating... /
     -

{ re:
    { id: "on.error.0.1.2017.04.07-07@ionify"
    , is: "An ion that handles activated errors; i.e. +Error"

    , by:
        [ {creator: "mike.lee@iskitz", at: "2007.09-04"   }
        , {authors:     "team@ionify", at: "2017.04.07-07"}
        ]

    , stories:
        [/note: .../
        ,/todo: .../
        ]
    },


  on:
    Error
    ,


  Error:
    function onError (ion)
      {  throw ion || this
      }


} +/ on.error@ionify activated! /

;