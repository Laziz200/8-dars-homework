

function customSplit(str, separator) {
    if (typeof str !== 'string' || typeof separator !== 'string') {
        throw new Error('Faqat string qiymatlar qabul qilinadi');
    }
    
    if (separator === '') {
        let result = [];
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }
    
    let result = [];
    let start = 0;
    
    for (let i = 0; i <= str.length; i++) {
        let match = true;
        for (let j = 0; j < separator.length; j++) {
            if (str[i + j] !== separator[j]) {
                match = false;
                break;
            }
        }
        
        if (match || i === str.length) {
            let part = '';
            for (let k = start; k < i; k++) {
                part += str[k];
            }
            result.push(part);
            start = i + separator.length;
            i += separator.length - 1;
        }
    }
    
    return result;
}

console.log(customSplit("Salom,dunyo,qalaysan", ",")); 
