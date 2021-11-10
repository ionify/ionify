;
~
{ re:
    { id:  'on.ion.test@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20211110
    , is:  -0.02
    , it: "tests js' ion hip-hop: handled-in-place & handled-on-prototype implementation"
    }
}

~
{ valueOf:
    function hip ()
      { console.log ("✅ hip: handled-in-place ion")
      }
}

~
{ valueOf:
    function hip     ()
      { var Objects = Object.prototype

        function hop ()
          { restore  ()
          ; console.log ("✅ hop: handled-on-prototype ion")
          }

        function restore ()
          { Objects.valueOf = restore.hop 
          }

        restore.hop =
        Objects.valueOf
        Objects.valueOf = hop
      ~ {}
      }
}

~
{ valueOf:
    function hiphop ()
      { console.log ("✅ hip+hop: handled-in-place coexists with hop: handled-on-prototype")
      }
}

~
{ valueOf:
    function hip     ()
      { var Objects = Object.prototype

        function hip ()
          { console.log ("✅ hip-hop: ion replaces hip: handled-in-place     with hop: handled-on-prototype")
          }

        function hop ()
          { restore  ()
          ; console.log ("✅ hip-hop: ion replaces hop: handled-on-prototype with hip: handled-in-place")
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
      }
}

;