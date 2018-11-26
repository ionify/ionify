;
~
{ re:
    { id:  'id@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181126
    , is:  -0.1
    , it:
        [/ ensures that all ionified objects have an re.id                  /
        ," sets an object's re.id value as a member mapped to its object re "
        ,/ sets missing re & re.id on an object with a domain-named member  /
        ,/ sets missing re on a object                                      /
        ,/ sets missing re.id via ~next.id when possible	                  /
        ]
    , we:
        [/ ... /
        ]
    }

, share
:  {id:'id'}

, on
:  ['id']

, id
:  function setID (ion)
      { if (!ion.id || typeof ion.id != 'boolean') return

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
        && (ion.re.id = 'ion.'
                      + (setID.nextId ? ++setID.nextId
                                      :  (setID.nextId = 1)))
                                      ;
        id = ion.re.id
        !ion [id] && (ion [id] = ion.re)
        return id
      }
}
;