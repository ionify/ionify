;
~
{ re:
    { id:  're.id@ionify'
    , of: ['core', 'public', 'sion', 'api']
    , as: {sion:-0.001, sensation:-0.001, convention:-0.001}
    , do: {'next.id@ionify':true}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -24.200709
    , to:  -18.57830919
    , at:  - 0.053
    , is:
        [ "ensuring that all sensible ai: active-information have an re.id"
        , "ensuring that all nested sensible ai have their parent's domain"
        , "setting an object's re.id value as a member mapped to its object re"
        , "setting missing re.id via ~next.id when possible"
        , "generating sequential alpha-numeric ids when ~next.id is unavailable"
        , "generating ~next.id-opposite-range ids to delay their overlap"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , read: 'https://read.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/id.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/id.js'
        , talk: 'https://talk.ionify.net/'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "MUST right ion[id] = ion.re logic enabling ~on:id@...,id@...:action."
        , "want auto-populating re.on.to.at.as.do from compound re.id 🙇🏾‍♂️ה🤲🏾!"

        , "PLAN to have top-level-ids reference entire ion not just its re & "
        + "this requires re@, ~find, ~share & ~link's compatibility with that."

        , "like re.id.toString() & re.id.domain.toString() being their .text's"
        , "like re.id.text:name[.|-]version@domain & re.id.domain.text:@domain"
        , "like re.id.name:name                    & re.id.domain.name: domain"
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

      var next
        = {next:named, id:ion}

      ion.re.id
        || (ion.next && ion.id)
        ||  ion.debug
        ||  (id.next
                ?  id.next (next)
                : (id.next = id.with.the && id.with.the.tools && id.with.the.tools.next_id)
                  ?  id.next (next)
                  : ~next)

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
    : /@((.+)\.(.+\..+))$|@(.*)$|^[^@]+$/
    ,
  d0main :function
  domain (ion)
    { var sense       = (this.d0main && domain === this.d0main)
                      ?  this
                      : domain.with.its
        , id          = String (ion.re.id)
        , dOmain      = {}
        , found       = id.match (sense.domainParser)
        ; dOmain.full = found [0] // parse the ion's domain name
        ; dOmain.subs = found [2] || ''
        ; dOmain.name = found [1] || found [4] || ''
        ; dOmain.base = found [3] || dOmain.name
        ; ion.re.id   = id  = {name:id, domain:dOmain/*, __proto__:String.prototype*/}
        ; id.valueOf  =
          id.toString =
          id.domain.valueOf  =
          id.domain.toString = sense.string

      var sion_domain =    ion.with   &&   id.domain.name == ''
        ; sion_domain && (sion_domain =    ion.with.its   || ion.with.my)
                      && (sion_domain =   sion_domain.re)
                      && (sion_domain =   sion_domain.id)
                      && (sion_domain =   sion_domain.domain)
                      && (sion_domain =   sion_domain.name  && sion_domain.full)

      ;;  id.domain.name == ''        //🙇🏾‍♂️ blank-domain ions, whose parents
      &&  sion_domain                 //👨🏾‍🏫 have non-blank domains, will set
      && (delete ion[id.name])                    //👨🏾‍💻 their domains to the
      && (ion.re.id.name = id.name + sion_domain) //👨🏾‍💻 parent's domain 🤲🏾
      && (id = sense['*'](ion))                   //👨🏾‍💻 via recursion ✅🔁✅

      Object.setPrototypeOf (id, String.prototype)
      Object.freeze         (id)
      return id
    },

  valueOf:function
  ionify ()
    { this["*"].with = {its:this}
      delete this.valueOf <= this
    }
}
;