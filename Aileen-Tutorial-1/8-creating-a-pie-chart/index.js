// javascript
var data = [
    {'platform': 'Android', 'percentage': 40.11},
    {'platform': 'Windows', 'percentage': 36.69},
    {'platform': 'iOS', 'percentage': 13.06}
]

var svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2
var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

// Create group element to hold pie chart
var g = svg.append('g')
    .attr('transform', 'translate(' + radius + ',' + radius + ')') // translate to center of svg container

var color = d3.scaleOrdinal(d3.schemeCategory10) // range of colors by built in d3 method

// pass stuff through d3 to create pie chart
var pie = d3.pie().value(function(d) {
    return d.percentage // we want to use percentages here
})

// create path elements using arc data
var path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)

var arc = g.selectAll('arc')
    .data(pie(data))
    .enter()
    .append('g')

arc.append('path')
    .attr('d', path)
    .attr('fill', function(d) {
        return color(d.data.percentage)
    })

var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)