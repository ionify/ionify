;
~
{ re:
    { id:  'no@ionify'
    , as: ['sensation']
    , of: ['core','api']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220623
    , as:  -0.043
    , is:
        [ "implementing ~on.no which disables a sensation mapped to one or more term(s)"
        ],
      we:
        [ "WERE implementing ~{no:action, on:*}..."
        , "like the idea of resolving ~ {no: 'this.with'}    "
        , "must handle multiple actions using the same term. "
        ]
    },

  on:
    [['no','on']
    ],'no on'  :'no'
     ,

  no :function
  no (sensation)
   {  if (!sensation.no && !('no' in sensation)) return sensation

      var actions = sensation.no
        ; Array.isArray (actions) || (actions = [actions])

      var action
        , term
        , next  = -1
        , last  = actions.length
        , our   = no.our
        , known = our.known
        , sense = our.senses
        , does  = our.does

      while (++next < last)
        { term   =   sensation.on
          Array.isArray (term) || (term = [term])
          for
            ( var T =  term.length, t
            ;     T--, t = term[T], T+1
            ; action =    sense[t]
            , action ?  (action  === actions[next])
                          &&  delete   sense[t]
                          &&  delete   known[t]
                     :  (actions[next] === does [does[t]])
                          &&           ((  does [does[t]] = null)
                                       , delete  does[t]        )
            );
        }
   }
}
;