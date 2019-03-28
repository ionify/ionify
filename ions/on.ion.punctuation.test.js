;
~
{ re:
    { id: 'on.ion.punctuation.test@ionify'
    , is: "A suite of tests for ion punctuation"
    , by: 'mike.lee'
    , on: -8.20171111
    , to: -7.20190328
    , at: -0.1
    , we:
        [" must test all possible punctuation operators + 17 @ http://about.ionify.net "
        ," will create a test generator that clearly states ion-compatibility for each "
        ," were ... "
        ," must ... "
        ," will ... "
        ," want ... "
        ," like ... "
        ]
    }

, do:
    function punctuationTests ()
      { var typeOf  = Object.prototype.toString
          , type    = (/\[object\s*(.+)\]/)
          , undo    = { Array : Array .prototype.valueOf
                      , Object: Object.prototype.valueOf
                      , RegExp: RegExp.prototype.valueOf
                      }

        ; RegExp.prototype.valueOf
        = Array .prototype.valueOf
        = Object.prototype.valueOf
        = function ion ()
            { console.log ("✅ ion == & != punctuation:", typeOf.apply (this) .match (type)[1])
            ; return 7
            }

        ~
        [ [] == 777
        , [] == true
        , [] == "string"
        , [] != 767
        , [] != true
        , [] != "string"

        , / /== 777
        , / /== true
        , / /== "string"
        , / /!= 767
        , / /!= true
        , / /!="string"

        , {} == 777
        , {} == true
        , {} == "string"
        , {} != 767
        , {} != false
        , {} != "string"

        , [] == []           // nope; only checks object references
        , {} == {}           // nope; only checks object references
        , / /==/ /           // nope; only checks object references

        , [] != []           // nope; only checks object references
        , {} != {}           // nope; only checks object references
        , / /!=/ /           // nope; only checks object references

        , [] == {}           // nope; only checks object references
        , [] == / /          // nope; only checks object references
        , {} == / /          // nope; only checks object references
        , {} == Function     // nope; only checks object references

        , {} != / /          // nope; only checks object references
        , [] != {}           // nope; only checks object references
        , [] != / /          // nope; only checks object references
        ]

        Array .prototype.valueOf = undo.Array
        Object.prototype.valueOf = undo.Object
        RegExp.prototype.valueOf = undo.RegExp
      }
}
;