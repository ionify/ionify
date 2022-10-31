;
~
{ re:
    { id:  'with@ionify'
    , im:  'with.im@ionify'
    , of: ['core','sion','context','api']
    , as: ['aggregation','convention','sensation']
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20221031
    , at:  -0.02
    , is:
        [ "ionify's .with convention"
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
        [ "were"
        , "must"
        , "will"
        , "plan"

        , "want .with.the to be accessible to only the sion it's populated for?"
        , "know .with.* can be exposed if shared via host method as reaction"

        , "like .re.of.* & .the.* being sensible sion aggregation indications"
        ]
    },

  on:'*',
     '*':'with'
        ,

  the:
    { domain:
        {
        }
    },

  WITH:
    { its: null
    , all: null
    , the: null
    , our: null
    },

  WiTH:function
  WiTH()
    {
    },

  valueOf:function
  ionify()
    { this.WiTH.prototype = this.WITH
      this.with.with      = {its:this}
      this.with (this)

      delete this.valueOf <- this
    },

  with:function
  with_(ion)
    { var exists
        ,   its      = with_.with.its
        , _with_     = new its.WiTH
        ; _with_.its = ion
        ; _with_.all = ion.the.all
        ; _with_.the = ion.the
        ; _with_.our = ion.the.domain

      for
        ( var member in ion )
        { if(!ion.hasOwnProperty     (member)  ) continue

          if('function' != typeof ion[member] &&
             !Array.isArray      (ion[member]) ) continue

          exists  =   ion [member].with
          exists  &&  exists instanceof its.WiTH
                  || (ion [member].with =  _with_)
        }
    }
}
;