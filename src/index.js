const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let i = 0;

        while(i< expr.length){
            let a = ''
            a = expr.slice(i, i+10).replace(/^0+/, '');
            if(a === '**********'){
                result = `${result} `
            }
            else{
    
                let j = 0
                let str = ''
                while(j <a.length){
                    if(a.slice(j, j+2)=== '10'){
                        str = `${str}.`
                    }
                    else{
                        str = `${str}-`
                    }
                    j+=2;
                    
                   
                    }
                     result = `${result}${MORSE_TABLE[str]}`
                }
        i+=10
        }
    return result;

}

module.exports = {
    decode
}