;
~
{ re:
    { id:  'on.ions@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20190105
    , is:  -0.1
    , it:
        [" senses ions@domain ions & applies & shares their settings.  "
        ," ... "
        ]
    , we:
        [" were doing its initial implementation. "
        ," will set ~on to sense id@'s.           "
        ," will only override domains matching ions@'s domain.         "
        ," will only override domains when ions@'s domain is verified. "
        ," ... "
        ]
    }

, on
:  'ions@' // and.or {as:'setup'}
,  'ions@'
:   function onions (setup)
      { var our     = onions.our
          , domain$ = our.domains || (our.domains = {})
          , path$   = our.paths   || (our.paths   = {})
          , domains = setup.domains
          , paths   = setup.paths
          , domain  = setup.re.id.match (/@(.*)$/) [1]
          , next
          ;

      ~ setup.logging

        for (next in domains)
          { domain$ [next] = domains [next]
          }

        path$  =  path$ [domain]
              || (path$ [domain] = {})
               ;

        for (next in paths)
          { path$ [next] = paths [next]
          }
      }
}
;