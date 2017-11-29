;
~
{ re:
    { id: "punctuation.test.0.1@ionify"
    , is: "A suite of tests for ion punctuation"
    , by: "mike.lee@ionify"
    , at: "2017.11.29-08...2017.11.11-08"
    }

, do:
    function punctuationTests ()
      { var typeOf  = Object.prototype.toString
          , undo    = { Array : Array .prototype.valueOf
                      , Object: Object.prototype.valueOf
                      , RegExp: RegExp.prototype.valueOf
                      }

          RegExp.prototype.valueOf
        = Array .prototype.valueOf
        = Object.prototype.valueOf
        = function ion ()
            { !ion.count && (ion.count = 1)
            ; console.log ("ion", ion.count++, typeOf.apply (this))
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

        , [] == []           // nope
        , {} == {}           // nope
        , / /==/ /           // nope

        , [] != []           // nope
        , {} != {}           // nope
        , / /!=/ /           // nope

        , [] == {}           // nope
        , [] == / /          // nope
        , {} == / /          // nope
        , {} == Function     // nope

        , {} != / /          // nope
        , [] != {}           // nope
        , [] != / /          // nope
        ]

        Array .prototype.valueOf = undo.Array
        Object.prototype.valueOf = undo.Object
        RegExp.prototype.valueOf = undo.RegExp
      }
}
;