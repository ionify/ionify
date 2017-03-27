~['• . •']+

{  re:
    { id: "ionify.0.1"
    , is: "implicit object notation invented for you"

    , by:
        [ {creator: "mike.lee@iskitz", at: "2007.09-04"   }
        , {authors:     "team@ionify", at: "2017.03.21-07"}
        ]

    , stories:
        [/note: .../
        ,/todo: .resolve(): resolve names to ions: ionified references, e.g. functions/
        ]
    },


  ionifiedStories:
    [/ todo: Auto-update as types are observed | ignored       /
    ,/ todo: Enable +{ionified: typeof thing} = 1:true|0:false /
    ,/ note: Use with typeof atom + atom.constructor.name      /
    ],

  ionified:
    { Array    :  true
    , boolean  : !true
    , Error    :  true
    , function :  true
    , Function :  true
    , number   : !true
    , object   :  true
    , Object   :  true
    , RegExp   :  true
    , string   : !true
    , undefined: !true
    },


  valueOfStories:
 	[/ todo: Move *.prototype.valueOf = this.on* to sensors ion /
	,/ todo: Sense "this.ion" + "+ionId" + set to ion reference /
	,/ note: ... /
	],

  valueOf:
    function ionify ()
      { Object  .prototype.valueOf = this.onObject
      ; Function.prototype.valueOf = this.onFunction
      ; Array   .prototype.valueOf = this.onArray
      ; Error   .prototype.valueOf = this.onError
    //; RegExp  .prototype.valueOf = this.onStorie
      ; this.link ()

      ~ {     on: "hosted"
        , hosted:
            { get: ["next.id@ionify", "do@ionify", "ions"]
            , no :  "hosted"
            }
        }

        return ""
      },


  linkStories:
    [/ todo: ion.this => ion.ionId + ion.ion /
    ,/ todo: enable +{link: atom, to:thing}  /
    ],

  link:
    function link (ion)
      { ion || (ion = link.this) || (link == this.link) && (ion = this);

        var property
          , thing
          , id = (ion.re ? ion.re.id : ion.id) || "this"
          ; id = id.replace (/(.+)(@|\.\d\.).*/, "$1")
          ;

        for (property in ion)
          { thing = ion [property]
          ; if (!thing || typeof thing != "function") continue
          ; if (!ion.hasOwnProperty (property))       continue
          ; /* thing [id] = */ thing.this = thing.use = thing.ion = ion

        //;(id!="this")&&alert("linking "+id+"."+property);
        //;(id != "this") && +{debug:"linked "+id+'.'+property}
          }

        return true
      },


  unlinkStories:
    [/ todo: enable +{unlink: atom, from: thing} /
    ],

  unlink:
    function unlink (ion)
      { ion || (unlink == this.unlink) && (ion = this);

        var property
          , thing
          , id = (ion.re ? ion.re.id : ion.id) || "this"
          ; id = id.replace (/(.+)(@|\.\d\.).*/, "$1")
          ;
        for (property in ion)
          {  thing = ion [property]
          ;  (typeof thing == "function") && (thing [id] == ion) && (delete thing [id])
          }
      },


  senseStories:
    [/ todo: no: Fix + re-enable /
    ],

  sense :
    { '• . •'  : "activate"
    , '• . -'  : "deactivate"
    , '- . •'  : "deactivate"
    , '- . -'  : "disable"
  //, ionified : "ionified"
  //, "on do"  : "on"
    ,  on      : "on"
  //,  no      : "no"
    },


  activate:
    function activate (ion)
      {  if (ion [0] !== '• . •') return
      ;  var ionify = activate.this
      ;  ionify.senses && (ionify.senses != ionify.sense) && +ionify
      },


  deactivate:
    function deactivate (ion)
      { var ionify        = deactivate.this
          ; ionify.senses = ionify.sense
          ; ionify.sense  = {'• . •':ionify.activate}
      },


  disable:
    function disable (ion)
      {  delete Object  .prototype.valueOf
      ;  delete Function.prototype.valueOf
      ;  delete Array   .prototype.valueOf
      ;  delete Error   .prototype.valueOf
    //;  delete RegExp  .prototype.valueOf
      ;  disable.this.unlink()
      },


  id:
    function getId (ion)
      { var    id =   ion.re ? ion.re.id : (ion.re = {id: ion.id}).id
      ; return id || (ion.re.id = "sensor."
                                + (getId.nextId ? ++getId.nextId
                                                :  (getId.nextId = 1)))
      },


  noStories:
 	[/ 133: resolve +{no:"this.this"}                    /
	,/ 134: why check nion.on instead of nion.no?        /
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
          , sense = no.ion.sense
          ;
        while (++next < last)
          { nion  = ions [next]
          ; term  = nion.on
          ; id    = nion.re && nion.re.id
          ; act   = sense [term]
          ; act  && act.ion && (id && id == act.ion.re.id) && delete sense [term]
          }
      },

  on:
    function on (ion)
      { if (!ion || !ion.on && !("on" in ion)) return ion

         (ion.re && ion.re.id) || +{next:"sensor", id:ion};
        !(ion.re && ion.re.id) && on.this.id (ion);

        var grammars  = ion.on
          ; !Array.isArray (grammars) && (grammars = [grammars])
          ;
        var grammar
          , action
          , todo
          , todos  = 0
          , next   = -1
          , last   = grammars.length
          , ionify = on.this
          , sense  = ionify.sense
          , id     = ion.re.id
          ;
        while (++next < last)
          { grammar = grammars [next]
          ; Array.isArray (grammar) && (grammar = grammar.join (" "))
          ; action  =    ion [grammar]
          ; action && (sense [grammar] = action)
          ~ {debug:["knows?",id, grammar, grammar in sense]}
          }

        ~ {debug: [id, grammars]}
        return ion
      },


  aesopStories:
    [/ note: aesop: array-embedded sentence or phrase                       /
    ,/ todo: find known words in each sentence                              /
    ,/ todo: interpret via sentence(s), paragraph(s), chapter(s) + book(s)  /
    ,/ todo: handle ['• . •'] via sense [thing] && sense [thing] (thing)    /
    ,/ todo: use tbd name-to-ion resolver                                   /
    ],

  aesop:
    function aesop (ion)
      { ion || (aesop == this.aesop) && (ion = this)

      ; var phrase = ion [ion.aesop]
      ; phrase && ~{debug: ["+[",phrase,"]"]}

      ; var ionify    = aesop.ion
          , ionified  = ionify.ionified
          , sense     = ionify.sense
          ; sense     = sense [phrase]

      ; !ionified [typeof sense] && (sense = ionify [sense])
      ; typeof sense == "function" ? sense (ion) : ~sense
      },


  onArray:
    function onArray (ion)
      { ion || (ion = this)

      ~ {debug: ["+[",ion,"]"]}

        var ionify   = onArray.this
          , ionified = ionify.ionified
          , sense    = ionify.sense
          , next     = -1
          , last     = ion.length
          , thing
          , type
          ;
        while (++next < last)
          { thing = ion [next]
          ; type  = typeof thing
          ; ionified [type] ? +thing : ((ion.aesop = next) , ionify.aesop (ion))
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
      ~  {debug: ['+',ion.name,'()']}
      ;  return ion
      },


  onObjectStories:
    [/ 221: sense => ArrayMap to preserve order + fast lookup.  /
    ,/ 235: log all matched actions + their results.            /
    ,/ ...: disable activated words + enable after all complete /
    ,/ !!!: loop through ion's terms instead of known?          /
    ],

  onObject:
    function onObject (ion)
      { ion || (ion = this);

        var ionify   = onObject.this
          , ionified = ionify.ionified
          , sense    = ionify.sense
          , debug    = []
          , grammar , terms, term
          , next    , last
          ;

        onObject .ion  .id (ion)
        ionify   .link     (ion)

        var from = onObject.caller;
        ion.re.from || (ion.re.from = from && from.this && from.this.re.id);
	    from && (from != onObject) && debug.push ([ion.re.from, ion.re.id])

  next: for (grammar in sense)
          { terms = grammar.split (" ");

            for (next=-1, last=terms.length; ++next < last;)
              {  term = terms [next]
              ;  if (!(ion [term] || term in ion)) continue next
              }

            !  ionified [typeof   sense  [grammar]]
            && ionified [typeof   ionify [grammar]]
            && (sense [grammar] = ionify [grammar])
            ;

            debug.push (["using",grammar,typeof sense [grammar]]);

            typeof  sense [grammar] == "function"
              ?  (  sense [grammar].ion != ion)
                 && sense [grammar]       (ion)
              :  +  sense [grammar]
              ;
          }

        !ion.debug && ~{debug:debug}

        return this
      },


  EXPERIMENTS:
    { methodBlock:
        { re:
            [/ note: methodBlock for creating a method with its own context /
            ,/ note: This could simplify creating methods like +web.get     /
            ,/ todo: ion.methodBlock = ion.methodBlock.is                   /
            ],

          get:
            {data: 7},

          is:
            function ionMethod ()
              {  this.get.data
              }
        }
    }
} //+ionify