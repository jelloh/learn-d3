var dataset= [3,4,5,6,7,8]

d3.select('body')
.selectAll('p')
.data(dataset)
.enter()
.append('p')
.text('D3 is awesome')
.text(function(d){return d;})
