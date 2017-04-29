;
/on.test@ionify activating.../

+
{ re:
    { id: "on.test.0.1.2017.04.15@ionify"
    , is: "A suite of tests for ionify's +on actions"
    , by: "mike.lee@ionify"
    , at: "2007.09-04"
    }
}

+
(this.hey =
    { on: "hi"
    , hi:
        function onHi (ion)
          { +{log:"hi " + String (ion.hi) + "!"}
          }
    }
)

+             hey               +
{hi:        "iamai"         }   +
{hi: "かいととひろことマイケル" }   +
{hi:      "['0 . 0']"       }
+             hey

+
/on.test@ionify activated!/
;