# [ionify](http://about.ionify.net/)

**ion implemented for you**, is a flexible, unobtrusive & novel api for expressing data
& code via
[**ion:** invoked object notation](https://github.com/ionify/about/blob/public/ions/ion.md).
It was
[created](http://key.ionify.net/)
by
[**Michael Lee**](https://github.com/iskitz)
and is maintained by
[**team ionify**](https://github.com/ionify/about/blob/public/README.md#team):

```javascript
~ { "json" : "data" }  <= /observable json/
+ {   log  : '👋🏾👨🏾‍💻'}  <= /message logging/
& ["observable text"]  <= /observable text/
```


## why

**ion** & **ionify** enable exploring & experimenting with

+ [domain-specific languages](#domain-specific-languages)

+ [literate](#literate-programming),
  [modular](#modular-programming),
  [event-driven](#event-driven-programming) &
  [name-collision-free](#name-collision-freedom)
  programming

+ fetching, [observing](#decoupled-observation) &
  interacting with highly [decoupled](#decoupled-observation)
  data & code

+ and [more](https://github.com/ionify/ideas/).


## how

**ion** & **ionify** are enabled by & can be implemented in languages that support
[operator & operation overloading](https://en.wikipedia.org/wiki/Operator_overloading).
[JavaScript](https://github.com/ionify/ionify/),
[Java](https://github.com/ionify/ideas/blob/public/java/src/net/ionify/java/Hello.java) &
[Python](https://github.com/ionify/ideas/blob/public/python/ion.proof.py)
are three we've explored & confirmed capable.


### [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)

*"...creating a domain-specific language...can be worthwhile if the language allows a particular type of problem or solution to be expressed more clearly than an existing language would allow..." - Wikipedia*

**ionify** enables creating language(s) via **ions** that define and map terms to behaviors:

```javascript
~
{'ask.say@ionified.net':
    { by: 'mike.lee'
    , on: '2015.07.28-07'
    , to: '2019.04.21-07'
    , in: 'san-jose.california.usa.earth'
    , is:  1.2
    , it: "implements a simple ask & say domain-specific language"
    },

  on:
    ['ask', 'say'],

  ask:
    function ask (ion)
      { ask.with.answer = prompt (ask.with.prep (ion.ask)) || ''
      },

  say:
    function say (ion)
      { alert (say.with.prep (ion.say))
      },

  prep:
    function prep (quote)
      { return quote.replace (/\[answer\]/g, prep.with.answer)
      }
}

~ / These ions can be in one or more files that /
^ / are fetched either locally or remotely ...  /

~ { say: "👋🏾 Hi!"                              }
~ { ask: "What's your name?"                   }
~ { say: "Hi [answer]! I'm Math E. Bot 🤓"     }
~ { ask: "[answer], what's 2 x 2?"             }
~ { say: "[answer]? Really? 🤔"                }
~ { ask: "Can I ask you another question?"     }
~ { say: 'I thought you\'d say "[answer]" 😉'  }
```

See [jeni](https://github.com/ionified/jeni-ions.iskitz.net?files=1)
for an even more
[flexible](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.aeons.js)
[exploration](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.play.js)
of ions & natural language.


### [literate programming](https://en.wikipedia.org/wiki/Literate_programming)

*"...a program is best thought of as a web...of simple parts and simple relations between those parts; the programmer's task is to state those parts and those relationships, in whatever order is best for human comprehension" -
[Donald E. Knuth](https://en.m.wikipedia.org/wiki/Donald_Knuth)*

```javascript
~
{ re:
    { id: 'frendlee@ionified.net'
    , by: 'mike.lee@ionify'
    , on: '2017.12.08-08'
    , to: '2019.04.21-07'
    , in: 'san-jose.california.usa.earth'
    , it: "explores literate & natural language programming"
    },

  do:
    [ "say hello"
    , "ask their name"
    , "invite them to play"
    ],

  "say hello":
    {say: "Hi! I'm Frend Lee!"}

  "ask their name":
    {ask: "What's your name?"}

  "invite them to play":
    {ask: "Hi [answer]! Wanna play?!"}
}
```

See [anemojii](https://glitch.com/~anemojii)
for a more [in-depth](https://github.com/ionified/anemojii-ions.iskitz.net/blob/public/index.js)
[exploration](https://github.com/ionified/anemojii-ions.iskitz.net/blob/public/index.re.js)
of literate programming.


### [modular programming](https://en.wikipedia.org/wiki/Modular_programming)

*"...a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality." - Wikipedia*

```javascript
~
{ re:
    { id: 'an.ionified.module@doma.in'
    , by: 'a.developer@doma.in'
    , on: '2007.09-04'
    , to: '2019.04.21-07'
    , it: "represents an ionified module"
    },

  do:function something ()
    { something.with.me++
    },

  me:/ Hi! 🤓 /
}
```


### [event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming)

*"...a programming paradigm in which the flow of the program is determined by events such as user actions..., sensor outputs, or messages from other programs/threads." - Wikipedia*

```javascript
~
{ on:'event',
  do:function someAct (ion)
    { ~ {log: ion.event} <= /logs "it happened!"/
    }
}

/ This ion event can exist within another file /
~ {event: "it happened!"} <= /invokes an event /
```


### [decoupled observation](https://en.wikipedia.org/wiki/Observer_pattern#Coupling_and_typical_pub-sub_implementations)

**ionify** uses JavaScript's
[prototypal inheritance](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-objects)
and
[operation overloading](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber)
to enable observing objects without a direct reference. This enables observing json and other anonymous & named objects:

```javascript
~
{ on:'hi',
  hi:function hello (ion)
    {/ This method is called for each ion /
    ^/ with a "hi" property. It logs the  /
    ^/ value of that property.            /
          
    ~{ log:  ion.hi }
    ^/ logs "I'm an ion!" 1st /
    ^/ logs "I'm a json!" 2nd /
    }
}

/ These can each be in separate & remote files /
~ { hi : "I'm an ion!"}  <= / invoke an object /
~ {"hi": "I'm a json!"}  <= / invoke some json /
```

_fyi: Syntax highlighting issues are due to a
[Github bug](https://github.com/atom/language-javascript/issues/530#issuecomment-341976488)
not **ionify** or its syntax._


### [name collision free](https://en.wikipedia.org/wiki/Name_collision)

[**lions**: literal ions](https://github.com/ionify/about/blob/public/ions/ion.md#form),
i.e. `~/ / + [ ] & { }`, eliminate name collisions by encapsulating their
[identifiers](https://en.m.wikipedia.org/wiki/Identifier#In_computer_languages).

**ionify** enables individually observing & inspecting multiple identically identified
**lions** which enables their simultaneous coexistence within the same
[execution context](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-execution-contexts):

```javascript
~
{ on:'my.ion@doma.in',
  do:function confirm (ion)
    {/ This method is called for each ion    /
    ^/ with an id matching "my.ion@doma.in"  /
    ^/ It confirms the ion developer before  /
    ^/ describing what the ion is.           /

       if (ion.re.by == "a.🇬🇾.developer")
        ~ {log:  ion.re.is              }
        ^ /logs "the intended module"   /
    }
}


~/ Each of the following ion modules could be in /
^/ a separate file fetched locally or remotely!  /

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾+🇯🇵+🇺🇸.developer'
    , on: '2009.12-08'
    , to: '2019.04.21-07'
    , in: 'san-jose.california.usa.earth'
    , it: "duplicates the intended module's id"
    }
}

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾.developer'
    , in: 'georgetown.guyana.south-america.earth'
    , it: "identifies the intended module"
    }
}

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾+🇺🇸.developer'
    , on: '2007.09-04'
    , to: '2009.12-05'
    , in: 'forest-hills.new-york.usa.earth'
    , it: "also duplicates the intended module's id"
    }
}
```

_fyi: Syntax highlighting issues are due to a
[Github bug](https://github.com/atom/language-javascript/issues/530#issuecomment-341976488)
not **ionify** or its syntax._