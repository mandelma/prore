/*global google*/
let res = "";
const distance = () => {
    //let text = "";
    //let value = 0;
    var origin = new google.maps.LatLng(60.233093,24.7531362);
    var destination = new google.maps.LatLng(60.2767265,24.8575089);
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [origin],
            destinations: [destination],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            durationInTraffic: true,
            avoidHighways: false,
            avoidTolls: false
        }, response_data);
    //return response_data;
}

const response_data = (responseDis, status) => {
    //let result = "";
    if (status !== google.maps.DistanceMatrixStatus.OK || status !== "OK"){
        console.log('Error:', status);
        // OR
        alert(status);
    }else{
        //alert(responseDis.rows[0].elements[0].distance.text);
        console.log("Distance " + responseDis.rows[0].elements[0].distance.text)

        res = responseDis.rows[0].elements[0].distance.text;
        return "aaaaaaaaaaaaa"
        //result = responseDis.rows[0].elements[0].distance.text;
    }
    //return  "Hallo"        //result.toString();
}

const test = () => {
    console.log("Is it working??" + res)

    return  <div>Hiiii</div>;
}

const theDist = () => {
    var origin = new google.maps.LatLng(60.233093,24.7531362);
    var destination = new google.maps.LatLng(60.2767265,24.8575089);
    return (google.maps.geometry.spherical.computeDistanceBetween(origin, destination) / 1000).toFixed(2);
}

// function calcDistance() {
//     // var origin = new google.maps.LatLng(60.233093,24.7531362);
//     // var destination = new google.maps.LatLng(60.2767265,24.8575089);
//     // return (google.maps.geometry.spherical.computeDistanceBetween(origin, destination) / 1000).toFixed(2);
//
//     var directionsService = new google.maps.DirectionsService();
//
//     var request = {
//         origin      : 'Melbourne VIC', // a city, full address, landmark etc
//         destination : 'Sydney NSW',
//         travelMode  : google.maps.DirectionsTravelMode.DRIVING
//     };
//
//     directionsService.route(request, function(response, status) {
//         if ( status === google.maps.DirectionsStatus.OK ) {
//             alert( response.routes[0].legs[0].distance.value ) ; // the distance in metres
//         }
//         else {
//             // oops, there's no route between these two locations
//             // every time this happens, a kitten dies
//             // so please, ensure your address is formatted properly
//         }
//     });
// }

export default { distance, test, theDist }