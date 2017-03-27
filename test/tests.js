;

['• . •']

+
{ re:
    { id: "tests@ionify"
    , it: "Tests ionify"
    , by: "Mike.Lee@iskitz"
    , at: "2016.11.13-08...2016.05.18-07"
    , in: "san-jose.california.usa.earth"
    }
}


                            var hey =
{ on: "hi"
, hi: function onHi (ion)
        { +{log:"hi " + ion.hi + "!"}
        }
};

           hey            +
{hi:     "iamai"      }   +
{hi: "ひろことマイケル"  }   +
{hi:   "['• . •']"    }   +
           hey            ;



+
{ do: "hey"
, hey:
    function hi ()
      { +{log: String(hi.this.do) + " did log"}
      }
}

+
{ get: "http://ionify.net/ions/test/log.js"
, do:
    function hi ()
      { +{log: "did " + hi.this.get}
      }
}

+ {do: {log: "¡hey!  do  works!"}}

+ {do:"went", went:{log:'¡hey! "do" works!'}}


; +[':'] ;    ///*

+
{ re:
    ["playing with syntax for getting non-ion scripts in order"],

  do:
    [ { get: "http://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff"
      , now: true
      },
      { get: "http://ajile.net/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js"
      , now: true
      ,  do: "doIt"
      }
    ],
  doIt:
      function onLoadExample ()
      {  com.iskitz.ajile.examples.LoadExample()
      }
}

; +{O:0} ;

+
{ re:
    ["playing with syntax for getting multiple non-ion scripts in order"],

  get:
    [ "http://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff"
    , "http://ajile.net/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js"
    ],
  now: true,
  do:
    [ ,
      function onLoadExample ()
        {  com.iskitz.ajile.examples.LoadExample()
        }
    ]
}

; +['-:-'] ;

+
{ re:
    ["playing with syntax for getting non-ion scripts in order"],

  getoff:
    [ { now: true, js: "http://ajile.net/use/com.iskitz.ajile.js?mvcoff,mvcshareoff"},
      { now: true, js: "http://ajile.net/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js"
      , do: "doIt"
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