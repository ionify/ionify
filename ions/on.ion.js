;
~
{ re:
    { id:  'on.ion@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -7.20190502
    , is:  -0.1
    , it:
        [" implements ionify: invoked object notation implemented for you.            "
        ," senses ions as activated Objects; i.e. ~{} & ~objectReference.             "
        ," senses ~on actions.                                                        "
        ," activates ionify's host environment ion; e.g. web@ionify | node@ionify.    "
        ," gets all of ionify's supporting ions using its host-provided ~get action.  "
        ," starts its host application by ~get'ing its launch config [via ions.js].   "
        ," ... "
        ]
    , we:
        [" were examining if .onion() is the source of ions' lost 'this' reference.   "
        ," were implementing ~on.do...                                                "
        ," will make .resolve() to convert ids to ions: e.g. ionified references.     "
        ," will .resolve this.* & ~* in strings & stories to actual ion references.   "
        ," will .resolve action@test.ionify to test/action.js                         "
        ," will add logging for unknown terms like ~get with a hostless ionify.       "
        ," will make a way to undo all ~on:Type's.                                    "
        ," like that ~{is:thing, type:'ion'} could test if a type is ionified.        "
        ," like ~{on:'term',dont:act} or {no:{term:act} vs {on:'term',no:act} ? 👎🏾    "

        ," were adding .link() call to onArray & think we should for all onSensors to "
        +" ensure that they all have a .ion reference to their containing ion.        "
        +" That'll support subsequent operations that depend on an ion's context.     "

        ," like that it may be more sensible to create an ion Type sensor delegator   "
        +" that ensures all ions have an id & that they & their ionified content have "
        +" a reference to their host ion.                                             "

        ," like that the delegator would do common actions for all ion types then     "
        +" delegate to the relevant ion's Type sensor.                                "

        ," like that it may then also make sense to have an ion Type cleanup that     "
        +" removes those ion references for memory performance. May be good enough to "
        +" only note this for now & revisit if performance needs to be improved.      "
        ]
    }

, valueOf
:   function hip ()
      { this.ionify ()
      }

, ionify
:   function ionify ()
      { var  ionified  = Object.prototype.valueOf.ionified
          ;    delete    Object.prototype.valueOf.ionified
          ;  ionified && delete  ionified.valueOf

        var  onion            = this
          ;  onion.sense.on   = onion.on
          ;  onion.onion.with = onion.on.with = onion.onSensor.with
          =  onion
        //;  onion.  on ({on:'on'   ,     on: onion.on   })
          ;  onion.  on ({on: Object, Object: onion.onion})

        ~
        { on:
            [ ['on', 'as', 'do']
            , ['on',       'do']
            ]
      //,"on do": onion.on
        }

        ~
        { on
        :  'no@ionify'      //must: sense by id because ~on:[] overrides previous sensors
        ,  'no@ionify'      //      which causes this sensor to be lost on find.link.share@.
        :   function on (no)
              { var space = no.on.our   //must: use this=no@.on since on.our isn't linked
              ; space.share             //      because find.link.share@ wasn't yet loaded.
                  ({ link              :
                      { activate       : onion.activate
                      , deactivate     : onion.deactivate
                      , disable        : onion.disable
                      , ionified       : onion.ionified
                      , known          : onion.known
                      , sense          : onion.sense
                      , sortKnownWords : onion.sortKnownWords
                      }
                  ,  to                : (~/will be onion.re.domain/, onion.re.id)
                  })
              ; no.no ({on:'no@ionify', no:on})
              ; space.link (onion)
              ; space.link (ionified)
              ; space = onion = ionified = null //performance? memory release?
              }
        }

        ionified <= /todo: via .ionifi3d ()/

        ~
        { get
          : [   'next.id@ionify',              'id@ionify',  'on.error@ionify'
            , 'on.errors@ionify', 'find.link.share@ionify',        'no@ionify'
            ,   'on.aeon@ionify',              'do@ionify',   'on.ions@ionify'
            , 'on.action@ionify',       'on.storie@ionify',       'use@ionify'
            ,      'ions@ionify',         'web.log@ionify',           'ions'
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
      {//if (ion [0] !== '0 . 0') return
      ;  var ionify = activate.with
      ;  ionify.senses && (ionify.senses != ionify.sense) && ~ionify
      }
, deactivate
:   function deactivate (ion)
      {  delete Array .prototype.valueOf
      ;  delete Object.prototype.valueOf
      ;  deactivate.with.unlink()
      }
, disable
:   function disable (ion)
      { var ionify        = disable.with
          ; ionify.senses = ionify.sense
          ; ionify.sense  = {'0 . 0':ionify.activate}
      }

, known
:   { id  : []
    , link: []
    , on:
        [ { act:  'on'
          , set: ['on']
          , in : function within (ion)
                    { return 'on' in ion
                    }
          }
        ]
    }

, on:
    function on (ion)
      { if ( !ion  ||  !('on' in ion)  ) return ion
      ; if ('function' == typeof ion.on) return  on.with.onSensor (ion)

      ; var debug = []
      ; debug.push ([ion.re && ion.re.id, "on:", ion.on, JSON.stringify (ion.on)])

      ; var groups  = ion.on
      ! Array.isArray (groups) && (groups = [groups])
      ; var ionify  = on.with
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
            action
              && ( sense [group] = action )
              && ! ionify.ionified [typeof action]
              && ( on.our
                 ? on.our.find ({find:action, in:ion, as:group})
                       && ( sense [group] = ion [group ])
                 :(action = sense [group] = ion [action])
                 )
                 ;

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
      ~ {debug: (debug.push ([id].concat (groups)), debug.join ('\n'))}
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
      { var ionify     = sortKnownWords.with || (sortKnownWords == this.sortKnownWords) ? (sortKnownWords.with = this) : null
          , known      = ionify.known
          , descending = ionify.sortKnownWordsDescending
          , word

        !updated && (updated = known)

        for (word in updated)
          updated.hasOwnProperty (word) && known [word].sort (descending)
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
:   { function: true
    }


, onionInfo
:   [ /todo: enable ionify's ions to set sensed order of action terms /
    , /todo: sense => ArrayMap to preserve order & fast lookup.       /
    , /idea: log all matched actions & their results?                 /
    , /idea: disable activated words, enable after all matches        /
    ,(/idea: loop through ion's terms instead of known?               /)
    , /todo: Ignore similar actions after match: ~get ~get.then	      /
    ]

, onion
:   function ion (object)
      { var id
          , link
          , ionify      = ion.with
        //, ionified    = ionify.ionified
          , sense       = ionify.sense
          , debug       = []
          , our         = ion.our
          ; object || (object = this)

      //; our && our/*ionify*/.id  (object)
        !(object.next && object.id) && !(  'id' in object) && (object.id   = id   = true) ///*our && our*/ionify.link (object)
        !(object.next && object.id) && !('link' in object) && (object.link = link = true) ///*our && our*/ionify.link (object)
        ; debug.push ("onION:", object.re ? object.re.id : "anonymous")

        var from = ion.caller;
        object.re && (object.re.from || (object.re.from = from && from.with && from.with.re && from.with.re.id))
        from && (from != ion) && debug.push ("from", object.re && object.re.from)

        var results = 0
          , known   = ionify.known
          , skip    = {}
          , group   , groups
          , word    , words
          , result
          ;

        for (word in known)
          { if (! known.hasOwnProperty (word)    ) continue
            if (word in skip || !(word in object)) continue
            groups = known [word]

            for (var g=0, G=groups.length; g < G; g++)
              { group = groups [g]
                if (!group.in (object)) continue
                words   =  group.act
                result  =  typeof  sense [words]      == 'function'
                             ?  (  sense [words].with !=  object) //bug?: don't self-activate sensor
                                && sense [words].call    (object, object)
                           //:  ~{find:words=sense[words], in:sense} && sense [words] (object)
                           //:  sense [sense [words]] (object)
                             :  (  our && our.ionified [typeof [sense [words] ]])
                                    ? ~ sense [words]
                                    : ( our && our.find &&  our.find ({find:sense[words], in:sense, as:words}))
                                          ?   sense [words].call   (object, object) //todo: resolve (sense [words]) to function or act ion
                                          :   console.log ("missing sensor: ", words, ":", sense[words])
                                          ||  sense [sense [words]].call   (object, object)
                                          ;
                results += 1
                words   =  group.set
                for (var w=0, W=words.length; w < W; skip [words [w++]] = true);
                break
              }
          }

          id   && delete object.id
          link && delete object.link

        ! object.debug && !(object.next && object.id) && ~{debug:debug} //bug! causes stack overflow
          return results == 1 ? result : object
      }


, onSensor$
:   { core: {Function:'function', Object:'object'}
    , name: (/function\s+(.*)\s*\(/)
    , undo: {}
    }

, onSensor
:   function onSensor (ion)
      { var on        = onSensor.with || (onSensor.with = onSensor == this.onSensor ? this : null)
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

      ~ {debug: ["onSensor", type, JSON.stringify (known)] }
        return true
      }
}
;