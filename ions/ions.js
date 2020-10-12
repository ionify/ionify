;
~
{ re:
    { id: 'ions@ionify'
    , by: 'mike.lee'
    , at: 'ionify.net'
    , in:
        [ 'forest-hills.new-york.usa.earth'
        ,   'san-jose.california.usa.earth'
        ]
    , on: -4.200709
    , to: -7.20190413
    , is: -0.1
    , it:
        [" configures ionify "
        ," defines ion domains, paths & more "
        ," provides domain lists as backup & performance options "
        ]
    , we:
        [" like ions@ionify in main directory with hosts like web@ionify "
        ]
    },

  do:
    [ { link  : '*'
      , to    : '@ionify'
      , re    : false
      , do    : false
      }
    ],

  domains
  : { verify : true
    , resolve:
        { ''             : '@ionify'
        , '@'            : '@ionify'
        , '@(.+)\.ionify': '@ionify/$1'
        , '@ionify':
              [ 'cdn.jsdelivr.net/gh/ionify/ionify@public/'
              , 'ionify.github.io/ionify/'
              , 'ionify.glitch.me/'
              , 'ionify.net/'
              , 'ionify.org/'
              ]
        }
    },

  paths
  : {  ions: './ions/'
    ,  team: './team/'
    , notes: './notes/'
    , tests: './tests/'
    , tools: './tools/'
    },

  logging
  : { debug : false
    , error : true
    , info  : false
    , log   : false
    , warn  : true
    }
}
;