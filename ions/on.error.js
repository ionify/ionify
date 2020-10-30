;
~
{ re:
    { id:  'on.error@ionify'
    , is:  'sensor'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20201029
    , at:  +0.1
    , it: "senses error ions"
    , we:
        [ "were ... "
        , "will ... "
        ]
    },

  on:
    Error,
    Error:
      function onError (ion)
        {  throw ion || this
        }
}
;