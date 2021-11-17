;
~
{ re:
    { id:  'find.link.share@ionify'
    , is:  'action'
    , by: ['mike.lee', 'team'  ]
    , on: { 200709   : -4      }
    , to: { 20211117 : -8.1440 }
    , at:  -0.1
    , it:" provides context via ~link which ensures ions' object-type members can   "
        +" access their containing ion, ~share for sharing things via domains,      "
        +" optionally aliased data and-or functionality, and ~find.in for resolving "
        +" names to ions.                                                           "
    , we:
        [" were updating ~link & ~share to use .with vs .our  "
        ," were implementing ~link.to & ~link.as              "
        ," will apply unlink when ~link.to is falsey          "
        ," want to combine ~share & ~link.to                  "
        ," want re.is:version(s), re.at:@domain(s), re.it:about & re.we:plan(s).    "
        ," want all hip & hip-hop ions to valueOf:hiphop --> start --> valueOf:hop. "
        ," like idea of queueing ~find's then doing once ~find's available          "
        ," like that prototypes could enable automatic context sharing within ions. "
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

  valueOf:
    function find_link_share ()
      { this.ionify ()
        delete this.valueOf
      ~ this
      },

  ionify:
    function ionify ()
      { this.link   ()
        this.share
            ({ link:
                 { find: this.find
                 ,  link: this.link
                 , share: this.share
                 , space: this.getSpace
                 }
             , to: this.re.id
            })
      },

 "find in as":"find",
 "find in"   :"find",
  find:
    function find (ion)
      { var name      = ion.find
      ,     to        = ion.in
      ,     as        = ('as' in ion) ? ion.as : name
      ,     ionified  = find.our.ionified
      ,     context   = find.with
      ,     found
      ,     last

      ; while
          ( last != to)    // bug? might infinitely loop on circular .with's | .our's
          { last  = to
          ; if ( found   =  context.findName ({find:name, in:to})       ) break
          ; if ( to.with && ionified [typeof (found = to.with [name]) ] ) break
          ; if ( to.our  && ionified [typeof (found = to.our  [name]) ] ) break
          ; if ( to.with ){ to = to.with } else break
          }

      ; found  && (ion.in [as] = found)
      ; return !! found
      },

  findName:
    function name (ion)
      { var thing    = ion.find
      ,     place    = ion.in
      ,     ionified = name.our.ionified
      ,     tried    = {}
      ; while
          (!tried [thing] && thing in place)
          { tried [thing]  = true
        //; console.log (`~find ${thing} ...`)
          ; thing = place [thing]
          ; if (ionified  [typeof thing]) return thing
          }
      ; return false
      },

  linkInfo:
    [" were implementing .our.* --> .with.doma.in.*               "
    ," must move id@domain matching to its own ion then share it  "
    ," must fix callee.caller.our exposing ionify's domain space  "
    ," like linking {}s & keeping their id-mapped with & our here "
    ," like id@domain matching with /(.*)([-+]\d+.*^@)|(@.*)/     "
    ," like .with .doma .in.expanded.name.of.shared.thing:        "
    +"      .with$.doma$.in.expanded auto-added $'s on conflicts  "
    ," will enable   + {link:ion, to:thing}                       "
    ," like enabling ~ {link: true|false } with true as default   "
    ," like enabling ~ {link: [ion, object, more])                "
    ," like enabling ~ {link:ion, as:{member:thing}}              "
    ],
 "link as":"link",
  link:
    function link (ion)
      { ion || (ion = link.with || (link.with = (link == this.link) && this))

        // 🐛 via on.ion@onion.link:true workaround
        ;('boolean' == typeof ion.link) && delete ion.link

        var property
          , thing
          , debug = []
          , id    = (ion.re ? ion.re.id : null) || 'ion'
          , space = link.with.getSpace (id)
          ; id    = id.replace (/(.+)(@|\.\d\.).*/, '$1')

        for (property in ion)
          { thing = ion [property]
            if (!thing)                                                 continue
            if ((typeof thing != 'function') && !Array.isArray (thing)) continue
            if (!ion.hasOwnProperty (property))                         continue
          ! thing.with    &&              (thing.with = ion)
          ! thing.our     &&  space    && (thing.our  = /*|| ion ||*/ space)
          ; (id != 'ion') && !ion.debug && debug.push ("linked "+ id +'.'+ property)
          }

      ! ion.debug && ~{debug:debug}
        return true
      },

  unlinkInfo:
    [ "todo: enable +{unlink: ion, from: thing}"
    ],
  unlink:
    function unlink (ion)
        { ion || (unlink == this.unlink) && (ion = this);

        var property
            , thing
            , id = (ion.re ? ion.re.id : void 0) || "ion"
            ; id = id.replace (/(.+)(@|\.\d\.).*/, "$1")
            ;
        for (property in ion)
            {  thing = ion [property]
            ;  (typeof thing == "function") && (thing [id] == ion) && (delete thing [id])
            }
        },

  shareInfo:
    [" ... "
    ," will fix ~share:'*' to resolve shared things; now assumes ~do:[{share:'*'}] "
    ," will create +{share: {thing:..., other:...}, with:[ion.ids]} "
    ],
 "link to":"share",
  share:
    function share (ion)
      { var thi$   = share.with || (share == this.share ? this : null)
          , spaces = thi$.spaces
          , things = ion.link ==  '*' ? ion.with.with  || ion.with || ion : ion.to ? ion.link : ion.share
          , to     = ion.to   || (ion.re && ion.re.id) || ''
          , space  = thi$.getSpace (to)
          ;
        for (var thing in things)
          { if ((('boolean' == typeof ion [thing]) && !ion [thing])
            ||  ((thing == 're') && !ion.re))
            continue
            space [thing]
              = typeof (thing = things [thing]) == 'string'
              ? ion    [thing]
              :         thing
          }
      },

  spacesInfo:
    [ "note: ion-domain-based spaces"
    , "todo: ..."
    ],
  spaces:
    { null: {}
    },

  getSpaceInfo:
    [ "note: Returns & if needed, creates a space based on id's @domain"
    , "todo: ..."
    ],
  getSpace:
    function getSpace (id)
      { var share  = getSpace.with || (getSpace == this.getSpace ? this : null)
          , spaces = share.spaces
          , domain = id.match (/@(.*)/)
          ; domain = domain && domain [1]

        return spaces [domain] || (spaces [domain] = {})
      }
}
;