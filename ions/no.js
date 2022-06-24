;
~
{ re:
    { id:  'no@ionify'
    , as: ['sensation']
    , of: ['core','api']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220624
    , as:  -0.044
    , is:
        [ "~on.no which disables a sensation mapped to one or more reactions"
        ],
      we:
        [ "like the idea of resolving ~ {no: 'this.with'}"
        ]
    },

  on:
    [['no','on']]
    , 'no on'
    : 'no'
    ,

  no :function
  nO (sensation)
   {  var our = nO.our
        , on  = sensation.on
        , no  = sensation.no

      if (!no && !('no' in sensation)) return sensation

      // clear ~on:*
      var star = our.does
        , spot = star [on]
        ;
      if( spot || (on in star))
        { star [spot]  = null
        ; delete star [on]
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
        ; no   ===  reactions[R] && (reactions[R] = null)
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