var books = [{
    "Author": "Thomas Mann",
    "Title": "Death in Venice",
    "Description": "One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self."
  },
  {
    "Author": "James Joyce",
    "Title": "A portrait of the artist as a young man",
    "Description": "This book is a fictional re-creation of the Irish writer's own life and early environment. The experiences of the novel's young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character."
  },
  {
    "Author": "E. M. Forster",
    "Title": "A room with a view",
    "Description": "This work displays an unusually perceptive view of British society in the early 20th century.It is a social comedy set in Florence, Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling against straitlaced Victorian attitudes of arrogance, narroe mindedness and sobbery, falls in love - while on holiday in Italy - with the socially unsuitable George Emerson."
  },
  {
    "Author": "Isabel Allende",
    "Title": "The house of spirits",
    "Description": "Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main historical events of the time, up until Pinochet's dictatorship."
  },
  {
    "Author": "Isabel Allende",
    "Title": "Of love and shadows",
    "Description": "The whole world of Irene Beltran, a young reporter in Chile at the time of the dictatorship, is destroyed when she discovers a series of killings carried out by government soldiers. With the help of a photographer, Francisco Leal, and risking her life, she tries to come up with evidence against the dictatorship."
  }
];


function findBook() {
  var author = document.getElementById("author").value;
  var book = document.getElementById("book").value;
  var message = '';
  for(var i = 0 ; i < books.length; i++) {
    if(books[i]["Author"] === author && books[i]["Title"] === book) {
      return document.getElementById("message").value = books[i]["Description"];
    } else if (books[i]["Author"] === author) {
      message += books[i]["Title"] +"\n"+ books[i]["Description"] + "\n\n";
    } else if (books[i]["Title"] === book) {
      return document.getElementById("message").value = books[i]["Author"] +"\n"+ books[i]["Description"] + "\n\n";
    }
  }
  if(message.length > 0) {
    return document.getElementById("message").value = message;
  } else {
    return document.getElementById("message").value = "Book not found.";
  }
}