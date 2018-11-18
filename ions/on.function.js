;
~
{ re:
    { id: "on.function.0.1@ionify"
    , is: "An ion that handles activated functions; i.e. +go()"
    , by:["mike.lee@iskitz", "team@ionify"]
    , at: "2017.07.15-07...2007.09-04"
        ,
      stories:
        [ /note: .../
        , /todo: .../
        , /bugs: ~[777].pop = Array.prototype.pop() = TypeError; this != [777]/
        + /       Maybe sense objects without own method then create own method/
        + /       with .ion=object that calls its inherited method with this=ion/
        , /idea: ~function with this.apply() can do interesting things like/
        + /       calling itself on itself! Not sure when that'd be  valuable/
        + /       but interesting to try!/
        ]
    }
    ,
  on: Function,
      Function:
        function onFunction (ion)
          {  ion || (ion = this)
             var result = ion() //ion.call (ion.ion)
          ~  {debug: ['+', ion.name || "anonymous", '() : ', result]}
             return result
          }
}
;