;
~
{ re:
    { id:  'on.no@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181218
    , is:  -0.1
    , it:
        [" implements ~on.no which enables disabling a sensor mapped to one or "
        +" more term(s).                                                       "
        ]
    , we:
        [" like the idea of resolving ~ {no: 'this.ion'}     "
        ," must handle multiple actions using the same term. "
        ]
    }
, on:
    [ ['on', 'no']
    ]
,"on no"
:"no"
, no:
    function no (ion)
      { if (!ion.no && !('no' in ion)) return ion;

        var acts = ion.no
          ; !Array.isArray (acts) && (acts = [acts])
          ;
        var id
          , act
          , nion //next ion
          , term
          , known = no.our.known
          , next  = -1
          , last  = acts.length
          , sense = no.our.sense
          ;
        while (++next < last)
          { nion  =   acts [next].ion
          ; term  =   ion.on
          ; id    =   nion && nion.re && nion.re.id
          ; act   =   sense [term]
          ; act   &&  act.ion && (id && id == act.ion.re.id)
                  &&  delete sense [term]
                  &&  delete known [term]
          }
      }
}
;