# ionify

**implicit object notation interfaced for you**, is an [API](https://en.wikipedia.org/wiki/API) for ions

```javascript
~ /example/
+ {on:"ion@domain", do:["some", "things"]}
;
```

## ions

**implicit object notations**, are [expressions](https://en.wikipedia.org/wiki/Expression_(computer_science)) that activate [objects](https://en.wikipedia.org/wiki/Object_(computer_science)) via implicit [type conversion](https://en.wikipedia.org/wiki/Type_conversion)

```javascript
~ /examples/
^ ["aesop's"] * /  stories  /  >> {are:"legend"}
& [ "these" ] + /expressions/  -  {are: "ions" }
;
```

## motivation

Because they enable

+ [collision-free](https://en.wikipedia.org/wiki/Name_collision) [modules](https://en.wikipedia.org/wiki/Modular_programming)
+ [decoupled observation](https://en.wikipedia.org/wiki/Observer_pattern)
+ [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)
+ [event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming)
+ [literate programming](https://en.wikipedia.org/wiki/Literate_programming)
+ & more

And because, it's awesome to find & share beautiful capabilities that have long been possible but undiscovered; **ions** & **ionify** are exactly that 🤓 They've been available in [JavaScript](https://en.wikipedia.org/wiki/JavaScript) since [1997](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf), possibly even [1995](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html), but remained unknown until discovered in [2007](https://github.com/ionify/about/history.md#discovery) & publicly shared in [2009](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange) & [2015](https://github.com/ionify/jems/blob/24ab93d910334e3bbe05b72869cbb4fd81639e10/about/jems.md) by [Michael Lee](http://twitter.com/iskitz).


## discovery

In 2003, Michael created **ajile**: **[a]synchronous javascript importing & loading extension**, to bring a browser-compatible, Java-like, module system to the web. **ajile** achieved this via dynamic script insertion which enabled fetching scripts across domains 👏🏾🤓

In 2007, [```JSON```](https://en.wikipedia.org/wiki/JSON) was becoming a popular alternative to [```XML```](https://en.wikipedia.org/wiki/XML) for web-based data interchange. Michael was determined to enable fetching & interacting with ```JSON``` via [**ajile**](http://ajile.net) to benefit from its cross-domain fetching capability, an advantage over [```XMLHttpRequest```](https://en.wikipedia.org/wiki/XMLHttpRequest), the popular but [same-origin-policy](https://en.wikipedia.org/wiki/Same-origin_policy)-limited alternative available at the time 🤔

Unfortunately, ```JSON``` fetched via **ajile** was programmatically inaccessible & its object literal form generated syntax errors for any ```JSON``` that contained 2 or more name-value pairs 😞

A workaround existed in [```JSONP```](https://en.wikipedia.org/wiki/JSONP), but it required wrapping ```JSON``` in a ```function``` call or padding it with a ```var``` assignment 👎🏾

Fortunately, Michael truly believed **impossible is nothing** & diligently worked to find a solution 👨🏽‍💻 Success came when he discovered via experimentation that it was possible to interface with anonymous objects via interaction with & activating of their type conversion! 👏🏾🤓

```javascript
Object.prototype.valueOf =
  function onObject ()
    { // Success! this.own == "data"!
    }
    
~ {anonymous:"object's", own:"data"}
```

That was as close to ```JSON``` as he could hope to get; a single-character prefix of ```~```, ```+```, or ```-``` 👌🏾🙌🏾


After 2 years of experimentation & implementation, Michael publicly introduced his cross-domain ```JSON```-fetching solution as [**jsonXD**](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange) at the 2009 [Ajaxian](http://web.archive.org/web/20090916010056/http://ajaxexperience.techtarget.com:80/conference/html/speakers.html#MLee) web developer conference 🎉


## today

**jsonXD** has become **ions** & **ionify**.

**ions** are a named, defined & [demonstrated](http://ionified.net/) software design pattern & **ionify** is implemented as a pre-release JavaScript API that enables

+ fetching, observing & interacting with anonymous & identified objects
+ creating domain-specific languages
+ & writing literate programs


## tomorrow

We hope to see **ionify** implemented in other languages that enable interfacing with objects during their type conversion. Java & Python are two we've already experimented with & confirmed can do this.

Looking ahead, **ionify**'s JavaScript API will be developed to enable

+ fetching in all host environments
+ authenticating ions
+ automating ion discovery, assessment & substitution
+ & programming with natural languages

We hope these developments will make software development more accessible to every being capable of expressing ideas.