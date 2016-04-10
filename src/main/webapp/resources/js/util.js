/**
 * Created by leventyildiz on 10/04/16.
 */

// root
UTIL = {};

//base URL
UTIL.url = "http://localhost:8080";

// request types
UTIL.request = {};

// data types
UTIL.dataType = {};

// content types
UTIL.contentType = {};

UTIL.request.get = 'GET';
UTIL.request.post = 'POST';
UTIL.request.put = 'PUT';
UTIL.request.del = 'DELETE';

UTIL.dataType.json = 'json';
UTIL.dataType.xml = 'xml';

UTIL.contentType.json = 'application/json; charset=utf-8';

UTIL.ajax = {
    get: function (url, data, success, error) {
        $.ajax({
            type: UTIL.request.get,
            url: UTIL.url + url,
            cache: false,
            dataType: UTIL.dataType.json,
            data: (data),
            contentType: UTIL.contentType.json
        }).done(success).fail(error);
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
        $.ajax({
            type: UTIL.request.put,
            url: UTIL.url + url,
            cache: false,
            dataType: UTIL.dataType.json,
            data: JSON.stringify(data),
            contentType: UTIL.contentType.json
        }).done(success).fail(error);
    },
    del: function (url, data, success, error) {
        $.ajax({
            type: UTIL.request.del,
            url: UTIL.url + url,
            cache: false,
            dataType: UTIL.dataType.json,
            data: JSON.stringify(data),
            contentType: UTIL.contentType.json
        }).done(success).fail(error);
    },
};