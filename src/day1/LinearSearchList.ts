export default function linear_search(
    haystack: number[], // list of numbers
    needle: number, // number we are looking for
): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}
