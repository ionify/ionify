;
~
{ re:
    { id:  'on.errors.test@ionify'
    , of: ['tests','core','conduit','sensation']
    , as: ['examination']
    , by: ['mike.👨🏾‍💻.lee','team']
    , on:  -7.20170414
    , to:  -7.20220627
    , at:  -0.05
    , is:  "ionify's ~errors api examination"
    , go:
        { help: 'https://github.com/ionify/ionify/issues'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.errors.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/on.errors.test.js'
        , deal: 'https://deal.ionify.net/'
        , join: 'https://github.com/ionify/about/tree/public/team'
        , seek: 'https://api.ionify.net/'
        },
      we:
        [ "were ..."
        , "must ..."
        , "like ..."
        , "have ..."
        , "wont ..."
        ]
    },

  do:function
  testErrors ()
    { var errors=
        { error1: "converts messages into error objects"
        , error2: "activates an obtrusive error"
        }

    ~ {errors: errors}

      typeof errors.error1 == 'object'
        ? ~{log  : "✅ ~errors:       "+ errors.error1.message}
        : ~{error: "❌ ~errors:       "+ errors.error1, halt:false}

      try
        {  errors.error2
        &  {error: "❌ ~errors.error: "+ String (errors.error2), halt:false}
        }
      catch (err)
        {
        ~  {log  : "✅ ~errors.error: "+ String (err.message)}
        }
    }
}
;