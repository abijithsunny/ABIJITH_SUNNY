function input(a) {

    let result = [];


    if (a == 1) {

        result.push(1);
        

    } else {
        for (let i = 0; i < Math.min(a, 27); i++) {

            result.push(2 * i + 1);
            
        }
    }

    console.log(result.join(', '));
}

input(1);
input(2);
input(3);
input(4);
input(5);
input(27); 
