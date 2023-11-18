function calc() {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        let expression = document.getElementById('expression').value;
        
        try {
            let result = math.evaluate(expression);
            document.getElementById('result').textContent = `= ${result}`;
        } catch (error) {
            document.getElementById('result').textContent = "Error";
        }
    });
}

document.addEventListener("DOMContentLoaded", calc);
