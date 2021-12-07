;
~
{ re:
    { id:  'next.id@ionify'
    , of:  'core'
    , as:  'action'
    , by: ['mike.lee', 'team']
    , on:  -7.20160910
    , to:  -8.20211206
    , at:  -0.1
    , is: 'generating namespaced sequential ids, per request'
    }

, on  : [['next', 'id']]
, MAX : Number.MAX_SAFE_INTEGER ||  9007199254740991
, MIN : Number.MIN_SAFE_INTEGER || -9007199254740991
, ids : {}
,
  valueOf :function
  nextid  ()
    { this ['next id'].with = this
    ; delete this.valueOf
    ~ this
    },

 'next id':function
  next_id (action)
    { var my   = next_id.with
        , ids  = my.ids
        , name = action.next
        , f0r  = action.id.re || (ion.id.re = {})
        , id   = ids [name]

    ; (id >= my.MAX)  && (id = ids [name] = null)
    ; isNaN (id)      && (id = ids [name] = my.MIN)
    ;    f0r.id = name + (id > 0 ? '.' : '') + id
    ; return ids [name]++
    }
}
;