function readText (form) {
    var sprice = document.getElementById("sprice").value 
    var dprice = document.getElementById("dprice").value
    var doprice = document.getElementById("doprice").value
    var xprice = document.getElementById("xprice").value
    TestVar =$("#test option:selected").text();
    Test2Var =$("#test2 option:selected").text();
    var num = document.getElementById("number").value;
    if (TestVar == "STR" && Test2Var == "BTC") {
        var num = document.getElementById("number").value;
        var btcp = (num / sprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "BTC" && Test2Var == "STR") {
        var btcp = (num * sprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "BTC" && Test2Var == "XRP") {
        var btcp = (num * xprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "DOGE" && Test2Var == "XRP") {
        var btcp = (num * doprice);
        var btcp = (btcp * xprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "STR" && Test2Var == "XRP") {
        var btcp = (num / sprice);
        var btcp = (btcp * xprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "USD" && Test2Var == "XRP") {
        var btcp = (num / dprice);
        var btcp = (btcp * xprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "XRP" && Test2Var == "BTC") {
        var btcp = (num / xprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "XRP" && Test2Var == "DOGE") {
        var btcp = (num / xprice);
        var jtcp = (btcp / doprice);
        document.getElementById("answer").value = jtcp;
    }
    else if (TestVar == "XRP" && Test2Var == "USD") {
        var btcp = (num / xprice);
        var ptcp = (btcp * dprice);
        document.getElementById("answer").value = ptcp;
    }
    else if (TestVar == "XRP" && Test2Var == "STR") {
        var btcp = (num / xprice);
        var ztcp = (btcp * sprice);
        document.getElementById("answer").value = ztcp;
    }
    else if (TestVar == "BTC" && Test2Var == "BTC") {
        document.getElementById("answer").value = num;
    }
    else if (TestVar == "STR" && Test2Var == "STR") {
        document.getElementById("answer").value = num;
    }
    else if (TestVar == "DOGE" && Test2Var == "DOGE") {
        document.getElementById("answer").value = num;
    }
    else if (TestVar == "USD" && Test2Var == "USD") {
        document.getElementById("answer").value = num;
    }
    else if (TestVar == "DOGE" && Test2Var == "BTC") {
        var btcp = (num * doprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "DOGE" && Test2Var == "USD") {
        var btcp = (num * doprice);
        var dtcp = (btcp * dprice);
        document.getElementById("answer").value = dtcp;
    }
    else if (TestVar == "BTC" && Test2Var == "DOGE") {
        var btcp = (num / doprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "BTC" && Test2Var == "USD") {
        var btcp = (num * dprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "USD" && Test2Var == "DOGE") {
        var btcp = (num / dprice);
        var qtcp = (btcp / doprice);
        document.getElementById("answer").value = qtcp;
    }
    else if (TestVar == "USD" && Test2Var == "BTC") {
        var btcp = (num / dprice);
        document.getElementById("answer").value = btcp;
    }
    else if (TestVar == "USD" && Test2Var == "STR") {
        var btcp = (num / dprice);
        var utcp = (btcp * sprice);
        document.getElementById("answer").value = utcp;
    }
    else if (TestVar == "STR" && Test2Var == "USD") {
        var btcp = (num / sprice);
        var ttcp = (btcp * dprice);
        document.getElementById("answer").value = ttcp;
    }
    else if (TestVar == "STR" && Test2Var == "DOGE") {
        var btcp = (num / sprice);
        var ttcp = (btcp / doprice);
        document.getElementById("answer").value = ttcp;
    }
    else if (TestVar == "DOGE" && Test2Var == "STR") {
        var btcp = (num * doprice);
        var mtcp = (btcp * sprice);
        document.getElementById("answer").value = mtcp;
    }
}
