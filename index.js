var toMarkdown = require('to-markdown');
var fs = require('fs');
var cheerio = require('cheerio');

fs.readFile('./docs/Kikambamanual.pdf.html', (error, html) => {
  if (error) {
    console.log(error);
  } else {
    $ = cheerio.load(toMarkdown(html.toString()));
    // Remove html tags and unwanted text
    let manual = $.text();
    manual = manual.replace(/Hosted for free on livelingua.com/g, '');

    // console.log(manual);

    // fs.writeFile('docs/kikamba-manual-cleaned.md', manual, error => {
    //   if (error) {
    //     return console.log(error);
    //   }
    //   console.log('saved');
    // });    
  }
});

