var questions = [
  {
    question: "Quel est le langage de programmation le plus utilisé pour le développement web frontend?",
    options: ["JavaScript", "Python", "Java", "C++"],
    correct: 0
  },
  {
    question: "Qu'est-ce que HTML?",
    options: ["Un langage de programmation", "Un langage de balisage", "Un framework", "Une base de données"],
    correct: 1
  },
  {
    question: "Quelle propriété CSS est utilisée pour changer la couleur du texte?",
    options: ["text-color", "font-color", "color", "text-style"],
    correct: 2
  },
  {
    question: "Quel framework JavaScript est développé par Facebook?",
    options: ["Angular", "Vue.js", "React", "jQuery"],
    correct: 2
  },
  {
    question: "Qu'est-ce que CSS?",
    options: ["Un langage de programmation", "Un langage de style", "Une base de données", "Un serveur web"],
    correct: 1
  },
  {
    question: "Quel attribut HTML est utilisé pour créer un lien?",
    options: ["link", "href", "url", "src"],
    correct: 1
  },
  {
    question: "Quelle méthode JavaScript est utilisée pour sélectionner un élément par son ID?",
    options: ["querySelector", "getElementById", "selectById", "findElement"],
    correct: 1
  },
  {
    question: "Quel tag HTML est utilisé pour créer un titre principal?",
    options: ["&lt;title&gt;", "&lt;h1&gt;", "&lt;header&gt;", "&lt;main&gt;"],
    correct: 1
  },
  {
    question: "Quelle propriété CSS est utilisée pour changer l'espacement entre les lettres?",
    options: ["letter-spacing", "word-spacing", "text-spacing", "character-spacing"],
    correct: 0
  },
  {
    question: "Qu'est-ce qu'un framework?",
    options: ["Un langage de programmation", "Une structure de base réutilisable", "Une base de données", "Un navigateur web"],
    correct: 1
  },
  {
    question: "Quel type de données JavaScript peut stocker plusieurs valeurs?",
    options: ["String", "Number", "Array", "Boolean"],
    correct: 2
  },
  {
    question: "Quelle balise HTML est utilisée pour créer un formulaire?",
    options: ["&lt;input&gt;", "&lt;form&gt;", "&lt;fieldset&gt;", "&lt;button&gt;"],
    correct: 1
  }
];
var quizDiv =document.getElementById("quiz-questions");
var submitBtn =document.getElementById("submit-quiz");
var scoreDiv =document.getElementById("score");
var resultsDiv =document.getElementById("results");
var html ="";
var i,j;
for (i =0; i <questions.length; i++) {
  html += '<div class="question">';
  html += '<p><b>'+ (i + 1) +'.</b> '+questions[i].question + '</p>';

  for (j = 0; j < questions[i].options.length; j++) {
    html +=
      '<label>' +
      '<input type="radio" id="q' + i + '_'+ j+'" name="q'+ i +'" value="'+j +'">' +
      ' ' +questions[i].options[j] +
      '</label><br>';
  }

  html +='</div>';
}
quizDiv.innerHTML=html;
submitBtn.onclick=function () {
  var score = 0;
  var i,j;
  for (i = 0; i< questions.length; i++) {
    for (j = 0; j < questions[i].options.length; j++) {
      var radio = document.getElementById("q" + i + "_" + j);

      if (radio && radio.checked && j === questions[i].correct) {
        score++;
      }
    }
  }
  scoreDiv.innerHTML = "Votre score: "+ score + " / " + questions.length;
  resultsDiv.classList.add("show");
};
