export function generateRandomNumberId(): number {
    // Générer un nombre entier aléatoire entre 100000 et 999999
    return Math.floor(100000 + Math.random() * 900000);
}