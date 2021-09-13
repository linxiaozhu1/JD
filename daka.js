const url = `https://health.xiamin.tech/system/registry/`;
const method = `POST`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'X-CSRFToken' : `xBaEngUiXryq70K53jIFyEi3fqVm3FYjReCO5Vu8L8iJGrPtUVYIcdp9vvc0xULn`,
'Content-Type' : `application/json`,
'Origin' : `https://health.xiamin.tech`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1`,
'Cookie' : `csrftoken=ZjL7lDOxFc9SN5VZ0bwNcwD0LAOlhF2ZjWdh3iontTTbmw0nRNMQQ5K61F5ZLUP3; sessionid=l7j63h3s67u5mkxoy4jynz50hali8hjx`,
'Host' : `health.xiamin.tech`,
'Referer' : `https://health.xiamin.tech/system/registry/`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/plain, */*`
};
const body = `{"type":"same"}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
