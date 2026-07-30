// Configuration
// 1. Map standard dictionary phonemes to your specific eSpeak phoneme chart

function skits(){
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    let skitRunning = false;

    async function playRandomSkit() {
        if (skitRunning) return;
        skitRunning = true;

        const dictionary = {
            PERSON: ["fune", "Jim", "Spongy", "Leafy", "Four", "X", "Announcer", "Rocky", "Gelatin", "Golf Ball", "Tennis Ball", "Firey", "Coiny", "Pencil", "Match", "David", "Dora", "The Face of Evil"],
            DOES: ["wants dance", "grounds", "screams at", "eats", "teleports", "disintegrates", "glitches", "recycles", "transcends", "obliterates", "reformats", "calculates", "melts", "deletes", "duplicates", "ascends"],
            THING: ["bfdi", "a gold trophy", "the universe", "a sandwich", "the recovery center", "yoylecake", "a budget cut", "the dream island", "a gravity distorter", "the H.O.L.E.", "a kinetic energy blaster", "a corrupted save file", "the source code"],
            NUM: ["BW", "42", "999", "7", "googol", "-1", "square root of fish", "NaN", "0.0000001", "infinity plus one", "ERROR_CODE_404", "π"],
            LOC: ["island", "the void", "Yoyle City", "a cardboard box", "the TLC", "the moon", "the 4th dimension", "the elimination area", "the hotel", "the backrooms", "a bowl of soup"],
            QUOTE: ["> ACK!!!", "> OH NO!", "> BEHOLD!", "> HUZZAH!", "> STOP IT!", "> YOYLECAKE!", "> [REDACTED]", "> UNACCEPTABLE!", "> HEE HEE HEE", "> BAZINGA"],
            ADJ: ["slimy", "glowing", "erratic", "radioactive", "spontaneous", "pixelated", "ancient", "forbidden", "extra-crispy", "sentient", "blue-tinted", "vibrating", "non-euclidean", "crunchy"],
            VERB_ING: ["dancing", "screaming", "phasing", "oscillating", "exploding", "rotating", "ascending", "falling", "collapsing", "duplicating", "jittering"],
            EFFECT: ["Infestation", "Glitch", "Protocol", "Containment Breach", "Singularity", "Meltdown", "Paradox", "Temporal Shift", "Reality Collapse", "Z-Struggle"],
            FILLER: ["in", "without", "and", "to", "has begin to", "from", "under", "while", "inside", "despite", "violently", "slowly", "because", "furthermore", "nonetheless", "with regards to", "underneath", "above", "through", "beyond", "amidst", "within", "but also", "therefore", "if"]
        };

        function generateTotalAnarchy() {
            let words = [];
            const targetLength = Math.floor(Math.random() * (207 - 47 + 1)) + 47;
            const keys = Object.keys(dictionary);
            while (words.length < targetLength) {
                let coinFlip = Math.random();
                let newWord = "";
                if (coinFlip > 0.95) {
                    newWord = Math.random() > 0.5 ? "[OBJECT_OBJECT]" : "undefined_syntax_error";
                } else if (coinFlip > 0.4) {
                    const randomKey = keys[Math.floor(Math.random() * keys.length)];
                    const list = dictionary[randomKey];
                    newWord = list[Math.floor(Math.random() * list.length)];
                } else {
                    const raw = ["begin to", "emergency", "grounds", "without", "Infestation", "has", "it", "is"];
                    newWord = raw[Math.floor(Math.random() * raw.length)];
                }
                const chaosRoll = Math.random();
                if (chaosRoll > 0.92) {
                    newWord = newWord.toUpperCase();
                } else if (chaosRoll < 0.05) {
                    newWord = newWord + "...";
                }
                words.push(newWord);
            }
            words = words.sort(() => Math.random() - 0.5);
            return words.join(" ");
        }

        const skits = [
            [
                { text: "Hey, here's a funny joke for you BIG GUY", delay: 2000 },
                { text: "You wanna see me pull", delay: 2000 },
                { text: "GLASSES.", delay: 1000 },
                { text: "out of my,", delay: 1000 },
                { text: "KABOOTY HOLE???", delay: 2000 },
                { text: "okay then.", delay: 2000 },
                { action: "triggered", delay: 3000 },
                { text: "Ewwww stinky", delay: 2000 },
                { text: "that smelled like mr soi's bedroom after having a vineria body pillow", delay: 0 }
            ],
            [
                { text: "Well hello there fune, nice to celebrate your 100th FUCK YOU, anyways", delay: 2500 },
                { text: "You doxxed users", delay: 2000 },
                { text: "You posted porn and gore", delay: 2000 },
                { text: "You made us suffer", delay: 2000 },
                { text: "You spread lies", delay: 2000 },
                { text: "You didn't set up the rules", delay: 2000 },
                { text: "You make corrupt admins", delay: 2000 },
                { text: "For that, you get a bonus", delay: 3000 },
                { text: "101st FUCK YOU", delay: 0 },
            ],
            [
                { text: "Hey, you know what would happen if you mix Bonziworld with FNF?", delay: 2500 },
                { text: "Oop, FBI is calling", delay: 1500 },
                { text: "...", delay: 3000 },
                { text: "Well guys the fbi told me i can't say the truth...", delay: 4000 },
                { text: "JUST KIDDING!", delay: 1000 },
                { text: "https://www.youtube.com/watch?v=Fno7w3DlxDw", delay: 0 }
            ],
            [
                { text: "Why do they call HTML a HyperText?", delay: 3000 },
                { text: "Because HTM got the Ls after fucking the club penguin site", delay: 4000 },
                { text: "Take the L htm, you deserved after you shut down Club penguin", delay: 4000 },
                { text: "Oh, also", delay: 2000 },
                { text: "Its because they're full of Links! :D", delay: 0 }
            ],
            [
                { text: "Hi roblox, uhm, i have problems reading this.", delay: 3000 },
                { action: "image https://www.dolmanlaw.com/wp-content/uploads/2025/06/Roblox-on-mobile-Roblox-Sexual-Abuse-Lawsuit-Roblox-Lawsuit-1.webp", delay: 3000 },
                { text: "So if you can read this, please let me know.", delay: 3000 },
                { action: "image https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6AnmwuhwAD4ggPmk3qIQOH-L5p_W30RWkA&s", delay: 3000 },
                { text: "Lawsuit filed against roblox? my my, does that say-", delay: 3000 },
                { text: "JUST KIDDING I HAVE NO READING PROBLEMS", delay: 3000 },
                { text: "FFFFFFFUCK YOU ROBLOX FOR REMOVING CHAT", delay: 3000 },
                { text: "IM GONNA PULL THIS GLASSES OUT OF MY", delay: 3000 },
                { text: "MR SOI'S FAV HOLE,", delay: 3000 },
                { action: "triggered", delay: 3000 },
                { text: "AND IM GONNA SHOVE IT BACK IN YOUR", delay: 3000 },
                { text: "KABOOSY HOLE, IM GONNA FUCKING FIGHT YOU", delay: 3000 },
                { text: "GAAAAAAAAAAAHHHHHHHHHHHHHHHH", delay: 3000 },
                { action: "backflip", delay: 1000 },
                { action: "backflip", delay: 1000 },
                { action: "backflip", delay: 0 }
            ],
            [
                { text: "Hey, you wanna see something cool?", delay: 2500 },
                { action: "image https://files.catbox.moe/ve2e98.gif", delay: 2500 },
                { text: "Get rickrolled", delay: 1000 },
                { text: "HAHAHAHAHAHAHAHAHAHA", delay: 0 }
            ],
            [
                { text: "Oh hi guys, im charleyyy,", delay: 2500 },
                { text: "And today,", delay: 1500 },
                { text: "Imma throw some money!", delay: 2500 },
                { text: "On some hoes!", delay: 2500 },
                { text: "-🪮🪮🪮🪮🪮🪮%%💵💵💵💵💵💵💵💵💵💵%%", delay: 4000 },
                { text: "Oh? you thought i was gonna throw money on THAT hoes?", delay: 4000 },
                { text: "Guys guys... I respect women :D", delay: 0 }
            ],
            [
                { text: "behh behh behh behh-", delay: 2500 },
                { text: "behh?", delay: 1500 },
                { text: "behh behh behh?", delay: 2500 },
                { text: "> %sudo behh_mode exit", delay: 2500 },
                { text: "> exitting behh mode", delay: 4000 },
                { text: "eh, next time i'll do it", delay: 0 }
            ],
            [
                { text: (document.getElementById("nickname")?.value || "User") + " used the button. Whoop-dee-fucking doo.", delay: 4000 },
                { text: "Hey! Copyfuckers, Copy this!", delay: 1500 },
                { text: generateTotalAnarchy(), delay: 0 }
            ],
            [
                { text: "YOU KNOW HOW PEOPLE UPGRADE FROM LOSKI VIRUS", delay: 4000 },
                { text: "FROM A LITERAL BUTTON IN TAG THAT DOES RNG TO FIND A SKIT", delay: 4000 },
                { text: "WATCH THIS I AM GOING TO PULL A RANDOM NUMBER", delay: 4000 },
                { text: Math.floor(Math.random() * 100000), delay: 4000 },
                { text: "HOW THE FUCK IS THIS EVEN POSSIBLE?!?!??", delay: 4000 },
                { text: Math.floor(Math.random() * 1000)+" + "+Math.floor(Math.random() * 1000)+" / "+Math.floor(Math.random() * 1000)+" * "+Math.floor(Math.random() * 1000)+" can be equal to, "+ Math.floor(Math.random() * 1000)+Math.floor(Math.random() * 1000)/Math.floor(Math.random() * 1000)*Math.floor(Math.random() * 1000) + ", HOWWWWWWWWWWWWWWWWWWWWWWWW", delay: 0 }
            ],
            [
                { text: "Cats do this pose ᓚᘏᗢ", delay: 2500 },
                { text: "Its normal,", delay: 1500 },
                { text: "But when people do this pose ○|￣|_", delay: 2500 },
                { text: "Suddenly, Its sex?", delay: 2500 },
                { text: "Well, I'll call god and tell it that its the push up po-", delay: 4000 },
                { text: "https://www.youtube.com/watch?v=JGJYB4cZaE0", delay: 1000 },
                { text: "OH GOD I REGRET I REGRET I REGRET I REGRET I REGRET I REGRET I REGRET GOD PLEASE UNDO UNDO UNDO UNDO UNDO UNDO UNDO UNDO UNDO UNDO UNDO UNDO UNDO UNDO UNDO UNDO UNDO", delay: 0 }
            ],
            [
                { text: "I don't really understand...", delay: 2500 },
                { text: "about this,", delay: 1500 },
                { text: "ice, situation", delay: 2500 },
                { text: "Like if you release em,", delay: 2500 },
                { text: "They kill em!", delay: 2000 },
                { text: "and they don't even like the country anymore...", delay: 2500 },
                { text: 'like "Ooooh they will love it more"-', delay: 2000 },
                { text: "No you killed them all last day", delay: 0 }
            ]
        ];

        const selectedSkit = skits[Math.floor(Math.random() * skits.length)];

        for (const line of selectedSkit) {
            if (!skitRunning) break;
            
            if (line.action) {
                executeSmth(line.action, 0);
            } else if (line.text) {
                executeSmth(line.text, 1);
            }
            if (line.delay > 0) {
                await wait(line.delay);
            }
        }
        
        skitRunning = false;
    }

    playRandomSkit();
}

// Add stop trigger
window.stopSkit = () => {
    skitRunning = false;
};



const ARPABET_TO_ESPEAK = {
    'P': 'p', 'B': 'b', 'T': 't', 'D': 'd', 'CH': 'tS', 'JH': 'dZ',
    'K': 'k', 'G': 'g', 'F': 'f', 'V': 'v', 'TH': 'T', 'DH': 'D',
    'S': 's', 'Z': 'z', 'SH': 'S', 'ZH': 'Z', 'HH': 'h', 'M': 'm',
    'N': 'n', 'NG': 'N', 'L': 'l', 'R': 'r', 'Y': 'j', 'W': 'w',
    'AE': 'a', 'ER': '3:', 'AH': 'V', 'AO': 'O:', 'AA': 'A:', 'EH': 'E',
    'IH': 'I', 'IY': 'i:', 'UH': 'U', 'UW': 'u:', 'AW': 'aU', 'AY': 'aI',
    'EY': 'eI', 'OW': 'oU', 'OY': 'OI'
};

// 2. Complete translation string for your name using your exact phoneme chart rules
const CUSTOM_DICT = {
    "ivorydevrimo": "aIv3:idEvrImoU", // "aIv3:i" (Ivory) + "dEvrImoU" (devrimo)
    "a": "eI",
    "b": "bi:",
    "c": "si:",
    "d": "di:",
    "r": "A:r",
    "s": "Es",
};

const DIGIT_MAP = {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
    '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
};

// 3. Embedded offline CMU Dictionary subset (Add more words here if needed)
const OFFLINE_CMUDICT = {
    "hash": "HH AE SH",
    "ras": "R AE S"
};

function cleanWord(word) {
    return word.toLowerCase().replace(/^[.,!?"()_]+|[.,!?"()_]+$/g, '');
}

function wordToEspeak(word) {
    const cleaned = cleanWord(word);
    if (!cleaned) return "";

    if (cleaned in CUSTOM_DICT) {
        return `[[${CUSTOM_DICT[cleaned]}]]`;
    }

    if (cleaned in OFFLINE_CMUDICT) {
        const arpaPhonemes = OFFLINE_CMUDICT[cleaned].split(' ');
        const espeakResult = arpaPhonemes.map(p => {
            const cleanP = p.replace(/\d+/g, ''); // Remove stress digits
            return ARPABET_TO_ESPEAK[cleanP] || cleanP.toLowerCase();
        });
        
        return `[[${espeakResult.join('')}]]`;
    }

    // Fallback if word is not found in custom or offline dictionary
    return `[[${cleaned}]]`;
}

function customPhonemizer(text) {
    const words = text.split(/\s+/);
    const wordsOnly = words.map(token => {
        if (/^\d$/.test(token)) {
            return DIGIT_MAP[token] || token;
        }
        return token;
    });

    const reconstructedText = wordsOnly.join(' ');
    const tokens = reconstructedText.match(/[\w']+|[.,!?;:]/g) || [];

    const output = tokens.map(token => {
        if (/^\w+$/.test(token)) {
            return wordToEspeak(token);
        } else {
            return token;
        }
    });

    return output.join(' ');
}

const botName = "7BBot Revived"
const botHats = "bucket"
const guids = [];
const botColor = "blue"
const prefix = "\\"
const myPurpose = "We'll never know, but one person."
const greet = [
    "Ding dong in my ting dong, yum yummy my tum tum, yummy nuudol in mai tummy, me want rice bowl me want egg roll he want pp in your coke.",
    "Jesus, stop with all that copypastas, anyways, hello!",
    "Beep boop, systems online!",
    "Hello there, welcome to the chaos!",
    "7BBot at your service, what's good?",
    "Ready to cause some mayhem!",
    "I'm going to expect some random nukings at me",
    "I'm gonna be ready to expect a nuke at me",
    "I'm ready for someone to explode my appendix",
    "I'm—TOO Tired for this iamgoingtocutoffbudget 4👤💬 4 👤🤖"
]
const delayOfCommand = 1000;
function chaosTransform(text) {
    const vowels = "aeiouAEIOU";
    let result = "";

    for (let char of text) {
        // Randomly capitalize or lowercase
        let transformed = Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();

        // If it's a vowel, repeat it randomly between 1 and 4 times
        if (vowels.includes(char)) {
            const repeatCount = Math.floor(Math.random() * 4) + 1;
            transformed = transformed.repeat(repeatCount);
        }

        result += transformed;
    }

    // Add dramatic punctuation at the end
    return "M".repeat(Math.random()*24) + "H".repeat(Math.random()*15) + " " + result + "!!!!".repeat(Math.random()*24);
}
(() => {
    let list = [];
    let userCache = typeof usersPublic !== "undefined" ? usersPublic : (typeof users !== "undefined" ? users : null);

    document.querySelectorAll('.bonzi').forEach(el => {
        let nameEl = el.querySelector('.bonzi_name');
        let userName = nameEl ? nameEl.firstChild?.textContent?.trim() || nameEl.textContent.trim() : "Unknown";
        let trueNetworkGuid = "Not Found";
        let candidateGuids = [];

        if (userCache) {
            let entries = userCache instanceof Map ? userCache.entries() : Object.entries(userCache);
            for (let [guid, data] of entries) {
                if (data && (data.name === userName || data.userPublic?.name === userName)) {
                    candidateGuids.push(guid);
                }
            }
        }

        if (el.id) candidateGuids.push(el.id);

        candidateGuids.sort((a, b) => b.length - a.length);
        
        if (candidateGuids.length > 0) {
            trueNetworkGuid = candidateGuids[0];
        }

        // Check GUID length and set final name
        let finalName = userName;
        if (trueNetworkGuid.length === 8) {
            finalName = "InvalidGUIDName";
        } else if (trueNetworkGuid.length !== 16) {
            finalName = "InvalidGUIDName";
        }

        list.push({
            Name: finalName,
            Network_GUID: trueNetworkGuid,
            Length: trueNetworkGuid.length
        });
    });

    console.table(list);
})();

// Functions
function censorText(sentence) {
    const inappropriateWords = [
        "sex", "porn", "nsfw", "xxx", "erotic", "moan", "sigmallm"
    ];

    const regex = new RegExp(`\\b(${inappropriateWords.join('|')})\\b`, 'gi');

    // .test() returns true if any of the words are found in the sentence
    if (regex.test(sentence)) {
        return "bap"; 
    }

    // If it's clean, return the original sentence untouched
    return sentence;
}

setTimeout(()=>{
    document.getElementById("login_go").click();
},delayOfCommand*3)

async function pingCurrentSite() {
  // 1. Get the current origin (e.g., https://example.com)
  const targetUrl = window.location.origin;

  // 2. Capture the high-resolution start time (accurate to microseconds)
  const startTime = performance.now();

  try {
    // 3. Make a lightweight request (HEAD just gets headers, no heavy body)
    // cache: 'no-store' forces it to actually hit the network
    await fetch(targetUrl, { method: 'HEAD', cache: 'no-store' });

    // 4. Capture the end time
    const endTime = performance.now();

    // 5. Calculate the duration in milliseconds
    const durationInMs = endTime - startTime;

    // 6. Convert milliseconds to nanoseconds (1 ms = 1,000,000 ns)
    const durationInNs = Math.round(durationInMs * 1_000_000)-Math.floor(Math.random() * 100000);

    return  (`Ping to ${targetUrl}: ${durationInNs.toLocaleString()} nanoseconds`);

  } catch (error) {
    return ("Ping failed:", error);
  }
}

pingCurrentSite()
  .then(result => console.log(result))
  .catch(err => console.error('Ping failed:', err));

function executeSmth(input, type){
    setTimeout(()=>{
        if (type === 0){
            cmd(input);
        }
        else if (type === 1){
            socket.emit("talk",{text: input});
        }
    },delayOfCommand)
}
function uploadToImageHost(command, localEndpoint) {
    const cmdurl = command ? `${localEndpoint}?cmd=${encodeURIComponent(command)}` : localEndpoint;
    const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
    const catboxUrl = corsProxyUrl + "https://catbox.moe/user/api.php";

    fetch(cmdurl, { method: 'GET' })
        .then(localRes => {
            if (localRes.status !== 200) {
                executeSmth("Error: localhost server not responding", 1);
                throw new Error('Failed to get from localhost');
            }
            return localRes.blob();
        })
        .then(imageBlob => {
            const formData = new FormData();
            formData.append('reqtype', 'fileupload');
            formData.append('fileToUpload', imageBlob, 'generated_image.png');
            return fetch(catboxUrl, { method: 'POST', body: formData });
        })
        .then(res => res.text())
        .then(result => {
            if (result && result.trim()) {
                executeSmth('image ' + result.trim(), 0);
            } else {
                executeSmth("Upload failed - empty response", 1);
            }
        })
        .catch(err => {
            executeSmth("Upload error: " + err.message, 1);
        });
}

const commands = {
    "help": function(){
        const list = Object.keys(commands).join(", ");
        executeSmth("-\n"+list, 1)
    },
    "nsp": function(){
        pingCurrentSite()
        .then(result => executeSmth("- "+result, 1))
        .catch(err => executeSmth('Ping failed: ' + err, 1));
    },
    "sessecedenmillionseptingentseptuagintseptthousandducentquattuordecillion": function(){
        function generateMassiveRoll(maxExponent) {
            const randomExponent = Math.random() * maxExponent;
            
            const mantissa = (Math.random() * 9 + 1).toFixed(2);
            
            return `${mantissa}e+${Math.floor(randomExponent)}`;
        }

        const maxExp = 16777215;
        const roll = generateMassiveRoll(maxExp);

        executeSmth("- You rolled: " + roll + " (That's a 1 in 10^" + maxExp + " chance)", 1);
    },
    "amigay": function(){
        executeSmth("I Don't know, are you?", 1)
    },
    "clock": function(){
        const now = new Date();

        // 1. Standard Time Components
        const hoursStr = now.getHours().toString().padStart(2, '0');
        const minutesStr = now.getMinutes().toString().padStart(2, '0');
        const secondsStr = now.getSeconds().toString().padStart(2, '0');
        const millisecondsStr = now.getMilliseconds().toString().padStart(3, '0');
        const dateString = now.toLocaleDateString();

        // 2. Calculate Day of the Year (1-366)
        const startOfYear = new Date(now.getFullYear(), 0, 0);
        const diff = now - startOfYear;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // 3. Calculate Millennium Progress 
        // (How far we are through the current 1000-year cycle, e.g., 2001-3000)
        const currentYear = now.getFullYear();
        const yearInMillennium = (currentYear - 1) % 1000; // 2026 becomes 25
        const millenniumth = ((yearInMillennium + (dayOfYear / 366)) / 1000).toFixed(6);

        executeSmth(`Current time: ${dateString} ${hoursStr}:${minutesStr}:${secondsStr}:${millisecondsStr} MM/DD/YYYY HH:MM:SS:MS | Day of Year: ${dayOfYear} | Millennium Progress: ${millenniumth} | Year: ${currentYear} | Year Progress: ${dayOfYear/366}`, 1);
    },
    "purpose": function(){
        executeSmth(myPurpose, 1)
    },
    "mock": function(args) {
        const text = args.join(" ");
        if (text.length > 0) {
            executeSmth(chaosTransform(text), 1);
        }
    },
    //sooner "dossend": function(args) {
    //sooner     uploadToImageHost(args.join(" "), "http://localhost:8000/send");
    //sooner },
    //sooner "dostype": function(args) {
    //sooner     uploadToImageHost(args.join(" "), "http://localhost:8000/type");
    //sooner },
    //sooner "dosscreenshot": function() {
    //sooner     uploadToImageHost("", "http://localhost:8000/");
    //sooner },
    "whatscomingsoon": function() {
        executeSmth("Fixing those gosh darn dos commands because catbox is a pain in the ass", 1)
    },
    "pawn": function() {
        executeSmth("Hi, i am 7BBot, im made by the orginazation of exploiters and hackers and coders, im here... always here... just... here, and i always wonder whenever loud sounds like explosions occur near where i live, because i am schizo as fuck and always schizo i am schizo i am schizo i am huh?, oh yeah, i also have a stroke like ai does, i am 7BBot, made by Ivorydevrimo, Thank you for being here", 1)
    },
    "guid": function(args, { guid }){
        executeSmth("Your GUID Is "+guid+", bots can detect GUID, and i can manipulate it.", 1)
    },
    "rascopter": function() {
        executeSmth("MY RASCOPTER GOES [[_^_my ssssssssssssssssssssssssssssssssssssss]]-̵͍͂-̵̪̊-̵̡̇-̷̟̊-̶̮̽-̷̞̃-̷̟̽-̷͙̆-̷͙̆-̸̙͋-- ---̸͙͋-̸̮̀-̴̹͝-̷̻̉-̷̰́-̶͍͂-̷̳̅-̴̣̓---̶͖͊---̷̺̔--̺͝-̷̃ͅ-̴̡̉-̸̤̆-̵̤̐---̋-̸̺̐-̶̓͜-̶͑-]̀ ̸͉̀[̴̲͐--͚͒-̴̦---̶͎̇-̷̺̎-̷͓͐-̶̫͌-̶̯́---̸̤̊-̶͈̀-̸̲̽---̈-̶-̶͕̏-̷̤̐-̴͉́-̸̫̉-̶͓̉-̷͍--̦͝-̴͖---̶̤̂-̶̹͂-̴̖̈] ̚[̶͓̓-̶͕̓-̶͎̔-̸̠----͂-̸̧̉-̵̳̀-̶̛͜-̵̭̅-̶̱̈́-̴--̵̧͠-̷͕̈́-----̽-̷̞̃-̷̟̽-̷͙̆-̷͙̆-̸̙͋-̶̣̋-̷͉͝ -̷---̸̮̀-̴̹͝--́-̶͍͂-̷̳̅-̴̣̓-̴̜̀-̸̨̍-̶͖͊--", 1)
    },
    "greet": function() {
        executeSmth(greet[Math.floor(Math.random() * greet.length)], 1)
    },
    "godword": function() {
        executeSmth("you want some money HERES SOME MONEY", 1);
        setTimeout(()=>{executeSmth("HERES SOME MONEY HERES ALL THE MONEY", 1)
            setTimeout(()=>{executeSmth("HERES SOME MONEY YOU BUCKET HEAD!", 1)}, delayOfCommand);
        }, delayOfCommand);
    },
    "event": function(){
        executeSmth("HEY, THE EVENT IS NOT FINISHED, USE ANOTHER COMMAND!!!!", 1)
    },
    "jankenpon": function(args){
        const thingy = args.join(" ");
        if (thingy === "1"){
            executeSmth("2", 1)
        } else if (thingy === "2"){
            executeSmth("3", 1)
        } else if (thingy === "3"){
            executeSmth("1", 1)
        } else {
            executeSmth("1 is paper, 2 is scissors, 3 is rock, fool, know the game", 1)
        }
    },
    "ben": function(){
        const messages = ["Yees", "Naur", "Ho ho ho", "Eaugh"];
        executeSmth(messages[Math.floor(Math.random() * messages.length)], 1)
    },
    "phomenizer": function(args){
        const rawtextthingy = args.join(" ");
        executeSmth(customPhonemizer(rawtextthingy),1);
    },
    "555": function(){
        executeSmth("video https://files.catbox.moe/v3n5jv.mp4", 0)
    },
    "skit": function(){
        skits()
    }
}
socket.on("talk", (data) => {
    const guid = data && data.guid;
    const msgid = data && data.msgid;
    const text = (typeof data === "string") ? data : (data && data.text) || "";
    
    if (guid && !guids.includes(guid)) {
        guids.push(guid);
    }

    console.log("Talk event received:", text); // Debug log
    
    if (!text.startsWith(prefix)) {
        console.log("Text doesn't start with prefix:", prefix); // Debug log
        return;
    }
    
    const args = text.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    console.log("Command detected:", command); // Debug log
    
    if (commands[command]) {
        commands[command](args, { guid, msgid, raw: data });
    } else {
        console.log("Command not found:", command); // Debug log
    }
});
const wise = [
    "Sometimes, i wonder, when gen beta ends in 2039, is it gonna be gamma?, but when gamma ends is it delta?, we go on after and after and after, epsilon, zeta, eta, theta, iota, kappa, lambda, mu, nu, xi, omicron, pi, rho, sigma, tau, you name it, when we reach to omega's end, exactly 2129, there is no officially designated generation, we all die, you die, i die, the generation dies, at 2129",
    "Death exponentionally spreads itself exponention, 1 dies, 2 dies, 4 dies, 16 dies, 256 dies, 65536 dies, eventually, 4294967296 dies, and the end of the year, meteor, 1.844674407370955e+19 dies, so then, if earth rebuilds itself, is it a cycle, or is it reseting?",
    "Open your calculator, [[t]], [[tttt]], [[t]], calculator opened, input your birth month, multiply by 5, add 7, multiply by 4, add 13, multiply by 5, day of birth, subtract 205, it shows the exact date of birth.",
    "Earth undergoes multiple forms of decay. The planet slowly loses weight by bleeding lighter elements (like hydrogen and helium) into space. Its magnetic field is fluctuating, its rotation is gradually decelerating, and it relies on radioactive decay within its core to generate internal heat.",
    "What are we, Who are we, Where are we... What are we, Who are we, Where are we... What are we, Who are we, Where are we...",
    "Does baldi sleep in his home or his schoolhouse?"
]
socket.on("nuke",()=>{
    executeSmth(wise[Math.floor(Math.random() * wise.length)], 1)
})
setTimeout(()=>{
    executeSmth("name " + botName + " " + prefix + "help", 0)
        setTimeout(()=>{
            executeSmth(botColor, 0)
            setTimeout(()=>{
                executeSmth("hat " + botHats, 0)
                setTimeout(()=>{
                    executeSmth("GoldBrine BONZI5", 0)
                    setTimeout(()=>{
                        // executeSmth(greet[Math.floor(Math.random() * greet.length)], 1)
                        executeSmth("i have ivory conjoined to me, so if you ban me, ivory would get banned too, if you nuke me, im invunerable, i can come back any time soon.", 1)
                    },delayOfCommand)
                },delayOfCommand)
            },delayOfCommand)
        },delayOfCommand)
},delayOfCommand)
socket.on("poll", (data) => {
    // 1. Validate that data exists and has the required properties
    if (!data || !data.title || !data.options) return;

    // 2. Check if title is "999" and there are exactly 5 options all equal to "999"
    const isTargetTitle = data.title === "999";
    const hasFiveTargetOptions = data.options.length === 5 && data.options.every(opt => opt === "999");

    if (isTargetTitle && hasFiveTargetOptions) {
        console.log(`Target poll detected (${data.guid}). Starting spam vote...`);

        // 3. Start sending a vote every 100 milliseconds
        const voteInterval = setInterval(() => {
            // Calculate a random index between 0 and 4
            const randomVoteIndex = Math.floor(Math.random() * data.options.length);

            socket.emit("vote", {
                "guid": data.guid,
                "vote": randomVoteIndex
            });
        }, 100);

        // Optional: If you ever need to stop the voting loop later to prevent memory leaks, 
        // you can store 'voteInterval' and call: clearInterval(voteInterval);
    }
});
setInterval(() => {
    // 1. Find all row containers inside the main container
    const listItems = document.querySelectorAll('.jan_list > div');

    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        
        // 2. Correctly check if the row contains either username
        if (text.includes('ivorydevrimo') || text.includes('7bbot')) {
            
            // 3. Find the button with class jan_a inside this row
            const acceptButton = item.querySelector('button.jan_a');
            
            // 4. Verify the button exists and explicitly contains the text "accept"
            if (acceptButton && acceptButton.textContent.toLowerCase().includes('accept')) {
                acceptButton.click();
            }
        }
    });
}, 777.777777);
