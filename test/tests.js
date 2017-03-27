~ ['• . •'] +


{ re:
    { id: "tests@ionify"
    , it: "Tests ionify"
    , by: "Mike.Lee@iskitz"
    , at: "2017.03.21-07...2016.05.18-07"
    , in: "san-jose.california.usa.earth"
    }
}


                            var hey =
{ on: "hi"
, hi: function onHi (ion)
        { +{log:"hi " + ion.hi + "!"}
        }
};

              hey               +
{hi:        "iamai"         }   +
{hi: "かいととひろことマイケル"  }   +
{hi:      "['• . •']"       }   +
              hey               ;



+
{ do: "hey"
, hey:
    function hi ()
      { +{log: String(hi.this.do) + " did log"}
      }
}

+
{ get: "http://ionify.net/ions/test/log.js"
, then:
    function hi ()
      { +{log: "did " + hi.this.get}
      }
}

+ {do: {log: "¡hey!  do  works!"}}

+ {do:"went", went:{log:'¡hey! "do" works!'}}


;~['- . •'];    ///*

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
      {  com.iskitz.ajile.examples.LoadExample()
      }
}


~['• . •']+


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
        {  com.iskitz.ajile.examples.LoadExample()
        }
    ]
}


~['• . -']+


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
      {  com.iskitz.ajile.examples.LoadExample()
      }
}

//*/
;