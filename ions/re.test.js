;
~
{'re.test@ionify':
    { of: ['core','sion','api','tests']
    , do: {stories:true, transcription: true }
    , as: {     re:true, examination  :-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -7.20221117
    , at:  -0.005
    , ax: "to see what re@ does. thank You 🙇🏾‍♂️🤲🏾 יהוה 🤲🏾👨🏾‍💻"
    , ex: "juss fuh see wah re@ guhn doooo 😅"
    , go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/re.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/re.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "MUST create comprehensive re.* tests to ensure a reliable foundation"
        , "MUST create re.* specification@ conformance tests for reliability"
        , "WILL add test(s) for values of auto-created & corrected re.* members"

        , "were ..."
        , "must ..."
        , "want ..."
        , "like ..."
        , "muse ..."
        , "have ..."
        , "wont ..."
        ]
    },

  do:
    [ "re@ sets: re.core for anion ~{ }"
    , "re@ sets: re.core malformed ~{*}"
    ],

  tests:
    {id:1,im:1,of:1,do:1,as:1,by:1,on:1,to:1,at:1,ax:1,hi:1,is:1,ex:1,go:1
    },

 "re@ sets: re.core for anion ~{ }":function
  recore_anion (doing)
    { var question  = doing [doing.next]
        , tests     = recore_anion.with.its.tests
        ; tests.if  = 1

      var anion
        =  {}
        ~ anion
      var  re
        = anion.re

      re
        ? ~{log  :[`✅ ${question} re`]}
        : ~{error:[`❌ ${question} re`], halt:false}

      for
        ( var
          test in tests)
          test in re
            ? ~{log  :[   `✅ ${question} re.${test}`    ]}
            : ~{error:[!0,`❌ ${question} re.${test}`, re], halt:false}
    },

  testLater:function
  testLater(input)
    { var malformation  = input.malformation
        , test          = input.test
        , question      = input.question

      function
      testNow()
        { var re= malformation.re
          test in re
          ? ~{log  :[   `✅ ${question} re.${test}`    ]}
          : ~{error:[!0,`❌ ${question} re.${test}`, re], halt:false}
        }
      return testNow
    },

 "re@ sets: re.core malformed ~{*}":function
  recore_malformation (doing)
    { var malformation = {re:{}}
        ,      testing = []
        ,     question = doing [doing.next]
        ,        tests = recore_malformation.with.its.tests
        ,        later = recore_malformation.with.its.testLater

      function
      testNow()
        { malformation.re
            ? ~{log  :[`✅ ${question} re`]}
            : ~{error:[`❌ ${question} re`], malformation, halt:false}
        }

      testing.push (testNow)

      for
        ( var
          test in tests)
        { malformation.re [test] = 2017 * Math.random()
          testing.push( later ({malformation, test, question}))
        }

      malformation - testing <= /invoke the malformed re & activate its tests/
    }
}
;