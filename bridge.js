

let bridgeArea = [44.96, -84.2 ]   // adjust these to center map
let zoomLevel = 3.5  //zoom adjust for default map viewing 

let map = L.map('Bridge-map').setView(bridgeArea, zoomLevel)  //map properties

//adding overlay to map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var leafletIcon = L.icon({  //average bridge icon
    iconUrl: 'bridge.png',
    iconSize: [50,40],
    iconAnchor: [10, 10],
    popupAnchor: [-15, -25]
})
var redleafletIcon = L.icon({  // longest bridge icon
    iconUrl: 'redBridge.png',
    iconSize: [40,30],
    iconAnchor: [10, 10],
    popupAnchor: [-15, -25]
})

// data array for looping
data = [{"name":"Verranzano-Narrows Bridge", "span": 1298.4, "location":[40.6066, -74.0447]},
{"name":"Golden Gate Bride", "span": 1280.2, "location":[37.8199, -122.4783]},
{"name":"Mackinac Bridge", "span": 1158.0, "location":[45.8174, -84.7278]},
{"name":"George Washington Bridge", "span": 1067.0, "location":[40.8517, -73.9527]},
{"name":"Tacoma Narrows Bridge", "span": 853.44, "location":[47.2690, -122.5517]}]


data.forEach(function (bridgeName){
    let name = bridgeName.name 
   // let longestBridge = bridgeName.name("Verranzano-Narrows Bridge")
    let span = bridgeName.span
    let location = bridgeName.location
    if (span > 1290) {   // validate that the bridge is the longest
        let marker = L.marker(location, {icon: redleafletIcon}).addTo(map)
    }else{  //regular bridges get regular icons
    let marker = L.marker(location, {icon: leafletIcon}).addTo(map) 


    .bindPopup(`${name} <br> ${span} meters long`) // notation for bridges 
    .addTo(map)
    }
    // let longestBridge = L.marker(
    //     location, {purpleIcon}
    // ).addTo(map)    

})
