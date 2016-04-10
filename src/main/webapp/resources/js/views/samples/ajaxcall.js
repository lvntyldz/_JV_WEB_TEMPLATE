/**
 * Created by leventyildiz on 10/04/16.
 */

//alert("ajax call");

var getBtn = $(".get-btn");
var postBtn = $(".post-btn");
var putBtn = $(".put-btn");
var deleteBtn = $(".del-btn");
var resetBtn = $(".reset-btn");
var responseTextarea = $("#response-textarea");
var requestTextarea = $("#request-textarea");
var statusTextarea = $("#status-textarea");
var xhrTextarea = $("#xhr-textarea");
var data;

data = {
    param1: "string",
    param2: 123,
    param3: true
};


postBtn.on("click", function () {

    //(url, data, done, fail)
    UTIL.ajax.post(UTIL.url + "/ajax/post", data, function (result, status, xhr) {

        requestTextarea.val(JSON.stringify(data));
        responseTextarea.val(JSON.stringify(result));
        statusTextarea.val(JSON.stringify(status));
        xhrTextarea.val(JSON.stringify(xhr));

    }, function (result, status, xhr) {
        requestTextarea.val("ERR : " + JSON.stringify(data));
        responseTextarea.val("ERR : " + JSON.stringify(result));
        statusTextarea.val("ERR : " + JSON.stringify(status));
        xhrTextarea.val("ERR : " + JSON.stringify(xhr));
    });//api call finish


});//click finish


putBtn.on("click", function () {

    //(url, data, done, fail)
    UTIL.ajax.put(UTIL.url + "/ajax/put", data, function (result, status, xhr) {

        requestTextarea.val(JSON.stringify(data));
        responseTextarea.val(JSON.stringify(result));
        statusTextarea.val(JSON.stringify(status));
        xhrTextarea.val(JSON.stringify(xhr));

    }, function (result, status, xhr) {
        requestTextarea.val("ERR : " + JSON.stringify(data));
        responseTextarea.val("ERR : " + JSON.stringify(result));
        statusTextarea.val("ERR : " + JSON.stringify(status));
        xhrTextarea.val("ERR : " + JSON.stringify(xhr));
    });//api call finish


});//click finish

deleteBtn.on("click", function () {

    //(url, data, done, fail)
    UTIL.ajax.del(UTIL.url + "/ajax/delete", data, function (result, status, xhr) {

        requestTextarea.val(JSON.stringify(data));
        responseTextarea.val(JSON.stringify(result));
        statusTextarea.val(JSON.stringify(status));
        xhrTextarea.val(JSON.stringify(xhr));

    }, function (result, status, xhr) {
        requestTextarea.val("ERR : " + JSON.stringify(data));
        responseTextarea.val("ERR : " + JSON.stringify(result));
        statusTextarea.val("ERR : " + JSON.stringify(status));
        xhrTextarea.val("ERR : " + JSON.stringify(xhr));
    });//api call finish


});//click finish


getBtn.on("click", function () {

    //(url, data, done, fail)
    UTIL.ajax.get(UTIL.url + "/ajax/get", data, function (result, status, xhr) {

        requestTextarea.val(JSON.stringify(data));
        responseTextarea.val(JSON.stringify(result));
        statusTextarea.val(JSON.stringify(status));
        xhrTextarea.val(JSON.stringify(xhr));

    }, function (result, status, xhr) {
        requestTextarea.val("ERR : " + JSON.stringify(data));
        responseTextarea.val("ERR : " + JSON.stringify(result));
        statusTextarea.val("ERR : " + JSON.stringify(status));
        xhrTextarea.val("ERR : " + JSON.stringify(xhr));
    });//api call finish


});//click finish


resetBtn.on("click", function () {

    requestTextarea.val("");
    responseTextarea.val("");
    statusTextarea.val("");
    xhrTextarea.val("");

});//click finish


