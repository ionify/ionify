;
   ~   ~
+['0 . 0']+
     -

/on@ionify activating.../

+

{  re:
    { id: "ionify.0.1"
    , is: "implicit object notation invented for you"

    , by:["mike.lee@iskitz", "team@ionify"]
    , at: "2017.07.15-07...2007.09-04"

    , it:
        [ /note: .../
        , /todo: Move .onAEON to on.aeon@ionify/
        , /todo: Make .resolve to convert ids to ions: e.g. ionified references/
        , /todo: Make a way to undo all +on:Type's/
        , /todo: Make +{is:thing, type:"ion"} to test if a type is ionified/
        ]

    , im: `Adding a link() call to onAEON & think I should for all onType's to
           ensure that they all have a .ion reference to their containing ion.
           That'll support subsequent operations that depend on an ion's
           context.

           It may be more sensible to create an ion Type sensor delegator that
           ensures all ions have an id & that they & their ionified content have
           a reference to their host ion.

           It may then also make sense to have an ion Type cleanup that removes
           those ion references for memory performance. May be good enough to
           only note this for now & revisit if performance needs to be improved.

           The delegator would do common actions for all ion types then delegate
           to the relevant ion's Type sensor.
          `
    }

    ,
  valueOfStories:
    [ 'idea: Sense "this.*" + "+*" + set to ion reference'
    , /note: .../
    ]
    ,
  valueOf:
    function ionify ()
      { this.link   ()
      ; this.onType ({on: Object, Object: this.onION })
      ; this.onType ({on: Array , Array : this.onAEON})

        var initialize =
              { get:
                  [   "errors@ionify",   "on.storie@ionify"
                  ,  "next.id@ionify",     "web.log@ionify"
                  , "on.error@ionify", "on.function@ionify"
                  ,/*"on.aeon@ionify",*/        "do@ionify"
                  ,      "use@ionify",               "ions"
                  ],
                now: true
              }

      ; initialize.on  = "hosted"
      ; initialize.no  =  initialize

      ~ {on:"hosted", hosted:initialize}

        return true
      }


    ,
  linkStories:
    [ /todo: ion.this => ion.ionId + ion.ion/
    , /todo: enable +{link:ion, to:thing}/
    ]
    ,
  link:
    function link (ion)
      { ion || (ion = link.ion) || (link == this.link) && (ion = this)

        var property
          , thing
          , id = (ion.re ? ion.re.id : ion.id) || "ion"
          ; id = id.replace (/(.+)(@|\.\d\.).*/, "$1")

        !ion.ion && (ion.ion = ion)

        for (property in ion)
          { thing = ion [property]
          ; if (!thing)                                               continue
          ; if (typeof thing != "function" && !Array.isArray (thing)) continue
          ; if (!ion.hasOwnProperty (property))                       continue
          ; /* thing [id] = */ thing.ion = ion

        //;(id != "ion") &&   alert("linked "+id+"."+property);
        //;(id != "ion") && +{debug:"linked "+id+'.'+property}
          }

        return true
      }


    ,
  unlinkStories:
    [ /todo: enable +{unlink: ion, from: thing}/
    ]
    ,
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
      }


    ,
  senseStories:
    [ /todo: .../
    ]
    ,
  sense:
    { '0 . 0'  : "activate"
    , '0 . -'  : "disable"
    , '- . 0'  : "disable"
    , '- . -'  : "deactivate"
  //, ionified : "ionified"
  //, "on do"  : "on"         // see web.get.use@ionify
    ,  on      : "on"
    ,  no      : "no"
    },


  activate:
    function activate (ion)
      {  if (ion [0] !== '0 . 0') return
      ;  var ionify = activate.ion
      ;  ionify.senses && (ionify.senses != ionify.sense) && ~ionify
      },


  deactivate:
    function deactivate (ion)
      {  delete Array .prototype.valueOf
      ;  delete Object.prototype.valueOf
      ;  deactivate.ion.unlink()
      },


  disable:
    function disable (ion)
      { var ionify        = disable.ion
          ; ionify.senses = ionify.sense
          ; ionify.sense  = {'0 . 0':ionify.activate}
      },


  id:
    function getId (ion)
      { var    id =   ion.re ? ion.re.id : (ion.re = {id: ion.id}).id
      ; return id || (ion.re.id = "ion."
                                + (getId.nextId ? ++getId.nextId
                                                :  (getId.nextId = 1)))
      }


    ,
  noStories:
    [ /todo: resolve +{no:"this.ion"}?                  /
    , /bugs: future bug if multiple actions use same term/
    ]
    ,
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
      }


    ,
  on:
    function on (ion)
      { if (!ion || !ion.on && !("on" in ion)) return ion

      ; (ion.re && ion.re.id) || ~{next:"ion", id:ion}
      ; (ion.re && ion.re.id) || on.ion.id (ion)

      ~ {debug: [ion.re.id,"on:",ion.on,JSON.stringify(ion.on)]}

      ; if ("function" == typeof ion.on) return on.ion.onType (ion)
      ;

        var grammars  = ion.on
          ; !Array.isArray (grammars) && (grammars = [grammars])
          ;
        var grammar
          , action
          , todo
          , todos  = 0
          , next   = -1
          , last   = grammars.length
          , ionify = on.ion
          , sense  = ionify.sense
          , id     = ion.re.id
          ~ {debug: Object.keys (sense)}

        while (++next < last)
          { grammar = grammars [next]
          ; Array.isArray (grammar) && (grammar = grammar.join (" "))
          ; action  =    ion [grammar]
          ; action && (sense [grammar] = action)
          ~ {debug:["knows?",id, grammar, grammar in sense]}
          }

        ~{debug: [id, grammars]}
        return ion
      }


    ,
  ionifiedStories:
    [ /note: Use with typeof ion + ion.constructor.name/
    , /todo: Auto-update as types are deactivated/
    , /todo: Enable +{ionified: typeof thing} = 1:true|0:false/
    ]
    ,
  ionified:
    {
    }


    ,
  aesopStories:
    [ /note: aesop: array-embedded storie or phrase/
    , /todo: find known words in each sentence/
    , /todo: interpret via sentence(s), paragraph(s), chapter(s) + book(s)/
    , /todo: handle ['0 . 0'] via sense [thing] && sense [thing] (thing)/
    , /todo: use tbd name-to-ion resolver/
    ]
    ,
  aesop:
    function aesop (ion)
      { ion || (aesop == this.aesop) && (ion = this)

        var phrase = ion [ion.aesop]
        phrase && ~{debug: ["+[",phrase,"]"]}

        var host      = ion.ion
          , sense     = host [phrase]
          , ionify    = aesop.ion
          , ionified  = ionify.ionified

        !sense && (host = ionify) && (sense = ionify.sense [phrase])
        !ionified [typeof sense]  && (sense =  host [sense])
        typeof sense == "function" ?  sense (ion) : ~sense
      }


    ,
  onAEON:
    function onArray (ion)
      { ion || (ion = this)

      ~ {debug: ["~[",ion,"]"]}

        var ionify   = onArray.ion
          , ionified = ionify.ionified
          , sense    = ionify.sense
          , next     = -1
          , last     = ion.length
          , thing
          , type

        ionify.id   (ion)
        ionify.link (ion)

        while (++next < last)
          { thing = ion [next]
          ; type  = typeof thing
          ; ionified [type] ? +thing : ((ion.aesop = next) , ionify.aesop (ion))
          } delete ion.aesop

        return next / ion.length
      }


    ,
  onIONStories:
    [ /todo: sense => ArrayMap to preserve order + fast lookup./
    , /todo: log all matched actions + their results?          /
    , /todo: disable activated words, enable after all matches /
    , /todo: loop through ion's terms instead of known?        /
    , /todo: Ignore similar actions after match: +get +get.then/
    ]
    ,
  onION:
    function onObject (ion)
      { ion || (ion = this)

        var ionify    = onObject.ion
          , ionified  = ionify.ionified
          , sense     = ionify.sense
          , debug     = []
          , grammar   , terms , term
          , next      , last  , result
          , results   = 0

        ionify.id   (ion)
        ionify.link (ion)

        debug.push(["onION:",ion.re.id])

        var from = onObject.caller;
        ion.re.from || (ion.re.from = from && from.ion && from.ion.re.id);
	    from && (from != onObject) && debug.push ([ion.re.from, ion.re.id])

  next: for (grammar in sense)
          { terms = grammar.split (" ");

            for (next=-1, last=terms.length; ++next < last;)
              {  term = terms [next]
              ;  if (!(ion [term] || term in ion)) continue next
              }

            !  ionified    [typeof sense  [grammar]] &&
            (  ionified    [typeof ionify [grammar]] ||
              "function" == typeof ionify [grammar]
            )                                        &&
            (  sense [grammar]  =  ionify [grammar])

            debug.push (["using",grammar,typeof sense [grammar]])

            results += 1
            ion.did || (ion.did = {})
            ion.did [grammar]
                  = result
                  = typeof  sense [grammar] == "function"
                      ?  (  sense [grammar].ion != ion)
                         && sense [grammar]       (ion)
                      :  +  sense [grammar]
          }

        !ion.debug && ~{debug:debug}

        return results == 1 ? result : this
      }

    ,
  onType$:
    { core: {Function:"function", Object:"object"}
    , name: (/function\s+(.*)\s*\(/)
    , undo: {}
    }

    ,
  onType:
    function onType (ion)
      { var on      = onType.ion
          , known   = on.ionified
          , onType$ = on.onType$
          , core    = onType$.core
          , name    = onType$.name
          , undo    = onType$.undo
          , Type    = ion.on
          , type    = Type.name    || String(Type).match(name)[1]
          ; undo [type]            =  Type.prototype.valueOf
          ; Type.prototype.valueOf =  ion [type]
          ; known [type]           =  true
          ; known [core [type]]    =  !!core [type]

      ~ {debug: ["onType",type,JSON.stringify(known)]}
      ; return true
      }
}

+
/on@ionify activated!/
;
