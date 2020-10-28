;
~
{ re:
    { id:  'next.id@ionify'
    , is:  'action'
    , by: ['mike.lee', 'team']
    , on:  -7.20160910
    , to:  -7.20201028
    , at:  -0.1
    , it: "generates sequential ids on-demand"
    }

, on  : [['next', 'id']]
, MAX : Number.MAX_SAFE_INTEGER ||  9007199254740991
, MIN : Number.MIN_SAFE_INTEGER || -9007199254740991
, ids : {}
,
  valueOf:
    function nextid ()
      { this ["next id"].with = this
        delete this.valueOf
      ~ this
      },

  "next id":
    function nextid (ion)
      { var my   = nextid.with
          , ids  = my.ids
          , name = ion.next
          , f0r  = ion.id.re || (ion.id.re = {})
          , id   = ids [name]
          ;
        (id >= my.MAX)  && (id = ids [name] = null)
        isNaN (id)      && (id = ids [name] = my.MIN)
        f0r   .id  = name + '.' + id
        return ids [ name ]++
      }
}
;