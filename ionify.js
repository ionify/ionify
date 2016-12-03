;

['• . •']

+
{  re:
    { id: "ionify.0.1"
    , is: "implicit object notation invented for you"
    , by:
        [ {creator: "mike.lee@iskitz", at: "2007.09-04"   }
        , {authors:     "team@ionify", at: "2016.12.03-08"}
        ],
    },

  senseTodo:
    [/ no: Fix + re-enable /
    ],
  sense :
    { '• . •' : "activate"
    , '• . -' : "disable"
    , '- . •' : "disable"
    , '- . -' : "deactivate"
    , "on do" : "on"
    ,  on     : "on"
  //,  no     : "no"
    },

  valueOfTodo:
 	[/ 34: Move *.prototype.valueOf = this.eon* to an eons ion /
	,/ 44: Sense "this.this" && "\+\*", find ion.this or sense\.*"+ set it /
	,/ ##: ... /
	],
  valueOf:
    function ionify ()
      {   Object  .prototype.valueOf = this.onObject
      ;   Function.prototype.valueOf = this.onFunction
      ;   Array   .prototype.valueOf = this.onArray
      ;   Error   .prototype.valueOf = this.onError
    //;   RegExp  .prototype.valueOf = this.onStorie

      ;   this.link (this)	// (this.link.this = this).link

      +   { on: "get"
          , do:
              { get: ["next.id@ionify", "do@ionify", "ions"]
              ,  no:  "this.this"
              }
          }

        return ""
      },

  link:
    function link (ion)
      { ion || (ion = link.this) || (link == this.link) && (ion = this);

        var property
          , thing
          , id = /*(ion.re ? ion.re.id : ion.id) ||*/ "this"
        //; id = id.replace (/(.+)@.*/, "$1")
          ;
        for (property in ion)
          { thing = ion [property]
          ; if (!thing || property == id)                               continue
          ; if (typeof thing != "function" && typeof thing != "object") continue
          ; if (!ion.hasOwnProperty (property))                         continue
          ; thing [id] = ion
        //; +{debug:"linked "+property}
          }
        return true
      },

  activate:
    function activate (ion)
      {  if (ion [0] !== '• . •') return
      ;  var th1s = activate.this
      ;  th1s.senses && (th1s.senses != th1s.sense) && +th1s
      },

  deactivate:
    function deactivate (ion)
      {  delete Object  .prototype.valueOf
      ;  delete Function.prototype.valueOf
      ;  delete Array   .prototype.valueOf
      ;  delete Error   .prototype.valueOf
      ;
      ;  deactivate.this.free()
      },

  disable:
    function disable (ion)
      { var th1s        = disable.this
          ; th1s.senses = th1s.sense
          ; th1s.sense  = {'• . •':th1s.activate}
      },

  free:
    function free (ion)
      { ion || (free == this.free) && (ion = this);

        var property
          , thing
          , id = /*(ion.re ? ion.re.id : ion.id) ||*/ "this"
        //; id = id.replace (/(.+)@.*/, "$1")
          ;
        for (property in ion)
          {  thing = ion [property]
          ;  (typeof thing == "function") && (thing [id] == ion) && (delete thing [id])
          }
      },

  getId:
    function getId (ion)
      { var     id = ion.re ? ion.re.id : (ion.re = {id: ion.id}).id
      ; !id && (id = ion.re.id  = "sensor."
                                + (getId.nextId ? ++getId.nextId
                                                :  (getId.nextId = 1)))
      ; return id
      },

  ionMethod:
 	{ re:
	 	{ notes:[/   125: Do ion.ionMethod = ion.ionMethod.is /]
		, todos:[/ line#: ... /]
		},
	  get:
	    { data: 7
		},
	  is:
	    function ionMethod ()
	      {  this.get.data
		  }
	},

  noTodo:
 	[/ 133: resolve +{no:"this.this"} /
	,/ 134: why check nion.on instead of nion.no? /
	,/ 137: future bug if multiple actions for same term /
	],
  no:
    function no (ion)
      { if (!ion.no && !("no" in ion)) return ion;

        var ions = ion.no
          ; !Array.isArray (ions) && (ions = [ions])
          ;
        var id
          , act
          , nion //next ion
          , term
          , next  = -1
          , last  = ions.length
          , sense = no.this.sense
          ;
        while (++next < last)
          { nion  = ions [next]
          ; term  = nion.on
          ; id    = nion.re.id
          ; act   = sense [term]
          ; act  && act.this && (act.this.re.id == id) && delete sense [term]
          }
      },

  on:
    function on (ion)
      { if (!ion || !ion.on && !("on" in ion)) return ion;

         (ion.re && ion.re.id) || +{next:"sensor", id:ion}
		!(ion.re && ion.re.id) && on.this.getId (ion)

        var grammars  = ion.on
          ; !Array.isArray (grammars) && (grammars = [grammars])
          ;
        var grammar
          , action
          , todo
          , todos = 0
          , next  = -1
          , last  = grammars.length
          , th1s  = on.this
          , sense = th1s.sense
          ;
        while (++next < last)
          { grammar = grammars [next]
          ; Array.isArray (grammar) && (grammar = grammar.join (" "))
          ; action = ion [grammar]
          ; action ? (sense [grammar] = action) : !sense [grammar] && ++todos     //for +{on:["..."], do:()}, track the missin "on's"
          } !todos && +ion.do                                                     //for +{on:["..."], do:()} do "do" if no "on's" are missing
          ;
        for
          ( next = -1, todo = on.todo || (on.todo = []), last = todo.length
          ; ++next < last
          ; th1s.on (todo.shift())
          );todos && todo.push (ion)
      },

  onArray:
    function onArray (ion)
      { ion || (ion = this);

        var th1s  = onArray.this
          , sense = th1s.sense
          , next  = -1
          , last  = ion.length
          , thing
          ;
        while (++next < last)
          { thing = ion [next]
          ; typeof thing == "string"
              ?  +sense [thing] //&& sense [thing] (thing)
              :  +thing
          }

        return this
      },

  onError:
    function onError (ion)
      {  throw ion || this
      },

  onFunction:
    function onFunction (ion)
      {  ion || (ion = this)
      ;  ion.apply (this) // ion()
      +  {debug: '+' +ion.name+ '()'}
      ;  return ion
      },

  onObjectTodo:
 	[/ 221: make sense an ArrayMap to preserve order + fast lookup /
	,/ 235: log all matched actions + their results /
	],
  onObject:
    function onObject (ion)
      { ion || (ion = this)
      ; var from = onObject.caller
      ; ion.from || (ion.from = from && from.this && from.this.re.id)
	  ; (from != onObject) && +{debug: ion.re && ion.re.id}

        var th1s    = onObject.this
          , sense   = th1s.sense
          , skip    = {this:1}
          , grammar , terms
          , next    , last
          ;
  next: for (grammar in sense)
          { if (skip [grammar]) continue
		  ; terms = grammar.split (" ")
          ; for (next=-1, last=terms.length; ++next < last;)
              {  grammar = terms [next]
              ;  if (!(ion [grammar] || grammar in ion)) continue next
              }  grammar = terms.join (" ")
              ;

            (   "function" == typeof sense [grammar]
            ||  (sense [grammar]  =   th1s [grammar])
            &&  "function" == typeof sense [grammar]
            )   &&   th1s.link (ion)
                &&  (sense [grammar].this != ion)
                &&   sense [grammar]      (ion)
          }
        return this
      }
} //+ionify

;