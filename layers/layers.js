ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([250535.990308, 6579797.222507, 525972.777214, 6788531.847765]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Municipality_1 = new ol.format.GeoJSON();
var features_Municipality_1 = format_Municipality_1.readFeatures(json_Municipality_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Municipality_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipality_1.addFeatures(features_Municipality_1);
var lyr_Municipality_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipality_1, 
                style: style_Municipality_1,
                popuplayertitle: 'Municipality',
                interactive: true,
                title: '<img src="styles/legend/Municipality_1.png" /> Municipality'
            });
var format_Observationshexbin_2 = new ol.format.GeoJSON();
var features_Observationshexbin_2 = format_Observationshexbin_2.readFeatures(json_Observationshexbin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Observationshexbin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Observationshexbin_2.addFeatures(features_Observationshexbin_2);
var lyr_Observationshexbin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Observationshexbin_2, 
                style: style_Observationshexbin_2,
                popuplayertitle: 'Observations, hexbin',
                interactive: true,
    title: 'Observations, hexbin<br />\
    <img src="styles/legend/Observationshexbin_2_0.png" /> 1 - 10<br />\
    <img src="styles/legend/Observationshexbin_2_1.png" /> 10 - 100<br />\
    <img src="styles/legend/Observationshexbin_2_2.png" /> 100 - 300<br />\
    <img src="styles/legend/Observationshexbin_2_3.png" /> 300 - 694<br />' });

lyr_Positron_0.setVisible(true);lyr_Municipality_1.setVisible(true);lyr_Observationshexbin_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Municipality_1,lyr_Observationshexbin_2];
lyr_Municipality_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'id': 'id', 'kunta': 'kunta', 'vuosi': 'vuosi', 'nimi': 'nimi', 'namn': 'namn', 'Squirrel observations': 'Squirrel observations', });
lyr_Observationshexbin_2.set('fieldAliases', {'fid': 'fid', 'left': 'left', 'bottom': 'bottom', 'right': 'right', 'top': 'top', 'Squirrel observations': 'Squirrel observations', });
lyr_Municipality_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'id': 'Range', 'kunta': 'TextEdit', 'vuosi': 'Range', 'nimi': 'TextEdit', 'namn': 'TextEdit', 'Squirrel observations': 'TextEdit', });
lyr_Observationshexbin_2.set('fieldImages', {'fid': 'TextEdit', 'left': 'TextEdit', 'bottom': 'TextEdit', 'right': 'TextEdit', 'top': 'TextEdit', 'Squirrel observations': 'TextEdit', });
lyr_Municipality_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'id': 'hidden field', 'kunta': 'hidden field', 'vuosi': 'hidden field', 'nimi': 'no label', 'namn': 'hidden field', 'Squirrel observations': 'header label - visible with data', });
lyr_Observationshexbin_2.set('fieldLabels', {'fid': 'hidden field', 'left': 'hidden field', 'bottom': 'hidden field', 'right': 'hidden field', 'top': 'hidden field', 'Squirrel observations': 'no label', });
lyr_Observationshexbin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});