;
~
{ re:
    { id: "next.id@ionify"
    , is: "An ion that generates sequential ids on-demand"
    , by:["mike.lee@iskitz", "team@ionify"]
    , on: -7.20160910
    , to: -7.20170715
    , at: +0.1
    }

, debug : false
, on    : [["next", "id"]]

, MAX: Number.MAX_SAFE_INTEGER ||  9007199254740991
, MIN: Number.MIN_SAFE_INTEGER || -9007199254740991
, ids: {}

, "next id":
    function onNextId (ion)
      { var th1s = onNextId.ion || this
          , ids  = th1s.ids
          , name = ion.next
          , f0r  = ion.id.re || (ion.id.re = {})
          , id   = ids [name]

      ; (id >= th1s.MAX)  && (id = ids [name] = null)
      ; isNaN (id)        && (id = ids [name] = th1s.MIN)
      ; f0r.id = name + '.' + id
      ; return ids [name]++
      }
}
;