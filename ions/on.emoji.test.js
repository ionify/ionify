;
~
{ re:
    { id:  'on.emoji.test@ionify'
    , of: ['tests','core','emoji','sensation','composition']
    , as: ['examination']
    , by: ['mike.👨🏾‍💻.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220627
    , at:  -0.05
    , is:  "ionify's emoji composition test suite"
}   }

~['- . 0']-   {error: "🚫 ~['- . 0']-  <=  /ionify isn't disabled/", halt:false}
+['0 . 0']+   {log  : "✅ +['0 . 0']+  <=  /ionify is     enabled/"}
-['0 . -']-   {error: "🚫 -['0 . -']-  <=  /ionify isn't disabled/", halt:false}
&['0 . 0']&   {log  : "✅ &['0 . 0']&  <=  /ionify is     enabled/"}