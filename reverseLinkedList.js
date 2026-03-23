
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);


function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next;
        current.next = prev;

        prev = current;
        current = next;
    }

    return prev;
}


const reversedHead = reverseList(head);


function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}


console.log("Original list: 1 -> 2 -> 3 -> 4 -> 5");
console.log("Reversed list: ");
printList(reversedHead); 