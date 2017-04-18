;
~
{ re:
    { id: "launch@info.ionify"
    , is: "ionify's launch notes"
    , by: "mike.lee@iskitz"
    , in: "san-jose.california.usa.earth"
    , at: "2017.04.02-07...04.01-07"
    },

  LAUNCH:
    [`
        .----------------------------.        .---------.
      1 | host: web.js, node.js, etc |      5 | ions/on |
        '----------------------------'        '---------'

      2 ~{ get:                             6   ~{on: Error}
      3      [ ions/on.js                       +{on: Object} || +{}
      4      , host.log@ionify
             ]                                  +{on: Type  , Type: action  /*, do: action is unnecessary */}
     10  , then:                                +{on: "term", term: action    , in: Type   /* optional; default to Type action if omitted*/}
     11      [ host
     13      , {hosted:true}                    +{on: [ ['0 . 0'], ['- . 0'], ['- . -'] ]}
             ]
         }
                                                +{on: Array}  || +[]
     12 ~{on: get + get then + get use}         +{on: Function}

                                                +link

        .--------------.                    7   +{ on    : "hosted"
      8 | ions/web.log |                         , hosted:
        '--------------'                   14         { get:
                                                          [ next.id
      9 ~{ on: debug + error                              , do
             + info  + log                 15             , on.storie       >  17 +{on:"narrate", narrate: "toggleStories"}
             + warn                        16             , ions            >  18 view.js | index.js
         }                                                ]
                                                      }
                                                 }

    `]
}
;