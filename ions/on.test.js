;
~
{ re:
    { id:  'on.test@ionify'
    , of: ['tests','core','sensation','composition']
    , as: ['examination']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.202206271905
    , at:  -0.019
    , is: "ionify's ~on api examination"
    , go:
        { help: 'https://github.com/ionify/ionify/issues'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.ion.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/on.test.js'
        , deal: 'https://deal.ionify.net/'
        , join: 'https://github.com/ionify/about/tree/public/team'
        , seek: 'https://api.ionify.net/'
        },
      we:
        [ "were ... "
        , "must ..."
        , "will ..."
        , "want ... "
        , "like ... "
        ]
    },

  valueOf:function
  test_on()
    { delete this.valueOf <- this

      ~
      { on:'fatherhood',
            fatherhood :function
            fatherhood (action)
              { action.fatherhood === "かいととマイケル"
              ? ~{  log:"✅ ~on: reaction: named & referenced"}
              : ~{error:"❌ ~on: reaction: named & referenced", halt:false}
      }       }
      +
      {fatherhood:"かいととマイケル"}


      ~
      { on:'ion@doma.in',
          'ion@doma.in':function
              on_ion_id (action)
                {   action.re.id === 'ion@doma.in'
                &&  action.re.is === "an re ionified module"
                ?  ~{  log:"✅ ~on: reaction: named via re.id"}

                :   action['ion@doma.in'].is === "a top-level-id ionified module"
                ?  ~{  log:"✅ ~on: reaction: named via top-level-id"}

                :  ~{error:"❌ ~on: reaction: named via top-level-id & re.id", halt:false}
      }         }
      +
      {re:
        { id: 'ion@doma.in'
        , by: 'mike.👨🏾‍💻.lee@ionify'
        , on: -8.20171111
        , to: -7.20220623
        , in: 'san-jose.california.usa.earth'
        , is: "an re ionified module"
      } }
      +
      {'ion@doma.in':
        { by: 'mike.👨🏾‍💻.lee@ionify'
        , on: -8.20171111
        , to: -7.20220623
        , in: 'san-jose.california.usa.earth'
        , is: "a top-level-id ionified module"
      } }

      ~
      { on:'action',
          'action':function
          reaction1 (action)
            { /reaction1 first reacts to action:reaction2 then action:activation/
              'count' in action || (action.count = 0)

              ++action.count == 1
                  ? ~{  log:"✅ ~on: reaction: per sensation: once"}
                  : ~{error:"❌ ~on: reaction: per sensation: once", halt:false}
            }
      }

      ~
      { on:'action',
          'action':function
          reaction2 (action)
            {'count' in action || (action.count = 0)

              ++action.count == 2
                  ? ~{  log:"✅ ~on: reaction: per sensation: multiple"}
                  : ~{error:"❌ ~on: reaction: per sensation: multiple", halt:false}
            }
      }

      ~
      {action:'activation',count:0}

      ~
      { on:
          [ ['compound-term', 'reaction']
          ,  'single-term------reaction'
          ,             '*'
          ],
       '*':function
        convention (action)
          { if (convention == action.no) return  ~{log: "✅ ~on: convention"}
            if (convention.happened    ) return; else convention.happened = true
          ~ {on:convention.with.re.id,   no:convention}
          //~on:* keeps & maps reactions to their ids, not '*' <= 🐛 to fix?
          //~on:* keep  & map  could  do {'*':[reaction,reaction,...]}
          //~on:* would automatically do this if multi-reaction per sensation created
          }
          ,
       'single-term------reaction':function
        single_termed____reaction ( action )
          {
          ~ {log: "✅ ~on: reaction: term: single"}
          }
          ,
       'compound-term reaction':function
        compound_term_reaction ( action )
          {
          ~ {log: "✅ ~on: reaction: term: compound"}
          }
      }
      +
      {'compound-term':'action', reaction:true}
      +
      {'single-term------reaction':true}
    }
}
;