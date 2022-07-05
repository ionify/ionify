;
~
{ re:
    { id:  'of@ionify'
    , im:  'of.im@ionify'
    , of: ['core','sion','context','api']
    , as: ['aggregation','convention','sensation']
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220705
    , at:  -0.01
    , is:
        [ "ionify's re.of & of convention"
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
        [ "were"
        , "must"
        , "will"
        , "plan"

        , "want re.of & ion.of names converted to name@ion.re.domain.full "
        + "unless they alreay are. all spaces are name@domain where domain can "
        + "be blank."

        , "want .with.ion.* to include the sion's re.of & sion.of spaces"
        , "want .with.ion to be exactly sion.of whether declared in sion or not"
        ]
    },

  on:'*',
     '*':'of_'
        ,
  of:
    { own:
        {
        },
      domain:
        {
        }
    },

  valueOf:function
  ionify()
    { this.of || (this.of = {})
      this.of_(this)
      delete this.valueOf <- this
      delete this['*']
      delete this.of_
    },

  of_:function
  of_(obi)
    { var of  = obi.of
        , ofs = obi.re.of
        , ion = of_.ion
        , spaces, space, name

      / resolve all re.of spaces to references /
      for
        ( var f=0, F=ofs.length
        ;  ++ f  < F          ;
        )
        { name  =   ofs [f]
          space =   ion [name]
          space || name in ion || (space = ion [name] = {})
          ofs [name]  =  space
        }

      / resolve the re.of.domain & re.of.own spaces /
      var domain  = obi.re.id.domain
        , full    = domain.full
      for
        ( name in {domain:1, own:1, [full]:1, [domain.sub]:1})
        {~name.search (/@/) ||  (name += full)
        ; ofs[name] || ofs.push (name) &&
        ( ofs[name]  = ion[name]  || (ion[name] = {}))
        }
      //{ ofs.domain || ofs.push ('domain') &&
      //( ofs.domain  = ion.domain || (ion.domain = {}))
      //; ofs.own    || ofs.push ('own')    &&
      //( ofs.own     = ion.own    || (ion.own    = {}))
      //}
    }
}
;