;
~
{ re:
    { id:  'of@ionify'
    , im:  'of.im@ionify'
    , of: ['core','sion','context','api']
    , as: ['aggregation','convention','sensation']
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220708
    , at:  -0.03
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
        [ "WERE replacing .our & ~link.to with of@"
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
     '*':'of_'
        ,
  of:
    { own:
        { spaces:       {'':{}}
        , domainParser: /@(.+)\.(.+\..+)$|@(.+\..+)$|@(.*)$|^[^@]+$/
        },
      domain:
        {
        }
    },

  valueOf:function
  ionify()
    { var        own = this.of.own
      own.spaces.all = own.spaces['']
      this.of_.with  = ionify.with = {its:this, own:own}
      this.of_(this)

    //delete this.of_.with
      delete this.valueOf <- this
    //delete this['*']
    //delete this.of_
    },

  of_:function
  of_(obi)
    { /set .of.doma.in & re.of.doma.in space/
      var domain = {}
        ; domain.find = obi.re.id.match (of_.with.own.domainParser)
        ; domain.full = domain.find [0]
        ; domain.name = domain.find [4] || ''
        ; domain.subs = domain.find [1] || ''
        ; domain.base = domain.find [2] || domain.find [3]
        ;

      var spaces  = of_.with.own.spaces;

      /ensure the ion's doma.in space exists/
      spaces[domain.name] || (spaces[domain.name] = {})

      var of      = obi.of
        , ofs     = obi.re.of
        , space   , name
        , ensure  =
                  { all:    spaces.all
                  , own:    {}
                  , domain: spaces[domain.name]
                  };


      /ensure  .of  .of.all  .of.own  &  .of.domain exist/
      ;   (of && 'object' == typeof of)
      ||  (of && (obi.re.ex.of    = of), (obi.of= of = {}))

      for
        ( name in ensure )
        { if(!ensure.hasOwnProperty (name)) continue
        ;  space =   of [name]
        ; (space && 'object' == typeof space)
        ||(space && (obi.re.ex ['of_'+name] = space), (obi.of[name] = ensure[name]))
        }


      /ensure of.doma.in = re.of.doma.in = of.domain/
      of[domain.name] = ofs[domain.name] = of.domain;


      /resolve all re.of spaces to references & ensure in .of/
      for
        ( var f=-1, F=ofs.length
        ;  ++ f  <  F          ;
        )
        { name   =    ofs [f]
          space  = spaces [name]
          space || name in spaces ||
         (space  = spaces [name]   = {})
          ofs [name]  =  space
          of  [name] || (of[name] = space)
        }


      /merge all .of spaces with any existing re.of spaces/
      var merge
      for
        ( name in of )
        { if(name == 'own' || name == 'domain' || !of.hasOwnProperty(name))
            continue

          space = ofs[name]
          merge =  of[name]

          if(!space && merge && 'object' == typeof merge)
            { ofs[name] = merge
              continue
            }

          if(!merge && space)
            { of[name] = space
              continue
            }

          /merge .of into re.of spaces/
          for
            (       name in merge       )
            { space[name] = merge[name] }

          /merge re.of spaces into .of/
          for
            (   name in space                                 )
            { !(name in merge) && (merge[name] = space[name]) }
        }
    }
}
;