;
~
{ re:
    { id:  're.of.do.as.test@ionify'
    , of: ['core','public','api','tests']
    , do: {transcription:  true, 're.do.as.of@':true, 'next.id@':true}
    , as: {examination  :-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike.🇬🇾👨🏾‍💻🇺🇸.lee','team✨ionify']
    , on:  -4.200709
    , to:  -7.20221122
    , at:  -0.007
    , is: "ionify's re.of@ api tests"
    , go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/of.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/re.of.do.as.js'
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

  do:
    [ "of@ ensures ions' method.with.its"
    , "of@ ensures ions' method.with.the & with.the"
    , "of@ ensures ions' method.with.its.domain & with.its.domain"
    , "of@ ensures ions' method.with.all & with.all singular shared space"
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

 "of@ ensures ions' method.with.the & with.the":function
  of (doing)
    { var     exam = of.with.its
        , question = doing [doing.next]

      var   answer = exam.with
                  && exam.with.the
                  && exam.with.the === of.with.the
                  && typeof exam.with.the == 'object'

      exam.report (question, answer)
    },

 "of@ ensures ions' method.with.its.domain & with.its.domain":function
  domain (doing)
    { var     exam = domain.with.its
        , question = doing [doing.next]

      var   answer = exam.with.its
                  && exam.with.its.domain
                  && domain.with.its.domain === exam.with.its.domain
                  && typeof exam.with.its.domain == 'object'

      exam.report (question, answer)
    },

 "of@ ensures ions' method.with.all & with.all singular shared space":function
  all (doing)
    { var     exam = all.with.its
        , question = doing [doing.next]
        ,      ion = {method:function(){}}
        ;     +ion

      var   answer = exam.with
                  && exam.with.all
                  &&  ion.with.all  === exam.with.all
                  &&  ion.with.all  === ion.method.with.all
                  && 'object' == typeof exam.with.all

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
              {   re: { of: ['lee']           }
              , with: {the: { mi: {cha:'el'} }}
              }
        ~ ion
      var     exam = merge.with.its
        , question = doing [doing.next]
        ,      of  = ion.re.of
        ,      the = ion.with.the
        ,    found = Object.keys (of).length - 2 //re:0 + re.lee not in with.the
        ,     skip = {domain:true}
        ,   answer = true

      for
        ( var name in the )
        { if (skip [name] || (the[name] !== of[name])) continue
          answer &&= 0 <=-- found
          if (!found) break
        }

      exam.report (question, answer)
    }
}
;