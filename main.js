const wavurl = "https://file.garden/ae50sn0rViu-4ETl/fsdfsdfsdfsdfsd.txt";

let currentAudioControl = null;

function playRadix36Audio(radixStr, targetKhz = 1.0, sourceSampleRate = 4000) {
  stopAudioTheme();

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const chunks = radixStr.includes(" ") ? radixStr.split(" ") : Array.from(radixStr);
  const rawValues = chunks.map(ch => parseInt(ch, 36));

  const minVal = Math.min(...rawValues);
  const maxVal = Math.max(...rawValues);
  const midPoint = (minVal + maxVal) / 2;
  const maxPeak = (maxVal - minVal) / 2 || 1;

  const extraSeconds = 0;
  const extraSamples = Math.floor(sourceSampleRate * extraSeconds);
  const totalSamples = rawValues.length + extraSamples;

  const buffer = audioCtx.createBuffer(1, totalSamples, sourceSampleRate);
  const channelData = buffer.getChannelData(0);

  for (let i = 0; i < rawValues.length; i++) {
    channelData[i] = (rawValues[i] - midPoint) / maxPeak;
  }

  const lastSample = channelData[rawValues.length - 1] || 0;
  for (let i = 0; i < extraSamples; i++) {
    const fade = 1 - (i / extraSamples);
    channelData[rawValues.length + i] = lastSample * fade;
  }

  const targetHz = targetKhz * 1000;
  const calculatedRate = targetHz / sourceSampleRate;

  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.playbackRate.value = calculatedRate;
  source.loop = true;

  source.connect(audioCtx.destination);
  source.start(0);

  currentAudioControl = { source, audioCtx };
  return currentAudioControl;
}

function stopAudioTheme() {
  if (currentAudioControl) {
    try {
      currentAudioControl.source.stop();
      currentAudioControl.audioCtx.close();
    } catch (e) {
      // Audio already stopped
    }
    currentAudioControl = null;
  }
}

(async function loadingScene() {
    const libUrlsToLoad = [
        // Core Utilities
        "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/ramda/0.29.0/ramda.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/async/3.2.4/async.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.8/axios.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.10/dayjs.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.8.2/rxjs.umd.min.js",

        // DOM Tools & Frameworks
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/cash/8.1.5/cash.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js",
        "https://unpkg.com/htmx.org@1.9.10",
        "https://unpkg.com/alpinejs@3.13.5/dist/cdn.min.js",
        "https://unpkg.com/petite-vue@0.4.1/dist/petite-vue.iife.js",
        "https://unpkg.com/@hotwired/stimulus@3.2.2/dist/stimulus.umd.js",

        // UI, Modals & Components
        "https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.10.5/sweetalert2.all.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.8/umd/popper.min.js",
        "https://unpkg.com/tippy.js@6",
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js",

        // Sanitization, Parsing & Search
        "https://cdnjs.cloudflare.com/ajax/libs/DOMPurify/3.0.9/purify.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/sanitize-html/2.13.0/sanitize-html.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.8/handlebars.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.1/marked.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/fuse.js/7.0.0/fuse.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/crossfilter2/1.5.5/crossfilter.min.js",

        // Graphics, Canvas & Physics
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.4.0/pixi.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/konva/9.3.6/konva.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",

        // Animation & Audio
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/tone/14.7.77/Tone.js",

        // Visualization & Math
        "https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js",
        "https://cdnjs.cloudflare.com/ajax/libs/mathjs/12.4.1/math.js",
        "https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js",

        // Code Editors & Highlighting
        "https://cdnjs.cloudflare.com/ajax/libs/quill/2.0.0-rc.5/quill.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.3/tinymce.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
    ];
    
    const urlsToLoad = [];
    const allUrls = [...libUrlsToLoad, ...urlsToLoad];

    // Create the overlay UI
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        zIndex: "999999",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
        color: "#ffffff"
    });

    const progressContainer = document.createElement("div");
    Object.assign(progressContainer.style, {
        width: "300px",
        height: "12px",
        backgroundColor: "#222222",
        borderRadius: "6px",
        overflow: "hidden",
        border: "1px solid #444444",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)"
    });

    const progressBar = document.createElement("div");
    Object.assign(progressBar.style, {
        width: "0%",
        height: "100%",
        backgroundColor: "#ffffff",
        transition: "width 0.15s ease-out"
    });

    const statusText = document.createElement("div");
    Object.assign(statusText.style, {
        marginTop: "12px",
        fontSize: "12px",
        opacity: "0.7"
    });
    statusText.innerText = "Initializing parallel downloads...";

    progressContainer.appendChild(progressBar);
    overlay.appendChild(progressContainer);
    overlay.appendChild(statusText);
    document.body.appendChild(overlay);

    let completedCount = 0;
    const updateProgress = () => {
        completedCount++;
        const percent = Math.round((completedCount / (allUrls.length + 1)) * 100);
        progressBar.style.width = `${percent}%`;
        statusText.innerText = `Loading assets (${completedCount}/${allUrls.length + 1})...`;
    };

    // 1. Fetch Audio asynchronously alongside scripts
    const audioPromise = fetch(wavurl)
        .then(res => res.text())
        .then(data => {
            playRadix36Audio(data, 4.0, 16000);
            updateProgress();
        })
        .catch(err => {
            console.error("Audio failed to load", err);
            updateProgress();
        });

    // 2. Fetch all script source texts simultaneously in parallel
    const scriptPromises = allUrls.map(async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const scriptContent = await response.text();
            updateProgress();
            return scriptContent;
        } catch (err) {
            console.error(`Failed to load script: ${url}`, err);
            updateProgress();
            return null; // Safe fallback on failure
        }
    });

    // 3. Await parallel resolution of all downloads
    const [_, ...loadedScriptsText] = await Promise.all([audioPromise, ...scriptPromises]);

    statusText.innerText = "Executing scripts...";

    // 4. Evaluate scripts sequentially in array order
    for (const code of loadedScriptsText) {
        if (code) {
            try {
                (0, eval)(code);
            } catch (err) {
                console.error("Script evaluation error:", err);
            }
        }
    }

    // 5. Fade out and remove overlay
    overlay.style.transition = "opacity 0.3s ease-out";
    overlay.style.opacity = "0";

    setTimeout(() => {
        overlay.remove();
        stopAudioTheme();
    }, 300);
})();
