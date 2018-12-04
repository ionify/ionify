;
~
{ re:
    { id:  'get.test@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181203
    , is:  -0.1
    , it:  "Tests ionify's ~get api"
    }
}

~ {get:''}         <-  /testing getting the .js file/
~ {get:'@ionify'}  <-  /testing getting the @domain's .js file/

~
{ get : "http://ionify.net/ions/test/log.js"
, in  : 'order'
, then:
    function hi ()
      {~{log: ["did ", hi.ion.get]}
      }
}


/* emoji test disables ionify before
   this test's get.then activates

~
{ re:
    ["playing with syntax for getting non-ion scripts in order"],

  do:
    [ {  get: "http://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff"
      ,   in: 'order'
      },
      {  get: "http://ajile.net/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js"
      ,   in: 'order'
      , then: "doIt"
      }
    ],
  doIt:
      function onLoadExample ()
      {  ~com.iskitz.ajile.examples.LoadExample
      }
}
*/

~
{ re: "playing with syntax for getting multiple non-ion scripts in order"
, get
:   [ "http://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff"
    , "http://ajile.net/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js"
    ]
, in: 'order'
, then
:   function onLoadExample ()
      {  ~com.iskitz.ajile.examples.LoadExample
      }
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

;