;
~
{ re:
    { id:  'on.ions@ionify'
    , of:  'core'
    , as:  'sensation'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211203
    , at:  -0.1
    , is:
        [ "intended to sense ions@domain ions & apply & share their settings, but..."
        , "currently senses single ions@ id which puts all configurations in an empty"
        + "shared domain space."
        ],
      we:
        [ "WERE doing its initial implementation"
        , "must fix ~on:ions@ overriding domains & paths because of common '' domain"
        , "like ~on sensing ion.as to support ion.id:ions@doma.in for domain-configs"
        , "..."
        ]
    },

  on:
    [ 'ions@'
    ],


 'ions@' :function
  onions (configuration)
      { var our    = onions.our
          , space  = our.space (configuration.re.id)
          , skip   = {re:true, on:true, do:true, get:true, 'ions@':true}

        for
          ( var setting in configuration)
          {!skip [setting]
              &&  configuration.hasOwnProperty (setting)
              && (space [setting] = configuration [setting])
          }

        ~ configuration.logging
      }
}
;