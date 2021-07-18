module.exports = function toReadable (number) {
    let arrUnits = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrDecimal = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrDozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = number + '';
    let arr = str.split('');
    let result = !!number ? '' : 'zero';
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === '0') {
            continue;
        }
        if (arr.length === 3) {
            if (i === 0) {
                result += `${arrUnits[arr[i] - 1]} hundred`
            } else if (i === 1) { 
                if (arr[i] === '1') {
                    result += ` ${arrDecimal[arr[i+1]]}`;
                } else if (arr[i + 1] === '0') {
                    result += ` ${arrDozens[arr[i] - 1]}`;
                } else {
                    result += ` ${arrDozens[arr[i] - 1]}`;
                }

            } else if (i === 2 && arr[i -1] !== '1') {
                result += ` ${arrUnits[arr[i] - 1]}`;
            }
        } if (arr.length === 2){
             if (i === 0 && arr[i] === '1') {
                result += `${arrDecimal[arr[i + 1]]}`;
             } else {
                 if (i ===0) {
                    result += `${arrDozens[arr[i] - 1]}`;
                } else if (i === 1 && arr[i - 1] !== '1') {
                    result += ` ${arrUnits[arr[i] - 1]}`;
                }
             }
        } if (arr.length === 1) {
            if (i===0) {
                result += `${arrUnits[arr[i] - 1]}`;
            }
        }
    };
    return result;
}  
