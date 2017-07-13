;
+
{ re:
    { id: "todo@ionify"
    , is: "ionify's list of things To Do"
    , by:["mike.lee@iskitz", "team@ionify"]
    , at: "2017.07.13-07...2007.09-04"
    },

  bugs:
    [ "getId: future: Generates 1st ids in middle of nextid@'s sequence."
    + "       Will lead to those ids being reused twice sooner than necessary."
    , "link : Relinks ions. Update to track linked ions"
    , "   do: Find's itself doing +window.do..."
    ],

  todo:
    [ {syntax:
        {20170713:
          ["Thinking of how to enable non-NaN ion return values for"

                 +{random:10} <= 7

            ||" ionify doesn't currently do this in its +{} sensor because it"
            + " senses & activates as many of all known actions as found within"
            + " each which means multiple possible return values but ions evaluate"
            + " as single-value numeric expressions."

            + "I'll sense when an ion has only one matching action then return that"
            + " singluar value. Multi-action ions can have all results saved in an"
            + " ion.got property that maps actions to their results; initial idea:"

                +{ get:"ion@domain", use:"member", as:"mine", in:"wrong.id@domain"
                 , got: {get:"yes", "use as in": {no:"no known ion with wrong.id"}}
                 }
          ]
        ,20170711:
          [ /aesop/
          , "   as api docs use functionName.re =  /documentation.../"
          , "   as comment, can use as          <- /comment.../ ['~ . ~']"
          ]
          ,
         20170710:
          [ /logic statements can be confusing when mapping to english, e.g./
          + /   if thing doesn't exist or is not an array or function/
          + /no if (!thing || !Array.isArray (thing) || typeof thing != "function")/
          + /ok if (!thing || !Array.isArray (thing) && typeof thing != "function")/

          , /Support ECMAScript 3- via minimal pollyfill for things like/
          + / Array.pop/
          ]
        }

      ,structure:
        {20170711:
          [ `ion Type sensor delegator

             It may be more sensible to create an ion Type sensor delegator that
             ensures all ions have an id & that they & their ionified content have
             a reference to their host ion.

             It may then also make sense to have an ion Type cleanup that removes
             those ion references for memory performance. May be good enough to
             only note this for now & revisit if performance needs to be improved.

             The delegator would do common actions for all ion types then delegate
             to the relevant ion's Type sensor.
            `
          ]
        }
      }
    , {20161119:
        [/ api: Make 0.1 branch/
        ,/ api: Move code in public branch to 0.1 branch/
        ,/ api: Delete code in public branch/
        ,/ api: Add recent changes to 0.1 branch/
        ,/ dox: Create ions sub-directory + move to it/
        ]
      }
    , {20161117: "Move re.in to mike.lee@ionify.net + team@ionify.net ions"}
    , {20161116: "ionify guarantees that each ion will have this content:"}
          +
          { re: {id: "name[@domain|ip].api", at:"moment"}
                + "Missing info will be set based on the ion's "
                +   "script's | hosts' info [location, timestamp, etc.]"
                ,
            do: [ "1orMoreActions", oneOrMoreReferences]
                + "ions that do things must have a do: that lists all actions"
                + "do will have a .ion = ion property to maintain scope. All "
                +   "ion actions that're objects will have this property."
                +   "?.ion will be cleared after actions complete"
                + "do will contain the public actions to do with this ion"
                + "Each action will be converted to:"
                +     {action:"name", ion:this, doing:false|true, done:false|true}
                +     "doing is false until set to true once the act begins."
                +     "done  is false until set to true once the act completes."
          }

    , "get: path calculation + resolution"
    +     "extract + use relevant logic from ajile.net"

    , "get@"
    +     { on:
              [["get", "then"]
              , "get"
              ]
          }
    + "get then: gets something then does something"
    +     "? maybe then should be its own word not attached to get"
    +     "? maybe ionify should just handle aesop:free.form.text"
    +         { on: "then"
                  ,
                do:
                  [ {if:"ion"}    // throw handled exception if not to stop do'ing
                  , {if:"ion", is:"aesop", do:"isAesop", else:"isIon"}
                  ]
                  ,
                ion: null         //td: auto create + set by ionify
                  ,
                isAesop:          // use object with numeric members as easier to understand array
                                  // objects can hold 2^26 more numeric indices than arrays per ES6's spec
                                  // add a ".last" member that maps to its length - 1: getObject().last > getObject() [getObject().length - 1]
                  {1: "in +then's phrase"
                  ,2: "find words +before +then"
                  ,3: "find words +after  +then."   //'.' means the end of a set of steps. each step not ending in a dot means do it after the previous one and before the next
                  ,4: "match +actions to +before words."
                  ,5: "do +actions and keep their +results."
                  ,6: "after all +actions end"
                  ,7: "match +actions to +after words"
                  ,8: "do +actions with +results."
                  }
                  ,
                isIon:
                  [ "in +then's ion"
                  , "match +actions to +do(s)"
                  , {isAesop:[5,6]}
                  , "do all +do action(s), sense when they complete, and keep their +results"
                  , "match +actions to +then(s)"
                  , {isAesop:8}
                  ]
              }

    , "+[] +{do:[]} +etc : should all pass themselves as the context for all sub-actions"

    , "on: performance: Find the most unique + fewest terms per grammar"
    + "    Track frequency of terms within a grammar + other grammars"
    +         {       id: 'web@ionify'
              ,    terms: {get:3, do:1, use:1, log:1}
              , grammars: 4
              }
    + "    Log when multiple grammars use same terms"
    + "       : 75% of actions use {get, do}. Add type + value info for ++speed"
    + "       : Details like the datatype of each term's accepted values"
    + "         or a range or set of accepted values."

    , "on: sensorsmap: Maps each sensor to its id"
    , "on: actiongram: Maps each grammar to its matching action"
    , "on: sensorgram: Maps each actiongram to its matching sensor id"
    , "on: syntaxgram: Maps each unique word + symbol + to a matching grammar"

    , "on: Get each ion's members' names (keys)"
    , "on: Match each ion's members' names with grammars in syntaxgram"
    , "on: Activate grammars matching ion member names, sensormap + actiongram"

    , "no: Make sensor to disable + enable other sensors; useful for skipping"
    +     "re's within functions in production code. Could create for use with"
    +     "any action."

    , "re: Make sensor for this action that generates API documents"

    , "do: start action(s): ion's start method"
    , "no:   end action(s): ion's stop  method"
    , "get: do: action(s) done after get completes"
    , "get: Resolve ids to urls + file paths"

    , "on: update to handle word patterns"
        +
        { on:
           [ ['get','do']
           , ['get','use']
           ,  'get'
           ]
        },

    + ["string +template with +namespaced.values"]
    + { fill: "+template's +values"   , from:["..."]}
    + { fill: "+template's +values"   , with:["..."]}
    + { fill: "+template with +values",   in:["..."]}

    + { errors:
         { debug: []
         , error: ["noDOM"]
         ,  info: []
         ,   log: []
         ,  warn: []
         ,   for:
              { noDOM: "+ion.id needs DOM access"
              }
         }
      }
    ],  //+ionify.re.todo

  done:
    { "year[.month.day.hour.minute.second][+-]timezoneHours[.minutesOffset]":
        [
        ],

      "2016.09.14-07":
        [ "onObject: Ignores "
        ],
      "2016.09.10-07":
        [ "on: Generate an id for each sensor (sensing ion) that has none"
        ],

      "2016.09.09-07":
        [ "get: Design its grammars: get [+do] [+use]"
        , "get: Enable sensing it"
        ]
    }
}
; //+todo@ionify