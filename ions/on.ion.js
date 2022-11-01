;
~
{ re:
    { id:  'on.ion@ionify'
    , of: ['core','api']
    , as: ['sensation','acquisition','sensor','activation','initialization']
    , by: ['mike.👨🏾‍💻.lee','team']
    , on:  -4.200709
    , to:  -7.20221031
    , at:  -0.073
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
        { seek: 'https://api.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.ion.js'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/on.ion.test.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/on.test.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://github.com/ionify/about/tree/public/team'
        },
      we:
        [ "MUST create an examination that ~get's on.test@ionify multiple "
        + "times to recreate the duplicate sensation self-reaction scenario "
        + "described in re.go.help.issue.14."

        , "MUST observe ionify's behavior via the re.go.help.issue.14 "
        + "examination, then implement changes to solve all of or the "
        + "critically impactful problems +| opportunities it reveals before "
        + "we can say the problem's solved or closed."

        , "want sensed() to reaction.with.re.id === object.re.id before checksum"
        , "were examining if .ion() is the source of ions' lost 'this' reference.     "
        , 'were implementing ~on.do...                                                '

        , "WANT to set host & ionify spaces without [dis|en]abling host.on hack"
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

  the:
    { domain:
        { does      : []
        , senses    : {}
        , ionified  : {function: true}
        , known     : {on:
                        [ { act:  'on'
                          , set: ['on']
                          , in : function within (ion){ return 'on' in ion }
                      } ] }
        }
    },

  valueOf:function
  ionify ()
    { this.object ()
    },

  object :function
  object ()
    { var  ionify             =  this
        ;  ionify.sensed.with =  ionify.on.with
        =  ionify.via.with    =  ionify.object.with
        =  ionify.always.with =  ionify.sortKnownWords.with
        =  ionify.invoke.with =  on_no.with
        = {its:ionify, the:{domain:ionify.the.domain}}
        ;  ionify.pending     =  Object.prototype.valueOf.with.ion.pending
        ;  ionify.the.domain.senses.on = [ionify.on]

      ionify.on ({on:'on'   ,     on: ionify.sensed})
      ionify.on ({on: Object, Object: ionify.sensed})

      function on_no (no)
        { var space = no.on.with.our   //must: use this=no@.on since on_no.our isn't linked

          //invoke this:ionify to set its space connections/
          delete ionify.valueOf <- ionify

          no.no ({on:'no@ionify', no:on_no})
          ionify.invoke()
          space = ionify = ionified = null //performance? memory release?
        }

      ~
      { on:
          'no@ionify',      //must: sense by id because ~on:[] overrides previous sensors???
          'no@ionify':      //      which causes this sensor to be lost on find.link.share@.
           on_no
      }

      return true
    },

  invoke :function
  invoke ()
    { var pending = invoke.with.its.pending

      for
        ( var p = -1, P=pending.length
        ;   ++p < P
        ; ~pending[p]
        );
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
    ;  var ionify = activate.with.its
    ;  ionify.sense$ && (ionify.sense$ != ionify.senses) && ~ionify
    },

  deactivate :function
  deactivate (ion)
    {  delete Array .prototype.valueOf
    ;  delete Object.prototype.valueOf
    ;  deactivate.with.its.unlink()
    },

  disable :function
  disable (ion)
    { var ionify        = disable.with.its
        ; ionify.sense$ = ionify.senses
        ; ionify.senses  = {'0 . 0':ionify.activate}
    },

  sensesInfo:
    [/ todo: ... /
    ],
  senses:
    {},

  known:
    {
    },

  on :function
  on (sensation)
    { var ionify = on.with.its
        , always = true

      if (!sensation    ||  !('on' in sensation))   return  sensation
      if ('function'    ===    typeof sensation.on) return  ionify.via    (sensation)
      if ( sensation.on ===   '*')  { always = false;       ionify.always (sensation)}

      var debug = []
      debug.push ([sensation.re && sensation.re.id, 'on:', sensation.on, JSON.stringify (sensation.on)])

      var groups  = sensation.on
      Array.isArray (groups)  || (groups = [groups])

      var id      = sensation.re && sensation.re.id
        , has     = ionify.hasKnownWord
        , domain  = on.with.the.domain
        , known   = domain.known
        , senses  = domain.senses
        , next    = -1
        , last    = groups.length
        , updated = {}
        , reaction, reactions
        , word    , words
        , group
        , spot
        , test
        , unknown

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

          unknown  = !senses [group]        // the sensation's terms are unknown to ionify
          unknown && (senses [group] = [])  // so create an empty terms list to keep them.

          reactions = senses    [group]
          reaction  = sensation [group]     // get the reaction
          reaction
            &&  ( spot = reactions.push  (reaction))
            &&  ! domain.ionified [typeof reaction]
            &&  ( domain.find
                ? domain.find ({find:reaction,  in:sensation, as:group})
                && (reaction = reactions [spot-1] = sensation [group ])
                :  (reaction = reactions [spot-1] = sensation [reaction])
                );

          debug.push (['knows?', id, group, group in senses])

          if (!reaction || reactions && !unknown) continue

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

      domain
        ? domain.logging && domain.logging.debug && domain.debug
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
    { var witH       = sortKnownWords.with
        , known      = witH.the.domain.known
        , descending = witH.its.sortKnownWordsDescending
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
    { var ionify = always.with.the.domain
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

  pending:
    {
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
    { var ionify    = sensed.with.the.domain
      //, ionified  = ionify.ionified
        , senses    = ionify.senses
        , domain    = sensed.with.the.domain
        , debugging = !!(domain && domain.logging && domain.logging.debug)
        , debug     = debugging && []
        , does      = ionify.does
        ; object || (object = this)

      for
        ( var always,   D = does.length, d=0
        ;    (always      = does[d])
        ,               D >      d++
        ;  typeof always == 'function'
              ?   always.call (object, object)
              :   always   && ((always).hasOwnProperty ('in')
             || ((always.in = object), ~always, delete always.in))
        );

      debugging
        && debug.push ('onION:', object.re ? object.re.id : object.with.its && object.with.its.re && object.with.its.re.id || 'anonymous')

      var from = sensed.caller;
      object.re &&
     (object.re.from ||
     (object.re.from = (from && from.with) ? from.with.its.re.id : object.re.id))

      debugging && from && (from != sensed) && debug.push ('from', object.re && object.re.from)

      var reaction, reactions
        , group   , groups
        , word    , words
        , result  , before
        , results = 0
        , known   = ionify.known
        , skip    = {}

      for (word in known)
        { if (! known.hasOwnProperty (word))                          continue
          if (word in skip || !(word in object))                      continue
          if (object === (senses[word] && senses[word][0].with.its))  continue

          groups = known [word]

          for
            ( var g=0, G=groups.length
            ;     g  < G
            ;     g ++
            )
            { group = groups [g]
              if (!group.in (object)) continue

              words     = group.act
              reactions = senses [words]
              before    = results

      restart:for
                ( var r=0, R=reactions.length
                ;     r  < R
                ;     r ++
                )
                { reaction = reactions [r]

                  switch (true)
                    { case    typeof   reaction  === 'function':
                        if(   reaction.with.its  ===    object ) continue             //note: strict comparison = no coerced self-activation 🐛

                      //if({[ reaction.with?.its.re  ]:  true }[ object.re ]          //need: ionify core to be sions to eliminate ?. optional chaining
                      //&&    reaction.with.its.re.ex?.checksum) continue             //need: re@ convention from id@ID() to ensure sions have expected re.*"

                        if(   reaction.with?.its.re.id  ===      object.re?.id
                        &&    reaction.with?.its.re     in    {[ object.re ]: true }  //need: ionify core to be sions to eliminate ?. optional chaining
                        &&    reaction.with.its.re.ex?.checksum) continue             //need: re@ convention from id@ID() to ensure sions have expected re.*"

                        result   = reaction.call (object, object)
                        results += 1
                        break

                      case !!ionify.ionified [typeof reaction]:
                        result = ~reaction
                        results += 1
                        break

                  //     case !!
                  //       (  domain
                  //       && domain.find
                  //       && domain.find ({find:reaction, in:senses, as:words})
                  //       ):
                  //       reactions = senses [words]
                  //       R = reactions.length
                  //       r = -1
                  //       continue restart
                    }
                }

              words = group.set
              for (var w=0, W=words.length; w < W; skip [words [w++]] = true);
              if  (results > before)  break
            }
        }

      debugging   //🐛~debug causes stack overflow
        && (object.debug || (object.next && object.id) || domain.debug({debug:debug}))

      return results == 1 ? result : object
    },


  sensors:
    { core: {Function:'function', Object:'object'}
    , name: (/function\s+(.*)\s*\(/)
    , undo: {}
    },

  via: function
  via (sensor)
    { var on      = via.with.its
        , known   = via.with.the.domain.ionified
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
        ; Object.seal (Type)

      via.with.the
        &&    via.with.the.domain.logging
        &&    via.with.the.domain.logging.debug
        && ~ {debug: ['via (sensor)', type, JSON.stringify (known)]}

      return true
    }
}
;