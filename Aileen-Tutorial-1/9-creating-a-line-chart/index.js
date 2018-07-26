// API to fetch historical data of Bitcoin price index
const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01'

/**
 * Loading data from API when DOM Content has been loaded
 */
document.addEventListener('DOMContentLoaded', function (event) {
    fetch(api)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var parsedData = parseData(data)
            drawChart(parsedData)
        })
        .catch(function (err) {
            console.log(err)
        })
})

/**
 * Parse data into key-value pairs
 * @param {object} data Object containing historical data of BPI
 */
function parseData(data) {
    var arr = []
    for (var i in data.bpi) {
        arr.push({
            date: new Date(i), // date
            value: +data.bpi[i] // convert string to number
        })
    }
    return arr
}

/**
 * Creates a chart using D3
 * @param {object} data Object containing historical data of BPI
 */
function drawChart(data){
    var svgWidth = 600, svgHeight = 400
    var margin = { top: 20, right: 20, bottom: 30, left: 50}

    // width and height of chart
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom

    var svg = d3.select('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight)

    // Group element
    // Push group over and down by margins
    var g = svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    // Create scale for our line chart
    var x = d3.scaleTime()  // function to scale by time (??)
        .rangeRound([0, width])

    var y = d3.scaleLinear()
        .rangeRound([height, 0])

    var line = d3.line()
        .x(function(d) {    // anonymous function that gets passed the data (dates)
            return x(d.date)
        })
        .y(function(d) {    // anonymous function that gets passed the values for y attribute
            return y(d.value)
        })
        x.domain(d3.extent(data, function(d) { return d.date }))
        y.domain(d3.extent(data, function(d) { return d.value}))
        
        // Notes:
        // domain = let d3 know about scope of data
        // extent = anonymous function that returns data value... min and max value of dgiven data

    g.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x))
        .select('.domain') // select any classes of domain...
        .remove()          // ... and remove it

    // append another group element within parent group
    // basically generates the y axis
    g.append('g') 
        .call(d3.axisLeft(y))
        .append('text')
        .attr('fill', '#000')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .attr('Price ($)')
    
    // append a path inside our parent group element
    // this path is the line we see in the line chart
    g.append('path')
        .datum(data)
        .attr('fill', 'none')   // apply attributes...
        .attr('stroke', 'steelblue')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', line) // apply attribute of d, and pass line function to d attribute
    

}