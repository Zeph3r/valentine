const logs = [
"Initializing Relationship Protocol...",
"Loading Shared Interests...",
"Checking Compatibility...",
"Deploying Good Vibes...",
"Finalizing...",
"Ready."
];

let i = 0;
const terminal = document.getElementById("terminal");
const runBtn = document.getElementById("runBtn");

function typeLog() {
    if (i < logs.length) {
        terminal.innerHTML += logs[i] + "\n";
        i++;
        setTimeout(typeLog, 600);
    } else {
        runBtn.classList.remove("hidden");
    }
}

typeLog();

runBtn.onclick = () => {
    document.getElementById("result").classList.remove("hidden");
    runBtn.style.display = "none";
};

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function accept() {
    document.body.innerHTML = `
        <div style="text-align:center;color:#00ff9c;font-family:monospace">
            <h1>Query Accepted ✔</h1>
            <p>Best outcome detected.</p>
            <p>Check outside Princess <3 </p>
        </div>
    `;
}
