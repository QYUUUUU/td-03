export function toSlug(text: string): string {
    // 1. Convertir la chaîne en minuscules
    let slug = text.toLowerCase();

    // 2. Remplacer les caractères accentués par leurs équivalents sans accent
    slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");//\u0300-\u036f ne cible que les accents et pas la lettre 

    // 3. Remplacer les espaces et autres caractères spéciaux par des tirets
    slug = slug.replace(/\s+/g, '-'); // Remplacer les espaces par des tirets
    slug = slug.replace(/[^a-z0-9\-]/g, ''); // Supprimer les caractères non alphanumériques

    // 4. Retirer les tirets multiples éventuels
    slug = slug.replace(/--+/g, '-');

    // 5. Retirer les tirets en début et fin de chaîne
    slug = slug.replace(/^-+|-+$/g, '');

    return slug;
}