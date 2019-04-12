;

~
{ re:
    { id:  're.as@ionify'
    , by: ['mike.lee','team']
    , on:  -7.20180411
    , to:  -7.20190412
    , at:  -0.1
    , is:  "ionify's type definition action"
    , it:
        [" enables defining types that can be referenced using ~as"
        ]
    }

, on:
    [['re', 'as']]

, "re as"
:  function newType ()
     { var our           = newType.our
         , types         = our.types ||
         ( our.types     = {}         )
         , idMatcher     =
         ( our.idMatcher = (/(.*)@/)  )
         , type          = this.re.id.match (idMatcher) [1]
         ; types [type]  = this.re.as
     }
}

;