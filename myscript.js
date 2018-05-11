var Persons = [{
        name: 'John',
        surname: 'Doe',
        age: 25,
        myPhoto: "img/boy1.jpg",
        likes: 0 // numeric property used to store likes
    },

    {
        name: 'Jane',
        surname: 'Doe',
        age: 25,
        myPhoto: "img/girl1.jpg",
        likes: 0 // numeric property used to store likes
    },

    {
        name: 'Maxina',
        surname: 'Musterman',
        age: 25,
        myPhoto: "img/girl2.jpg",
        likes: 0 // numeric property used to store likes
    },

    {
        name: 'Max',
        surname: 'Musterman',
        age: 25,
        myPhoto: "img/boy2.jpg",
        likes: 0 // numeric property used to store likes
    },
];


$(document).ready(function() {

//GET NAMES, SURNAMES AND AGE:
	for (var i = 0; i < 4; i++) {
		$("#name" + i).append(Persons[i].name);
		$("#surname" + i).append(Persons[i].surname);
		$("#age" + i).append(Persons[i].age);
		$("#img" + i).append("<img src=" + Persons[i].myPhoto + ">");

	};

//GET NUMBER OF LIKES FOR PERSON1 STORED IN OBJECT:
$("#likes0").append(Persons[0].likes).css({"color": "black", "font-size": "100%"});

//COUNT NUMBER OF LIKES FOR PERSON 1 WHEN CLICKED:
$("#button0").click(function() {
Persons[0].likes++;
$("#likes0").text(Persons[0].likes).css({"color": "red", "font-size": "120%"});;
});

//GET NUMBER OF LIKES FOR PERSON2 STORED IN OBJECT:
$("#likes1").append(Persons[1].likes).css({"color": "black", "font-size": "100%"});

//COUNT NUMBER OF LIKES FOR PERSON2 WHEN CLICKED:
$("#button1").click(function() {
Persons[1].likes++;
$("#likes1").text(Persons[1].likes).css({"color": "red", "font-size": "120%"});;
});

//GET NUMBER OF LIKES FOR PERSON3 STORED IN OBJECT:
$("#likes2").append(Persons[2].likes).css({"color": "black", "font-size": "100%"});

//COUNT NUMBER OF LIKES FOR PERSON3 WHEN CLICKED:
$("#button2").click(function() {
Persons[2].likes++;
$("#likes2").text(Persons[2].likes).css({"color": "red", "font-size": "120%"});;
});

//GET NUMBER OF LIKES FOR PERSON4 STORED IN OBJECT:
$("#likes3").append(Persons[3].likes).css({"color": "black", "font-size": "100%"});

//COUNT NUMBER OF LIKES FOR PERSON4 WHEN CLICKED:
$("#button3").click(function() {
Persons[3].likes++;
$("#likes3").text(Persons[3].likes).css({"color": "red", "font-size": "120%"});;
});



});