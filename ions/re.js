;
~
{ re:
    { id:  're@ionify'
    , re:  're.re@ionify'
    , of: ['core', 'public', 'sion', 'api']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221206
    , at:  -0.1  ||  -0.012 || "re@'s actual version"
    , ax:  -0.09 || [-0.09] || "what will re@ do? thank You 🙇🏾‍♂️🤲🏾 יהוה 🤲🏾👨🏾‍💻"
    , ex: "juss fuh see wah re@ guhn doooo 😅"
    , do:
        [/*'re.my@', 're.id@',    're.im.am@', 're.do.as.of@', 're.by.in@'
        , 're.on.to@', 're.at.ax@', 're.re.it.is.we@', 're.go@', 're.if@'*/
        ],
      as:
        { sion      :-0.001, specification:-0.001
        , sensation :-0.001, convention   :-0.001
        },
      is:
        [ "ionify's convention of ensuring all ions: invoked object notations, "
        + "have a re member with a known & consistent form; visit re.re@ for "
        + "a complete explanation of re & its member specifications."

        , "the foundation for sions: structured ions."

        , "setting missing re & re.id on an object with a domain-named member."
        , "setting missing re on a object."

        , "proposed to ~get all ions needed to define, implement & populate re "
        + "with its members."
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/re.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/re.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WARN that RENAMING re@'s CONVENTION re() WILL DAMAGE re@ AND ionify"
        , "HAVE full re@ specification@ & other re@ notes in re.re@ionify."
        , "WILL migrate re.we have's to re.is & rephrase as present-tense acts."
        , "WILL move all non-trivial member-implementations to respective ions"

        , "plan to have top-level-ids reference entire sion not just its re & "
        + "this requires id@, ~find, ~share & ~link's compatibility with that."

        , "want auto-correcting all sensed re.* values, but only adding re.core"
        , "want auto-generated re.im+if+on+to, re.go.code+test & re.by:caller 🤓"
        , "want re-implemented checksum auto-selecting core [non-object] values"
        , "want cached checksum with 0 problems 😅 vs. re-calculating each time"
        , "want numeric checksum for simple & comprehensive comparison code👨🏾‍🔬"
        , "like checksum as re.at.checksum 👨🏾‍💻"
        , "like multiple sion with exact re.am's for attribution resolution👨🏾‍💻"
        , "like re.re clearly stating the sion's re@ ion 🤓"
        , "know re.im.re can also indicate an re@ expansion@"

        , "have non-ion warn() proof for teaching about malformed re.* values"
        , "have auto-corrected all malformed re.* & notified whenever preserved"
        , "hope auto-correcting & allowing observation helps effective learning"
        , "have auto-inferred re.ax for re.at:-*, e.g: ax:{0:0} <= at:-0.02"
        , "have implemented core sion.re & its checksum:  🙇🏾‍♂️🤲🏾 יהוה 🤲🏾👨🏾‍💻"
        ]
    },

  valueOf:function
  ionify ()
    { var its = this
      ionify.with
      = its['*']['with']
      = its.ax.with
      = its.ex.with
      = its.eq.with
      = its.so.with
      = {its:its,the:{}}

      delete its.valueOf <= its
    },

  on:
 '*',
 '*':function
  re( ion )
    { var its = re.with.its
        , RE

      for (var word in ion)
        if( ~  word.search (/@/))
          typeof( RE    =  ion [word]) == 'object'
            ?   (ion.re =   RE ) && !('id' in  RE) &&
                ( RE.id = word )
            :   ( RE    = void 0)

      RE   || (RE    =        ion.re  || (ion.re= {__proto__:String.prototype}))
      RE.id ? (RE.id = String (RE.id)) : (RE.id =  void 0)
      RE.im ? (RE.im = String (RE.im)) : (RE.im =  '')

      typeof RE.hi == 'boolean' || (RE.hi = RE.hi ? String (RE.hi) : false)
      typeof RE.on == 'number'  || (RE.on = 0.0)
      typeof RE.to == 'number'  || (RE.to = 0.0)
      typeof RE.at == 'number'  || (RE.at = 0.0)

      Array.isArray (RE.of) || (RE.of = RE.of ? [String (RE.of)] : [])
      Array.isArray (RE.by) || (RE.by = RE.by ? [String (RE.by)] : [])
      Array.isArray (RE.if) || (RE.if = RE.if ? [String (RE.if)] : [])
      Array.isArray (RE.is) || (RE.is =         [String (RE.is  || "")])
      Array.isArray (RE.go) || 'object'==typeof  RE.go||(RE.go  =  [RE.go||''])

      its.ex (RE)
      its.ax (RE)
      its.so ({re:RE, bit:'as'})
      its.so ({re:RE, bit:'do'})
      its.eq (RE)

      Object.setPrototypeOf (RE, String.prototype)
      Object.seal           (RE)  //muse 🤔 prevents re.with, wanted or not?...
    },

  eq:function
  eq(RE)
    { var members = Object.entries ? 'entries' : 'keys'
        , value

      RE.toString =
      RE.valueOf  = function checksum ()
        { if (value)  return value

          with (RE)
            value =
            [ String (of)   , String (Object [members] (as))
            , String (by)   , on, to, at  //🚨these may differ🤔
            , String (RE.if), String (Object [members] (RE.do))
            , String (is)
            ].
          join ('...')

          debugging && debug ({debug:['checksum', RE.id, value]})
          return value
        }

      var via       =   eq.with
        , debug     =   via.the && via.the.tools && via.the.tools.debug
        , enabled   =   via.our && via.our.logging && via.our.logging.debug
        , debugging =  (debug && enabled) || (debug = Object, false)
      //WANT 🤔 to eliminate 🚫 doing 🔁 all👆🏾the👆🏾above 🔁 over 😓 & 😓 over
  },

  warning:
    { as: "re.as should be a   {specification@: version@|true|false, ...} object"
    , ax: "re.ax should be a         {version@: version@, ...}            object"
    , do: "re.do should be a  {identification@: version@|true|false, ...} object"
    , ex: "re.ex should be an {} object"
    },

  so:function
  so( fix )
    { var warning = so.with.its.warning
        , RE      = fix.re
        , bit     = fix.bit
        , it      = RE [bit]
        , VERSION = (/(\w+(\.\w+)*)(\.(\d+(\.\d+)*)|(-\d+(\.\d+)*))/)
        , version

      'string' == typeof it && (it = RE [bit] = it.split(' '))

      Array.isArray  (it)

        ? it.forEach
              (function next (element)
              {   version = element.match (VERSION)
              ;
              ;   version
                    && (element =   version [1])
                    && (version = +(version [4]  || version [6]))
              ;
              ;   it [element] = version !== null ? version : true
              })

        : typeof    it  == 'object'
              ||  ( it  &&                 (RE.ex[bit]  = it)
                  ,(RE   [bit] =  {})
                  , RE.ex[bit] && (RE[bit] [RE.ex[bit]] = true)
                  )

      RE.ex[bit]
      && so.with.the.tools
      && so.with.the.tools.warn.with
      && so.with.the.tools.warn ({warn: [!0, warning [bit], RE.id, RE]})
    },

  ax:function
  ax( RE )
    { var warning = ax.with.its.warning

      'object' == typeof RE.ax
        || (RE.ax && (RE.ex.ax = RE.ax)
        ,  (RE.at < 0)
        ?  (RE.ax = {[Math.abs( Math.ceil( RE.at))]
                    : Math.abs( RE.at) - 1 > 0 || 0
                    })
        :   RE.ax = {})

      RE.ex.ax
        &&  ax.with.the.tools
        &&  ax.with.the.tools.warn.with
        &&  ax.with.the.tools.warn ({warn: [!0, warning.ax, RE.id, RE]})
    },

  ex:function
  ex( RE )
    { var warning = ex.with.its.warning

      typeof  RE.ex == 'object'
          || (RE.ex  =  RE.ex ? {ex:RE.ex} : {})

      RE.ex.ex
        &&  ex.with.the.tools
        &&  ex.with.the.tools.warn.with
        &&  ex.with.the.tools.warn ({warn: [!0, warning.ex, RE.id, RE]})
    }
}
;