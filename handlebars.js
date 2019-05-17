var Handlebars = require('handlebars');
var fs = require('fs');

var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";

var source2 = fs.readFileSync('/home/ag/Jeetu/Fun/invoice-html-sample/billing.html', 'utf8');
var template = Handlebars.compile(source2);

var data = { "name": "Alan", "hometown": "Somewhere, TX",
    "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);


var fs = require('fs');
    fs.writeFileSync("test.html", result, function(err) {
    if(err) {
        return console.log(err);
    }
});

console.log(`NICE`);
