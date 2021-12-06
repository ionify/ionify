;
~
{ re:
    { id:  'find.link.share@ionify'
    , of: ['core','context']
    , as: ['convention']
    , by: ['mike.👨🏾‍💻.lee','team']
    , on: { 200709   : -4      }
    , to: { 20221031 : -7.0643 }
    , at:  -0.060
    , is:
        [ "providing context via ~link which ensures ions' object-type members can  "
        + 'access their containing ion, ~share for sharing things via domains,      '
        + 'optionally aliased data and-or functionality, and ~find.in for resolving '
        + 'names to ions.                                                           '
        ],
      go:
        { seek: 'https://api.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://github.com/ionify/ionify/issues'
        , code: 'https://github.com/ionify/ionify/blob/public/ions/find.link.share.js'
        , test: 'https://github.com/ionify/ionify/blob/public/ions/find.test.js'
      //, test: 'https://github.com/ionify/ionify/blob/public/ions/link.test.js'
        , plan: 'https://github.com/ionify/ionify/projects/1?fullscreen=true'
        , join: 'https://github.com/ionify/about/tree/public/team'
        },
      we:
        [ "plan to have top-level-ids reference entire ion not just its re & "
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

  the:
    { domain:
        { find  : 'find.link.share@ionify:find'
        , link  : 'find.link.share@ionify:link'
        , share : 'find.link.share@ionify:share'
        , space : 'find.link.share@ionify:space'
        }
    },

  valueOf:function
  ionify()
    { var   domain  = this.the.domain
      domain.find   = this.find
      domain.link   = this.link
      domain.share  = this.share
      domain.space  = this.space

      this.link.with  =
      this.share.with =
      this.space.with = {its:this}

      delete this.valueOf <- this
    },

 'find in as':'find',
 'find in'   :'find',
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

  valueOf :function
  ionify  ()
    {   this.find_link_share ()
    ;   delete this.valueOf
    ; ~ this
    },

  linkInfo:
    [~/were implementing .our.* --> .with.doma.in.*               /
    ,~/MUST fix callee.caller.our 🐛 exposing ionify's domain space/
    ,~/like linking {}s & ~link keeping their id-mapped with & our/
    ,' want .with .doma .in.expanded.name.of.shared.thing:        '
    +"      .with$.doma$.in.expanded auto-added $'s on conflicts  "
    ,' want to move id@domain matching to its own ion then share it'
    ,' like id@domain matching with /(.*)([-+]\d+.*^@)|(@.*)/     '
    ,' will enable   + {link:ion, to:thing}                       '
    ,' like enabling ~ {link: true|false } with true as default   '
    ,' like enabling ~ {link: [ion, object, more])                '
    ,' like enabling ~ {link:ion, as:{member:thing}}              '
    ],
 'link as':'link',
  link:
    function link (ion)
      { ion || (ion =  link.with || (link.with = (link == this.link) &&  this))
                    //(link.of   || (link.of   = (link == this.link) && (this.of.my = this, this.of))).my)

 'find in as':'find',
 'find in'   :'find',
  find :function
  find (action)
    { var name      = action.find
    ,     to        = action.in
    ,     as        = ('as' in action) ? action.as : name
    ,     ionified  = find.with.our.ionified
    ,     context   = find.with.its
    ,     found
    ,     last

    ; while
        ( last != to)    // bug? might infinitely loop on circular .with's | .our's
        { last  = to
        ; if ( found    = context.find_alias ({find:name, in:to})         ) break
        ; if ( to.with && ionified [typeof (found = to.with.its [name]) ] ) break
        ; if ( to.with && ionified [typeof (found = to.with.our [name]) ] ) break
        ; if ( to.with )  {                    to = to.with.its      } else break
        }

    ; found  && (action.in [as] = found)
    ; return !! found
    },

  find_alias :function
  find_alias (action)
    { var thing    = action.find
    ,     place    = action.in
    ,     ionified = find_alias.with.our.ionified
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

      var property
        , thing
        , our   = link.with.our
        , debug = []
        , debugging = !!(our && our.logging && our.logging.debug)
        , id        = (ion.re ? ion.re.id : null) || 'ion'
        , space     = link.with.its.space (id)
        , domain    = id.match (/@(.*)/) || ''
        ; domain    = domain && domain [1]
        ; id        = id.replace (/(.+)(@|\.\d\.).*/, '$1')

      for (property in ion)
        { thing = ion [property]
          if (!thing)                                                 continue
          if ((typeof thing != 'function') && !Array.isArray (thing)) continue
          if (!ion.hasOwnProperty (property))                         continue
        //thing.our      ||   space   && (thing.our  = /*|| ion ||*/ space)
          debugging      &&
          ((id != 'ion') && ion.debug || debug.push ('linked '+ id +'.'+ property))
        } debugging      && ion.debug || debug.length &&  our.debug ({debug:debug})

      return true
        var property
          , thing
          , debug = []
          , can   = {function:true, object:true}
          , my    = link./*of.my/*/with
          , skip  = my.of.our['*'].skip
          , id    = (ion.re ? ion.re.id : null) || 'ion@'
          , domain= id.match(/@(.*)/)
          , it    = id.replace (/(.+)(@|[-\.]\d\.).*/, '$1')
          , space = my.getSpace (id)
        //, space = my.get_sion_space ({id:id})
          ; domain = domain ? domain[1] : ''

        for (property in ion)
          { thing = ion [property]
            if (!thing || skip [property] || !can [typeof thing])       continue
        /**/if ((typeof thing != 'function') && !Array.isArray (thing)) continue
            if (!ion.hasOwnProperty (property))                         continue
          //my.sion ({ion:ion, domain:domain, our:space})
            thing.with  ||              (thing.with  = ion)
          //thing.with  ||              (thing.with$ = ion)
            thing.our   ||  space    && (thing.our   = /*(thing.with$||thing.with)[domain] = /*|| ion ||*/ space)
            ion.debug   || (it != 'ion') && debug.push ('\n\tlinked '+ it +' ['+ property +']')
          }

        ion.debug || debug.length && ~{debug:debug}
        return true
      },
  sion :function
  sion (from)
    { sion.of || (sion.of = (sion == this.sion) && (this.of.my = this, this.of))

      var my      = sion.of.my//with
        , skip    = my.of.our['*'].skip
        , spaces  = my.spaces
        , our     = from.our || my.get_sion_space (domain)
        , all     = spaces.null
        , ion     = from.ion
        , of      = ion.of  || (ion.of = {my:ion, our:our, '*':all})
        , ofs     = ion.re.of
        ; domain  = from.domain
        , from    = {id:null, parent:null}

                        of.my       || (of.my       =  ion)
                        of.our      || (of.our      =  our)
                        of.our['*'] || (of.our['*'] =  all)
        Array.isArray ( ofs )       || (ofs         = [ofs])

        for // link re.of spaces + space_domain <= space@domain alias
          ( var S = ofs.length, s//,   fs
          ;     S--, (s  = ofs [S]), S+1
          ; ~s.indexOf('@') || (s +='@'+domain)
          ,  of.our[s] = spaces[s]  || my.get_sion_space ((from.id=s, from.parent=my.get_sion_space((from.id=s,from.parent=null,from)), from))
        //,  fs = s.replace('@','_')
        //,  of.our[fs] = spaces[fs] = of.our[s]
          );

        if( of.our == our ) return

        for // link & merge of.our spaces
          ( var name in of.our)
          { s = of.our [name]
          ; if(    our [name] == s || skip [name]/*|| !s*/) continue
      /**/; if(!of.our.hasOwnProperty (name))               continue
            if(!(name in our))  { our [name] = {}}//;           continue}
            for
              ( var m in s)
              { if(!s.hasOwnProperty(m))continue
              ; our [name][m] = s[m]
              ;   s       [m] = null
              }
        //;    our [name] = s
          ; of.our [name] = null
          } of.our        = our
    },

  unlinkInfo:
    [ 'todo: enable +{unlink: ion, from: thing}'
    ],
  unlink:
    function unlink (ion)
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
    [' ... '
    ," will fix ~share:'*' to resolve shared things; now assumes ~do:[{share:'*'}] "
    ,' will create +{share: {thing:..., other:...}, with:[ion.ids]} '
    ],
 'link to':'share',
  share:
    function share (ion)
      { var thi$   = share.with || (share == this.share ? this : null)
          , spaces = thi$.spaces
          , object = {object:true,function:true}
          , things = ion.link ==  '*' ? ion.with.with  || ion.with || ion : ion.to ? ion.link : ion.share
          , to     = ion.to   || (ion.re && ion.re.id) || ''
          ; ('*'  == to) && (to = Object.keys (thi$.spaces))
          ; !Array.isArray  (to) && (to = [to])

        for (var thing in things)
          { if (( ('boolean' == typeof ion [thing]) && !ion [thing])
            ||  ( ('re'      ==             thing ) &&  ion.re !== true)
            ||     ~thing.indexOf ('@') &&  true   !==  ion [thing])
            continue

            for
              ( var T = to.length, name=thing, id, space, from={id:null}
              ;     T--
              ;    id = (id = to[T]) && object [typeof id] ? id.re && id.re.id : id
              , space = thi$.getSpace (id)//.get_sion_space ((from.id=id, from))
              , space [name]
                  = typeof (thing = things [name]) == 'string'
                  ?    ion [thing]
                  :         thing
              );
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
    { var thi$   = share.with.its
        , spaces = thi$.spaces
        , things = ion.link ===  '*' ?  ion.with.its/*.with || ion.with*/ || ion : ion.to ? ion.link : ion.share
        , to     = ion.to   ||  (ion.re && ion.re.id) || ''
        , space  = thi$.space (to)
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
    [ 'note: ion-domain-based spaces'
    , 'todo: ...'
    ],
  spaces:
    { null: {}
    },

  spaceInfo:
    [ "note: Returns & if needed, creates a space based on id's @domain"
    , 'todo: ...'
    ],
  space :function
  space (id)
    { var share  = space.with.our
        , spaces = share.spaces
        , domain = id.match (/@(.*)/)
        ; domain = domain && domain [1] || 'all'

      return  spaces [domain]
        //|| (spaces [domain] = Object.create (parent || spaces.null))
    }
}
;