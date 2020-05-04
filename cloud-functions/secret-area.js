exports.handler = function(event, context, callback) {
    const secretContent = `
    <h3>Welcome to the secret area</h3>
    <p>Here we can tell you that the skype is <strong>blue</strong> and two plus two equals four</p>
    `;
    let body;

    if (event.boy) {
        body = JSON.parse(event.body);
    } else {
        body = {};
    }
     
    if (body.password == "javascript") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401
        })
    }
    
}