const samplesURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";













// Use D3 library to read samples.JSON file 
function init() {
    let dropDown = d3.select('#selDataset');
    d3.json(samplesURL).then(function (data) {
        let names = data.names;
        let samples = data.samples;
        Object.values(names).forEach(value => {
            dropDown.append('option').text(value);
        })
       
    })
};

init();