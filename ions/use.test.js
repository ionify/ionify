;
/use.test@ionify activating.../

+
{ re:
    { id: "use.test.0.1@ionify"
    , is: "A suite of tests for ionify's +use actions"
    , by: "mike.lee@ionify"
    , at: "2017.07.11-07...2017.04.13-07"
    }
}

~ /test +{use:"thing", as:"alias", in:someObject}/
+ (say = {"🤓":"iamai", hellooo:7})
+ {use:"hello", as:"hellooo", in:say}

+ {hello:function
   hello (name)
     { name || (name = hello.to || "things")
     ~ {log: "+['~ . ~'] < use " + String (name) + "!"}
  }  }

+  say.hello
+  say.hellooo
+ (say.hellooo.to = "Everything") + say.hellooo
+  delete say

~ /test +{use:"thing", in:someObject}/
+ (game = {id:"wakatta.game@ionified"})
+ {use:"show", as:"show", in:game}   <-   /todo: update +use to handle "use in"/
~ {id:"wakatta.view@ionified", show:function show(){+{log:"わかった"}}}
+ game.show
+ delete game

~
[ /test +use error conditions/
, {use:[], as:[], in:{}}
, {use:"thing", as:"alias", in:"non-object"}
]


+
/use.test@ionify activated!/
;
