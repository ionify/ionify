;
~
{ re:
    { id:  'of.test@ionify'
    , of: ['core','public','api','tests']
    , do: {transcription:  true, 're.of':true, 'next.id':true}
    , as: {examination  :-0.001, 're.do':true}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -7.20221110
    , at:  -0.003
    , is: "ionify's re.of@ api tests"
    , go:
        { seek: 'https://api.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/of.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/of.test.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://github.com/ionify/about/tree/public/team'
        },
      we:
        [ "were ..."
        , "must ..."
        , "will adjust & add tests once .with.the.* <= .the.* is confirmed."
        , "want ..."
        , "like ..."
        ]
    },

  do:
    [ "of@ ensures ions' method.with.its"
    , "of@ ensures ions' method.with.the & the"
    , "of@ ensures ions' method.with.the.domain & the.domain"
    , "of@ ensures ions' method.all & the.all singular shared space"
    , "of@ ensures ions' re.of.domain"
    , "of@ ensures ions' re.of spaces exist as re.of.space(s)"
    , "of@ ensures ions' re.of spaces & the spaces are merged"
    ],

  report :function
  report (question, answer)
    { answer
        ?  ~{log  :`✅ ${question}`}
        :  ~{error:`❌ ${question}`, halt:false}
    },

 "of@ ensures ions' method.with.its":function
  its(doing)
    { var     exam = its.with.its
        , question = doing [doing.next]
        ,   answer = exam && exam[question] === its
      exam.report (question, answer)
    },

 "of@ ensures ions' method.with.the & the":function
  of(doing)
    { var     exam = of.with.its
        , question = doing [doing.next]

      var   answer = exam.the
                  && exam.the === of.with.the
                  && typeof exam.the == 'object'

      exam.report (question, answer)
    },

 "of@ ensures ions' method.with.the.domain & the.domain":function
  domain(doing)
    { var     exam = domain.with.its
        , question = doing [doing.next]

      var   answer = exam.the
                  && exam.the.domain
                  && domain.with.the.domain === exam.the.domain
                  && typeof exam.the.domain == 'object'

      exam.report (question, answer)
    },

 "of@ ensures ions' method.all & the.all singular shared space":function
  all(doing)
    { var     exam = all.with.its
        , question = doing [doing.next]
        ,    anion = {method:function(){}}
        ;   ~anion

      var   answer =  exam.the
                  &&  exam.the.all
                  && anion.the.all  === exam.the.all
                  && anion.the.all  === anion.method.with.all
                  && 'object' == typeof exam.the.all

      exam.report (question, answer)
    },

 "of@ ensures ions' re.of.domain":function
  re_of_domain(doing)
    { var     exam = re_of_domain.with.its
        , question = doing [doing.next]
        ,   answer = exam.re
                  && exam.re.of
                  && exam.re.of.domain
                  && typeof exam.re.of.domain == 'object'

      exam.report (question, answer)
    },

 "of@ ensures ions' re.of spaces exist as re.of.space(s)":function
  re_of_spaces(doing)
    { var     exam = re_of_spaces.with.its
        , question = doing [doing.next]
        ,   answer = true
        ,      ofs = exam.re.of

      for
        ( var f=-1, F=ofs.length, name, space
        ; (++ f  <  F) && answer;
        )
        { name   = ofs [f]
          space  = ofs [name]
          answer &&= space && typeof space == 'object'
        }

      exam.report (question, answer)
    },

 "of@ ensures ions' re.of spaces & the spaces are merged":function
  merge(doing)
    { var ion =
              {  re: {of: ['lee']      }
              , the: { m: {i:'chael'}  }
              }
        ~ ion

      var     exam = merge.with.its
        , question = doing [doing.next]
        ,      ofs = Object.keys (ion.re.of).sort()
        ,      the = Object.keys (ion.the  ).sort()
        ,   answer = (ofs.length - 1) == the.length // .re.of - '0:lee' not in .the/
        ,    found =  ofs.length - 1
        ,     skip = {domain:1}

      for
        ( var name in ion.the )
        { if (skip [name]) continue
          answer &&= (ion.the[name] === ion.re.of[name]) && --found >= 0
        }

      exam.report (question, answer)
    }
}
;