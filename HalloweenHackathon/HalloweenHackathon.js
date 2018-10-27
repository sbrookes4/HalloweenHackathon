$(document).ready(function() {
  var map;
        function initMap() {
          map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: new window.google.maps.LatLng(45.521161, -122.674013),
            mapTypeId: 'roadmap',
            styles:
            [
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": 0
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": 0
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#bbbbbb"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 26
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#dddddd"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -3
            },
            {
                "visibility": "on"
            }
        ]
    }
]
          });




          var iconBase = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/';
          var icons = {
            indoor: {
              icon: iconBase + 'marker_red.png'
            },
            brewery: {
              icon: iconBase + 'marker_blue.png'
            },
            restaurant: {
              icon: iconBase + 'marker_yellow.png'
            },
            outdoor: {
              icon: iconBase + 'marker_green.png'
            }
          };
          //
          var features = [
            {
              position: new window.google.maps.LatLng(45.523073, -122.641668),
              title: 'Screen Door',
              type: 'restaurant',
              content: '<div><h5>Sreen Door</h5>'+
                        '<p>Refined Southern specialties like buttermilk-fried chicken in roomy digs offering weekend brunch.</p>'+
                        '<p>2337 E Burnside St, Portland, OR 97214</p>'+
                        '<p>(503) 542-0880</p>'+
                        '<a href="https://www.google.com/maps/place/Screen+Door/@45.5229893,-122.6438357,17z/data=!4m5!3m4!1s0x5495a0beac1053bb:0x8606af39a198e136!8m2!3d45.5229894!4d-122.6416469">View on Google Maps</a>'+
                        '</div>'
            }, {
              position: new window.google.maps.LatLng(45.520835, -122.683431),
              title: 'Blue Star Donuts',
              type: 'restaurant'
            }, {
              position: new window.google.maps.LatLng(45.590319, -122.755167),
              title: 'Tienda Santa Cruz',
              type: 'restaurant'
            }, {
              position: new window.google.maps.LatLng(45.540782,  -122.663615),
              title: 'Toro Bravo',
              type: 'restaurant'
            }, {
              position: new window.google.maps.LatLng(45.523519, -122.681595),
              title: 'Powells City of Books',
              type: 'indoor'
            }, {
              position: new window.google.maps.LatLng(45.473750, -122.660508),
              title: 'Roller Derby',
              type: 'indoor'
            }, {
              position: new window.google.maps.LatLng(45.535436, -122.620610),
              title: 'Hollywood Theater',
              type: 'indoor'
            }, {
              position: new window.google.maps.LatLng(45.524302, -122.675914),
              title: 'Ground Kontrol',
              type: 'indoor'
            }, {
              position: new window.google.maps.LatLng(45.512490, -122.656361),
              title: 'Lucky Lab',
              type: 'brewery'
            }, {
              position: new window.google.maps.LatLng(45.504613, -122.632161),
              title: 'Pok Pok',
              type: 'restaurant'
            }, {
              position: new window.google.maps.LatLng(45.511635, -122.594540),
              title: 'Mount Tabor Park',
              type: 'outdoor'
            }, {
              position: new window.google.maps.LatLng(-33.91662347903106, 151.22879464019775),
              type: 'parking'
            }, {
              position: new window.google.maps.LatLng(-33.916365282092855, 151.22937399734496),
              type: 'parking'
            }, {
              position: new window.google.maps.LatLng(-33.91665018901448, 151.2282474695587),
              type: 'parking'
            }, {
              position: new window.google.maps.LatLng(-33.919543720969806, 151.23112279762267),
              type: 'parking'
            }, {
              position: new window.google.maps.LatLng(-33.91608037421864, 151.23288232673644),
              type: 'parking'
            }, {
              position: new window.google.maps.LatLng(-33.91851096391805, 151.2344058214569),
              type: 'parking'
            }, {
              position: new window.google.maps.LatLng(-33.91818154739766, 151.2346203981781),
              type: 'parking'
            }, {
              position: new window.google.maps.LatLng(-33.91727341958453, 151.23348314155578),
              type: 'library'
            }
          ];


          // Create markers.
          features.forEach(function(feature) {
            var marker = new window.google.maps.Marker({
              position: feature.position,
              icon: icons[feature.type].icon,
              map: map,
              title: feature.title,
            });
            var infowindow = new window.google.maps.InfoWindow({
             content: feature.content
           });
            marker.addListener('click', function() {
              infowindow.open(map, marker);
          });
        });
        }

  setTimeout(() => {
    window.window.google.maps.event.addDomListener(window, 'load', initMap());
  }, 1500);
});
