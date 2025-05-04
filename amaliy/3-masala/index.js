
function printInvertedTriangle(size) {

    let border = '*'.repeat(size);
    console.log(border); 

    for (let i = 1; i <= size - 2; i++) {
        let stars = '*'; 
        let spacesBefore = ' '.repeat(i); 
        let spacesInside = ' '.repeat(size - 2 * i - 2); 
        if (spacesInside.length >= 0) {
            console.log(stars + spacesBefore + stars + spacesInside + stars + spacesBefore + stars);
        } else {
            console.log(stars + spacesBefore + stars + spacesBefore + stars);
        }
    }

    console.log(border); 
}

printInvertedTriangle(10);