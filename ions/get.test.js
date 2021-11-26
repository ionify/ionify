;
~
{ re:
    { id:  'get.test@ionify'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211125
    , at:  -0.1
    , is:  "testing ionify's ~get api"
    }
}


~ {get:''}         <-  /testing getting the .js file/
~ {get:'@ionify'}  <-  /testing getting the @domain's .js file/

~
{ get:'../ions/i'
, and:
    { log: "✅ ~get script and    oli   {}"
    }
}
+
{ get:'../ions/i'
, and:
    [{ log: "✅ ~get script and   aeon  [{}]"
    }]
}
+
{ get:'../ions/i'
, and:
    [ {info:true}
    , /✅ ~get script and   aeon  [\/\/,{}]/
    ]
}
+
{ get:'../ions/i'
, and:
    /✅ ~get script and  storie  \/\//
}
+
{ get:'../ions/i'
, and:function
  and ()
    { ~
      /✅ ~get script and function ()/
    }
}
+
{ info:false }

~
{ get : 'https://ionify.net/ions/test/log.js'
, in  : 'order'
, then:
    { log: "✅ ~get script in order then oli {}"
    }
}
+
{ get : 'https://ionify.net/ions/test/log.js'
, in  : 'order'
, then:
    function hi ()
      {~{log: ["✅ ~get script in order then function ()", hi.with.get]}
      }
}


~
{ log:"testing ~get grouped & ordered with a shared ~get.then..."
,  in: 'order'
, get:
    [ 'https://cdn.jsdelivr.net/gh/iskitz/ajile/use/com.iskitz.ajile.js?mvcoff,mvcshareoff'
    , 'https://cdn.jsdelivr.net/gh/iskitz/ajile/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js'
    ],
  then:
    function onLoadExample ()
      {  ~com.iskitz.ajile.examples.LoadExample
      }
}


~
{ log: "testing ~get's individually ~do-group ordered with 1 aliased & shared then"
, do:
    [ {  get: 'https://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff'
      ,   in: 'order'
      },
      {  get: 'https://ajile.net/play/api/scripts/com.iskitz.ajile.examples.IncludeExample.js'
      ,   in: 'order'
      , then: 'doIt'
      }
    ],
  doIt:
    function onIncludeExample ()
      {  ~com.iskitz.ajile.examples.IncludeExample
      }
}

/*
~
{ log:
    [ "testing grouped & ordered individually mime-typed ~get's with a shared then. "
    , "bug: emoji tests instantly disable ionify even before previous ~get.then's. "
    ],
  get:
    [ {js:'https://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff'}
    , {js:'https://ajile.net/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js'}
    ]
, as: 'text/javascript'
, in: 'order'
, then:
    function onLoadExample ()
      {  ~com.iskitz.ajile.examples.LoadExample
      }
}
*/
;