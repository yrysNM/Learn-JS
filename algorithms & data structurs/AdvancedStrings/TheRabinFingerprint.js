class RabinkarpSearch {
    constructor() {
        this.prime = 101;
    }

    rabinkarpFingerprintHash(str, endLength) {
        if(endLength == null) {

            endLength = str.length; 
        }
        let hashInt = 0; 
        for(let i = 0; i < endLength; i++) {
            hashInt += str.charCodeAt(i) * Math.pow(this.prime, i);
        }
        return hashInt;
    }

    recalculateHash(str, oldIndex, newIndex, oldHash, patternLength) {
        if(patternLength == null) {
            patternLength = str.length; 

        }
        let newHash = oldHash - str.charCodeAt(oldIndex); 
        newHash = Math.floor(newHash/this.prime); 
        newHash += str.charCodeAt(newIndex) * Math.pow(this.prime, patternLength - 1);
        return newHash;
    }

    strEquals(str1, startIndex1, endIndex1, str2, startIndex2, endIndex2) {
        if(endIndex1 - startIndex1 != endIndex2 - startIndex2) {
            return false;
        }

        while(startIndex1 <= endIndex1 && startIndex2 <= endIndex2) {
            if(str1[startIndex1] != str2[startIndex2]) {
                return false;
            }
            startIndex1++; 
            startIndex2++;
        }
        return true;
    }

    rabinkarpSearch(str, pattern) {
        let T = str.length,
            W = pattern.length,
            patternHash = this.rabinkarpFingerprintHash(pattern, W),
            textHash = this.rabinkarpFingerprintHash(str, W);

        for(let i = 1; i <= T - W + 1; i++) {
            if(patternHash == textHash && this.strEquals(str, i - 1, i + W - 2, pattern, 0, W - 1)) {
                return i - 1;
            }

            if(i < T - W + 1) {
                textHash = this.recalculateHash(str, i - 1, i + W - 1, textHash, W);
            }
        }
        return -1;
    }
}



let rks  = new RabinkarpSearch();
console.log(rks.rabinkarpFingerprintHash("sammie"));
let oldHash = rks.rabinkarpFingerprintHash("sa");
console.log(rks.recalculateHash("same", 0, 2, oldHash, "sa".length));
console.log(rks.rabinkarpSearch("SammieBae", "Sam"));
