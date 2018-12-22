;
~
{ re:
    { id: 'ions'
    , by: 'mike.lee'
    , at: 'ionify.net'
    , in:
        [ 'forest-hills.new-york.usa.earth'
        ,   'san-jose.california.usa.earth'
        ]
    , on: -4.200709
    , to: -8.20181222
    , is: -0.1
    , it:
        [" configures ionify "
        ," defines ion domains, paths & more "
        ," provides domain lists as backup & performance options "
        ]
    , we:
        [" will ... "
        ]
    }

    ,
  domains:
    { ''             : '@ionify'
    , '@'            : '@ionify'
    , '@(.+)\.ionify': '@ionify/$1'
    , '@ionify':
          [ 'cdn.jsdelivr.net/gh/ionify/ionify@public/'
          , 'ionify.glitch.me/'
          , 'ionify.net/'
          , 'ionify.org/'
          , 'ionify.github.io/ionify/'
          ]
    }

    ,
  paths:
    {   ids: './ids/'
    ,  info: './info/'
    ,  ions: './ions/'
    , tests: './ions/'
    , tools: './tools/'
    }

, debug   : false
, error   : true
, info    : false
, log     : false
, warn    : true
, verify  : true
}

;