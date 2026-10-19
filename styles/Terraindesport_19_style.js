var size = 0;
var placement = 'point';

var style_Terraindesport_19 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Ubuntu Sans\', sans-serif";
    var labelFill = "#0e9652";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = true;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("nature_detaillee") !== null && resolution > 0 && resolution < 1) {
        labelText = String(feature.get("nature_detaillee"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(14,150,82,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(125,255,158,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
