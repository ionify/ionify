;
/emoji.test@ionify activating.../

+
{ re:
    { id: "emoji.test.0.1.2017.04.15@ionify"
    , is: "A suite of tests for ionify's emoji actions"
    , by: "mike.lee@ionify"
    , at: "2007.09-04"
    }
}

+['- . 0']
+{log:"ionify disabled so shouldn't see this"}
+['0 . 0']
+{log:"ionify  enabled so should    see this"}
+['0 . -']
+{log:"ionify disabled so shouldn't see this"}
+['0 . 0']

+
/emoji.test@ionify activated!/
;