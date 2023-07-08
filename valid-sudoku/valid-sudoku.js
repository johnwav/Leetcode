// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function (board) {
//     let row = new Map();
//     let column = new Map();
//     let square = new Map();

//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             if (board[r][c] === ".") {
//                 continue;
//             }
//             if (
//                 row.has(`${r}`) && row.get(`${r}`).has(board[r][c]) ||
//                 column.has(`${c}`) && column.get(`${c}`).has(board[r][c]) ||
//                 square.has(`${Math.floor(r / 3)}, ${Math.floor(c / 3)}`) &&
//                 square.get(`${Math.floor(r / 3)}, ${Math.floor(c / 3)}`).has(board[r][c])
//             ) {
//                 return false;
//             }

//             if (!column.has(`${c}`)) {
//                 column.set(`${c}`, new Set());
//             }
//             column.get(`${c}`).add(board[r][c]);

//             if (!row.has(`${r}`)) {
//                 row.set(`${r}`, new Set());
//             }
//             row.get(`${r}`).add(board[r][c]);

//             if (!square.has(`${Math.floor(r / 3)},${Math.floor(c / 3)}`)) {
//                 square.set(`${Math.floor(r / 3)},${Math.floor(c / 3)}`, new Set());
//             }
//             square.get(`${Math.floor(r / 3)},${Math.floor(c / 3)}`).add(board[r][c]);
//         }
//     }

//     return true;
// };



// with objects 

var isValidSudoku = function (board) {

    let row = {}
    let col = {}
    let square = {}

    for (r = 0; r < 9; r++) {
        for (c = 0; c < 9; c++) {
            let squareIndex = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

            if (board[r][c] === ".") continue
            if (row[r] && row[r][board[r][c]] ||
                col[c] && col[c][board[r][c]] ||
                square[squareIndex] &&
                square[squareIndex][board[r][c]]
            ) {
                return false
            }
            else {
                row[r] = row[r] || {};
                row[r][board[r][c]] = true
                col[c] = col[c] || {};
                col[c][board[r][c]] = true
                square[squareIndex] = square[squareIndex] || {};
                square[squareIndex][board[r][c]] = true
            }

        }

    }
    return true;


}


