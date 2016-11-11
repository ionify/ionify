;
+ {0:0}
+
{  re:
    { id: "ionify"
    , is: "implicit object notation invented for you"
    , by: {"Michael Lee": ["iskitz.net", "@iskitz"]}
    , at: "2007.09-05...2016.08.07-07"
    , in:
        [ "forest-hills.new-york.usa.earth"
        ,   "san-jose.california.usa.earth"
        ],

      todo:
        [ "..."
        ]
    },

  valueOf:
    function activate ()
      {  this.link()
      ;  this.ionify()
      ;  delete this.valueOf
      ;  this.valueOf = function disabled () {}
      },

  link:
    function link (ion)
      { !ion && (ion = this);

        var property
          , thing
          , id = (ion.re ? ion.re.id : ion.id) || "my"
          ; id = id.replace (/(.+)@.*/, "$1")
          ;
        for (property in ion)
          {  thing = ion [property]
          ;  (typeof thing == "function") && (thing [id] = ion)
          }
      },

  ionify:
    function ion1fy ()
      { var ionify                     = ion1fy.ionify
          , sense                      = ionify.senses || ionify.sense
          ; sense.on                   = ionify.on
          ; Object  .prototype.valueOf = ionify.onObject
          ; Function.prototype.valueOf = ionify.onFunction
          ; Array   .prototype.valueOf = ionify.onArray
          ; Error   .prototype.valueOf = ionify.onError
          ;

        + [ {on:   0    ,   0   :ionify.activate  }
          , {on:  '.'   ,  '.'  :ionify.deactivate}
          , {on: '-.-'  , '-.-' :ionify.disable   }
          ]
      },

  senses: null,
  sense : {} ||
    {   0   :   0
    ,  '.'  :  '.'
    , '-.-' : '-.-'
    },

  activate:
    function activate (ion)
      {  if (ion [0] !== 0) return
      ;  var ionify = activate.ionify
      ;  ionify.senses && (ionify.senses != ionify.sense) && ionify.ionify()
      },

  deactivate:
    function deactivate (ion)
      {  delete Object  .prototype.valueOf
      ;  delete Function.prototype.valueOf
      ;  delete Array   .prototype.valueOf
      ;  delete Error   .prototype.valueOf
      ;
      ;  var ionify = deactivate.ionify
      ;  ionify.free()
      },

  disable:
    function disable (ion)
      { var ionify        = disable.ionify
          ; ionify.senses = ionify.sense
          ; ionify.sense  = {0:ionify.activate}
      },

  free:
    function free (ion)
      { !ion && (ion = this);

        var property
          , thing
          , id = (ion.re ? ion.re.id : ion.id) || "my"
          ; id = id.replace (/(.+)@.*/, "$1")
          ;
        for (property in ion)
          {  thing = ion [property]
          ;  (typeof thing == "function") && (thing [id] == ion) && (delete thing [id])
          }
      },

  on:
    function on (ion)
      { var ionify        = on.ionify
          , sense         = ionify.sense
          , thing         = ion.on
          ;

        !Array.isArray (thing) && (thing = [thing]);

        var act
          , next = -1
          , last = thing.length
          ;
        while (++next < last)
          {  act = thing [next]
          ;  sense [act] = ion [act]
          }
      },

  onArray:
    function onArray (ion)
      { !ion && (ion = this);

        var ionify  = onArray.ionify
          , sense   = ionify.sense
          , next    = -1
          , last    = ion.length
          , thing
          ;
        while (++next < last)
          { thing = ion [next];
            typeof thing == "string"
              ?  sense [thing] && sense [thing] (thing)
              :  +thing
          }

        return this
      },

  onError:
    function onError ()
      {  throw this
      },

  onFunction:
    function onFunction()
      {  this()
      ;  return this
      },

  onObject:
    function onObject (ion)
      { !ion && (ion = this);

        var ionify  = onObject.ionify
          , sense   = ionify.sense
          ; ionify.link (ion)
          ;
        for (var thing in sense)
          (ion [thing] || thing in ion)
            &&  Object.prototype [thing] !== ion [thing]
            &&  sense [thing] (ion)
            ;

        return this
      }
} //+ionify

+
{ id: "go@ionify.net",
  on: "go",
  go:
    function go (ion)
      {  var action = ion.go
      ;  (typeof action == "string") ? +ion [action] : +ion.go
      }
}  //+go@ionify.net

|| //+go@ionify.net alternate
{ on:
    { go:
        function go (ion)
          { +ion.go
}   }     }

;

