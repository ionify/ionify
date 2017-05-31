# ionify's tale


Finding beautiful capabilities hidden in plain sight is thrilling 🎉 Realizing they've existed across decades is humbling 🙇🏾 Sharing them is enlightening ❤️


## decades

One to discover, another to embrace.

In 1997, JavaScript's first language specification was [published](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf); two years after the language was [announced](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html) 👏🏾

In 2007, ten years later, [Michael Lee](http://twitter.com/iskitz) discovered a capability within JavaScript he named [**jsonXD**](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange): **json cross-domain** 👨🏽‍💻

In 2017, after another ten years, Michael identified, named & shared **jsonXD**'s core concepts as **ion: implicit object notation** & **ionify: ions interpreted for you** 🎉

This is a tale of that journey.


## discovery

In 2003, [Michael Lee](http://twitter.com/iskitz) created **ajile**: **[a]synchronous javascript importing & loading extension**; a browser-based, Java-like, module system for the web that enabled fetching scripts across domains 🤓

In 2007, [`JSON`](https://en.wikipedia.org/wiki/JSON) was becoming a popular web-based data interchange alternative to [`XML`](https://en.wikipedia.org/wiki/XML). Michael recognized this & was determined to enable fetching & interacting with `JSON` via [**ajile**](http://ajile.net) to benefit from **ajile**'s cross-domain fetching capability, an advantage over [`XMLHttpRequest`](https://en.wikipedia.org/wiki/XMLHttpRequest), the popular but [same-origin-policy](https://en.wikipedia.org/wiki/Same-origin_policy)-limited alternative available at the time 🤔

`JSON` fetched via **ajile**, unfortunately, was programmatically inaccessible & its object literal form generated syntax errors for all `JSON` containing 2 or more name-value pairs 😞

[`JSONP`](https://en.wikipedia.org/wiki/JSONP) provided an alternative but it required wrapping `JSON` in a `function` call or padding `JSON` with a `var` assignment 👎🏾

Fortunately, Michael truly believed **impossible is nothing** & diligently worked to find a solution 👨🏽‍💻 Success came when he discovered via experimentation that it was possible to interface with anonymous objects via interaction with & activating of their type conversion! 🤓

```javascript
Object.prototype.valueOf =
  function onObject ()
    { // Success! this.own == "data"!
    }
    
~ {anonymous:"object's", own:"data"}
```

That was as close to `JSON` as he could hope to get; a single-character prefix of `~`, `+`, or `-` 👌🏾🙌🏾


## development

After 2 years of experimentation & implementation, Michael publicly introduced his cross-domain `JSON`-fetching solution as [**jsonXD**](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange) at the 2009 [Ajaxian](http://web.archive.org/web/20090916010056/http://ajaxexperience.techtarget.com:80/conference/html/speakers.html#MLee) web developer conference 🎉

**jems** in [2015](https://github.com/ionify/jems/blob/24ab93d910334e3bbe05b72869cbb4fd81639e10/about/jems.md) by).

## today

**jsonXD** has become **ions** & **ionify** &
**jems** are one of many types of **ions**.
