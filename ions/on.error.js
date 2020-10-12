;
~
{ re:
    { id:  'on.error@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181203
    , is:  +0.1
    , it:/ senses error ions /
    , we:
        [/ were ... /
        ,/ will ... /
        ]
    }

, on: Error
,     Error
:       function onError (ion)
          {  throw ion || this
          }
}
;