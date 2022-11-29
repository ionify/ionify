;
~
{ re:
    { id:  're.do.as.of@ionify'
    , of: ['core','public','sion','context','api']
    , as: {specification:-0.001, sensation:-0.001, convention:-0.001}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike👨🏾‍💻lee', 'team✨ionify']
    , on:  -4.200709
    , to:  -7.20221129
    , at:  -0.010
    , is:
        [ "ionify's re: .do@ .as@ .of@ api convention@ that validates & sets: "
        , "re.of & corresponding ionosphere spaces"
        , "re.as & ~gets them to enable   the ion's ionosphere-interactions"
        , "re.do & ~gets them to activate the ion's capabilities."
        , "interpreting re.do & re.as arrays as relations to ~get sequentially"
        ],
      go:
        { meet: 'https://meet.ionify.net/'
        , seek: 'https://seek.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , test:
              [ 'https://github.com/ionify/ionify/blob/public/ions/re.of.test.js'
              , 'https://github.com/ionify/ionify/blob/public/ions/re.do.test.js'
              , 'https://github.com/ionify/ionify/blob/public/ions/re.as.test.js'
              ]
        , code: 'https://github.com/ionify/ionify/blob/public/ions/re.of.do.as.js'
        , plan: 'https://plan.ionify.net/'
        , join: 'https://join.ionify.net/'
        , team: 'https://team.ionify.net/'
        },
      we:
        [ "WILL MOVE .resolve() to get@ since it should primarily do resolution"
        , "WILL MOVE so@re@ here to be re.do & re.as validation@ convention@s."
        , "WANT fast⏱ tag & skip of relation groups already in:lined & dom@ined"
        ,
        [ "NOTE re.do won't re~get ions unless ions state ~get: once, every, batch, ..."
        ,
        ,     " once: ~get the ion only 1 time in an application session"
        ,     "every: ~get the ion every  time it's requested"
        ,     "batch: ~get the ion once per ~get:[] batch"
        ,
        , "normal applications'll likely expect batch behavior, so its default."
        , "configurations state ~get behavior for their @domain & re.of:spaces"
        ]
        , "must"
        , "will"
        , "plan"
        ,
        [ "muse how to re.do like do.get: ./ionify/,./proof/app/add.savi.adopt?"
        , "like relation@s of id@[path|domain] resolving paths before domains, "
        , "then re.do: ['ions@ionify', 'add.savi.adopt@app'] 🙇🏾‍♂️ יהוה 🤲🏾"
        , "like re.do: '@[path|domain] meaning ions@[path|domain]'"
        ]
        , "want re.of.* & with.the.* converted to name@ion.re.domain.name "
        + "unless they already are. all spaces are name@domain where domain can "
        + "be blank. ~name.search (/@/) ||  (name += domain.full). "
        + "must see ideas re: dot.notation nested.space access & naming; .@how?"
        ]
    },

  on:
 '*',
 '*':function
  re( ion )
    { var with_ = re.with
        , sense = with_.its

      with_.our.acquisition.gots [ion.re.id] = true
      sense.of (ion)
      sense.as (ion)
      sense.do (ion)
    },

  valueOf:function
  ionify ()
    { var    RE   = this
    ; RE.do.with  = RE.resolve.with = RE.of.with = RE['*'].with = {its:RE}
    ; delete RE.valueOf <= RE
    },

  of:function
  of( ion )
    { var spaces  = of.with.our.spaces
        , domain  = ion.re.id.domain.name
        , ofs     = ion.re.of
        , with_   = ion.with
        , the     = with_.the
        , space   , name

      ofs.domain  = domain == '' ? with_.all : ofs[domain] = the[domain]

      for // resolve all re.of's to space instances & ensure they're in .the/
        ( var f=-1, F=ofs.length
        ;  ++ f  <  F          ;
        )
        { name = ofs [f]
          if (!name) continue
          space  = spaces [name]

          space || name in spaces ||
         (space  = spaces [name]   = {})

          ofs [name]  =  space
          the [name] || (the[name] = space)
        }
    },

  as:function
  as( ion )
    { as.with.its.via ({for:ion, from:ion.re.as})
    },

  do:function
  d0( ion )
    { d0.with.its.via ({for:ion, from:ion.re.do})
    },

  via:function
  via( relation )
    { var re            = relation.for.re
        , domain        = re.id.domain.full
        , from          = relation.from
        , with_         = via.with
        , RE            = with_.its
        , acquisition   = with_.our.acquisition
        , how           = acquisition.order [Array.isArray (from)]
        , ions          = RE.resolve ({via:from, at:domain})
        ; ions && ions.length && acquisition ({get:ions, from:domain, in:how})
    },

  resolve :function
  resolve (it)
    { var  relations = resolve.with.our.configuration.relations
      if (!relations)  return

      var group
        , with_ = resolve.with
        , gets  = with_.our.acquisition.gets
        , gots  = with_.our.acquisition.gots
        , NAME  =(/(.*)@$/)
        , ionify='@ionify'
        , domain= it.at
        , via   = it.via
        , array = Array.isArray (via)
        , want  = []

      for
        ( var relation in via )
        {
          if(array ? isFinite (relation) : ! via.hasOwnProperty (relation))
            continue

          group = relations [relation] || [relation]

          for
            ( var g=-1, was=relation
            ;  ++ g  <  group.length;
            )
            { if(   (relation = group[g])
                && !~relation.indexOf('@')                  //⏱fast: it's a relation group alias     🙇🏾‍♂️ ה 🤲🏾
                &&  (relation = relations [relation])       //⏱fast: get the group for in-lining     🙇🏾‍♂️ ה 🤲🏾
                &&   relation.unshift (g, 1)                //🛠es.2019.array.flat.es.5.polyfill.start🙇🏾‍♂️ ה 🤲🏾
                &&  (group.splice.apply (group, relation))  //⏱fast: in-line alias with relation(s)  🙇🏾‍♂️ ה 🤲🏾
                &&  (relation.shift(), relation.shift())    //🛠es.2019.array.flat.es.5.polyfill.stop 🙇🏾‍♂️ ה 🤲🏾
                &&  (g -= 1)  //🙇🏾‍♂️ יהוה 🤲🏾 nested aliases resolve by not skipping relation group
                )   continue

              (relation || (relation = group[g]))
                &&  ( group[g]
                    = relation
                    = relation.replace (NAME, '$1' + (was == group[g] ? domain
                                                                      : ionify))
                    )
                &&  !gots [relation]
                &&  !want [relation]
                &&   want.push (relation)
                &&  (want [relation] = want.length-1)
            }
        }

      return want
    }
}
;