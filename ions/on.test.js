;
~
{ re:
    { id: "on.test.0.1@ionify"
    , is: "A suite of tests for ionify's +on actions"
    , by: "mike.lee@ionify"
    , at: "2017.11.12-08...2007.09-04"
    }
}

+
{ on: "hi"
, hi:
    function onHi (ion)
      { +{log:"hi " + String (ion.hi) + "!"}
      }
}

+
[ {hi:        "iamai"         }
, {hi: "かいととひろことマイケル" }
, {hi:      "['0 . 0']"       }
]

~
{ on:"ion@doma.in"
, "ion@doma.in":
    function onIonId (ion)
      { ~{log: ["on:id:", ion.re.is, "with", ion.data, "works!"]}
      }
}
~
{re
: { id: "ion@doma.in"
  , is: "an re.id ion"
  , by: "mike.lee@iskitz"
  , at: "2017.11.12-08...2017.11.11-08"
  , in: "san-jose.california.usa.earth"
  }
, data:"some data"
}
~
{"ion@doma.in"
:   { is: "a top-level-id ion"
    , by: "mike.lee@iskitz"
    , at: "2017.11.12-08...2017.11.11-08"
    , in: "san-jose.california.usa.earth"
    }
, data:"some other data"
}
;