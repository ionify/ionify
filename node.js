   ~   ~
+['0 . 0']+
     -

{ re:
    { id: "node@ionify"
    , is: "implicit object notations invented for your node"
    , by:["mike.lee@iskitz", "team@ionify"]
    , at: "2017.07.17-07...2007.09-04"
    }
    ,
  debug
    : false
    ,
  on:
    [ ["get", "then"]
    ,  "get"
    ]
    ,
  host
    : true
    ,
  errors:
    { noConsole: "node@ionify needs the console() API"
    , noRequire: "node@ionify needs the require() API"
    }
    ,
  valueOf:
    function ionifyNode ()
      { var node        = this
        node.check.ion  = node
        node.get  .ion  = node
        delete node.valueOf
        node.check ()
        node.get   ({get:"./ions/on.object.js", then:node})
      }
      ,
  check:
    function check ()
      { var errors = check.ion.errors
          , error  =
             (   (typeof require == "undefined") && errors.noRequire
             ||  (typeof console == "undefined") && errors.noConsole
             )
        if (error) throw new Error (error)
        return true
      }
      ,
  get:
    function get (ion)
      { var http          = get.ion.http
        || (get.ion.http  = require ("http"))
         , path           = String (ion.get)
         , isLocal        = path.match (/^[\.\/\\]+/)
         , thing          = ""

        function then ()
          {+{log: path + "\n\n" + String (thing)}
            eval (thing)
          ~ ion.then
          }

        function remote (res)
          { res.on ("data", got)
          ; res.on ("end" , then)
          }

        function got (part)
          { thing += String (part)
          }

        isLocal
          ? require  (path, then)
          : http.get (path, remote)
      }
      ,
  log:
    function log (thing)
      {  thing = String (thing.log)
      ;  console.log (log.ion.re.id + ": " + thing);
      }
}
;