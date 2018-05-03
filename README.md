# [ionify](http://about.ionify.net/)

**ions interpreted for you**, is a flexible, unobtrusive,
natural-language
[api](https://en.wikipedia.org/wiki/Application_programming_interface)
for expressing ideas via
[**ions: invoked object notations**](https://github.com/ionify/about/blob/public/ions/ion.md):

```javascript
~ {log: "hi!"}  <=  /logs hi!/;
```

## why

Because digital expression can and should be as natural as speech & text, and
**ionify** makes exploring what's possible fun.

**ionify** facilitates digitally expressing ideas by enabling the creation of
[domain-specific-languages](https://en.wikipedia.org/wiki/Domain-specific_language) &
interfaces that best suit an individual or group's needs.

**ionify** enables [or will enable]

+ defining languages
+ programming via natural language
+ authenticating ions
+ fetching them & more in all host environments
+ and automating their discovery, assessment & substitution

## how

**ionify's** enabled by
[**ion: invoked object notation**](https://github.com/ionify/about/blob/public/ions/ion.md)
which activates and is enabled by
[**itc: interactive type computation**](https://github.com/ionify/about/blob/public/ions/ion.md#interactive-type-computation).

**ion** is a language-independent
[syntax](https://en.wikipedia.org/wiki/Syntax_(programming_languages))
that enables writing
[data](https://en.wikipedia.org/wiki/Data_(computing)) &
[code](https://en.wikipedia.org/wiki/Source_code)
as independently observable & notifiable
[objects](https://en.wikipedia.org/wiki/Object_(computer_science)).
**itc** is a
[software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern)
that applies various
[programming language](https://en.wikipedia.org/wiki/Programming_language)
capabilities to enable interacting with objects during their type's
[conversion](https://en.wikipedia.org/wiki/Type_conversion) &
[operator overloading](https://en.wikipedia.org/wiki/Operator_overloading)
computations.

**ion** & **itc** together enable infinite definitions, interpretations,
observations & modifications of language. **ionify** will be implemented in all
programming languages that're **ion** & **itc**-capable to facilitate this.
[JavaScript](https://github.com/ionify/ionify/),
[Java](https://github.com/ionify/ideas/blob/public/java/src/net/ionify/java/Hello.java) &
[Python](https://github.com/ionify/ideas/blob/public/python/ion.proof.py)
are three we've already experimented with & confirmed capable.

## who

**[team ionify](https://github.com/orgs/ionify/people)**
has developed and published
[**ion**](https://github.com/ionify/about/blob/public/ions/ion.md),
[**itc**](https://github.com/ionify/about/blob/public/ions/ion.md#interactive-type-conversion) &
[**ionify**](https://github.com/ionify/ionify)
since their initial
[discovery, definition, and development](story.md)
by [Michael Lee](https://github.com/iskitz)
in 2007. We invent optimized, natural, interfaces for you, and aspire to
create accessible,
[simple](https://rawgit.com/ionified/anemojii-ions.iskitz.net/public/),
performant,
[intuitive](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.play.js)
& reliable
[experiences](http://ionified.net) for all ❤️


## what

**ion** and **ionify** enable exploring and experimenting with

+ [domain-specific languages](#domain-specific-languages)

+ [literate](#literate-programming),
  [modular](#modular-programming),
  [event-driven](#event-driven-programming),
  and
  [name-collision-free](#name-collision-freedom)
  programming

+ fetching, [observing](#decoupled-observation),
  and interacting with highly
  [decoupled](#decoupled-observation)
  data and code

+ & [more](https://github.com/ionify/ideas/)


### [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)

**ionify** enables creating language(s) via **ions** that define and map terms to behaviors:

```javascript
~
{ on
:   ['ask', 'say']

, ask
:   function quest (ion)
      { quest.ion.answer = prompt (quest.ion.prepare (ion.ask)) || ''
      }

, say
:   function verbalizat (ion)
      { alert (verbalizat.ion.prepare (ion.say))
      }

, prepare
:   function prepared (quote)
      { return quote.replace (/\[answer\]/g, prepared.ion.answer)
      }
}

~ /These ions can be in a separate file fetched/
| /either locally or remotely...               /
|
+ { say: "👋🏾 Hi!"                              }
| { ask: "What's your name?"                   }
| { say: "Hi [answer]! I'm Math E. Bot 🤓"     }
| { ask: "[answer], what's 2 x 2?"             }
| { say: "[answer]? Really? 🤔"                }
| { ask: "Can I ask you another question?"     }
| { say: 'I thought you\'d say "[answer]" 😉'  }
;
```

See [jeni](https://github.com/ionified/jeni-ions.iskitz.net?files=1)
for an
[in-depth](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.aeons.js)
[exploration](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.play.js)
of ions and natural language.


### [literate programming](https://en.wikipedia.org/wiki/Literate_programming)

*"...a program is best thought of as a web...of simple parts and simple relations between those parts; the programmer's task is to state those parts and those relationships, in whatever order is best for human comprehension" -
[Donald E. Knuth](https://en.m.wikipedia.org/wiki/Donald_Knuth)*

```javascript
~
{ re:
    { id: 'frendlee@ionified.net'
    , is: "a literate & natural language programming exploration"
    , by: 'mike.lee@iskitz'
    , at: '2018.04.28-07...2017.12.08-08'
    , in: 'san-jose.california.usa.earth'
    }

, do:
    [ "say hello"
    , "ask their name"
    , "invite them to play"
    ]

, "say hello"
:   {say: "Hi! I'm Frend Lee!"}

, "ask their name"
:   {ask: "What's your name?"}

, "invite them to play"
:   {ask: "Hi [answer]! Wanna play?!"}
}
;

```

See [anemojii](https://github.com/ionified/anemojii-ions.iskitz.net/blob/public/index.js),
our more in-depth exploration of literate programming.


### [modular programming](https://en.wikipedia.org/wiki/Modular_programming)

*"...a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality." - Wikipedia*

```javascript
~
{ re:
    { id: 'an.ionified.module@doma.in'
    , is: "a basic ion module example"
    , by: 'a.developer@doma.in'
    , at: '2018.04.28-07...2007.09-04'
    }
    ,
  do:
    function something ()
      { ~/do something when evaluating this ion/
      }
}
;
```


### [event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming)

*"...a programming paradigm in which the flow of the program is determined by events such as user actions..., sensor outputs, or messages from other programs/threads." - Wikipedia*

```javascript
~
{ on: 'event'
, do:
    function someAction (ion)
      { ~{log: ion.event} <= /logs "it happened!"/
      }
}

/ This event ion can be in a separate file. It.../
| {event: "it happened!"} <= /activates an event./
;
```


### [decoupled observation](https://en.wikipedia.org/wiki/Observer_pattern#Coupling_and_typical_pub-sub_implementations)

**ionify** uses JavaScript's
[prototypal inheritance](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-objects)
and
[interactive type conversion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber)
to enable observing objects without a direct reference. This enables observing json and other anonymous & named objects:

```javascript
~
{ on: 'hi'
, hi:
    function hello (ion)
      { / This method's called for each ion with/
      | / a "hi" property. It then logs the "hi"/
      | / property's value.                     /
      |
      + { log: ion.hi }
      }
}

~ { hi : "I'm an ion!"} <= /can be in a separate/
+ {"hi": "I'm a json!"} <= /file loaded remotely/
;
```

_fyi: Syntax highlighting issues are due to a
[Github bug](https://github.com/atom/language-javascript/issues/530#issuecomment-341976488)
not **ionify** or its syntax._


### [name collision freedom](https://en.wikipedia.org/wiki/Name_collision)

**ionify** enables observing and distinguishing between identically
identified **ions**.

Anonymous **[lions](https://github.com/ionify/about/blob/public/ions/ion.md#form):
literal ions**, i.e. `~/ / + [ ] & { }`, are anonymous objects that eliminate
name collisions by encapsulating their
[identifiers](https://en.m.wikipedia.org/wiki/Identifier#In_computer_languages).
**ionify** enables individually accessing and inspecting anonymous **lions**,
which enables the simultaneous coexistence of multiple **lions**, with exact
internal identifiers, within a single
[execution context](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-execution-contexts):

```javascript
~
{ on: 'my.ion@doma.in'
, do:
    function confirm (ion)
      { / This method's called for each ion    /
      | / with an id matching "my.ion@doma.in"./
      | / It confirms the ion's developer . . ./

        if (ion.re.by != "a.🇬🇾.developer") return

      ~ / before using it /
      + { log: ion.re.is  }
      }
}

~/ Each of the following modules could be in a/
+/ separate file fetched locally or remotely! /
~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾+🇯🇵+🇺🇸.developer'
    , at: '2018.04.28-07...2009.12-08'
    , in: 'san-jose.california.usa.earth'
    , is: "an identically id'd module"
    }
}
~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾.developer'
    , in: 'georgetown.guyana.south-america.earth'
    , is: "the intended module"
    }
}
~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾+🇺🇸.developer'
    , at: '2009.12-05...2007.09-04'
    , in: 'forest-hills.new-york.usa.earth'
    , is: "another identically id'd module"
    }
}
;
```

_fyi: Syntax highlighting issues are due to a
[Github bug](https://github.com/atom/language-javascript/issues/530#issuecomment-341976488)
not **ionify** or its syntax._
