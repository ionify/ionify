;
~
{ re:
    { id: "on.storie.0.1@ionify"
    , by:["mike.lee@iskitz", "team@ionify"]
    , at: "2017.07.15-07...2016.11.16-08"
        ,
      is: "An ion that handles activated stories: "
        + "string template or regular ion expressions; "
        + "i.e. +/.../"
        ,
      stories:
        [ /todo: Enable inline + referrable notes + todos via ion.methodStories:[storie(s)]/
        , /todo: Disable eon during storie evaluations to enable stories with sample code!/
        , /todo: .../
        ]
    }
    ,
  on: RegExp,
      RegExp:
        function onStorie (ion)
          {  return this;//true
          }
}
;