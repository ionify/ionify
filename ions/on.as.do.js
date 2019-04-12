;
~
{ re:
    { id:  'on.as.do@ionify.net'
    , by: ['mike.lee','team']
    , on:  -7.20190411
    , to:  -7.20190412
    , at:  -0.1
    , is: "ionify's type sensor"
    , it:
        [" enables sensing types via ~on.as"
        ]
    , we:
        [" were implementing ~on.as.do: saving sensors by type "
        ," will add typeChecker() as a sensor action "
        ," were... "
        ," must... "
        ," will... "
        ," want... "
        ," like... "
        ]
    }

, on:
    [['on', 'as', 'do']]

, "on as do"
:  function onType ()
     { var our              = onType.our
         ,     types        = our.types  ||
         ( our.types        = {}          )
         ,     typeMatcher  = our.typeMatcher          ||
         ( our.typeMatcher  = ( /\[object\s+(.*)\]/ )   )
         ,     typeChecker  = our.typeChecker          ||
         ( our.typeChecker  = Object.prototype.toString )
         ,     type         = types [this.as]
         ;

       function checkType ()
         { return  (type == typeChecker.call (this).match (typeRE) [1])
               || ~{error: `validate ${type} with its schema`}
         }

     //our.known [type] . add ({set:this.on, in:checkType})
     //our.sense [type] . add ({ on:this.on, do:this.do})
     }
}
;