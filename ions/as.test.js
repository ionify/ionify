;

~
{ re:
    { id: 'as.test@ionify'
    , by: ['mike.lee', 'team']
    , on: -7.20190411
    , to: -7.20190412
    , at: -0.1
    , is: "ionify's ~as action test suite"
    , it: "tests ionify's handling of ~re.as & ~on.as & ~on.as.do actions"
    , we:
        [" like making own ~re.as & ~on.as test ions "
        ]
    }

, do:
    [ "re as ion"
    , "on as ion do"
    , "re as aeon"
    , "on as aeon do"
    ]

, "re as ion"
:   { re:
        { id: 'ion@ionify'
        , as: 'Object'
        }
    }

, "on as ion do"
:   [ { on: 'test'
      , as: 'ion'
      , do: {log:"✅ ~re.as & ~on.as: ion!"}
      }
    , { test:"sense me!" }
    ]

, "re as aeon"
:   { re:
        { id: 'aeon@ionify'
        , as: 'Array'
        }
    }

, "on as aeon do"
:   [ { on:
          [ "i'm an aeon member"
          , {me:"too"}
          , "me three"
          ]
      , as: 'aeon'
      , do: {log:"✅ ~re.as & ~on.as: aeon!"}
      }

    , [ "i'm an aeon member"
      , {me:"too", plus:"stuff"}
      , /me three/
      ]
    ]
}

;