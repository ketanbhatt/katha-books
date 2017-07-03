    var clicks = 0; //counts how may picks have been made in each turn
    var firstchoice; //stores index of first card selected
    var secondchoice; //stores index of second card selected

    var match = 0; //counts matches made
    var backcard = "images/guess.jpg"; //shows back of card when turned over

    var faces = []; //array to store card images
    faces[0] = 'images/rani.png';
    faces[1] = 'images/Rani1.png';
    faces[2] = 'images/raja.png';
    faces[3] = 'images/raja7_2.png';
    faces[4] = 'images/ojha.png';
    faces[5] = 'images/panchi7_1.png';
    faces[6] = 'images/Rani1.png';
    faces[7] = 'images/ojha7_2.png';
    faces[8] = 'images/jhola.png';
    faces[9] = 'images/panchi7_1.png';
    faces[10] = 'images/moonch.png';
    faces[11] = 'images/ojha7_2.png';
    faces[12] = 'images/poonch.png';
    faces[13] = 'images/poonch.png';
    faces[14] = 'images/raja7_2.png';
    faces[15] = 'images/moonch.png';
    faces[16] = 'images/jhola.png';
    faces[17] = 'images/ojha.png';
    faces[18] = 'images/raja.png';
    faces[19] = 'images/rani.png';
 
randomize(faces);
load(faces);

    function choose(card) {
            if (clicks == 2) {
                return;
            }
            if (clicks == 0) {
                firstchoice = card;
                document.images[card].src = faces[card];
                clicks = 1;
            } else {
                clicks = 2;
                secondchoice = card;
                document.images[card].src = faces[card];
                timer = setInterval("check()", 1000);
            }
        }
        /* Check to see if a match is made */

    function check() {
        clearInterval(timer); //stop timer
        clicks = 0;
        if (faces[secondchoice] == faces[firstchoice]) {
            match++;
            document.getElementById("matches").innerHTML = match;
        } else {
            document.images[firstchoice].src = backcard;
            document.images[secondchoice].src = backcard;
            return;
        }
    }

function randomize(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
