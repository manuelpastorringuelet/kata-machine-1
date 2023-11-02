export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0; // the lowest index we will search
    let hi = haystack.length; // the highest index we will search
    do {
        const m = Math.floor(lo + (hi - lo) / 2); // find the middle of the list
        const v = haystack[m]; // get the value at the middle of the list

        if (v === needle) {
            // if the middle is the needle, we found it
            return true;
        } else if (v > needle) {
            // if the middle is greater than the needle, we can discard the right half of the list
            hi = m;
        } else {
            // if the middle is less than the needle, we can discard the left half of the list
            lo = m + 1;
        }
    } while (lo < hi); // keep going until we have searched the entire list
    return false; // if we get here, we didn't find the needle
}
