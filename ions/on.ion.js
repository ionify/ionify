;
~
{ re:
    { id:  'on.ion@ionify'
    , of: ['core','public','conduit','api','launch']
    , as: { observation :-0.001, sensation    :-0.001 }
    , do: { resolution  :-0.001, transcription:-0.001 }
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221110
    , at:  -0.079
    , im: { re:'on.ion.re@ionify' }
    , is:
        [ "ionify: invoked object notation implemented for you"
        , "enabling the ionosphere: invoked object notation observation sphere"
        , "sensing ~{} oli & ~objectReference orion as invoked Object instances"
        , "sensing ~on actions"
        , "sharing core actions & information via the core @ionify domain space"
        , "sharing ionified [typeof ion && ion.constructor.name] utility"
        , "ionifying all ions that were ~get'd before ionify's core conventions"
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
        [ "NOTE many more plans, ideas & issue notes are in on.ion.re@ionify✨"

        , "HAVE migrated this lengthy re.we to on.ion.re.we@ or on.ion.im@, "
        + "but worry that its plans & notes'll be forgotten and-or neglected "
        + "since they won't be visible in on.ion@. perhaps we can keep the "
        + "most critical notes in on.ion@ re.we 🤔👨🏾‍💻🤓"

        , "KNOW ~{on:'id@doma.in','id@doma.in':ion} self-reacts for anemojii@"
        , "MUST implement ~{on:'id@doma.in',do:ion} to eliminate self-reactions"
        , "HAVE hardcoded a safeguard against id@ sensation@s self-reactions."
        , "MUSE is an id@ sensation@ self-reaction causing re.go.help.issue.14?"

        , "MUST create an examination that ~get's on.test@ionify multiple "
        + "times to recreate the duplicate sensation self-reaction scenario "
        + "described in re.go.help.issue.14."

        , "MUST observe ionify's behavior via the re.go.help.issue.14 "
        + "examination, then implement changes to solve all of or the "
        + "critically impactful problems +| opportunities it reveals before "
        + "we can say the problem's solved or closed."

        , "want sensed() to reaction.with.re.id === object.re.id before checksum"
        , "MAKE ionify@ space inaccessible via ion.valueOf:with.our, the.domain"
        , "MUST auto-update ionified:observation@ list as Types are deactivated"
        , "want actions() moved to a generic observer@ delegator vs convention."
        , "want renamed action <= ionified since it tests by known action types"
        ]
    },

  the:
    { domain:
        { does    : []
        , senses  : {}
        , known   : {}
        , ionified: {boolean:false, null:false, string:false, undefined:false}
        //actions☝🏾
      }
    },

  valueOf:function
  ionify ()
    { this.object ()
    },

  pending:null,

  object :function
  object ()
    { var  ionify               = this
        ;  ionify.on.with       = ionify.sensed.with
        =  ionify.via.with      = ionify.object.with
        =  ionify.actions.with  = ionify.conventions.with
        =  ionify.always.with   = ionify.sortKnownWords.with
        =  connections.with
        = {its:ionify, the:{domain:ionify.the.domain}}

      delete ionify.valueOf <- ionify <=
     /accept ions pending  ionification/

      //👇🏾activate ionosphere: ion observation sphere
      ionify.on ({on: Object, Object: ionify.sensed})
      ionify.on ({on:'on',        on: ionify.on    })

      function
        connections (no)
          { ionify <= /share to ionify@ domain space/
          ; no.no  ({on:'no@ionify', no:connections})
          ~ ionify.pending
          ; ionify.pending = null
          }
        ~ {on:'no@ionify', 'no@ionify':connections}

      return true
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
    ;  deactivate.with.the.tools.unlink()
    },

  disable :function
  disable (ion)
    { var ionify        = disable.with.its
        ; ionify.sense$ = ionify.senses
        ; ionify.senses = {'0 . 0':ionify.activate}
    },

  on :function
  on (sensation)
    { var ionify = on.with.its
        , always = true
        , launch = ionify.on ===  sensation.on

      if (!sensation    ||  !('on' in sensation)) return  sensation
      if (!launch)
      if ('function'    === typeof sensation.on)  return  ionify.via    (sensation)
      if ( sensation.on === '*' ){ always = false;        ionify.always (sensation)}

      var debug = []
      debug.push
         ([ sensation.re && sensation.re.id, 'on:'
          , sensation.on, /*JSON.stringify*/ (sensation)
                          //👆🏾circular reference error🚨
          ])

      var groups  = launch ? ['on'] : sensation.on
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

          if('*' === group)
            { always && ionify.always (sensation)
            ; always = false
            ; continue
            }

          unknown  = !senses [group]        // the sensation's terms are unknown
          unknown && (senses [group] = [])  // so make a new terms list for them

          reactions = senses    [group]
          reaction  = sensation [group]
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

          test  = '  return "'+ words.join ('" in ion && "') +'" in ion;'
          test  =  new Function ('ion', test)
          group = {act:group, set:words, in:test||has}

          for (var w=words.length; w --> 0;)
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

  always :function
  always (sensation)
    { var ionify  = always.with.the.domain
        , does    = ionify.does
        , action  = sensation['*']

      ionify.ionified [typeof action]
        || +{find:action, in:sensation, as:'*'}
        ?   (action = sensation [ '*' ]       )
        :   (action = sensation [action]      )

      does [sensation.re.id] = does.push (action) - 1
    },

  conventions :function
  conventions (object)
    { for
        ( var  does       = conventions.with.the.domain.does
        ,      always,  D = does.length, d=0
        ;     (always     = does[d])
        ,               D >      d++
        ; typeof  always == 'function'
              ?   always.call (object, object)
              :   always   && ((always).hasOwnProperty ('in')
             || ((always.in = object), ~always, delete always.in))
        );
    },

  actions :function
  actions (object)
    { var its       = actions.with.its
        , observers = its.observers
        , core      = observers.core
        , make      = observers.make
        , Type      = object.constructor
        , type      = Type.name || String (Type).match (observers.name)[1]

      make [type] &&  object instanceof make [type]
                  && (core [type] =  typeof object)
                  && (actions.with.the.domain.ionified [core[type]] = true)
                  && (make [type] = null)
    },

  sensedInfo:
    [ /todo: enable ionify's ions to set sensed order of action terms /
    , /todo: senses => ArrayMap to preserve order & fast lookup.      /
    , /idea: log all matched actions & their results?                 /
    , /idea: loop through ion's terms instead of known?               /
    , /done: disable activated words, enable after all matches        /
    , /done: Ignore similar actions after match: ~get ~get.then	      /
    ],

  sensed :function
  sensed (object)
    { var its       = sensed.with.its
        , ionify    = sensed.with.the.domain
        , senses    = ionify.senses
        ; object || (object = this)

      its.actions     (object)
      its.conventions (object)

      var from      = sensed.caller
        , debugging = !!(ionify && ionify.logging && ionify.logging.debug)
        , debug     = debugging && []
        ; debugging &&
          debug.push ('onION:', object.re ? object.re.id : object.with.its && object.with.its.re && object.with.its.re.id || 'anonymous')
          object.re       &&
         (object.re.from  ||
         (object.re.from  =    (from && from.with) ? from.with.its.re.id : object.re.id))
          debugging && from && (from != sensed)   && debug.push ('from', object.re && object.re.from)

      var reaction, reactions
        , group   , groups
        , word    , words
        , result  , before
        , results = 0
        , known   = ionify.known
        , ionified= ionify.ionified
        , skip    = {}

      for (word in known)
        { if (!known.hasOwnProperty (word))                           continue
          if (word in skip ||  ! (word  in object))                   continue
          if (object === (senses [word] && senses[word][0].with.its)) continue
          if (object.on   ===     word)                               continue

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

                      case !!ionified [typeof reaction]:
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
        && (object.debug || (object.next && object.id) || ionify.debug({debug:debug}))

      return results == 1 ? result : object
    },

  observers:
    { core: {}
    , make: {}
    , name: (/function\s+(.*)\s*\(/)
    , undo: {}
    },

  via: function
  via (observer)
    { var its       = via.with.its
        , action    = via.with.the.domain.ionified
        , observers = its.observers
        , core      = observers.core
        , make      = observers.make
        , name      = observers.name
        , undo      = observers.undo
        , Type      = observer.on
        , type      = Type.name   ||  String (Type).match (name)[1]
        ; make    [type]          =   Type
        ; undo    [type]          =   Type.prototype.valueOf
        ; Type.prototype.valueOf  =   observer [type]
        ; core    [type]          =   typeof Type
        ; action  [type]          =   true
        ; action  [core [type]]   = !!core [type]
        ; Object.seal (Type)

      via.with.the
        &&    via.with.the.domain.logging
        &&    via.with.the.domain.logging.debug
        && ~ {debug: ['via (observer)', type, JSON.stringify (action)]}

      return true
    }
}
;