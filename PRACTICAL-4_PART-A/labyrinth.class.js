var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]
    ];

    this.startX = 0;
    this.startY = 0;
    this.endX = 5;
    this.endY = 4;
    this.playerX = this.startX;
    this.playerY = this.startY;

    // Method to print the labyrinth in the console using * for walls and spaces for empty cells
    this.printConsole = function() {
        for (let row of this.map) {
            let rowStr = row.map(cell => cell === 1 ? '*' : ' ').join('');
            console.log(rowStr);
        }
    }

    // Method to display the labyrinth on the screen inside the element with the given id
    this.printDisplay = function(id) {
        let mapDiv = document.getElementById(id);
        mapDiv.style.position = 'relative';
        mapDiv.style.width = `${this.map[0].length * CELL_SIZE}px`;
        mapDiv.style.height = `${this.map.length * CELL_SIZE}px`;
        mapDiv.style.border = '2px solid black';

        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                let cell = document.createElement('div');
                cell.style.width = `${CELL_SIZE}px`;
                cell.style.height = `${CELL_SIZE}px`;
                cell.style.position = 'absolute';
                cell.style.left = `${col * CELL_SIZE}px`;
                cell.style.top = `${row * CELL_SIZE}px`;
                cell.style.backgroundColor = this.map[row][col] === 1 ? 'grey' : 'white';
                mapDiv.appendChild(cell);
            }
        }

        // Draw the player and the destination
        this.drawCharacter(mapDiv, 'blue', this.playerX, this.playerY); // player
        this.drawCharacter(mapDiv, 'green', this.endX, this.endY); // destination
    };

    // Method to draw the character (player or destination) on the labyrinth
    this.drawCharacter = function(mapDiv, color, x, y) {
        let character = document.createElement('div');
        character.style.width = `${CELL_SIZE}px`;
        character.style.height = `${CELL_SIZE}px`;
        character.style.position = 'absolute';
        character.style.left = `${x * CELL_SIZE}px`;
        character.style.top = `${y * CELL_SIZE}px`;
        character.style.backgroundColor = color;
        mapDiv.appendChild(character);
    };

    // Method to move the player within the labyrinth based on key press direction
    this.movePlayer = function(direction) {
        let newX = this.playerX;
        let newY = this.playerY;

        if (direction === 'ArrowUp') newY--;
        if (direction === 'ArrowDown') newY++;
        if (direction === 'ArrowLeft') newX--;
        if (direction === 'ArrowRight') newX++;

        // Check boundaries and ensure player doesn't move into walls
        if (newX >= 0 && newX < this.map[0].length && newY >= 0 && newY < this.map.length && this.map[newY][newX] === 0) {
            this.playerX = newX;
            this.playerY = newY;
        }

        // Check if the player reaches the destination
        if (this.playerX === this.endX && this.playerY === this.endY) {
            alert("Congratulations!");
        }
    }
}
