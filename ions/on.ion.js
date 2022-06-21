;
~
{ re:
    { id:  'on.ion@ionify'
    , of:  'core'
    , as: ['sensation','acquisition','sensor','activation','initialization']
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20220620
    , at:  -0.1
    , is:
        [ 'ionify: invoked object notation implemented for you                        '
        , 'sensing ions as activated Objects; i.e. ~{} & ~objectReference.            '
        , 'sensing ~on actions.                                                       '
        , "activating ionify's host environment ion; e.g. web@ionify | node@ionify.   "
        , "getting ionify's supporting ions via its host-implemented ~get action.     "
        , "starting its host application by ~get'ing its ions.js launch configuration."
        , 'sharing core actions & information via domain & other spaces.              '
        ],
      go:
        { plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.ion.js'
        , join: 'https://github.com/ionify/about/tree/public/team'
        , deal: 'https://github.com/ionify/ionify/blob/public/LICENSE.txt'
        , seek: 'https://api.ionify.net/'
        },
      we:
        [ "were examining if .ion() is the source of ions' lost 'this' reference.     "
        , 'were implementing ~on.do...                                                '
        , "like removing .re.id & .re's temporarily made for anions: anonymous ions   "
        , 'will make .resolve() to convert ids to ions: e.g. ionified references.     '
        , 'will .resolve this.* & ~* in strings & stories to actual ion references.   '
        , 'will .resolve action@test.ionify to test/action.js                         '
        , 'will add logging for unknown terms like ~get with a hostless ionify.       '
        , "will make a way to undo all ~on:Type's.                                    "
        , "like that ~{is:thing, type:'ion'} could test if a type is ionified.        "
        , "like ~{on:'term',dont:act} or {no:{term:act} vs {on:'term',no:act} ? 👎🏾    "

        , 'were adding .link() call to onArray & think we should for all onSensors to '
        + 'ensure that they all have a .with reference to their containing ion.       '
        + "That'll support subsequent operations that depend on an ion's context.     "

        , 'like that it may be more sensible to create an ion Type sensor delegator   '
        + 'that ensures all ions have an id & that they & their ionified content have '
        + 'a reference to their host ion.                                             '

        , 'like that the delegator would do common actions for all ion types then     '
        + "delegate to the relevant ion's Type sensor.                                "

        , 'like that it may then also make sense to have an ion Type cleanup that     '
        + 'removes those ion references for memory performance. May be good enough to '
        + 'only note this for now & revisit if performance needs to be improved.      '
        ]
    },

  valueOf:function
  ionify ()
    { this.object ()
    },

  object :function
  object ()
    { var  ionified  = Object.prototype.valueOf.ionified
        ;    delete    Object.prototype.valueOf.ionified
        ;  ionified && delete  ionified.valueOf

      var  ionify             = this
        ;  ionify.senses.on   = ionify.on
        ;  ionify.sensed.with = ionify.on.with = ionify.via.with
        =  ionify
      //;  ionify.on ({on:'on'   ,     on: ionify.sensed})
        ;  ionify.on ({on: Object, Object: ionify.sensed})

      ~
      { on:
          'no@ionify',      //must: sense by id because ~on:[] overrides previous sensors???
          'no@ionify':      //      which causes this sensor to be lost on find.link.share@.
           function on (no)
              { var space = no.on.our   //must: use this=no@.on since on.our isn't linked
              ; space.share             //      because find.link.share@ wasn't yet loaded.
                  ({ link              :
                      { activate       : ionify.activate
                      , deactivate     : ionify.deactivate
                      , disable        : ionify.disable
                      , ionified       : ionify.ionified
                      , known          : ionify.known
                      , senses         : ionify.senses
                      , does           : ionify.does
                      , sortKnownWords : ionify.sortKnownWords
                      }
                  ,  to                : (~/want ion.re.id.domain/, ionify.re.id)
                  })
              ; no.no ({on:'no@ionify', no:on})
              ; space.link (ionify)
              ; space.link (ionified)
              ; space = ionify = ionified = null //performance? memory release?
              }
      }

      ionified <= /todo: via .ionifi3d ()/

      ~
      { get:
          [   'next.id@ionify',        'id@ionify', 'find.link.share@ionify'
          ,        'no@ionify',  'on.error@ionify',       'on.errors@ionify'
          ,    'logger@ionify',   'on.aeon@ionify',              'do@ionify'
          ,   'on.ions@ionify', 'on.action@ionify',       'on.storie@ionify'
          ,       'use@ionify',      'ions@ionify',     'on.ionified@ionify'
        //,     'on.do@ionify'
          ,      'ions'
          ]
      , in: 'sequence'||'order'
      }

      return true
    },

  ionifi3d :function
  ionified ()
    {/ sense if ionified via any known sensor's .prototype.valueOf.ionified /
    |/ isolate & confirm at least 1 provides ~get         /
    |/ save & remove sensor's .prototype.valueOf.ionified /
    |/ remove   ionified's .valueOf /
    |/ activate sensor(s)           /
    |/ activate ionified            /
    },

  activate :function
  activate (ion)
    {//if (ion [0] !== '0 . 0') return
    ;  var ionify = activate.with
    ;  ionify.sense$ && (ionify.sense$ != ionify.senses) && ~ionify
    },

  deactivate :function
  deactivate (ion)
    {  delete Array .prototype.valueOf
    ;  delete Object.prototype.valueOf
    ;  deactivate.with.unlink()
    },

  disable :function
  disable (ion)
    { var ionify        = disable.with
        ; ionify.sense$ = ionify.senses
        ; ionify.senses  = {'0 . 0':ionify.activate}
    },

  sensesInfo:
    [/ todo: ... /
    ],
  senses:
    {},

  known:
    { on:
        [ { act:  'on'
          , set: ['on']
          , in : function within (ion)
                    { return 'on' in ion
                    }
          }
        ]
    },

  on :function
  on (sensation)
    { var ionify = on.with
        , always = true

      if (!sensation    ||  !('on' in sensation))   return  sensation
      if ('function'    ===    typeof sensation.on) return  ionify.via    (sensation)
      if ( sensation.on ===   '*')  { always = false;       ionify.always (sensation)}

      var debug = []
      debug.push ([sensation.re && sensation.re.id, 'on:', sensation.on, JSON.stringify (sensation.on)])

      var groups  = sensation.on
      Array.isArray (groups)  || (groups = [groups])

      var our     = on.our
        , has     = ionify.hasKnownWord
        , known   = ionify.known
        , senses  = ionify.senses
        , id      = sensation.re && sensation.re.id
        , next    = -1
        , last    = groups.length
        , updated = {}
        , action
        , group
        , test
        , unknown
        , word
        , words

      debug.push (Object.keys (senses))

      while (++next < last)
        { words = group = groups [next]
          Array.isArray  (group) || (words = group = [group])
          group = group.join (' ')

         if ('*' === group)
            { always && ionify.always (sensation)
            ; always = false
            ; continue
            }

          unknown = !senses    [group]
          action  =  sensation [group]
          action
            &&  ( senses [group] = action )  // like senses [group].push (action) for multi-action
            &&  ! ionify.ionified [typeof action]
            &&  ( our
                ? our.find ({find:action,  in:sensation, as:group})
                && (action = senses [group] = sensation    [group ])
                :  (action = senses [group] = sensation    [action])
                );

          debug.push (['knows?', id, group, group in senses])

          if (!action || senses [group] && !unknown) continue

          test  = 'return "'+ words.join ('" in ion && "') +'" in ion;'
          test  =  new Function ('ion', test)
          group = {act:group, set:words, in:test||has}

          for (var w=0, W=words.length; w < W; w++)
            { word  =  words [w]
             !known   [word]  &&  (known [word] = [])
              known   [word].push (group)
              updated [word]   =   true
            }
        }

      ionify.sortKnownWords (updated)

      our
        ? our.logging && our.logging.debug && our.debug
          ({debug: (debug.push ([id].concat (groups)), debug.join ('\n'))})
        : ~{debug: (debug.push ([id].concat (groups)), debug.join ('\n'))}

      return sensation
    },

  hasKnownWord :function
  hasKnownWord (ion)
    { var ws = this.act
        , w  = ws.length
    ; while (w --> 0 && ws [w] in ion)
    ; return w <=- 1
    },

  sortKnownWords :function
  sortKnownWords (updated)
    { var ionify     = sortKnownWords.with || (sortKnownWords == this.sortKnownWords) ? (sortKnownWords.with = this) : null
        , known      = ionify.known
        , descending = ionify.sortKnownWordsDescending
        , word

      !updated && (updated = known)

      for (word in updated)
        updated.hasOwnProperty (word) && known [word].sort (descending)
    },

  sortKnownWordsDescending :function
  descending (known, nextKnown)
    { return nextKnown.set.length - known.set.length
    },

  does:
    [],

  always :function
  always (sensation)
    { var ionify = always.with || this
        , does = ionify.does
        , action = sensation['*']

      ionify.ionified [typeof action]
        || +{find:action, in:sensation, as:'*'}
        ?   (action = sensation [ '*' ]       )
        :   (action = sensation [action]      )

      does [sensation.re.id] = does.push (action) - 1
    },

  ionifiedInfo:
    [ /note: Use with typeof ion + ion.constructor.name/
    , /todo: Auto-update as types are deactivated/
    ],

  ionified:
    { function: true
    },


  sensedInfo:
    [ /todo: enable ionify's ions to set sensed order of action terms /
    , /todo: senses => ArrayMap to preserve order & fast lookup.       /
    , /idea: log all matched actions & their results?                 /
    , /idea: disable activated words, enable after all matches        /
    ,(/idea: loop through ion's terms instead of known?               /)
    , /todo: Ignore similar actions after match: ~get ~get.then	      /
    ],

  sensed :function
  sensed (object)
    { var ionify    = sensed.with
      //, ionified  = ionify.ionified
        , senses    = ionify.senses
        , our       = sensed.our
        , debugging = !! (our && our.logging && our.logging.debug)
        , debug     = debugging && []
        , does      = ionify.does
        ; object || (object = this)

      for
        ( var always,   D = does.length, d=0
        ;    (always      = does[d])
        ,               D >      d++
        ;  typeof always == 'function'
              ?   always.call (object, object)
              :   always   && (always).hasOwnProperty ('in')
        || ((always.in = object), ~always, delete always.in)
        );

      debugging
        && debug.push ('onION:', object.re ? object.re.id : object.with && object.with.re && object.with.re.id || 'anonymous')

      var from = sensed.caller;
      object.re && (object.re.from || (object.re.from = from && from.with && from.with.re && from.with.re.id))

      debugging && from && (from != sensed) && debug.push ('from', object.re && object.re.from)

      var results = 0
        , known   = ionify.known
        , skip    = {}
        , group   , groups
        , word    , words
        , result

      for (word in known)
        { if (! known.hasOwnProperty (word))  continue
          if (word in skip || !(word in object))      continue
          if (object === (senses[word] && senses[word].with))  continue

          groups = known [word]

          for (var g=0, G=groups.length; g < G; g++)
            { group = groups [g]
              if (!group.in (object)) continue
              words   =  group.act
              result  =  typeof  senses [words]       == 'function'
                            ?  ( senses [words].with !==  object) //🐛? strict comparison = no coerced self-activation
                              && senses [words].call     (object, object)
                          //:  ~{find:words=senses[words], in:senses} && senses [words] (object)
                          //:  senses [senses [words]] (object)
                            :  (  our && our.ionified [typeof senses [words] ])
                                  ? ~ senses [words]
                                  : ( our && our.find &&  our.find ({find:senses[words], in:senses, as:words}))
                                        ?   senses [words].call     (object, object) //todo: resolve (senses [words]) to function or act ion
                                        :(  console.log ('missing sensation: ', words, ':', senses[words])
                                        || ('function' == typeof senses [senses [words]])
                                            ?   senses [senses [words]].call (object, object)
                                            : ~ senses [senses [words]]
                                        );
              results += 1
              words   =  group.set
              for (var w=0, W=words.length; w < W; skip [words [w++]] = true);
              break
            }
        }

      debugging   //🐛~debug causes stack overflow
        && (object.debug || (object.next && object.id) || our.debug({debug:debug}))

      return results == 1 ? result : object
    },


  sensors:
    { core: {Function:'function', Object:'object'}
    , name: (/function\s+(.*)\s*\(/)
    , undo: {}
    },

  via: function
  via (sensor)
    { var on      = via.with || (via.with = via == this.via ? this : null)
        , known   = on.ionified
        , sensors = on.sensors
        , core    = sensors.core
        , name    = sensors.name
        , undo    = sensors.undo
        , Type    = sensor.on
        , type    = Type.name   ||  String (Type).match (name)[1]
        ; undo [type]            =  Type.prototype.valueOf
        ; Type.prototype.valueOf =  sensor [type]
        ; known [type]           =  true
        ; known [core [type]]    =  !!core [type]

      via.our
        &&    via.our.logging
        &&    via.our.logging.debug
        && ~ {debug: ['via (sensor)', type, JSON.stringify (known)]}

      return true
    }
}
;