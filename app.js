const emailButton = document.getElementById('copy')
emailButton.addEventListener('click',()=>{
    const emailAddress = 'katherinnunezsal1@gmail.com'
    navigator.clipboard.writeText(emailAddress);
    emailButton.innerHTML=' Copied!'
})

// Initialize and add the map
let map;

async function initMap() {
  // The location of Guatemala
  const position = { lat: 14.64072, lng: -90.51327 };
  
  // Request needed libraries.  
  const { Map } = await google.maps.importLibrary("maps");
  console.log();

  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Guatemala
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Guatemala
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Mi Ubicacion",
  });
}

initMap();