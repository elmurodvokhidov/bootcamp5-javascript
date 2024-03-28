const count = document.getElementById('count');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');

// Global variable
let global_count = 0;

// Render function
function render() {
    count.innerHTML = `${global_count}`;
}

inc.addEventListener('click', () => {
    global_count = ++global_count;
    render();
});

dec.addEventListener('click', () => {
    global_count = --global_count;
    render();
});