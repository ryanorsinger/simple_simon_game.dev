var keymap = {
        '43': '+',
        '49': 1,
        '50': 2,
        '51': 3,
        '52': 4,
        '53': 5,
        '54': 6,
        '55': 7,
        '56': 8,

    }

    var calculator = document.getElementById('calc');
    // console.log(calculator);

    var key = document.addEventListener('keypress', keyfunction);

    var placeholder1 = '';

    function keyfunction(event) {
        // console.log(event);
        console.log(event);
        // console.log('number is: ' + keymap[event.charCode]);

        if(keymap[event.charCode] == '+') {
            console.log('switch it up');
        } else {
            placeholder1 += keymap[event.charCode];
            console.log(placeholder1);
        }
    }
