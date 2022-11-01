;
~
{ re:
    { id:  'web@ionify'
    , im:  'web.im@ionify'
    , as: ['organization']
    , of: ['web']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20221031
    , at:  -0.048
    , is:  "ionify: invoked object notation implemented for your web"
    , we:
        [ "will set all ~get's ionid@ domains to the current ion's @domain."
        , "will set ~debug:{member:true|false} = ion member to debug.                "
        , "want to adopt ajile.test.inlineLoader to load inline code!                "
        , "want all ~get.then to delete script.onload after ~then for memory perf?   "

        , "like ~get to be the first ion sensor that queues ions for ~on sensing     "
        + "it enables getting ions like ions@ before sensors activate.               "

        , "must ... "
        , "want ... "
        , "like ... "
        ]
    },

  valueOf:function
  ionify ()
    { delete this.valueOf
      this.web ()
    },

  web :function
  web ()
    { var web             =  Object.prototype.valueOf.ionified  = this
      var host            = (Object.prototype.valueOf.with      = { }).host = web
      host.get            =  web.getScript
      web.get$.URL.with   = {its: web.get$}
      web.getScript.with  = {its: web}

    //web.watch     ()
      web.ready     ()
      web.locate    ()
      web.getScript ({at:'get@ionify'})
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
    { noDOM   : 'web@ionify needs the DOM: Document Object Module API'
    , noScript: 'No script url or code found in '
    },

  locateInfo:
    [" note: senses ionify's path for locating & loading its ions. "
    ,/ note: locates via most to least accurate techniques.        /
    ,' will: sense /ions/ path & only when unable apply hardcode.  '
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
    function getScript (action)
      { var  web = getScript.with.its //|| (getScript == this.getScript ? this : null)
          , code = String (action.code || '')
          ,  url = String (action.at   || '')
          , get$ = web.get$
        //; get$.URL.with.its = get$
          ;

        if (!url && !code)
          return ~{warn: [web.errors.noScript, JSON.stringify (action)]}

        var script = document.createElement ('script')
          ; script.type  = 'text/javascript'
          ; action.then && (script.onload = action.then)
          ; script.async =  get$.ASYNC [action.in]
          ;

        if (url)
          { url.match (get$.ID) && (script.id = url)
          ; url[url.length-1] == '/' && (url += get$.PATH.ions)
          ; script.src =  url = url.match   (get$.HTTP)
                       ?  url : url.replace (get$.ID, get$.URL)
          }

        document.head.appendChild (script)
      ~{debug:['getting', url, '...']}
    },

  getInfo:
    [" does ~{get: ['ion.id' || './script.js'], then: ['actions']} "
    ,' will update get$.PATH with new @domains & their paths.      '
    ,' will handle URLs with existing file extension(s).           '
    ,' will sense ion ids vs. script paths: ./script.js            '
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
           { ionify    : '//cdn.jsdelivr.net/gh/ionify/ionify@public/ions/'
           , ions      : 'ions'
           , undefined : './'
           , null      : './'
           , ''        : './'
           }
    ,  NAME: (/(.*)\.$/)    // matches (api). | (host).
    ,  TYPE: '.js'
    ,   EXT: (/(\.\D*$)/)   // matches file extensions
    ,   URL:
          function getURL (match, name, space, file, version, offset, string)
            {   var get$  = getURL.with.its
            ,       ext   = get$.EXT.exec (match)
            ;       name  = name  && ( name.match (get$.NAME) || [, name])[1]
            ;       space = space && (space.match (get$.NAME) || [,space])[1]
            ;       file  = file  && ( file.match (get$.NAME) || [, file])[1]

            ;   return get$.PATH [space] + (name || file || '') + (version || '')
                                         + /*(ext ? ext [1] :*/(get$.TYPE)
            }
    }
}
;