// ===== Diseur de bonne aventure ========
// ======= Variables =====================

let metier = "ProGamer";
let pays = "Belgique";
let prenom = "Léa" ;
let nbr_enfant = 2;

// ============================================================================================================

console.log("Vous serez", metier, "et habiterez à", pays, "et marié a", prenom, "avec", nbr_enfant, "enfants.")

// ============================================================================================================


// =========== Calculer l'âge =================================================================================
// ======= Variables =====================

let current_year = 2018;

let birth_year = prompt("Entrez votre année de naissance");
let age = current_year - birth_year;
    console.log("Vous avez entre",age - 1, "et", age, "ans");

// =============================================================


// =========== Bientôt Vieux ==================================================================================
// ======= Variables =====================

let max_age = 100;
let age = prompt("Entrez votre age");
let food = prompt("Entrez votre nourriture favorite");
let food_per_day = prompt("Combien de gramme en mangez vous par jour ?");

let year_left = max_age - age;
let nbr_day = year_left * 365;

let food_left = nbr_day * food_per_day; // en gr
let food_left2 = food_left / 1000;// en kg

console.log("Il vous reste", food_left, "gr (",food_left2,"kg) de", food, "avant d'atteindre l'âge de", max_age, "ans");

// =============================================================


// =========== Priorités ==================================================================================
// ======= Variables =====================

let result = (1 + 2) * 3 + 4 / 2;
let txtresult = "(1 + 2) * 3 + 4 / 2";
let P = (1 + 2);
let M = (P * 3);
let D = (4 / 2);
let A = (M + 2);

console.log(txtresult);
console.log("On commence par les parenthèses");
console.log("(1 + 2) =", P);
console.log(P, "* 3 + 4 / 2");
console.log("On poursuit avec les multiplications")
console.log("(3 * 3) =", M);
console.log(M, "+ 4 / 2"); 
console.log("Puis, les divisions");
console.log("4 / 2 =",D );
console.log(M, "+" ,D, "=", result);

// ==================================================
