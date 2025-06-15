const counterInput = document.getElementById('counter');

    function inc() {
      counterInput.value = parseInt(counterInput.value) + 1;
    }

    function dec() {
      counterInput.value = parseInt(counterInput.value) - 1;
    }
