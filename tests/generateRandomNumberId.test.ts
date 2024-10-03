import { expect, test, describe } from "bun:test"
import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";


describe('Test de génération de nombre aléatoire', () => {
    const firstId = generateRandomNumberId()
    const secondId = generateRandomNumberId()

    test('test du bon affichage de HelloHuman', () => expect(firstId).not.toBe(secondId));
});