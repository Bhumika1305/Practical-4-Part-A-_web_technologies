function initGrid() {
    // Collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    // Generate color codes
    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // Get the colors and selected divs
    const colorsDiv = document.getElementById('colors');
    const selectedDiv = document.getElementById('selected');

    // Create color tiles and add them to the "colors" div
    colors.forEach(function(color) {
        const tile = document.createElement('div');
        tile.className = 'choice';
        tile.style.backgroundColor = color;

        // Add click event listener for each tile
        tile.addEventListener('click', function() {
            selectedDiv.style.backgroundColor = color; // Set the background color of the selected div
            selectedDiv.textContent = color; // Display the color code in the selected div
        });

        colorsDiv.appendChild(tile); // Add the tile to the colors div
    });
}

window.onload = function () {
    initGrid();
}