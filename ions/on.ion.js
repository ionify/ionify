;
~
{ re:
    { id:  'on.ion@ionify'
    , re:  'on.ion.re@ionify'
    , of: ['core','public','conduit','api','launch']
    , as: { observation :-0.001, sensation    :-0.001 }
    , do: { resolution  :-0.001, transcription:-0.001 }
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -8.20221205
    , at:  -0.085
    , is:
        [ "ionify: invoked object notation implemented for you"
        , "enabling the ionosphere: invoked object notation observation sphere"
        , "sensing ~{} oli: object literals as invoked Object instances"
        , "sensing ~object_reference  orion as invoked Object instances"
        , "sensing ~on actions"
        , "sharing core actions & information via the core @ionify domain space"
        , "sharing ionified [typeof ion && ion.constructor.name] utility"
        , "ionifying all ions that were ~get.d before ionify's core conventions"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test:
              [ 'https://github.com/ionify/ionify/blob/public/ions/on.ion.test.js'
              , 'https://github.com/ionify/ionify/blob/public/ions/on.test.js'
              , 'https://github.com/ionify/ionify/blob/public/ions/on.duplicate.test.js'
              ]
        , code: 'https://github.com/ionify/ionify/blob/public/ions/on.ion.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "NOTE ✨ many more plans, ideas & issue notes are in on.ion.re@ionify"
        , "WILL 🙇🏾‍♂️ set all ionify sions' re.go.deal: https://deal.ionify.net"
        , "HAVE 🛡 safeguarded on@on.ion@ sensation@ observation@ misapplication"

        , "LIKE enacting a best-practice of intentionally keep critically "
        + "essential & actionable notes in ion@ & others in ion.re@"

        , "MUST 🧹 auto-update ionified:observation@ list's deactivated Types"
        , "WANT ionify@ space inaccessible via ion.valueOf:with.our, the.domain"
        , "WANT ✨ to enable ~{on:'id@doma.in',do:ion} minimized self-reactions"
        , "MUSE 🤔 configure [en+dis]abled duplicated multi-reaction sensations?"
        , "WANT renamed observable <= ionified as confirms observable ion types"
        , "want 🧹 to remove on:no@ionify; conventions retroactively auto-apply"
        , "want .sensible() within a core observation@ delegator vs convention@"
        , "want ionify@ = core observation@ routing to others post-convention@s"
        ]
    },

  with:
    { our:
        { does    : []
        , senses  : {}
        , known   : {}
        , ionified: {boolean:false, null:false, string:false, undefined:false}
        //☝🏾observable
        , on      : 'on@on.ion@'
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
        ;  ionify.with.our.on   = ionify.on
        ;  ionify.on.with       = connections.with
        =  ionify.via.with      = ionify.conventions.with
        =  ionify.sensed.with   = ionify.convention.with
        =  ionify.object.with   = ionify.sortKnownWords.with
        =  ionify.sensible.with = ionify.transcript.with
        = {its:ionify,the:{},our: ionify.with.our}

      delete ionify.valueOf <= ionify <=
     /accept ions pending  ionification/

      //👇🏾activate ionosphere:👇🏾ion observation👇🏾sphere
      ionify.on ({on: Object, Object: ionify.sensed})
      ionify.on ({on:'on',        on: ionify.on    })
      //note: this 👆🏾 is erased by ☝🏾 same-named term

      function
        connections (no)
          { ionify <= /share to @ionify domain space/
          ; no.no  ({on:'no@ionify', no:connections})
          ~ ionify.pending
        //; ionify.pending = null
          }
      ~ {on:'no@ionify', 'no@ionify':connections}

      return true
    },

  activate :function
  activate (ion)
    { var ionify = activate.with.its.object
        , domain = activate.with.our
        ; domain.kn0wn
          && (domain.kn0wn != domain.known)
          && (domain.known  = domain.kn0wn) && +ionify
    },

  deactivate :function
  deactivate (ion)
    { var observers = deactivate.with.its.observers

      for(var type in observers.undo)
       if(observers.hasOwnProperty (type))
          observers.make[type].prototype.valueOf = observers.undo [type]
    },

  disable :function
  disable (ion)
    { var domain       = disable.with.our
        ; domain.kn0wn = domain.known
        ; domain.known = { 0 : 0 }
    },

  on: function
  on( sensation  )
    { var ionify  = on.with.its
        , pending = true
        , launch  = ionify.on ===  sensation.on

      if (!sensation    ||  !('on' in sensation)) return  sensation
      if (!launch)      //👈🏾 blocks on@on.ion@ being applied as👇🏾an observation@
      if ('function'    === typeof sensation.on)  return  ionify.via        (sensation)
      if ( sensation.on === '*' ){ pending = false;       ionify.convention (sensation)}

      var debug = []
      debug.push
         ([ sensation.re && sensation.re.id, 'on:'
          , sensation.on, /*JSON.stringify*/ (sensation)
                          //👆🏾circular reference error🚨
          ])

      var groups  = launch ? ['on'] : sensation.on
      Array.isArray (groups)  || (groups = [groups])

      var id        = sensation.re && sensation.re.id
        , has       = ionify.hasKnownWord
        , domain    = on.with.our
        , known     = domain.known
        , sensible  = domain.ionified
        , senses    = domain.senses
        , next      = -1
        , last      = groups.length
        , updated   = {}
        , reaction  , reactions
        , word      , words
        , group
        , spot
        , test
        , senseless

      debug.push (Object.keys (senses))

      while (++next < last)
        { words = group = groups [next]
          Array.isArray  (group) || (words = group = [group])
          group = group.join (' ')

          if('*' === group)
            { pending && ionify.convention (sensation)
            ; pending = false
            ; continue
            }

          senseless  = !senses [group]    // the sensation's terms aren't sensed
          senseless && (senses [group] = [])    // so make them a new terms list

          reactions = senses    [group]
          reaction  = sensation [group]
          reaction
            &&  ( spot = reactions.push (reaction))
            &&  ! sensible  [   typeof   reaction]
            &&  ( domain.find
                ? domain.find ({find:reaction,  in: sensation, as:group})
                && (reactions [spot-1] = reaction = sensation [   group])
                :  (reactions [spot-1] = reaction = sensation [reaction])
                );

          //🙇🏾‍♂️ enables simplified per-ion self-reacting sensation@
          groups [group] = reaction //👨🏾‍💻 detection in .sensed() 🤲🏾

          debug.push ([id, group in senses ? "knows" : "ignores", group])

          //🙇🏾‍♂️intentionally  👇🏾keep inactive👇🏾 reaction for dynamic-self-reactions🤲🏾
          if(!reaction /*|| !sensible [typeof reaction]*/ || reactions && !senseless)
              continue

          test  = '\treturn "'+ words.join ('" in ion && "') +'" in ion;'
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
        ? domain.logging && domain.logging.debug && on.with.the.tools.debug
          ({debug: (debug.push ([id].concat (groups)), debug.join ('\n'))})
        : +{debug: (debug.push ([id].concat (groups)), debug.join ('\n'))}

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
        , known      = witH.our.known
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

  convention :function
  convention (sensation)
    { var with_   = convention.with
        , sense   = with_.its
        , ionify  = with_.our
        , does    = ionify.does
        , action  = sensation['*']

      ionify.ionified [typeof action]
        || +{find:action, in:sensation, as:'*'}
        ?   (action = sensation [ '*' ]       )
        :   (action = sensation [action]      )

      //⚛️ self-apply each convention before applying to others:
      sense.always ({do:action, for:sensation})
      does [sensation.re.id] = does.push (action) - 1

      for
        //⚛️ apply each convention to all
        //⚛️ earlier conventions' sensations:
        ( var missed= does.length -1
        ,     m     = -1
        ;  ++ m     < missed
        ; sensation = does[m].with.its
        , sense.always ({do:action, for:sensation})
        );

      for
        //⚛️ apply each convention to all
        //⚛️ pre-sensation launch-ions:
        ( var launch  = sense.pending
        ,     p=-1,P  = launch.length
        ;  ++ p  < P
        ;   sense.always ({do:action, for:launch[p]})
        );  sense.always ({do:action, for:sense})
        //⚛️ apply each convention to this☝🏾sensation
    },

  always :function
  always (action)
    { var convention = action.do
        ,         on = action.for
        ; typeof  convention   == 'function'
              ?   convention.call (on, on)
              :   convention   && ((convention).hasOwnProperty ('in')
             || ((convention.in = on), +convention, delete convention.in))
    },

  conventions :function
  conventions (object)
    { for
        ( var       with_    = conventions.with
        ,           sense    = with_.its
        ,            does    = with_.our.does
        ,      convention, D = does.length, d=0
        ;     (convention    = does[d])
        ,                  D >      d++
        ; sense.always ({do:convention, for:object})
        );
    },

  sensible :function
  sensible (object)
    { var via         = sensible.with
        , its         = via.its
        , observers   = its.observers
        , core        = observers.core
        , make        = observers.make
        , Type        = object.constructor
        , type        = Type.name || String (Type).match (observers.NAME)[1]
        , OBSERVABLE  = via.our.ionified

      if( make [type] && object instanceof make [type])
        { core [type] ||
         (core [type]  = typeof object)

          OBSERVABLE [core [type]] ||
         (OBSERVABLE [core [type]]  = true)
        }
    },

  transcript :function
  transcript (whence)
    { var ion           =    whence.ion
        , from          =    whence.from
        , transcription =    transcript.with.our.logging
        , debugging     = !!(transcription  && transcription.debug)
        , debug         =    debugging      && []
        ; debugging     &&   debug.push
                              ('+sion:'
                              , ion.re  ?   ion.re.id
                                        :   ion.with.its
                                        &&  ion.with.its.re
                                        &&  ion.with.its.re.id
                                        ||  'ion')
        ; ion.re         &&
        ( ion.re.ex.from ||
        ( ion.re.ex.from  = (from && from.with)? from.with.its.re.id : ion.re.id
        ))
        ; debugging && from    && ( from != transcript.with.its.sensed)
                    && debug.push ('from',  ion.re  && ion.re.ex.from)
      return debug
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
    { var transcript
        , its       =   sensed.with.its
        , ionify    =   sensed.with.our
        , tools     =   sensed.with.the.tools
        , senses    =   ionify.senses
        ; object    || (object = this)

      its.sensible    (object)
      its.conventions (object)    ; transcript =
      its.transcript  ({ion:object, from:sensed.caller})

      var reaction, reactions
        , group   , groups
        , word    , words
        , result  , before
        , results = 0
        , known   = ionify.known
        , sensible= ionify.ionified
        , skip    = {}

      for (word in known)
        { if (!known.hasOwnProperty (word))                   continue
          if (word in skip     || ! (word in object))         continue
          if (senses [word])
          if (senses [word][0] && senses [word][0].with)
          if (object          === senses [word][0].with.its)  continue
          if (object.on       ===         word)               continue

          groups = known [word]

          for
            ( var g=0, G=groups.length
            ;     g  < G
            ;  ++ g
            )
            { group = groups [g]
              if (!group.in (object)) continue

              words     = group.act
              reactions = senses [words]
              before    = results

              for
                ( var r=0,  R= reactions ? reactions.length : 0
                ;     r  <  R
                ;  ++ r
                )
                { reaction = reactions [r]

                  switch (true)
                    { case !reaction
                         :  continue

                      case  object.on         &&
                            object.on [words] &&                          (
                            object.on [words] === reaction                ||  (
                            object.re                                         &&
                            object.re.as.sensation  /*👇🏾compare checksums*/   &&
                            object.re ==  String (reaction.with.its.re)       &&
                            object.re.indexOf    ('[object ')   !=   0    )   )
                         :  continue  //☝🏾confirm checksum-match not coincidence

                      case  typeof reaction  === 'function':
                        result   = reaction.call (object, object)
                        results += 1
                        continue

                      case !!sensible [typeof reaction]:
                      case !!sensible [reaction.constructor.name]:
                        result   = +reaction
                        results += 1
                        continue

                      case !!             // got unresolved 🤔
                        (  ionify         // reaction alias 🧐
                        && ionify.find    // so resolve it! 🤓
                        && ionify.find ({find:reaction, in:object})
                        ): reactions  = [object [reaction]]
                                  R   =  reactions.length
                                  r   = -1
                                  continue

                      default:
                        var temp =
                          [ "inactive reaction -"   , reaction
                          , "- for sensed term(s) -",    words
                          , "- within this object:" ,   object
                          ]
                        transcript
                          && (transcript = transcript.concat (temp))
                          &&  tools.warn  ({ warn:  temp})
                          &&  tools.debug ({debug: (temp.unshift (true), temp)})
                        continue
                    }
                }

              words = group.set
              for (var w=words.length; w --> 0; skip [words [w]] = true);
              if  (results  >  before) break
            }
        }

      transcript    //🚨 stack overflow caused by
      &&  (object.debug  // infite-looping ~debug
      ||  (object.next   && object.id) //~next.id
      ||   tools.debug   ({ debug: transcript }))

      return results == 1 ? result : object
    },

  observers:
    { core: {}
    , make: {}
    , undo: {}
    , NAME: (/function\s+(.*)\s*\(/)
    },

  via: function
  via (observer)
    { var with_     = via.with
        , its       = with_.its
        , the       = with_.the
        , our       = with_.our
        , sensible  = our.ionified
        , observers = its.observers
        , core      = observers.core
        , make      = observers.make
        , name      = observers.NAME
        , undo      = observers.undo
        , Type      = observer.on
        , type      = Type.name   ||  String (Type).match (name)[1]
        ; make     [type]         =   Type
        ; undo     [type]         =   Type.prototype.valueOf
        ; Type.prototype.valueOf  =   observer [type]
        ; core     [type]         =   typeof Type
        ; sensible [type]         =   true
        ; sensible [core [type]]  = !!core [type]
        ; Object.seal (Type)

      the
        &&  our.logging
        &&  our.logging.debug
        &&  the.tools.debug
              ({debug: ['via (observer)', type, JSON.stringify (sensible)]})

      return true
    }
}
;