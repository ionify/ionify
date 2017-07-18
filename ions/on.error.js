;
~
{ re:
    { id: "on.error.0.1@ionify"
    , by:["mike.lee@iskitz", "team@ionify"]
    , at: "2017.07.15-07...2007.09-04"
        ,
      stories:
        [ /note: .../
        , /todo: .../
        ]
    }
    ,
  on: Error,
      Error:
        function onError (ion)
          {  throw ion || this
          }
}
;