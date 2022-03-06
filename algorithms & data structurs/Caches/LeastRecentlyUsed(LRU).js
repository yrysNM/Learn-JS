function DLLNode(key, data) {
	this.key = key; 
	this. data = data;
	this.next = null; 
	this.prev = null;
}

function LRUCache(capacity) {
	this.keys = {}; 
	this.capacity = capacity; 
	this.head = new DLLNode('', null);
	this.tail = new DLLNode('', null);
	this.head.next = this.tail;
	this.tail.prev = this.head; 

}

LRUCache.prototype.removeNode = function(node) {
	let prev = node.prev; 
	let next = node.next;

	prev.next = next;
	next.prev = prev;
}

LRUCache.prototype.addNode = function(node) {
	let realTail = this.tail.prev;
	realTail.next = node;

	this.tail.prev = node;
	node.prev = realTail; 
	node.next  = this.tail; 

}

LRUCache.prototype.get = function(key) {
	let node = this.keys[key];

	if(node === undefined) {
		return null;
	}else {
		this.removeNode(node);
		this.addNode(node);
		return node.data;
	}
}

LRUCache.prototype.set = function(key, value) {
	let node = this.keys[key];

	if(node) {
		this.removeNode(node);
	}

	let newNode = new DLLNode(key, value);

	this.addNode(newNode);
	this.keys[key] = newNode;

	//evict a node 
	if(Object.keys(this.keys).length > this.capacity) {
		let realHead = this.head.next; 
		this.removeNode(realHead);
		delete this.keys[realHead.key];
	}
}

let myLRU = new LRUCache(5);

myLRU.set(1, 1);
myLRU.set(2, 2);
myLRU.set(3, 3);
myLRU.set(4, 4);
myLRU.set(5, 5);


myLRU.get(1);
myLRU.get(2);

myLRU.set(6, 6);
myLRU.set(7,7);
myLRU.set(8, 8);


console.log(myLRU);