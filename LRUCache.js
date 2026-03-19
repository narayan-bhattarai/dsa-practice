class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        }
        this.map.set(key, value);
        if (this.map.size > this.capacity) {
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
    }

    display() {
        console.log(Array.from(this.map.entries()));
    }
}

// Simple test
const cache = new LRUCache(3);

cache.put(1, 'A');
cache.put(2, 'B');
cache.put(3, 'C');
cache.display(); // [[1,'A'],[2,'B'],[3,'C']]

cache.get(1);    // 'A'
cache.display(); // [[2,'B'],[3,'C'],[1,'A']]

cache.put(4, 'D');
cache.display(); // [[3,'C'],[1,'A'],[4,'D']]

cache.get(2);    // -1
cache.display(); // [[3,'C'],[1,'A'],[4,'D']]

cache.put(5, 'E');
cache.display(); // [[1,'A'],[4,'D'],[5,'E']]