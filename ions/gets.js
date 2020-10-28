;
~
{ re:
    { id:  'gets@ionify'
    , is:  'sensor'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20201028
    , at:  -0.1
    , it:
        [ "keeps a queue of get requests"
        , "enables request's direct-lookup by path"
        , "enables verifying get requests by path & ion inspection"
        , "enables keep'ing & lose'ing get requests"
        , "reuses  its queue's unused spots vs. continuously growing it"
        ],
      we:
        [ "were implementing .invoke for hip ions invoked before ionify"
        ]
    }

, pack: {'undefined':0, null:0}
, path: {}
, next: []
, free: 0,

  keep:
    function keep (get)
      { var next      = this.next
          , used      = this.free + next.length

        this.path [get.re.go]
          =   this.free <= 0
          ?   next.push (get) - 1
          : ((next [++this.free, used] = get), used)

        var pack = get.pack
        !(pack in this.pack) && (this.pack [pack] = 0)
        this.pack [pack]++
      },

  find:
    function find (ion)
      { return !! this.next [this.path [ion.id]]
      },

  lose:
    function lose (path)
      { var next    = this.next
          , paths   = this.path
          , spot    = paths [path]
          , lost    = next  [spot]
        next [spot] = null
        delete paths [path]
        next.free = (--this.free + next.length) == 0

        var pack = lost.pack
        !(pack in this.pack) && (this.pack [pack] = 0)
        this.pack [pack]--

        return lost
      },

  invoke:
    function invoke (pack)
      { !pack && (pack = this.pack)

        for
          ( var get , gets=invoke.with, next=gets.next, ion
          ,     g=-1, G=next.length
          ;  ++ g  <  G;
          )
          { get = next [g]
            if (pack != get.pack) continue
            ion  = get.ion
            delete get.ion
            delete ion.valueOf
            gets.lose (get.re.go)
          ~ ion
          }

        delete gets.pack [pack]
        delete this.then
        delete this.get
      }
}
;