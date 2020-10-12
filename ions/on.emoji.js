;
~
{ re:
    { id:  'on.emoji@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -7.20190328
    , is:  -0.1
    , it:
        [" senses specific aesop emoji that activate, disable & deactivate ionify i.e. "
        +"   ['0 . 0']  &  ['0 . -']  &  ['- . 0']  &  ['- . -'] "
        ],
      we:
        [" want aemoji actions to resolve via: 1:on.array --> 2:@ionify-space "
        ]
    },

  do:
    [ {on: '0 . 0', as:'aesop', do:'activate'  }
    , {on: '0 . -', as:'aesop', do:'disable'   }
    , {on: '- . 0', as:'aesop', do:'disable'   }
    , {on: '- . -', as:'aesop', do:'deactivate'}
    ]
}
;