document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    const scoreElement = document.getElementById("score");
    let board = Array(4).fill().map(() => Array(4).fill(0));
    let score = 0;

    function createGrid() {
        grid.innerHTML = "";
        board.forEach((row) => {
            row.forEach((value) => {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                if (value > 0) {
                    cell.textContent = value;
                    cell.setAttribute("data-value", value);
                }
                grid.appendChild(cell);
            });
        });
    }

    function addRandomTile() {
        let emptyCells = [];
        board.forEach((row, rowIndex) => {
            row.forEach((value, colIndex) => {
                if (value === 0) emptyCells.push({ rowIndex, colIndex });
            });
        });
        if (emptyCells.length > 0) {
            let { rowIndex, colIndex } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            board[rowIndex][colIndex] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    function moveLeft(row) {
        let newRow = row.filter(num => num);
        for (let i = 0; i < newRow.length - 1; i++) {
            if (newRow[i] === newRow[i + 1]) {
                newRow[i] *= 2;
                score += newRow[i];
                newRow.splice(i + 1, 1);
            }
        }
        while (newRow.length < 4) newRow.push(0);
        return newRow;
    }

    // Rotation de la grille de 90° dans le sens horaire
    function rotateBoard() {
        let newBoard = Array(4).fill().map(() => Array(4).fill(0));
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                newBoard[c][3 - r] = board[r][c];
            }
        }
        board = newBoard;
    }

    // Correction de la fonction de déplacement avec la cartographie suivante :
    // ArrowLeft  : aucun pivot (déplacement vers la gauche)
    // ArrowUp    : pivoter 3 fois (équivaut à une rotation anti-horaire)
    // ArrowRight : pivoter 2 fois (rotation à 180°)
    // ArrowDown  : pivoter 1 fois (rotation horaire)
    function move(direction) {
        const rotationMap = {
            "ArrowLeft": 0,
            "ArrowUp": 3,    // 3 rotations horaires = 1 rotation anti-horaire
            "ArrowRight": 2, // 180° de rotation
            "ArrowDown": 1   // 1 rotation horaire
        };
        let rotated = rotationMap[direction] || 0;
        // Effectuer les rotations pour aligner le mouvement sur la gauche
        for (let i = 0; i < rotated; i++) {
            rotateBoard();
        }
        let moved = false;
        for (let r = 0; r < 4; r++) {
            let newRow = moveLeft(board[r]);
            if (JSON.stringify(newRow) !== JSON.stringify(board[r])) {
                moved = true;
            }
            board[r] = newRow;
        }
        // Restaurer l'orientation initiale en effectuant (4 - rotated) rotations
        for (let i = 0; i < (4 - rotated) % 4; i++) {
            rotateBoard();
        }
        if (moved) {
            addRandomTile();
            createGrid();
            scoreElement.textContent = score;
        }
    }

    function checkGameOver() {
        // Si une case vide est trouvée, le jeu continue
        if (board.some(row => row.includes(0))) return false;
        // Vérifier s'il existe des cases adjacentes identiques
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if ((j < 3 && board[i][j] === board[i][j + 1]) ||
                    (i < 3 && board[i][j] === board[i + 1][j])) {
                    return false;
                }
            }
        }
        alert("Game Over ! Score : " + score);
        restartGame();
        return true;
    }

    function restartGame() {
        board = Array(4).fill().map(() => Array(4).fill(0));
        score = 0;
        addRandomTile();
        addRandomTile();
        createGrid();
        scoreElement.textContent = score;
    }

    document.addEventListener("keydown", (e) => {
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
            move(e.key);
            checkGameOver();
        }
    });

    restartGame();
    
    // Rendre la fonction restartGame accessible globalement
    window.restartGame = restartGame;
});
