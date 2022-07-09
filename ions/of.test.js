;
~
{ re:
    { id:  'of.test@ionify'
    , of: ['tests','core','api']
    , as: ['examination','convention','sensation','composition']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220708
    , at:  -0.0
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
    [ "of@ ensures ions have .of"
    , "of@ ensures ions have .of.own"
    , "of@ ensures ions have .of.domain"
    , "of@ ensures ions have .of.all singular shared space"
    , "of@ ensures ions' re.of spaces exist as re.of.space(s)"
    , "of@ ensures ions' re.of spaces & .of spaces are merged"
    ],

  report :function
  report (question, answer)
    { answer
        ?  ~{log  :`✅ ${question}`}
        :  ~{error:`❌ ${question}`, halt:false}
    },

 "of@ ensures ions have .of":function
  of(doing)
    { var     exam = of.with.its
        , question = doing [doing.next]
        ,   answer =  exam.of && typeof exam.of == 'object'
      exam.report (question, answer)
    },

 "of@ ensures ions have .of.own":function
  own(doing)
    { var     exam = own.with.its
        , question = doing [doing.next]
        ,   answer = exam.of && exam.of.own && typeof exam.of.own == 'object'
      exam.report (question, answer)
    },

 "of@ ensures ions have .of.domain":function
  domain(doing)
    { var     exam = domain.with.its
        , question = doing [doing.next]
        ,   answer = exam.of && exam.of.domain && typeof exam.of.domain == 'object'
      exam.report (question, answer)
    },

 "of@ ensures ions have .of.all singular shared space":function
  all(doing)
    { var     exam = all.with.its
        , question = doing [doing.next]
        ,    anion = {}
        ;   ~anion

      var   answer = exam.of
                  && exam.of.all
                  && anion.of.all   === exam.of.all
                  && 'object' == typeof exam.of.all

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

 "of@ ensures ions' re.of spaces & .of spaces are merged":function
  merge(doing)
    { var ion =
              { re: {of: ['lee']      }
              , of: { m: {i:'chael'}  }
              }
        ~ ion

      var     exam = merge.with.its
        , question = doing [doing.next]
        ,      ofs = Object.keys (ion.re.of).sort()
        ,      of  = Object.keys (ion.of   ).sort()
        ,   answer = (ofs.length - 1) == (of.length - 2) //- .own .domain & '0' not in re.of/
        ,    found =  ofs.length - 1
        ,     skip = {own:1,domain:1}

      for
        ( var name in ion.of )
        { if (skip [name]) continue
          answer &&= (ion.of[name] === ion.re.of[name]) && --found >= 0
        }

      exam.report (question, answer)
    }
}
;