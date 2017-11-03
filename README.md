# ionify

**implicit object notations invented for you** is a flexible, unobtrusive & new way to create expressive code.


```javascript
~{say:"hi!"}  + /outputs "hi!"/;
```

**ionify**, and everything it enables, is supported by **[ion](https://github.com/ionify/ionify/blob/public/info/ion.md): implicit object notation**, an incredibly versatile capability [discovered](https://github.com/ionify/ionify/blob/public/info/story.md) by
[Michael Lee](http://twitter.com/iskitz) in 2007.

## what

### modules

**ionify** can define [modules](https://en.wikipedia.org/wiki/Modular_programming)
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


### no name-collisions

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

```javascript
~
{ on: "event"
, do:
    function someAction (ion)
      { ~{log: ion.event}       + /logs "it happened!"/
      }
}
+
{ event: "it happened!" }       + /activates an event/
;
```


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

See [this example](https://github.com/ionified/anemojii-ions.iskitz.net/blob/public/index.js).


### & much more.



## who

**[team ionify](https://github.com/orgs/ionify/people)** has developed &
distributed **ions** & **ionify** since their initial
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