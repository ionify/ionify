;
~
{ re:
    { id:  'no@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -7.20180328
    , is:  -0.1
    , it:
        [" implements ~on.no which disables a sensor mapped to one or more "
        +" term(s).                                                        "
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
    function no (sensor)
      { if (!sensor.no && !('no' in sensor)) return sensor

        var  acts = sensor.no
          ; !Array.isArray (acts) && (acts = [acts])
          ;
        var act
          , term
          , next  = -1
          , last  = acts.length
          , known = no.our.known
          , sense = no.our.sense
          ;
        while (++next < last)
          { term  =   sensor.on
          ; act   =   sense [term]
          ; act   && (act == acts  [next])
                  &&  delete sense [term]
                  &&  delete known [term]
          }
      }
}
;