export function isValidBrackets(arr) {
    const stack = [];
    const bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let character of arr) {
        if (['(', '[', '{'].includes(character)) {
            stack.push(character);
        } else if ([')', ']', '}'].includes(character)) {
            if (stack.pop() !== bracketPairs[character]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}