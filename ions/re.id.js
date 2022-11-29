;
~
{ re:
    { id:  're.id@ionify'
    , of: ['core','public','sion','api']
    , as: {sion:-0.001, sensation:-0.001, convention:-0.001}
    , do: {'next.id@ionify':true}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221129
    , at:  -0.051
    , is:
        [ "ensuring that all ionified objects have an re.id."
        , "setting an object's re.id value as a member mapped to its object re."
        , "setting missing re.id via ~next.id when possible."
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/id.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/id.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "have id.nextId's range as opposite next.id's to delay their overlap."

        , "MUST right ion[id] = ion.re logic enabling ~on:id@...,id@...:action."
        , "want auto-populating re.on.to.at.as.do from compound re.id 🙇🏾‍♂️ה🤲🏾!"

        , "PLAN to have top-level-ids reference entire ion not just its re & "
        + "this requires re@, ~find, ~share & ~link's compatibility with that."

        , "like ions with old ids being updated once next.id's available."
        , "like removing anions: anonymous ions' temporary .re.id & .re's? 🤔"
        ]
    },

  on:
 '*',
 '*':function
  id( ion )
    { var sense = id.with.its
        ,    ID = ion.re && ion.re.id

      if(ID || isFinite (ID))
        { ion [ID] || (ion [ID] = ion.re)
          return sense.d0main (ion)
        }


      if (ID = ion.re.id) return sense.d0main (ion)

      var named
        = (ion.debug ||  ion.log || ion.error || ion.info || ion.warn)
        ? 'log' : 'ion'

      ion.re.id
        ||  (ion.next && ion.id) || ion.debug
        || ~{next:named, id:ion}

      ion.re.id
        || (ion.re.id =  named /*-*/+  '.' +/*--------------------------------*/
         /*|*/        (( id.nextId  ||  id.nextId === 0)                      //
         /*|*/                      ? --id.nextId                             //
         /*|*/                      :  (id.nextId =   Number.MAX_SAFE_INTEGER //
         /*|*/                                    ||  9007199254740991        //
           )/*------*/)/*----------*/)/*--------------------------------------*/

      ion [ID = ion.re.id] || (ion [ID] = ion.re)
      return sense.d0main (ion)
    },

  string :  function
  string () {return this.name}
    ,
  domainParser
    : /@(.+)\.(.+\..+)$|@(.+\..+)$|@(.*)$|^[^@]+$/
    ,
  d0main :function
  domain (ion)
    { var sense       = (this.d0main && domain === this.d0main)
                      ?  this
                      :  domain.with.its
        , id          = String (ion.re.id)
        , dOmain      = {}
        ; found       = id.match (sense.domainParser)
        ; dOmain.full = found [0] // parse the ion's domain name
        ; dOmain.name = found [4] || ''
        ; dOmain.subs = found [1] || ''
        ; dOmain.base = found [2] || found [3]
        ; ion.re.id   = id  = {name:id, domain:dOmain/*, __proto__:String.prototype*/}
        ; id.valueOf  =
          id.toString =
          id.domain.valueOf  =
          id.domain.toString = sense.string
      Object.setPrototypeOf (id, String.prototype)
      Object.freeze         (id)
      return id
    },

  valueOf:function
  ionify ()
    { this["*"].with = {its:this}
      delete this.valueOf <- this
    }
}
;