let input = document.querySelector("input");

function addValue(val) {
    input.value += val;
}

function clearInput() {
    input.value = '';
}

function deleteLast() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch {
        input.value = 'Error';
    }
}
