d3.select("#peafowl")
.on("click", function() 
{ 
    d3.select("#returnBanner")
    .text("Am I a puppy?");
})
d3.select("#puppy")
.on("mouseenter", function()
{
    d3.select("#puppy")
    .attr("src", "https://ids.si.edu/ids/deliveryService?max_w=800&id=NZP-20100615-058MM");
})
.on("mouseleave", function()
{
    d3.select("#puppy")
    .attr("src", "https://ids.si.edu/ids/deliveryService?max_w=800&id=NPM-0_052985_274_1a");
})
.on("click", function()
{
    d3.select("#returnBanner")
    .text("Whoops, you thought it was doggo, but it's actually me, Constantine Porcupine!");
})
d3.select("#panda")
.on("click", function()
{
    d3.select("#returnBanner")
    .text("Nothing here, just me and my evergreen lovers");
})
d3.select("#cat")
.on("click", function()
{
    d3.select("#returnBanner")
    .text("Crikey! I'm no canine you foolish mortal!")
})
d3.select(".startBanner")
.on("click", function()
{
    window.alert("You found the Puppy!");
})