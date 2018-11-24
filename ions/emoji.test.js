;
~
{ re:
    { id:  'emoji.test@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181123
    , is:  -0.1
    , it:  "is ionify's emoji actions test suite"
    }
}

~['- . 0'] <= {warn:"~['- . 0']  <  /ionify isn't disabled/"}
+['0 . 0'] <= { log:"~['0 . 0']  <  /ionify is     enabled/"}
-['0 . -'] <= {warn:"~['0 . -']  <  /ionify isn't disabled/"}
&['0 . 0']
;