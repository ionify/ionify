;
~
{ re:
    { id:  'context@ionify'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -4.200709
    , to:  -8.20181210
    , is:  -0.1
    , it:
        [" provides context via ~link which ensures ions' object-type members can   "
        ,/ access their containing ion, ~share for sharing things via domains,      /
        ,/ optionally aliased data and-or functionality, and ~find.in for resolving /
        ,/ names to ions.                                                           /
        ]
    , we:
        [/ will update share() to use getSpace().                                   /
        ,/ will implement ~link.as & ~link.to.                                      /
        ,/ will apply unlink when ~link.to is falsey.                               /
        ,/ want re.is:version(s), re.at:@domain(s), re.it:about & re.we:plan(s).    /
        ,/ want all hip & hiphop ions did valueOf:hiphop --> start --> valueOf:hop. /
        ,/ like renaming link.share@ to context@ but want names to match content... /
        ,/ like exploring how prototypes enable automatic context sharing.          /
        ]
    }

, on
:   [ ['find', 'in']
    , ['link', 'to']
    , ['link', 'as']
    , ['link']
    , ['share', 'with']
    , ['share']
    ]

, valueOf
:   function hip    ()
      { this.ionify ()
      ; delete this.valueOf
      ~ this
      }

, ionify
:   function ionify ()
      { this . link ()
      ; this ["share with"]
            ({  with: this.re.id                  // <= 👨🏾‍💻re.at:domain auto-populated from re.id
             , share: {  find: this ["find in"]   // will resolve things to actual references
                      ,  link: this . link
                      , share: this ["share with"]
                      , space: this . getSpace
      }     })        }

, "find in"
:   function resolving (ion)
      { var name      = ion.find
          , to        = ion.in
          , ionified  = resolving.our.ionified
          , found	    , last
          ;
        while (last != to)    // bug? might infinitely loop on circular .ion's | .our's
          { last = to
          ; if ( to.ion && ionified [typeof (found = to.ion [name]) ] ) break
          ; if ( to.our && ionified [typeof (found = to.our [name]) ] ) break
          ; to = to.ion
          }
        return (ion.in [name] = found)
      }

, linkInfo
:   [{note:/ ~{link: true, false} is auto-enabled-true /}
    ,{todo:/ enable batch link ([ion, object, more])   /}
    ,{todo:/ enable +{link:ion, to:thing}              /}
    ,{todo:/ enable ~{link:ion, as:{member:thing}}     /}
    ,{idea:/ ion.this  --> ion.ionId & ion.ion         /}
    ]
, link
:   function link (ion)
      { ion || (ion = link.ion || (link.ion = (link == this.link) && this))

        var property
          , thing
          , debug = []
          , id    = (ion.re ? ion.re.id : null) || 'ion'
          , space = link.ion.getSpace (id)
          ; id    = id.replace (/(.+)(@|\.\d\.).*/, '$1')
          ;
    //**/Object.setPrototypeOf (space, ion.__proto__)//prototype)
    //**/Object.setPrototypeOf (  ion, space)
      //ion.ion = ion.ion || ion

        for (property in ion)
          { thing = ion [property]
          ; if (!thing)                                               continue
          ; if (typeof thing != 'function' && !Array.isArray (thing)) continue
          ; if (!ion.hasOwnProperty (property))                       continue
          ! thing.this &&           (thing.this = ion)
          ! thing.ion  &&        (/* thing [id] = */  thing.ion = ion)
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
:   [ /todo: enable +{unlink: ion, from: thing}/
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
:   [ /note: .../
    , /todo: create +{share: {thing:..., other:...}, with:[ion.ids]}/
    ]
, share
:"share with"
,"share with"
:   function share (ion)
      { var thi$   = share.ion || (share == this.share ? this : null)
          , spaces = thi$.spaces
          , things = ion.share
          , wyth   = ion.with || (ion.re && ion.re.id) || ''
          , space  = thi$.getSpace (wyth)
        //, domain = wyth.match (/@(.*)/)
        //; domain = domain && domain [1]
//console.log (ion, wyth, domain, thi$, spaces)
        //; space  = spaces [domain] || (spaces [domain] = {})
          ;
        for (var thing in things)
          {  space  [thing]
          =  typeof (thing = things [thing]) == 'string'
          ?  ion    [thing]
          :          thing
          }
      }

, spacesInfo
:   [ /note: ion-domain-based spaces/
    , /todo: .../
    ]
, spaces
:   { null: {}
    }

, getSpaceInfo
:   [ /note: Returns & if needed, creates a space based on id's @domain/
    , /todo: .../
    ]
, getSpace
:   function getSpace (id)
      { var share  = getSpace.ion || (getSpace == this.getSpace ? this : null)
          , spaces = share.spaces
          , domain = id.match (/@(.*)/)
          ; domain = domain && domain [1]
          ;
        return spaces [domain] || (spaces [domain] = {})
      }
}
;