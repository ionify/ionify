;

~
{ re:
    { id: 'do@ionify'
    , is: "ionify's do action: activates ions, functions + methods"
    , by:['mike.lee@iskitz','team@ionify']
    , in:['forest-hills.new-york.usa.earth'
         ,  'san-jose.california.usa.earth'
         ]
    , on: -4.200709
    , to: -7.20180423
    , at: -0.1
    }

    ,
  on: 'do'

    ,
  errors:
    { ionExpected: "+do expects an ion or ion id"
    }

    ,
  doStories:
    [/ todo: Enable +{on: "" || [], do: ...}                      /
    ,/ todo: ionified [typeof todo] > +{is:todo, not:"ionified"}  /
    ]
    ,
  do:
    function onDo (ion)
      { ion || ~onDo.ion.errors.ionExpected

        var DO   = onDo.ion
          , todo = ion.do

      ; todo && !DO.ionified [typeof todo] && (todo = ion [todo])
      ~ todo
      ; return true
      }

    ,
  ionified:
    { Array    :  true
    , boolean  : !true
    , Error    :  true
    , function :  true
    , Function :  true
    , number   : !true
    , object   :  true
    , Object   :  true
    , RegExp   :  true
    , string   : !true
    , undefined: !true
    }

} //+do@ionify

;