;
~
{ re:
    { id:  'get.test@ionify'
    , of: ['tests','core','api']
    , do: {acquisition:true, transcription:true}
    , as: {examination:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221201
    , at:  -0.023
    , is:  "ionify's ~get api examination"
    , go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/get.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/get.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
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
    { delete this.valueOf <= this

      var state = +{info:null}

      ~ {get:''}         <=  /testing getting the .js file/
      ~ {get:'@ionify'}  <=  /testing getting the @domain's .js file/

      ~
      { get:'narrator@ionify'
      , and:
          { log: "✅ ~get:script and:{} do oli: object-literal invocation"
          }
      }
      +
      { get:'narrator@ionify'
      , and:
          [{ log: "✅ ~get:script and:[{}] do aeon: array-expressed object notation"
          }]
      }
      +
      { get:'narrator@ionify'
      , and:
          [ {info:true}
          , /✅ ~get:script and:[\/\/,{}] do aeon: array-expressed object notation/
          , {info:state}
          ]
      }
      +
      { get:'narrator@ionify'
      , and:
          /✅ ~get:script and: \/\/     do storie: stated text of recognition expression/
      , info:true
      }
      +
      { get:'narrator@ionify'
      , and:function
        and ()
          {
          + /✅ ~get:script and:Function/
          }
      }
      +
      {info:state}

      ~
      { get : 'narrator@ionify'
      , in  : 'order'
      , then:
          { log: "✅     ~get:script     in:order then:{} do oli: object-literal invocation"
          }
      , warn: "🚨 need invocations returning invoked-or-not # state to confirm 🚨"
      }
      +
      { get : 'narrator@ionify'
      , in  : 'order'
      , then: function
        hi()
          {
          + {log: ["✅     ~get:script    in:order then:Function", hi.with.its.get]}
          }
      }

      +
      { log:"testing ~get grouped & ordered with a shared ~get.then..."
      , say:"    ~get:scripts[] in:order then:Function"
      , err:"🚨 must make get.batch@web@ .onload that ~.thens after all load 🚨"
      ,  in:'order'
      , get:
          [ 'https://cdn.jsdelivr.net/gh/iskitz/ajile/use/com.iskitz.ajile.js?mvcoff,mvcshareoff'
          , 'https://cdn.jsdelivr.net/gh/iskitz/ajile/play/api/scripts/com.iskitz.ajile.examples.LoadExample.js'
          ],
        then        : function
        onLoadExample (script)
          { var got = '\n   ' + (script.target || script.re).id
              , its = onLoadExample.with.its
              , say = its.say

            com.iskitz.ajile.examples
              ? {log  : ["✅", say, got]}
              +  com.iskitz.ajile.examples.LoadExample
              : {error: ["❌", say, got], halt:false}
              + {warn : its.err}
            }
      }

      +
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
        onIncludeExample (script)
          {  var got = '\n   ' + (script.target || script.re).id
             com.iskitz.ajile.examples.IncludeExample
          + {log: ["✅ ~do:[get:script    in:order then:Function:named]", got]}
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
            {  +com.iskitz.ajile.examples.LoadExample
            }
      }
      */
    }
}
;