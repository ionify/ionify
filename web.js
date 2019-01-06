;
~
{ re:
    { id:  'web@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20190105
    , is:  -0.1
    , it:" implements ionify: invoked object notation implemented for your web.      "
    , we:
        [" will add tests for web@ionify & its actions	                             "
        ," will set all ~get actions' ionid@ domains to the current ion's.           "
        ," will set ~debug:{member:true|false} = ion member to debug.                "
        ," want to adopt ajile.test.inlineLoader to load inline code!                "
        ," want all ~get.then to delete script.onload after ~then for memory perf?   "
        ," like ~get to be the first ion sensor that queues ions for ~on sensing     "
        +" it enables getting ions like ions@ before sensors activate.               "
        ," wish ... "
        ," want ... "
        ]
    }

, on:
    [ ['get', 'in', 'then', 'after']
    , ['get'      , 'then', 'after']
    , ['get', 'in', 'then']
    , ['get'      , 'then']
    , ['get', 'in']
    , ['get']
    ]

, valueOf
:   function hip    ()
      { this.ionify ()
      }

, ionify
:   function ionifyWeb ()
      { Object.prototype.valueOf.ionified = this
      ; var web        = this
      ; web.get.ion    = web
    //; web.watch     ()
      ; web.ready     ()
      ; web.locate    ()
      ; web.getScript ({at:'on.object@ionify'})
      }

, watch
:   function watch ()
      { onerror =
          function onUncaughtError (message, url, line, column, error)
           { ~{warn : [message, error && error.stack]}
           ; ~{debug: [message, 'errorstack', url, line, column, error]}
           ;  return true
           }
      }

, ready
:   function ready ()
      {   var error = this.errors
      ;   if (typeof document == 'undefined') throw new Error (error.noDOM)
      ;   return true
      }

, errors
:   { noDOM   : "web@ionify needs the DOM: Document Object Module API"
    , noScript: "No script url or code found in "
    }

, locateInfo
:   [" note: senses ionify's path for locating & loading its ions. "
    ,/ note: locates via most to least accurate techniques.        /
    ," will: sense /ions/ path & only when unable apply hardcode.  "
    ]
, locate
:   function locate ()
      { var script  =[  document.currentScript ,,]
                    ||  document.scripts
                    ||  document.head.getElementsByTagName ('script')
          , path    =   script && script [script.length - 2].src
          ; path    &&  (this.get$.PATH.ionify = path.replace (/(.+)\/.+$/, "$1/ions/"))
      }

, getScript
:   function getScript (ion)
      { var  web = getScript.ion    || (getScript == this.getScript ? this : null)
          , code = String (ion.code || '')
          ,  url = String (ion.at   || '')
          , get$ = web.get$
          ; get$.URL.ion = get$
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
          ; script.src =  url = url.match   (get$.HTTP)
                       ?  url : url.replace (get$.ID, get$.URL)
          }

      ; document.head.appendChild (script)
      ~{debug:["getting", url, "..."]}
      }

, getInfo
:   [" does ~{get: ['ion.id' || './script.js'], then: ['actions']} "
    ," will update get$.PATH with new @domains & their paths.      "
    ," will handle URLs with existing file extension(s).           "
    ," will move got() & .then code to ~get.then                   "
    ," will sense ion ids vs. script paths: ./script.js            "
    ," will use .then() as ~on.do where ~{on:''|[], do:ion, after:all|any|each}     "
    ," will set .then() to ~on.do.after                            "
    ," will set ~get.then to do ~on:ion.id & script.onload; 1st called cancels 2nd. "
    ," ... "
    ]
, get$
:   { ASYNC:
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
           , undefined : "./"
           , null      : "./"
           , ''        : "./"
           }
    ,  NAME: (/(.*)\.$/)                         // matches  (api). | (host).
    ,  TYPE: ".js"
    ,   EXT: (/(\.\D*$)/)    // matches file extensions
    ,   URL:
          function getURL (match, name, space, file, version, offset, string)
            {   var get$  = getURL.ion
            ,       ext   = get$.EXT.exec (match)
            ;       name  = name  && ( name.match (get$.NAME) || [, name])[1]
            ;       space = space && (space.match (get$.NAME) || [,space])[1]
            ;       file  = file  && ( file.match (get$.NAME) || [, file])[1]

            ;   return get$.PATH [space] + (name || file || '') + (version || '')
                                         + /*(ext ? ext [1] :*/(get$.TYPE)
            }
    }
,"get then info"
:   ["  get: Ensure it's an array          "
    ,"   in: Ensure it's an expected value "
    ," then: Create beacon  function       "
    ,"  get: Create scripts with in & then "
    ,"  get: Attach scripts to webi        "
    ]
,"get then"         :"get"
,"get then after"   :"get"
,"get in"           :"get"
,"get in then"      :"get"
,"get in then after":"get"
, get
:   function get (ion)
      { var  web = get.ion
          , ions = Array.isArray (ion.get) ? ion.get : (ion.get = [ion.get])
          , last = ions.length
          , next = -1
          , todo = ion.then && web.then (ion)
          ;

        if (todo)
            {~/todo: implement ~on.do to avoid this manual per-get sensor workaround/
            ; var on = {on:ions, after:'all'/*, do:todo*/}
          //,     on = {after:ions, do:todo}
            ; for (var i = -1, I = ions.length; ++i < I; on[ions[i]] = todo){}
            }

        while (++next < last) web.getScript ({at: ions[next], in: ion.in, then: todo})
      }

, thenInfo
:   [" Create a function that does something  "
    +" based on ~get.then.after & sensed ions "
    ]
, then
:   function then (ion)
      { var ions = ion.get
          , last = ions.length
          ,  got = {}
          , todo = then.our.ionified [typeof ion.then]
                 ?   ion.then
                 : ~{find: ion.then, in: ion} && ion [ion.then]
                 ;
        function afterAllIons (ion)
          { if  (afterAllIons.done) return
          ; var  id  = ion instanceof Event ? this.id : ion.re.id
          ; got [id] = true
          ~ {debug: `\nget: ${ions}\ngot: ${Object.keys (got)}`}
          ; for (var next=-1; ++next < last;) if (! got [ions [next]]) return
          ; afterAllIons.done = true
          ~ {on:ions, no:afterAllIons}
          ~ todo
          }

        function afterAnyIon (ion)
          {
          ~ {on:ion.re.id, no:afterAnyIon}
          ; if (afterAnyIon.done)  return
          ;     afterAnyIon.done = true
          ~ todo
          }

        function afterEachIon (ion)
          { ion && ~todo <= / todo? remove duplicate todo from script.onload /
          }

        return {   all: afterAllIons
               ,   any: afterAnyIon
               ,  each: afterEachIon
               }  [ion. after || 'all']
      }
}
;