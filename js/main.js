window.addEventListener("DOMContentLoaded", function () {

    document.getElementById("find-me").addEventListener("click", geoFindMe);
    document.getElementById("shareBtn").addEventListener("click", share);

function geoFindMe() {

    if ('geolocation' in navigator) {

        document.getElementById("status").innerHTML="מאתר את מיקומך...";
        
        navigator.geolocation.getCurrentPosition((position) => {
        
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';
    mapLink.href = `https://maps.google.com/?q=${latitude},${longitude}`; 

    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

    const iframe = document.querySelector('#iframe');
    iframe.classList.remove("d-none");
    
    iframe.src = `https://maps.google.com/?output=embed&q=${latitude},${longitude}`; 
  
    const shareData = {
      text: `Latitude: ${latitude} °, Longitude: ${longitude} °` 
    }
    
    const shareBtn = document.querySelector('#shareBtn');
    const statusShare = document.querySelector('#statusShare');
    
    // Share must be triggered by "user activation"
    shareBtn.addEventListener('click', async () => {
      try {
        await navigator.share(shareData);
        statusShare.textContent = "שלח את מיקומך";
      } catch (err) {
        statusShare.textContent = `Error: ${err}`;
      }
    });

          });

        /* geolocation is available */
      } else {
        alert("לא צלח");
        /* geolocation IS NOT available */
      }
}

function share() {
    if ('geolocation' in navigator) {
        /* geolocation is available */
      } else {
        /* geolocation IS NOT available */
      }

}

})