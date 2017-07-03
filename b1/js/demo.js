var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//check this option work or not for refresh

//$(".slides").val(0).slides("refresh");


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the span element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on span (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//XXXXXXXXXXXXXXXXXXXXXXX    Modified old code    XXXXXXXXXXXXXXXXXXXXXXXXXX
        // Get the modal

        var modalparent = document.getElementsByClassName("modal_multi");

        // Get the button that opens the modal

        var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

        // Get the span element that closes the modal
        var span_close_multi = document.getElementsByClassName("close_multi");

        // When the user clicks the button, open the modal
        function setDataIndex() {

            for (i = 0; i < modal_btn_multi.length; i++)
            {
                modal_btn_multi[i].setAttribute('data-index', i);
                modalparent[i].setAttribute('data-index', i);
                span_close_multi[i].setAttribute('data-index', i);
            }
        }



        for (i = 0; i < modal_btn_multi.length; i++)
        {
            modal_btn_multi[i].onclick = function() {
                var ElementIndex = this.getAttribute('data-index');
                modalparent[ElementIndex].style.display = "block";
            };

            // When the user clicks on span (x), close the modal
            span_close_multi[i].onclick = function() {
                var ElementIndex = this.getAttribute('data-index');
                modalparent[ElementIndex].style.display = "none";
            };

        }

        window.onload = function() {

            setDataIndex();
        };

        window.onclick = function(event) {
            if (event.target === modalparent[event.target.getAttribute('data-index')]) {
                modalparent[event.target.getAttribute('data-index')].style.display = "none";
            }

            // OLD CODE
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };


//Match-cards board game

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
    faces[6] = 'images/ojha7_2.png';
    faces[7] = 'images/jhola.png';
    faces[8] = 'images/moonch.png';
    faces[9] = 'images/poonch.png';
    faces[10] = 'images/poonch.png';
    faces[11] = 'images/moonch.png';
    faces[12] = 'images/jhola.png';
    faces[13] = 'images/ojha7_2.png';
    faces[14] = 'images/panchi7_1.png';
    faces[15] = 'images/ojha.png';
    faces[16] = 'images/raja7_2.png';
    faces[17] = 'images/raja.png';
    faces[18] = 'images/Rani1.png';
    faces[19] = 'images/rani.png';
 
randomize(faces);

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
