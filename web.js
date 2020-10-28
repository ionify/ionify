;
~
{ re:
    { go:   document.currentScript && document.currentScript.src
    , id:  'web@ionify'
    , is:  'environment'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20201028
    , at:  -0.1
    , it: "ionify: invoked object notation implemented for your web"
    , we:
        [" were setting ~get as the first ion sensor that queues ions for ~on sensing"
        +" to enable getting ions like ions@ before sensors activate.               "
        ," will add tests for web@ionify & its actions	                             "
        ," will set all ~get actions' ionid@ domains to the current ion's.           "
        ," will set ~debug:{member:true|false} = ion member to debug.                "
        ," want to adopt ajile.test.inlineLoader to load inline code!                "
        ," want all ~get.then to delete script.onload after ~then for memory perf?   "
        ," were ... "
        ," must ... "
        ," want ... "
        ," like ... "
        ,` PLAN:

            hip: host, gets
            get:       gets, do, link.share, log, error, errors,     , on.ions, ions: re.id, ?
            hop:       gets, do, link.share, log, error, errors, host, on.ions, ions, re.id, ...

          HOW.GET:

            host: valueOf.ion:queue, getScript
            gets: valueOf          , valueOf.ion:gets+...+host+on.ions+ions@+ions
            host: do:get:on.ions,ions@,ions

          HOW:


        `
        ]
    },

  on:
    [ ['get', 'in', 'then', 'after']
    , ['get'      , 'then', 'after']
    , ['get', 'in', 'then']
    , ['get'      , 'then']
    , ['get', 'in']
    , ['get']
    ],

  valueOf:
    function web    ()
      { this.ionify ()
      },

  ionify:
    function ionify ()
      { var web   = ionify.with || (ionify.with = ionify == this.ionify ? this : null)
          , gets  = web.gets
          ; gets.got.with = gets.invoke.with = web.gets

     // web.watch   ()
        web.ready   ()
        web.locate  ()
        web.get
          ({get:[ 'gets@ionify',  're.id@ionify', 'find.link.share@ionify'
                ,   'do@ionify', 'on.ion@ionify'
                ]
           })
     // web.get     ({get:'on.ion@ionify'})

        Object.prototype.valueOf          = this.gets.got
        Object.prototype.valueOf.ions     = this.gets
        Object.prototype.valueOf.ionified = this
      },

  watch:
    function watch ()
      { onerror =
          function onUncaughtError (message, url, line, column, error)
           {  ~{warn : [message, error && error.stack]}
           ;  ~{debug: [message, 'errorstack', url, line, column, error]}
           ;   return true
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
    ," will: sense /ions/ path & only when unable, apply hardcode. "
    ],
  locate:
    function locate ()
      { var script  =(  document.currentScript && [document.currentScript])
                    ||  document.scripts
                    ||  document.head.getElementsByTagName ('script')
          , path    =   script && script [script.length - 1].src
          ; path    &&  (this.get$.PATH.ionify = path.replace (/(.+)\/.+$/, '$1/ions/'))
      },

  getScript:
    function getScript (ion)
      { var  web = getScript.with
         ||       (getScript.with = getScript == this.getScript ? this : null)
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
          ; script.src =  url = url.match   (get$.HTTP)
                       ?  url : url.replace (get$.ID, get$.URL)
          }

        document.head.appendChild (script) && ~{debug:["getting", url, "..."]}
        return url
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
            ||             (getURL.with = getURL == this.getURL ? this : null)
            ,       ext   = get$.EXT.exec (match)
            ;       name  = name  && ( name.match (get$.NAME) || [, name])[1]
            ;       space = space && (space.match (get$.NAME) || [,space])[1]
            ;       file  = file  && ( file.match (get$.NAME) || [, file])[1]

            ;   return get$.PATH [space] + (name || file || '') + (version || '')
                                         + /*(ext ? ext [1] :*/(get$.TYPE)
            }
    },
 "get then info":
    ["  get: Ensure it's an array          "
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
, get:
    function get (action)
      { var web  = get.with || (get.with = get == this.get ? this: null)
          , ion  = action   || (action = this)
          , ions = Array.isArray (ion.get) ? ion.get : (ion.get = [ion.get])
          , pack = ion.pack = String (ions) + Math.random()

        ion.then ? web.wait (ion) : (ion.then = web.gets.invoke)

        for
          ( var flow = ion.in
          ,     last = ions.length
          ,     next = -1
          ;  ++ next < last
          ;)
          { ion       = {re:{}}; flow &&
          ( ion.in    = flow  )
            ion.at    = ions [next]
            ion.then  = action.then
            ion.pack  = pack
            ion.re.id = ion.at
            ion.re.go = web.getScript (ion)
            web.gets.keep (ion)
          }
      },

  wait:
    function then (get)
      { var todo  =  get.then
          , wait  = {on:get.get, do:todo, after:get.after}
          ; todo  = (!then.our || then.our.ionified [typeof todo])
                  ?    todo
                  :   ~{find:todo, in:get} && get [todo]
        todo && (wait.do = get.then = todo)
      ~ wait
      },

  vet:
    function vet (get)
      {
      ~ [` On each ion invocation,

            + we can set its re.go to its url

            via its re.go == document.currentScript, we can:

            + say the ion's actual id & its request & sensor id are mismatched
            + map the ion's script to its actual id vs its request id
            + fix the ion's sensor if its actual id vs its request id differ
            + fix the ion's script load event to avoid duplicating its sensor
       `]
      },

  got:
    function got ()
      { if (!this.re) return

        var script  = document.currentScript
          , gets    = got.with
          , get     = gets.next [ gets.path [ this.re.go = script.src ]]
          , pack    = gets.pack [ get.pack  ]--
          ; get.ion = this

        console.log (`pack: ${get.pack}: ${pack}: 👋🏾 ${get.re.id}`)
        !pack ? ~get.then : (get.then == script.onload) && (script.onload = null)
      },

  gets:
    { re:
        { id: 'web.gets@ionify'
        , by: 'mike.lee'
        , on: -7.20201027
        , to: -7.20201027
        , at: -0.1
        , it:
            [ "keeps a queue of get requests"
            , "enables request's direct-lookup by path"
            , "enables verifying get requests by path & ion inspection"
            , "enables keep'ing & lose'ing get requests"
            , "reuses  its queue's unused spots vs. continuously growing it"
            ],
          we:
            [ "were implementing .invoke for hip ions invoked before ionify"
            ]
        }
    , pack: {'undefined':0, null:0}
    , path: {}
    , next: []
    , free: 0
    , keep:
        function keep (get)
          { var next = this.next
              , used = this.free + next.length

            this.path [get.re.go]
              =   this.free <= 0
              ?   next.push (get) - 1
              : ((next [++this.free, used] = get), used)

            var pack = get.pack
            !(pack in this.pack) && (this.pack [pack] = 0)
            this.pack [pack]++
          },
      find:
        function find (get)
          { return this.next [this.path [get.path]]
          },
      lose:
        function lose (path)
          { var next    = this.next
              , paths   = this.path
              , spot    = paths [path]
              , lost    = next  [spot]
            next [spot] = null
            delete paths [path]
            next.free = (--this.free + next.length) == 0

            var pack = lost.pack
            !(pack in this.pack) && (this.pack [pack] = 0)
            this.pack [pack]--

            return lost
          },
      got:
        function got ()
          { if (!this.re) return

            var script  = document.currentScript
              , gets    = got.with
              , get     = gets.next [ gets.path [ this.re.go = script.src ]]
              , pack    = gets.pack [ get.pack  ]--
              ; get.ion = this

            console.log (`pack: ${get.pack}: ${pack}: 👋🏾 ${get.re.id}`)
            !pack ? ~get.then : (get.then == script.onload) && (script.onload = null)
          },
      invoke:
        function invoke (pack)
          { if ( invoke == this.onload ) return // hip.on.ion.js.onload

            var ion, get, gets = invoke.with

            get   =  gets.find ({path:this.re.go, id:this.re.id})
          ! pack && (pack = this.pack || get.pack)

            // for
            //   ( var next= gets.next
            //   ,     g=-1, G=next.length
            //   ;  ++ g  <  G;
            //   )
            //   { get = next [g]
            //     if (pack != get.pack) continue
                ion  = get.ion
                delete get.ion
                delete ion.valueOf
                gets.lose (get.re.go)
              ~ ion
              // }

            if (gets.pack [pack]) return

            delete gets.pack [pack]
            delete this.then
            delete this.get
          }
    }
}
;