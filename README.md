# ionify

**implicit object notations invented for you**, is an [API](https://en.wikipedia.org/wiki/API) for interacting with [ions](https://github.com/ionify/ionify/blob/public/info/ion.md).

```javascript
~ /example/
+ {on:"ion@domain", do:["some", "things"]}
;
```

## ions

**implicit object notations**, are [expressions](https://en.wikipedia.org/wiki/Expression_(computer_science)) that activate [objects](https://en.wikipedia.org/wiki/Object_(computer_science)) via implicit [type conversion](https://en.wikipedia.org/wiki/Type_conversion).

```javascript
~  /example/  -  /    ions   /
^  ["aesop"]  *  /  stories  /  >>  {are:"ions"}
&  ["these"]  +  /expressions/  <<  {are:"too" }
/  ["write"]  %  /them as you/  |   {see:"fit" }
;
```


## why

Because it's awesome to find & share beautiful, undiscovered, capabilities that've long been possible. The capabilities that enable **[ions](https://github.com/ionify/ionify/blob/public/info/ion.md)** & **[ionify](https://github.com/ionify/ionify/)** were discovered by [Michael Lee](http://twitter.com/iskitz) in [2007](https://github.com/ionify/ionify/blob/public/info/story.md) but have existed within [JavaScript](https://en.wikipedia.org/wiki/JavaScript) since [1997](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf) & possibly since [1995](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html).

Also...


### modules

**ions** can define [modules](https://en.wikipedia.org/wiki/Modular_programming):

```javascript
~
{ re:
    { id: "my.ion.module"
    , by: "a.developer"
    , is: "a simple module example"
    }
    ,
  do:
    function something ()
      { ~/do something when this ion's evaluated/
      }
}
;
```


### [decoupled observation](https://en.wikipedia.org/wiki/Observer_pattern)

JavaScript's prototypal inheritance & ability to interface with objects during their automatic type conversion enables observing **ions** without directly referencing them. This enables highly decoupled ion observation & interaction.

```javascript
~
{ on: "hi"
, hi:
    function hello (ion)
      { /This method's called for each ion with   /
      + /a "hi" property. It then logs hi's value./
      
      + {log: ion.hi}
      }
}
+
{ hi: "I'm an ion!" }
;
```


### collision-free ids

Literal ions, [**lions**](https://github.com/ionify/ionify/blob/public/info/ion.md#form), i.e. `~/ / + [ ] & { }`, avoid [name collisions](https://en.wikipedia.org/wiki/Name_collision) by encapsulating their [identifiers](https://en.m.wikipedia.org/wiki/Identifier#In_computer_languages).

Multiple **lions** with exact internal identifiers can simultaneously coexist within a single [execution context](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-execution-contexts) because they're anonymous objects that can be individually observed & inspected.


```javascript
~
{ on: "my.ion@"
, do:
    function confirm (ion)
      { /This method's called for each ion with/
      + /an id matching "my.ion". It then      /
      + /confirms the ion's developer...       /
      
      ; if (ion.re.by != "a.developer") return
      
      ~ /...before using it/
      + {log: ion.re.is}
      }
}
+
{ re:
    { id: "my.ion"
    , by: "a.developer"
    , is: "a very simple module"
    }
}
+
{ re:
    { id: "my.ion"
    , by: "a.different.developer"
    , is: "another very simple module"
    }
}
;
```

### [event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming)


### [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)

### [literate programming](https://en.wikipedia.org/wiki/Literate_programming)

### & much more


## who

**[team ionify](https://github.com/orgs/ionify/people)** has developed & distributed **ions** & **ionify** ever since their initial [discovery, definition & development](https://github.com/ionify/ionify/blob/public/info/story.md) by [Michael Lee](http://twitter.com/iskitz) in 2007.

We **invent optimized, natural interfaces, for you** & **aspire** to create **accessible, [simple](https://rawgit.com/ionified/anemojii-ions.iskitz.net/public/), performant, [intuitive](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.play.js) & reliable [experiences](http://ionified.net)**
for everyone.


## today

**ion** is a defined & [demonstrated](http://ionified.net/) software design pattern & **ionify** is an implemented pre-release JavaScript API that enables

+ fetching, observing & interacting with **ions**
+ event-driven programming
+ creating domain-specific languages
+ & writing literate programs


## tomorrow

We hope to see **ionify** implemented in more languages that enable interfacing with objects during type conversion. Java & Python are two we've already experimented with & confirmed capable.

Looking ahead, **ionify's** API will be developed to enable

+ fetching in all JavaScript host environments
+ authenticating ions
+ automating ion discovery, assessment & substitution
+ & programming via natural language

We hope these improvements increase software development's accessibility for every being capable of expressing ideas.

❤️ [team ionify](https://github.com/orgs/ionify/people)