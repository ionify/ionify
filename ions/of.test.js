;
~
{ re:
    { id:  'of.test@ionify'
    , of: ['tests','core','api']
    , as: ['examination','convention','sensation','composition']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20221031
    , at:  -0.01
    , is: "ionify's of@ api tests"
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
        [ "were implementing initial tests"
        , "must ..."
        , "will ..."
        , "want ... "
        , "like ... "
        ]
    },

  do:
    [ "of@ ensures ions have .its"
    , "of@ ensures ions have .the"
    , "of@ ensures ions have .the.domain"
    , "of@ ensures ions have .the.all singular shared space"
    , "of@ ensures ions' re.of spaces exist as re.of.space(s)"
    , "of@ ensures ions' re.of spaces & .the spaces are merged"
    ],

  report :function
  report (question, answer)
    { answer
        ?  ~{log  :`✅ ${question}`}
        :  ~{error:`❌ ${question}`, halt:false}
    },

 "of@ ensures ions have .its":function
  its(doing)
    { var     exam = its.with.its
        , question = doing [doing.next]
        ,   answer = exam && exam[question] === its
      exam.report (question, answer)
    },

 "of@ ensures ions have .the":function
  of(doing)
    { var     exam = of.with.its
        , question = doing [doing.next]
        ,   answer =  exam.the && typeof exam.the == 'object'
      exam.report (question, answer)
    },

 "of@ ensures ions have .the.domain":function
  domain(doing)
    { var     exam = domain.with.its
        , question = doing [doing.next]
        ,   answer = exam.the && exam.the.domain && typeof exam.the.domain == 'object'
      exam.report (question, answer)
    },

 "of@ ensures ions have .the.all singular shared space":function
  all(doing)
    { var     exam = all.with.its
        , question = doing [doing.next]
        ,    anion = {}
        ;   ~anion

      var   answer = exam.the
                  && exam.the.all
                  && anion.the.all  === exam.the.all
                  && 'object' == typeof exam.the.all

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

 "of@ ensures ions' re.of spaces & .the spaces are merged":function
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
        ,   answer = (ofs.length - 1) == (the.length - 1) //- .domain not in .re.of & - '0' not in .the/
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