;
~
{ re:
    { id:  'with.test@ionify'
    , of: ['tests','core','api']
    , as: ['examination','convention','sensation','composition']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20221117
    , at:  -0.02
    , is: "ionify's with@ api tests"
    , go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/with.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/with.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WERE ..."
        , "must ..."
        , "will ..."
        , "want ... "
        , "like ... "
        ]
    },

  do:
    [ "with@ adds .with to methods"
    , "with@ adds .with to arrays"
    , "with@ adds .with to methods & arrays only"
    , "with@ sets .with.its = the ion"
    , "with@ sets .with.the = the ion's with.the"
    , "with@ sets .with.our = the ion's domain space"
    ],

  report :function
  report (question, answer)
    { answer
        ?  ~{log  :`✅ ${question}`}
        :  ~{error:`❌ ${question}`, halt:false}
    },

 "with@ adds .with to methods":function
  methods (doing)
    { var     exam =  methods.with.its
        , question = doing [doing.next]
        ,   answer =  exam [question] === methods
      exam.report (question, answer)
    },

 "with@ adds .with to arrays":function
  arrays (doing)
    { var question = doing [doing.next]
        ,   answer = doing.with.its.do === doing
      arrays.with.its.report (question, answer)
    },

 "with@ adds .with to methods & arrays only":function
  methodsAndArrays (doing)
    { var     exam =  methodsAndArrays.with.its
        , question =  doing [doing.next]
        ,   answer =  methodsAndArrays  ===  exam [question]
                  &&  doing.with.its.do === doing
                  && !exam.re.with

      exam.report (question, answer)
    },

 "with@ sets .with.its = the ion":function
  its (doing)
    { var     exam = its.with.its
        , question = doing [doing.next]
        ,   answer = exam.re == doing.with.its.re

      exam.report (question, answer)
    },

 "with@ sets .with.the = the ion's with.the":function
  the (doing)
    { var     exam = the.with.its
        , question = doing [doing.next]
        ,   answer = Boolean (exam.with.the) && exam.with.the === the.with.the

      exam.report (question, answer)
    },

 "with@ sets .with.our = the ion's domain space":function
  our (doing)
    { var     exam = our.with.its
        , question = doing [doing.next]
        ,   answer = our.with.our === our.with.its.domain

      exam.report (question, answer)
    }

/*
 great test of merging aliased spaces, must make into actual tests!👨🏾‍💻🤓
  with:
    { its:
        { //....🌱 share with your .members here 🌱
          domain:
            { //🌱 share with-in your domain here 🌱
              testing:{testing:123}
            }
        },
      all:
        { //....🌱 share with all the ~ions here 🌱
        },
      our:
        { //....🌱 share with-in your domain here 🌱
          working:2022
        },
      the:
        { //....🌱 share with more++ spaces here 🌱
          ionify:
            { //🌱 share with ionify domain here 🌱
              spaces: null
            }
        }
    },
 */
}
;