;
+ {0:0}
+
{  re:
    { id: "node@ionify.net"
    , is: "node-based implicit object notation invented for you"
    , by: {"Michael Lee": ["iskitz.net", "@iskitz"]}
    , at: "2007.09...2016.07.24-07"
    , in:
        [ "forest-hills.new-york.usa.earth"
        ,   "san-jose.california.usa.earth"
        ]
    },

  valueOf:
    function nionify ()
      {  var node        = this
      ;  node.check.node = node
      ;  node.get  .node = node
      ;  delete node.valueOf
      ;  node.check ()
      ;  node.get   ({get: "https://rawgit.com/ionify/ionify/public/ionify.js", got:node})
      },

  on: ["get", "log"],
  go: { get: "./ions.js"},

  check:
    function check ()
      {  var errors = check.node.errors
           , error  =
               (   (typeof require == "undefined") && errors.noRequire
               ||  (typeof console == "undefined") && errors.noConsole
               )
           ; if (error) throw error
           ; return true
      },

  get:
    function get (ion)
      {  var http           = get.node.http
          || (get.node.http = require ("http"))
           , path           = String (ion.get)
           , isLocal        = path.match (/^[\.\/\\]+/)
           , thing          = ""
           ;

         function go ()
           { +{log: path + "\n\n" + thing}
           ;  eval (thing)
           ; +ion.got
           }

         function remote (res)
           { res.on ("data", got)
           ; res.on ("end" , go)
           }

         function got (part)
           { thing += String (part)
           }

        isLocal
          ? require  (path, go)
          : http.get (path, remote)
          ;
      },

  log:
    function log (thing)
      {  thing = String (thing.log)
      ;  console.log (log.node.re.id + ": " + thing);
      },

  errors:
    { noConsole: new Error ("node@ionify.net needs the console() API")
    , noRequire: new Error ("node@ionify.net needs the require() API")
    }

} //+ionify.node

;