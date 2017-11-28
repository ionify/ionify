;
~
{ re:
    { id: "punctuation.test.0.1@ionify"
    , is: "A suite of tests for ion punctuation"
    , by: "mike.lee@ionify"
    , at: "2017.11.28-08...2017.11.11-08"
    }
}

Object.prototype.valueOf
= function ion ()
    { !ion.count && (ion.count = 1)
    ; console.log ("ion "+ion.count++)
    ; return 7
    }

~
[[] == 777
,[] == true
,[] == "string"
,[] != 767
,[] != true
,[] != "string"

,/ /== 777
,/ /== true
,/ /== "string"
,/ /!= 767
,/ /!= true
,/ /!="string"

,{} == 777
,{} == true
,{} == "string"
,{} != 767
,{} != false
,{} != "string"

,[] == []           // nope
,{} == {}           // nope
,/ /==/ /           // nope

,[] != []           // nope
,{} != {}           // nope
,/ /!=/ /           // nope

,[] == {}           // nope
,[] == / /          // nope
,{} == / /          // nope
,{} == Function     // nope

,{} != / /          // nope
,[] != {}           // nope
,[] != / /          // nope
]
;