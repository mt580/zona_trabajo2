
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-20.268892,-70.102818],  
    zoom: 17,
    zoomControl: true
});




var style = function style(feature) {
    var color;
    switch (feature.properties.nombre) {
        case 'A':
            color = '#FF0000'; // Rojo
            break;
        case 'B':
            color = '#00FF00'; // Verde
            break;
        case 'C':
            color = '#0000FF'; // Azul
            break;
        case 'D':
            color = '#FFFF00'; // Amarillo
            break;
        default:
            color = '#808080'; // Gris
    }
    return {
        fillColor: color,
        fillOpacity: 0.5,
        color: '#000000',
        weight: 1,
        opacity: 1
    };
}







var style1 = {
                    'color': "green",
                    'weight': 0,
					'dashArray': '3',
                    'opacity': 5,
					'fillOpacity': 0.3
                };
				
var style2 = {
                    'color': "blue",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

				
var style3 = {
                    'color': "yellow",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style4 = {
                    'color': "purple",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style5 = {
                    'color': "black",
                    'weight': 0,
                    'opacity': 8,
					'fillOpacity': 0.8
                };

var style6 = {
                    'color': "orange",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style7 = {
                    'color': "brown",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style8 = {
                    'color': "olive",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };								

var style9 = {
                    'color': "aqua",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style10 = {
                    'color': "gray",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style11 = {
                    'color': "deeppink",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };						

			  
			  

			  
			  
			  
var n1 = L.geoJSON(n1, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>JOSE GAFARDO LISSETTE</p><p>'+feature.properties.NODOS+'</p>');
  }
  }).addTo(map);			  
			  
			  
			  

  
 var n2 = L.geoJSON(n2, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 2</p>'+'</h2><p>JOEL-LUIS-MANUEL-GLADYS</p><p>'+feature.properties.NODOS+'</p>');
  }
  }).addTo(map); 
  
  var n3 = L.geoJSON(n3, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 3</p>'+'</h2><p>NILDA JAVIER</p><p>'+feature.properties.NODOS+'</p>');
  }
  }).addTo(map);
  
  
  var n4 = L.geoJSON(n4, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 4</p>'+'</h2><p>YESSENIA-KARINA-JESSICA</p><p>'+feature.properties.NODOS+'</p>');
  }
  }).addTo(map);
  
  
  
  var n5 = L.geoJSON(n5, {
	style: style9,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 5</p>'+'</h2><p>JUANA PATRICIO</p><p>'+feature.properties.NODOS+'</p>');
  }
  }).addTo(map);

 
  var n6 = L.geoJSON(n6, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 6</p>'+'</h2><p>CLEMENTINA-JAZ</p><p>'+feature.properties.NODOS+'</p>');
  }
  }).addTo(map);
  
  
  var n7 = L.geoJSON(n7, {
	style: style11,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 7</p>'+'</h2><p>JOSE MONTERO</p><p>'+feature.properties.NODOS+'</p>');
  }
  }).addTo(map);
  
 
  var n8 = L.geoJSON(n8, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 7</p>'+'</h2><p>JOSE MONTERO</p><p>'+feature.properties.FECHA+'</p>');
  }
  }).addTo(map);
  
 
  
  var n9 = L.geoJSON(n9, {
	style: style8,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO</p>'+'</h2><p>LUIS M-PATO</p><p>'+feature.properties.FECHA+'</p>');
  }
  }).addTo(map);
  
  var n10 = L.geoJSON(n10, {
	style: style5,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><b><p style="color:red;">ATENCION!!</p></b>'+'</h2><b><p style="color:red;">TC2-SOLO CABLE ANALOGO!!!</p></b>');
  }
  }).addTo(map);
  
  
 
  
  
  var iqq_trabajo_b2 = L.geoJSON(iqq_trabajo_b2, {
	style: style,

  }).addTo(map);
	  

			  
			  
			  


			  

			  
			  

  
                  
              			  
			  

			  

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
