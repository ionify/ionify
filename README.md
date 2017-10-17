# ionify

**implicit object notation invented for you**, enables extending a language's vocabulary and grammar via
[ion](https://github.com/ionify/ionify/blob/public/info/ion.md) expressions.


```javascript
~ / example: Defining a doSomething expression /
+ / that'll locate and do two things named     /
+ / "some" and "thing" if found within a       /
+ / doSomething expression's ion.              /

+ {on:"doSomething", do:["some", "thing"]}

~ /example: A doSomething expression/

+ { doSomething: "fun"
  , some : function() { ~/do some thing/      }
  , thing: function() { ~/do some thing else/ }
  }
;
```


## why

**To make digital communication via programming more expressive and accessible** . . . and . . . because it's awesome to find and share undiscovered capabilities that enable incredible things. **[ionify's](https://github.com/ionify/ionify/)**
enabled by [JavaScript](https://en.wikipedia.org/wiki/JavaScript) capabilities existent since
[1997](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf)
(possibly
[1995](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html)) though undiscovered until [2007](https://github.com/ionify/ionify/blob/public/info/story.md) by
[Michael Lee](http://twitter.com/iskitz).


### modules

**ions** can define [modules](https://en.wikipedia.org/wiki/Modular_programming)
:

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

JavaScript's prototypal inheritance & ability to interface with objects during
their automatic type conversion enables observing **ions** without directly
referencing them. This enables highly decoupled ion observation & interaction.

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

Literal ions,
[**lions**](https://github.com/ionify/ionify/blob/public/info/ion.md#form),
i.e. `~/ / + [ ] & { }`, avoid
[name collisions](https://en.wikipedia.org/wiki/Name_collision) by encapsulating
their
[identifiers](https://en.m.wikipedia.org/wiki/Identifier#In_computer_languages).

Multiple **lions** with exact internal identifiers can simultaneously coexist
within a single
[execution context](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-execution-contexts)
because they're anonymous objects that can be individually observed & inspected.


```javascript
~
{ on: "my.ion@"
, do:
    function confirm (ion)
      { /This method's called for each ion with/
      + /an id matching "my.ion". It confirms  /
      + /the ion's developer before...         /

      ; if (ion.re.by != "a.developer") return

      ~ /...using it./
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

Create your own language(s). **ions** can define and map terms to any behavior. This means
being able to define your own vocabulary and language to perform one or more actions. **ionify** provides an API to simplify doing this:

```javascript
~
{ on: ["ask", "say"]
    ,
  ask:
    function ask (question)
      { ask.ion.answer = confirm (question)
      }
    ,
  say:
    function say (something)
      { alert (something.replace (/\[answer]\]/g, say.ion.answer)
      }
}
+
{ ask: "Hi! What's your name?"
, say: "Hi [answer]!"
, ask: "How come?"
, say: "..."
}
;
```

### [literate programming](https://en.wikipedia.org/wiki/Literate_programming)

### & much more.


## how

**ions** & **ionify** exist in languages that offer  the ability to interface
with objects during their automatic type conversion. Learn more
[here](https://github.com/ionify/ionify/blob/public/info/ion.md).


## who

**[team ionify](https://github.com/orgs/ionify/people)** has developed &
distributed **ions** & **ionify** ever since their initial
[discovery, definition & development](https://github.com/ionify/ionify/blob/public/info/story.md)
by [Michael Lee](http://twitter.com/iskitz) in 2007.

We **invent optimized,
natural interfaces, for you** & **aspire** to create **accessible,
[simple](https://rawgit.com/ionified/anemojii-ions.iskitz.net/public/),
performant,
[intuitive](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.play.js)
& reliable [experiences](http://ionified.net)** for everyone.


## now

**ion** is a defined and [demonstrated](http://ionified.net/) software design
pattern and **ionify** is an implemented pre-release JavaScript API that enables

+ fetching, observing & interacting with **ions**
+ event-driven programming
+ domain-specific language creation
+ & writing literate programs


## next

We hope to see **ionify** implemented in more languages that enable interfacing
with objects during type conversion.
[Java](https://github.com/ionify/ideas/blob/public/java/src/net/ionify/java/Hello.java)
&
[Python](https://github.com/ionify/ideas/blob/public/python/ion.proof.py)
are two we've already
experimented with & confirmed capable.

Looking ahead, **ionify's** API will be developed to enable

+ fetching in all JavaScript host environments
+ authenticating ions
+ automating ion discovery, assessment & substitution
+ & programming via natural language

We hope these improvements increase software development's accessibility for
every being capable of expressing ideas.

❤️ [team ionify](https://github.com/orgs/ionify/people)