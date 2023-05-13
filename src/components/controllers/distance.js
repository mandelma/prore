/*global google*/

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
}

const response_data = (responseDis, status) => {
    if (status !== google.maps.DistanceMatrixStatus.OK || status !== "OK"){
        console.log('Error:', status);
        // OR
        alert(status);
    }else{
        alert(responseDis.rows[0].elements[0].distance.text);
    }
}

const test = () => {
    console.log("Is it working??")
}

export default { distance, test }