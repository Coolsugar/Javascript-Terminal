console.log("Loaded dev_log.js")
var realConsoleLog = console.log;
console.log = function () {
    var msg = [].join.call(arguments, " ");
    $(".data_dev_log").text(msg);
    realConsoleLog.apply(console, arguments);
    var text = document.getElementById('output').innerHTML;
    var conf = document.getElementById('data_dev_logid').innerHTML;
    function funcOutD(out){output.innerHTML = text + '<br><br>' + out};
    if(conf == 'T'){
        document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + '<br><br>' + document.getElementsByClassName('data_dev_log').innerHTML;
        funcOutD(`[Terminal_DEV]: console.log > ` + document.getElementById('data_dev_log').innerHTML);
    }
};
var realConsoleWarn = console.warn;
console.warn = function () {
    var msg = [].join.call(arguments, " ");
    $(".data_dev_log").text(msg);
    realConsoleWarn.apply(console, arguments);
    var text = document.getElementById('output').innerHTML;
    var conf = document.getElementById('data_dev_logid').innerHTML;
    function funcOutD(out){output.innerHTML = text + '<br><br>' + out}
    if(conf == 'T'){
        document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + '<br><br>' + document.getElementsByClassName('data_dev_log').innerHTML;
        funcOutD(`[Terminal_DEV]: console.warn > ` + document.getElementById('data_dev_log').innerHTML);
    }
};
var realConsoleError = console.error;
/*console.error = function () {
    var msg = [].join.call(arguments, " ");
    $(".data_dev_log").text(msg);
    console.warn("Dev logging for errors is unavialable at the moment.")
    //realConsoleError.apply(console, arguments);
    var text = document.getElementById('output').innerHTML;
    var conf = document.getElementById('data_dev_logid').innerHTML;
    function funcOutD(out){output.innerHTML = text + '<br><br>' + out};
    console.error("2")
    if(conf == 'T'){
        document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + '<br><br>' + document.getElementsByClassName('data_dev_log').innerHTML;
        funcOutD(`[Terminal_DEV]: console.error > ` + document.getElementById('data_dev_log').innerHTML);
    }
};*/