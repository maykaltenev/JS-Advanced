function solve() {

    // Select Elements - table, the 2 buttons
    let buttons = document.querySelectorAll('#exercise tfoot button');

    let checkButton = buttons[0];
    let clearButton = buttons[1];

    // Transform the table rows into a in memory nested array 


    checkButton.addEventListener('click', checkBoard);
    clearButton.addEventListener('click', clear);


    function checkBoard() {

        let board = Array
            .from(document.querySelectorAll('#exercise tbody tr'))
            .map(row => Array.from(row.querySelectorAll('input'))
                .map(x => Number(x.value)));

        let isValid = isValidSudoku(board);

        let checkParagraph = document.querySelector('#check p');
        let table = document.querySelector('#exercise table');
        table.style.border = isValid ? '2px solid green' : '2px solid red';
        checkParagraph.textContent = isValid
            ? 'You solve it! Congratulations!'
            : 'NOP! Your are not done yet...';

        checkParagraph.style.color = isValid ? 'green' : 'red';

    }

    function isValidSudoku(board) {
        for (let row = 0; row < board.length; row++) {
            let rowObj = { 1: 0, 2: 0, 3: 0 }
            let colObj = { 1: 0, 2: 0, 3: 0 }
            for (let col = 0; col < board[row].length; col++) {
                let curRowCell = board[row][col];
                let curColCell = board[col][row];

                rowObj[curRowCell]++;
                colObj[curColCell]++;
            }

            let rowValues = Object.values(rowObj);
            let colValues = Object.values(colObj);
            if (rowValues.length > board.length || rowValues.some(x => x !== 1) ||
                colValues.length > board.length || colValues.some(x => x !== 1)) {
                return false;
            }
        }
        return true;
    }

    function createCheckObj(board) {
        let obj = {};
        for (let i = 0; i < board.length; i++) {
            obj[i + 1] = 0;

        }
        return obj;
    }

    function clear() {
        let checkParagraph = document.querySelector('#check p');
        let table = document.querySelector('#exercise table');

        let board = Array
            .from(document.querySelectorAll('#exercise tbody tr'))
            .map(row => Array.from(row.querySelectorAll('input')));

        checkParagraph.textContent = '';
        table.style.border = '';
        board.forEach(el => el.value = '');

    }
//'Nop! Your are not done yet...';
    //3. Check if Sudoku board is valid

    //3a. check that every row has only numbers 1-3 and only one number of each

    //3b. check that every col has only numbers 1-3 and only one number of each

    //4. QuickCheckBtn - Color table boarder, add text into check paragraph
}