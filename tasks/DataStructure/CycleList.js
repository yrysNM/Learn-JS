class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head; 
    let fast = head; 
    
    while(fast && fast.next) {
        fast = fast.next.next; 
        
        slow = slow.next; 
        
        if(fast === slow) 
            return true;
    }
    
    return false;
};