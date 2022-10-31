;
~
{ re:
    { id:  'with.test@ionify'
    , of: ['tests','core','api']
    , as: ['examination','convention','sensation','composition']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20221027
    , at:  -0.01
    , is: "ionify's with@ api tests"
    , go:
        { seek: 'https://api.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/with.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/with.test.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://github.com/ionify/about/tree/public/team'
        },
      we:
        [ "were ..."
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
    , "with@ sets .with.its as the ion"
    , "with@ sets .with.the as the ion's the"
    , "with@ sets .with.our as the ion's domain space"
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

 "with@ sets .with.its as the ion":function
  its (doing)
    { var     exam = its.with.its
        , question = doing [doing.next]
        ,   answer = exam.re == doing.with.its.re

      exam.report (question, answer)
    },

 "with@ sets .with.the as the ion's the":function
  the (doing)
    { var     exam = the.with.its
        , question = doing [doing.next]
        ,   answer = Boolean (exam.the) && exam.the === the.with.the

      exam.report (question, answer)
    },

 "with@ sets .with.our as the ion's domain space":function
  our (doing)
    { var     exam = our.with.its
        , question = doing [doing.next]
        ,   answer = our.with.our === our.with.the.domain

      exam.report (question, answer)
    }
}
;