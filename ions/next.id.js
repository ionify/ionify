;
~
{ re:
    { id:  'next.id@ionify'
    , of: ['core','public','api']
    , by: ['mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team']
    , on:  -7.20160910
    , to:  -7.20221104
    , at:  -0.1
    , as: {sensation:0.001, composition:0.001}
    , is: 'generating namespaced sequential ids, per request'
    , we: "like valueOf switching next_id, creating a private closure for internals"
    }

, on  : [['next', 'id']]
, MAX : Number.MAX_SAFE_INTEGER ||  9007199254740991
, MIN : Number.MIN_SAFE_INTEGER || -9007199254740991
, ids : {},

  valueOf :function
  nextid  ()
    { this ['next id'].with = {its:this}
      delete this.valueOf  <-  this
    },

 'next id':function
  next_id (action)
    { var my   = next_id.with.its
        , ids  = my.ids
        , name = action.next
        , f0r  = action.id.re || (ion.id.re = {})
        , id   = ids [name]
    }
}
;