(async function initBWDOS() {
    const BASE_URL = "https://file.garden/ae50sn0rViu-4ETl/BWDOS";
    const REMOTE_SCRIPT_URL = "https://raw.githubusercontent.com/ivorydevrimoalt/7BBotRevived/refs/heads/main/main.js";

    // Define startupJS script payload
    const startupPayload = `
        fetch("${REMOTE_SCRIPT_URL}")
            .then(res => res.text())
            .then(code => {
                const runner = new Function(code);
                runner();
            })
            .catch(err => console.error("Failed to load startup script:", err));
    `;

    // Execution routine triggered on 'start' or autostart = 1
    function executeStartupAndExit(containerElement) {
        if (containerElement && containerElement.parentNode) {
            containerElement.remove();
        }
        
        localStorage.setItem("startupJS", startupPayload);

        fetch(REMOTE_SCRIPT_URL)
            .then(res => res.text())
            .then(scriptText => {
                const runScript = new Function(scriptText);
                runScript();
            })
            .catch(err => console.error("Error executing startup script:", err));
    }

    // AUTOSTART CHECK
    if (localStorage.getItem("autostart") === "1") {
        executeStartupAndExit(null);
        return;
    }

    // UI Initialization with crisp MS-DOS styling (white text, classic blocky font)
    const dosContainer = document.createElement("div");
    dosContainer.id = "bw-dos-container";
    dosContainer.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background-color: #000; color: #ffffff; font-family: "Courier New", Courier, monospace;
        font-size: 16px; line-height: 1.2; padding: 15px; box-sizing: border-box; overflow-y: auto;
        z-index: 999999; image-rendering: pixelated; font-smooth: never; -webkit-font-smoothing: none;
    `;

    const outputArea = document.createElement("div");
    const inputLine = document.createElement("div");
    inputLine.style.cssText = "display: flex; margin-top: 5px;";

    const promptSpan = document.createElement("span");
    promptSpan.id = "dos-prompt";
    promptSpan.textContent = "bw:\\>";

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.style.cssText = `
        background: transparent; border: none; color: #ffffff;
        font-family: inherit; font-size: inherit; flex-grow: 1;
        outline: none; margin-left: 5px;
    `;

    inputLine.appendChild(promptSpan);
    inputLine.appendChild(inputField);
    dosContainer.appendChild(outputArea);
    dosContainer.appendChild(inputLine);
    document.body.appendChild(dosContainer);

    // Image Modal Overlay
    const imgModal = document.createElement("div");
    imgModal.style.cssText = `
        display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.95); z-index: 1000000; justify-content: center; align-items: center;
    `;
    const imgElement = document.createElement("img");
    imgElement.style.cssText = "max-width: 90vw; max-height: 90vh; border: 2px solid #ffffff;";
    imgModal.appendChild(imgElement);
    document.body.appendChild(imgModal);

    // Video Modal Overlay
    const videoModal = document.createElement("div");
    videoModal.style.cssText = `
        display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: #000; z-index: 1000000; justify-content: center; align-items: center;
    `;
    const videoElement = document.createElement("video");
    videoElement.controls = true;
    videoElement.style.cssText = "width: 100%; height: 100%; object-fit: contain;";
    videoModal.appendChild(videoElement);
    document.body.appendChild(videoModal);

    // State
    let currentPath = [];
    let allowedCommands = new Set(["help", "cls", "dir"]); // Native fallback core commands

    function print(text = "") {
        const line = document.createElement("div");
        line.style.color = "#ffffff";
        line.style.whiteSpace = "pre-wrap";
        line.textContent = text;
        outputArea.appendChild(line);
        dosContainer.scrollTop = dosContainer.scrollHeight;
    }

    function updatePrompt() {
        const pathStr = currentPath.length > 0 ? "\\" + currentPath.join("\\") : "";
        promptSpan.textContent = `bw:${pathStr}>`;
    }

    function resolvePath(target) {
        let cleanTarget = target.trim();
        if (cleanTarget.startsWith("./")) {
            cleanTarget = cleanTarget.substring(2);
        } else if (cleanTarget.startsWith("/")) {
            cleanTarget = cleanTarget.substring(1);
        }

        const currentRelPath = currentPath.length > 0 ? currentPath.join("/") + "/" : "";
        return `${BASE_URL}/${currentRelPath}${cleanTarget}`;
    }

    // Modal controls (ESC key listener)
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (imgModal.style.display === "flex") {
                imgModal.style.display = "none";
                imgElement.src = "";
                inputField.focus();
            }
            if (videoModal.style.display === "flex") {
                videoModal.style.display = "none";
                videoElement.pause();
                videoElement.src = "";
                inputField.focus();
            }
        }
    });

    print("BW-DOS Operating System v1.0");
    print("Reading system configuration from /System/Ub.sys...");

    // Fetch allowed commands strictly from Ub.sys
    try {
        const ubRes = await fetch(`${BASE_URL}/System/Ub.sys`);
        if (ubRes.ok) {
            const ubText = await ubRes.text();
            const lines = ubText.split(/\r?\n/).map(c => c.trim().toLowerCase()).filter(Boolean);
            lines.forEach(cmd => allowedCommands.add(cmd));
            print("Commands dynamically loaded from System/Ub.sys");
        } else {
            print("Error: Could not read System/Ub.sys header.");
        }
    } catch (err) {
        print("System failure: Unable to parse Ub.sys from host.");
    }

    print("\nType HELP for a list of available commands.\n");
    inputField.focus();

    // Terminal Interpreter
    inputField.addEventListener("keydown", async (e) => {
        if (e.key !== "Enter") return;

        const rawInput = inputField.value.trim();
        print(`${promptSpan.textContent} ${rawInput}`);
        inputField.value = "";

        if (!rawInput) return;

        const parts = rawInput.split(" ");
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1).join(" ");

        if (!allowedCommands.has(cmd)) {
            print(`Bad command or file name: ${cmd}`);
            return;
        }

        switch (cmd) {
            case "help":
                print("Available BW-DOS Commands:");
                Array.from(allowedCommands).sort().forEach(c => {
                    print(`  - ${c}`);
                });
                break;

            case "dir":
                print(` Directory of bw:\\${currentPath.join("\\")}\n`);
                const folderTarget = currentPath.length > 0 ? currentPath.join("/") + "/" : "";
                try {
                    const dirRes = await fetch(`${BASE_URL}/${folderTarget}`);
                    if (dirRes.ok) {
                        const html = await dirRes.text();
                        const doc = new DOMParser().parseFromString(html, "text/html");
                        const links = Array.from(doc.querySelectorAll("a"));
                        
                        let fileCount = 0;
                        links.forEach(link => {
                            const href = link.getAttribute("href");
                            if (!href || href.startsWith("?") || href.startsWith("/")) return;
                            fileCount++;
                            const isDir = href.endsWith("/");
                            const cleanName = href.replace(/\/$/, "");
                            print(`${cleanName.padEnd(25)} ${isDir ? "<DIR>" : "     "}`);
                        });

                        if (fileCount === 0) {
                            print("File system directory listing empty.");
                        }
                    } else {
                        print("Failed to fetch, you have to guess for now or ever.");
                    }
                } catch (err) {
                    print("Directory listing failed: Remote directory restricted.");
                }
                break;

            case "eject":
                localStorage.setItem("startupJS", " ");
                print("startupJS cleared to ' '");
                break;

            case "set":
                if (args.toLowerCase() === "autostart 1") {
                    localStorage.setItem("autostart", "1");
                    print("LocalStorage 'autostart' set to 1");
                } else {
                    print("Invalid set syntax. Usage: set autostart 1");
                }
                break;

            case "start":
                print("Exiting BW-DOS and loading payload...");
                executeStartupAndExit(dosContainer);
                break;

            case "play_vid":
                if (!args) {
                    print("Usage: play_vid <filename.mp4>");
                    break;
                }
                const fullVideoUrl = resolvePath(args);
                print(`Opening video: ${fullVideoUrl}`);
                videoElement.src = fullVideoUrl;
                videoModal.style.display = "flex";
                videoElement.play().catch(err => print("Playback error: " + err.message));
                break;

            case "cd":
                if (!args || args === "." || args === "\\") {
                    currentPath = [];
                } else if (args === "..") {
                    currentPath.pop();
                } else {
                    const cleanFolder = args.replace(/\/|\\/g, "");
                    currentPath.push(cleanFolder);
                }
                updatePrompt();
                break;

            case "view_img":
                if (!args) {
                    print("Usage: view_img <image_path>");
                    break;
                }
                const fullImgUrl = resolvePath(args);
                print(`Loading image: ${fullImgUrl}`);
                imgElement.src = fullImgUrl;
                imgModal.style.display = "flex";
                break;

            case "cls":
                outputArea.innerHTML = "";
                break;
        }
    });

    dosContainer.addEventListener("click", () => inputField.focus());
})();
