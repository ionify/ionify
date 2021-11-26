;
~
{ re:
    { id: 'ions@'
    , of: 'core'
    , as: 'configuration'
    , by: 'mike.lee@ionify.net'
    , in:
        [    'queens-county.new-york.usa.earth'
        , 'silicon-valley.california.usa.earth'
        ]
    , on: -4.200709
    , to: -8.20211126
    , at: -0.1
    , is:
        [ "configuring ionify "
        , "defining ion domains, paths & more "
        , "providing domain lists as backup & performance options "
        ],
      we:
        [ "know this applies ~link.to to override on.ions@'s configuration action"
        , "like ions@ionify in main directory with hosts like web@ionify"
        ]
    },

  domains:
    { verify : true
    , resolve:
        {     ''             : '@ionify'
        ,     '@'            : '@ionify'
        , '(.+)@(.+)\.ionify': '@ionify/$2/$1'
        , '@ionify':
              [ 'cdn.jsdelivr.net/gh/ionify/ionify@public/'
              , 'ionify.github.io/ionify/'
              , 'ionify.glitch.me/'
              , 'ionify.net/'
              , 'ionify.org/'
              ]
        }
    },

  paths:
    {  ions: './ions/'
    ,  team: './team/'
    , notes: './notes/'
    , tests: './tests/'
    , tools: './tools/'
    },

  logging:
    { debug : false
    , error : true
    , info  : false
    , log   : false
    , warn  : true
    }
}
;