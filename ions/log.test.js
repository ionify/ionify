;
~
{ re:
    { id:  'log.test@ionify'
    , by: ['mike.lee','team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181222
    , is:  -0.1
    , it: "tests ionify's logging actions"
    }
}

+
[" test +[], +debug, +error, +info, +log, +warn "
, { info: "~info  works"}

, (this.ionifydebugteststate = !!+{debug:"get debug state"})
, {debug: true}
, {debug: "~debug works"}
, {debug: ionifydebugteststate}
, (delete this.ionifydebugteststate)

, {  log: "~log   works"}
, { warn: "~warn  works"}
, {error: "~error works"}
]
;