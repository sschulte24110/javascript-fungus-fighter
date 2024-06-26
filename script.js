onReady();
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let attacksAP = 100;
let enemyHP = 100;
let hpMeter = document.querySelector('.hp-text');
let apMeter = document.querySelector('.ap-text');
let arcaneButton = document.getElementById('arcane-button');
let entangleButton = document.getElementById('entangle-button');
let dragonButton = document.getElementById('dragon-blade');
let starButton = document.getElementById('fire-button');
let fungusMovement = document.getElementsByClassName('freaky-fungus walk')[0];
let apMeterV = document.getElementById('ap-meter');
let hpMeterV = document.getElementById('hp-meter');
// let fungusMovement = document.querySelectorAll('.attack-btn');
console.log(fungusMovement);

function onReady() {
  console.log('Ready to go!');

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}

// function disableButtons() {}

function septerAttack(event) {
  enemyHP -= 14;
  hpMeterV.value -= 14;
  enemyHP = Math.max(enemyHP, 0);
  hpMeter.innerText = `${enemyHP} HP`;

  attacksAP -= 12;
  apMeterV.value -= 12;
  attacksAP = Math.max(attacksAP, 0);
  apMeter.innerText = `${attacksAP} AP`;

  checkHealth();
}

function entangleAttack(event) {
  enemyHP -= 9;
  hpMeterV.value -= 9;
  enemyHP = Math.max(enemyHP, 0);
  hpMeter.innerText = `${enemyHP} HP`;

  attacksAP -= 23;
  apMeterV.value -= 23;
  attacksAP = Math.max(attacksAP, 0);
  apMeter.innerText = `${attacksAP} AP`;

  checkHealth();
}

function bladeAttack(event) {
  enemyHP -= 47;
  hpMeterV.value -= 47;
  enemyHP = Math.max(enemyHP, 0);
  hpMeter.innerText = `${enemyHP} HP`;

  attacksAP -= 38;
  apMeterV.value -= 38;
  attacksAP = Math.max(attacksAP, 0);
  apMeter.innerText = `${attacksAP} AP`;

  checkHealth();
}

function fireAttack(event) {
  enemyHP -= 25;
  hpMeterV.value -= 25;
  enemyHP = Math.max(enemyHP, 0);
  hpMeter.innerText = `${enemyHP} HP`;

  attacksAP -= 33;
  apMeterV.value -= 33;
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
    // fungusMovement.disabled = true;
  }
  if (enemyHP < 50) {
    setInterval(intervalHealth, 1000);
  }
}

function intervalHealth() {
  if (enemyHP === 100) {
    let myInterval = setInterval(intervalHealth, 1000);
    clearInterval(myInterval);
  } else {
    enemyHP++;
  }
  hpMeterV.value = enemyHP;
  hpMeter.innerHTML = `${enemyHP} HP`;
}
