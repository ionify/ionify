;
~
{ re:
    { id:  'get.test@ionify'
    , of: ['tests','core','acquisition','composition','sensation']
    , as: ['examination.0']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220627
    , at:  -0.020
    , is:  "ionify's ~get api examination"
    , go:
        { help: 'https://github.com/ionify/ionify/issues'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , code: 'https://github.com/ionify/ionify/blob/public/web.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/get.test.js'
        , deal: 'https://deal.ionify.net/'
        , join: 'https://github.com/ionify/about/tree/public/team'
        , seek: 'https://api.ionify.net/'
        },
      we:
        [ "were ..."
        , "must ..."
        , "will ..."
        , "want ..."
        , "like ..."
        ]
    },

  valueOf:function
  test_get()
    { delete this.valueOf <- this

      ~ {get:''}         <-  /testing getting the .js file/
      ~ {get:'@ionify'}  <-  /testing getting the @domain's .js file/

      ~
      { get:'../ions/i'
      , and:
          { log: "✅ ~get:script and:{} oli: object-literal ion "
          }
      }
      +
      { get:'../ions/i'
      , and:
          [{ log: "✅ ~get:script and:[{}] aeon: array-expressed object notation"
          }]
      }
      +
      { get:'../ions/i'
      , and:
          [ {info:true}
          , /✅ ~get:script and:[\/\/,{}] aeon: array-expressed object notation/
          ]
      }
      +
      { get:'../ions/i'
      , and:
          /✅ ~get:script and: \/\/   storie: statement, text, or recognition expression/
      }
      +
      { get:'../ions/i'
      , and:function
        and ()
          { ~
            /✅ ~get:script and:Function/
          }
      }
      +
      { info:false }

      ~
      { get : '../ions/i'
      , in  : 'order'
      , then:
          { log: "✅ ~get:script in:order then:{} oli: object-literal ion"
          }
      }
      +
      { get : '../ions/i'
      , in  : 'order'
      , then:  function
         hi()
          {
          + {log: ["✅ ~get:script in:order then:Function", hi.with.get]}
          }
      }


      ~
      { log:"testing ~get grouped & ordered with a shared ~get.then..."
      ,  in: 'order'
      , get:
          [ 'https://cdn.jsdelivr.net/gh/iskitz/ajile/use/com.iskitz.ajile.js?mvcoff,mvcshareoff'
          , 'https://cdn.jsdelivr.net/gh/iskitz/ajile/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js'
          ],
        then:function
        onLoadExample ()
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
        doIt:function
        onIncludeExample ()
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
    }
}

;