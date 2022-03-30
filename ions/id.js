;
~
{ re:
    { id:  'id@ionify'
    , of: ['core','api']
    , as: ['convention', 'sensation','sion']
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20221030
    , at:  -0.045
    , is:
        [ "ensuring that all ionified objects have an re.id."
        , "setting an object's re.id value as a member mapped to its object re."
        , "setting missing re.id via ~next.id when possible."
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/id.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/id.test.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://github.com/ionify/about/tree/public/team'
        },
      we:
        [ "plan to have top-level-ids reference entire ion not just its re & "
        + "this requires re@, ~find, ~share & ~link's compatibility with that."

        , "have ID.nextID's range as opposite next.id's to minimize overlap."
        , "like ions with old ids being updated once next.id's available."
        , "like id.domain string via id:{domain:'domain',toString:'id@domain'}"
        , "like linking this ion although it doesn't currently rely on it"
        ]
    },

  on:'*',
     '*':'id'
        ,

  id:function
  id( ion )
    { var ID = ion.re && ion.re.id

      if(ID || isFinite (ID))
          return ion [ID]
            ?         ID
            :   (ion [ID] = ion.re).id
            ;

      if (ID = ion.re.id) return ID

      var named
        = (ion.debug ||  ion.log || ion.error || ion.info || ion.warn)
        ? 'log' : 'ion'

      ion.re.id
        ||  (ion.next && ion.id) || ion.debug
        || ~{next:named, id:ion}

      ion.re.id
        || (ion.re.id = named/*----*/+ '.' +/*----------------------------------*/
         /*|*/          ( id.nextId  ? --id.nextId                              //
         /*|*/                       :  (id.nextId = Number.MAX_SAFE_INTEGER    //
         /*|*/                                    || 9007199254740991           //
           )/*--------*/)/*-----------*/)/*-------------------------------------*/

      ion [ID = ion.re.id]  ||  (ion [ID] = ion.re)
      return ID
    },

  valueOf:function
  ionify ()
    { ionify.with = this.id.with = {its:this}
    ; delete this.valueOf <- this & {get:'next.id@ionify'}
    }
}
;