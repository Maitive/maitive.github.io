setTimeout(()=>{
    if(document.getElementById('map')){
        var map = L.map('map').setView([39.799905, 29.105530], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(map);
        L.marker([40.999905, 29.105530]).addTo(map)
            .bindPopup("Batı, Nida Kule, barbaros mahallesi, Begonya Sk. no:1,34746 Ataşehir/İstanbul").openPopup();
    }
},1000);
