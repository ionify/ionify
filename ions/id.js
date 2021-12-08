;
~
{ re:
    { id:  'id@ionify'
    , of:  'core'
    , as:  'sensation'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -8.20211207
    , at:  -0.1
    , is:
        [ 'ensuring that all ionified objects have an re.id.'
        , "setting an object's re.id value as a member mapped to its object re."
        , 'setting missing re & re.id on an object with a domain-named member.'
        , 'setting missing re on a object.'
        , 'setting missing re.id via ~next.id when possible.'
        ],
      go:
        { plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/id.js'
        , team: 'https://github.com/ionify/about/tree/public/team'
        , deal: 'https://github.com/ionify/ionify/blob/public/LICENSE.txt'
        , more: 'https://api.ionify.net/'
        },
      we:
        [ "have ID.nextID's range as opposite next.id's to minimize overlap."
        , "like ions with old ids being updated once next.id's available."
        , "will 👨🏾‍💻 id.domain++ via id:{domain:'domain',toString:'id@domain'}"
        , "like linking this ion although it doesn't currently rely on it   "
        ]
    },

  on:'*',
     '*':'ID'
        ,

  ID :function
  ID (ion)
    { var id  =  ion.hasOwnProperty ('re')
              ?  ion.re.id
              : (ion.re = {id: void 0}).id
              ;

      if(id || isFinite (id))
        return   ion [id]
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

      var named
        = (ion.debug ||  ion.log || ion.error || ion.info || ion.warn)
        ? 'log' : 'ion'

      ion.re.id
        ||  (ion.next && ion.id) /*|| ion.debug*/
        || ~{next:named, id:ion}

      ion.re.id
        || (ion.re.id = named/*----*/+ '.' +/*----------------------------------*/
         /*|*/          ( ID.nextId  ? --ID.nextId                              //
         /*|*/                       :  (ID.nextId = Number.MAX_SAFE_INTEGER    //
         /*|*/                                    || 9007199254740991           //
           )/*--------*/)/*-----------*/)/*-------------------------------------*/

      ion [id = ion.re.id]  ||  (ion [id] = ion.re)
      return id
    }
}
;