# ions

**implicit object notations**, are
[expressions](https://en.wikipedia.org/wiki/Expression_(computer_science))
that activate [objects](https://en.wikipedia.org/wiki/Object_(computer_science))
via implicit [type conversion](https://en.wikipedia.org/wiki/Type_conversion)
which enables writing [data](https://en.wikipedia.org/wiki/Data_(computing)) &
[code](https://en.wikipedia.org/wiki/Source_code)
as independent, observable, objects.


## form

**ions** are expressions that combine the
[~](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator)
bitwise-not,
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator),
and [-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator)
unary operators with [operands](https://en.wikipedia.org/wiki/Operand#Computer_science)
that can be [object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-type)
[references](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reference-specification-type),
[array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer),
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer),
or
[regular expression](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-literals-regular-expression-literals)
literals.

They can be written as **lion**, literal ions:

```javascript
    ~{ }      +{ }      -{ }     // 3 object lions
    ~[ ]      +[ ]      -[ ]     // 3 array  lions
    ~/ /      +/ /      -/ /     // 3 regular-expression lions
```
and **orion**, object reference ions:

```javascript
    ~obj      +obj      -obj     // 3 prefixed orion
```

**orion** can also be written using the
[++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-increment-operator)
and
[-- prefix operators](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-decrement-operator),
and the
[++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-increment-operator)
and
[-- postfix operators](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-decrement-operator):

```javascript
             ++obj,    --obj     // 2 prefixed  orion
               obj++,    obj--   // 2 postfixed orion
```

### punctuation

**ions** can be combined to form larger expressions using
[arithmetic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators),
[bitwise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators), and
[relational](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Relational_operators)
operator punctuation.

This example combines fifteen **lions** with the fifteen bitwise, arithmetic,
and relational punctuation operators available to **ions**:

```javascript
~  /example/  -  /punctuation/
^  ["aesop"]  *  /  stories  /  >>  {are:"ions"}
&  ["these"]  +  /expressions/  <<  {are:"too" }
/  ["write"]  %  /them as you/  |   {see:"fit" }
>  ["using"]  >=  /15/ < /ion/  <=  /operators!/
;
```

As shown, arithmetic punctuation can be any of the
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-addition-operator-plus),
[-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-subtraction-operator-minus),
[*](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-mul-operator),
[/](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-div-operator), or
[%](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-mod-operator)
operators, bitwise punctuation can be any of the
[&](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND),
[~](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator),
[|](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR),
[^](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR),
[<<](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-left-shift-operator), or
[\>>](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-signed-right-shift-operator)
operators, and relational punctuation can be any of the
[&gt;, &gt;=, <, or <=](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-relational-operators-runtime-semantics-evaluation)
operators.


## function

**ions** activate the
[implicit numeric conversion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber)
of their object operands. That implicit object conversion is the **implicit
object** portion of **implicit object notation** and the key to activating and
interacting with **ions**.

[JavaScript](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-overview)
runtimes interpret and evaluate **ions** as expressions. During evaluation, an **ion's** operator
[attempts to convert its object operand to a number](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive).
During that conversion, an attempt is made to call the object's `valueOf()`
method. If an **ion** doesn't define that method, JavaScript searches for
it in the **ion's**
[prototype chain](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-objects).
For **lions** that search begins and ends at the object's
`prototype`; i.e. `Object.prototype`, `Array.prototype` or `RegExp.prototype`.
This can differ for **orion** if they inherit from other objects.

By default, `Object`, `Array` and `RegExp` all define `prototype.valueOf()`, so
for each **ion** of those types, its operator calls the relevant
`prototype.valueOf()` to obtain a
[primitive value](https://en.m.wikipedia.org/wiki/Primitive_value)
that's then converted to a number.

Defining custom `Object`, `Array`, and
`RegExp` `prototype.valueOf()` methods enables using JavaScript's
[implicit type conversion](https://en.wikipedia.org/wiki/Type_conversion)
behavior to interact with all **lions** without requiring direct access to any of them 🤓

```javascript
Object.prototype.valueOf
= function onObject ()
    { this.ion == "some data" // true on 1st ion!
    ; this.ion == "more data" // true on 2nd ion!
    ; this.any == "data kind" // true on 3rd ion!
    }

~ {ion:"some data"}  // 1st ion
+ {ion:"more data"}  // 2nd ion
- {any:"data kind"}  // 3rd ion
;
```

### interact

In JavaScript, **ion** interaction has three styles, **hip**, held-in-place:

```javascript
~
{ valueOf
:   function hip ()
      { console.log ("hip: held-in-place ion")
      }
}
;
```

**hop**, held-on-prototype:

```javascript
Object.prototype.valueOf
= function hop ()
    { console.log ("hop: held-on-prototype ion")
    }
;
```

and **hip hop**, **ions** that alternate between the two.


All three styles enable object observation by implementing the `valueOf()`
method that javascript calls during an object's
[type conversion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive).
With **hip ions** that method is **held** __in-place__ within an object. With
**hop ions** it's **held** __on__ an object's `prototype`. And with
**hip hop ions**, it's held both ways, alternated at runtime.

The difference between **hip** & **hop ions** is that **hip ions** observe a
single object's conversion, while **hop ions** observe all object conversions
of a specific object type.

**hip**, **hop**, and **hip hop** ions are simple, reliable and compatible
patterns for observing and interacting with objects. They can be implemented
manually, as shown, or via
[**ionify: implicit object notations invented for you**](http://github.com/ionify/ionify/),
an [API](https://en.wikipedia.org/wiki/Application_programming_interface)
that simplifies **ion** interaction and observation.


## compatibility

**orion**, **hip, hop**, and **hip hop** ions are compatible with all JavaScript
environments. **lions** are compatible with all environments implementing
[any edition of the ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
since [1999](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf).

[JavaScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
environments include all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views and
[runtimes](http://en.wikipedia.org/wiki/JavaScript_engine) implementing an
[ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm).
