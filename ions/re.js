;
~
{'re@ionify':
    { of: ['core','public','sion','api']
    , do: ['re.id', 're.of', 're.on.to', 're.at.ax', 're.hi', 're.we', 're.go']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221110
    , at:  -0.1  ||  -0.005 || "re@'s actual version"
    , ax:  -0.09 || [-0.09] || "what will re@ do? thank You 🙇🏾‍♂️🤲🏾 יהוה 🤲🏾👨🏾‍💻"
    , ex: "juss fuh see wah re@ guhn doooo 😅"
    , as:
        { sion      :-0.001, specification:-0.001, sensation:-0.001
        , convention:-0.001
        },
      is:
        [ "ionify's convention of ensuring all ions: invoked object notations, "
        + "have a re member with a known & consistent form; we've named these "
        + "sions: structured ions."

        , "setting missing re & re.id on an object with a domain-named member."
        , "setting missing re on a object."

        , "proposed to ~get all ions needed to define, implement & populate re "
        + `with its members:

              re.hi.im.id.of.as.by.in.on.to.at.ax.my.am.if.is.ex.we.go.do.it
                .hi hidden.ion boolean | observer.name | observer.id
                .im ~get.s stated ionified module stating fuller re.*
                .id ~get.s stated domain(s) validation if configured
                .of ~get.s stated spaces & links to ion's members
                .as ~get.s stated ai: actions & information types
                .by states ion's creators, authors & contributors
                .in states ion's places where it's created & updated
                .on states when ion was created
                .to states when ion was updated
                .at states current publication & revision version
                .ax states current version's incompatibilities
                .my public & internal api [alias] map with version compatibility
                .am ~get.s stated am: attribution module(s)
                .if states which spaces can interact with ion & how
                .is states description(s) of what the ion is +| does
                .ex shared-space for unregulated non-guaranteed data
                .we states plans, ideas, notes, hopes, wants, & more
                .go states uri links to plan, help, join, deal, code
                .do thing(s) the ion does via one other ion(s)
                .it states descriptive tags to help define the ion

                .an ¿the ion's type(s) but differs from re.as how?
                .be ¿key statements or warnings, some container?
                .hi ¿introduction or welcome message or documentation?
                .me ¿identities, entity resolutions, related ions or entities?
                .no ¿restricted actions & information; re.if | re.ax alternate?
                .ow ¿compilation map of all errors or a finite # rotating set?
                .so ¿...?
                .ok ¿...?
                .ye ¿...?
                .yo ¿...?

              re.core
                .hi.im.id.of.as.ax.by.on.to.at.my.if.is.go.do.ex
                .go: 'license|site uri, email address, or contact'
                  ,  ['license|site uri', 'email address', ...]
                  ,  {chat, code,deal,help,join,plan,seek,test}
                  ,  is augmented by & overrides re.im.go's entries'
                .do: map of versioned ions helping this ion do things

              re.im
                .am.id.is.on.to.at.in.it.we.go
          `
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/re.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/re.test.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://github.com/ionify/about/tree/public/team'
        },
      we:
        [ "WARN that RENAMING re@'s CONVENTION re() WILL DAMAGE re@ AND ionify"
        , "NEED space-shared non-ion warn() & error() transcription 👨🏾‍🏫 tools."

        , "plan to have top-level-ids reference entire sion not just its re & "
        + "this requires id@, ~find, ~share & ~link's compatibility with that."

        , "want auto-correcting all sensed re.* values, but only adding re.core"
        , "want auto-generated re.im+if+on+to, re.go.code+test & re.by:caller 🤓"
        , "want re-implemented checksum auto-selecting core [non-object] values"
        , "want cached checksum with 0 problems 😅 vs. re-calculating each time"
        , "want numeric checksum for simple & comprehensive comparison code👨🏾‍🔬"
        , "like checksum as re.at.checksum 👨🏾‍💻"
        , "like multiple sion with exact re.am's for attribution resolution👨🏾‍💻"

        , "have non-ion warn() proof for teaching about malformed re.* values"
        , "have auto-corrected all malformed re.* & notified whenever preserved"
        , "hope auto-correcting & allowing observation helps effective learning"
        , "have auto-inferred re.ax for re.at:-*, e.g: ax:{0:0} <= at:-0.02"
        , "have implemented core sion.re & its checksum:  🙇🏾‍♂️🤲🏾 יהוה 🤲🏾👨🏾‍💻"
        ]
    },

  on:'*'
    ,

  valueOf:function
  ionify ()
    { var its = this
      ionify.with
      = its['*']['with']
      = its.ax.with
      = its.ex.with
      = its.ok.with
      = {its:its, the:{}}

      its['*'] (its)
      delete    its.valueOf <- its
    },

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

      RE  || (RE    = ion.re
          || (ion.re= {}))

      RE.id ? (RE.id = String (RE.id)) : (RE.id = void 0)
      RE.im ? (RE.im = String (RE.im)) : (RE.im =  ''   )

      typeof RE.hi == 'boolean' || (RE.hi = RE.hi ? String (RE.hi) : false)
      typeof RE.on == 'number'  || (RE.on = 0.0)
      typeof RE.to == 'number'  || (RE.to = 0.0)
      typeof RE.at == 'number'  || (RE.at = 0.0)

      Array.isArray (RE.of) || (RE.of = [String (RE.of || '')])
      Array.isArray (RE.by) || (RE.by = [String (RE.by || '')])
      Array.isArray (RE.if) || (RE.if = [String (RE.if || '')])
      Array.isArray (RE.is) || (RE.is = [String (RE.is || "")])
      Array.isArray (RE.go) || 'object'==typeof  RE.go || (RE.go = [RE.go||''])

      /*temporary👇🏾proof-of-concept👇🏾work-around*/
      RE.id == 'logger@ionify' && !re.with.the.tools && (re.with.the.tools =ion)
      /*temporary☝🏾proof-of-concept☝🏾work-around*/

      its.ex (RE)
      its.ax (RE)
      its.ok ({re:RE, bit:'as'})
      its.ok ({re:RE, bit:'do'})
      its.eq (RE)
    },

  eq:function
  eq(RE)
    { RE.toString=
      RE.valueOf=function checksum ()
        { if ('checksum' in RE.ex) return RE.ex.checksum

          with(RE) RE.ex. checksum =
            [ id,     im, String (of)   , String (Object.keys (as))
            ,             String (by)
            , on, to, at, String (RE.if), String (Object.keys (RE.do))
            ,         hi, String (is)
            ].
          join('...')

      /* /console
          .debug (RE.ex.checksum)//*/
          return  RE.ex.checksum
        }
    },

  warning:
    { as: "re.as should be a   {specification@: version@|true|false, ...} object"
    , ax: "re.ax should be a         {version@: version@, ...}            object"
    , do: "re.do should be a  {identification@: version@|true|false, ...} object"
    , ex: "re.ex should be an {} object"
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
    },

  ok:function
  ok( fix )
    { var warning = ok.with.its.warning
        , RE      = fix.re
        , bit     = fix.bit
        , it      = RE [bit]

      Array.isArray  (it)

        ?   it.forEach
                (function next (element)
                {           it [element] = true
                })

        :   typeof       it  == 'object'
            ||  (        it  &&          (RE.ex[bit]  = it)
                ,(RE   [bit] =  {})
                , RE.ex[bit] && (RE[bit] [RE.ex[bit]] = true)
                )

      RE.ex[bit]
      && ok.with.the.tools
      && ok.with.the.tools.warn.with
      && ok.with.the.tools.warn ({warn: [!0, warning [bit], RE.id, RE]})
    }
}
;