const cardList = [
    {
        title: "Kitten 2",
        image: "images/kitten-2.png",
        link: "About Kitten 2",
        desciption: "Hello There! I just wanted to say HI to you guys. See ya!"
    },
    {
        title: "Kitten 3",
        image: "images/kitten-3.png",
        link: "About Kitten 3",
        desciption: "Hello There! I just wanted to say HI to you guys. See ya!"
    }
]
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}


// document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const firstName = document.getElementById('first_name').value;
//     const lastName = document.getElementById('last_name').value;
//     const password = document.getElementById('password').value;
//     const email = document.getElementById('email').value;
//     const data = {
//         firstName: firstName,
//         lastName: lastName,
//         password: password,
//         email: email
//     };
//     console.log(data);
//     document.getElementById("myForm").reset();
//     $('#modal').modal('close');
// });





const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}
$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
    submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
    });


