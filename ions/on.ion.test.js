;
~
{ re:
    { id:  'on.ion.test@ionify'
    , of: ['tests','core','conduit','sensation']
    , as: ['examination']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220627
    , at:  -0.03
    , is: "js ion hip-hop: handled-in-place & handled-on-prototype examination"
    , go:
        { help: 'https://github.com/ionify/ionify/issues'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.ion.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/on.ion.test.js'
        , deal: 'https://deal.ionify.net/'
        , join: 'https://github.com/ionify/about/tree/public/team'
        , seek: 'https://api.ionify.net/'
        },
      we:
        [ "were ... "
        , "must ..."
        , "will test ionify hop     ions"
        , "will test ionify hip-hop ions"
        , "want ... "
        , "like ... "
        ]
    },

  valueOf:function
  test_on_ion()
    { delete this.valueOf <- this

      ~
      { valueOf:function
        hip ()
          { ~{log: "✅ ion hip: handled-in-place"}
          }
      }

      ~
      { valueOf :function
        hip ()
          { var Objects = Object.prototype

            function hop ()
              { restore  ()
              ~ {log: "✅ ion hop: handled-on-prototype"}
              }

            function restore ()
              { Objects.valueOf = restore.hop
              }

            restore.hop =
            Objects.valueOf
            Objects.valueOf = hop
          ~ {}
          }
      }

      ~
      { valueOf :function
        hiphop  ()
          {
          ~ {log: "✅ ion hip+hop: coexists hip: handled-in-place     with hop: handled-on-prototype"}
          }
      }

      ~
      { valueOf :function
        hip ()
          { var Objects = Object.prototype

            function hip ()
              {
              ~ {log: "✅ ion hip-hop: replaces hip: handled-in-place     with hop: handled-on-prototype"}
              }

            function hop ()
              { restore  ()
              ~ {log: "✅ ion hip-hop: replaces hop: handled-on-prototype with hip: handled-in-place"}
              }

            function restore ()
              { Objects.valueOf = restore.hop
              }

            restore.hop =
            Objects.valueOf
            Objects.valueOf = hop
            delete this.valueOf
          ~ this
            this.valueOf = hip
          ~ this
          }
      }
    }
}
;