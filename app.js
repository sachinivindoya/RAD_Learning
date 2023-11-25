var btn_element = document.getElementById('btn');
var location1_lon_element = document.getElementById('lat1');
var location1_lat_element = document.getElementById('lon1');
var location2_lon_element = document.getElementById('lat2');
var location2_lat_element = document.getElementById('lon2');
var result_element = document.getElementById('result');
btn_element.addEventListener('click', function () {
    var location1_lon1 = location1_lon_element.value;
    var location1_lat1 = location1_lat_element.value;
    var location2_lon2 = location2_lon_element.value;
    var location2_let2 = location2_lat_element.value;
    var location1 = { lon: +location1_lon1, lat: +location1_lat1 };
    var location2 = { lon: +location2_lon2, lat: +location2_let2 };
    var result = calDistance(location1, location2);
    result_element.innerText = "".concat(result.toFixed(2), " KM");
});
function calDistance(location1, location2) {
    var lon1 = location1.lon;
    var lat1 = location1.lat;
    var lon2 = location2.lon;
    var lat2 = location2.lat;
    // ---- calc distance  ----
    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // Radius of the Earth in kilometers (mean value)
    var R = 6371;
    // Calculate the distance
    var distance = R * c;
    // ---- calc distance  ----
    return distance;
}
