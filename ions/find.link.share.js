;
~
{ re:
    { id:  'find.link.share@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -7.20190413
    , is:  -0.1
    , it:
        [" provides context via ~link which ensures ions' object-type members can   "
        ," access their containing ion, ~share for sharing things via domains,      "
        ," optionally aliased data and-or functionality, and ~find.in for resolving "
        ," names to ions.                                                           "
        ]
    , we:
        [" were implementing ~link.to & ~link.as      "
        ," will apply unlink when ~link.to is falsey  "
        ," want to combine ~share & ~link.to          "
        ," want re.is:version(s), re.at:@domain(s), re.it:about & re.we:plan(s).    "
        ," want all hip & hip-hop ions to valueOf:hiphop --> start --> valueOf:hop. "
        ," like idea of queueing ~find's then doing once ~find's available          "
        ," like exploring how prototypes enable automatic context sharing.          "
        ]
    }

, on
:   [ [ 'link',   'to'      ]
    , [ 'link',   'as'      ]
    , [ 'link'              ]
    , [ 'find',   'in', 'as']
    , [ 'find',   'in'      ]
    , ['share'              ]
    ]

, valueOf
:   function hiphop ()
      { this.ionify ()
      ; delete this.valueOf
      ~ this
      }

, ionify
:   function ionify ()
      { this.link   ()
      ; this.share
            ({ link
             :   { find: this.find
                 ,  link: this.link
                 , share: this.share
                 , space: this.getSpace
                 }
             , to: this.re.id   // 👨🏾‍💻re.id.domain auto-populated from re.id
            })
      }

,"find in as":"find"
,"find in"   :"find"
, find
:   function find (ion)
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
      }

, findName
:   function name (ion)
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
      }

, linkInfo
:   [{note:" ~{link: true, false} is auto-enabled-true "}
    ,{todo:" enable batch link ([ion, object, more])   "}
    ,{todo:" enable +{link:ion, to:thing}              "}
    ,{todo:" enable ~{link:ion, as:{member:thing}}     "}
    ]
,"link as":"link"
, link
:   function link (ion)
      { ion || (ion = link.with || (link.with = (link == this.link) && this))

        var property
          , thing
          , debug = []
          , id    = (ion.re ? ion.re.id : null) || 'ion'
          , space = link.with.getSpace (id)
          ; id    = id.replace (/(.+)(@|\.\d\.).*/, '$1')
          ;
    //**/Object.setPrototypeOf (space, ion.__proto__)//prototype)
    //**/Object.setPrototypeOf (  ion, space)
      //ion.with = ion.with || ion

        for (property in ion)
          { thing = ion [property]
          ; if (!thing)                                                 continue
          ; if ((typeof thing != 'function') && !Array.isArray (thing)) continue
          ; if (!ion.hasOwnProperty (property))                         continue
          ! thing.with &&           (thing.with = ion)
          ! thing.our  && space  && (thing.our  = /*|| ion ||*/ space)
        //; ('function' == typeof thing) && Object.setPrototypeOf (thing, ion)
        //; (id != 'ion') &&   alert ("linked "+ id +"."+ property)
        //; (id != 'ion') && ~{debug: "linked "+ id +'.'+ property}
          ; (id != 'ion') && !ion.debug && debug.push ("linked "+ id +'.'+ property)
          }

      ! ion.debug && ~{debug:debug}
        return true
      }

, unlinkInfo
:   [ "todo: enable +{unlink: ion, from: thing}"
    ]
, unlink
:   function unlink (ion)
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
        }

, shareInfo
:   [" ... "
    ," will fix ~share:'*' to resolve shared things; now assumes ~do:[{share:'*'}] "
    ," will create +{share: {thing:..., other:...}, with:[ion.ids]} "
    ]
,"link to":"share"
, share
:   function share (ion)
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
          ; space [thing]
              = typeof (thing = things [thing]) == 'string'
              ? ion    [thing]
              :         thing
          }
      }

, spacesInfo
:   [ "note: ion-domain-based spaces"
    , "todo: ..."
    ]
, spaces
:   { null: {}
    }

, getSpaceInfo
:   [ "note: Returns & if needed, creates a space based on id's @domain"
    , "todo: ..."
    ]
, getSpace
:   function getSpace (id)
      { var share  = getSpace.with || (getSpace == this.getSpace ? this : null)
          , spaces = share.spaces
          , domain = id.match (/@(.*)/)
          ; domain = domain && domain [1]
          ;
        return spaces [domain] || (spaces [domain] = {})
      }
}
;