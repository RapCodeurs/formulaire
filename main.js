alert('Je ne serai plus connceté sur TIK TOK')
/*let username = prompt("quel est votre nom ?")
console.log(username)

const priceApple = 0.32;
const pricePoire = 0.44;

let numerApples = prompt("Qu'elle est le nombre de pommes vendues ?")
let numberPoires = prompt("Qu'elle est le nombre de poires vendues ?")

let chiffreAffaireTotal = (priceApple * numerApples) + (pricePoire * numberPoires)
alert(Math.round(chiffreAffaireTotal) + " Euros")*/

const objet = prompt('Entrez le motif de la convocation')
const lastName = prompt('Entrez un nom')
const firstName = prompt('Entrez un prénom')
const gender = prompt('M ou Mme')
const dateAppointement = prompt('Entrez une date de convocation (dd/mm/yyyy)');
const place = prompt('Entrez un numéro de bureau')
const signature = 'Votre agent administratif';

const lastNameModif = lastName.toUpperCase()
const fisrtNameChange = firstName.toUpperCase()

console.log(lastNameModif + " " + fisrtNameChange)
console.log()
console.log("    Objet de la convocation: " + objet)
console.log("    " + gender + " " + fisrtNameChange + " " + lastNameModif + "," + " vous êtes convoqué(e) le " + dateAppointement + " dans le bureau " + place + " pour le motif suivant: " + objet + ".")
console.log()
console.log("En vous remerciant.")
console.log()
console.log(signature)
