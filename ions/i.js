;
~
{ re:
    { id: 'documenter@ions.iskitz.net'
    , is: "an ion that observes & presents live code documentation"
    , by: 'mike.lee@iskitz.net'
    , on: -4.200709
    , to: -7.20181101
    , at: -0.1

    , it: "provides these apis:"
        + " ~I: do documentation once; only 1st time.          "
        + " ~i: do documentation every time.                   "
        
    , im: "intentionally disabling ~i for now & am planning to improve this ion"
        + "over time & move it to ionify's core or ionified.net."
    }

, on: 'I', I
: function I (ion)
    { var message = ion.I
    ; if (message.presented) return
    ;     message.presented = true
    ~ {log:"I"+ String (message)}
    }

, on: 'i', i//gnore
: function i (ion)
    { ~ {log:"i "+ String (ion.i)}
    }
}
;