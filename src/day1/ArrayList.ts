export default class ArrayList<T> {
    private array: T[]; // We're creating a private array to store our elements.
    public length: number; // This variable will keep track of the number of elements in the array.

    constructor(initialCapacity: number = 10) {
        // When we create an ArrayList, we can specify an initial capacity (default is 10).
        this.array = new Array<T>(initialCapacity); // We create an array with the given capacity.
        this.length = 0; // At the beginning, the array is empty, so the length is 0.
    }

    prepend(item: T): void {
        // This method adds an item to the beginning of the array.
        this.insertAt(item, 0); // We use the insertAt method to insert at index 0 (the start).
    }

    insertAt(item: T, idx: number): void {
        // This method inserts an item at a specific index in the array.
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds"); // We make sure the index is within valid bounds.
        }

        if (this.length >= this.array.length) {
            this.resizeArray(); // If the array is full, we make it larger to accommodate more items.
        }

        // We move existing items to create space for the new item.
        for (let i = this.length; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }

        this.array[idx] = item; // We place the new item at the desired index.
        this.length++; // We increase the length to reflect the addition of a new item.
    }

    append(item: T): void {
        // This method adds an item to the end of the array.
        if (this.length >= this.array.length) {
            this.resizeArray(); // If the array is full, we make it larger to accommodate more items.
        }

        this.array[this.length] = item; // We place the new item at the end of the array.
        this.length++; // We increase the length to reflect the addition of a new item.
    }

    remove(item: T): T | undefined {
        // This method removes a specific item from the array and returns it.
        const index = this.array.indexOf(item); // We find the index of the item in the array.

        if (index !== -1) {
            return this.removeAt(index); // If the item is found, we use removeAt to remove it.
        }

        return undefined; // If the item is not found, we return undefined.
    }

    removeAt(idx: number): T | undefined {
        // This method removes an item at a specific index in the array and returns it.
        if (idx < 0 || idx >= this.length) {
            return undefined; // If the index is out of bounds, we return undefined.
        }

        // We use a type assertion (as T) to ensure TypeScript knows we're returning the item as type T.
        const removedItem = this.array[idx] as T;

        for (let i = idx; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }

        // We use a type assertion (as T) here to replace the last item with undefined.
        this.array[this.length - 1] = undefined as T;
        this.length--;

        return removedItem; // We return the removed item.
    }

    get(idx: number): T | undefined {
        // This method retrieves an item at a specific index in the array.
        if (idx < 0 || idx >= this.length) {
            return undefined; // If the index is out of bounds, we return undefined.
        }

        // We use a type assertion (as T) to ensure TypeScript knows we're returning the item as type T.
        return this.array[idx] as T;
    }

    private resizeArray(): void {
        // This method increases the capacity of the array when it's full.
        const newCapacity = this.array.length * 2; // We double the current capacity.
        const newArray = new Array<T>(newCapacity); // We create a new, larger array.

        // We copy the items from the old array to the new array.
        for (let i = 0; i < this.array.length; i++) {
            newArray[i] = this.array[i];
        }

        this.array = newArray; // We replace the old array with the new, larger array.
    }
}
