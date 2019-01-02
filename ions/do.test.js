;
~
{ re:
    { id:  'do.test@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20190102
    , at:  -0.1
    , it: "tests ionify's ~do actions"
    }
}

+
{ do: 'hey'
, hey:
    function hi ()
      { +{log:"✅ ~do:'alias':Function"}
      }
}

+ {do: {log:"✅ ~do: {}"}}
+ {do:'went', went:{log:"✅ ~do:'alias':{}"}}
+ {do: null}
;
