function qs(arr: number[], lo: number, hi: number): void {
    // The recursive calls should only proceed if the lower index is less than the higher index
    if (lo >= hi) {
        return;
    }

    // The partition function rearranges the elements and returns the final pivot index
    const pivotIdx = partition(arr, lo, hi);

    // QuickSort on the sub-array to the left of the pivot
    qs(arr, lo, pivotIdx - 1);
    // QuickSort on the sub-array to the right of the pivot
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    // The pivot is chosen to be the element at the high index
    const pivot = arr[hi];
    // This index will keep track of the 'wall' - the last position of the element less than the pivot
    let idx = lo - 1;

    // We iterate through the array from the low index to one less than the high index
    for (let i = lo; i < hi; i++) {
        // If the current element is less than or equal to the pivot
        if (arr[i] <= pivot) {
            // We move the wall one position to the right
            idx++;
            // Swap the current element with the element at the wall
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    // Place the pivot after the last element that was less than it
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    // Return the index of the pivot, now in the correct position
    return idx;
}

// The main function to be exported and called
export default function quick_sort(arr: number[]): void {
    // QuickSort is called on the entire array
    qs(arr, 0, arr.length - 1);
}
