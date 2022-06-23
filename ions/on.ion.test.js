;
~
{ re:
    { id:  'on.ion.test@ionify'
    , of: ['tests']
    , as: ['examination']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220623
    , at:  -0.03
    , is: "testing js ion via hip-hop: handled-in-place & handled-on-prototype"
    , we:
        [ "will test ionify hop     ions"
        , "will test ionify hip-hop ions"
        ]
}   }

~
{ valueOf:function
  hip ()
    { ~{log: "✅ ion hip: handled-in-place"}
}   }


~
{ valueOf :function
  hip ()
    { var Objects = Object.prototype

      function hop ()
        { restore  ()
        ~ {log: "✅ ion hop: handled-on-prototype"}
        }

      function restore ()
        { Objects.valueOf = restore.hop
        }

      restore.hop =
      Objects.valueOf
      Objects.valueOf = hop
    ~ {}
}   }

~
{ valueOf :function
  hiphop  ()
    { ~{log: "✅ ion hip+hop: coexists hip: handled-in-place     with hop: handled-on-prototype"}
}   }

~
{ valueOf :function
  hip ()
    { var Objects = Object.prototype

      function hip ()
        { ~{log: "✅ ion hip-hop: replaces hip: handled-in-place     with hop: handled-on-prototype"}
        }

      function hop ()
        { restore  ()
        ~ {log: "✅ ion hip-hop: replaces hop: handled-on-prototype with hip: handled-in-place"}
        }

      function restore ()
        { Objects.valueOf = restore.hop
        }

      restore.hop =
      Objects.valueOf
      Objects.valueOf = hop
      delete this.valueOf
    ~ this
      this.valueOf = hip
    ~ this
}   }

;