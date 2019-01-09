;
~
{ re:
    { id:  'do.test@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20190109
    , at:  -0.1
    , it: "tests ionify's ~do actions"
    }
}

+
{ do: 'hey'
, hey:
    function hi ()
      { +{log:"✅ ~do:named:Function"}
}     }

+
{ do:
    function ()
      { +{log:"✅ ~do:Function"}
}     }

+ {do: {log:"✅ ~do:ion:{}"}}
+ {do:'went', went:{log:"✅ ~do:named:ion:{}"}}
+ {do: [ {log:"✅ ~do:[]"} ] }
+ {do: ['aesop'], aesop:{log:'✅ ~do:["aesop"]'}}
+ {do: null}
;
