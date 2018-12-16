;
~
{ re:
    { id:  'next.id@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -7.20160910
    , to:  -8.20181215
    , is:  -0.1
    , it: "generates sequential ids on-demand"
    }

, on    : [['next'   ,      'id']]
, share : { 'nextID' : "next id"}
, MAX   : Number.MAX_SAFE_INTEGER ||  9007199254740991
, MIN   : Number.MIN_SAFE_INTEGER || -9007199254740991
, ids   : {}

, "next id"
:   function onNextId (ion)
      { var thi$ = onNextId.ion || (onNextId.ion = onNextId == this["next id"] ? this : null)
          , ids  = thi$.ids
          , name = ion.next
          , f0r  = ion.id.re || (ion.id.re = {})
          , id   = ids [name]

      ; (id >= thi$.MAX)  && (id = ids [name] = null)
      ; isNaN (id)        && (id = ids [name] = thi$.MIN)
      ; f0r.id = name + '.' + id
      ; return ids [name]++
      }
}
;