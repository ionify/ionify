;

~
{ re:
    { id: 'do.0.1@ionify'
    , is: "ionify's do action: activates ions, functions + methods"
    , by:
        [ {creator: 'mike.lee@iskitz',  at: '2007.09-04',     in: 'forest-hills.new-york.usa.earth'}
        , {authors:     'team@ionify',  at: '2018.04.23-07',  in:   'san-jose.california.usa.earth'}
        ]
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