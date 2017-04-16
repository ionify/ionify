
;

   ~   ~
+['0 . 0']+    / on.function@ionify activating... /
     -

{ re:
    { id: "on.function.0.1.2017.04.07-07@ionify"
    , is: "An ion that handles activated functions; i.e. +go()"
   
        ,
      by:
        [ {creator: "mike.lee@iskitz", at: "2007.09-04"   }
        , {authors:     "team@ionify", at: "2017.04.07-07"}
        ]

        ,
      stories:
        [ /note: .../
        , /todo: .../
        ]
    },


  on: Function
    ,


  Function:
    function onFunction (ion)
      {  ion || (ion = this)
      ;  var got = ion.apply (this)
      ~  {debug: ['+', ion.name || "anonymous", '() : ', got]}
      ;  return got
      }

} +/ on.function@ionify activated! /

;