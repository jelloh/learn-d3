// javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160]

var svgWidth = 500, svgHeight = 300, barPadding = 1
var barWidth = (svgWidth / dataset.length) 

// create svg
var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

// create bar chart
var barChart = svg.selectAll('rect') 
    .data(dataset)  
    .enter()        
    .append('rect') 
    .attr('y', function(d) {    
        return svgHeight - d   
    })                          
    .attr('height', function(d) {
        return d;
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function(d, i) {    
        var translate = [barWidth * i, 0]   
        return 'translate(' + translate + ')'
    })

// text labels :D
var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text') // append text per data item
    .text(function(d) {
        return d // return values
    })
    .attr('y', function(d, i){
        return svgHeight - d - 2; // want it to be slightly higher than the actual bar
    })
    .attr('x', function(d, i){
        return (barWidth * i) + (barWidth / 4) // similar to previous
                                            // added the end b/c i wanted to center it ;-;... close enough for now
    })
    

// hehe
svg.selectAll('rect').style('fill','#ffffff')
d3.select('h1').style('color','#ffffff')
d3.select('body').style('background-color','#1e1e1e')
svg.selectAll('text').style('fill', '#ffffff')