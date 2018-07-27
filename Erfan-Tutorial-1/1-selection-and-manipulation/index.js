// javascript

d3.select();
d3.selectAll();

d3.select('hi').style('color','red')
.attr('class','heading')
.text('Updated Header')

d3.select('body').append('p').text('First Doo d')

d3.select('body').append('p').text('Second Doo d')

d3.select('body').append('p').text('Third Doo d')

d3.selectAll('p').style('color','blue')