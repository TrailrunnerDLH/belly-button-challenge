const samplesURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

let sampleData;


//Create bar plot
function barPlot(id) {
    let samples = sampleData.samples;
    let identifier = samples.filter(sample => sample.id === id);
    let filtered = identifier[0];
    let OTUvalues = filtered.sample_values.slice(0, 10).reverse();
    let OTUids = filtered.otu_ids.slice(0, 10).reverse();
    let labels = filtered.otu_labels.slice(0, 10).reverse();
    let barTrace = {
        x: OTUvalues,
        y: OTUids.map(object => 'OTU ' + object),
        name: labels,
        type: 'bar',
        orientation: 'h'
    };
 
   
    let barData = [barTrace];
    Plotly.newPlot('bar', barData);

}









// Use D3 library to read samples.JSON file 
function init() {
    let dropDown = d3.select('#selDataset');
    d3.json(samplesURL).then(function (data) {
        sampleData = data
        let names = sampleData.names;
        let samples = sampleData.samples;
        Object.values(names).forEach(value => {
            dropDown.append('option').text(value);
        })
        barPlot(names[0])
       
    })
};

init();