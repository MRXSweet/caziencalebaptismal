// Predefined list of Godparents with their genders
const godparents = [
    { name: "edwin mejia", gender: "male" },
    { name: "john doe", gender: "male" },
    { name: "mark genesis ferrer", gender: "male" },
    { name: "reymark reyes", gender: "male" },
    { name: "richard meneses", gender: "male" },
    { name: "christian rey benitez", gender: "male" },
    { name: "christian ver obispo", gender: "male" },
    { name: "joshua mina", gender: "male" },
    { name: "ron xavier matamis", gender: "male" },
    { name: "raymund jusgaya", gender: "male" },
    { name: "rheymhark montoya", gender: "male" },
    { name: "rizalyn ann tacata", gender: "female" },
    { name: "roma monaliza sacramento", gender: "female" },
    { name: "ruby anne sacramento", gender: "female" },
    { name: "charmaine ganalon", gender: "female" },
    { name: "rhian sacramento", gender: "female" },
    { name: "jenny rose sacramento", gender: "female" },
    { name: "katherine castillo", gender: "female" },
    { name: "sandy jane de guzman", gender: "female" },
    { name: "allison cate vallo", gender: "female" },
    { name: "katrina jean tapiador", gender: "female" }
];

document.getElementById('invitation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name').value.trim().toLowerCase();
    const role = document.querySelector('input[name="role"]:checked').value;

    let responseMessage = '';

    const foundGodparent = godparents.find(godparent => 
        godparent.name.includes(nameInput)
    );

    if (foundGodparent) {
        const gender = foundGodparent.gender;
        const fullName = foundGodparent.name.split(' ')
                                             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                             .join(' ');
        const godParent = (gender === 'male') ? 'Godfather' : 'Godmother';
        
        if (role === 'yes') {
            responseMessage = `Thank you, ${godParent} ${fullName}. See you there on my Baptismal!`;
        } else {
            responseMessage = `Aww, you must be a busy person, ${godParent} ${fullName}. Still, we've decided that you'll be the ${godParent}.`;
        }
    } else {
        responseMessage = `Sorry, ${nameInput}, you're not on the list of Godparents.`;
    }

    document.getElementById('response').innerHTML = responseMessage;
    document.getElementById('next-button').style.display = 'block';
});
