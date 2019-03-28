;
~
{ re:
    { id:  'on.ion.test@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -7.20190328
    , is:  -0.1
    , it: "tests js' ion hip-hop: handled-in-place & handled-on-prototype implementation"
    }
}

~
{ valueOf
:   function hip ()
      { console.log ("✅ hip: handled-in-place ion")
      }
}

~
{ valueOf
:   function hip     ()
      { function hop ()
          { restore  ()
          ; console.log ("✅ hop: handled-on-prototype ion")
          }

        function restore ()
          { Object.prototype.valueOf = restore.hop 
          }

      ; restore.hop = Object.prototype.valueOf
      ; Object.prototype.valueOf = hop
      }
}

~
{ valueOf
:   function hiphop ()
      { console.log ("✅ hip: handled-in-place coexists with hop: handled-on-prototype")
      }
}

~ {_tests_:'manual hop: handled-on-prototype implementation'}

;