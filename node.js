   ~   ~
+['0 . 0']+
     -

{ re:
    { id: 'node@ionify'
    , is: "invoked object notations interpreted for your node"
    , by:['mike.lee@iskitz', 'team@ionify']
    , at: '2018.04.27-07...2009.05-04'
    }

, debug
:   false
    
, on:
    [ ['get', 'then']
    ,  'get'
    ]

, host
:   true

, errors
:   { noConsole: "node@ionify needs the console() API"
    , noRequire: "node@ionify needs the require() API"
    }

, valueOf
:   function ionifyNode ()
      { var node        = this
      ; node.ready.ion  = node
      ; node.get  .ion  = node
      ; delete node.valueOf
      ; node.ready ()
      ; node.get   ({get:"./ions/on.object.js", then:node})
      }

, ready
:   function ready ()
      { var errors = ready.ion.errors
          , error  =
             (   (typeof require == "undefined") && errors.noRequire
             ||  (typeof console == "undefined") && errors.noConsole
             )
        if (error) throw new Error (error)
        return true
      }

, get
:  function get (ion)
      { var http          = get.ion.http
        || (get.ion.http  = require ("http"))
         , path           = String (ion.get)
         , isLocal        = path.match (/^[\.\/\\]+/)
         , data           = ""

        function from (response)
          { response.on ("data", got)
          ; response.on ("end" , then)
          }

        function got (part)
          { data += String (part)
          }

        function then ()
          {~{log: path + "\n\n" + String (data)}
          ; eval (data)
          ~ ion.then
          }

        isLocal
          ? require  (path, then)
          : http.get (path, from)
      }

, log
:   function log (thing)
      {  thing = String (thing.log)
      ;  console.log (log.ion.re.id + ": " + thing)
      }
}
;