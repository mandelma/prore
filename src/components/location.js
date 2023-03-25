/*global google*/

let myLat;
let myLng;

let clientCount = 0;

export default {
    clientCount,
    showUserLocationOnTheMap (latitude, longitude, mapId) {
        let map = new google.maps.Map(document.getElementById(mapId), {
            zoom: 13,
            center: new google.maps.LatLng(latitude, longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            accuracy: 0,

        });
        new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            accuracy: 0,
            map: map
        })
    },

    userCurrentCoords () {
        //let lat;
        //let lng;
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            // Show a map centered at latitude / longitude.
            myLat = latitude;
            myLng = longitude;
            console.log("Lat now " + latitude)
            console.log("Lng now " + longitude)
        });

        //return {latitude: lat, longitude: lng}
    },

    userCurrentLocation (mapId) {
        // const watchId = navigator.geolocation.watchPosition(position => {
        //   const { latitude, longitude } = position.coords;
        //   // Show a map centered at latitude / longitude.
        //   console.log("Position lat: " + position.coords.latitude)
        //   console.log("Position lng: " + position.coords.longitude)
        //   this.showUserLocationOnTheMap(position.coords.latitude, position.coords.longitude)
        // });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                // Show a map centered at latitude / longitude.
                myLat = latitude;
                myLng = longitude;
                console.log("Lat now " + myLat)
                console.log("Lng now " + myLng)
                this.showUserLocationOnTheMap (latitude, longitude, mapId)
            });
        } else {
            console.log("Loading... or error?")
        }

    },
    otherUserLocations (recipients, profession, mapId) {
        let map = new google.maps.Map(document.getElementById(mapId), {
            zoom: 10,
            center: new google.maps.LatLng(myLat, myLng),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        console.log("Users count: " + recipients.length)
        if (recipients.length > 0) {
            for (let pos = 0; pos < recipients.length; pos++) {

                //console.log("Client latitude: " + recipient[pos].latitude)
                //console.log("Client longitude: " + recipient[pos].longitude)

                recipients[pos].professional.forEach(prof => {
                    if (prof === profession) {
                        clientCount += 1
                        new google.maps.Marker({
                            position: new google.maps.LatLng(recipients[pos].latitude, recipients[pos].longitude),
                            map: map
                        })
                    }
                })

            }
            console.log("Client count: " + clientCount)
        }

    }

}

