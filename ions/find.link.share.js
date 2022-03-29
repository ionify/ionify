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
  find_link_share :function
  find_link_share ()
    { var pending = Object.prototype.valueOf.with.ion.pending
      delete        Object.prototype.valueOf.with

      this.link (this)

      this.share
          ({ link:
                {  find: this.find
                ,  link: this.link
                , share: this.share
                , space: this.space
                ,  skip: this.with.all.skip
                }
            , to: '*'//this.re.id
          })

      for
        ( var p=-1, P=pending.length
        ;   ++p  <  P
        ; this.link (pending[p])
        );

      for
        (     p = -1
        ;   ++p < P
        ; ~pending[p]
        );
    },

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

      found  && (action.in [as] = found)
      return !! found
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

      var id = ion.re.id || 'ion@' // 'ion'
      //   , wiht  = link.with || {my:{}, all:{}, our:null, own:null}
      //   , own   = wiht.own  || (wiht.own = wiht.space (id))
      //   , self  = own.self  || (own.self = link === this.link ? this : null)
      //   , our   = wiht.our  || (wiht.our = wiht.space (domain))
      //   , all   = wiht.all  || (wiht.all = wiht.space (null))
      //   , skip  = all.skip  || (all.skip = {with:true,re:true,do:true})
      // //, it    = id.replace (/(.+)(@|[-\.]\d\.).*/, '$1')
        , it    = id.replace (/(.+)(@|\.\d\.).*/, '$1')
      // //, space = my.space (id)
      //   , space = self.space ({id:id})
      //   , can   = own.can || (own.can = {function:true, object:true})

      var our       = (link.with || ion.with).our
        , debugging = !!(our.logging && our.logging.debug)
        , debugged  = []
        , debug     = our.debug || String
        , warn      = our.warn  || String
        , can       = {function:true, object:true}
        , skip      = (link.with || ion.with).all.skip
        , thing
      for
        ( var property in ion)
        { thing = ion [property]
          if (!thing || skip [property] || !can [typeof thing])       continue
     //**/if ((typeof thing != 'function') && !Array.isArray (thing)) continue
          if (!ion.hasOwnProperty (property))                         continue
        //thing.our      ||   space   && (thing.our  = /*|| ion ||*/ space)
          debugging      &&
          ((it != 'ion') && ion.debug || debugged.push ('\n\tlinked '+ it +' ['+ property +']'))
        } debugging      && ion.debug || debugged.length && debug ({debug:debugged})

      return true
    },

  linkSpacesRe:
    [`sion link spaces flow...¿outdated? original

      -3: get find_link_share's with
      -2: set as   link.with
      -1: get find_link_share & set as ion

      0.0: get ion's re.of spaces
      0.1: set its re.of spaces' @domains
      0.2: get or set its re.of spaces on the WITH.our template

      1.0: set with template:
      1.1: .all
      1.2: .our:domain
      1.3: .our:spaces
      1.4: .its:domain.link
      1.5: .its:self.link
      1.6: .my:link:domain
      1.7: .my:link:own
      1.8: .my:link:self

      2.0: vet ion.with.all per template
      2.1: get or set ion.with
      2.2: get or set THE.all
      2.3: set THE.all with ion.all.members
      2.4: set ion.all to THE.all

      3.0: repeat 1.x for ion.with.our per template
      4.0: repeat 1.x for ion.with.lets per template

      1: set ion.with: .all:any .our:domain+spaces .own:domain+self .my:domain+own+self
      2.
      3: use ion.with: .all .our.domain
    `],

  linkSpaces :function
  linkSpaces (ion)
    { var skip    = this.with.all.skip
        , spaces  = this.spaces
        , space   = this.space
        , domain  = ion.re.id.match(/@(.*)/)
        ; domain  = domain && domain[1]

      var   WITH      = new spaces.WITH
        ,   sion      = ion.with
        ;    ion.with = WITH
        ;  (WITH.our  = {}).domain  = this.space ({id:domain})
        ;  (WITH.my   = {}).domain  = WITH.our.domain
        ;   WITH.own  = (WITH.its   = WITH.my).own = ion
        ;   WITH.all  = this.space()
        ; WITH.its[domain] = WITH.my [domain]
        = WITH.our[domain] = WITH.our.domain

      if( !sion ) return

      var
        WITHs, sions
      for// each of the sion template's with: .all .our .its .itself & .my
        /// spaces, ensure that this ion has them and all their expected
        /// member-spaces:
        ( var s in WITH)
        { if(! WITH.hasOwnProperty (s)) continue
          if(  WITH[s]   ===   sion[s]) continue
          s in sion       ||  (sion[s] = WITH[s])
          WITHs = WITH[s] ;    sions   = sion[s]

          var
            WITHm, sionm
          for// each of this ion's with: .all .our .its .itself & .my spaces,
            /// ensure that all their known: .domain .self & unknown
            /// member-spaces exist:
            ( var m in sions)
            { if(! sions.hasOwnProperty  (m)) continue //🤔 prohibits inherited sub-spaces
            //if(/*skip[m] ||*/WITHs[m]  ===  sions[m]) continue
              if(! (m in WITHs))
              WITHs[m]  = (m != 'all' && 'object' == typeof sions[m])
                        ?   this.space ({id:m, of:WITHs})
                        :   sions[m]
              sionm     =   sions[m]; WITHm= WITHs[m]
              if( WITHm === sionm) continue

                for// each of this ion's with: .all .our .its .itself & .my
                  /// spaces' member spaces, ensure their values are as expected
                  ( var v in sionm)
                  { if(! sionm.hasOwnProperty (v)) continue
                    WITHm[v] = sionm[v]
                  }
            }//for:WITH.my+its+our:domain+self+more
        }//for:WITH
    },

  sion :function
  sion (from)
    { sion.with || (sion.with = (sion === this.sion) && this.with)

      var wiTh    = sion.with
        , own     = wiTh.own
        , self    = own.self
        , skip    = wiTh.all.skip
        , spaces  = own.spaces || (own.spaces = own.self.spaces)
        , domain  = from.domain
        , our     = from.our || wiTh.space (domain)
        , all     = wiTh.all || spaces.null
        , ion     = from.ion
        , within  = ion.with || (ion.with = {my:ion, our:our, all:all})
        , ofs     = ion.re.of
        , from    = {id:null, parent:null}

                  within.own  || (within.own  =  ion)
                  within.our  || (within.our  =  our)
                  within.all  || (within.all  =  all)
        Array.isArray ( ofs ) || (ofs         = [ofs])

        for // link re.of spaces + space_domain <= space@domain alias
          ( var S = ofs.length, s,   fs
          ;     S--, (s  = ofs [S]), S+1
          ; ~s.indexOf('@') || (s +='@'+domain)
          ,  within.our[s] = spaces[s]  || self.space ((from.id=s, from.parent=self.space((from.id=s,from.parent=null,from)), from))
          ,  fs = s.replace('@','_')
          ,  within.our[fs] = spaces[fs] = within.our[s]
          );

        if( within.our === our ) return

        for // link & merge of.our spaces
          ( var name in within.our)
          { s = within.our [name]
          ; if(    our [name]=== s || skip [name]/*|| !s*/)     continue
      /**/; if(!within.our.hasOwnProperty (name))               continue
            if(!(name in our))  { our [name] = {}}//;           continue}
            for
              ( var m in s)
              { if(!s.hasOwnProperty(m))continue
              ; our [name][m] = s[m]
              ;   s       [m] = null
              }
          ;    our [name] = s
          ; within.our [name] = null
          } within.our        = our
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
    { var thi$   = share.with.its
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
            , space = thi$.space ((from.id=String(id), from))
            , space [name]
                = typeof (thing = things [name]) == 'string'
                ?    ion [thing]
                :         thing
            );
        }
    },

  spacesInfo:
    [ 'note: ion-domain-based spaces'
    , 'todo: ...'
    ],
  spaces:
    { WITH: function WITH(){}
    , null: {}
    },

  spaceInfo:
    [ "note: Returns, and if needed, creates a space based on id's @domain"
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
