   ~   ~
+['0 . 0']+
     -

{ re:
    { id: "on.object.0.1@ionify"
    , is: "implicit object notations invented for you"
        + "bios: basic ionified object sensor"

    , by:["mike.lee@iskitz", "team@ionify"]
    , at: "2017.11.08-08...2007.09-04"

    , it:
        [ /note: .../
        , /todo: Make .resolve to convert ids to ions: e.g. ionified references/
        , /todo: Make a way to undo all +on:Type's/
        , /todo: Make +{is:thing, type:"ion"} to test if a type is ionified/
        ]

    , im: "Adding a link() call to onArray & think I should for all onSensor's"
        + " to ensure that they all have a .ion reference to their containing"
        + " ion. That'll support subsequent operations that depend on an ion's"
        + " context."

        + " It may be more sensible to create an ion Type sensor delegator that"
        + " ensures all ions have an id & that they & their ionified content"
        + " have a reference to their host ion."

        + " It may then also make sense to have an ion Type cleanup that"
        + " removes those ion references for memory performance. May be good"
        + " enough to only note this for now & revisit if performance needs to"
        + " be improved."

        + "The delegator would do common actions for all ion types then"
        + " delegate to the relevant ion's Type sensor."
    }

    ,
  valueOfStories:
    [ 'idea: Sense "this.*" + "+*" + set to ion reference'
    , /note: .../
    ]
    ,
  valueOf:
    function ionify ()
      { var ion   = this
          , share =
              { id        : ion.id
              , ionified  : ion.ionified
              , link      : ion.link
              , sense     : ion.sense
              , activate  : ion.activate
              , deactivate: ion.deactivate
              , disable   : ion.disable
              }

        ion.link      ()
        ion.shareWith ({share : share , with  : ion.re.id    })
        ion.onSensor  ({on    : Object, Object: ion.onObject })

        var initialize
          =   { get:
                  [   "errors@ionify",   "on.storie@ionify"
                  ,  "next.id@ionify",     "web.log@ionify"
                  , "on.error@ionify", "on.function@ionify"
                  , "on.array@ionify",          "do@ionify"
                  ,      "use@ionify",               "ions"
                  ]
                  ,
                now: true
              }

        initialize.on = "host"
        initialize.no = initialize

      ~ {on:"host", host:initialize}
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
          , id    = (ion.re ? ion.re.id : ion.id) || "ion"
          , space = (link.ion || this).getSpace (id)
          ; id    = id.replace (/(.+)(@|\.\d\.).*/, "$1")

        !ion.ion && (ion.ion = ion)

        for (property in ion)
          { thing = ion [property]
          ; if (!thing)                                               continue
          ; if (typeof thing != "function" && !Array.isArray (thing)) continue
          ; if (!ion.hasOwnProperty (property))                       continue
          ; /* thing [id] = */ thing.ion = ion
          ; thing.get = space

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
          , id = (ion.re ? ion.re.id : ion.id) || "ion"
          ; id = id.replace (/(.+)(@|\.\d\.).*/, "$1")
          ;
        for (property in ion)
          {  thing = ion [property]
          ;  (typeof thing == "function") && (thing [id] == ion) && (delete thing [id])
          }
      }

    ,
  getSpaceStories:
    [ /note: Returns & if needed, creates a space based on id's @domain/
    , /todo: .../
    ]
    ,
  getSpace:
    function getSpace (id)
      { var spaces = (getSpace.ion || this).spaces
          , domain = id.match (/@(.*)/)
          ; domain = domain && domain [1]

        return spaces [domain] || (spaces [domain] = {})
      }

    ,
  shareStories:
    [ /note: .../
    , /todo: create +{share: {thing:..., other:...}, with:[ion.ids]}/
    ]
    ,
  shareWith:
    function share (ion)
      { var space
          , spaces = share.ion.spaces
          , things = ion.share
          , domain = ion.with.match (/@(.*)/)
          ; domain = domain && domain [1]

        space = spaces [domain] || (spaces [domain] = {})

        for (var thing in things)
          { space [thing] = things [thing]
          }
      }

    ,
  spacesStories:
    [ /note: Domain Spaces/
    , /todo: .../
    ]
    ,
  spaces:
    { null: {}
    }

    ,
  senseStories:
    [ /todo: .../
    ]
    ,
  sense:
    {  on           : "on"
  //, "on do"       : "on"         // see web.get.use@ionify
    ,  no           : "no"
    , "share with"  : "shareWith"
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
      ; return typeof id == "string"
                    ? id
                    : (ion.re.id = "ion."
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
  known:
    {}

    ,
  on:
    function on (ion)
      { if (!ion || !ion.on && !("on" in ion)) return ion

      ; (ion.re && ion.re.id) || ~{next:"ion", id:ion}
      ; (ion.re && ion.re.id) || on.ion.id (ion)

      ~ {debug: [ion.re.id, "on:", ion.on, JSON.stringify (ion.on)]}

        if ("function" == typeof ion.on) return on.ion.onSensor (ion)

        var groups  = ion.on
          ; !Array.isArray (groups) && (groups = [groups])
          
          
        var action
          , group
          , test
          , unknown
          , word
          , words
          , next   = -1
          , last   = groups.length
          , ionify = on.ion
          , known  = ionify.known
          , sense  = ionify.sense
          , id     = ion.re.id

      ~ {debug: Object.keys (sense)}

        while (++next < last)
          { words = group = groups [next]
            !Array.isArray  (group) && (words = group = [group])
            group = group.join (" ")
            
            unknown = !sense [group]
            action  =    ion [group]
            action && (sense [group] = action)
            
          ~ {debug: ["knows?", id, group, group in sense]}
          
            if (!unknown) continue
            test  = 'return !!(ion ["'+ words.join ('"] && ion ["')+'"]);'
            test  = new Function ("ion", test)
            group = {group:group, test:test}
            
            for (var w=0, lastw=words.length; w < lastw; w++)
              {  word = words [w]
                !known [word] && (known [word] = [])
                 known [word].push (group)
              }
          }

      ~ /td: sort new & updated words' groups in descending count order/
      
      ~ {debug: [id, groups]}
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
  onObjectStories:
    [ /todo: sense => ArrayMap to preserve order + fast lookup./
    , /idea: log all matched actions + their results?          /
    , /idea: disable activated words, enable after all matches /
    , /idea: loop through ion's terms instead of known?        /
    , /todo: Ignore similar actions after match: +get +get.then/
    ]
    ,
  onObject:
    function onION (ion)
      { ion || (ion = this)

        var ionify    = onION.ion
          , ionified  = ionify.ionified
          , sense     = ionify.sense
          , debug     = []
          , grammar   , terms , term
          , next      , last  , result
          , results   = 0

//    ; (!ion.debug && !ion.next && +{next:"ion", id:ion}) ||
        ionify.id (ion)
        ionify.link (ion)

        debug.push ("onION:", ion.re.id)

        var from = onION.caller;
        ion.re.from || (ion.re.from = from && from.ion && from.ion.re.id);
	    from && (from != onION) && debug.push ("from", ion.re.from)

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

            debug.push ("using", grammar, typeof sense [grammar])

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
  onSensor$:
    { core: {Function:"function", Object:"object"}
    , name: (/function\s+(.*)\s*\(/)
    , undo: {}
    }

    ,
  onSensor:
    function onSensor (ion)
      { var on        = onSensor.ion
          , known     = on.ionified
          , onSensor$ = on.onSensor$
          , core      = onSensor$.core
          , name      = onSensor$.name
          , undo      = onSensor$.undo
          , Type      = ion.on
          , type      = Type.name    || String(Type).match(name)[1]
          ; undo [type]            =  Type.prototype.valueOf
          ; Type.prototype.valueOf =  ion [type]
          ; known [type]           =  true
          ; known [core [type]]    =  !!core [type]

      ~ {debug: ["onSensor",type,JSON.stringify(known)]}
        return true
      }
}
;
