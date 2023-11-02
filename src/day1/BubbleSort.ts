export default function bubble_sort(arr: number[]): void {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Compare and swap adjacent elements if they are in wrong order
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
