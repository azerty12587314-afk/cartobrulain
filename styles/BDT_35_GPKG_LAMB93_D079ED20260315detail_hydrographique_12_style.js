var size = 0;
var placement = 'point';

var style_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Ubuntu Sans\', sans-serif";
    var labelFill = "#0066cc";
    var bufferColor = "#ffffff";
    var bufferWidth = 6.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null && resolution > 0 && resolution < 1) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.8000000000000003 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(0,102,204,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
