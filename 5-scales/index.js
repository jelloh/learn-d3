// javascript
//var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160]
//var dataset = [1, 2, 3, 4, 5]
var dataset = [3, 100, 53, 25, 86, 1, 12, 34]

var svgWidth = 500, svgHeight = 300, barPadding = 1
var barWidth = (svgWidth / dataset.length) 

// create svg
var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

// adding y scale
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])   // domain takes array as element, first is 0, second is max # in data set
    .range([0, svgHeight])          // range takes scale values within range of svg container...

// create bar chart
var barChart = svg.selectAll('rect') 
    .data(dataset)  
    .enter()        
    .append('rect') 
    .attr('y', function(d) {    
        return svgHeight - yScale(d)   // properly scale the y coordinate according to yScale.. wHAT IS THIS MAGIC
    })                          
    .attr('height', function(d) {
        return yScale(d);           // properly scale the height according to yScale
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function(d, i) {    
        var translate = [barWidth * i, 0]   
        return 'translate(' + translate + ')'
    })

// text
var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
        return d    // yScale this... jk dont yScale this, this is the text value lOLOL oops
    })
    .attr('y', function(d, i){
        return svgHeight - yScale(d) - 2;   // and yScale this too. yScale everything!!!~
    })
    .attr('x', function(d, i){
        return (barWidth * i)
    })
    

// hehe
svg.selectAll('rect').style('fill','#ffffff')
d3.select('h1').style('color','#ffffff')
d3.select('body').style('background-color','#1e1e1e')
svg.selectAll('text').style('fill', '#ffffff')