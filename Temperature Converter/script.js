const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const clearBtn = document.getElementById('clearBtn');

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celcius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "fahrenheit":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
        }
    });
}

//clear btn
// const input1 = document.getElementById('celcius');
//     const input2 = document.getElementById('fahrenheit');
//     const clearBtn = document.getElementById('clearBtn');

    clearBtn.addEventListener('click', function() {
      celciusInput.value = '';
      fahrenheitInput.value = '';
    });