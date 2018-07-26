
// javascript
//d3.select(); // returns first selection of DOM element matching the criteria
//d3.selectAll(); // returns ALL dOM elements matching citeria

//d3.select('h1');  // if there is none, it will return an empty selection

d3.select('h1').style('color','red') //can apply styling
.attr('class','heading')
.text('Updated h1 tag')

d3.select('body').append('p').text('First Paragraph')
d3.select('body').append('p').text('First Paragraph')
d3.select('body').append('p').text('First Paragraph')

d3.selectAll('body').style('color','blue')

