;
~
{ re:
    { id:  'of@ionify'
    , of: ['core','public','sion','context','api']
    , as: {specification:-0.001, sensation:-0.001, convention:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike👨🏾‍💻lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -7.20221116
    , at:  -0.007
    , is:
        [ "ionify's re.of@ convention that sets ions' re.of & with.the.* spaces"
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/of.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/of.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WILL rename this sion re.of@ <= of@"
        , "MUSE should ~get.ing relation@s be done here in re.of@ vs get@? YES?"

        , "must"
        , "will"
        , "plan"

        , "want re.of.* & with.the.* converted to name@ion.re.domain.name "
        + "unless they already are. all spaces are name@domain where domain can "
        + "be blank. ~name.search (/@/) ||  (name += domain.full). "
        + "must see ideas re: dot.notation nested.space access & naming; .@how?"
        ]
    },

  on:
  '*',
  '*':function
  of( ion )
    { var spaces  = of.with.our.spaces
        , domain  = ion.re.id.domain
        , ofs     = ion.re.of
        , with_   = ion.with
        , the     = with_.the
        , space   , name

      ofs.domain  = domain == '' ? with_.all : ofs[domain] = the[domain]

      //resolve all re.of space names to space instances & ensure their in .the/
      for
        ( var f=-1, F=ofs.length
        ;  ++ f  <  F          ;
        )
        { name = ofs [f]
          if (!name) continue
          space  = spaces [name]

          space || name in spaces ||
         (space  = spaces [name]   = {})

          ofs [name]  =  space
          the [name] || (the[name] = space)
        }
    }
}
;