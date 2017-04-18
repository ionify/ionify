;
/get.test@ionify activating.../

+
{ re:
    { id: "get.test.0.1.2017.04.15@ionify"
    , is: "A suite of tests for ionify's +get actions"
    , by: "mike.lee@ionify"
    , at: "2007.09-04"
    }
}

+
{ get: "http://ionify.net/ions/test/log.js"
, now: true
, then:
    function hi ()
      { +{log: "did " + hi.this.get}
      }
}


/* immediately disables ionify
   even before previous get.then's activate

+
{ re:
    ["playing with syntax for getting non-ion scripts in order"],

  do:
    [ {  get: "http://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff"
      ,  now:  true
      },
      {  get: "http://ajile.net/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js"
      ,  now:  true
      , then: "doIt"
      }
    ],
  doIt:
      function onLoadExample ()
      {  ~com.iskitz.ajile.examples.LoadExample
      }
}
*/

+
{ re:
    ["playing with syntax for getting multiple non-ion scripts in order"],

  get:
    [ "http://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff"
    , "http://ajile.net/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js"
    ],
  now: true,
  then:
    [ ,
      function onLoadExample ()
        {  ~com.iskitz.ajile.examples.LoadExample
        }
    ]
}

/* immediately disables ionify
   even before previous get.then's activate

{ re:
    ["playing with syntax for getting non-ion scripts in order"],

  get:
    [ {  now:  true, js: "http://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff" },
      {  now:  true, js: "http://ajile.net/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js"
      , then: "doIt"
      }
    ],
  now: true,
  doIt:
      function onLoadExample ()
      {  ~com.iskitz.ajile.examples.LoadExample
      }
}
*/

+
/get.test@ionify activated!/
;