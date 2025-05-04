function reverseVowels(s) {
    
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    let vowelList = [];
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            vowelList.push(s[i]);
        }
    }
    
    let reversedVowels = [];
    for (let i = vowelList.length - 1; i >= 0; i--) {
        reversedVowels.push(vowelList[i]);
    }
    
    let vowelIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            arr[i] = reversedVowels[vowelIndex];
            vowelIndex++;
        }
    }
    
    return arr.join('');
}
console.log(reverseVowels("IceCreAm")); 