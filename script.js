navigator.geolocation.getCurrentPosition(position => {
    const loc = document.getElementById('location');
    const link = document.getElementById('link'); // Correctly reference the <a> tag
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    link.innerText = `${latitude}, ${longitude}`; // Update the <p> text with the coordinates
    link.href = `https://www.google.com/maps?q=${latitude},${longitude}`; // Set the href attribute of the <a> tag
    
});
