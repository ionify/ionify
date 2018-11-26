;
~
{ re:
    { id:  'web@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181126
    , is:  -0.1
    , it:/ provides ionify: invoked object notation implemented for your web.      /
    , we:
        [/ will add tests for web@ionify & its actions	                           /
        ," will apply current ion's domain to all ionid@ references.               "
        ,/ will ~get.then: then = ~on:ion & script.onload; 1st called cancels 2nd. /
        ,/ will ~get.then: delete script.onload after calling for memory perf?     /
        ,/ will make ~debug:{member:true|false} = ion member to debug.             /
        ,/ will make ~ion do ~re = re.toString if api.docs config is set true.     /
        ," like that ~/0 . 0/ = ionify - onload & this.test ('0 . 0') confirms.    "
        ,/ wish ... /
        ,/ want ... /
        ]
    }

, on:
    [ ['get', 'in', 'then', 'after']
    , ['get'      , 'then', 'after']
    , ['get', 'in', 'then']
    , ['get'      , 'then']
    , ['get', 'in']
    ,  'get'
    ]

, valueOf
:   function hip ()
      { this.ionify ()
      }

, ionify
:   function ionifyWeb ()
      { Object.prototype.valueOf.ionified = this
      ; var  web                          = this
      ; web. get$.URL           .ion      = web.get$
      ; web. get                .ion
      = web["get then after"   ].ion
      = web["get in then after"].ion
      = web
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
      {~/todo: use ajile.test.inlineLoader to load inline code!/

        var  web = getScript.ion || (getScript == this.getScript ? this : null)
          , code = ion.code
          ,  url = ion.at
          , get$ = web.get$
          ; get$.URL.ion = get$
          ;

        if (!url && !code)
          return ~{warn: [web.errors.noScript, JSON.stringify (ion)]}

        var script = document.createElement ('script')
          ; ion.then               && (script.onload = ion.then)
          ; ion.at.match (get$.ID) && (script.id     = ion.at)
          ; script.type  = 'text/javascript'
          ; script.async =  web . asyncMode   [ion.in]
          ; script.src   =  url = url.match   (get$.HTTP)
                         ?  url : url.replace (get$.ID, get$.URL)
                         ;
        document.head.appendChild (script)
      ~ {debug: ["getting",url,"..."]}
      }

, asyncMode
:   {        '': true
    ,      null: true
    ,     order: false
    ,  sequence: false
    ,  parallel: true
    , undefined: true
    }

, getInfo
:   [" note: ~{get: 'ion.id' || './script.js'}                   "
    ,/ todo: Keep updating get$.PATH with @domains & their paths /
    ,/ todo: Handle URLs with existing file extension(s)         /
    ,/ todo: Move got() & .then code to ~get.then                /
    ," todo: Sense ion ids vs. script paths: ./script.js         "
    ,/ idea: Create ~method@ionify to define ~get & its context	 /
    ,/ todo: ... /
    ]
, get$
:   { HTTP: (/^\w+:\/\//)                       // matches URL protocols
    ,   ID: (/(?:(.*)@(\D*)|(\D*))(\d+.*)*/)    // matches ((api)@(host.) | (api.)) version#
    , NAME: (/(.*)\.$/)                         // matches  (api).        | (host).
    , PATH:
          { ionify    : "//ionify.glitch.me/ions/"
          , undefined : "./"
          , null      : "./"
          , ''        : "./"
          }
    , TYPE: ".js"
    ,  EXT: (/(\.\D*$)/)    // matches file extensions
    ,  URL:
        function getURL (match, name, space, file, version, offset, string)
          {   var get$  = getURL.ion
          ,       ext   = get$.EXT.exec (match)
          ;       name  = name  && ( name.match (get$.NAME) || [, name])[1]
          ;       space = space && (space.match (get$.NAME) || [,space])[1]
          ;       file  = file  && ( file.match (get$.NAME) || [, file])[1]

          ;   return get$.PATH [space] + (name || file) + (version || '')
                                       + /*(ext ? ext [1] :*/(get$.TYPE)
          }
    }
, get
:   function get (ion)
      { var web           = get.ion || (get.ion = get == this.get ? this : null)
          , get$          = web.get$
          , url           = ion.get
          , act           = ion.then
          , then          = ion.then
          , debug         = []
          ; get$.URL.ion  = get$
          ; get$.PATH           || (get$.PATH = this.path.ionify)
          ; Array.isArray (url) || (      url = [url])
          ; Array.isArray (act) || (      act = [act])
          ;

        for (var last=url.length, next=-1; ++next < last;)
          { function got ()
              {  var then = got.then
              ;  debug.push (["got ",got.path," doing ",then,"..."])
              ;  typeof then === 'string' ? ~ion[then] : ~then
              }
            then ? (got.then = then) : (got = void 0)
            web  .  getScript ({at:url[next], in:ion.in, then:got})
          }
      ~ {debug:debug}
      }

, "get then info"
:   [" note: ~{get: ['ion.id' || './script.js'], then: ['actions']} "
    ," todo: Move ~get's code here & update ~get to use this        "
    ,/ todo: Do ~on:ion.id; it should be faster than .onload	      /
    ]
, "get then"
: "get then after"
, "get then after"
:   function getThen (ion)
      { return getThen.ion ["get in then"] (ion)
      }

, "get in"
: "get in then after"
, "get in then"
: "get in then after"
, "get in then after"
:   function getInThen (ion)
      {/ todo: implement ~on.do              /
      //  get: Ensure it's an array          /
      //   in: Ensure it's an expected value /
      // then: Create beacon  function       /
      //  get: Create scripts with in & then /
      //  get: Attach scripts to webi        /

        var  web = getInThen.ion || (getInThen.ion = getInThen == this.getInThen ? this : null)
          , ions = Array.isArray (ion.get) ? ion.get : (ion.get = [ion.get])
          , last = ions.length
          , next = -1
          , then = ion.then && web.sense (ion)
          ;

        if (then)
            {~/todo: implement ~on.do to avoid this manual per-get sensor workaround/
            ; var get = {on:ions, after:'all'/*, do:then*/}
          //,     get = {after:ions, do:then}
            ; for (var i=-1, I=ions.length; ++i < I; get[ions[i]] = then){}
            }

        while (++next < last) web.getScript ({at:ions[next], in:ion.in, then:then})
      }

, sense
:   function sense (ion)
      {/ Create a function that does something  /
      // based on ~get.then.after & sensed ions /

        var   d0 = ion.then
          , ions = ion.get
          , last = ions.length
          , next = -1
          ,  got = {}
          ;
        while (++next < last) got [ions [next]] = false
          ;
        function afterAllIons (ion)
          { if  (afterAllIons.done) return
          ; var  id  = ion instanceof Event ? this.id : ion.re.id
          ; got [id] = true
console.log (`get: ${ions}\ngot: ${Object.keys (got)}`)
          ; for (id in got) if (!got[id]) return
          ; afterAllIons.done = true
          ~ {on:ions, no:afterAllIons}
          ~ d0
          }

        function afterAnyIon (ion)
          {
          ~ {on:ion.re.id, no:afterAnyIon}
          ; if (afterAnyIon.done)  return
          ;     afterAnyIon.done = true
          ~ d0
          }

        function afterEachIon (ion)
          { ion ? d0 : 0+
          / todo? remove duplicate d0 from script.onload /
          }

        return {   all: afterAllIons
               ,   any: afterAnyIon
               ,  each: afterEachIon
               }  [ion. after || 'all']
      }
}
;