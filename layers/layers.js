var wms_layers = [];

var format_Re_Nappe_frBRULAIN_0 = new ol.format.GeoJSON();
var features_Re_Nappe_frBRULAIN_0 = format_Re_Nappe_frBRULAIN_0.readFeatures(json_Re_Nappe_frBRULAIN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Re_Nappe_frBRULAIN_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Re_Nappe_frBRULAIN_0.addFeatures(features_Re_Nappe_frBRULAIN_0);
var lyr_Re_Nappe_frBRULAIN_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Re_Nappe_frBRULAIN_0,
maxResolution:7.00111653806549,
 
                style: style_Re_Nappe_frBRULAIN_0,
                popuplayertitle: 'Re_Nappe_fr BRULAIN',
                interactive: true,
    title: 'Re_Nappe_fr BRULAIN<br />\
    <img src="styles/legend/Re_Nappe_frBRULAIN_0_0.png" /> Zones potentiellement sujettes aux débordements de nappe<br />\
    <img src="styles/legend/Re_Nappe_frBRULAIN_0_1.png" /> Zones potentiellement sujettes aux inondations de cave<br />\
    <img src="styles/legend/Re_Nappe_frBRULAIN_0_2.png" /> Pas de débordement de nappe ni d\'inondation de cave<br />' });
var format_AleaRG_2025_79_L93BRULAIN_1 = new ol.format.GeoJSON();
var features_AleaRG_2025_79_L93BRULAIN_1 = format_AleaRG_2025_79_L93BRULAIN_1.readFeatures(json_AleaRG_2025_79_L93BRULAIN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AleaRG_2025_79_L93BRULAIN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AleaRG_2025_79_L93BRULAIN_1.addFeatures(features_AleaRG_2025_79_L93BRULAIN_1);
var lyr_AleaRG_2025_79_L93BRULAIN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AleaRG_2025_79_L93BRULAIN_1, 
                style: style_AleaRG_2025_79_L93BRULAIN_1,
                popuplayertitle: 'AleaRG_2025_79_L93 BRULAIN',
                interactive: true,
    title: 'AleaRG_2025_79_L93 BRULAIN<br />\
    <img src="styles/legend/AleaRG_2025_79_L93BRULAIN_1_0.png" /> 1,000000000000000<br />\
    <img src="styles/legend/AleaRG_2025_79_L93BRULAIN_1_1.png" /> 2,000000000000000<br />\
    <img src="styles/legend/AleaRG_2025_79_L93BRULAIN_1_2.png" /> 3,000000000000000<br />' });
var format_Sitespollusetablissement_point_2 = new ol.format.GeoJSON();
var features_Sitespollusetablissement_point_2 = format_Sitespollusetablissement_point_2.readFeatures(json_Sitespollusetablissement_point_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitespollusetablissement_point_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitespollusetablissement_point_2.addFeatures(features_Sitespollusetablissement_point_2);
var lyr_Sitespollusetablissement_point_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitespollusetablissement_point_2,
maxResolution:7.00111653806549,
 
                style: style_Sitespollusetablissement_point_2,
                popuplayertitle: 'Sites  pollués etablissement_point',
                interactive: true,
    title: 'Sites  pollués etablissement_point<br />\
    <img src="styles/legend/Sitespollusetablissement_point_2_0.png" /> Décharge<br />\
    <img src="styles/legend/Sitespollusetablissement_point_2_1.png" /> Déchetterie<br />\
    <img src="styles/legend/Sitespollusetablissement_point_2_2.png" /> Station service<br />' });
var format_InstallationsClassees_France_3 = new ol.format.GeoJSON();
var features_InstallationsClassees_France_3 = format_InstallationsClassees_France_3.readFeatures(json_InstallationsClassees_France_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstallationsClassees_France_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstallationsClassees_France_3.addFeatures(features_InstallationsClassees_France_3);
var lyr_InstallationsClassees_France_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstallationsClassees_France_3,
maxResolution:7.00111653806549,
 
                style: style_InstallationsClassees_France_3,
                popuplayertitle: 'InstallationsClassees_France',
                interactive: true,
    title: 'InstallationsClassees_France<br />\
    <img src="styles/legend/InstallationsClassees_France_3_0.png" /> BAUDOUIN PHILIPPE<br />\
    <img src="styles/legend/InstallationsClassees_France_3_1.png" /> OCEALIA<br />' });
var format_Haie_4 = new ol.format.GeoJSON();
var features_Haie_4 = format_Haie_4.readFeatures(json_Haie_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haie_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haie_4.addFeatures(features_Haie_4);
var lyr_Haie_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haie_4,
maxResolution:0.7001116538065492,
 
                style: style_Haie_4,
                popuplayertitle: 'Haie',
                interactive: true,
                title: '<img src="styles/legend/Haie_4.png" /> Haie'
            });
var format_zonedevgtation_5 = new ol.format.GeoJSON();
var features_zonedevgtation_5 = format_zonedevgtation_5.readFeatures(json_zonedevgtation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonedevgtation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonedevgtation_5.addFeatures(features_zonedevgtation_5);
var lyr_zonedevgtation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonedevgtation_5,
maxResolution:1.4002233076130983,
 minResolution:0.00028004466152261963,

                style: style_zonedevgtation_5,
                popuplayertitle: 'zone de végétation',
                interactive: true,
                title: '<img src="styles/legend/zonedevgtation_5.png" /> zone de végétation'
            });
var format_Natura2000Brulain_6 = new ol.format.GeoJSON();
var features_Natura2000Brulain_6 = format_Natura2000Brulain_6.readFeatures(json_Natura2000Brulain_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natura2000Brulain_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natura2000Brulain_6.addFeatures(features_Natura2000Brulain_6);
var lyr_Natura2000Brulain_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Natura2000Brulain_6, 
                style: style_Natura2000Brulain_6,
                popuplayertitle: 'Natura 2000 Brulain',
                interactive: true,
    title: 'Natura 2000 Brulain<br />\
    <img src="styles/legend/Natura2000Brulain_6_0.png" /> SIC<br />\
    <img src="styles/legend/Natura2000Brulain_6_1.png" /> ZPS<br />' });
var format_ZNIEFF2_G2BRULAIN_7 = new ol.format.GeoJSON();
var features_ZNIEFF2_G2BRULAIN_7 = format_ZNIEFF2_G2BRULAIN_7.readFeatures(json_ZNIEFF2_G2BRULAIN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFF2_G2BRULAIN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFF2_G2BRULAIN_7.addFeatures(features_ZNIEFF2_G2BRULAIN_7);
var lyr_ZNIEFF2_G2BRULAIN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFF2_G2BRULAIN_7, 
                style: style_ZNIEFF2_G2BRULAIN_7,
                popuplayertitle: 'ZNIEFF2_G2 BRULAIN',
                interactive: true,
                title: '<img src="styles/legend/ZNIEFF2_G2BRULAIN_7.png" /> ZNIEFF2_G2 BRULAIN'
            });
var format_ZNIEFF1_G2BRULAIN_8 = new ol.format.GeoJSON();
var features_ZNIEFF1_G2BRULAIN_8 = format_ZNIEFF1_G2BRULAIN_8.readFeatures(json_ZNIEFF1_G2BRULAIN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFF1_G2BRULAIN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFF1_G2BRULAIN_8.addFeatures(features_ZNIEFF1_G2BRULAIN_8);
var lyr_ZNIEFF1_G2BRULAIN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFF1_G2BRULAIN_8, 
                style: style_ZNIEFF1_G2BRULAIN_8,
                popuplayertitle: 'ZNIEFF1_G2 BRULAIN',
                interactive: true,
                title: '<img src="styles/legend/ZNIEFF1_G2BRULAIN_8.png" /> ZNIEFF1_G2 BRULAIN'
            });
var format_Noeudhydro_9 = new ol.format.GeoJSON();
var features_Noeudhydro_9 = format_Noeudhydro_9.readFeatures(json_Noeudhydro_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noeudhydro_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noeudhydro_9.addFeatures(features_Noeudhydro_9);
var lyr_Noeudhydro_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noeudhydro_9,
maxResolution:1.4002233076130983,
 
                style: style_Noeudhydro_9,
                popuplayertitle: 'Noeud hydro',
                interactive: true,
                title: '<img src="styles/legend/Noeudhydro_9.png" /> Noeud hydro'
            });
var format_Courdeau_10 = new ol.format.GeoJSON();
var features_Courdeau_10 = format_Courdeau_10.readFeatures(json_Courdeau_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courdeau_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courdeau_10.addFeatures(features_Courdeau_10);
var lyr_Courdeau_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courdeau_10,
maxResolution:7.00111653806549,
 
                style: style_Courdeau_10,
                popuplayertitle: 'Cour d eau',
                interactive: true,
                title: '<img src="styles/legend/Courdeau_10.png" /> Cour d eau'
            });
var format_tronconhydro_11 = new ol.format.GeoJSON();
var features_tronconhydro_11 = format_tronconhydro_11.readFeatures(json_tronconhydro_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tronconhydro_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tronconhydro_11.addFeatures(features_tronconhydro_11);
var lyr_tronconhydro_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tronconhydro_11,
maxResolution:7.001396582727014,
 
                style: style_tronconhydro_11,
                popuplayertitle: 'troncon hydro',
                interactive: true,
                title: '<img src="styles/legend/tronconhydro_11.png" /> troncon hydro'
            });
var format_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12 = new ol.format.GeoJSON();
var features_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12 = format_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12.readFeatures(json_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12.addFeatures(features_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12);
var lyr_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12,
maxResolution:7.00111653806549,
 
                style: style_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12,
                popuplayertitle: 'BDT_3-5_GPKG_LAMB93_D079-ED2026-03-15 — detail_hydrographique',
                interactive: true,
                title: '<img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12.png" /> BDT_3-5_GPKG_LAMB93_D079-ED2026-03-15 — detail_hydrographique'
            });
var format_Surfacehydrographique_13 = new ol.format.GeoJSON();
var features_Surfacehydrographique_13 = format_Surfacehydrographique_13.readFeatures(json_Surfacehydrographique_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surfacehydrographique_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surfacehydrographique_13.addFeatures(features_Surfacehydrographique_13);
var lyr_Surfacehydrographique_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surfacehydrographique_13,
maxResolution:7.00111653806549,
 
                style: style_Surfacehydrographique_13,
                popuplayertitle: 'Surface hydrographique',
                interactive: true,
                title: '<img src="styles/legend/Surfacehydrographique_13.png" /> Surface hydrographique'
            });
var format_Rservoirhydro_14 = new ol.format.GeoJSON();
var features_Rservoirhydro_14 = format_Rservoirhydro_14.readFeatures(json_Rservoirhydro_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservoirhydro_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservoirhydro_14.addFeatures(features_Rservoirhydro_14);
var lyr_Rservoirhydro_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rservoirhydro_14,
maxResolution:7.00111653806549,
 
                style: style_Rservoirhydro_14,
                popuplayertitle: 'Réservoir hydro',
                interactive: true,
                title: '<img src="styles/legend/Rservoirhydro_14.png" /> Réservoir hydro'
            });
var format_ligneelec_15 = new ol.format.GeoJSON();
var features_ligneelec_15 = format_ligneelec_15.readFeatures(json_ligneelec_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligneelec_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligneelec_15.addFeatures(features_ligneelec_15);
var lyr_ligneelec_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligneelec_15,
maxResolution:28.004746196923488,
 
                style: style_ligneelec_15,
                popuplayertitle: 'ligne elec',
                interactive: true,
                title: '<img src="styles/legend/ligneelec_15.png" /> ligne elec'
            });
var format_Routesbrulain_16 = new ol.format.GeoJSON();
var features_Routesbrulain_16 = format_Routesbrulain_16.readFeatures(json_Routesbrulain_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routesbrulain_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routesbrulain_16.addFeatures(features_Routesbrulain_16);
var lyr_Routesbrulain_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routesbrulain_16, 
                style: style_Routesbrulain_16,
                popuplayertitle: 'Routes brulain',
                interactive: true,
    title: 'Routes brulain<br />\
    <img src="styles/legend/Routesbrulain_16_0.png" /> secondary<br />\
    <img src="styles/legend/Routesbrulain_16_1.png" /> tertiary<br />\
    <img src="styles/legend/Routesbrulain_16_2.png" /> residential<br />\
    <img src="styles/legend/Routesbrulain_16_3.png" /> unclassified<br />' });
var format_tronconroute_17 = new ol.format.GeoJSON();
var features_tronconroute_17 = format_tronconroute_17.readFeatures(json_tronconroute_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tronconroute_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tronconroute_17.addFeatures(features_tronconroute_17);
var lyr_tronconroute_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tronconroute_17,
maxResolution:2.8004466152261966,
 
                style: style_tronconroute_17,
                popuplayertitle: 'troncon route',
                interactive: true,
    title: 'troncon route<br />\
    <img src="styles/legend/tronconroute_17_0.png" /> Bac ou liaison maritime<br />\
    <img src="styles/legend/tronconroute_17_1.png" /> Bretelle<br />\
    <img src="styles/legend/tronconroute_17_2.png" /> Chemin<br />\
    <img src="styles/legend/tronconroute_17_3.png" /> Escalier<br />\
    <img src="styles/legend/tronconroute_17_4.png" /> Piste cyclable<br />\
    <img src="styles/legend/tronconroute_17_5.png" /> Route empierrée<br />\
    <img src="styles/legend/tronconroute_17_6.png" /> Sentier<br />\
    <img src="styles/legend/tronconroute_17_7.png" /> Type autoroutier<br />' });
var format_batiments_18 = new ol.format.GeoJSON();
var features_batiments_18 = format_batiments_18.readFeatures(json_batiments_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batiments_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batiments_18.addFeatures(features_batiments_18);
var lyr_batiments_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batiments_18,
maxResolution:7.00111653806549,
 
                style: style_batiments_18,
                popuplayertitle: 'batiments',
                interactive: true,
    title: 'batiments<br />\
    <img src="styles/legend/batiments_18_0.png" /> Résidentiel<br />\
    <img src="styles/legend/batiments_18_1.png" /> Annexe<br />\
    <img src="styles/legend/batiments_18_2.png" /> Agricole<br />\
    <img src="styles/legend/batiments_18_3.png" /> Commercial et services<br />\
    <img src="styles/legend/batiments_18_4.png" /> Industriel<br />\
    <img src="styles/legend/batiments_18_5.png" /> Sportif<br />\
    <img src="styles/legend/batiments_18_6.png" /> Religieux<br />\
    <img src="styles/legend/batiments_18_7.png" /> Indifférencié<br />' });
var format_Terraindesport_19 = new ol.format.GeoJSON();
var features_Terraindesport_19 = format_Terraindesport_19.readFeatures(json_Terraindesport_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terraindesport_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terraindesport_19.addFeatures(features_Terraindesport_19);
var lyr_Terraindesport_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terraindesport_19,
maxResolution:7.00111653806549,
 
                style: style_Terraindesport_19,
                popuplayertitle: 'Terrain de sport',
                interactive: true,
                title: '<img src="styles/legend/Terraindesport_19.png" /> Terrain de sport'
            });
var format_cimetiere_20 = new ol.format.GeoJSON();
var features_cimetiere_20 = format_cimetiere_20.readFeatures(json_cimetiere_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cimetiere_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cimetiere_20.addFeatures(features_cimetiere_20);
var lyr_cimetiere_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cimetiere_20,
maxResolution:7.00111653806549,
 
                style: style_cimetiere_20,
                popuplayertitle: 'cimetiere',
                interactive: true,
                title: '<img src="styles/legend/cimetiere_20.png" /> cimetiere'
            });
var format_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21 = new ol.format.GeoJSON();
var features_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21 = format_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21.readFeatures(json_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21.addFeatures(features_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21);
var lyr_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21,
maxResolution:2.8007266598877187,
 
                style: style_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21,
                popuplayertitle: 'BDT_3-5_GPKG_LAMB93_D079-ED2026-03-15 — zone_d_activite_ou_d_interet',
                interactive: true,
    title: 'BDT_3-5_GPKG_LAMB93_D079-ED2026-03-15 — zone_d_activite_ou_d_interet<br />\
    <img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21_0.png" /> Administratif ou militaire<br />\
    <img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21_1.png" /> Culture et loisirs<br />\
    <img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21_2.png" /> Gestion des eaux<br />\
    <img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21_3.png" /> Industriel et commercial<br />\
    <img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21_4.png" /> Religieux<br />\
    <img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21_5.png" /> Santé<br />\
    <img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21_6.png" /> Science et enseignement<br />\
    <img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21_7.png" /> Sport<br />' });
var format_pointvoirie_22 = new ol.format.GeoJSON();
var features_pointvoirie_22 = format_pointvoirie_22.readFeatures(json_pointvoirie_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointvoirie_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointvoirie_22.addFeatures(features_pointvoirie_22);
var lyr_pointvoirie_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointvoirie_22, 
                style: style_pointvoirie_22,
                popuplayertitle: 'point voirie',
                interactive: true,
                title: '<img src="styles/legend/pointvoirie_22.png" /> point voirie'
            });
var format_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23 = new ol.format.GeoJSON();
var features_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23 = format_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23.readFeatures(json_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23.addFeatures(features_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23);
var lyr_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23,
maxResolution:0.7001116538065492,
 
                style: style_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23,
                popuplayertitle: 'BDT_3-5_GPKG_LAMB93_D079-ED2026-03-15 — adresse_ban',
                interactive: true,
                title: '<img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23.png" /> BDT_3-5_GPKG_LAMB93_D079-ED2026-03-15 — adresse_ban'
            });
var format_lieuxditoklieux_dits_24 = new ol.format.GeoJSON();
var features_lieuxditoklieux_dits_24 = format_lieuxditoklieux_dits_24.readFeatures(json_lieuxditoklieux_dits_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lieuxditoklieux_dits_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lieuxditoklieux_dits_24.addFeatures(features_lieuxditoklieux_dits_24);
var lyr_lieuxditoklieux_dits_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lieuxditoklieux_dits_24,
maxResolution:7.00111653806549,
 
                style: style_lieuxditoklieux_dits_24,
                popuplayertitle: 'lieux dit ok — lieux_dits',
                interactive: true,
                title: '<img src="styles/legend/lieuxditoklieux_dits_24.png" /> lieux dit ok — lieux_dits'
            });
var format_BDT_35_GPKG_LAMB93_D079ED20260315commune_25 = new ol.format.GeoJSON();
var features_BDT_35_GPKG_LAMB93_D079ED20260315commune_25 = format_BDT_35_GPKG_LAMB93_D079ED20260315commune_25.readFeatures(json_BDT_35_GPKG_LAMB93_D079ED20260315commune_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315commune_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315commune_25.addFeatures(features_BDT_35_GPKG_LAMB93_D079ED20260315commune_25);
var lyr_BDT_35_GPKG_LAMB93_D079ED20260315commune_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315commune_25,
maxResolution:112.01814465370937,
 
                style: style_BDT_35_GPKG_LAMB93_D079ED20260315commune_25,
                popuplayertitle: 'BDT_3-5_GPKG_LAMB93_D079-ED2026-03-15 — commune',
                interactive: true,
                title: '<img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315commune_25.png" /> BDT_3-5_GPKG_LAMB93_D079-ED2026-03-15 — commune'
            });
var format_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26 = new ol.format.GeoJSON();
var features_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26 = format_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26.readFeatures(json_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26.addFeatures(features_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26);
var lyr_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26, 
                style: style_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26,
                popuplayertitle: 'BDT_3-5_GPKG_LAMB93_D079-ED2026-03-15 — voie_nommee',
                interactive: true,
                title: '<img src="styles/legend/BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26.png" /> BDT_3-5_GPKG_LAMB93_D079-ED2026-03-15 — voie_nommee'
            });
var group_nonutilisapasfilter = new ol.layer.Group({
                                layers: [lyr_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26,],
                                fold: 'open',
                                title: 'non utilisé a pas filter'});
var group_Nometbati = new ol.layer.Group({
                                layers: [lyr_batiments_18,lyr_Terraindesport_19,lyr_cimetiere_20,lyr_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21,lyr_pointvoirie_22,lyr_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23,lyr_lieuxditoklieux_dits_24,lyr_BDT_35_GPKG_LAMB93_D079ED20260315commune_25,],
                                fold: 'open',
                                title: 'Nom et bati'});
var group_routes = new ol.layer.Group({
                                layers: [lyr_Routesbrulain_16,lyr_tronconroute_17,],
                                fold: 'close',
                                title: 'routes'});
var group_Communs = new ol.layer.Group({
                                layers: [lyr_ligneelec_15,],
                                fold: 'open',
                                title: 'Communs'});
var group_Cadastral = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Cadastral'});
var group_PLU = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PLU'});
var group_hydro = new ol.layer.Group({
                                layers: [lyr_Noeudhydro_9,lyr_Courdeau_10,lyr_tronconhydro_11,lyr_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12,lyr_Surfacehydrographique_13,lyr_Rservoirhydro_14,],
                                fold: 'open',
                                title: 'hydro'});
var group_Nature = new ol.layer.Group({
                                layers: [lyr_Haie_4,lyr_zonedevgtation_5,lyr_Natura2000Brulain_6,lyr_ZNIEFF2_G2BRULAIN_7,lyr_ZNIEFF1_G2BRULAIN_8,],
                                fold: 'open',
                                title: 'Nature'});
var group_rsk = new ol.layer.Group({
                                layers: [lyr_Re_Nappe_frBRULAIN_0,lyr_AleaRG_2025_79_L93BRULAIN_1,lyr_Sitespollusetablissement_point_2,lyr_InstallationsClassees_France_3,],
                                fold: 'open',
                                title: 'rsk'});

lyr_Re_Nappe_frBRULAIN_0.setVisible(true);lyr_AleaRG_2025_79_L93BRULAIN_1.setVisible(true);lyr_Sitespollusetablissement_point_2.setVisible(true);lyr_InstallationsClassees_France_3.setVisible(true);lyr_Haie_4.setVisible(true);lyr_zonedevgtation_5.setVisible(true);lyr_Natura2000Brulain_6.setVisible(true);lyr_ZNIEFF2_G2BRULAIN_7.setVisible(true);lyr_ZNIEFF1_G2BRULAIN_8.setVisible(true);lyr_Noeudhydro_9.setVisible(true);lyr_Courdeau_10.setVisible(true);lyr_tronconhydro_11.setVisible(true);lyr_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12.setVisible(true);lyr_Surfacehydrographique_13.setVisible(true);lyr_Rservoirhydro_14.setVisible(true);lyr_ligneelec_15.setVisible(true);lyr_Routesbrulain_16.setVisible(true);lyr_tronconroute_17.setVisible(true);lyr_batiments_18.setVisible(true);lyr_Terraindesport_19.setVisible(true);lyr_cimetiere_20.setVisible(true);lyr_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21.setVisible(true);lyr_pointvoirie_22.setVisible(true);lyr_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23.setVisible(true);lyr_lieuxditoklieux_dits_24.setVisible(true);lyr_BDT_35_GPKG_LAMB93_D079ED20260315commune_25.setVisible(true);lyr_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26.setVisible(true);
var layersList = [group_rsk,group_Nature,group_hydro,group_Communs,group_routes,group_Nometbati,group_nonutilisapasfilter];
lyr_Re_Nappe_frBRULAIN_0.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'classe': 'classe', 'fiab_mnt': 'fiab_mnt', 'fiab_eso': 'fiab_eso', 'fiab_tot': 'fiab_tot', 'classefiab': 'classefiab', 'gridcode': 'gridcode', });
lyr_AleaRG_2025_79_L93BRULAIN_1.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'gid': 'gid', 'insee_dep': 'insee_dep', 'niveau': 'niveau', 'surf_m2': 'surf_m2', });
lyr_Sitespollusetablissement_point_2.set('fieldAliases', {'qc_id': 'qc_id', 'code_metie': 'code_metie', 'nom_invent': 'nom_invent', 'code_inven': 'code_inven', 'nom_etabli': 'nom_etabli', 'code_siret': 'code_siret', 'adresse': 'adresse', 'code_posta': 'code_posta', 'code_insee': 'code_insee', 'nom_commun': 'nom_commun', 'code_depar': 'code_depar', 'nom_depart': 'nom_depart', 'code_regio': 'code_regio', 'nom_region': 'nom_region', 'etat_activ': 'etat_activ', 'code_naf': 'code_naf', 'activite_p': 'activite_p', 'nature_loc': 'nature_loc', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', 'fiche_risq': 'fiche_risq', });
lyr_InstallationsClassees_France_3.set('fieldAliases', {'qc_id': 'qc_id', 'code_aiot': 'code_aiot', 'x': 'x', 'y': 'y', 'code_epsg': 'code_epsg', 'nom_ets': 'nom_ets', 'num_dep': 'num_dep', 'adresse': 'adresse', 'cd_insee': 'cd_insee', 'cd_postal': 'cd_postal', 'commune': 'commune', 'code_naf': 'code_naf', 'lib_naf': 'lib_naf', 'num_siret': 'num_siret', 'cd_regime': 'cd_regime', 'lib_regime': 'lib_regime', 'seveso': 'seveso', 'lib_seveso': 'lib_seveso', 'bovins': 'bovins', 'porcs': 'porcs', 'volailles': 'volailles', 'carriere': 'carriere', 'eolienne': 'eolienne', 'industrie': 'industrie', 'ied': 'ied', 'priorite_n': 'priorite_n', 'rubriques_': 'rubriques_', 'rubrique_1': 'rubrique_1', 'rubrique_2': 'rubrique_2', 'date_modif': 'date_modif', 'derniere_i': 'derniere_i', 'url_fiche': 'url_fiche', });
lyr_Haie_4.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'hauteur': 'hauteur', 'largeur': 'largeur', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', });
lyr_zonedevgtation_5.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'nature': 'nature', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'date_creation': 'date_creation', 'date_modification': 'date_modification', });
lyr_Natura2000Brulain_6.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cd_sig': 'cd_sig', 'type_espac': 'type_espac', });
lyr_ZNIEFF2_G2BRULAIN_7.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'objectid': 'objectid', 'id_mnhn': 'id_mnhn', 'nom': 'nom', 'id_org': 'id_org', 'cd_sig': 'cd_sig', 'precis_x': 'precis_x', 'precis_y': 'precis_y', 'x_proj': 'x_proj', 'y_proj': 'y_proj', 'generation': 'generation', 'superficie': 'superficie', 'se_anno_ca': 'se_anno_ca', });
lyr_ZNIEFF1_G2BRULAIN_8.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'objectid': 'objectid', 'id_mnhn': 'id_mnhn', 'nom': 'nom', 'id_org': 'id_org', 'cd_sig': 'cd_sig', 'precis_x': 'precis_x', 'precis_y': 'precis_y', 'x_proj': 'x_proj', 'y_proj': 'y_proj', 'generation': 'generation', 'superficie': 'superficie', 'se_anno_ca': 'se_anno_ca', });
lyr_Noeudhydro_9.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'code_hydrographique': 'code_hydrographique', 'code_du_pays': 'code_du_pays', 'categorie': 'categorie', 'toponyme': 'toponyme', 'statut_du_toponyme': 'statut_du_toponyme', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'methode_d_acquisition_altimetrique': 'methode_d_acquisition_altimetrique', 'precision_altimetrique': 'precision_altimetrique', 'mode_d_obtention_des_coordonnees': 'mode_d_obtention_des_coordonnees', 'mode_d_obtention_de_l_altitude': 'mode_d_obtention_de_l_altitude', 'statut': 'statut', 'commentaire_sur_l_objet_hydro': 'commentaire_sur_l_objet_hydro', 'liens_vers_cours_d_eau_amont': 'liens_vers_cours_d_eau_amont', 'liens_vers_cours_d_eau_aval': 'liens_vers_cours_d_eau_aval', });
lyr_Courdeau_10.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'code_hydrographique': 'code_hydrographique', 'toponyme': 'toponyme', 'statut_du_toponyme': 'statut_du_toponyme', 'importance': 'importance', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'statut': 'statut', 'influence_de_la_maree': 'influence_de_la_maree', 'caractere_permanent': 'caractere_permanent', 'commentaire_sur_l_objet_hydro': 'commentaire_sur_l_objet_hydro', });
lyr_tronconhydro_11.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'code_hydrographique': 'code_hydrographique', 'code_du_pays': 'code_du_pays', 'nature': 'nature', 'fictif': 'fictif', 'etat_de_l_objet': 'etat_de_l_objet', 'position_par_rapport_au_sol': 'position_par_rapport_au_sol', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'methode_d_acquisition_altimetrique': 'methode_d_acquisition_altimetrique', 'precision_altimetrique': 'precision_altimetrique', 'mode_d_obtention_des_coordonnees': 'mode_d_obtention_des_coordonnees', 'mode_d_obtention_de_l_altitude': 'mode_d_obtention_de_l_altitude', 'statut': 'statut', 'persistance': 'persistance', 'fosse': 'fosse', 'navigabilite': 'navigabilite', 'salinite': 'salinite', 'numero_d_ordre': 'numero_d_ordre', 'strategie_de_classement': 'strategie_de_classement', 'origine': 'origine', 'perimetre_d_utilisation_ou_origine': 'perimetre_d_utilisation_ou_origine', 'sens_de_l_ecoulement': 'sens_de_l_ecoulement', 'reseau_principal_coulant': 'reseau_principal_coulant', 'trace_connu': 'trace_connu', 'classe_de_largeur': 'classe_de_largeur', 'type_de_bras': 'type_de_bras', 'commentaire_sur_l_objet_hydro': 'commentaire_sur_l_objet_hydro', 'code_du_cours_d_eau_bdcarthage': 'code_du_cours_d_eau_bdcarthage', 'inventaire_police_de_l_eau': 'inventaire_police_de_l_eau', 'identifiant_police_de_l_eau': 'identifiant_police_de_l_eau', 'liens_vers_cours_d_eau': 'liens_vers_cours_d_eau', 'lien_vers_noeud_hydrographique_ini': 'lien_vers_noeud_hydrographique_ini', 'lien_vers_noeud_hydrographique_fin': 'lien_vers_noeud_hydrographique_fin', 'liens_vers_surface_hydrographique': 'liens_vers_surface_hydrographique', 'lien_vers_entite_de_transition': 'lien_vers_entite_de_transition', 'cpx_toponyme_de_cours_d_eau': 'cpx_toponyme_de_cours_d_eau', 'cpx_toponyme_d_entite_de_transition': 'cpx_toponyme_d_entite_de_transition', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'nature': 'nature', 'nature_detaillee': 'nature_detaillee', 'persistance': 'persistance', 'toponyme': 'toponyme', 'statut_du_toponyme': 'statut_du_toponyme', 'importance': 'importance', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'insee_commune': 'insee_commune', 'identifiant_voie_ban': 'identifiant_voie_ban', 'id_ban_odonyme': 'id_ban_odonyme', });
lyr_Surfacehydrographique_13.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'code_hydrographique': 'code_hydrographique', 'code_du_pays': 'code_du_pays', 'nature': 'nature', 'position_par_rapport_au_sol': 'position_par_rapport_au_sol', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'methode_d_acquisition_altimetrique': 'methode_d_acquisition_altimetrique', 'precision_altimetrique': 'precision_altimetrique', 'mode_d_obtention_des_coordonnees': 'mode_d_obtention_des_coordonnees', 'mode_d_obtention_de_l_altitude': 'mode_d_obtention_de_l_altitude', 'statut': 'statut', 'persistance': 'persistance', 'salinite': 'salinite', 'origine': 'origine', 'commentaire_sur_l_objet_hydro': 'commentaire_sur_l_objet_hydro', 'liens_vers_plan_d_eau': 'liens_vers_plan_d_eau', 'liens_vers_cours_d_eau': 'liens_vers_cours_d_eau', 'lien_vers_entite_de_transition': 'lien_vers_entite_de_transition', 'cpx_toponyme_de_plan_d_eau': 'cpx_toponyme_de_plan_d_eau', 'cpx_toponyme_de_cours_d_eau': 'cpx_toponyme_de_cours_d_eau', 'cpx_toponyme_d_entite_de_transition': 'cpx_toponyme_d_entite_de_transition', });
lyr_Rservoirhydro_14.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'nature': 'nature', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'methode_d_acquisition_altimetrique': 'methode_d_acquisition_altimetrique', 'precision_altimetrique': 'precision_altimetrique', 'altitude_minimale_sol': 'altitude_minimale_sol', 'altitude_minimale_toit': 'altitude_minimale_toit', 'hauteur': 'hauteur', 'altitude_maximale_toit': 'altitude_maximale_toit', 'altitude_maximale_sol': 'altitude_maximale_sol', 'origine_du_batiment': 'origine_du_batiment', 'volume': 'volume', });
lyr_ligneelec_15.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'voltage': 'voltage', 'gestionnaire': 'gestionnaire', 'siren_gestionnaire': 'siren_gestionnaire', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'methode_d_acquisition_altimetrique': 'methode_d_acquisition_altimetrique', 'precision_altimetrique': 'precision_altimetrique', });
lyr_Routesbrulain_16.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'layer': 'layer', 'bridge': 'bridge', 'barrier': 'barrier', 'service': 'service', 'name:etymology:wikidata': 'name:etymology:wikidata', 'access': 'access', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'noexit': 'noexit', 'ref:fr:fantoir': 'ref:fr:fantoir', 'noname': 'noname', 'name': 'name', 'tracktype': 'tracktype', 'ref': 'ref', 'surface': 'surface', });
lyr_tronconroute_17.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'nature': 'nature', 'nom_collaboratif_gauche': 'nom_collaboratif_gauche', 'nom_collaboratif_droite': 'nom_collaboratif_droite', 'importance': 'importance', 'fictif': 'fictif', 'position_par_rapport_au_sol': 'position_par_rapport_au_sol', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'methode_d_acquisition_altimetrique': 'methode_d_acquisition_altimetrique', 'precision_altimetrique': 'precision_altimetrique', 'nombre_de_voies': 'nombre_de_voies', 'largeur_de_chaussee': 'largeur_de_chaussee', 'itineraire_vert': 'itineraire_vert', 'prive': 'prive', 'sens_de_circulation': 'sens_de_circulation', 'reserve_aux_bus': 'reserve_aux_bus', 'urbain': 'urbain', 'vitesse_moyenne_vl': 'vitesse_moyenne_vl', 'acces_vehicule_leger': 'acces_vehicule_leger', 'acces_pieton': 'acces_pieton', 'periode_de_fermeture': 'periode_de_fermeture', 'nature_de_la_restriction': 'nature_de_la_restriction', 'restriction_de_hauteur': 'restriction_de_hauteur', 'restriction_de_poids_total': 'restriction_de_poids_total', 'restriction_de_poids_par_essieu': 'restriction_de_poids_par_essieu', 'restriction_de_largeur': 'restriction_de_largeur', 'restriction_de_longueur': 'restriction_de_longueur', 'matieres_dangereuses_interdites': 'matieres_dangereuses_interdites', 'borne_debut_gauche': 'borne_debut_gauche', 'borne_debut_droite': 'borne_debut_droite', 'borne_fin_gauche': 'borne_fin_gauche', 'borne_fin_droite': 'borne_fin_droite', 'insee_commune_gauche': 'insee_commune_gauche', 'insee_commune_droite': 'insee_commune_droite', 'alias_gauche': 'alias_gauche', 'alias_droit': 'alias_droit', 'date_de_mise_en_service': 'date_de_mise_en_service', 'liens_vers_route_nommee': 'liens_vers_route_nommee', 'liens_vers_itineraire_autre': 'liens_vers_itineraire_autre', 'cpx_numero': 'cpx_numero', 'cpx_numero_route_europeenne': 'cpx_numero_route_europeenne', 'cpx_classement_administratif': 'cpx_classement_administratif', 'cpx_gestionnaire': 'cpx_gestionnaire', 'cpx_toponyme_route_nommee': 'cpx_toponyme_route_nommee', 'cpx_toponyme_itineraire_cyclable': 'cpx_toponyme_itineraire_cyclable', 'cpx_toponyme_voie_verte': 'cpx_toponyme_voie_verte', 'cpx_nature_itineraire_autre': 'cpx_nature_itineraire_autre', 'cpx_toponyme_itineraire_autre': 'cpx_toponyme_itineraire_autre', 'delestage': 'delestage', 'source_voie_ban_gauche': 'source_voie_ban_gauche', 'source_voie_ban_droite': 'source_voie_ban_droite', 'nom_voie_ban_gauche': 'nom_voie_ban_gauche', 'nom_voie_ban_droite': 'nom_voie_ban_droite', 'lieux_dits_ban_gauche': 'lieux_dits_ban_gauche', 'lieux_dits_ban_droite': 'lieux_dits_ban_droite', 'identifiant_voie_ban_gauche': 'identifiant_voie_ban_gauche', 'identifiant_voie_ban_droite': 'identifiant_voie_ban_droite', 'sens_amenagement_cyclable_gauche': 'sens_amenagement_cyclable_gauche', 'sens_amenagement_cyclable_droit': 'sens_amenagement_cyclable_droit', 'amenagement_cyclable_gauche': 'amenagement_cyclable_gauche', 'amenagement_cyclable_droit': 'amenagement_cyclable_droit', 'aire_de_retournement_dfci': 'aire_de_retournement_dfci', 'gabarit_dfci': 'gabarit_dfci', 'impasse_dfci': 'impasse_dfci', 'nature_detaillee_dfci': 'nature_detaillee_dfci', 'ouvrage_d_art_limitant_dfci': 'ouvrage_d_art_limitant_dfci', 'pente_maximale_dfci': 'pente_maximale_dfci', 'piste_dfci': 'piste_dfci', 'piste_dfci_debroussaillee': 'piste_dfci_debroussaillee', 'piste_dfci_fosses': 'piste_dfci_fosses', 'sens_de_circulation_dfci': 'sens_de_circulation_dfci', 'tout_terrain_dfci': 'tout_terrain_dfci', 'vitesse_moyenne_dfci': 'vitesse_moyenne_dfci', 'zone_de_croisement_dfci': 'zone_de_croisement_dfci', 'categorie_dfci': 'categorie_dfci', 'vitesse_collaborative': 'vitesse_collaborative', 'id_ban_odonyme_droite': 'id_ban_odonyme_droite', 'id_ban_odonyme_gauche': 'id_ban_odonyme_gauche', });
lyr_batiments_18.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'nature': 'nature', 'usage_1': 'usage_1', 'usage_2': 'usage_2', 'construction_legere': 'construction_legere', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'methode_d_acquisition_altimetrique': 'methode_d_acquisition_altimetrique', 'precision_planimetrique': 'precision_planimetrique', 'precision_altimetrique': 'precision_altimetrique', 'nombre_de_logements': 'nombre_de_logements', 'nombre_d_etages': 'nombre_d_etages', 'materiaux_des_murs': 'materiaux_des_murs', 'materiaux_de_la_toiture': 'materiaux_de_la_toiture', 'hauteur': 'hauteur', 'altitude_minimale_sol': 'altitude_minimale_sol', 'altitude_minimale_toit': 'altitude_minimale_toit', 'altitude_maximale_toit': 'altitude_maximale_toit', 'altitude_maximale_sol': 'altitude_maximale_sol', 'origine_du_batiment': 'origine_du_batiment', 'appariement_fichiers_fonciers': 'appariement_fichiers_fonciers', 'identifiants_rnb': 'identifiants_rnb', });
lyr_Terraindesport_19.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'nature': 'nature', 'nature_detaillee': 'nature_detaillee', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'methode_d_acquisition_altimetrique': 'methode_d_acquisition_altimetrique', 'precision_altimetrique': 'precision_altimetrique', });
lyr_cimetiere_20.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'nature': 'nature', 'nature_detaillee': 'nature_detaillee', 'toponyme': 'toponyme', 'statut_du_toponyme': 'statut_du_toponyme', 'importance': 'importance', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'methode_d_acquisition_altimetrique': 'methode_d_acquisition_altimetrique', 'precision_altimetrique': 'precision_altimetrique', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'categorie': 'categorie', 'nature': 'nature', 'nature_detaillee': 'nature_detaillee', 'toponyme': 'toponyme', 'statut_du_toponyme': 'statut_du_toponyme', 'importance': 'importance', 'fictif': 'fictif', 'etat_de_l_objet': 'etat_de_l_objet', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'sources': 'sources', 'identifiants_sources': 'identifiants_sources', 'methode_d_acquisition_planimetrique': 'methode_d_acquisition_planimetrique', 'precision_planimetrique': 'precision_planimetrique', 'insee_commune': 'insee_commune', 'commune': 'commune', 'adresse_postale': 'adresse_postale', 'identifiant_voie_ban': 'identifiant_voie_ban', 'nom_commercial': 'nom_commercial', 'id_ban_odonyme': 'id_ban_odonyme', });
lyr_pointvoirie_22.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'annotation': 'annotation', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'numero': 'numero', 'suffixe': 'suffixe', 'identifiant_voie': 'identifiant_voie', 'nom_voie': 'nom_voie', 'insee_commune': 'insee_commune', 'nom_commune': 'nom_commune', 'insee_commune_deleguee': 'insee_commune_deleguee', 'nom_commune_deleguee': 'nom_commune_deleguee', 'type_position': 'type_position', 'lieu_dit': 'lieu_dit', 'source_adresse': 'source_adresse', 'certification_commune': 'certification_commune', 'parcelles_cadastrales': 'parcelles_cadastrales', 'identifiant_adresse': 'identifiant_adresse', 'cle_d_interoperabilite': 'cle_d_interoperabilite', });
lyr_lieuxditoklieux_dits_24.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'nom': 'nom', 'commune': 'commune', 'created': 'created', 'updated': 'updated', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315commune_25.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'code_insee_du_canton': 'code_insee_du_canton', 'code_insee_de_l_arrondissement': 'code_insee_de_l_arrondissement', 'code_insee_de_la_collectivite_terr': 'code_insee_de_la_collectivite_terr', 'code_insee_du_departement': 'code_insee_du_departement', 'code_insee_de_la_region': 'code_insee_de_la_region', 'population': 'population', 'superficie_cadastrale': 'superficie_cadastrale', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'code_postal': 'code_postal', 'nom_officiel': 'nom_officiel', 'chef_lieu_d_arrondissement': 'chef_lieu_d_arrondissement', 'chef_lieu_de_collectivite_terr': 'chef_lieu_de_collectivite_terr', 'chef_lieu_de_departement': 'chef_lieu_de_departement', 'chef_lieu_de_region': 'chef_lieu_de_region', 'capitale_d_etat': 'capitale_d_etat', 'date_du_recensement': 'date_du_recensement', 'organisme_recenseur': 'organisme_recenseur', 'code_siren': 'code_siren', 'codes_siren_des_epci': 'codes_siren_des_epci', 'lien_vers_chef_lieu': 'lien_vers_chef_lieu', 'liens_vers_autorite_administrative': 'liens_vers_autorite_administrative', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'cleabs': 'cleabs', 'identifiant_voie_ban': 'identifiant_voie_ban', 'nom_voie_ban': 'nom_voie_ban', 'insee_commune': 'insee_commune', 'nom_commune': 'nom_commune', 'source_voie_ban': 'source_voie_ban', 'nom_collaboratif': 'nom_collaboratif', 'type_voie': 'type_voie', 'mot_directeur': 'mot_directeur', 'lieux_dits_ban': 'lieux_dits_ban', 'liens_vers_supports': 'liens_vers_supports', 'insee_communes_deleguees_ban': 'insee_communes_deleguees_ban', 'noms_communes_deleguees_ban': 'noms_communes_deleguees_ban', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'nom_normalise': 'nom_normalise', 'id_ban_odonyme': 'id_ban_odonyme', });
lyr_Re_Nappe_frBRULAIN_0.set('fieldImages', {'qc_id': '', 'fid': '', 'classe': '', 'fiab_mnt': '', 'fiab_eso': '', 'fiab_tot': '', 'classefiab': '', 'gridcode': 'TextEdit', });
lyr_AleaRG_2025_79_L93BRULAIN_1.set('fieldImages', {'qc_id': '', 'fid': '', 'gid': 'TextEdit', 'insee_dep': 'TextEdit', 'niveau': 'TextEdit', 'surf_m2': 'TextEdit', });
lyr_Sitespollusetablissement_point_2.set('fieldImages', {'qc_id': '', 'code_metie': 'TextEdit', 'nom_invent': 'TextEdit', 'code_inven': 'TextEdit', 'nom_etabli': 'TextEdit', 'code_siret': 'TextEdit', 'adresse': 'TextEdit', 'code_posta': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commun': 'TextEdit', 'code_depar': 'TextEdit', 'nom_depart': 'TextEdit', 'code_regio': 'TextEdit', 'nom_region': 'TextEdit', 'etat_activ': 'TextEdit', 'code_naf': 'TextEdit', 'activite_p': 'TextEdit', 'nature_loc': 'TextEdit', 'x_wgs84': 'TextEdit', 'y_wgs84': 'TextEdit', 'fiche_risq': 'TextEdit', });
lyr_InstallationsClassees_France_3.set('fieldImages', {'qc_id': '', 'code_aiot': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'code_epsg': 'TextEdit', 'nom_ets': 'TextEdit', 'num_dep': 'TextEdit', 'adresse': 'TextEdit', 'cd_insee': 'TextEdit', 'cd_postal': 'TextEdit', 'commune': 'TextEdit', 'code_naf': 'TextEdit', 'lib_naf': 'TextEdit', 'num_siret': 'TextEdit', 'cd_regime': 'TextEdit', 'lib_regime': 'TextEdit', 'seveso': 'TextEdit', 'lib_seveso': 'TextEdit', 'bovins': 'TextEdit', 'porcs': 'TextEdit', 'volailles': 'TextEdit', 'carriere': 'TextEdit', 'eolienne': 'TextEdit', 'industrie': 'TextEdit', 'ied': 'TextEdit', 'priorite_n': 'TextEdit', 'rubriques_': 'TextEdit', 'rubrique_1': 'TextEdit', 'rubrique_2': 'TextEdit', 'date_modif': 'DateTime', 'derniere_i': 'DateTime', 'url_fiche': 'TextEdit', });
lyr_Haie_4.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'hauteur': 'Range', 'largeur': 'Range', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', });
lyr_zonedevgtation_5.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'nature': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', });
lyr_Natura2000Brulain_6.set('fieldImages', {'qc_id': '', 'fid': '', 'cd_sig': 'TextEdit', 'type_espac': 'TextEdit', });
lyr_ZNIEFF2_G2BRULAIN_7.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'objectid': '', 'id_mnhn': '', 'nom': '', 'id_org': '', 'cd_sig': '', 'precis_x': '', 'precis_y': '', 'x_proj': '', 'y_proj': '', 'generation': '', 'superficie': '', 'se_anno_ca': '', });
lyr_ZNIEFF1_G2BRULAIN_8.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'objectid': '', 'id_mnhn': '', 'nom': '', 'id_org': '', 'cd_sig': '', 'precis_x': '', 'precis_y': '', 'x_proj': '', 'y_proj': '', 'generation': '', 'superficie': '', 'se_anno_ca': '', });
lyr_Noeudhydro_9.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_hydrographique': 'TextEdit', 'code_du_pays': 'TextEdit', 'categorie': 'TextEdit', 'toponyme': 'TextEdit', 'statut_du_toponyme': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'methode_d_acquisition_altimetrique': 'TextEdit', 'precision_altimetrique': 'TextEdit', 'mode_d_obtention_des_coordonnees': 'TextEdit', 'mode_d_obtention_de_l_altitude': 'TextEdit', 'statut': 'TextEdit', 'commentaire_sur_l_objet_hydro': 'TextEdit', 'liens_vers_cours_d_eau_amont': 'TextEdit', 'liens_vers_cours_d_eau_aval': 'TextEdit', });
lyr_Courdeau_10.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_hydrographique': 'TextEdit', 'toponyme': 'TextEdit', 'statut_du_toponyme': 'TextEdit', 'importance': 'TextEdit', 'date_creation': 'DateTime', 'date_modification': 'DateTime', 'date_d_apparition': 'DateTime', 'date_de_confirmation': 'DateTime', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'statut': 'TextEdit', 'influence_de_la_maree': 'CheckBox', 'caractere_permanent': 'CheckBox', 'commentaire_sur_l_objet_hydro': 'TextEdit', });
lyr_tronconhydro_11.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_hydrographique': 'TextEdit', 'code_du_pays': 'TextEdit', 'nature': 'TextEdit', 'fictif': 'TextEdit', 'etat_de_l_objet': 'TextEdit', 'position_par_rapport_au_sol': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'methode_d_acquisition_altimetrique': 'TextEdit', 'precision_altimetrique': 'TextEdit', 'mode_d_obtention_des_coordonnees': 'TextEdit', 'mode_d_obtention_de_l_altitude': 'TextEdit', 'statut': 'TextEdit', 'persistance': 'TextEdit', 'fosse': 'TextEdit', 'navigabilite': 'TextEdit', 'salinite': 'TextEdit', 'numero_d_ordre': 'TextEdit', 'strategie_de_classement': 'TextEdit', 'origine': 'TextEdit', 'perimetre_d_utilisation_ou_origine': 'TextEdit', 'sens_de_l_ecoulement': 'TextEdit', 'reseau_principal_coulant': 'TextEdit', 'trace_connu': 'CheckBox', 'classe_de_largeur': 'TextEdit', 'type_de_bras': 'TextEdit', 'commentaire_sur_l_objet_hydro': 'TextEdit', 'code_du_cours_d_eau_bdcarthage': 'TextEdit', 'inventaire_police_de_l_eau': 'TextEdit', 'identifiant_police_de_l_eau': 'TextEdit', 'liens_vers_cours_d_eau': 'TextEdit', 'lien_vers_noeud_hydrographique_ini': 'TextEdit', 'lien_vers_noeud_hydrographique_fin': 'TextEdit', 'liens_vers_surface_hydrographique': 'TextEdit', 'lien_vers_entite_de_transition': 'TextEdit', 'cpx_toponyme_de_cours_d_eau': 'TextEdit', 'cpx_toponyme_d_entite_de_transition': 'TextEdit', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nature': 'TextEdit', 'nature_detaillee': 'TextEdit', 'persistance': 'TextEdit', 'toponyme': 'TextEdit', 'statut_du_toponyme': 'TextEdit', 'importance': 'TextEdit', 'etat_de_l_objet': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'insee_commune': 'TextEdit', 'identifiant_voie_ban': 'TextEdit', 'id_ban_odonyme': 'TextEdit', });
lyr_Surfacehydrographique_13.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_hydrographique': 'TextEdit', 'code_du_pays': 'TextEdit', 'nature': 'TextEdit', 'position_par_rapport_au_sol': 'TextEdit', 'etat_de_l_objet': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'methode_d_acquisition_altimetrique': 'TextEdit', 'precision_altimetrique': 'TextEdit', 'mode_d_obtention_des_coordonnees': 'TextEdit', 'mode_d_obtention_de_l_altitude': 'TextEdit', 'statut': 'TextEdit', 'persistance': 'TextEdit', 'salinite': 'TextEdit', 'origine': 'TextEdit', 'commentaire_sur_l_objet_hydro': 'TextEdit', 'liens_vers_plan_d_eau': 'TextEdit', 'liens_vers_cours_d_eau': 'TextEdit', 'lien_vers_entite_de_transition': 'TextEdit', 'cpx_toponyme_de_plan_d_eau': 'TextEdit', 'cpx_toponyme_de_cours_d_eau': 'TextEdit', 'cpx_toponyme_d_entite_de_transition': 'TextEdit', });
lyr_Rservoirhydro_14.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nature': 'TextEdit', 'etat_de_l_objet': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'methode_d_acquisition_altimetrique': 'TextEdit', 'precision_altimetrique': 'TextEdit', 'altitude_minimale_sol': 'TextEdit', 'altitude_minimale_toit': 'TextEdit', 'hauteur': 'TextEdit', 'altitude_maximale_toit': 'TextEdit', 'altitude_maximale_sol': 'TextEdit', 'origine_du_batiment': 'TextEdit', 'volume': 'TextEdit', });
lyr_ligneelec_15.set('fieldImages', {'qc_id': '', 'fid': '', 'cleabs': 'TextEdit', 'voltage': 'TextEdit', 'gestionnaire': '', 'siren_gestionnaire': '', 'etat_de_l_objet': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'methode_d_acquisition_altimetrique': 'TextEdit', 'precision_altimetrique': 'TextEdit', });
lyr_Routesbrulain_16.set('fieldImages', {'qc_id': 'TextEdit', 'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'barrier': 'TextEdit', 'service': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'access': 'TextEdit', 'maxspeed': 'TextEdit', 'oneway': 'TextEdit', 'noexit': 'TextEdit', 'ref:fr:fantoir': 'TextEdit', 'noname': 'TextEdit', 'name': 'TextEdit', 'tracktype': 'TextEdit', 'ref': 'TextEdit', 'surface': 'TextEdit', });
lyr_tronconroute_17.set('fieldImages', {'qc_id': 'TextEdit', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nature': 'TextEdit', 'nom_collaboratif_gauche': 'TextEdit', 'nom_collaboratif_droite': 'TextEdit', 'importance': 'TextEdit', 'fictif': 'TextEdit', 'position_par_rapport_au_sol': 'TextEdit', 'etat_de_l_objet': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'methode_d_acquisition_altimetrique': 'TextEdit', 'precision_altimetrique': 'TextEdit', 'nombre_de_voies': 'TextEdit', 'largeur_de_chaussee': 'TextEdit', 'itineraire_vert': 'TextEdit', 'prive': 'TextEdit', 'sens_de_circulation': 'TextEdit', 'reserve_aux_bus': 'TextEdit', 'urbain': 'TextEdit', 'vitesse_moyenne_vl': 'TextEdit', 'acces_vehicule_leger': 'TextEdit', 'acces_pieton': 'TextEdit', 'periode_de_fermeture': 'TextEdit', 'nature_de_la_restriction': 'TextEdit', 'restriction_de_hauteur': 'TextEdit', 'restriction_de_poids_total': 'TextEdit', 'restriction_de_poids_par_essieu': 'TextEdit', 'restriction_de_largeur': 'TextEdit', 'restriction_de_longueur': 'TextEdit', 'matieres_dangereuses_interdites': 'TextEdit', 'borne_debut_gauche': 'TextEdit', 'borne_debut_droite': 'TextEdit', 'borne_fin_gauche': 'TextEdit', 'borne_fin_droite': 'TextEdit', 'insee_commune_gauche': 'TextEdit', 'insee_commune_droite': 'TextEdit', 'alias_gauche': 'TextEdit', 'alias_droit': 'TextEdit', 'date_de_mise_en_service': 'TextEdit', 'liens_vers_route_nommee': 'TextEdit', 'liens_vers_itineraire_autre': 'TextEdit', 'cpx_numero': 'TextEdit', 'cpx_numero_route_europeenne': 'TextEdit', 'cpx_classement_administratif': 'TextEdit', 'cpx_gestionnaire': 'TextEdit', 'cpx_toponyme_route_nommee': 'TextEdit', 'cpx_toponyme_itineraire_cyclable': 'TextEdit', 'cpx_toponyme_voie_verte': 'TextEdit', 'cpx_nature_itineraire_autre': 'TextEdit', 'cpx_toponyme_itineraire_autre': 'TextEdit', 'delestage': 'TextEdit', 'source_voie_ban_gauche': 'TextEdit', 'source_voie_ban_droite': 'TextEdit', 'nom_voie_ban_gauche': 'TextEdit', 'nom_voie_ban_droite': 'TextEdit', 'lieux_dits_ban_gauche': 'TextEdit', 'lieux_dits_ban_droite': 'TextEdit', 'identifiant_voie_ban_gauche': 'TextEdit', 'identifiant_voie_ban_droite': 'TextEdit', 'sens_amenagement_cyclable_gauche': 'TextEdit', 'sens_amenagement_cyclable_droit': 'TextEdit', 'amenagement_cyclable_gauche': 'TextEdit', 'amenagement_cyclable_droit': 'TextEdit', 'aire_de_retournement_dfci': 'TextEdit', 'gabarit_dfci': 'TextEdit', 'impasse_dfci': 'CheckBox', 'nature_detaillee_dfci': 'TextEdit', 'ouvrage_d_art_limitant_dfci': 'CheckBox', 'pente_maximale_dfci': 'Range', 'piste_dfci': 'CheckBox', 'piste_dfci_debroussaillee': 'CheckBox', 'piste_dfci_fosses': 'TextEdit', 'sens_de_circulation_dfci': 'TextEdit', 'tout_terrain_dfci': 'CheckBox', 'vitesse_moyenne_dfci': 'Range', 'zone_de_croisement_dfci': 'TextEdit', 'categorie_dfci': 'TextEdit', 'vitesse_collaborative': 'Range', 'id_ban_odonyme_droite': 'TextEdit', 'id_ban_odonyme_gauche': 'TextEdit', });
lyr_batiments_18.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nature': 'TextEdit', 'usage_1': 'TextEdit', 'usage_2': 'TextEdit', 'construction_legere': 'TextEdit', 'etat_de_l_objet': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'methode_d_acquisition_altimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'precision_altimetrique': 'TextEdit', 'nombre_de_logements': 'TextEdit', 'nombre_d_etages': 'TextEdit', 'materiaux_des_murs': 'TextEdit', 'materiaux_de_la_toiture': 'TextEdit', 'hauteur': 'TextEdit', 'altitude_minimale_sol': 'TextEdit', 'altitude_minimale_toit': 'TextEdit', 'altitude_maximale_toit': 'TextEdit', 'altitude_maximale_sol': 'TextEdit', 'origine_du_batiment': 'TextEdit', 'appariement_fichiers_fonciers': 'TextEdit', 'identifiants_rnb': 'TextEdit', });
lyr_Terraindesport_19.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nature': 'TextEdit', 'nature_detaillee': 'TextEdit', 'etat_de_l_objet': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'methode_d_acquisition_altimetrique': 'TextEdit', 'precision_altimetrique': 'TextEdit', });
lyr_cimetiere_20.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'nature': 'TextEdit', 'nature_detaillee': 'TextEdit', 'toponyme': 'TextEdit', 'statut_du_toponyme': 'TextEdit', 'importance': 'TextEdit', 'etat_de_l_objet': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'methode_d_acquisition_altimetrique': 'TextEdit', 'precision_altimetrique': 'TextEdit', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21.set('fieldImages', {'qc_id': '', 'fid': '', 'cleabs': 'TextEdit', 'categorie': 'TextEdit', 'nature': 'TextEdit', 'nature_detaillee': 'TextEdit', 'toponyme': 'TextEdit', 'statut_du_toponyme': 'TextEdit', 'importance': 'TextEdit', 'fictif': 'TextEdit', 'etat_de_l_objet': 'TextEdit', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'sources': 'TextEdit', 'identifiants_sources': 'TextEdit', 'methode_d_acquisition_planimetrique': 'TextEdit', 'precision_planimetrique': 'TextEdit', 'insee_commune': '', 'commune': '', 'adresse_postale': '', 'identifiant_voie_ban': 'TextEdit', 'nom_commercial': 'TextEdit', 'id_ban_odonyme': '', });
lyr_pointvoirie_22.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'annotation': 'TextEdit', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'date_creation': 'DateTime', 'date_modification': 'DateTime', 'date_d_apparition': 'DateTime', 'date_de_confirmation': 'DateTime', 'numero': 'Range', 'suffixe': 'TextEdit', 'identifiant_voie': 'TextEdit', 'nom_voie': 'TextEdit', 'insee_commune': 'TextEdit', 'nom_commune': 'TextEdit', 'insee_commune_deleguee': 'TextEdit', 'nom_commune_deleguee': 'TextEdit', 'type_position': 'TextEdit', 'lieu_dit': 'TextEdit', 'source_adresse': 'TextEdit', 'certification_commune': 'CheckBox', 'parcelles_cadastrales': 'TextEdit', 'identifiant_adresse': 'TextEdit', 'cle_d_interoperabilite': 'TextEdit', });
lyr_lieuxditoklieux_dits_24.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'nom': 'TextEdit', 'commune': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315commune_25.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'code_insee_du_canton': 'TextEdit', 'code_insee_de_l_arrondissement': 'TextEdit', 'code_insee_de_la_collectivite_terr': 'TextEdit', 'code_insee_du_departement': 'TextEdit', 'code_insee_de_la_region': 'TextEdit', 'population': 'TextEdit', 'superficie_cadastrale': 'Range', 'date_creation': 'TextEdit', 'date_modification': 'TextEdit', 'date_d_apparition': 'TextEdit', 'date_de_confirmation': 'TextEdit', 'code_postal': 'TextEdit', 'nom_officiel': 'TextEdit', 'chef_lieu_d_arrondissement': 'TextEdit', 'chef_lieu_de_collectivite_terr': 'TextEdit', 'chef_lieu_de_departement': 'TextEdit', 'chef_lieu_de_region': 'TextEdit', 'capitale_d_etat': 'TextEdit', 'date_du_recensement': 'TextEdit', 'organisme_recenseur': 'TextEdit', 'code_siren': 'TextEdit', 'codes_siren_des_epci': 'TextEdit', 'lien_vers_chef_lieu': 'TextEdit', 'liens_vers_autorite_administrative': 'TextEdit', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26.set('fieldImages', {'qc_id': '', 'fid': '', 'cleabs': '', 'identifiant_voie_ban': '', 'nom_voie_ban': '', 'insee_commune': '', 'nom_commune': '', 'source_voie_ban': '', 'nom_collaboratif': '', 'type_voie': '', 'mot_directeur': '', 'lieux_dits_ban': '', 'liens_vers_supports': '', 'insee_communes_deleguees_ban': '', 'noms_communes_deleguees_ban': '', 'date_creation': '', 'date_modification': '', 'nom_normalise': '', 'id_ban_odonyme': '', });
lyr_Re_Nappe_frBRULAIN_0.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'classe': 'no label', 'fiab_mnt': 'no label', 'fiab_eso': 'no label', 'fiab_tot': 'no label', 'classefiab': 'no label', 'gridcode': 'no label', });
lyr_AleaRG_2025_79_L93BRULAIN_1.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'gid': 'no label', 'insee_dep': 'no label', 'niveau': 'no label', 'surf_m2': 'no label', });
lyr_Sitespollusetablissement_point_2.set('fieldLabels', {'qc_id': 'no label', 'code_metie': 'no label', 'nom_invent': 'no label', 'code_inven': 'no label', 'nom_etabli': 'no label', 'code_siret': 'no label', 'adresse': 'no label', 'code_posta': 'no label', 'code_insee': 'no label', 'nom_commun': 'no label', 'code_depar': 'no label', 'nom_depart': 'no label', 'code_regio': 'no label', 'nom_region': 'no label', 'etat_activ': 'no label', 'code_naf': 'no label', 'activite_p': 'no label', 'nature_loc': 'no label', 'x_wgs84': 'no label', 'y_wgs84': 'no label', 'fiche_risq': 'no label', });
lyr_InstallationsClassees_France_3.set('fieldLabels', {'qc_id': 'no label', 'code_aiot': 'no label', 'x': 'no label', 'y': 'no label', 'code_epsg': 'no label', 'nom_ets': 'no label', 'num_dep': 'no label', 'adresse': 'no label', 'cd_insee': 'no label', 'cd_postal': 'no label', 'commune': 'no label', 'code_naf': 'no label', 'lib_naf': 'no label', 'num_siret': 'no label', 'cd_regime': 'no label', 'lib_regime': 'no label', 'seveso': 'no label', 'lib_seveso': 'no label', 'bovins': 'no label', 'porcs': 'no label', 'volailles': 'no label', 'carriere': 'no label', 'eolienne': 'no label', 'industrie': 'no label', 'ied': 'no label', 'priorite_n': 'no label', 'rubriques_': 'no label', 'rubrique_1': 'no label', 'rubrique_2': 'no label', 'date_modif': 'no label', 'derniere_i': 'no label', 'url_fiche': 'no label', });
lyr_Haie_4.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'hauteur': 'no label', 'largeur': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', });
lyr_zonedevgtation_5.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'nature': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', });
lyr_Natura2000Brulain_6.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cd_sig': 'no label', 'type_espac': 'no label', });
lyr_ZNIEFF2_G2BRULAIN_7.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'objectid': 'no label', 'id_mnhn': 'no label', 'nom': 'no label', 'id_org': 'no label', 'cd_sig': 'no label', 'precis_x': 'no label', 'precis_y': 'no label', 'x_proj': 'no label', 'y_proj': 'no label', 'generation': 'no label', 'superficie': 'no label', 'se_anno_ca': 'no label', });
lyr_ZNIEFF1_G2BRULAIN_8.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'objectid': 'no label', 'id_mnhn': 'no label', 'nom': 'no label', 'id_org': 'no label', 'cd_sig': 'no label', 'precis_x': 'no label', 'precis_y': 'no label', 'x_proj': 'no label', 'y_proj': 'no label', 'generation': 'no label', 'superficie': 'no label', 'se_anno_ca': 'no label', });
lyr_Noeudhydro_9.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'code_hydrographique': 'no label', 'code_du_pays': 'no label', 'categorie': 'no label', 'toponyme': 'no label', 'statut_du_toponyme': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'methode_d_acquisition_altimetrique': 'no label', 'precision_altimetrique': 'no label', 'mode_d_obtention_des_coordonnees': 'no label', 'mode_d_obtention_de_l_altitude': 'no label', 'statut': 'no label', 'commentaire_sur_l_objet_hydro': 'no label', 'liens_vers_cours_d_eau_amont': 'no label', 'liens_vers_cours_d_eau_aval': 'no label', });
lyr_Courdeau_10.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'code_hydrographique': 'no label', 'toponyme': 'no label', 'statut_du_toponyme': 'no label', 'importance': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'statut': 'no label', 'influence_de_la_maree': 'no label', 'caractere_permanent': 'no label', 'commentaire_sur_l_objet_hydro': 'no label', });
lyr_tronconhydro_11.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'code_hydrographique': 'no label', 'code_du_pays': 'no label', 'nature': 'no label', 'fictif': 'no label', 'etat_de_l_objet': 'no label', 'position_par_rapport_au_sol': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'methode_d_acquisition_altimetrique': 'no label', 'precision_altimetrique': 'no label', 'mode_d_obtention_des_coordonnees': 'no label', 'mode_d_obtention_de_l_altitude': 'no label', 'statut': 'no label', 'persistance': 'no label', 'fosse': 'no label', 'navigabilite': 'no label', 'salinite': 'no label', 'numero_d_ordre': 'no label', 'strategie_de_classement': 'no label', 'origine': 'no label', 'perimetre_d_utilisation_ou_origine': 'no label', 'sens_de_l_ecoulement': 'no label', 'reseau_principal_coulant': 'no label', 'trace_connu': 'no label', 'classe_de_largeur': 'no label', 'type_de_bras': 'no label', 'commentaire_sur_l_objet_hydro': 'no label', 'code_du_cours_d_eau_bdcarthage': 'no label', 'inventaire_police_de_l_eau': 'no label', 'identifiant_police_de_l_eau': 'no label', 'liens_vers_cours_d_eau': 'no label', 'lien_vers_noeud_hydrographique_ini': 'no label', 'lien_vers_noeud_hydrographique_fin': 'no label', 'liens_vers_surface_hydrographique': 'no label', 'lien_vers_entite_de_transition': 'no label', 'cpx_toponyme_de_cours_d_eau': 'no label', 'cpx_toponyme_d_entite_de_transition': 'no label', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315detail_hydrographique_12.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'nature': 'no label', 'nature_detaillee': 'no label', 'persistance': 'no label', 'toponyme': 'no label', 'statut_du_toponyme': 'no label', 'importance': 'no label', 'etat_de_l_objet': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'insee_commune': 'no label', 'identifiant_voie_ban': 'no label', 'id_ban_odonyme': 'no label', });
lyr_Surfacehydrographique_13.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'code_hydrographique': 'no label', 'code_du_pays': 'no label', 'nature': 'no label', 'position_par_rapport_au_sol': 'no label', 'etat_de_l_objet': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'methode_d_acquisition_altimetrique': 'no label', 'precision_altimetrique': 'no label', 'mode_d_obtention_des_coordonnees': 'no label', 'mode_d_obtention_de_l_altitude': 'no label', 'statut': 'no label', 'persistance': 'no label', 'salinite': 'no label', 'origine': 'no label', 'commentaire_sur_l_objet_hydro': 'no label', 'liens_vers_plan_d_eau': 'no label', 'liens_vers_cours_d_eau': 'no label', 'lien_vers_entite_de_transition': 'no label', 'cpx_toponyme_de_plan_d_eau': 'no label', 'cpx_toponyme_de_cours_d_eau': 'no label', 'cpx_toponyme_d_entite_de_transition': 'no label', });
lyr_Rservoirhydro_14.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'nature': 'no label', 'etat_de_l_objet': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'methode_d_acquisition_altimetrique': 'no label', 'precision_altimetrique': 'no label', 'altitude_minimale_sol': 'no label', 'altitude_minimale_toit': 'no label', 'hauteur': 'no label', 'altitude_maximale_toit': 'no label', 'altitude_maximale_sol': 'no label', 'origine_du_batiment': 'no label', 'volume': 'no label', });
lyr_ligneelec_15.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'voltage': 'no label', 'gestionnaire': 'no label', 'siren_gestionnaire': 'no label', 'etat_de_l_objet': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'methode_d_acquisition_altimetrique': 'no label', 'precision_altimetrique': 'no label', });
lyr_Routesbrulain_16.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'barrier': 'no label', 'service': 'no label', 'name:etymology:wikidata': 'no label', 'access': 'no label', 'maxspeed': 'no label', 'oneway': 'no label', 'noexit': 'no label', 'ref:fr:fantoir': 'no label', 'noname': 'no label', 'name': 'no label', 'tracktype': 'no label', 'ref': 'no label', 'surface': 'no label', });
lyr_tronconroute_17.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'nature': 'no label', 'nom_collaboratif_gauche': 'no label', 'nom_collaboratif_droite': 'no label', 'importance': 'no label', 'fictif': 'no label', 'position_par_rapport_au_sol': 'no label', 'etat_de_l_objet': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'methode_d_acquisition_altimetrique': 'no label', 'precision_altimetrique': 'no label', 'nombre_de_voies': 'no label', 'largeur_de_chaussee': 'no label', 'itineraire_vert': 'no label', 'prive': 'no label', 'sens_de_circulation': 'no label', 'reserve_aux_bus': 'no label', 'urbain': 'no label', 'vitesse_moyenne_vl': 'no label', 'acces_vehicule_leger': 'no label', 'acces_pieton': 'no label', 'periode_de_fermeture': 'no label', 'nature_de_la_restriction': 'no label', 'restriction_de_hauteur': 'no label', 'restriction_de_poids_total': 'no label', 'restriction_de_poids_par_essieu': 'no label', 'restriction_de_largeur': 'no label', 'restriction_de_longueur': 'no label', 'matieres_dangereuses_interdites': 'no label', 'borne_debut_gauche': 'no label', 'borne_debut_droite': 'no label', 'borne_fin_gauche': 'no label', 'borne_fin_droite': 'no label', 'insee_commune_gauche': 'no label', 'insee_commune_droite': 'no label', 'alias_gauche': 'no label', 'alias_droit': 'no label', 'date_de_mise_en_service': 'no label', 'liens_vers_route_nommee': 'no label', 'liens_vers_itineraire_autre': 'no label', 'cpx_numero': 'no label', 'cpx_numero_route_europeenne': 'no label', 'cpx_classement_administratif': 'no label', 'cpx_gestionnaire': 'no label', 'cpx_toponyme_route_nommee': 'no label', 'cpx_toponyme_itineraire_cyclable': 'no label', 'cpx_toponyme_voie_verte': 'no label', 'cpx_nature_itineraire_autre': 'no label', 'cpx_toponyme_itineraire_autre': 'no label', 'delestage': 'no label', 'source_voie_ban_gauche': 'no label', 'source_voie_ban_droite': 'no label', 'nom_voie_ban_gauche': 'no label', 'nom_voie_ban_droite': 'no label', 'lieux_dits_ban_gauche': 'no label', 'lieux_dits_ban_droite': 'no label', 'identifiant_voie_ban_gauche': 'no label', 'identifiant_voie_ban_droite': 'no label', 'sens_amenagement_cyclable_gauche': 'no label', 'sens_amenagement_cyclable_droit': 'no label', 'amenagement_cyclable_gauche': 'no label', 'amenagement_cyclable_droit': 'no label', 'aire_de_retournement_dfci': 'no label', 'gabarit_dfci': 'no label', 'impasse_dfci': 'no label', 'nature_detaillee_dfci': 'no label', 'ouvrage_d_art_limitant_dfci': 'no label', 'pente_maximale_dfci': 'no label', 'piste_dfci': 'no label', 'piste_dfci_debroussaillee': 'no label', 'piste_dfci_fosses': 'no label', 'sens_de_circulation_dfci': 'no label', 'tout_terrain_dfci': 'no label', 'vitesse_moyenne_dfci': 'no label', 'zone_de_croisement_dfci': 'no label', 'categorie_dfci': 'no label', 'vitesse_collaborative': 'no label', 'id_ban_odonyme_droite': 'no label', 'id_ban_odonyme_gauche': 'no label', });
lyr_batiments_18.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'nature': 'no label', 'usage_1': 'no label', 'usage_2': 'no label', 'construction_legere': 'no label', 'etat_de_l_objet': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'methode_d_acquisition_altimetrique': 'no label', 'precision_planimetrique': 'no label', 'precision_altimetrique': 'no label', 'nombre_de_logements': 'no label', 'nombre_d_etages': 'no label', 'materiaux_des_murs': 'no label', 'materiaux_de_la_toiture': 'no label', 'hauteur': 'no label', 'altitude_minimale_sol': 'no label', 'altitude_minimale_toit': 'no label', 'altitude_maximale_toit': 'no label', 'altitude_maximale_sol': 'no label', 'origine_du_batiment': 'no label', 'appariement_fichiers_fonciers': 'no label', 'identifiants_rnb': 'no label', });
lyr_Terraindesport_19.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'nature': 'no label', 'nature_detaillee': 'no label', 'etat_de_l_objet': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'methode_d_acquisition_altimetrique': 'no label', 'precision_altimetrique': 'no label', });
lyr_cimetiere_20.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'nature': 'no label', 'nature_detaillee': 'no label', 'toponyme': 'no label', 'statut_du_toponyme': 'no label', 'importance': 'no label', 'etat_de_l_objet': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'methode_d_acquisition_altimetrique': 'no label', 'precision_altimetrique': 'no label', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315zone_d_activite_ou_d_interet_21.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'categorie': 'no label', 'nature': 'no label', 'nature_detaillee': 'no label', 'toponyme': 'no label', 'statut_du_toponyme': 'no label', 'importance': 'no label', 'fictif': 'no label', 'etat_de_l_objet': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'sources': 'no label', 'identifiants_sources': 'no label', 'methode_d_acquisition_planimetrique': 'no label', 'precision_planimetrique': 'no label', 'insee_commune': 'no label', 'commune': 'no label', 'adresse_postale': 'no label', 'identifiant_voie_ban': 'no label', 'nom_commercial': 'no label', 'id_ban_odonyme': 'no label', });
lyr_pointvoirie_22.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'annotation': 'no label', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315adresse_ban_23.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'numero': 'no label', 'suffixe': 'no label', 'identifiant_voie': 'no label', 'nom_voie': 'no label', 'insee_commune': 'no label', 'nom_commune': 'no label', 'insee_commune_deleguee': 'no label', 'nom_commune_deleguee': 'no label', 'type_position': 'no label', 'lieu_dit': 'no label', 'source_adresse': 'no label', 'certification_commune': 'no label', 'parcelles_cadastrales': 'no label', 'identifiant_adresse': 'no label', 'cle_d_interoperabilite': 'no label', });
lyr_lieuxditoklieux_dits_24.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'nom': 'no label', 'commune': 'no label', 'created': 'no label', 'updated': 'no label', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315commune_25.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'code_insee_du_canton': 'no label', 'code_insee_de_l_arrondissement': 'no label', 'code_insee_de_la_collectivite_terr': 'no label', 'code_insee_du_departement': 'no label', 'code_insee_de_la_region': 'no label', 'population': 'no label', 'superficie_cadastrale': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'code_postal': 'no label', 'nom_officiel': 'no label', 'chef_lieu_d_arrondissement': 'no label', 'chef_lieu_de_collectivite_terr': 'no label', 'chef_lieu_de_departement': 'no label', 'chef_lieu_de_region': 'no label', 'capitale_d_etat': 'no label', 'date_du_recensement': 'no label', 'organisme_recenseur': 'no label', 'code_siren': 'no label', 'codes_siren_des_epci': 'no label', 'lien_vers_chef_lieu': 'no label', 'liens_vers_autorite_administrative': 'no label', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'cleabs': 'no label', 'identifiant_voie_ban': 'no label', 'nom_voie_ban': 'no label', 'insee_commune': 'no label', 'nom_commune': 'no label', 'source_voie_ban': 'no label', 'nom_collaboratif': 'no label', 'type_voie': 'no label', 'mot_directeur': 'no label', 'lieux_dits_ban': 'no label', 'liens_vers_supports': 'no label', 'insee_communes_deleguees_ban': 'no label', 'noms_communes_deleguees_ban': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'nom_normalise': 'no label', 'id_ban_odonyme': 'no label', });
lyr_BDT_35_GPKG_LAMB93_D079ED20260315voie_nommee_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});