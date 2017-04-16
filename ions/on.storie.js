
;

   ~   ~
+['0 . 0']+
     -

+
/on.storie@ionify activating.../
+

{ re:
    { id: "on.storie.0.1.2017.04.09-07@ionify"
    , is: "An ion that handles activated stories: "
        + "string template or regular ion expressions; "
        + "i.e. +/.../"

        ,
      by:
        [ {creator: "mike.lee@iskitz", at: "2016.11.16-08"}
        , {authors:     "team@ionify", at: "2017.04.09-07"}
        ]

        ,
      stories:
        [ /todo: Enable inline + referrable notes + todos via ion.methodStories:[storie(s)]/

        , /todo: Disable eon during storie evaluations to enable stories with sample code!/

        , /todo: .../
        ]
    },


  on: RegExp
    ,


  RegExp:
    function onStorie (ion)
      {  return true
      }


}

+
/on.storie@ionify activated!/
;