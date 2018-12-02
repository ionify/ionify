;
~
{ re:
    { id:  'on.object@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181124
    , is:  -0.1
    , it:
        [/ is the core of ionify: invoked object notation implemented for you.        /
        ,/ senses ions as activated Objects; i.e. ~{} & ~objectReference.             /
        ,/ senses ~on.                                                                /
        ," activates ionify's host environment ion; e.g. web@ionify & node@ionify.    "
        ," gets all of ionify's supporting ions using its host-provided ~get.         "
        ," starts its host application by ~get'ing its launch config [via ions.js].   "
        ,/ ... /
        ]
    , we:
        [/ were implementing ~on.do...                                                /
        ,/ will rename on.object to on.ion; more purposeful & cross-platform name.    /
        ,/ will make .resolve() to convert ids to ions: e.g. ionified references.     /
        ,/ will .resolve this.* & ~* in strings & stories to actual ion references.   /
        ,/ will add logging for unknown terms like ~get with a hostless ionify.       /
        ," will make a way to undo all ~on:Type's.                                    "
        ,/ like making ~on & ~no their own ions.                                      /
        ," like that ~{is:thing, type:'ion'} could test if a type is ionified.        "
        ," like ~{on:'term',dont:act} or {no:{term:act} vs {on:'term',no:act} ? 👎🏾    "

        ,/ were adding .link() call to onArray & think we should for all onSensors to /
        +/ ensure that they all have a .ion reference to their containing ion.        /
        +/ That'll support subsequent operations that depend on an ion's context.     /

        ,/ like that it may be more sensible to create an ion Type sensor delegator   /
        +/ that ensures all ions have an id & that they & their ionified content have /
        +/ a reference to their host ion.                                             /

        ,/ like that the delegator would do common actions for all ion types then     /
        +/ delegate to the relevant ion's Type sensor.                                /

        ,/ like that it may then also make sense to have an ion Type cleanup that     /
        +/ removes those ion references for memory performance. May be good enough to /
        +/ only note this for now & revisit if performance needs to be improved.      /
        ]
    }

, valueOf
:   function hip ()
      { this.ionify()
      }

, ionify
:   function ionify ()
      { var  ionified  = Object.prototype.valueOf.ionified
          ;    delete    Object.prototype.valueOf.ionified
          ;  ionified && delete  ionified.valueOf

        var  ion           = this
          ;  ion.sense. on = ion.on
          ;  ion.onion.ion = ion.on.ion = ion.no.ion = ion.onSensor.ion = ion
        //;  ion.link ()
        //;  ion.  on ({on:'on'   ,     on: ion.on   })
          ;  ion.  on ({on: Object, Object: ion.onion})

        ~
        { on:
            [ ["on", "do"]
            , ["on", "no"]
            ]
      //,"on do": ion.on
        ,"on no": ion.no
        }

        ~
        { on
        :  'context@ionify'      //need: sensing by id because ~on:[] overrides previous sensors
        ,  'context@ionify'      //      which causes this sensor to be lost on ~context.
        :   function cando (share)
              {~{ no:cando, on:'context@ionify'}
               ~{ with               :(~/will be ion.re.domain/, ion.re.id)
                , share              :
                    { activate       : ion.activate
                    , deactivate     : ion.deactivate
                    , disable        : ion.disable
                  //, id             : ion.id
                    , ionified       : ion.ionified
                    , known          : ion.known
                  //, link           : ion.link
                    , sense          : ion.sense
                    , sortKnownWords : ion.sortKnownWords
                }   }
              //ion.link ([ion, share, ionified])
              //~  {link: [ion, share, ionified]}
              //~  {link:ion} & {link:ionified}
                share.link (ion), share.link (ionified)
              //ion.link ()
              //ion.link (share)
              //ion.link (ionified)
                ion   =   ionified = null //performance? memory release?
              }
        }

        ionified <= /todo: via .ionifi3d ()/

        ~
        { get
        :   [         'id@ionify',     'context@ionify',   'errors@ionify'
            ,  'on.storie@ionify',     'next.id@ionify',  'web.log@ionify'
            ,   'on.error@ionify', 'on.function@ionify', 'on.array@ionify'
            ,         'do@ionify',         'use@ionify',        'i@ionify'//i@ions.iskitz.net
            ,            'ions'
            ]
        , in: 'sequence'||'order'
        }

        return true
      }

, ionifi3d
:   function ionified ()
      {/ sense if ionified via any known sensor's .prototype.valueOf.ionified /
      |/ isolate & confirm at least 1 provides ~get         /
      |/ save & remove sensor's .prototype.valueOf.ionified /
      |/ remove   ionified's .valueOf /
      |/ activate sensor(s)           /
      |/ activate ionified            /
      }

, senseInfo
:   [/ todo: ... /
    ]
, sense
:   { id  :null
    , link:null
    }

, activate
:   function activate (ion)
      {  if (ion [0] !== '0 . 0') return
      ;  var ionify = activate.ion
      ;  ionify.senses && (ionify.senses != ionify.sense) && ~ionify
      }
, deactivate
:   function deactivate (ion)
      {  delete Array .prototype.valueOf
      ;  delete Object.prototype.valueOf
      ;  deactivate.ion.unlink()
      }
, disable
:   function disable (ion)
      { var ionify        = disable.ion
          ; ionify.senses = ionify.sense
          ; ionify.sense  = {'0 . 0':ionify.activate}
      }

, noInfo
:   [ /todo: resolve +{no:"this.ion"}?                  /
    , /bugs: future bug if multiple actions use same term/
    ]
, no:
    function no (ion)
      { if (!ion.no && !("no" in ion)) return ion;

        var acts = ion.no
          ; !Array.isArray (acts) && (acts = [acts])
          ;
        var id
          , act
          , nion //next ion
          , term
          , known = no.ion.known
          , next  = -1
          , last  = acts.length
          , sense = no.ion.sense
          ;
        while (++next < last)
          { nion  = acts [next].ion
          ; term  = ion.on
          ; id    = nion && nion.re && nion.re.id
          ; act   = sense [term]
          ; act  && act.ion && (id && id == act.ion.re.id)
                 && delete sense [term]
                 && delete known [term]
          }
      }

, known
:   { id  : []
    , link: []
    , on:
        [ { act:  "on"
          , set: ["on"]
          , in : function within (ion)
                    { return "on" in ion
                    }
          }
        ]
    }

, on:
    function on (ion)
      { var debug = []

        if (!ion || !('on' in ion)) return ion
        on.ion || (on == this.on) && (on.ion = this)
    //; on.our &&  on.our/*ion*/.id (ion)
      ; debug.push ([ion.re && ion.re.id, 'on:', ion.on, JSON.stringify (ion.on)])
      ; if ("function" == typeof ion.on) return on.ion.onSensor (ion)

        var groups  = ion.on
      ! Array.isArray (groups) && (groups = [groups])
      ; var ionify  = on.ion
          , has     = ionify.hasKnownWord
          , known   = ionify.known
          , sense   = ionify.sense
          , id      = ion.re && ion.re.id
          , next    = -1
          , last    = groups.length
          , updated = {}
          , action
          , group
          , test
          , unknown
          , word
          , words

        debug.push (Object.keys (sense))

        while (++next < last)
          { words = group = groups [next]
            !Array.isArray  (group) && (words = group = [group])
            group = group.join (" ")

            unknown = !sense [group]
            action  =    ion [group]
            action && (sense [group] = action)

            debug.push (["knows?", id, group, group in sense])

            if (!action || !unknown) continue

            test  = 'return "'+ words.join ('" in ion && "') +'" in ion;'
            test  =  new Function ("ion", test)
            group = {act:group, set:words, in:test||has}

            for (var w=0, W=words.length; w < W; w++)
              { word  =  words [w]
               !known   [word]  &&  (known [word] = [])
                known   [word].push (group)
                updated [word]   =   true
              }
          }

        ionify.sortKnownWords (updated)
      ~ {debug: debug.push ([id, groups]), debug}
        return ion
      }

, hasKnownWord
:   function hasKnownWord (ion)
      { var ws = this.act
          , w  = ws.length
      ; while (w --> 0 && ws [w] in ion)
      ; return w <=- 1
      }

, sortKnownWords
:   function sortKnownWords (updated)
      { var ionify     = sortKnownWords.ion || (sortKnownWords == this.sortKnownWords) ? this : null
          , known      = ionify.known
          , descending = ionify.sortKnownWordsDescending
          , word

        !updated && (updated = known)

        for (word in updated)
          known [word].sort (descending)
      }

, sortKnownWordsDescending
:   function descending (known, nextKnown)
      { return nextKnown.set.length - known.set.length
      }


, ionifiedInfo
:   [ /note: Use with typeof ion + ion.constructor.name/
    , /todo: Auto-update as types are deactivated/
    , /todo: Enable +{ionified: typeof thing} = 1:true|0:false/
    ]

, ionified
:   {
    }


, onionInfo
:   [ /todo: enable ionify's ions to set sensed order of action terms	/
    , /todo: sense => ArrayMap to preserve order & fast lookup.       /
    , /idea: log all matched actions & their results?                 /
    , /idea: disable activated words, enable after all matches        /
    ,(/idea: loop through ion's terms instead of known?               /)
    , /todo: Ignore similar actions after match: ~get ~get.then	      /
    ]

, onion
:   function onion (ion)
      { var id
          , link
          , ionify      = onion.ion || (onion.ion = onion == this.onion ? this : null)
        //, ionified    = ionify.ionified
          , sense       = ionify.sense
          , debug       = []
          , our         = onion.our
          ; ion || (ion = this)

      //; our && our/*ionify*/.id  (ion)
        !(ion.next && ion.id) && !(  'id' in ion) && (ion.id   = id   = true) ///*our && our*/ionify.link (ion)
        !(ion.next && ion.id) && !('link' in ion) && (ion.link = link = true) ///*our && our*/ionify.link (ion)
        ; debug.push ("onION:", ion.re ? ion.re.id : 'anonymous')

        var from = onion.caller;
        ion.re && (ion.re.from || (ion.re.from = from && from.ion && from.ion.re && from.ion.re.id))
        from && (from != onion) && debug.push ("from", ion.re && ion.re.from)

        var results = 0
          , known   = ionify.known
          , skip    = {}
          , group   , groups
          , word    , words
          , result
          ;

        for (word in known)
          { if (word in skip || !(word in ion)) continue
            groups = known [word]

            for (var g=0, G=groups.length; g < G; g++)
              { group = groups [g]
                if (!group.in (ion)) continue
                words   =  group.act
                result  =  typeof  sense [words] == "function"
                             ?  (  sense [words].ion  !=  ion) //bug?: don't self-activate sensor
                                && sense [words]         (ion)
                             :     sense [sense [words]] (ion) //todo: resolve (sense [words]) to function or act ion
                results += 1
                words   =  group.set
                for (var w=0, W=words.length; w < W; skip [words [w++]] = true);
                break
              }
          }

          id   && delete ion.id
          link && delete ion.link

        ! ion.debug && !(ion.next && ion.id) && ~{debug:debug} //bug! causes stack overflow
          return results == 1 ? result : this // true
      }


, onSensor$
:   { core: {Function:"function", Object:"object"}
    , name: (/function\s+(.*)\s*\(/)
    , undo: {}
    }

, onSensor
:   function onSensor (ion)
      { var on        = onSensor.ion || (onSensor.ion = onSensor == this.onSensor ? this : null)
          , known     = on.ionified
          , onSensor$ = on.onSensor$
          , core      = onSensor$.core
          , name      = onSensor$.name
          , undo      = onSensor$.undo
          , Type      = ion.on
          , type      = Type.name ||  String (Type).match (name)[1]
          ; undo [type]            =  Type.prototype.valueOf
          ; Type.prototype.valueOf =  ion [type]
          ; known [type]           =  true
          ; known [core [type]]    =  !!core [type]

      ~ {debug: ["onSensor",type,JSON.stringify(known)]}
        return true
      }
}
;