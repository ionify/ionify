;
~
{ re:
    { id:  'get@ionify'
    , is:  'sensor'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20201029
    , at:  -0.1
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
    function get ()
      { delete this.valueOf
      ~ this

        var g3t = this //get.with || (get.with = get == this.valueOf ? this : null)
          , onion       = g3t.ion
          ; onion.with  = g3t
          ; onion.ion   = Object.prototype.valueOf
          ; Object.prototype.valueOf      = g3t.ion
          ; Object.prototype.valueOf.ions = onion.ion.ions
      },

  ion:
    function ion ()
      { var get = ion.with || (ion.with = ion == this.ion ? this : null)
          ; this.re && ion.ion.call (this)
       // ; get.invoke.call (this)  // will invoke on.ion a second time!
          // todo: transform existing ion queue gets into own queues gets
          // todo: cleanup ion sensor chain
          // todo: resume operation
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

        ion.then && web.wait (ion) //: (ion.then = web.invoke)

        for
          ( var flow = ion.in
          ,     last = ions.length
          ,     next = -1
          ;  ++ next < last
          ;)
          { ion       = {re:{}}; flow &&
          ( ion.in    = flow  )
            ion.at    = ions [next]
            ion.then  = action.then || web.invoke
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
      }

, pack: {'undefined':0, null:0}
, path: {}
, next: []
, free: 0,

  keep:
    function keep (get)
      { var next      = this.next
          , used      = this.free + next.length

        this.path [get.re.go]
          =   this.free <= 0
          ?   next.push (get) - 1
          : ((next [++this.free, used] = get), used)

        var pack = get.pack
        !(pack in this.pack) && (this.pack [pack] = 0)
        this.pack [pack]++
      },

  find:
    function find (ion)
      { return !! this.next [this.path [ion.id]]
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

  invoke:
    function invoke (pack)
      { !pack && (pack = this.pack)

        for
          ( var get , gets=invoke.with, next=gets.next, ion
          ,     g=-1, G=next.length
          ;  ++ g  <  G;
          )
          { get = next [g]
            if (pack != get.pack) continue
            ion  = get.ion
            delete get.ion
            delete ion.valueOf
            gets.lose (get.re.go)
          ~ ion
          }

        delete gets.pack [pack]
        delete this.then
        delete this.get
      }
}
;