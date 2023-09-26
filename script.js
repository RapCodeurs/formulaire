/*alert('Bonjour mon petit faut te calmer')

let adressPost = "1, rue de la paix, 75000";
let countryBird = "france";
let childNumber = 2;

adressPost = "32, rue de Vaugirard, 75000"
childNumber = 3

console.log(countryBird)
console.log(childNumber)
console.log(adressPost)

let login = 'John'
let unreadMessagesCount = 28
let readMessageCount = 12
let newUser = 'Caroline'

console.log("Bonjour " + login + " il y'a " + (unreadMessagesCount + readMessageCount) + " messages dans votre boîte de réception, dont " + readMessageCount + " messages non lus.")
console.log("Bonjour et bienvenue à l'utilisatrice " + newUser)*/

const el = document.getElementById('register-form');
el.addEventListener('submit', (event) => {
  event.preventDefault();

  let civility = event.target.female.checked ? 'female' : 'male';
  let name = event.target.name.value;
  let category = event.target.category.value;
  let newsletter = event.target.newsletter.checked;

  // Les variables déclarées ci-dessus contiennent les données du formulaire

  let displayedCivility = civility === 'female' ? 'Mme.' : 'M.';
  let newsletterMessage;

  if (newsletter) {
    newsletterMessage = 'Merci de vous être abonné à notre newsletter';
  } else {
    newsletterMessage = 'Inscrivez-vous vite à notre newsletter';
  }

  let displayedCategory;

  switch (category){
    case 'cold-starter':
      displayedCategory = 'Entrée froide';
      break;
    case 'soup':
      displayedCategory = 'Soupe';
      break;
    case 'main-course':
      displayedCategory = 'Plat';
      break;
    case 'fruit-dessert':
      displayedCategory = 'Dessert (fruits)';
      break;
    case 'chocolate-dessert':
      displayedCategory = 'Dessert (Chocolat)';
      break;
    default:
      displayedCategory = 'Entrée froide'
  }

  alert(`Bonjour ${displayedCivility} ${name}. ${newsletterMessage}, elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, ${displayedCategory}!`);
});

