var recalcDistances = function() {
    var classSize = parseFloat($("#textinput").val());
    var solarSystemDiaInAU = 60.76;
    var AUPerMeter = (solarSystemDiaInAU / classSize).toFixed(2);
    var metersPerAU = (classSize / solarSystemDiaInAU).toFixed(3);
    $('span#metersPerAU').html(metersPerAU.toString());
    $('span#AUPerMeter').html(AUPerMeter.toString());

    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    planets.forEach(function(planet) {
        var selStrAU = 'td.' + planet + 'AU';
        var selStrM = 'td.' + planet + 'M';
        var planetAU = parseFloat($(selStrAU).html());
        $(selStrM).html((planetAU * metersPerAU).toFixed(3));
    });
};

$(document).ready(function() {

    $(".entry").on("submit", function(e) {
        e.preventDefault();
        recalcDistances();
    });

    recalcDistances();
});
