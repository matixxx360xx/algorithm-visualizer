export function quickSort(arr) {
    const steps = [];
    const a = [...arr];

    function partition(low, high) {
        const pivot = a[Math.floor((low + high) / 2)];
        let i = low;
        let j = high;

        while (i <= j) {
            while (a[i] < pivot) {
                i++;
            } 
            while (a[j] > pivot) {
                j--;
            } 

            if (i <= j) {
                const temp = a[i];
                a[i] = a[j];
                a[j] = temp;
                steps.push([...a]); 
                i++;
                j--;
            }
        }

        return i;
    }

    function sort(low, high) {
        if (low >= high) return;

        const index = partition(low, high);

        sort(low, index - 1);
        sort(index, high);
    }

    sort(0, a.length - 1);

    return steps;
}