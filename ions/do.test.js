;
~
{ re:
    { id: 'do.test@ionify'
    , is: "A suite of tests for ionify's +do actions"
    , by: 'mike.lee@ionify'
    , on: -4.200709
    , to: -7.20170713
    , at: -0.1
    }
}

+
{ do: 'hey'
, hey:
    function hi ()
      { +{log: hi.ion.do + " did log"}
      }
}

+ {do: {log: "¡hey!  do  works!"}}
+ {do:'went', went:{log:'¡hey! "do" works!'}}
+ {do:null}
;
