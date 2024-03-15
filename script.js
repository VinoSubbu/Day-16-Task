  // Define countdown function with callback
  const countdown = (num, callback) => {
    document.getElementById('countdown').innerText = num;
    setTimeout(() => {
        num--;
        if (num > 0) {
            countdown(num, callback);
        } else {
            callback();
        }
    }, 1000);
};

// Start countdown from 10 to 1
countdown(10, () => {
    // After countdown, display "Happy Independence Day"
    document.getElementById('countdown').innerText = "Happy Independence Day";
});