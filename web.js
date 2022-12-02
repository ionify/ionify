;
~
{ re:
    { id:  'web@ionify'
    , of: ['web','launch']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221202
    , at:  -0.056
    , do: {initialization:true, acquisition:true, transcription:true}
    , as:     {habitation:true,  connection:true}
    , is:
        [ "ionify: invoked object notation implemented for your web"
        , "an initialization@ of ionify web habitation@s"
        , "a      habitation@ with web-habitat connection@s & interactions"
        , "a      connection@ of ~get for web habitat acquisition@"
        , "get.ing ionify's ~get action@ specification@"
        , "get.ing & applying ionify's configuration@"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/web/web.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/web.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "NOTE .watch() is disabled because it hides critical script errors."

        , "WERE modeling re.as@ specification@s with version@s & re.of@ association@s"
        , "WERE modeling  initialization@ideas.js & ROLES-&-FLOWS@launch.js"
        , "WILL implement initialization@ideas.js & ROLES-&-FLOWS@launch.js"
        , "WANT to update .locate() per launch.js' habitation@ ajile-legacy discovery"
        , "WANT .get() batch & setting onload that invokes .then after all load"

        , "will set all ~get.s ionid@ domains to the current ion's @domain."
        , "want to adopt ajile.test.inlineLoader to load inline code!"
        , "want tiny: ~get.then delete script.onload post~then for memory perf?"

        , "must ... "
        , "want ... "
        , "like ... "

        , "like fast: document.createDocumentFragment() to batch add ions"
        ]
    },

  with:
    { our:
        { configuration:
            {}
        },
      the:
        { launch:
            {
            }
        },
      web:
        { dom:
            { document:document
            },
          api:
            { onerror       :onerror
          //, onload        :onload
          //, onabort       :onabort
          //, onhashchange  :onhashchange
          //, onoffline     :onoffline
          //, ononline      :ononline
          //, onstalled     :onstalled
          //, onsuspend     :onsuspend
          //, onstorage     :onstorage
            }
        },
    },

  valueOf :function
  ionify  ()
    { delete this.valueOf
      this.web ()
    },

  web :function
  web ()
    { var web           = this
      web.get$.URL.with = {its: web.get$}
      web.get     .with =
      web.script  .with =
      web.setup   .with =
      web.queue   .with = {its: web}
      Object.prototype.valueOf =web.setup

      web.queue   (this)
    //web.watch     ()
      web.ready     ()
      web.locate    ()
      web.script  ({at:'ions@ionify'})
      web.script  ({at: 'get@ionify'})
    },

  pending:
    [],
  queue :function
  queue (ion)
    { var web = queue.with.its
        ; web.pending.push (ion)
    },

  setup :function
  setup (ion)
    {//🙇🏾‍♂️ setup@web@ implementing launch per launch.js' ROLES & FLOWS 👨🏾‍💻/
      var web = setup.with.its
        , how = -4.200709
        ; ion ||
        ( ion = this);

      if(!ion.re || !ion.re.as) return how; else web.queue (ion)

      if( ion.re.as.configuration             && ion.relations )
        { web.with.our.configuration.relations = ion.relations
        }

      if( ion.re.as.acquisition &&  ion.get )
        { ion.get.via           =   web.get
        }

      if( ion.re.as.observation )
        { ion.pending = web.pending
        }

      return how
    },

  watch :function
  watch ()
    { onerror =function
      problem (message, uri, line, column, error)
          { var name  = error && error.name
          ,     stack = error && error.stack
          ;
          ~ {warn : [name, message, stack]}
          & {debug: [name, message, stack, uri, line, column, error]}
          ; return true
          }
    },

  ready :function
  ready ()
    {   var error = this.errors
    ;   if (typeof document == 'undefined') throw new Error (error.noDOM)
    ;   return true
    },

  errors:
    { noDOM   : 'web@ionify needs the DOM: Document Object Module API'
    , noScript: 'No script url or code found in '
    },

  locateInfo:
    [" note: senses ionify's path for locating & loading its ions. "
    ,/ note: locates via most to least accurate techniques.        /
    ,' will: sense /ions/ path & only when unable apply hardcode.  '
    ],
  locate :function
  locate ()
    { var script  =   document.currentScript
                  ?  [document.currentScript,,]
                  :   document.scripts
                  ||  document.head.getElementsByTagName ('script')
        , path    =   script && script [script.length - 2].src
        ; path    &&  (this.get$.PATH.ionify = path.replace (/(.+)\/.+$/, "$1/ions/"))
    },

  types:
    {       es:'script'
    ,       js:'script'
    ,undefined:'script'
    },

  get :function
  via (thing)
    { var web = via.with.its
        , as  = web.types [thing.as]

    /*delegate non-ecmascript type-specific ~get.s to own get.type@ ion
      actually, get.type@s can on:any,as:type,do to auto-acquire them*/

      web [as] (thing)
    },

  script :function
  script (action)
    { var     web = script.with.its //|| (script == this.script ? this : null)
        ,    code = String (action.code || '')
        ,     url = String (action.at   || '')
        ,    get$ = web.get$
        , warning = web.errors.noScript
        ;

      if (!url && !code)
        return {warn:warning} + {debug:[true, warning, action]}

      var SCRIPT        =  document.createElement ('script')
        ; SCRIPT.type   = 'text/javascript'
        ; action.then  && (SCRIPT.onload = action.then)
        ; SCRIPT.async  =  get$.ASYNC [action.in]
        ;

      if (url)
        { url.match (get$.ID) && (SCRIPT.id = url)
        ; url[url.length-1] == '/' && (url += get$.PATH.ions)
        ; SCRIPT.src  =  url = url.match   (get$.HTTP)
                      ?  url : url.replace (get$.ID, get$.URL)
        }

      var via       =   script.with
        , debug     =   via.the && via.the.tools && via.the.tools.debug
        , enabled   =   via.our && via.our.logging && via.our.logging.debug
        , debugging =  (debug && enabled) || (debug = Object, false)
        ; debugging &&  debug  ({debug:['getting', url, '...']})
        //WANT 🤔 to eliminate 🚫 doing 🔁 all👆🏾the👆🏾above 🔁 over 😓 & 😓 over

      document.head.appendChild (SCRIPT)
  },

  getInfo:
    [" does ~{get: ['ion.id@' || './script.js'], then:['actions']} "
    ,' will update get$.PATH with new @domains & their paths.      '
    ,' will handle URLs with existing file extension(s).           '
    ,' will sense ion ids vs. entity paths: ./entity.ext           '
    ,' will set ~get.then to do ~on:ion.id & script.onload; 1st called cancels 2nd. '
    ,' ... '
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
           { ionify   : '//cdn.jsdelivr.net/gh/ionify/ionify@public/ions/'
           , ions     : 'ions'
           , undefined: './'
           , null     : './'
           , ''       : './'
           }
    ,  NAME: (/(.*)\.$/)    // matches (api). | (host).
    ,  TYPE: '.js'
    ,   EXT: (/(\.\D*$)/)   // matches file extensions
    ,   URL:
          function getURL (match, name, space, file, version, offset, string)
            {   var get$  = getURL.with.its
                  , ext   = get$.EXT.exec (match)
                  , path  = get$.PATH
                  , NAME  = get$.NAME
                  ; name  = name  &&  ( name.match (NAME) || [, name])[1]
                  ; space = space &&  (space.match (NAME) || [,space])[1]
                  ; file  = file  &&  ( file.match (NAME) || [, file])[1]
                  ;(path  = path      [space])
                 ||(path  = get$.PATH [path ])
                  ; return  path  +   (name     ||  file  ||'')
                                  +   (version            ||'')
                                  + /*(ext      ?   ext[1] :*/(get$.TYPE)
            }
    }
}
;
