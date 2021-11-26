;
~
{ re:
    { id:  'on.ions@ionify'
    , as:  'sensor'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211126
    , at:  -0.1
    , is:
        [ "sensing ions@domain ions & applying & sharing their settings."
        , "..."
        ],
      we:
        [ "WERE doing its initial implementation."
        , "must fix ~on:ions@ overriding domains & paths because of common '' domain"
        , "know domain-mapping depends on ~on.as.do for re.as.configuration."
        , "must only override domains matching ions@'s domain.         "
        , "must only override domains when ions@'s domain is verified. "
        , "will set ~on to sense id@'s."
        , "..."
        ]
    },

  on:
   'ions@', // and-or {as:'configuration'||'setup'}
   'ions@':function
    onions (setup)
      { var next
          , our     = onions.our
          , domain$ =   our.domains || (our.domains = {})
          , path$   =   our.paths   || (our.paths   = {})
          , domains = setup.domains || {}
          , paths   = setup.paths   || {}
          , domain  = setup.re.id.match (/@(.*)$/) [1]
          ; domain$ = domain$ [domain] ||
                     (domain$ [domain]  = domains)
          ; path$   = path$   [domain] ||
                     (path$   [domain]  = paths)
/*
        for (next in domains)
          { domain$ [next] = domains [next]
          }

        for (next in paths)
          { path$ [next] = paths [next]
          }
*/
      ~ setup.logging
      }
}
;