;
~
{ re:
    { id:  'web@ionify'
    , is:  "ionify: invoked object notation implemented for your web"
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211205
    , at:  -0.046
    , we:
        [ "were adding tests for web@ionify & its actions	                           "
        , "will set all ~get actions' ionid@ domains to the current ion's.           "
        , "will set ~debug:{member:true|false} = ion member to debug.                "
        , "want to adopt ajile.test.inlineLoader to load inline code!                "
        , "want all ~get.then to delete script.onload after ~then for memory perf?   "
        , "like ~get to be the first ion sensor that queues ions for ~on sensing     "
        + "it enables getting ions like ions@ before sensors activate.               "
        , "were ... "
        , "must ... "
        , "want ... "
        , "like ... "
        ]
    },

  on:
    [ ['get', 'in', 'then', 'after']
    , ['get'      , 'then', 'after']
    , ['get', 'in', 'then']
    , ['get'      , 'then']
    , ['get', 'in'  ]
    , ['get', 'and' ]
    , ['get']
    ],

  valueOf:function
  ionify ()
    { this.web ()
    },

  web :function
  web ()
    { Object.prototype.valueOf.ionified = this
    ; var web        = this
    ; web.get.with   = web
  //; web.watch     ()
    ; web.ready     ()
    ; web.locate    ()
    ; web.getScript ({at:'on.ion@ionify'})
    },

  watch:
    function watch ()
      { onerror =
          function onUncaughtError (message, url, line, column, error)
           { ~{warn : [message, error && error.stack]}
           ; ~{debug: [message, 'errorstack', url, line, column, error]}
           ;  return true
           }
      },

  ready:
    function ready ()
      {   var error = this.errors
      ;   if (typeof document == 'undefined') throw new Error (error.noDOM)
      ;   return true
      },

  errors:
    { noDOM   : "web@ionify needs the DOM: Document Object Module API"
    , noScript: "No script url or code found in "
    },

  locateInfo:
    [" note: senses ionify's path for locating & loading its ions. "
    ,/ note: locates via most to least accurate techniques.        /
    ," will: sense /ions/ path & only when unable apply hardcode.  "
    ],
  locate:
    function locate ()
      { var script  =[  document.currentScript ,,]
                    ||  document.scripts
                    ||  document.head.getElementsByTagName ('script')
          , path    =   script && script [script.length - 2].src
          ; path    &&  (this.get$.PATH.ionify = path.replace (/(.+)\/.+$/, "$1/ions/"))
      },

  getScript:
    function getScript (ion)
      { var  web = getScript.with   || (getScript == this.getScript ? this : null)
          , code = String (ion.code || '')
          ,  url = String (ion.at   || '')
          , get$ = web.get$
          ; get$.URL.with = get$
          ;

        if (!url && !code)
          return ~{warn: [web.errors.noScript, JSON.stringify (ion)]}

        var script = document.createElement ('script')
          ; script.type  = 'text/javascript'
          ; ion   .then && (script.onload = ion.then)
          ; script.async =  get$.ASYNC [ion.in]
          ;

        if (url)
          { url.match (get$.ID) && (script.id = url)
          ; url[url.length-1] == '/' && (url += get$.PATH.ions)
          ; script.src =  url = url.match   (get$.HTTP)
                       ?  url : url.replace (get$.ID, get$.URL)
          }

      ; document.head.appendChild (script)
      ~{debug:["getting", url, "..."]}
      },

  getInfo:
    [" does ~{get: ['ion.id' || './script.js'], then: ['actions']} "
    ," will update get$.PATH with new @domains & their paths.      "
    ," will handle URLs with existing file extension(s).           "
    ," will move got() & .then code to ~get.then                   "
    ," will sense ion ids vs. script paths: ./script.js            "
    ," will use .then() as ~on.do where ~{on:''|[], do:ion, after:all|any|each}     "
    ," will set .then() to ~on.do.after                            "
    ," will set ~get.then to do ~on:ion.id & script.onload; 1st called cancels 2nd. "
    ," ... "
    ],
  get$:
    { ASYNC:
           {  parallel: true
           ,  sequence: false
           ,     order: false
           ,        '': true
           ,      null: true
           , undefined: true
           }
    ,    ID: (/(?:(.*)@(\D*)|(\D*))(\d+.*)*/)    // matches ((api)@(space.) | (api.)) version#
    ,  HTTP: (/^\w+:\/\//)                       // matches URL protocols
    ,  PATH:
           { ionify    : "//cdn.jsdelivr.net/gh/ionify/ionify@public/ions/"
           , ions      : 'ions'
           , undefined : "./"
           , null      : "./"
           , ''        : "./"
           }
    ,  NAME: (/(.*)\.$/)    // matches (api). | (host).
    ,  TYPE: ".js"
    ,   EXT: (/(\.\D*$)/)   // matches file extensions
    ,   URL:
          function getURL (match, name, space, file, version, offset, string)
            {   var get$  = getURL.with
            ,       ext   = get$.EXT.exec (match)
            ;       name  = name  && ( name.match (get$.NAME) || [, name])[1]
            ;       space = space && (space.match (get$.NAME) || [,space])[1]
            ;       file  = file  && ( file.match (get$.NAME) || [, file])[1]

            ;   return get$.PATH [space] + (name || file || '') + (version || '')
                                         + /*(ext ? ext [1] :*/(get$.TYPE)
            }
    },
 "get info":
    [ " and: create & invoke a ~do with it"
    , " get: ensure it's an array         "
    , "  in: ensure it's an expected value"
    , "then: create beacon  function      "
    , " get: create scripts with in & then"
    , " get: attach scripts to webi       "
    ]
,"get then"         :"get"
,"get then after"   :"get"
,"get in"           :"get"
,"get in then"      :"get"
,"get in then after":"get"
,"get and"          :"get"
, get:
    function get ()
      { var ion  =  this
        ion.and && ~{do:ion.and}

        var ions =  Array.isArray (ion.get) ? ion.get : (ion.get = [ion.get])
          , todo =  ion.then

        if (todo)
          { var on  = {on:ions, do:todo, after:ion.after}
            get.our &&
            get.our.ionified [typeof todo]
              || (+{find:todo, in:ion}, todo = on.do = ion [todo])
          ~ on
            todo = on.do
          }

        for ( var web  = get.with
            ,     last = ions.length
            ,     next = -1
            ;  ++ next < last
            ; web.getScript ({at:ions[next], in:ion.in, then:todo})
            );
      }
}
;