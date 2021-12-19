const counters = document.querySelectorAll('.visitor-counter');
for (let n of counters) {
    const updateCount = () => {
        const target = +n.getAttribute('data-target');
        const count = +n.innerText;
        const speed = 99999;
        const inc = target / speed;
        if (count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            n.innerText = target;
        }
    }
    updateCount();
}