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
    , to: -8.20181215
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
          [ 'ionify.github.io/ionify/'
          , 'cdn.rawgit.com/ionify/'
          , 'ionify.net/'
          , 'ionify.com/'
          , 'ionify.org/'
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

,  debug:!true
, verify: true
}

;