/**
 * Created by leventyildiz on 10/04/16.
 */

// root
UTIL = {};

//base URL
UTIL.url = "http://172.20.10.2:8080";//Mobile

// request types
UTIL.request = new Object();

// data types
UTIL.dataType = new Object();

// content types
UTIL.contentType = new Object();

UTIL.request.get = 'GET';
UTIL.request.post = 'POST';
UTIL.request.put = 'PUT';
UTIL.request.del = 'DELETE';

UTIL.dataType.json = 'json';
UTIL.dataType.xml = 'xml';

UTIL.contentType.json = 'application/json; charset=utf-8';

UTIL.ajax = {
    get: function (url, data, done, fail) {
        $.ajax({
            url: url,
            type: UTIL.request.get,
            data: data,
            dataType: UTIL.dataType.json,
            success: done,
            error: fail
        });
    },
    post: function (url, data, success, error) {
        $.ajax({
            type: UTIL.request.post,
            url: UTIL.url + url,
            cache: false,
            dataType: UTIL.dataType.json,
            data: JSON.stringify(data),
            contentType: UTIL.contentType.json
        }).done(success).fail(error);
    },
    put: function (url, data, success, error) {
        var k = '_method', v = 'PUT';
        var headers = {};
        headers[k] = v;
        $.ajax({
            type: UTIL.request.put,
            url: url,
            cache: false,
            headers: headers,
            dataType: UTIL.dataType.json,
            data: JSON.stringify(data),
            contentType: UTIL.contentType.json
        }).done(success).fail(error);
    },
    del: function (url, success, error) {
        var k = '_method', v = 'DELETE';
        var headers = {};
        headers[k] = v;
        $.ajax({
            type: UTIL.request.del,
            url: url,
            cache: false,
            headers: headers,
            dataType: UTIL.dataType.json,
            contentType: UTIL.contentType.json
        }).done(success).fail(error);
    },
};