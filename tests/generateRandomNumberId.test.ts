import { expect, test, describe } from "bun:test"
import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";


describe('Tests de génération de nombre aléatoire', () => {
    const firstId = generateRandomNumberId()
    const secondId = generateRandomNumberId()

    test('test de génération différente', () => expect(firstId).not.toBe(secondId));
});