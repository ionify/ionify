;
~
{ re:
    { id:  'ions@'
    , of:  'tests'
    , as:  'configuration'
    , by: ['mike.lee', 'team']
    , in: [    'queens-county.new-york.usa.earth'
          , 'silicon-valley.california.usa.earth'
          ]
    , on:  -4.200709
    , to:  -8.20211126
    , at:  -0.1
    , is: "configuring ionify's examinations"
    },

  do:
    [ {get: ['tests']}
    ],

  logging:
    { debug :  !true
    , error :   true
    , info  :  !true
    , log   :   true
    , warn  :   true
    }
}
;