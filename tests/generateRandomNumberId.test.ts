import { describe, expect, it } from "bun:test";
import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";

describe('toSlug', () => {
    const firstId = generateRandomNumberId()
    const secondId = generateRandomNumberId()

    expect(firstId).not.toBe(secondId);
});