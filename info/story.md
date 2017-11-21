# ionify's tale


Finding beautiful capabilities hidden in plain sight is thrilling 🎉 Realizing they've existed for decades is humbling 🙇🏾 Sharing them is enlightening 🖤

This is the story of **ionify**, one such capability's journey through time.


## decades

One to discover, another to embrace.

In **1997**, [JavaScript's](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html) first language specification was [published](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf) 👏🏾 In **2007**, [Michael Lee](https://github.com/iskitz), discovered a capability within JavaScript that he named [**jsonXD**](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange): **json cross-domain** 👨🏾‍💻 In **2017**, Michael named & shared **jsonXD's** core concepts as **[ion](https://github.com/ionify/ionify/blob/public/info/ion.md): implicit object notation** & **[ionify](https://github.com/ionify/ionify/): ions invented for you** 🎉


## details

In 2003, Michael created **[ajile](http://ajile.net): [a]synchronous javascript importing & loading extension**; a Java-like module system for the web that enabled fetching scripts across domains 🤓

```javascript
;
Namespace ("my.space")
Import    ("some.needed.Thing")
ImportAs  ("some.useful.Thing", "Thing2")
Load      ("http://some.remo.te/script.js")

my.space.Module
= function Module ()
    { var thing1 = new Thing ()
        , thing2 = new Thing2()
        ;
    //my module's remaining code goes here
    }
;
```

### json

In 2007, [JSON](https://en.wikipedia.org/wiki/JSON) was becoming a popular web-based data interchange alternative to [XML](https://en.wikipedia.org/wiki/XML). Michael recognized this and 💡 was determined to enable fetching and interacting with JSON via **ajile** to benefit from **ajile's** cross-domain fetching capability, a key limitation of the popular, but [same-origin-policy-limited](https://en.wikipedia.org/wiki/Same-origin_policy), [`XMLHttpRequest`](https://en.wikipedia.org/wiki/XMLHttpRequest) API available at the time.

Unfortunately, **ajile**-fetched JSON, was programmatically inaccessible and its object literal form generated syntax errors 😞

```javascript
Load ("http://some.static.remo.te/json.data.js");

// JSON response

  { "remote"      : "request"
  , "responds"    : "with this"
  , "inaccessible": "JSON which"
  , "generates"   : "a Syntax Error"
  , "when loaded" : "as JavaScript"
  }
```

### jsonp

[JSONP](https://en.wikipedia.org/wiki/JSONP) provided an alternative, but required wrapping JSON in a `function` call or padding it as a variable assignment. Close, but still too removed from valid JSON syntax 🤔

```javascript
Load ("http://some.dynamic.remo.te/json?call=on");

// wrapped-function JSONP response

   on ({ "remote"        : "request"
       , "responds"      : "with this"
       , "evaluated"     : "JSON"
       , "passed as a"   : "JavaScript Object"
       , "to a possibly" : "missing on() function"
      });

Load ("http://some.static.remo.te/jsonp");

// variable-assignment-padded JSONP response

   var jsonp
     =  { "remote"     : "request"
        , "responds"   : "with this"
        , "evaluated"  : "JSON"
        , "passed as a": "JavaScript Object"
        , "stored in a": "server-defined variable"
        };
```

## discovery

The breakthrough came in 2007 when Michael discovered, via diligent experimentation 👨🏾‍💻, that it was possible to interface with anonymous objects, like JSON, by interacting with and implicitly activating their automatic type conversion! **Impossible is Nothing** 🙌🏾

```javascript
Object.prototype.valueOf           // 1: interface
= function onObject ()            // 3: interact
    { this.id == "anonymous"       // true!
    ; this.is == "data"            // true!
    }

~ {"id":"anonymous", "is":"data"}  // 2: activate
;
```

**A single-character prefix of `~`, `+`, or `-` was key** and as close to JSON as he could hope to get 👌🏾


## development

After an additional two years of experimentation and implementation, Michael publicly introduced this cross-domain JSON-fetching solution as [**jsonXD**](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange): json cross-domain in 2009 at [The Ajax Experience](http://web.archive.org/web/20090916010056/http://ajaxexperience.techtarget.com:80/conference/html/speakers.html#MLee) web developer conference 🎉

Over the next eight years he continued to experiment with, prototype, refine and describe this discovery, 👨🏾‍💻 defining and announcing the concept of [**jems**](https://github.com/ionify/jems/blob/public/about/jems.md): **json-expressed modules** in [2015](https://github.com/ionify/jems/blob/24ab93d910334e3bbe05b72869cbb4fd81639e10/about/jems.md), and [**ion**](https://github.com/ionify/ionify/blob/public/info/ion.md): **implicit object notations** & [**ionify**](https://github.com/ionify/ionify/blob/public/README.md): **ions invented for you** in 2016 and 2017.

## delivery

Today, **[ion](https://github.com/ionify/ionify/blob/public/info/ion.md)**, **[ionify](https://github.com/ionify/ionify/blob/public/README.md)**, and **[jems](https://github.com/ionify/jems/blob/public/about/jems.md)** are **jsonXD's** direct descendants and the basis of the [many kinds](https://github.com/ionify/ionify/tree/public/info/ions) of **ions** now freely available to learn from, apply, and extend.

🖤
[Michael {aka:"🇬🇾Mike"} Lee](https://github.com/iskitz)