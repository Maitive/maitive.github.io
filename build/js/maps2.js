setTimeout(()=>{
    if(document.getElementById('map')){
        var map = L.map('map').setView([39.799905, 29.105530], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        }).addTo(map);
        L.marker([40.999905, 29.105530]).addTo(map)
            .bindPopup("Batı, Nida Kule, barbaros mahallesi, Begonya Sk. no:1,34746 Ataşehir/İstanbul").openPopup();
    }
},1000);
