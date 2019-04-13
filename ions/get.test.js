;
~
{ re:
    { id:  'get.test@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -7.20190413
    , is:  -0.1
    , it:  "Tests ionify's ~get api"
    }
}


~ {get:''}         <-  /testing getting the .js file/
~ {get:'@ionify'}  <-  /testing getting the @domain's .js file/


~
{ get : 'http://ionify.net/ions/test/log.js'
, in  : 'order'
, then:
    function hi ()
      {~{log: ["did ", hi.with.get]}
      }
}


~
/ testing grouped & ordered ~get's with a shared ~get.then /
+
{ re:" exploring syntax for ~get'ing non-ion scripts in order then using them "
, get
:   [ 'http://cdn.jsdelivr.net/gh/iskitz/ajile/use/com.iskitz.ajile.js?mvcoff,mvcshareoff'
    , 'http://cdn.jsdelivr.net/gh/iskitz/ajile/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js'
    ]
, in: 'order'
, then
:   function onLoadExample ()
      {  ~com.iskitz.ajile.examples.LoadExample
      }
}


~
/ testing ~do-grouped individually ordered ~get's with 1 aliased & shared then /
+
{ re:
    " exploring syntax for ~get'ing non-ion scripts in order then using them "
, do:
    [ {  get: 'http://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff'
      ,   in: 'order'
      }
    , {  get: 'http://ajile.net/play/api/scripts/com.iskitz.ajile.examples.IncludeExample.js'
      ,   in: 'order'
      , then: 'doIt'
      }
    ]
, doIt
:   function onIncludeExample ()
      {  ~com.iskitz.ajile.examples.IncludeExample
      }
}

/*
~
[" testing grouped & ordered individually mime-typed ~get's with a shared then. "
," bug: emoji tests instantly disable ionify even before previous ~get.then's. "
]
+
{ re:
    " exploring syntax for ~get'ing non-ion scripts in order "
, get
:   [ {js:'http://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff'}
    , {js:'http://ajile.net/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js'}
    ]
, as: 'text/javascript'
, in: 'order'
, then
:   function onLoadExample ()
      {  ~com.iskitz.ajile.examples.LoadExample
      }
}
*/
;