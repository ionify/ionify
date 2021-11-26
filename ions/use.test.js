;
/use.test@ionify activating.../

+
{ re:
    { id:  'use.test.0.1@ionify'
    , of:  'tests'
    , as:  'test.0'
    , by: ['mike.lee', 'team']
    , on:  -7.20170413
    , to:  -8.20211126
    , at:  -0.1
    , is: "testing ionify's ~use actions"
    , we:
        [ "were..."
        , "must..."
        , "will..."
        , "need..."
        , "want..."
        , "hope..."
        , "like..."
        ]
    }
}

~ /test +{use:"thing", as:"alias", in:someObject}/
+ (say = {"🤓":"iamai", hello:'👋🏾', hellooo:7})
+ {use : "hello", as:"hellooo", in:say}

+ { hello:function
    hello (from)
      { hello == say.hellooo
          ? ~ {log: "✅ ~use named-thing          in object"}
          : ~ {log: "❌ ~use named-thing          in object"}

        hello == say.hellooo && say.hello == '👋🏾'
          ? ~ {log: "✅ ~use named-thing as alias in object preserves name  in object"}
          : ~ {log: "❌ ~use named-thing as alias in object preserves name  in object"}

        hello == say.hellooo && typeof say.hellooo != 'number'
          ? ~ {log: "✅ ~use named-thing as alias in object overrides alias in object"}
          : ~ {log: "❌ ~use named-thing as alias in object overrides alias in object"}
      }
  }
+  say.hellooo
+  delete say

~ /test +use error conditions.../

try
  {
  ~ {use: [], as:[], in:{}}
  ~ {log: "❌ ~use error: can't use 'as' with more than 1 'use'"}
  }
catch (err)
  {
  ~ {log: "✅ ~use error: "+ String (err.message)}
  }

try
  {
  ~ {use: 'thing', as:'alias', in:"non-object"}
  ~ {log: "❌ ~use error: can only use 'in' with objects"}
  }
catch (err)
  {
  ~ {log: "✅ ~use error: "+ String (err.message)}
  }


+
/use.test@ionify activated!/
;
