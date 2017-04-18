;
/method@ionify activating.../
+

{ re:
    { id: "method.0.1.2017.04.09-07@ionify"
    , is: "An ion for creating methods with their own contexts"
    , by: "mike.lee@ionify"
    , at: "2017.04.09-07...2016.11.16-08"

        ,
      stories:
        [ `note: usage:

              ~
              { method:
                  { name:  "the method's name within its host"
                  ,  for:  "ion id" || ion || object
                  ,  can: ["describe things", "it can do"]
                  ,   in: ["the method's input(s)"]
                  ,  out: ["the method's output(s)"]
                  ,  get: {"the method's": "own data; e.g. vars"}
                  ,   is: ion || Function
                  }
              }
          `

        , /note: This could simplify creating methods like +web.get/

        , /todo: namespace method id: ho.st.method.name@domain!/

        , /todo: ion.method = +method.is/

        , /todo: Inline + referrable notes + todos via ion.methodStories:[storie(s)]/

        , /todo: Enable ion.methods to define static method variables via method$/

        , /todo: ion.method: Auto-set .method$ members on ion while it evaluates/

        , /todo: Enhanced methods with static variables:/
                +
                { get:
                    { re  : {id:"...", todo:["..."]}
                    , var1: 9
                    , var2: {}
                    , do  : ["function1", "act1"]
                    , function1:function f1(){ f1.var1 + f1.var2 }
                    , act1:{log:"Convenient!"}
                    }
                }
        ] //stories
    }


    ,
  on: "method"


    ,
  method:
    { get:
        {data: 7},

      is:
        function ionMethod ()
          {  this.get.data
          }
    }

}

+
/method@ionify activated!/
;