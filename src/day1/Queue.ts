// We're going to talk about a special list, like a line of people holding hands.
// Each person (node) has a number on their hand and knows who's next in line.

type Node<T> = {
    value: T; // Each person has a number on their hand.
    next?: Node<T>; // Each person knows who's next in line.
};

// We're going to call this line "Queue."

export default class Queue<T> {
    public length: number; // This tells us how many people are in line.
    private head?: Node<T>; // This is the first person in line.
    private tail?: Node<T>; // This is the last person in line.

    // When we start, there's no one in line, so we set everything to "undefined."
    constructor() {
        this.head = this.tail = undefined; // No one in line.
        this.length = 0; // There's zero people.
    }

    // If someone wants to join the line, they "enqueue" (get in line at the end).

    enqueue(item: T): void {
        // They tell us their number and we add them to the end.
        const node = { value: item } as Node<T>;
        this.length++; // Now, there's one more person in line.

        // If it's their first time, they become both the head and the tail.
        if (!this.tail) {
            this.tail = this.head = node;
        }

        // Otherwise, they stand behind the person who was last in line.
        this.tail.next = node;
        this.tail = node;
    }

    // When we want to take the first person out of the line, we "deque" (remove) them.

    deque(): T | undefined {
        // But we can't do this if there's no one in line.
        if (!this.head) return undefined;

        // We say goodbye to the first person and they go away.
        this.length--;

        const head = this.head;
        this.head = this.head.next;

        // We let go of their hand to free up memory.
        head.next = undefined;

        // If they were the last person, we also let go of their foot.
        if (this.length === 0) this.tail = undefined;

        // They tell us their number as they leave.
        return head.value;
    }

    // If we just want to know who's at the front of the line, we "peek."

    peek(): T | undefined {
        // We look at the first person in line and see their number.
        return this.head?.value;
    }
}
