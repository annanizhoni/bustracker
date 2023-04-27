let map;
let marker;
let counter = 0;

const busStops = [
    { lat: 37.85723889206931, lng: -122.48035034441811 },
    { lat: 37.85862785217823, lng: -122.48326948558238 },  
    { lat: 37.859747645379485, lng: -122.48586668240605 },
    { lat: 37.861080, lng: -122.48928511296259 },
    { lat: 37.861822628770284, lng: -122.49376877980531 }, 
    { lat: 37.86555745474472, lng: -122.49924891294897 },
    { lat: 37.868493879741735, lng: -122.50219979744561 },
    { lat: 37.87112330436521, lng: -122.50381997726213 }, 
    { lat: 37.872028870131786, lng: -122.51123700438417 }, 
    { lat: 37.87983405871181, lng: -122.51522267784904 }, 
    { lat: 37.88173699288218, lng: -122.5239270017763 }, 
    { lat: 37.8796132153171, lng: -122.53478672155508 },
    { lat: 37.89360948573564, lng: -122.55694501513467 },
    { lat: 37.89692568988306, lng: -122.56041347303875 },
    { lat: 37.90103685013001, lng: -122.56767851707603 },
    { lat: 37.91068958258913, lng: -122.57669210918253 }, 
    { lat: 37.90924508673358, lng: -122.60136107849483 }, 
    { lat: 37.86555745474472, lng: -122.60334998457972 }, 
    { lat: 37.89867021386556, lng: -122.63946863113169 }, 
    { lat: 37.93036202134586, lng: -122.6827143462179 }, 
    { lat: 37.90940847195682, lng: -122.68616689383855 }, 
];

function fetchMapStyles() {
    return fetch("mapStyles.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched map styles:", data);
        return data;
      })
      .catch((error) => {
        console.error("Error fetching map styles:", error);
      });
  }
  
  async function initMap() {
    const mapStyles = await fetchMapStyles();
  
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.90349377669593, lng: -122.60457257446618 },
      zoom: 11,
      styles: mapStyles,
    });
  
    marker = new google.maps.Marker({
      position: busStops[0],
      map: map,
      icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/bus.png',
    });
  }
  
  
  function move() {
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setPosition(busStops[counter]);
      counter++;
      move();
    }, 1000);
  };