document.getElementById("yesButton").addEventListener("click", function() {
    // Show the birthday message and images when "YES" is clicked
    document.getElementById("message").innerHTML = "Happy Birthday, Ericka! 🎉🎂🎈";
    
    // Show images
    let imagesDiv = document.getElementById("images");
    imagesDiv.innerHTML = `
        <img src="birthday-cake.jpg" alt="Birthday Cake">
        <img src="balloons.jpg" alt="Balloons">
    `;
});

document.getElementById("noButton").addEventListener("click", function() {
    // Show a message if "NO" is clicked
    document.getElementById("message").innerHTML = "Sorry, you are not the celebrant.";
    document.getElementById("images").innerHTML = ""; // Hide images if not the celebrant
});
