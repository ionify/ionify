;
/log.test@ionify activating.../

+
{ re:
    { id: "log.test.0.1@ionify"
    , is: "A suite of tests for ionify's logging actions"
    , by: "mike.lee@ionify"
    , at: "2017.04.15-07...2007.09-04"
    }
}

+
[ /test +[], +debug, +error, +info, +log, +warn/
, { info: "inform"}
, {debug: "debug" }
, {  log: "log"   }
, { warn: "warn"  }
, {error: "error" }
]

+
/log.test@ionify activated!/
;