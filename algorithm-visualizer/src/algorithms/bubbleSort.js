export function bubbleSort(arr) {
    const steps = []
    let a = [...arr]

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {

                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                
                steps.push([...a])
            }
        
        }
    }

    return steps
}