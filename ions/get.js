;
~
{ re:
    { id:  'get@ionify'
    , is:  "implementing ionify's ~get"
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211214
    , at:  -0.047
    , we:
        [ 'were adding tests for web@ionify & its actions	                           '
        , "will set all ~get actions' ionid@ domains to the current ion's.           "
        , 'will set ~debug:{member:true|false} = ion member to debug.                '

        , 'like ~get to be the first ion sensor that queues ions for ~on sensing     '
        + 'it enables getting ions like ions@ before sensors activate.               '

        , 'were ... '
        , 'must ... '
        , 'want ... '
        , 'like ... '
        ]
    },

  on:
    [ ['get', 'in', 'then', 'after']
    , ['get'      , 'then', 'after']
    , ['get', 'in', 'then']
    , ['get'      , 'then']
    , ['get', 'in'  ]
    , ['get', 'and' ]
    , ['get']
    ],

  with:
    { my:
        { ORDER:
            { ''        : 'parallel'
            , null      : 'parallel'
            , order     : 'order'
            , sequence  : 'order'
            , undefined : 'parallel'
            }
        }
    },

  valueOf:function
  ionify ()
    { var w1th  = Object.prototype.valueOf.with
      this.host = w1th.host
      delete      w1th.host
      delete      this.valueOf

      var  id     =  this.re.id
        , hid     =  this.host.re.id
        , pending = (w1th.ion = {pending:[]}).pending
        ; pending.push  ( this.host)
        ; pending [hid] = pending.length - 1
        ; pending.push  ( this)
        ; pending [id]  = pending.length - 1

      var ions
        =   [      'on.ion@ionify', 'find.link.share@ionify',   'next.id@ionify'
            ,          'id@ionify',              'no@ionify',  'on.error@ionify'
            ,   'on.errors@ionify',          'logger@ionify', /*'on.aeon@ionify'
            ,          'do@ionify',         'on.ions@ionify', 'on.action@ionify'
            ,   'on.storie@ionify',             'use@ionify',      'ions@ionify'
            , 'on.ionified@ionify'
          //,       'on.do@ionify'
            ,        'ions'         */
            ]

      var get       = this.get
        ; get.with  = {own:this, my:this.with.my}

      get ({get:ions, in:'order'})
    },

  getInfo:
    [" does ~{get: ['ion.id' || './script.js'], then: ['actions']} "
    ,' will update get$.PATH with new @domains & their paths.      '
    ,' will move got() & .then code to ~get.then                   '
    ,' will sense ion ids vs. script paths: ./script.js            '
    ," will use .then() as ~on.do where ~{on:''|[], do:ion, after:all|any|each}     "
    ,' will set .then() to ~on.do.after                            '
    ,' will set ~get.then to do ~on:ion.id & script.onload; 1st called cancels 2nd. '
    ,' ... '
    ],
 'get info':
    [ ' and: create & invoke a ~do with it'
    , " get: ensure it's an array         "
    , "  in: ensure it's an expected value"
    , 'then: create beacon  function      '
    , ' get: create scripts with in & then'
    , ' get: attach scripts to webi       '
    ]
,'get then'         :'get'
,'get then after'   :'get'
,'get in'           :'get'
,'get in then'      :'get'
,'get in then after':'get'
,'get and'          :'get'
, get:
    function get (action)
      { var w1th    = get.with
          , ion     = w1th.all && w1th.all.ionified
          , own     = w1th.own
          , host    = own.host
          , ORDER   = own.with.my.ORDER
          , resolve = own.resolve

        action      ||  (action = this)
        action.and  && ~{do:action.and}
        Array.isArray (action.get) || (action.get = [action.get])

        var todo  = action.then
          , ions  = action.get

        if( todo )
          { var on  = {on:ions, do:todo, after:action.after}
            ion &&    ( ion [typeof todo]
                      || (+{find:todo, in:action}, todo = on.do = action [todo])
                      )
          ~ on
            todo = on.do
          }

        for ( var last = ions.length
            ,     next = -1
            ;  ++ next < last
            ; host.get ({at:ions[next], in:ORDER[action.in], then:todo})
            );
      }
}
;