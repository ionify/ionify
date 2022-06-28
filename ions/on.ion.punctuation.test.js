;
~
{ re:
    { id:  'on.ion.punctuation.test@ionify'
    , of: ['tests','core','conduit','punctuation']
    , as: ['examination']
    , by: ['mike.👨🏾‍💻.lee']
    , on: -8.20171111
    , to: -7.20220627
    , at: -0.03
    , is: "ion punctuation examination"
    , go:
        { help: 'https://github.com/ionify/ionify/issues'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , code: 'https://github.com/ionify/avout/blob/public/api/intro/ion.punctuation.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/on.ion.punctuation.test.js'
        , deal: 'https://deal.ionify.net/'
        , join: 'https://github.com/ionify/about/tree/public/team'
        , seek: 'https://api.ionify.net/'
        },
      we:
        [" must test all possible punctuation operators + 17 @ http://about.ionify.net "
        ," will create a test generator that clearly states ion-compatibility for each "
        ," were ... "
        ," must ... "
        ," will ... "
        ," want ... "
        ," like ... "
        ]
    },

  do:function
  test_ion_punctuation ()
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