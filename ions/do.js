;
~
{ re:
    { id:  'do@ionify'
    , by: ['mike.lee','team']
    , at:  'ionify.net'
    , in: ['forest-hills.new-york.usa.earth'
          ,  'san-jose.california.usa.earth'
          ]
    , on:  -4.200709
    , to:  -7.20181205
    , is:  -0.1
    , it: "implements ~do, which activates ions, functions & methods"
    }

, on: 'do'

, doInfo
:   [/ will Enable +{on: '' || [], do: ...}                       /
    ,/ like ionified [typeof todo] --> ~{is:todo, not:'ionified'} /
    ]
, do:
    function onDo (ion)
      { ion  || ~onDo.ion.errors.ionExpected
      ; var todo    = ion.do
      ; todo && !onDo.our.ionified [typeof todo] && (todo = ion [todo])
      ~ todo
      ; return true
      }

, errors
:   { ionExpected: "~do expects an ion or ion id"
    }
}
;