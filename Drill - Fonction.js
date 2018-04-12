// ========== Fonctions ===================================

// ========== Soustractions ==================================================

let start = () => 
{
    let diminuende = prompt("Entrez votre diminuende");
    let diminuteur = prompt("Entrez votre diminuteur");

    if(diminuende >= -2458741753852 && diminuende <= 2458741753852 && diminuteur >= -2458741753852 && diminuteur <= 2458741753852)
    {
        let result = diminuende - diminuteur;
        console.log(diminuende, "-", diminuteur, "=", result);
    }
    else
    {
        console.log("Veuillez entrer des valeurs correctes");
        start();
    }
}
start();

// ========== Divisions ======================================================

let start = () => 
{
    let numerator = prompt("Entrez votre numérateur");
    let denominator = prompt("Entrez votre dénominateur");

    if(denominator == 0)
    {
        console.log("Division par 0 impossible");
        start();

    }
    else if(numerator >= -2458741753852 && numerator <= 2458741753852 && denominator >= -2458741753852 && denominator <= 2458741753852)
    {
        let result = numerator / denominator;
        console.log(numerator, "/", denominator, "=", result);
    }
    else
    {
        console.log("Veuillez entrer des valeurs correctes");
        start();
    }
}
start();

// ========== Multiplications ================================================

let start = () => 
{
    let facteur1 = prompt("Entrez votre numérateur");
    let facteur2 = prompt("Entrez votre dénominateur");

    if(facteur1 >= -2458741753852 && facteur1 <= 2458741753852 && facteur2 >= -2458741753852 && facteur2 <= 2458741753852)
    {
    let result = facteur1 * facteur2;
    console.log(facteur1, "*", facteur2, "=", result);
    }
    else
    {
        console.log("Veuillez entrer des valeurs correctes");
        start();
    }
}
start();

// ========== Calculs de pourcentages (2 arguments : valeur et pourcentage) ==

let start = () => 
{
    let valeur = prompt("Entrez la valeur de départ");
    let pourcentage = prompt("Entrez le pourcentage");

    if(valeur >= -2458741753852 && valeur <= 2458741753852 && pourcentage >= -2458741753852 && pourcentage <= 2458741753852)
    {
    let result = (valeur / 100 ) * pourcentage;
    console.log(pourcentage,"% de",valeur, "=", result);
    }
    else
    {
        console.log("Veuillez entrer des valeurs correctes");
        start();
    }
}
start();

// ========== Calculs de vitesse (2 arguments : distance, temps en heure) ====

let start = () => 
{
    let distance = prompt("Entrez la distance (en km)");
    let temps = prompt("Entrez le temps (en h)");

    if(distance >= -2458741753852 && distance <= 2458741753852 && temps >= -2458741753852 && temps <= 2458741753852)
    {
    let result = distance / temps;
    console.log(distance,"km", "en", temps,"h =", result,"km/h");
    }
    else
    {
        console.log("Veuillez entrer des valeurs correctes");
        start();
    }
}
start();
