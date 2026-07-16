var wms_layers = [];

var format_Regional_0 = new ol.format.GeoJSON();
var features_Regional_0 = format_Regional_0.readFeatures(json_Regional_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regional_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regional_0.addFeatures(features_Regional_0);
var lyr_Regional_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regional_0, 
                style: style_Regional_0,
                popuplayertitle: 'Regional',
                interactive: false,
                title: '<img src="styles/legend/Regional_0.png" /> Regional'
            });
var format_GIRLUPCHILE_1 = new ol.format.GeoJSON();
var features_GIRLUPCHILE_1 = format_GIRLUPCHILE_1.readFeatures(json_GIRLUPCHILE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GIRLUPCHILE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GIRLUPCHILE_1.addFeatures(features_GIRLUPCHILE_1);
var lyr_GIRLUPCHILE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GIRLUPCHILE_1, 
                style: style_GIRLUPCHILE_1,
                popuplayertitle: 'GIRL UP CHILE',
                interactive: true,
                title: '<img src="styles/legend/GIRLUPCHILE_1.png" /> GIRL UP CHILE'
            });

lyr_Regional_0.setVisible(true);lyr_GIRLUPCHILE_1.setVisible(true);
var layersList = [lyr_Regional_0,lyr_GIRLUPCHILE_1];
lyr_Regional_0.set('fieldAliases', {'objectid': 'objectid', 'cir_sena': 'cir_sena', 'codregion': 'codregion', 'area_km': 'area_km', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', });
lyr_GIRLUPCHILE_1.set('fieldAliases', {'Nombre': 'Nombre', 'Foto': 'Foto', 'Sobre ella': 'Sobre ella', });
lyr_Regional_0.set('fieldImages', {'objectid': 'TextEdit', 'cir_sena': 'Range', 'codregion': 'Range', 'area_km': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', });
lyr_GIRLUPCHILE_1.set('fieldImages', {'Nombre': 'TextEdit', 'Foto': 'ExternalResource', 'Sobre ella': 'TextEdit', });
lyr_Regional_0.set('fieldLabels', {'objectid': 'no label', 'cir_sena': 'no label', 'codregion': 'no label', 'area_km': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Region': 'no label', });
lyr_GIRLUPCHILE_1.set('fieldLabels', {'Nombre': 'no label', 'Foto': 'no label', 'Sobre ella': 'no label', });
lyr_GIRLUPCHILE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});