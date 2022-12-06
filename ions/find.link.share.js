;
~
{ re:
    { id:  'find.link.share@ionify'
    , of: ['core', 'context', 'tools', 'api']
    , do: {transcription:-0.001}
    , as: {convention   :-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee', 'team✨ionify']
    , on: { 200709   : -4      }
    , to: { 20221205 : -8.0338 }
    , at:  -0.063
    , is:
        [ "providing context via ~link which ensures ions' object-type members can  "
        + 'access their containing ion, ~share for sharing things via domains,      '
        + 'optionally aliased data and-or functionality, and ~find.in for resolving '
        + 'names to ions.                                                           '
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test:
              [ 'https://github.com/ionify/ionify/blob/public/ions/find.test.js'
              , 'https://github.com/ionify/ionify/blob/public/ions/link.test.js'
            //, 'https://github.com/ionify/ionify/blob/public/ions/share.test.js'
              ]
        , code: 'https://github.com/ionify/ionify/blob/public/ions/find.link.share.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WILL 🙇🏾‍♂️ retire .link() since with@ successfully refined it 🤲🏾"
        , "WANT to simplify this ion & separate its actions into their own ions"
        , "WANT to keep these actions domain-private until otherwise needed"
        , "WANT 🤔 .find_alias() thing:void 0||null? b4 thing.constructor.name"
        , "WANT 🤔 .find_alias() debug({debug: [message, thing, place[thing]]})"
        , "LIKE 🙇🏾‍♂️ ~find.ing member@id@affiliation:caller,this,with,global🤲🏾"

        , "plan to have top-level-ids reference entire ion not just its re & "
        + "this requires re.*@, ~find, ~share & ~link's compatibility with that"

        , "were implementing ~link.to & ~link.as"

        , 'will apply unlink when ~link.to is falsey'
        , 'want to combine ~share & ~link.to'
        , 'want all hip & hip-hop ions to valueOf:hiphop --> start --> valueOf:hop. '
        , "like ~find'ing phrases as reactions in on.ion.senses reactions map"
        , "like idea of queueing ~find's then doing once ~find's available          "
        ]
    },

  on:
    [ [ 'link',   'to'      ]
    , [ 'link',   'as'      ]
    , [ 'link'              ]
    , [ 'find',   'in', 'as']
    , [ 'find',   'in'      ]
    , ['share'              ]
    ],

  with:
    { our:
        { find  :  'find@find.link.share@ionify'
        , link  :  'link@find.link.share@ionify'
        , share : 'share@find.link.share@ionify'
        , space : 'space@find.link.share@ionify'
        , skip:
            { with  :true, re:true
            , domain:true, do:true
            , get   :true, on:true
            }
        }
    },

  valueOf:function
  ionify()
    { var   sense   = this
        ,  domain   = sense.with.our
      domain.find   = sense.find
      domain.link   = sense.link
      domain.share  = sense.share
      domain.space  = sense.space
      delete sense.valueOf <= sense
    },

 'find in as':'find',
 'find in'   :'find',
  find :function
  find (action)
    { var name      = action.find
    ,     to        = action.in
    ,     as        = ('as' in action) ? action.as : name
    ,     sensible  = find.with.our.ionified
    ,     context   = find.with.its
    ,     found
    ,     last

      while
        ( last != to)    //🚨 ¿might infinitely loop on circular .with's | .our's?
        { last  = to
        ; if ( found    = context.find_alias ({find:name, in:to})         ) break
        ; if ( to.with && sensible [typeof (found = to.with.its [name]) ] ) break
        ; if ( to.with && sensible [typeof (found = to.with.our [name]) ] ) break
        ; if ( to.with )  {                    to = to.with.its      } else break
        }

      found  && (action.in [as] = found)
      return !! found
    },

  find_alias :function
  find_alias (action)
    { var via      = find_alias.with
    ,     our      = via.our
    ,     debug    = via.the.tools.debug
    ,     debugging= debug ? our.logging.debug : (debug = Object, false)
    ,     thing    = action.find
    ,     place    = action.in
    ,     sensible = our.ionified
    ,     tried    = {}
    ; while
        (!tried [thing] && thing in place)
        { tried [thing]  = true
        ; debugging  &&  debug ({debug:`~find ${thing} ...`})
        ; thing = place [thing]
        ; if (sensible  [typeof thing])           return thing
        ; if (sensible  [thing.constructor.name]) return thing
        }
      return false
    },

  linkInfo:
    { were:
        [ 'implementing ~link.to & ~link.as'
        ],
      must:
        [ 'move id@domain matching to its own ion then share it  '
        , "fix callee.caller.with.the.domain exposing ionify's domain space"
        ],
      will:
        [ 'enable   + {link:ion, to:thing}                       '
        ],
      like:
        [ 'linking {}s & keeping their id-mapped .with & .our here '
        , 'id@domain matching with /(.*)([-+]\d+.*^@)|(@.*)/     '
        , '.with .doma .in.expanded.name.of.shared.thing:        '
        + ".with$.doma$.in.expanded auto-added $'s on conflicts  "
        , 'enabling ~ {link: true|false } with true as default   '
        , 'enabling ~ {link: [ion, object, more])                '
        , 'enabling ~ {link:ion, as:{member:thing}}              '
        ]
    },
 'link as':'link',
  link :function
  link (ion)
    { ion || (ion = link.with.its)

      var id        = ion.re.id || 'ion@' // 'ion'
        , it        = id.replace (/(.+)(@|\.\d\.).*/, '$1')
        , our       = (link.with || ion.with).our
        , debugging = !!(our.logging && our.logging.debug)
        , debugged  = []
        , debug     = our.debug || String
        , can       = {function:true, object:true}
        , skip      = (link.with || ion.with).our.skip
        , thing
      for
        ( var property in ion)
        { thing = ion [property]
          if (!thing || skip [property] || !can [typeof thing])       continue
     //**/if ((typeof thing != 'function') && !Array.isArray (thing)) continue
          if (!ion.hasOwnProperty (property))                         continue
          debugging      &&
          ((it != 'ion') && ion.debug || debugged.push ('\n\tlinked '+ it +' ['+ property +']'))
        } debugging      && ion.debug || debugged.length && debug ({debug:debugged})

      return true
    },

  unlinkInfo:
    [ 'todo: enable +{unlink: ion, from: thing}'
    ],
  unlink :function
  unlink (ion)
    { ion || (unlink == this.unlink) && (ion = this);

    var property
        , thing
        , id = (ion.re ? ion.re.id : void 0) || 'ion'
        ; id = id.replace (/(.+)(@|\.\d\.).*/, '$1')
        ;
    for (property in ion)
        {  thing = ion [property]
        ;  (typeof thing == 'function') && (thing [id] == ion) && (delete thing [id])
        }
    },

  shareInfo:
    { will:
        [ 'ensure ~share uses .with vs .our'
        , "fix ~share:'*' to resolve shared things; now assumes ~do:[{share:'*'}] "
        , 'create +{share: {thing:..., other:...}, with:[ion.ids]} '
        ]
    },
 'link to':'share',
  share :function
  share (ion)
    { var object = {object:true, function:true}
        , skip   = share.with.our.skip
        , thi$   = share.with.its
        , spaces = thi$.spaces
        , things = ion.link ===  '*' ?  ion.with.its/*.with || ion.with*/ || ion : ion.to ? ion.link : ion.share
        , to     = ion.to   ||  (ion.re && ion.re.id) || ''
        ; ('*' === to) && (to = null)//Object.keys (thi$.spaces))
        ; Array.isArray   (to)  || (to = [to])

      for (var thing in things)
        { if (( ('boolean' == typeof ion [thing]) && !ion [thing])
          ||  ( ('re'     ===             thing ) &&  ion.re     !== true)
          ||  (                     skip [thing]  &&  ion[thing] !== true)
          ||     ~thing.indexOf ('@') &&  true   !==  ion [thing])
          continue

          for
            ( var T = to.length, name=thing, id, space, from={id:null}
            ;     T--
            ;    id = (id = to[T]) && object [typeof id] ? id.re && id.re.id : id
            , space = thi$.space (String (id || ''))
            , space [name]
                = typeof (thing = things [name]) == 'string'
                ?    ion [thing]
                :         thing
            );
        }
    },

  spaceInfo:
    [ "note: Returns, and if needed, creates a space based on id's @domain"
    , 'todo: ...'
    ],
  space :function
  space (id)
    { var share  = space.with.our
        , spaces = share.spaces
        , domain = String (id || '').match (/@(.*)/)
        ; domain = domain  && domain [1] || 'all'

      return  spaces [domain] || (spaces [domain] = {})
        //|| (spaces [domain] = Object.create (parent || spaces.null))
    }
}
;
