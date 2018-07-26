// javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160]

var svgWidth = 500, svgHeight = 300, barPadding = 1
var barWidth = (svgWidth / dataset.length) //so each bar has equal width and fills up svg space

var svg = d3.select('svg')  // select svg container
    .attr('width', svgWidth) // give it attributes of width
    .attr('height', svgHeight) // and height

// create bar chart
var barChart = svg.selectAll('rect') // select rectangles (have none so far)
    .data(dataset)  // call datamethod 
    .enter()        // and provide data set. perform all operations below per item
    .append('rect') // append rectangle per data item
    .attr('y', function(d) {    // ... (0,0) is top left corner of svg
        return svgHeight - d    // so height minus d value... ok this makes sense :')..
    })                          // each rectangle coordinate also starts from top left corner of rect
    .attr('height', function(d) {
        return d;
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function(d, i) {     // this is to translate the bars every iteration of data item
        var translate = [barWidth * i, 0]   // so that each rectangle isn't on top of each other
        return 'translate(' + translate + ')'
    })

// hehe
svg.selectAll('rect').style('fill','#ffffff')
d3.select('h1').style('color','#ffffff')
d3.select('body').style('background-color','#1e1e1e')