;
~
{ re:
    { id:  'on.action@ionify'
    , as:  'sensor'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211207
    , at:  -0.1
    , is:
        [ 'ion, invoked object notation, interactions from your functions'
        , 'enabling more ions to have similar interaction interfaces'
        , 'enabling for example ~go which does go() with its domain space as its "this"'
        , 'accepting input via go.in & setting output via go.out'
        ],
      go:
        { plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.action.js'
        , team: 'https://github.com/ionify/about/tree/public/team'
        , deal: 'https://github.com/ionify/ionify/blob/public/LICENSE.txt'
        , more: 'https://api.ionify.net/'
        },
      we:
        [ 'will create or identify any existing function id; read ECMA-262 [] spec.    '
        , 'need to fix ~[777].pop = ~[777].prototype.pop() = TypeError; this != [777]. '
        , 'like to sense objects without their own method then create own method with  '
        + '   .ion=object that calls its inherited method with this=ion.               '
        , 'like that ~Function + this.apply() can do interesting things like           '
        + "   recursively applying itself! Not sure when that'd be valuable but        "
        + '   interesting to explore 👨🏾‍💻🤓:                                             '
        +             Object.prototype.toString.call ([777].__proto__)
        ]
    },

  on:
    Function,
    Function:function
        act (ion)
          {  ion || (ion = this)

              Object.prototype.valueOf.apply (ion)

              var our = act.our
                , id  = this.re.id
                , my  = our.space (id || '@')
                , got = ion.apply (my, ion.in || ion)
                , debugging = !! (our.logging && our.logging.debug)

              debugging
                ? our.debug ({debug: ['~', id || ion.name || 'anonymous', '() : ', got]})
                :           ~{debug: ['~', id || ion.name || 'anonymous', '() : ', got]}

              return (ion.out = got)
          }
}
;