for (let r = 1; r <= 4; r++) {
    let pattern = ""

    for (let c = 1; c <= 4; c++) {
        if (r == c) {
            pattern += "1\t"

        }
        // else if ((r == 4 && c == 1) || (r == 1 && c == 4)) {
        //     pattern += "1\t"
        // }
        // else if ((r == 2 && c == 3) || (r == 3 && c == 2)) {
        //     pattern += "1\t"
        // }
        else if (r+c==5) {
            pattern+= "1 \t"
            
        }
        else {
            pattern += "0\t"
        }

    }
    console.log(pattern);
}
