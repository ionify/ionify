;
~
{'re@ionify':
    { of: ['core','public','sion','api']
    , as: {sion:0.001, convention:0.001, sensation:0.001, specification:0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221107
    , at:  -0.1
    , ax:  -0.09 || [-0.09] || "what will re@ do? thank You 🙇🏾‍♂️🤲🏾 יהוה 🤲🏾👨🏾‍💻"
    , ex: "juss fuh see wah re@ guhn doooo 😅"
    , is:
        [ "ionify's convention of ensuring all ions: invoked object notations, "
        + "have a re member with a known & consistent form; we've named these "
        + "sions: structured ions."

        , "setting missing re & re.id on an object with a domain-named member."
        , "setting missing re on a object."

        , "going to ~get all ions needed to define, implement & populate re "
        + `with its members:

              re.im.id.of.as.am.by.in.on.to.at.ax.if.is.go.it.we.ex
                .im ~get's stated ionified module stating fuller re.*
                .id ~get's stated domain(s) validation if configured
                .of ~get's stated spaces & links to ion's members
                .as ~get's stated ai: actions & information types
                .am ~get's stated am: attribution module(s)
                .by states ion's creators, authors & contributors
                .in states ion's places where it's created & updated
                .on states when ion was created
                .to states when ion was updated
                .at states current publication & revision version
                .ax states current version's incompatibilities
                .if states which spaces can interact with ion & how
                .is states description(s) of what the ion is +| does
                .go states uri links to plan, help, join, deal, code
                .it states descriptive tags to help define the ion
                .we states plans, ideas, notes, hopes, wants, & more
                .ex shared-space for unregulated non-guaranteed data

              re.core
                .id.im.of.as.ax.by.on.to.at.if.is.go.ex
                .go: 'license|site uri, email address, or contact'
                  ,  ['license|site uri', 'email address', ...]
                  ,  {chat, code,deal,help,join,plan,seek,test}
                  , is augmented by & overrides re.im.go's entries'

              re.im
                .am.in.it.go.we
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
        [ "WARN that RENAMING re@'s REACTION to re() WILL DAMAGE re@ AND ionify"
        , "NEED space-shared non-ion warn() & error() transcription 👨🏾‍🏫 tools."

        , "plan to have top-level-ids reference entire sion not just its re & "
        + "this requires id@, ~find, ~share & ~link's compatibility with that."

        , "want auto-correcting all sensed re.* values but only adding re.core"
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

  on:'*',
     '*':'Re'
        ,

  Re:function
  re( ion )
    { var RE

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

          typeof RE.on == 'number' || (RE.on = 0.0)
          typeof RE.to == 'number' || (RE.to = 0.0)
          typeof RE.at == 'number' || (RE.at = 0.0)

          Array.isArray (RE.of) || (RE.of = [String (RE.of || '')])
          Array.isArray (RE.as) || (RE.as = [String (RE.as || '')])
          Array.isArray (RE.by) || (RE.by = [String (RE.by || '')])
          Array.isArray (RE.if) || (RE.if = [String (RE.if || '')])
          Array.isArray (RE.is) || (RE.is = [String (RE.is || "")])

/*temporary👇🏾proof-of-concept👇🏾work-around*/
RE.id == 'logger@ionify' && (re/*.with.the*/.tools = ion)
/*temporary☝🏾proof-of-concept☝🏾work-around*/

      'object' == typeof RE.go  || Array.isArray (RE.go)|| (RE.go = [RE.go||''])

      'object' == typeof RE.ex  || (RE.ex =   RE.ex ? {ex:RE.ex}: {})
                                &&  RE.ex.ex
                                &&  re.tools
/*temporary👉🏾proof-of-concept👉🏾*/&&  re.tools.warn.with
                                &&  re.tools.warn ({warn: [!0, "re.ex should be an {} object", RE.id, RE]})

      'object' == typeof RE.ax  || (RE.ax && (RE.ex.ax = RE.ax)
                                ,  (RE.at < 0)
                                ?  (RE.ax = {[Math.abs( Math.ceil( RE.at))]
                                            : Math.abs( RE.at) - 1 > 0 || 0
                                            })
                                :   RE.ax = {})
                                &&  RE.ex.ax
                                &&  re.tools
/*temporary👉🏾proof-of-concept👉🏾*/&&  re.tools.warn.with
                                &&  re.tools.warn ({warn: [!0, "re.ax should be an {} object", RE.id, RE]})

      RE.toString=
      RE.valueOf=function checksum ()
        { with(RE) RE.ex. checksum =
            [ id,     im, String (of)   , String (as)
            ,             String (by)
            , on, to, at, String (RE.if), String (is)
            ].
          join('...')

        //console
        //.debug (RE.ex.checksum)
          return  RE.ex.checksum
        }
    },

  valueOf:function
  ionify ()
    { this.Re(this)
    ; ionify.with = {its:this}
    ; delete this.valueOf <- this//& {get:['id@ionify']}
    }
}
;