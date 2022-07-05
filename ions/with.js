;
~
{ re:
    { id:  'with@ionify'
    , im:  'with.im@ionify'
    , of: ['core','sion','context','api']
    , as: ['aggregation','convention','sensation']
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220705
    , at:  -0.0
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
                { own:    {}
                , domain: {}
                , all:    {}
                }
            }
        },
      domain:
        {
        }
    },

  valueOf:function
  ionify()
    { this.with || (this.with = new this.own.WITH)
      this.with(this)
      delete this.valueOf <- this
      delete this['*']
      delete this.with
    },

  with:function
  with_(obi)
    { var _with_  = obi.with
    }
}
;