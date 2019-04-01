;
~
{ re:
    { id:  'on.action@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -7.20190330
    , is:  -0.1
    , it:
        [" ionifies functions; e.g. enabling ~go which does go()                       "
        ," provides access to the global object via ~function(){ return this }         "
        ]
    , we:
        [" will create or identify any existing function id; read ECMA-262 [] spec.    "
        ," need to fix ~[777].pop = ~[777].prototype.pop() = TypeError; this != [777]. "
        ," like to sense objects without their own method then create own method with  "
        +"    .ion=object that calls its inherited method with this=ion.               "
        ," like that ~Function + this.apply() can do interesting things like           "
        +"    recursively applying itself! Not sure when that'd be valuable but        "
        +"    interesting to explore 👨🏾‍💻🤓:                                            "
        +             Object.prototype.toString.call ([777].__proto__)
        ]
    }

, as:'sensor'
, on: Function
,     Function
:       function act (ion)
          {  ion || (ion = this)
          ;  var result = ion() //ion.call (ion.home)
          ~  {debug: ['~', ion.name || 'anonymous', '() : ', result]}
          ;  return result
          }
}
;