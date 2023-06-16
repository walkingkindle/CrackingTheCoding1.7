


// Rotate Matrix:

// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this in place?


//I: nxn matrix
//O: rotated matrix - 90 deg, clockwise
//C: rotate matrix in place, optimize
//E: empty matrix, even and odd values for n

function rotateMatrix(matrix){
    n =  matrix.length;

    //Step 1  - Transpose Matrix (turn rows to columns)

    for(let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // Swap the numbers
    for(let i = 0; i< n; i++) {
        for (let j = 0; j < n/2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }


}