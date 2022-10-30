/**** function takes input (string, no of choices to convert(seprate by space), choice1 , choice2 ) ****/
/**** e.g. ("mat", 2, "m t 15"), "a t 2" => returns Minimum cost is 15 Rs****/

function costCalculator() {
    const str = prompt("Enter string 😁");
    const n = prompt("Enter no of inputs 👀");
    let ans = 0;
    let val = [];
    for (let i = 0; i < n; i++) 
        val.push(prompt("Enter values seprated by space 🙏"));
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        let index = len - i - 1;
        if (str[i] != str[index]) {
            for (let j = 0; j < val.length; j++) {
                const inputedVal = val[j];
                if ((str[i] == inputedVal[0] && str[index] == inputedVal[2]) || (str[i] == inputedVal[2] && str[index] == inputedVal[0])) {
                    const cost = inputedVal.split(" ")[2];
                    ans += Number(cost);
                    break;
                }
            }
        }
    }
    alert(`Minimum cost is ${ans} Rs 💰💸`);
}

/****Calling function ****/
costCalculator();