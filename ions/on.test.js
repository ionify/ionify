;
~
{ re:
    { id:  'on.test@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181222
    , is:  -0.1
    , it: "tests ionify's ~on api"
    }
}

~
{ on: "hi"
, hi:
    function onHi (ion)
      { ~{log:"hi " + String (ion.hi) + "!"}
      }
}

~
[ {hi:        "iamai"         }
, {hi: "かいととひろことマイケル" }
, {hi:      "['0 . 0']"       }
]

~/... Test on:id ...................../
+
{ on:"ion@doma.in"
, "ion@doma.in":
    function onIonId (ion)
      { ~{log: ["on:id:", ion.re.is, "with", ion.data, "works!"]}
      }
}

~/... with a standard re.id ion ....../
+
{re
: { id: "ion@doma.in"
  , is: "an re.id ion"
  , by: "mike.lee@iskitz"
  , at: "2017.11.12-08...2017.11.11-08"
  , in: "san-jose.california.usa.earth"
  }
, data:"some data"
}

~/... and a top-level-id ion ........./
+
{"ion@doma.in"
:   { is: "a top-level-id ion"
    , by: "mike.lee@iskitz"
    , at: "2017.11.12-08...2017.11.11-08"
    , in: "san-jose.california.usa.earth"
    }
, data:"some other data"
}


~/... Test ~on:id,do ................./
+
{ on:
    [          "kana@ions.iskitz.net"
    , ["wakatta.view@ions.iskitz.net", "show"]
    , ["wakatta.game@ions.iskitz.net", "start", "stop", "guess", "next"]
    ]
, dont:
    [ ""
    ]
}
;