;
~
{ re:
    { id:  'next.id@ionify'
    , of: ['public','tools','api']
    , as: {sion:-0.001, sensation:0.001, composition:0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -7.20160910
    , to:  -8.20221129
    , at:  -0.022
    , is:
        [ "doing on-request sequential namespaced id generation"
        , "returning the numeric sequential id"

        , '+{next: "id.prefix", id: object}'

        , "recommended for use with + invocation to receive actual numeric id"
        , "recommended for use with -~... invocations if numeric id not needed"
        ],
      we:
        [ "want to encapsulate its internal members, i.e. MAX, MIN, ids"
        , "like valueOf switching next_id creating a private internals closure"
        ]
    }

, on  : [['next', 'id']]
, MAX : Number.MAX_SAFE_INTEGER ||  9007199254740991
, MIN : Number.MIN_SAFE_INTEGER || -9007199254740991
, ids : {},

  valueOf :function
  nextid  ()
    { this ['next id'].with = {its:this}
      delete this.valueOf  <=  this
    },

 'next id':function
  next_id (action)
    { var my   = next_id.with.its
        , ids  = my.ids
        , name = action.next
        , f0r  = action.id.re || (action.id.re = {})
        , id   = ids [name]

    ; (id >= my.MAX)  && (id = ids [name] = null)
    ; isNaN (id)      && (id = ids [name] = my.MIN)
    ;    f0r.id = name + (id > 0 ? '.' : '') + id
    ; return ids [name]++
    }
}
;