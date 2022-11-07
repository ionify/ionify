;
~
{ re:
    { id:  'no@ionify'
    , of: ['core','public','api']
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike👨🏾‍💻lee', 'team✨ionify']
    , as: {sensation:0.001, composition:0.001, specification:0.001}
    , on:  -4.200709
    , to:  -8.20221107
    , at:  -0.049
    , is:
        [ "ionify's public ~on.no action"
        , "disabling all reactions to the specified sensation"
        , "disabling the convention with the specified reaction"
        ],
      we:
        [ "will make a way to deactivate all observation@s, aka ~on:Type's."
        , "like the idea of resolving ~{no: 'this.with'}"

        , "muse ~{on:'term',dont:act} 👎🏾 | {no:{term:act} | {on:'term',no:act} "
        + "~{no:{term:act}} enables deactivating multiple sensations at once 🤓"
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
        , on  = sensation.on
        , No  = sensation.no

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

      //note: if all reactions are removed, also remove known words
      //like: that removing known words hastens sensation detection
      //warn: it may be wise & prudent to keep known words for context

      removed - reactions.length         || delete sensations [on]
      words[on] && words[on].length == 1 && delete      words [on]
   }
}
;