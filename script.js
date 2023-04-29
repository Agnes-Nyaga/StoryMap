var mymap = L.map('mapid').setView([-0.0236, 37.9062], 7);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 9,
}).addTo(mymap);

var marker = L.marker([-1.1018, 37.0144]).addTo(mymap);
marker.bindPopup("<b>Starting Point!</b><br>Juja.").openPopup();

var marker1 = L.marker([-0.9392, 37.1249]).addTo(mymap);
marker1.bindPopup("<b>Stop 2</b><br>Kenol.").openPopup();

var marker2 = L.marker([-1.0388, 37.0834]).addTo(mymap);
marker2.bindPopup("<b>Stop 1</b><br>Thika.").openPopup();

var marker3 = L.marker([-0.7605, 37.2785]).addTo(mymap);
marker3.bindPopup("<b>Stop 3</b><br>Makutano.").openPopup();

var marker4 = L.marker([-0.6897, 37.3400]).addTo(mymap);
marker4.bindPopup("<b>Stop 4</b><br>Mwea.").openPopup();

var marker5 = L.marker([-0.5388, 37.4596]).addTo(mymap);
marker5.bindPopup("<b>Final Destination</b><br>Embu.").openPopup();

var marker5 = L.marker([-0.5417274, 37.4561027]).addTo(mymap);
marker5.bindPopup("<b>Accomodation</b><br>Izaak Walton Inn Embu.").openPopup();
