import { describe, test, expect, it } from "bun:test";
import { toSlug } from "../src/utils/toSlug";


describe('toSlug', () => {

    test('Test de suppression des espaces et charactères spéciaux', () => expect(toSlug("Bonjour le monde !")).toBe("bonjour-le-monde"));

    test('Test de suppression des accents', () => expect(toSlug("Café-déjà-vu")).toBe("cafe-deja-vu"));

    test('Test de suppression des espaces multiples', () => expect(toSlug("  Test avec    plusieurs   espaces   ")).toBe("test-avec-plusieurs-espaces"));

    test('Test de suppression de plusieurs tirets de suite', () => expect(toSlug("Salut----le----monde")).toBe("salut-le-monde"));

    test('Test de suppression des tirets en début et fin de chaine', () => expect(toSlug("--Hello World--")).toBe("hello-world"));
}); 