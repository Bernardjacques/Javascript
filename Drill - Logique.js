// ============= Langues ======================================================
let start = () => 
{
    let mess = prompt("Veuillez choisir une langue entre 'fr', 'es' et 'en'");
    console.log("Vous avez choisis", mess);
    if(mess == "fr")
    {
        console.log("Bonjour tout le monde");
    }
    else if(mess == "es")
    {
        console.log("Hola, Mundo");
    }
    else if(mess == "en")
    {
        console.log("Hello world");
    }
    else
    {
        console.log("Je n'ai pas compris...");
        start();
    }
}
start();

// =============================================================================

// ============ Affichage des scores ===========================================




let start = () => 
{
    let score = prompt("Veuillez indiquer votre score (min 0, max 100)");
    console.log("Votre score est de", score, "points")

    if(score > 0 & score < 50)
    {
        console.log("Avec", score, "points, vous avez le rang C");
    }
    else if(score > 0 & score < 90)
    {
        console.log("Avec", score, "points, vous avez le rang B");
    }
    else if(score > 90 & score < 100)
    {
        console.log("Avec", score, "points, vous avez le rang A");
    }
    else
    {
        console.log("Veuillez entrer un nombre valide");
        start();
    }
}
start();

// =============================================================================

// ============= Mettre au pluriel =============================================

let start = () => 
{
    let item = prompt("Veuillez choisir un objet");
        console.log("Votre objet est un/une", item, "!");

    let nbr = prompt("Veuillez choisir une quantité");
        console.log("Vous en avez donc", nbr, "!");

    if(nbr == 1)
    {
        console.log("Vous avez donc", nbr, item, "!");
    }
    else if(nbr > 1)
    {
        console.log("Vous avez", nbr, item+"s", "!");
    }
    else
    {
        console.log("Tu te foutrais pas un peu d'ma gueule ?? Comment quelqu'un pourrait posséder un nombre négatif de",item,"???");
        console.log("Recommences !")
        start();
    }
}
start();


/*
================================== Version - 2.0.0 =============================
======== Starting - 11/04/18 ============================Ending - 12/04/18 =====
====================================== Author : ================================

    ***** *     **      *                                                           
  ******  **    ****   **                                                           
 **   *  * **    ****  **                                                           
*    *  *  **    * *   **                                                           
    *  *    **   *     **                                           ***  ****         
   ** **    **   *     **  ***      ****    ***  ****       ****     **** ****    
   ** **     **  *     ** * ***    * ***  *  **** **** *   * ***  *   **   ****     
   ** **     **  *     ***   ***  *   ****    **   ****   *   ****    **              
   ** **      ** *     **     ** **    **     **    **   **    **     **            
   ** **      ** *     **     ** **    **     **    **   **    **     **            
   *  **       ***     **     ** **    **     **    **   **    **     **            
      *        ***     **     ** **    **     **    **   **    **     **              
  ****          **     **     ** **    **     **    **   **    **     ***           
 *  *****              **     **  ***** **    ***   ***   ***** **     ***          
*     **                **    **   ***   **    ***   ***   ***   **                 
*  *                          *                                                    
 **                          *                                                      
                            *                                                       
                           *                                                        
*/
