;
~
{ re:
    { id:  'next.id@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -7.20160910
    , to:  -8.20190104
    , is:  -0.1
    , it: "generates sequential ids on-demand"
    }

, on    : [['next', 'id']]
, MAX   : Number.MAX_SAFE_INTEGER ||  9007199254740991
, MIN   : Number.MIN_SAFE_INTEGER || -9007199254740991
, ids   : {}

, valueOf
:   function hiphop ()
      { this ["next id"].ion = this
      ; delete this.valueOf
      ~ this
      }

, "next id"
:   function nextId (ion)
      { var my   = nextId.ion
          , ids  = my.ids
          , name = ion.next
          , f0r  = ion.id.re || (ion.id.re = {})
          , id   = ids [name]

      ; (id >= my.MAX)  && (id = ids [name] = null)
      ; isNaN (id)      && (id = ids [name] = my.MIN)
      ;    f0r.id = name + '.' + id
      ; return ids [name]++
      }
}
;