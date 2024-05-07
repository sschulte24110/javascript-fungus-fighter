onReady();
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let attacksAP = 100;
let enemyHP = 100;
let arcaneButton = document.getElementById('arcane-button');
let entangleButton = document.getElementById('entangle-button');
let dragonButton = document.getElementById('dragon-blade');
let starButton = document.getElementById('fire-button');
let fungusMovement = document.getElementsByClassName('freaky-fungus walk')[0];

function onReady() {
  console.log('Ready to go!');

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}

// function septerAttack(event) {
//   const hpMeter = document.getElementById('hit-meter');
//   hpMeter.innerText = `${(enemyHP -= 14)} HP`;
//   const apMeter = document.getElementById('attack-meter');
//   apMeter.innerText = `${(attacksAP -= 12)} AP`;

//   checkHealth();
// }

function septerAttack(event) {
  const hpMeter = document.getElementById('hit-meter');
  console.log('hit me');
  enemyHP -= 14;
  enemyHP = Math.max(enemyHP, 0);
  //   hpMeter.innerText = ${(enemyHP -= 14)} HP;
  hpMeter.innerText = `${enemyHP} HP`;
  console.log(enemyHP);
  const apMeter = document.getElementById('attack-meter');
  attacksAP -= 12;
  attacksAP = Math.max(attacksAP, 0);
  //   apMeter.innerText = ${(attacksAP -= 12)} AP;
  apMeter.innerText = `${attacksAP} AP`;

  checkHealth();
}

function entangleAttack(event) {
  const hpMeter = document.getElementById('hit-meter');
  enemyHP -= 9;
  enemyHP = Math.max(enemyHP, 0);
  hpMeter.innerText = `${enemyHP} HP`;
  const apMeter = document.getElementById('attack-meter');
  attacksAP -= 23;
  attacksAP = Math.max(attacksAP, 0);
  apMeter.innerText = `${attacksAP} AP`;

  checkHealth();
}

function bladeAttack(event) {
  const hpMeter = document.getElementById('hit-meter');
  enemyHP -= 47;
  enemyHP = Math.max(enemyHP, 0);
  hpMeter.innerText = `${enemyHP} HP`;
  const apMeter = document.getElementById('attack-meter');
  attacksAP -= 38;
  attacksAP = Math.max(attacksAP, 0);
  apMeter.innerText = `${attacksAP} AP`;

  checkHealth();
}

function fireAttack(event) {
  const hpMeter = document.getElementById('hit-meter');
  enemyHP -= 25;
  enemyHP = Math.max(enemyHP, 0);
  hpMeter.innerText = `${enemyHP} HP`;
  const apMeter = document.getElementById('attack-meter');
  attacksAP -= 33;
  attacksAP = Math.max(attacksAP, 0);
  apMeter.innerText = `${attacksAP} AP`;

  checkHealth();
}

function checkHealth() {
  if (enemyHP < 0) {
    enemyHP = 0;
    console.log('Hit Points', enemyHP);
  }
  if (attacksAP < 0) {
    attacksAP = 0;
    console.log('Attack Points', attacksAP);
  }
  if (enemyHP === 0) {
    fungusMovement.classList.replace('walk', 'dead');
  }
  if (attacksAP === 0) {
    fungusMovement.classList.replace('walk', 'jump');
  }
  if (attacksAP === 0 || enemyHP === 0) {
    arcaneButton.disabled = true;
    entangleButton.disabled = true;
    dragonButton.disabled = true;
    starButton.disabled = true;
  }
}
