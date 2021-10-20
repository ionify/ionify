# [ionify](http://about.ionify.net/)

**ion implemented for you**, is a flexible, unobtrusive & novel api for expressing
actionable information & behavior via
[**ion:** invoked object notation](http://ion.ionify.net/).
it was
[created](http://key.ionify.net/)
by
[**michael lee**](https://github.com/iskitz)
and is maintained by
[**team ionify**](https://github.com/ionify/about/blob/public/README.md#team):

```javascript
~ { "json" : "data" }  <= /observable data/
+ {   log  : '👋🏾👨🏾‍💻'}  <= /unobtrusive api/
& ["observable text"] <= /observable text/
```


## why

**ion** & **ionify** enable exploring & experimenting with

+ [domain-specific languages](#domain-specific-languages)

+ [literate](#literate-programming),
  [modular](#modular-programming),
  [event-driven](#event-driven-programming),
  [meta](https://en.wikipedia.org/wiki/Metaprogramming) &
  [name-collision-free](#name-collision-freedom)
  programming

+ fetching, [observing](#decoupled-observation) &
  interacting with highly [decoupled](#decoupled-observation)
  data & code

+ and more.


## how

**ion** & **ionify** are enabled by & can be implemented in languages that support
[operator overloading](https://en.wikipedia.org/wiki/Operator_overloading).
[javascript](https://github.com/ionify/ionify/),
[java](https://github.com/ionify/about/blob/public/api/java/src/net/ionify/java/Hello.java)
& [python](https://github.com/ionify/about/blob/public/api/python/ion.proof.py)
are three we've explored & confirmed capable.

for a detailed explanation of **ion**: invoked object notation, visit
its [documentation](https://github.com/ionify/about/blob/public/ions/ion.md#form).

for examples applying **ion** & **ionify**, visit the following subsections:


### [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)

*"...creating a domain-specific language...can be worthwhile if the language allows a
particular type of problem or solution to be expressed more clearly than an existing
language would allow..." - wikipedia*

**ionify** enables creating language(s) via **ions** that define & map terms to
behaviors:

```javascript
~
{ re:
    { id: 'ask.say@ions.iskitz.net'
    , by: 'mike.lee'
    , on: -7.20150728
    , to: -7.20211020
    , at: +1.5
    , in: 'san-jose.california.usa.earth'
    , is: "an ask & say domain-specific language ion"
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


~ /these ask.say ions can be in separate files./

~ { say: "👋🏾 hi!"                              }
~ { ask: "what's your name?"                    }
~ { say: "hi [answer]! i'm math e. bot 🤓"     }
~ { ask: "[answer], what's 2 x 2?"              }
~ { say: "[answer]? really? 🤔"                }
~ { ask: "can i ask you another question?"      }
~ { say: 'i thought you\'d say "[answer]" 😉'  }
```

visit [jeni](https://github.com/ionified/jeni-ions.iskitz.net?files=1)
for a more
[adaptive](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.aeons.js)
[exploration](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.play.js)
of ions & natural language.


### [literate programming](https://en.wikipedia.org/wiki/Literate_programming)

*"...a program is best thought of as a web...of simple parts and simple relations
between those parts; the programmer's task is to state those parts and those
relationships, in whatever order is best for human comprehension" -
[donald e. knuth](https://en.m.wikipedia.org/wiki/Donald_Knuth)*

```javascript
~
{ re:
    { id: 'frendlee@ionified.net'
    , by: 'mike.lee@ionify.net'
    , on: -8.20171208
    , to: -7.20211020
    , in: 'san-jose.california.usa.earth'
    , is: "a literate & natural language programming exploration"
    },

  do:
    [ "say hello"
    , "ask their name"
    , "invite them to play"
    ],

  "say hello":
    {say: "hi! i'm frend lee!"},

  "ask their name":
    {ask: "what's your name?"},

  "invite them to play":
    {ask: "hi [answer]! wanna play?!"}
}
```

#### code prose

```javascript
~
{ re:
    { id: 'code.prose.demo@ionified.net'
    , by: 'mike.lee'
    , on: -7.20190323
    , to: -7.20211020
    , at: +0.03
    , in: 'san-jose.california.us.earth'
    , is: "a test of code as prose via orion"
    },

  on: 'say',
  say (ion)
    { /log each thing that is said  //
      {log: ion.say}                 /
      /or do something more profound!/
    }
}

  you = {say:'do you see all the things' }
  can = {say:'we can do'   }
write = {say:'if we write' }
 code = {say:'our code'    }
   as = {say:'as actionable words within'}
prose = {say:'phrases & sentences?! 🤓' }

'with orion' - you - can - write - code - as - prose;
```

visit [anemojii](https://glitch.com/~anemojii)
for [another](https://github.com/ionified/anemojii-ions.iskitz.net/blob/public/index.js)
[exploration](https://github.com/ionified/anemojii-ions.iskitz.net/blob/public/index.re.js)
of literate programming.


### [modular programming](https://en.wikipedia.org/wiki/Modular_programming)

*"...a software design technique that emphasizes separating the functionality of a
program into independent, interchangeable modules, such that each contains everything
necessary to execute only one aspect of the desired functionality." - wikipedia*

```javascript
~
{ re:
    { id: 'an.ionified.module@doma.in'
    , by: 'a.developer'
    , on: -4.200709
    , to: -7.20200430
    , it: "represents an ionified module"
    },

  do:
    function something ()
      { something.with.hi ++
      },

  hi: /hi! 🤓/
}
```


### [event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming)

*"...a programming paradigm in which the flow of the program is determined by events
such as user actions..., sensor outputs, or messages from other programs/threads." - wikipedia*

```javascript
~
{ on:'event'
, do (ion)
    { /log "it happened!"//
      {log: ion.event   } /
      /on every event ion!/
    }
}

~ /this event ion could be in a separate file./
~ {event: "it happened!"} <= /invokes an event/
```

### [decoupled observation](https://en.wikipedia.org/wiki/Observer_pattern#Coupling_and_typical_pub-sub_implementations)

**ionify** uses javascript's
[prototypal inheritance](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-objects)
&
[operation overloading](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber)
to enable observing objects without direct references. this enables observing json & other
anonymous & named objects:

```javascript
~
{ on:'hi'
, hi (ion)
    { /this method is called for each ion//
      /with a "hi" property. it logs the //
      /value of that property.           //

      {log: ion.hi}

      /logs "i'm an ion!" 1st//
      /logs "i'm a json!" 2nd/
    }
}

~ /each ion can be in its own local or remote file/

~ { hi : "i'm an ion!"}  <=  /invoke an object/
~ {"hi": "i'm a json!"}  <=  /invoke some json/
```

### [name collision freedom](https://en.wikipedia.org/wiki/Name_collision)

[**lions**: literal ions](https://github.com/ionify/about/blob/public/ions/ion.md#form),
i.e. `~/ / + [ ] & { }`, eliminate name collisions by encapsulating their
[identifiers](https://en.m.wikipedia.org/wiki/Identifier#In_computer_languages).

**ionify** enables individually observing & inspecting multiple identically identified
**lions**. that capability enables **lions** to simultaneously coexist within the same
[execution context](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-execution-contexts)
without overriding all, or parts, of each other:

```javascript
~
{ on:'my.ion@doma.in'
, do (ion)
    { /this method is called for each ion with//
      /an id matching "my.ion@doma.in".       //
      /it confirms the ion developer before   //
      /describing what the ion does.           /

      if (ion.re.by == "a.🇬🇾.developer")
         /log "identifies the intended module"//
         {log: ion.re.it}
    }
}

~ /each of these ions can be in a separate file/

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾+🇯🇵+🇺🇸.developer'
    , on: -8.200912
    , to: -7.20190421
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
    , on: -4.200709
    , to: -5.200912
    , in: 'forest-hills.new-york.usa.earth'
    , it: "also duplicates the intended module's id"
    }
}
```

####

**🙇🏾‍♂️ through * God * impossible -is- nothing 🤎**

**[🇬🇾](https://en.wikipedia.org/wiki/Guyana) [mike 👨🏾‍💻 lee](https://github.com/iskitz) & [team](https://github.com/orgs/ionify/people)**


