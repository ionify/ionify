;
~
{ re:
    { id:  'on.ions@ionify'
    , of: ['core','public','api']
    , as: {sensation      :-0.001, convention :-0.001}
    , do: {initialization :-0.001, acquisition:-0.001, ions:true}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221117
    , at:  -0.007
    , is:
        [ "sensing configuration@s, applying and-or sharing their settings"
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , read: 'https://lingo.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/on.ions.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.ions.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WILL confirm that on:* + re.as.configuration indeed delivers "
        + "domain-specific configuration@s via id@doma.in vs prior ions@ style."

        , "KNOW there's unexpected errors when ionify's configuration has an "
        + "ions@ionify id. maybe this resets the @ionify space...YES via"
        + "spaces@ions@ionify which tries to reset 'spaces' in @ionify..."

        , "MUST FIX sensing single ions@ id putting all configurations in an "
        + "unnamed ¿with.all? shared domain space."

        , "MUST FIX ~on:ions@ overriding domains & paths in common '' domain."
        , "like ~on sensing ion.as + ion.id:ions@doma.in for domain-configs."

        , "were ..."
        , "must ..."
        , "will ..."
        , "know ..."
        , "LIKE re.do: {ions:true} to ~get application@.s configuration@"
        , "have ..."
        , "want ..."
        , "wont ..."
        ]
    },

  get
    : 'ions'
    ,
  on:
  '*',
  '*':function
  configure (settings)
      { if (!settings.re.as.configuration) return

        var id    = settings.re.id
          , our   = configure.with.our
          , space = our.space (id)
          , skip  = our.skip
          , configuration

        for
          (  var  setting in settings)
          {!skip [setting]
              &&!~setting.indexOf('@')  //🚨alternate re@ object model
              &&  settings.hasOwnProperty (setting)
              && 'function' != typeof (configuration = settings [setting])
              &&!(space == our && setting == 'spaces' &&
                    {warn:true}+
                    {warn:
                        ["🚨🛡 ionosphere 🛡🚨", id, "tried setting", setting
                        ,"in the",configure.with.its.re.id.domain, "space"
                        ,"placing in the 'all' space instead & warning..."
                        //🤔 should we keep it instead & if so, where?...
                    ]   }+
                    {warn:configuration},
                    (our.spaces[setting] = configuration, true)
                  )
              && (space[setting] = configuration)
          }

        ~ settings.logging
      }
}
;