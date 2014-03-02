var plek = TAFFY([
{naam:'Munsterkerk', 				N:'51.113700', O:'5.591900', adres:'Munsterplein'},
{naam:'Sint-Christoffelkathedraal', N:'51.114725', O:'5.590401', adres:'Kraanpoort'}]);

function test() {
var randomnumber=Math.floor(Math.random()*plek().count()+1);
alert(randomnumber) };