;
~
{ re:
    { id: 'documentation'
    , by: 'mike.lee'
    , on: -4.200709
    , to: -8.20181216
    , at: 'ions.iskitz.net'
    , is: -0.1
    , it:
        [" observes & presents live code documentation via these apis:     "
        +"   ~I: do documentation once; only the 1st time per ~I instance. "
        +"   ~i: do documentation every time an ~i instance is sensed.     "
        ]
    , we:
        [" plan to improve & expand this ion's behavior    "
        ," will rename this ion's file to documentation.js "
        ," will move this ion to ionified.net              "
        ]
    }

, on:'I'
,     I
:     function I (ion)
        { var message = ion.I
        ; if (message.presented) return
        ;     message.presented = true
        ~ {info:"I"+ String (message)}
        }

, on:'i'
,     i//gnore
:     function i (ion)
        { ~ {info:"i "+ String (ion.i)}
        }
}
;