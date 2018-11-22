;
~
{ re:
    { id: 'ions@ionify'
    , is: "ionify's ion settings"
    , by: 'mike.lee@ionify'
    , on: -4.200709
    , to: -8.20181122
    , at: -0.1
    , in:
        [   'san-jose.california.usa.earth'
        , 'forest-hills.new-york.usa.earth'
        ]
        ,
      stories:
        [ /note: ions@ settings define ion domains, paths + more/
        , /note: domain lists are backup + performance options/
        , "todo: ..."
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

,  debug: !true
, verify:  true
}

;