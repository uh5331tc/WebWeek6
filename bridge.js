

let bridgeArea = [44.96, -84.2 ]   // adjust these to center map
let zoomLevel = 3.5

let map = L.map('Bridge-map').setView(bridgeArea, zoomLevel)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// let purpleIcon = Licon({
//     iconUrl:'marker_icons/purple-marker.png',
//     iconAnchor: [30,30],
//     iconSizer: [30,30],
//     pupupAnchor: [-15, -25]
// })

// Watched tutorials and cant get it to work
// var leafletIcon = L.icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/183/183375.png',
//     iconSize: [38,95],
//     iconAnchor: [location],
// })

// let market = L.marker(leafletIcon).addTo(map)


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
    
    let marker = L.marker(location)
    .bindPopup(`${name} <br> ${span} meters long`)
    .addTo(map)
    
    // let longestBridge = L.marker(
    //     location, {purpleIcon}
    // ).addTo(map)    

})

