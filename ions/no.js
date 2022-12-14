;
~
{ re:
    { id:  'no@ionify'
    , of: ['core','public','api']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , as: {sensation:-0.001, composition:-0.001, specification:-0.001}
    , on:  -4.200709
    , to:  -8.20221206
    , at:  -0.052
    , is:
        [ "ionify's public ~on.no action"
        , "disabling all reactions to the specified sensation"
        , "disabling the convention with the specified reaction"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/no.test.js'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/no.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "MUST 👨🏾‍💻 enable deactivating any & all observation@s, aka ~on:Type's"
        , "MUSE 🤔 if all reactions are removed, also remove known words?"
        , "WARN 🚨 removing known words before all sensations disables remaining"
        , "NOTE 💡 it may be wise & prudent to keep known words for cap context"
        , "like 🧹 noting senseless known words for removal for 🧹+⏩ performance"
        , "like ⏩ that removing known words hastens sensation detection"
        , "LIKE 🧹 noting empty reaction spots & refilling via ~on vs by .push()"
        , "MUSE 👍🏾{no:act, on:'term'} | 🤔{no:{term:act} | ~{on:'term',dont:act}"
        , "LIKE 🤓 how ~{no:{term:act}} enables deactivating multiple sensations"
        , "like 🤔 the idea of resolving ~{no: 'with.its:my@this?'} for on:[,,,]"
        ]
    },

  on:
    [['no','on']]
    , 'no on'
    : 'no'
    ,

  no :function
  no (sensation)
   {  var our = no.with.our
        , on  = String (sensation.on)
        , No  =         sensation.no

      if (!No && !('no' in sensation)) return sensation

      // clear ~on:*
      var does       = our.does
        , convention = does[on]
        ;
      if( convention || (on in does))
        { does  [convention] = null
        ; delete   does [on]
        }

      // clear ~on:name
      var words       = our.known
        , sensations  = our.senses
        , reactions   = sensations[on]
        , removed     = 0

      if (!reactions && !(on in sensations)) return

      for
        ( var R  =  reactions.length
        ;     R --
        ; No   ===  reactions[R] && (reactions[R] = null)
        , null ===  reactions[R] &&  removed++
        );

      removed - reactions.length          || delete sensations [on] //&&
    //words[on] && words[on].length == 1  && delete      words [on]
    //WARN! 🚨removing☝🏾known☝🏾words before all👆🏾sensations👆🏾disables😬remaining🚨
    }
}
;