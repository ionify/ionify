;
~
{ re:
    { id:  'id@ionify'
    , of:  'core'
    , as:  'sensor'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211205
    , at:  -0.1
    , is:
        [ 'ensuring that all ionified objects have an re.id.                  '
        , "setting an object's re.id value as a member mapped to its object re"
        , 'setting missing re & re.id on an object with a domain-named member '
        , 'setting missing re on a object.                                    '
        , 'setting missing re.id via ~next.id when possible.	                '
        ]
        ,
      we:
        [ "will ensure that ~debug & ~next.id don't keep using setID.nextID "
        , "will 👨🏾‍💻 id.domain++ via id:{domain:'domain',toString:'id@domain'}"
        , "like linking this ion although it doesn't currently rely on it   "
        ]
    },

  on:
    [ 'id'
    ],

  id:
    function setID (ion)
      { if (!ion.id || typeof ion.id != 'boolean') return

        // 🐛 via on.ion@onion.id:true workaround
        ;('boolean' == typeof ion.id) && delete ion.id

        var id =  ion.hasOwnProperty ('re')
               ?  ion.re.id
               : (ion.re = {id: void 0}).id
               ;

        if (id || isFinite (id))
          return  ion [id]
               ?       id
               : (ion [id] = ion.re).id
               ;

        for (var word in ion)
          if (~ word.search (/@/))
            { var    re  = ion [id = ion.re.id = word]
            ; typeof re == 'object'
                &&  (ion .re = re)
                && !('id' in   re)
                &&  ( re .id = id)
            ; return id
            }

        !ion.re.id && !(ion.next && ion.id) && !ion.debug && ~{next:'ion', id:ion}

        !   ion.re.id
      //&& !ion.debug || (ion.re.as != 'logger')
      //&& (console.log ('no ~next.id; debug?', !!ion.debug, 'using '+setID.nextId),true)
        && (ion.re.id = 'ion.'
                      + (setID.nextId ? ++setID.nextId
                                      :  (setID.nextId = 1)))
                                      + '@'
        id = ion.re.id
        !ion [id] && (ion [id] = ion.re)
        return id
      }
}
;