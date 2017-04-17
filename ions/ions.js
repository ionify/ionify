;
/ions@ionify activating.../
+

{ re:
    { id: "ions.0.1@ionify"
    , is: "ionify's ion settings"
    , by: "mike.lee@iskitz"
    , at: "2017.04.16-07...2007.09-04"
        ,
      in:
        [   "san-jose.california.usa.earth"
        , "forest-hills.new-york.usa.earth"
        ]
        ,
      stories:
        [ /note: ions@ settings define ion domains, paths + more/
        , /note: domain lists are backup + performance options/
        , "todo: move this ions@ to ionify's main directory: /"
        ]
    }

    ,
  domains:
    { ""             : "@ionify"
    , "@"            : "@ionify"
    , "@(.+)\.ionify": "@ionify/$1"
    , "@ionify":
          [ "ionify.github.io/ionify/"
          , "cdn.rawgit.com/ionify/"
          , "ionify.net/"
          , "ionify.com/"
          , "ionify.org/"
          ]
    }

    ,
  paths:
    {   ids: "./ids/"
    ,  info: "./info/"
    ,  ions: "./ions/"
    , tests: "./ions/"
    , tools: "./tools/"
    }

,  debug: false
, verify: true
}

+
/ions@ionify activated!/
;