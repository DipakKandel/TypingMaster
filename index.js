const paragraphs = [
  "It's an unfortunate reality that we don't teach people how to make money (beyond getting a 9 to 5 job) as part of our education system. The truth is there are a lot of different, legitimate ways to make money. That doesn't mean they are easy and that you won't have to work hard to succeed, but it does mean that if you're willing to open your mind a bit you don't have to be stuck in an office from 9 to 5 for the next fifty years o your life.",

  "The answer was within her reach. It was hidden in a box and now that box sat directly in front of her. She'd spent years searching for it and could hardly believe she'd finally managed to find it. She turned the key to unlock the box and then gently lifted the top. She held her breath in anticipation of finally knowing the answer she had spent so much of her time in search of. As the lid came off she could see that the box was empty",

  "Open your eyes in sea water and it is difficult to see much more than a murky, bleary green colour. Sounds, too, are garbled and difficult to comprehend. Without specialised equipment humans would be lost in these deep sea habitats, so how do fish make it seem so easy? Much of this is due to a biological phenomenon known as electroreception – the ability to perceive and act upon electrical stimuli as part of the overall senses. This ability is only found in aquatic or amphibious species because water is an efficient conductor of electricity.",

  "Turning away from the ledge, he started slowly down the mountain, deciding that he would, that very night, satisfy his curiosity about the man-house. In the meantime, he would go down into the canyon and get a cool drink, which always came just after the sun had walked past the middle of the sky. At that period of the day the sun’s warm rays seemed to cast a sleepy spell over the silent mountainside, so all of the animals, with one accord, had decided it should be the hour for their mid-day sleep.",

  "The groundwork for keeping creative ability in check begins at school. School, later university and then work, teach us to regulate our lives, imposing a continuous process of restrictions which is increasing exponentially with the advancement of technology. It is trapped in the prison that we have erected. Yet, even here in this hostile environment, the foundations for creativity are being laid; because setting off on the creative path is also partly about using rules and regulations. Such limitations are needed so that once they are learnt, they can be broken.",

  "Lifting barriers into place also plays a major part in helping the mind to control ideas rather than letting them collide at random. Parameters act as containers for ideas and thus help the mind to fix on them. When the mind is thinking laterally and two ideas from different areas of the brain come or are brought together, they form a new idea, just like atoms floating around and then forming a molecule.",

  "It had been a simple realization that had changed Debra's life perspective. It was really so simple that she was embarrassed that she had lived the previous five years with the way she measured her worth. Now that she saw what she had been doing, she could see how sad it was. That made her all the more relieved she had made the change. The number of hearts her Instagram posts received wasn't any longer the indication of her own self-worth.",

  "Breastfeeding is good for babies and moms. Infants that are breastfed get antibodies from their mothers against common illnesses. Breastfed babies have less chance of being obese as an adult. Breastfeeding a baby lets the infant-mother pair bond in a very unique way. Mother’s who breastfeed lower their chances of developing breast cancer. Usually, mothers who breastfeed lose their pregnancy weight more quickly and easily. The benefits of breastfeeding are numerous.",

  "Devon couldn't figure out the color of her eyes. He initially would have guessed that they were green, but the more he looked at them he almost wanted to say they were a golden yellow. Then there were the flashes of red and orange that seemed to be streaked throughout them. It was almost as if her eyes were made of opal with the sun constantly glinting off of them and bringing out more color. They were definitely the most unusual pair of eyes he'd ever seen.",

  "Josh had spent year and year accumulating the information. He knew it inside out and if there was ever anyone looking for an expert in the field, Josh would be the one to call. The problem was that there was nobody interested in the information besides him and he knew it. Years of information painstakingly memorized and sorted with not a sole giving even an ounce of interest in the topic.",

  "It's an unfortunate reality that we don't teach people how to make money (beyond getting a 9 to 5 job) as part of our education system. The truth is there are a lot of different, legitimate ways to make money. That doesn't mean they are easy and that you won't have to work hard to succeed, but it does mean that if you're willing to open your mind a bit you don't have to be stuck in an office from 9 to 5 for the next fifty years o your life.",

  "One fascinating use of active electroreception known as the Jamming Avoidance Response mechanism has been observed between members of some species known as the weakly electric fish. When two such electric fish meet in the ocean using the same frequency, each fish will then shift the frequency of its discharge so that they are transmitting on different frequencies. Doing so prevents their electroreception faculties from becoming jammed. Long before citizens band radio users first had to yell “Get off my frequency!” at hapless novices cluttering the air waves, at least one species had found a way to peacefully and quickly resolve this type of dispute.",

  "Artesian water is drawn from a confined aquifer, a deep underground cavity of porous rock that holds water and bears pressure from a confining layer above it. This water can be accessed if companies drill a vertical channel down into the confined aquifer. Due to the pressurised nature of this aquifer, water will often rise up from within it and form a flowing artesian well, which appears as an explosive fountain at the earth’s surface. However, this only occurs when the surface is lower than the natural water table. If the surface is not lower than the natural water table, it is still possible to draw artesian water by using an extraction pump",

  "There are feasible alternatives to the bloat, extravagance and wasteful spending that comes with a modern Olympic Games. One option is to designate a permanent host city that would be re-designed or built from scratch especially for the task. Another is to extend the duration of the Olympics so that it becomes a festival of several months. Local businesses would enjoy the extra spending and congestion would ease substantially as competitors and spectators come and go according to their specific interests. Neither the “Olympic City” nor the extended length options really get to the heart of the issue, however.",

  "After the last weary spectators and competitors have returned home, however, host cities are often left awash in high debts and costly infrastructure maintenance. The staggering expenses involved in a successful Olympic bid are often assumed to be easily mitigated by tourist revenues and an increase in local employment, but more often than not host cities are short changed and their taxpayers for generations to come are left settling the debt.",
];
const paragraphID = document.getElementById("paragraph");
const typingAreaID = document.getElementById("inputArea");
const containerID = document.getElementById("container");
const timerID = document.getElementById("timer");
const speedID = document.getElementById("wpmcount");
const accuracyID = document.getElementById("accuracyCount");
const mistakesID = document.getElementById("mistakesCount");
const wpmValueID = document.getElementById("wpmValue");
let executed = false;

let totalCharacters = 0;
let correctCharacters = 0;
let mistakes = 0;
let totalErrors = 0;
let wpm = 0;
let accuracy = 0;
// let characterTyped = 0;

function processCurrentText() {
  const arrayInputValue = typingAreaID.value.split("");

  if (!executed) {
    countdown();
    executed = true;
  }
  //  characterTyped++;
  mistakes = 0;

  const arrayPara = paragraphID.querySelectorAll("span");
  arrayPara.forEach((characterSpan, index) => {
    const enteredCharacter = arrayInputValue[index];

    totalCharacters = arrayInputValue.length;

    if (enteredCharacter == null) {
      // console.log('null')
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
    } else if (enteredCharacter === characterSpan.innerText) {
      // correctCharacters = correctCharacters + 1
      // console.log('correct')
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      mistakes++;
    }
  });
  // if (arrayPara)
  // speedID.innerHTML = characterTyped;
  mistakesID.innerHTML = totalErrors + mistakes;
}
function newParagraph() {
  mistakes = 0;
  accuracyID.innerHTML = accuracy;

  typingAreaID.disabled = false;
  typingAreaID.value = "";
  speedID.innerHTML = 0;
  wpmValueID.innerHTML = 0;
  executed = false;
  mistakesID.innerHTML = 0;
  timerID.innerHTML = 60;
  totalCharacters = 0;
  // let wpm = 0;
  if (timer) {
    clearTimeout(timer);
    seconds = 60;
  }
  // mistakes = 0;
  let content = paragraphs[Math.floor(Math.random() * paragraphs.length)];
  paragraphID.innerText = "";

  content.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    paragraphID.appendChild(characterSpan);
  });

  var paragraphHeight = paragraphID.clientHeight;
  var containerHeight = paragraphHeight * 2.5;
  paragraphHeight = paragraphHeight + "px";
  containerHeight = containerHeight + "px";
  console.log(paragraphHeight);
  typingAreaID.setAttribute("style", `min-height:${paragraphHeight}`);
  containerID.setAttribute("style", `min-height:${containerHeight}`);
}
newParagraph();

function countdown() {
  var seconds = 60;
  function tick() {
    seconds--;
    timerID.innerHTML = (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      timer = setTimeout(tick, 1000);
    }

    if (seconds == 0) {
      typingAreaID.disabled = true;
      speedID.innerHTML = totalCharacters;
      mistakesID.innerHTML = mistakes;
      correctCharacters = totalCharacters - mistakes;
      wpm = correctCharacters / 5 / 1;
      wpmValueID.innerHTML = wpm;
      timerID.innerHTML = 60;

      errorRate = Math.floor(
        ((totalCharacters - correctCharacters) / totalCharacters) * 100
      );
      let accuracy = 100 - errorRate;
      accuracyID.innerHTML = accuracy;
      // mistakes;

      // alert('timeout ')
    }
  }
  tick();
}
// function enterKeyPressed(event) {
//   if (event.keyCode == 13) {
//      console.log("Enter key is pressed");
//      return true;
//   } else {
//      return false;
//   }
// }
// correctCharacters = document.querySelectorAll('correct').length;
// accuracyID.innerHTML = correctCharacters;
