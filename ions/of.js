;
~
{ re:
    { id:  'of@ionify'
    , im:  'of.im@ionify'
    , of: ['core','sion','context','api']
    , as: ['aggregation','convention','sensation']
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20221031
    , at:  -0.04
    , is:
        [ "ionify's of@ convention that sets ion's re.of & of"
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/of.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/of.test.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://github.com/ionify/about/tree/public/team'
        },
      we:
        [ "will move domain parsing to id@ as id.domain.name+full+subs"
        , "must"
        , "will"
        , "plan"

        , "want re.of & ion.of names converted to name@ion.re.domain.full "
        + "unless they already are. all spaces are name@domain where domain can "
        + "be blank. ~name.search (/@/) ||  (name += domain.full)"

        , "want .with.ion.* to include the sion's re.of & sion.of spaces"
        , "want .with.ion to be exactly sion.of whether declared in sion or not"
        ]
    },

  on:'*',
     '*':'of'
        ,
  the:
    { domain:
        {
        }
    },

  spaces:
    { '':{}
    },

  valueOf:function
  ionify()
    { this.spaces.all = this.spaces['']
      this.the.domain.spaces = this.spaces
      this.of.with   = ionify.with = {the:this.the, its:this}
      this.of(this)
      delete this.valueOf <- this
    },

  domainParser
    : /@(.+)\.(.+\..+)$|@(.+\..+)$|@(.*)$|^[^@]+$/
    ,

  of:function
  of(ion)
    { var its = of.with.its;

      /parse ion's domain name/
      var domain = {}
        ; domain.find = ion.re.id.match (its.domainParser)
        ; domain.full = domain.find [0]
        ; domain.name = domain.find [4] || ''
        ; domain.subs = domain.find [1] || ''
        ; domain.base = domain.find [2] || domain.find [3]
        ;

      var spaces  = its.spaces;

      /ensure the ion's doma.in space exists/
      spaces[domain.name] || (spaces[domain.name] = {})

      var the     = ion.the
        , ofs     = ion.re.of
        , space   , name
        , ensure  =
                  { all:    spaces.all
                  , domain: spaces[domain.name]
                  };


      /ensure  .the  .the.all  &  .the.domain exist/
      ;   (the && 'object' == typeof the)
      ||  (the && (ion.re.ex.the   = the), (ion.the = the = {}))

      for
        ( name in ensure )
        { if(!ensure.hasOwnProperty (name)) continue
        ;  space =   the [name]
        ; (space && 'object' == typeof space)
        ||(space && (ion.re.ex ['the_'+name ] = space), (ion.the[name] = ensure[name]))
        }

      /ensure the.domain = the.doma.in = re.of.doma.in/
      ofs[domain.name] = the[domain.name] = the.domain;

      /resolve all re.of space names to space instances & ensure their in .the/
      for
        ( var f=-1, F=ofs.length
        ;  ++ f  <  F          ;
        )
        { name   =    ofs [f]
          space  = spaces [name]
          space || name in spaces ||
         (space  = spaces [name]   = {})
          ofs [name]  =  space
          the [name] || (the[name] = space)
        }


      /merge all .the spaces with any existing re.of spaces/
      var local
      for
        ( name in the )
        { if(name == 'domain' || !the.hasOwnProperty(name))
            continue

          space = ofs[name]
          local = the[name]

          if(!space && local && typeof local == 'object')
            { ofs[name] = local
              continue
            }

          if(!local && space)
            { the[name] = space
              continue
            }

          /ensure re.of & .the spaces will be the exact of@spaces/
          if( space != spaces[name] )
            { space  = spaces[name]
              if( domain.name == name )
                { the.domain   = space}
            }

          /set .the space to its exact re.of & of@spaces space/
          if( space == local ) continue; else the[name] = space;

          /merge .the into re.of spaces/
          for
            (       name in local       )
            { space[name] = local[name] }
        }
    }
}
;