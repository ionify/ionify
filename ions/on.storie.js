;
~
{ re:
    { id:  'on.storie@ionify'
    , is:  'sensor'
    , by: ['mike.lee', 'team']
    , on:  -8.20161116
    , to:  -7.20201029
    , at:  +0.1
    , it:
        [" senses activated stories: string template or regular ion expressions like "
        ,"              ~/.../                                                       "
        ," currently logs storie content.                                            "
        ],
      we:
        [" will enable inline & referrable notes & todos via ion.methodInfo:[/.../]! "
        ," want to disable ion during storie evaluations to enable code stories!     "
        ," will ... "
        ," wish we could ~{on:/.../, as:'storie@ionify', $1:Function, $2:Function}   "
        ," wish we could ~{on:/.../, as: 'aesop@ionify', $1:Function, $2:Function}   "
      ]
    },

  on:
    RegExp,
    RegExp:
        function onStorie (ion)
          {~ {info:this.source}
             return this //true
          }
}
;