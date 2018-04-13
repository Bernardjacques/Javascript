// =============== Math ============================================

// =========== Minimum et Maximum ==================================

numb1 = Math.min(7, 5, -12, 6, 32, 18, 14, -2)
numb2 = Math.max(-3, 9, 21, 36, 27, 54, 17, 35)

result = numb1 + numb2

console.log(result);


// =================================================================

// ============ Arrondis ===========================================

let floatBateau = 10.4;
let couleBateau = Math.floor(floatBateau)
let voleBateau = Math.ceil(floatBateau)

console.log(floatBateau, couleBateau, voleBateau);

// =================================================================

// ============ Aléatoire ==========================================


let random_50_100 = Math.round(Math.random() * (100 - 50) + 50);  // ==== La valeur aléatoire entre 50 et 100 (arrondi) ===

let random_0_1 = Math.round(Math.random()); // ==== La valeur aléatoire peut être seulement 0 ou 1 ========================

let random_0_10 = Math.round(Math.random() * (10 - 0) + 0); // ==== La valeur aléatoire peut aller de 0 à 10 inclu ========

console.log(random_50_100, random_0_1, random_0_10)

// =================================================================

// ============ Aléatoire 2 ========================================

let charArray = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]

let random = Math.round(Math.random() * (9 - 0) + 0);
 
let character = charArray[random]

console.log(character)

// =================================================================
