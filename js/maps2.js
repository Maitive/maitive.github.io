import 'ol/ol.css';
import Map from 'ol/Map';
import OSM, {ATTRIBUTION} from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

const openSeaMapLayer = new TileLayer({
    source: new OSM({
        attributions: [
            'All maps © <a href="https://www.openseamap.org/">OpenSeaMap</a>',
            ATTRIBUTION,
        ],
        opaque: false,
        url: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
    }),
});

const map = new Map({
    layers: [ openSeaMapLayer],
    target: 'map',
    view: new View({
        maxZoom: 18,
        center: [-244780.24508882355, 5986452.183179816],
        zoom: 15,
    }),
});

debugger