;
~
{ re:
    { id:  're.id@ionify'
    , is:  'content.sensor'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20201028
    , at:  -0.1
    , it:
        [" ensures that all ionified objects have an re.id.                  "
        ," sets an object's re.id value as a member mapped to its object re. "
        ," sets missing re & re.id on an object with a domain-named member.  "
        ," sets missing re on a object.                                      "
        ," sets missing re.id via ~next.id when possible.	                 "
        ],
      we:
        [" were ~get'ing ~next.id here then sensing all ions missing re.id.  "
        ," were thinking how to use web.gets to invoke this ion after ~get..."
        ," will fix ~on:id,id:action but am using it here to ensure ion ids. "
        ," will ensure that ~debug & ~next.id don't keep using setID.nextID. "
        ," like linking this ion although it doesn't currently rely on it.   "
        ]
    },

  do:
    [ "get ~next.id then ensure ~re.id's for all ions"
    ],
    /*
  on:
    [ 'id'
    ],
    */
 "get ~next.id then ensure ~re.id's for all ions":
    { get : ['next.id@']
  //, then: {on:'ion', do:'identify'}
    , then: {on:'id',  id:'identify'}
    },

  identify:
    function identify (ion)
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
          if (~  word.search (/@/))
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
      //&& (console.log ("no ~next.id; debug?", !!ion.debug, "using "+setID.nextId),true)
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