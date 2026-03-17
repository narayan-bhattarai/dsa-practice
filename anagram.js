function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
}

// Example with input value
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);

console.log("Input:", input);
console.log("Grouped anagrams:", result);