let btn_element = document.getElementById('btn');
let location1_lon_element = document.getElementById('lat1') as HTMLInputElement;
let location1_lat_element = document.getElementById('lon1') as HTMLInputElement;
let location2_lon_element = document.getElementById('lat2') as HTMLInputElement;
let location2_lat_element = document.getElementById('lon2') as HTMLInputElement;
let result_element = document.getElementById('result');


btn_element.addEventListener('click',()=>{
    let location1_lon1=location1_lon_element.value;
    let location1_lat1 = location1_lat_element.value;
    let location2_lon2 = location2_lon_element.value;
    let location2_let2 = location2_lat_element.value;
    let location1 = { lon: +location1_lon1,lat: +location1_lat1};
    let location2 = { lon: +location2_lon2,lat: +location2_let2};

    let result = calDistance(location1,location2);

    result_element.innerText = `${result.toFixed(2)} KM`

});

function calDistance(location1:{lon:number,lat:number}, location2:{lon:number,lat:number}){
    let lon1 = location1.lon;
    let lat1 = location1.lat;
    let lon2 = location2.lon;
    let lat2 = location2.lat;

    // ---- calc distance  ----
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Radius of the Earth in kilometers (mean value)
    const R = 6371;

    // Calculate the distance
    let distance = R * c;
// ---- calc distance  ----

    return distance;
}