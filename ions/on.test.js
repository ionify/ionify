;
~
{ re:
    { id:  'on.test@ionify'
    , of: ['core','tests']
    , as: ['examination']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220624
    , at:  -0.018
    , is: "ionify's ~on api examination"
}   }

~
{ on:'fatherhood',
      fatherhood :function
      fatherhood (action)
        { action.fatherhood === "かいととマイケル"
        ? ~{  log:"✅ ~on: reaction: named & referenced"}
        : ~{error:"🚫 ~on: reaction: named & referenced"}
}       }
+
{fatherhood:"かいととマイケル"}


~
{ on:'ion@doma.in',
     'ion@doma.in':function
        on_ion_id (action)
          {   action.re.id === 'ion@doma.in'
          &&  action.re.is === "an re ionified module"
          ?  ~{  log:"✅ ~on: reaction: named re.id"}

          :   action['ion@doma.in'].is === "a top-level-id ionified module"
          ?  ~{  log:"✅ ~on: reaction: named top-level-id"}

          :  ~{error:"🚫 ~on: reaction: named top-level-id & re.id"}
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

        try
          { ++action.count == 1
            ? ~{  log:"✅ ~on: reaction: per sensation: once"}
            : ~{error:"🚫 ~on: reaction: per sensation: once"}
          }
        catch (error)
          {
          ~ /~on    test try-catch prevents disrupting subsequent tests/
          & /~error records the error message before throwing the error/
          }
}     }
~
{ on:'action',
     'action':function
    reaction2 (action)
      {'count' in action || (action.count = 0)

        try
          { ++action.count == 2
            ? ~{  log:"✅ ~on: reaction: per sensation: multiple"}
            : ~{error:"🚫 ~on: reaction: per sensation: multiple"}
          }
        catch (error)
          {
          ~ /~on    test try-catch prevents disrupting subsequent tests/
          & /~error records the error message before throwing the error/
          }
}     }
~
{action:'activation',count:0}

~
{ on:
    [ [ 'multi-termed', 'reaction']
    ,  'single-termed----reaction'
    ,        '*'
    ]
    ,
 '*':function
  all_reactions (action)
    { if (all_reactions == action.no) return  ~{log: "✅ ~on: reaction: all"}
      if (all_reactions.happened    ) return; else all_reactions.happened = true
    ~ {on:all_reactions.with.re.id,   no:all_reactions}
    //~on:* keeps & maps reactions to their ids, not '*' <= 🐛 to fix?
    //~on:* keep  & map  could  do {'*':[reaction,reaction,...]}
    //~on:* would automatically do this if multi-reaction per sensation created
    }
    ,
 'single-termed----reaction':function
  single_termed____reaction  ( action )
    {
    ~ {log: "✅ ~on: reaction: single-termed"}
    }
    ,
 'multi-termed reaction':function
  multi_termed_reaction  ( action )
    {
      ~ {log: "✅ ~on: reaction: multi-termed"}
    }
}
+
{'multi-termed':'action', reaction:true}
+
{'single-termed----reaction':true}
;