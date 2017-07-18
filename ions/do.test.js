;
/do.test@ionify activating.../

+
{ re:
    { id: "do.test.0.1@ionify"
    , is: "A suite of tests for ionify's +do actions"
    , by: "mike.lee@ionify"
    , at: "2017.07.13-07...2007.09-04"
    }
}

+
{ do: "hey"
, hey:
    function hi ()
      { +{log: hi.ion.do + " did log"}
      }
}

+ {do: {log: "¡hey!  do  works!"}}
+ {do:"went", went:{log:'¡hey! "do" works!'}}
+ {do:null}
+
/do.test@ionify activated!/
;
