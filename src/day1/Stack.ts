// Think of a stack like a stack of colorful blocks or pancakes. We can add more blocks on top, take the top one off, or just look at the top block.

type Node<T> = {
    value: T;      // Each block has a number on it.
    prev?: Node<T>; // Each block knows what's below it.
};

// We'll call this stack "Stack."

export default class Stack<T> {
    public length: number;       // This tells us how many blocks are in the stack.
    private head?: Node<T>;     // This is the top block.

    // When we start, there's no stack, so we set everything to "undefined."
    constructor() {
        this.head = undefined;   // No stack.
        this.length = 0;        // There's zero blocks.
    }

    // If someone wants to add a block on top of the stack, they "push."

    push(item: T): void {
        // They tell us their number, and we add their block on top.
        const node = { value: item } as Node<T>;

        this.length++;   // Now, there's one more block.

        // If it's their first block, they become the top block.
        if (!this.head) {
            this.head = node;
            return;
        }

        // Otherwise, they go on top of the current top block.
        node.prev = this.head;
        this.head = node;
    }

    // If we want to take the top block off the stack, we "pop" it.

    pop(): T | undefined {
        if (this.length === 0) {
            // But we can't do this if there's no stack.
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        // We say goodbye to the top block and take it off the stack.
        this.length = Math.max(0, this.length - 1);

        const head = this.head as Node<T>;
        this.head = head.prev;

        // They tell us their number as they leave.
        return head?.value;
    }

    // If we just want to see the number on the top block without taking it off, we "peek."

    peek(): T | undefined {
        // We look at the top block and see its number.
        return this.head?.value;
    }
}
