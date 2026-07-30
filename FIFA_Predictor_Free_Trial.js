const ENDPOINTS = {
    EA_FC_RATINGS: "https://ea.com"
};

// 1. Fetch live EA Sports FC team stats (No key needed)
async function fetchPublicFCRatings(teamName) {
    try {
        const response = await fetch(`${ENDPOINTS.EA_FC_RATINGS}?search=${encodeURIComponent(teamName)}`);
        if (!response.ok) throw new Error("Network error");
        
        const data = await response.json();
        if (!data || !data.items || data.items.length === 0) {
            return { name: teamName, attack: 78, defense: 77 }; // Baseline fallback
        }

        const stats = data.items[0].stats || {};
        const attackScore = stats.shooting || stats.pace || 78;
        const defenseScore = stats.defending || stats.physicality || 77;

        return { name: teamName, attack: attackScore, defense: defenseScore };
    } catch (error) {
        return { name: teamName, attack: 78, defense: 77 };
    }
}

// 2. Core Prediction Logic and Outcome Logger
async function predictAndLogOutcome(homeTeam, awayTeam) {
    console.log(`\n--- Fetching live ratings for ${homeTeam} vs ${awayTeam} ---`);
    
    const [homeFC, awayFC] = await Promise.all([
        fetchPublicFCRatings(homeTeam),
        fetchPublicFCRatings(awayTeam)
    ]);

    // Calculate expected goals based on EA FC ratings
    const leagueAvgGoals = 1.35;
    const expectedHomeGoals = (homeFC.attack / awayFC.defense) * leagueAvgGoals;
    const expectedAwayGoals = (awayFC.attack / homeFC.defense) * leagueAvgGoals;

    // Determine final score prediction
    const scoreHome = Math.round(expectedHomeGoals);
    const scoreAway = Math.round(expectedAwayGoals);

    console.log(`[Stats Loaded] ${homeTeam} (Att: ${homeFC.attack} | Def: ${homeFC.defense})`);
    console.log(`[Stats Loaded] ${awayTeam} (Att: ${awayFC.attack} | Def: ${awayFC.defense})`);
    console.log(`[Predicted Score] ${scoreHome} - ${scoreAway}`);
    console.log(`-----------------------------------------------`);

    // LOGS WHO WINS OR LOSES 
    if (scoreHome > scoreAway) {
        console.log(`🏆 MATCH OUTCOME: ${homeTeam.toUpperCase()} WINS! (${awayTeam} loses)`);
    } else if (scoreAway > scoreHome) {
        console.log(`🏆 MATCH OUTCOME: ${awayTeam.toUpperCase()} WINS! (${homeTeam} loses)`);
    } else {
        console.log(`🤝 MATCH OUTCOME: IT'S A DRAW!`);
    }
    console.log(`-----------------------------------------------\n`);
}

// Execute the simulation
predictAndLogOutcome("Real Madrid", "Barcelona");
predictAndLogOutcome("Manchester City", "Liverpool");

(function createWatermark() {
  // Prevent duplicate watermarks if executed multiple times
  if (document.getElementById('custom-watermark-overlay')) return;

  const watermark = document.createElement('div');
  watermark.id = 'custom-watermark-overlay';

  // Apply styling
  Object.assign(watermark.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-15deg)', // Centered & rotated -15 degrees
    zIndex: '2147483647', // Maximum possible CSS z-index
    pointerEvents: 'none', // Allows clicking through the text
    opacity: '0.35', // Subtle semi-transparency
    color: '#ffffff',
    textShadow: '0px 0px 4px rgba(0, 0, 0, 0.8)', // Ensures readability on light backgrounds
    fontFamily: 'monospace, Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    lineHeight: '1.5',
    userSelect: 'none',
    webkitUserSelect: 'none'
  });

  // Set the watermark content
  watermark.innerText = "Made to: https://discord.gg/6fGU9scPGq\nMade by: https://discord.gg/DqaPeuwBUR";

  // Append to top level body or root
  document.documentElement.appendChild(watermark);
})();
