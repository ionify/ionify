;
~
{ re:
  { id:  'on.do.test@ionify'
  , is:  'examination'
  , by: ['mike.lee', 'team']
  , on:  -4.200709
  , to:  -7.20201031
  , at:  -0.1
  , it:
      [ "tests ionify's ~on.as.has.id.is.do.no actions"
      ],
    we:
      [ "were examining ~on.as ¿partial 🐛 matching?"
      , "must ..."
      , "like ..."
      , "have ..."
      , "wont ..."
      ]
  },

  do:
    [ "Make ~on.as.has.id.is.do.no sensors"
    , "Test ~on.has.do"
    , "Test ~on. as.do"
    ],

  "Make ~on.as.has.id.is.do.no sensors":
    function on_do_test_setup ()
      { +   {on:'ion',  as:[], do:Object, id:!1, link:!1}
        |   {on:'ion',  as:[], no:Object, id:!1, link:!1}
        |   {on:'ion', has:[], no:Object, id:!1, link:!1}
        |   {on:'ion',  id:[], do:Object, id:!1, link:!1}
        |   {on:'ion',  id:[], no:Object, id:!1, link:!1}
        |   {on:'ion',  is:[], do:Object, id:!1, link:!1}
        |   {on:'ion',  is:[], no:Object, id:!1, link:!1}
      },

  "Test ~on.has.do":
    function on_has_do_test ()
      { function has (ion) { console.log (`on.has: 👏🏾👨🏾‍💻🎉 ${Object.keys (ion)}`) }
        ~
        {  on: 'ion'
        , has:['this',['is','an'],['on','has'],'test']
        ,  do:  has
        , id:!1, link:!1
        }

        ~   {this:0           , id:!1, link:!1}
        |   {is:0,an:false    , id:!1, link:!1}
        |   {on:0,has:0,test:0, id:!1, link:!1}
        +   {test:0           , id:!1, link:!1}

        ~   {no:has, on:'ion' , id:!1, link:!1}
      },

  "Test ~on. as.do":
    function on_as_do_test ()
      { ~
        { on: 'ion'
        , as:['this','is','an','on','as','test']
        , do:  function (ion) { console.log (`on.as : 👏🏾👨🏾‍💻🎉 ${ion.as}`) }
        , id:!1, link:!1
        }

        ^ {as:['this','is','an','on','as','test']                 , id:!1, link:!1}
        ~ {as:['this'], re:{as:'the real one'}                    , id:!1, link:!1}
        | {as:['this','is','almost','as','test']                  , id:!1, link:!1}
        + {as:['galore','this','is','an','on','as','test','more'] , id:!1, link:!1}
      }
}
;