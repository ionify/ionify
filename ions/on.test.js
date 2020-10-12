;
~
{ re:
    { id:  'on.test@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20190101
    , is:  -0.1
    , it: "tests ionify's ~on api"
    }
}

~
{ on
:   'hi'
,    hi
: function onHi (ion)
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
{ on
:   'ion@doma.in'
,   'ion@doma.in'
: function onIonId (ion)
    { ~{log: ["on:id:", ion.re.it, "with", ion.data, "that works!"]}
    }
}


~/... with a standard re.id ion ....../
+
{re
: { id: 'ion@doma.in'
  , by: 'mike.lee@ionify'
  , on: -8.20171111
  , to: -8.20190101
  , in: 'san-jose.california.usa.earth'
  , it: "is an re.id ion"
  }
, data:"some data"
}


~/... and a top-level-id ion ........./
+
{'ion@doma.in'
:   { by: 'mike.lee@ionify'
    , on: -8.20171111
    , to: -8.20190101
    , in: 'san-jose.california.usa.earth'
    , it: "is a top-level-id ion"
    }
, data:"some other data"
}


~/... Test ~on:id,do ................./
+
{ on:
    [          'kana@ions.iskitz.net'
    , ['wakatta.view@ions.iskitz.net', 'show']
    , ['wakatta.game@ions.iskitz.net', 'start', 'stop', 'guess', 'next']
    ]
, dont:
    [ ""
    ]
}
;