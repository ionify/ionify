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
    , to:  -8.20190104
    , is:  -0.1
    , it: "implements ~do, which activates aeons, functions, ions & pions"
    }

, on:'do'

, doInfo
:   [" will Enable +{on: String || [], do: ...}                        "
    ," like ionified [typeof todo] --> ~ {is:todo, type:'ionified'} "
    ]

, do:
    function doing (ion)
      { var todo  = ion.do
      ;     todo && ! doing.our.ionified [typeof todo] && ~{find:todo, in:ion, as:'do'} && (todo = ion.do)
      ;   ~ todo
      ; return true
      }
}
;