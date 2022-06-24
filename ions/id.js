;
~
{ re:
    { id:  'id@ionify'
    , of: ['core','api']
    , as: ['convention', 'sensation','sion']
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220624
    , at:  -0.041
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
        , join: 'https://github.com/ionify/about/tree/public/team'
        , deal: 'https://deal.ionify.net/'
        , seek: 'https://api.ionify.net/'
        },
      we:
        [ "want own re@ convention from ID() to ensure sions have expected re.*"
        , "were considering removing|replacing old.re.* duplicated by sion.re.*"
        , "like migrating non-sion re.* into re.ex.* & ~note'ing that"
        , "have implemented core sion.re & its checksum"
        , "want to reimplement checksum to auto-select core [non-object] values"
        , "like checksum as re.at.checksum"
        , "have ID.nextID's range as opposite next.id's to minimize overlap."
        , "like ions with old ids being updated once next.id's available."
        , "like id.domain string via id:{domain:'domain',toString:'id@domain'}"
        , "like linking this ion although it doesn't currently rely on it"
        ]
    },

  on:'*',
     '*':'ID'
        ,

  ID:function
  ID( ion )
    { var id  =   ion.hasOwnProperty ('re')
              ?   ion.re.id
              :  (ion.re = {id: void 0}).id

      if(id || isFinite (id))
      /*return*/ ion [id]
            ?         id
            :   (ion [id] = ion.re).id
            ;

      for (var word in ion)
        if (~ word.search (/@/))
          { var    re  = ion [id = ion.re.id = word]
          ; typeof re == 'object'
              &&  (ion .re = re)
              && !('id' in   re)
              &&  ( re .id = id)
        //; return id
          }

      ion.re
      = { id: ion.re.id ||  ''
        , im: ion.re.im ||  ''
        , of: ion.re.of || ['']
        , as: ion.re.as || ['']
        , ax: ion.re.ax ||  {}
        , by: ion.re.by || ['']
        , on: ion.re.on ||   0
        , to: ion.re.to ||   0
        , at: ion.re.at ||   0
        , if: ion.re.if || ['']
        , is: ion.re.is || [""]
        , ex: ion.re.ex ||  {}
        , toString: checksum
        , valueOf : checksum
        }

      function
      checksum ()
        { var                 checksum
          with   (this)       checksum
            = id + '' + im  + String (of)       + String (as)
                            + String (ax)       + String (by)
            + on + to + at  + String (this.if)  + String (is)

        //console.debug (checksum)
          return this.ex.checksum = checksum
        }

      if (id = ion.re.id) return id

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