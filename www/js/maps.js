var mymap = L.map('mapid').setView([12.934645, 77.535098], 17);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXNoMTEwIiwiYSI6ImNqd3hpYzQyNTFmcmo0MGsxYmVodXNlMjEifQ.Q3t7t9MzKS5VsLcJw4Rr3A', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiYXNoMTEwIiwiYSI6ImNqd3hpYzQyNTFmcmo0MGsxYmVodXNlMjEifQ.Q3t7t9MzKS5VsLcJw4Rr3A'
}).addTo(mymap);
var MRD_icon = L.icon({
    iconUrl: 'images/RedMarker.png',
    iconSize: [22, 33], // size of the icon shadow
    iconAnchor: [20, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-10, -20] // point from which the popup should open relative to the iconAnchor
});
var MRD_Marker = L.marker([12.9354787, 77.5350228], { icon: MRD_icon }).addTo(mymap);
MRD_Marker.bindPopup("<b>MRD Block</b><br><br><a href='http://maps.google.com/maps?daddr=12.9354787, 77.5350228' class='btn small' style='color:white; text-align:center;'>Navigate</a>.");
var B_icon = L.icon({
    iconUrl: 'images/BlueMarker.png',
    iconSize: [22, 33], // size of the icon shadow
    iconAnchor: [20, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-10, -20] // point from which the popup should open relative to the iconAnchor
});
var B_Marker = L.marker([12.935184, 77.53472], { icon: B_icon }).addTo(mymap);
B_Marker.bindPopup("<b>B Block</b><br><br><a href='http://maps.google.com/maps?daddr=12.935184, 77.53472' class='btn small' style='color:white; text-align:center;'>Navigate</a>.");
var F_icon = L.icon({
    iconUrl: 'images/GreenMarker.png',
    iconSize: [22, 33], // size of the icon shadow
    iconAnchor: [20, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-10, -20] // point from which the popup should open relative to the iconAnchor
});
var F_Marker = L.marker([12.933514, 77.535589], { icon: F_icon }).addTo(mymap);
F_Marker.bindPopup("<b>F Block</b><br><br><a href='http://maps.google.com/maps?daddr=12.933514, 77.535589' class='btn small' style='color:white; text-align:center;'>Navigate</a>.");
var G_icon = L.icon({
    iconUrl: 'images/OrangeMarker.png',
    iconSize: [22, 33], // size of the icon shadow
    iconAnchor: [20, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-10, -20] // point from which the popup should open relative to the iconAnchor
});
var G_Marker = L.marker([12.933668, 77.534090], { icon: G_icon }).addTo(mymap);
G_Marker.bindPopup("<b>G Block</b><br><br><a href='http://maps.google.com/maps?daddr=12.933668, 77.534090' class='btn small' style='color:white; text-align:center;'>Navigate</a>.");
var PiR3_icon = L.icon({
    iconUrl: 'images/PinkMarker.png',
    iconSize: [22, 33], // size of the icon shadow
    iconAnchor: [20, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-10, -20] // point from which the popup should open relative to the iconAnchor
});
var PiR3 = L.marker([12.933720, 77.534568], { icon: PiR3_icon }).addTo(mymap);
PiR3.bindPopup("<b>PiR3 Food Court</b><br><br><a href='http://maps.google.com/maps?daddr=12.933720, 77.534568' class='btn small' style='color:white; text-align:center;'>Navigate</a>.");