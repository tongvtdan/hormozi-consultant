/**
 * Hormozi Value Equation Scorer
 * 
 * Calculates the Hormozi Offer Score and provides improvement recommendations.
 * Designed for use in Claude artifacts or Node.js environments.
 * 
 * Formula: Score = (DreamScore × LikelihoodScore) / (TimeScore × EffortScore)
 * Perfect score = 1,000,000
 */

/**
 * Score an offer using the Hormozi Value Equation
 * @param {Object} offer - The offer parameters
 * @param {number} offer.dreamScore - Desirability of dream outcome (1-100)
 * @param {number} offer.likelihoodScore - Believability of success (1-100)
 * @param {number} offer.timeScore - Perceived time to results (0-1, lower is better)
 * @param {number} offer.effortScore - Perceived effort required (0-1, lower is better)
 * @returns {Object} Score results with breakdown and recommendations
 */
function scoreOffer(offer) {
  const { dreamScore, likelihoodScore, timeScore, effortScore } = offer;

  // Validate inputs
  const errors = [];
  if (dreamScore < 1 || dreamScore > 100) errors.push('dreamScore must be 1-100');
  if (likelihoodScore < 1 || likelihoodScore > 100) errors.push('likelihoodScore must be 1-100');
  if (timeScore < 0.01 || timeScore > 1) errors.push('timeScore must be 0.01-1');
  if (effortScore < 0.01 || effortScore > 1) errors.push('effortScore must be 0.01-1');
  if (errors.length > 0) return { error: errors };

  // Calculate score
  const numerator = dreamScore * likelihoodScore;
  const denominator = timeScore * effortScore;
  const offerScore = numerator / denominator;

  // Determine rating
  const rating = getRating(offerScore);

  // Identify weakest component
  const weaknesses = identifyWeaknesses(offer);

  // Calculate potential score at each improvement
  const improvements = calculateImprovements(offer, offerScore);

  return {
    components: {
      dreamScore,
      likelihoodScore,
      timeScore,
      effortScore
    },
    offerScore: Math.round(offerScore),
    rating,
    percentageOfPerfect: ((offerScore / 1000000) * 100).toFixed(1) + '%',
    weaknesses,
    improvements,
    summary: generateSummary(offerScore, weaknesses[0])
  };
}

function getRating(score) {
  if (score >= 1000000) return { label: 'Grand Slam', emoji: '🏆', description: 'Perfect offer. Scale immediately.' };
  if (score >= 500000) return { label: 'Elite', emoji: '⭐⭐⭐', description: 'Strong offer. Minor tweaks for maximum impact.' };
  if (score >= 100000) return { label: 'Strong', emoji: '⭐⭐', description: 'Good foundation. 1-2 improvements needed.' };
  if (score >= 20000) return { label: 'Decent', emoji: '⭐', description: 'Viable but leaves money on the table.' };
  if (score >= 5000) return { label: 'Weak', emoji: '⚠️', description: 'Significant rework needed before scaling.' };
  return { label: 'Broken', emoji: '🚨', description: 'Do not run ads. Rebuild the offer first.' };
}

function identifyWeaknesses(offer) {
  const { dreamScore, likelihoodScore, timeScore, effortScore } = offer;
  const issues = [];

  if (dreamScore < 70) issues.push({
    component: 'Dream Score',
    score: dreamScore,
    issue: 'Dream outcome not compelling enough',
    fix: 'Make the outcome more specific, vivid, and emotionally resonant. Add "from X to Y by [date]" structure.'
  });

  if (likelihoodScore < 70) issues.push({
    component: 'Likelihood Score',
    score: likelihoodScore,
    issue: 'Low believability — prospects doubt they will succeed',
    fix: 'Add a strong guarantee, show specific case studies with measurable results, or convert to done-for-you.'
  });

  if (timeScore > 0.3) issues.push({
    component: 'Time Score',
    score: timeScore,
    issue: 'Results take too long — prospect patience will expire',
    fix: 'Add a "quick win" in week 1, offer a faster-start option, or restructure as done-for-you sprint.'
  });

  if (effortScore > 0.3) issues.push({
    component: 'Effort Score',
    score: effortScore,
    issue: 'Too much required from the customer',
    fix: 'Replace instructions with templates, add done-with-you sessions, or shift to done-for-you model.'
  });

  // Sort by impact on score (denominator issues hit hardest)
  return issues.sort((a, b) => {
    const denomComponents = ['Time Score', 'Effort Score'];
    const aIsDenom = denomComponents.includes(a.component);
    const bIsDenom = denomComponents.includes(b.component);
    if (aIsDenom && !bIsDenom) return -1;
    if (!aIsDenom && bIsDenom) return 1;
    return 0;
  });
}

function calculateImprovements(offer, currentScore) {
  const { dreamScore, likelihoodScore, timeScore, effortScore } = offer;
  
  return [
    {
      change: 'Add a strong guarantee (Likelihood → 90)',
      newScore: Math.round((dreamScore * 90) / (timeScore * effortScore)),
      delta: Math.round((dreamScore * 90) / (timeScore * effortScore) - currentScore)
    },
    {
      change: 'Add done-for-you element (Effort → 0.1)',
      newScore: Math.round((dreamScore * likelihoodScore) / (timeScore * 0.1)),
      delta: Math.round((dreamScore * likelihoodScore) / (timeScore * 0.1) - currentScore)
    },
    {
      change: 'Add 7-day quick win (Time → 0.1)',
      newScore: Math.round((dreamScore * likelihoodScore) / (0.1 * effortScore)),
      delta: Math.round((dreamScore * likelihoodScore) / (0.1 * effortScore) - currentScore)
    },
    {
      change: 'All improvements combined',
      newScore: Math.round((dreamScore > 90 ? dreamScore : 90 * 90) / (0.1 * 0.1)),
      delta: Math.round((dreamScore > 90 ? dreamScore : 90 * 90) / (0.1 * 0.1) - currentScore)
    }
  ].sort((a, b) => b.delta - a.delta);
}

function generateSummary(score, topWeakness) {
  if (!topWeakness) return 'Exceptional offer. The market is ready. Scale aggressively.';
  return `Your biggest leverage point is ${topWeakness.component}: ${topWeakness.fix}`;
}

/**
 * Generate a complete offer critique report
 * @param {Object} offerData - Full offer description including context
 * @returns {string} Formatted report
 */
function generateOfferReport(offerData) {
  const results = scoreOffer(offerData);
  
  if (results.error) {
    return 'Input errors: ' + results.error.join(', ');
  }

  const lines = [
    '═══════════════════════════════════',
    '    HORMOZI OFFER SCORE REPORT',
    '═══════════════════════════════════',
    '',
    `OVERALL SCORE: ${results.offerScore.toLocaleString()}`,
    `RATING: ${results.rating.emoji} ${results.rating.label}`,
    `VS PERFECT: ${results.percentageOfPerfect}`,
    `STATUS: ${results.rating.description}`,
    '',
    '─── COMPONENT BREAKDOWN ───',
    `Dream Score:      ${results.components.dreamScore}/100`,
    `Likelihood Score: ${results.components.likelihoodScore}/100`,
    `Time Score:       ${results.components.timeScore} (lower = better)`,
    `Effort Score:     ${results.components.effortScore} (lower = better)`,
    '',
  ];

  if (results.weaknesses.length > 0) {
    lines.push('─── WEAKNESSES (PRIORITY ORDER) ───');
    results.weaknesses.forEach((w, i) => {
      lines.push(`${i + 1}. ${w.component} [${w.score}]: ${w.issue}`);
      lines.push(`   FIX: ${w.fix}`);
      lines.push('');
    });
  }

  lines.push('─── IMPROVEMENT SCENARIOS ───');
  results.improvements.forEach(imp => {
    lines.push(`• ${imp.change}`);
    lines.push(`  New score: ${imp.newScore.toLocaleString()} (+${imp.delta.toLocaleString()})`);
  });

  lines.push('');
  lines.push('─── BOTTOM LINE ───');
  lines.push(results.summary);
  lines.push('═══════════════════════════════════');

  return lines.join('\n');
}

// Example usage:
/*
const myOffer = {
  dreamScore: 75,
  likelihoodScore: 60,
  timeScore: 0.5,
  effortScore: 0.4
};

console.log(generateOfferReport(myOffer));
*/

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { scoreOffer, generateOfferReport };
}
