window.onload = function() {
    var labyrinth = new Labyrinth();
    labyrinth.printDisplay('map'); // Display the labyrinth when the page loads

    // Add event listener for keydown events to move the player
    document.addEventListener('keydown', function(event) {
        labyrinth.movePlayer(event.key);  // Move the player based on key pressed
        document.getElementById('map').innerHTML = '';  // Clear the map to refresh the view
        labyrinth.printDisplay('map');  // Redraw the labyrinth with updated player position
    });
};
