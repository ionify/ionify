;
~
{ re:
    { id:  'with@ionify'
    , im:  'with.im@ionify'
    , of: ['core','sion','context','api']
    , as: ['aggregation','convention','sensation']
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220707
    , at:  -0.01
    , is:
        [ "ionify's with convention"
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/with.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/with.test.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://github.com/ionify/about/tree/public/team'
        },
      we:
        [ "were implementing ionify's with convention"
        , "must"
        , "will"
        , "plan"

        , "want .with.ion on sion methods to access ion contexts e.g: domain"
        , "want .with.ion.domain(s)+space(s)"
        , "want .with.ion.* to include the sion's re.of & sion.of spaces"
        , "want .with.ion to be exactly sion.of whether declared in sion or not"
        , "want .with.ion to be accessible to only the sion it's populated for?"
        , "know .with.ion can be exposed if shared via host method as reaction"

        , "like ion.with()'s existence being a sensible aggregation indication"
        ]
    },

  on:'*',
     '*':'with'
        ,
  of:
    { own:
        { WITH:
            { ion:
                { all:    null
                , own:    null
                , domain: null
                }
            , its: null
            , own: null
            },

          WiTH:function
          WiTH()
            {
            }
        },
      domain:
        {
        }
    },

  valueOf:function
  ionify()
    { var            own = this.of.own
      own.WiTH.prototype = own.WITH
      this.with.with     = {own:own}
      this.with (this)

      delete this.valueOf <- this
    //delete this['*']
    //delete this.with
    },

  with:function
  with_(obi)
    { var exists
        ,   own      = with_.with.own
        , _with_     = new own.WiTH
        ; _with_.its = obi
        ; _with_.ion = obi.of
        ; _with_.own = obi.of.own

      for
        ( var member in obi )
        { if(!obi.hasOwnProperty     (member)  ) continue

          if('function' != typeof obi[member] &&
             !Array.isArray      (obi[member]) ) continue

          exists  =   obi [member].with
          exists  &&  exists instanceof own.WiTH
                  || (obi [member].with =  _with_)
        }
    }
}
;