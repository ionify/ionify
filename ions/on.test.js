~
{ re:
    { id: "on.test.0.1@ionify"
    , is: "A suite of tests for ionify's +on actions"
    , by: "mike.lee@ionify"
    , at: "2017.07.17-07...2007.09-04"
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
;