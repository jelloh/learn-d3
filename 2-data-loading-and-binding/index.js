// javascript
var dataset = [1, 2, 3, 4, 5];

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter() // takes data elements one by one and does stuff for each
    .append('p') // appends paragraph for each data element
    .text('D3 is awesome!!')
    .text(function (d) {
        return d + 'hehehehehehe'
    })
