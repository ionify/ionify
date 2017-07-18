~
{ re:
    { id: "emoji.test.0.1@ionify"
    , is: "A suite of tests for ionify's emoji actions"
    , by: "mike.lee@ionify"
    , at: "2017.07.17-07...2007.09-04"
    }
}

~['- . 0']
+{log:"ionify disabled so shouldn't see this"}
+['0 . 0']
+{log:"ionify  enabled so should    see this"}
+['0 . -']
+{log:"ionify disabled so shouldn't see this"}
+['0 . 0']
;