;
~
{ re:
    { id:  're.hi.test@ionify'
    , of: ['more', 'public', 're', 'sion', 'api', 'tests']
    , do: 're.hi@'
    , as: {examination:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221129
    , at:  -0.001
    , hi:  true || 'ionify' || "other method name" || false
    , is:
        [ "ionify's re.hi@: handled    invocation, "
        +           "sion@: structured invoked object notation, "
        +      "test suite"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/re.hi.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/re.hi.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      it:
        [ "..."
        ],
      we:
        [ "WERE doing it's initial implementation!"

        , "must ..."
        , "will ..."
        , "plan ..."
        , "need ..."
        , "want ..."
        , "like ..."
        , "know ..."
        , "care ..."
        , "wish ..."
        , "note ..."
        , "have ..."
        , "dont ..."
        , "wont ..."
        , "cant ..."
        ]
    },

  do:
    [ "re.hi: false"
    , "re.hi: missing"
    , "re.hi: named"
    , "re.hi: malformed"
    ],

  valueOf:function
  hiphop ()
    {
    + {log:"✅ re.hi@ ignores anions: anonymous ions"}
    ; delete this.valueOf <= this
    },

  ionify:function
  ionify ()
    {
    + {log: [ionify.with.its.message.pass, "re.hi: true"]}
    },

  message:
    { pass: "✅ re.hi@ senses & invokes"
    , fail: "❌ re.hi@ senses & invokes"
    },

 "re.hi: named":function
  named (doing)
    { var message = doing.with.its.message
        , exam    = doing [doing.next]
        , ion =
            { re:
                { hi: "my named hi: handled invocation"
                },
              "my named hi: handled invocation":function
              named()
                {
                + {log: [message.pass, exam]}
                },
              ionify:function
              ionify ()
                {
                + {error: [message.fail, exam], halt:false}
                }
            }
    ~ ion
    },

 "re.hi: false":function
  fals3 (doing)
    { var ignores = doing.with.its.ignores
        , exam    = doing [doing.next]
        , ion =
            { re:
                { hi:false }
                ,
              ionify()
                {
                + {error: [ignores.fail, exam], halt:false}
                }
            }
    ~ ion

      ion.valueOf = function
      hip()
        {
        + {log: [ignores.pass, exam]}
        }

    ~ ion
    },

  ignores:
    { pass: "✅ re.hi@ ignores"
    , fail: "❌ re.hi@ ignores"
    },

 "re.hi: missing":function
  missing (doing)
    { var ignores = doing.with.its.ignores
        , exam    = doing [doing.next]
        , ion =
            { ionify()
                {
                + {error: [ignores.fail, exam], halt:false}
                }
            }
    ~ ion

      ion.valueOf = function
      hip()
        {
        + {log: [ignores.pass, exam]}
        }

    ~ ion
    },

 "re.hi: malformed":function
  missing (doing)
    { var ignores = doing.with.its.ignores
        , exam    = doing [doing.next]

    ;  ({ re:
            { hi: {malformed:true}
            },
          malformed:function
          malformed()
            {
            + {error: [ignores.fail, exam], halt:false}
            },
          ionify:function
          ionify()
            {
            + {error: [ignores.fail, exam], halt:false}
            }
        }) <= /re.hi: {malformed:true} should ~warn with ~debug details/
    },

 "re.hi: malformed:named":function
  malformed_named (doing)
    { var ignores = doing.with.its.ignores
        , exam    = doing [doing.next]

    ; ({ re:
          { hi: "malformed named"
          },
        "malformed named":
          { error: [ignores.fail, exam], halt:false
          },
        ionify:function
        ionify()
          {
          + {error: [ignores.fail, exam], halt:false}
          }
      }) <= /re.hi: "malformed:named" should ~warn with ~debug details/
    }
}
;