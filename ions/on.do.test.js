;
~
{ re:
  { id:  'on.do.test@ionify'
  , is:  'examination'
  , by: ['mike.lee', 'team']
  , on:  -4.200709
  , to:  -7.20201030
  , at:  -0.1
  , it:
      [ " tests ionify's ~on.as.has.id.is.do.no actions "
      ],
    we:
      [ " were just fnishing ~on.has.do "
      , " must ..."
      , " will implement ~on.as.do or ~on.id.do next"
      , " like ..."
      , " have ..."
      , " wont ..."
      ]
  },

  do:
    [ "Test ~on.as.has.id.is.do.no actions"
    ],

  "Test ~on.as.has.id.is.do.no actions":
    function ondo_test ()
      { +   {on:'ion',  as:[], do:Function}
        |   {on:'ion',  as:[], no:Function}
        |   {on:'ion', has:[], no:Function}
        |   {on:'ion',  id:[], do:Function}
        |   {on:'ion',  id:[], no:Function}
        |   {on:'ion',  is:[], do:Function}
        |   {on:'ion',  is:[], no:Function}

        +   {  on: 'ion'
            , has:['this',['is','an'],['on','has'],'test']
            ,  do:  function (ion) { console.log (`on.has: 👏🏾👨🏾‍💻🎉 ${Object.keys(ion)}`) }
            }

        +   {this:0}
        |   {is:0,an:false}
        |   {on:0,has:0,test:0}
        +   {test:0}
  }
}
;