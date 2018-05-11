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



$("#name1").append(Persons[0].name);
$("#surname1").append(Persons[0].surname);
$("#age1").append(Persons[0].age);
$("#img1").append("<img src=" + Persons[0].myPhoto + ">");

$("#name2").append(Persons[1].name);
$("#surname2").append(Persons[1].surname);
$("#age2").append(Persons[1].age);
$("#img2").append("<img src=" + Persons[1].myPhoto + ">");

$("#name3").append(Persons[2].name);
$("#surname3").append(Persons[2].surname);
$("#age3").append(Persons[2].age);
$("#img3").append("<img src=" + Persons[2].myPhoto + ">");

$("#name4").append(Persons[3].name);
$("#surname4").append(Persons[3].surname);
$("#age4").append(Persons[3].age);
$("#img4").append("<img src=" + Persons[3].myPhoto + ">");

// Shows counter only after button is clicked
// $("#button1").click(function() {
// 	var likesSum1 = (Persons[0].likes) + 1;
// 	$("#likes1").append(likesSum1);
// });

$("#likes1").append(Persons[0].likes);

$("#button1").click(function() {
	var likesSum1 = (Persons[0].likes) + 1;
	$("#likes1").text(likesSum1);
});
