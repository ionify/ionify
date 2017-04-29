;
~
{ re:
    { id: "layout@info.ionify"
    , is: "ionify's directory layout"
    , by: "mike.lee@iskitz"
    , in: "san-jose.california.usa.earth"
    , at: "2017.04.15-07...03.31-07"
        ,
      stories:
        [ "todo: ..."
        , /note: .test alongside ions develops test-making habit/
        , /note: .test alongside ions highlights missing tests/
        , /note: .re's alongside ions develops doc-writing habit/
        ]
    }

    ,
  is:
    [`
      /api/
        : ionify.node.0.1.js
        : ionify.node.js
        : ionify.node.src.js
        : ionify.web.0.1.js
        : ionify.web.js
        : ionify.web.src.js

      /ids/
        : mike.lee.js
        : team.js

      /ions/
        : do.js
        : do.re.js
        : do.test.js
        : log.test.js
        : method.test.js
        : next.id.test.js
        : next.id.js
        : next.id.re.js
        : node.log.js
        : node.log.re.js
        : node.test.js
        : on.js
        : on.re.js
        : on.aeon.test.js
        : on.error.test.js
        : on.function.test.js
        : on.test.js
        : web.get.test.js
        : web.log.js
        : web.log.re.js
        : web.log.test.js
        : web.re.js
        : web.test.js

      /info/
        : bugs.js
        : ideas.js
        : launch.js
        : layout.js
        : todos.js

      /tools/
        : apis.js           /  api: versioned, minified + source/
        : ids.js            /  ids: makes id.js for each re.by  /
        : re.js             / ions: makes .re   for each ion.js /
        : tests.html        /tests: ionify's web test runner    /
        : tests.js          /tests: makes .test for each ion.js /
        : package.json      /define tools' required node modules/

      ions.js
      node.js
      web.js
      README.md
    `]
}
;