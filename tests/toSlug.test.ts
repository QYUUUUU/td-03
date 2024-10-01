import { describe, expect, it } from "bun:test";
import { toSlug } from "../src/utils/toSlug";

describe('toSlug', () => {
    expect(toSlug("Je suis 1 cas d'école")).toBe("je-suis-1-cas-d-ecole");

    expect(toSlug("Bonjour le monde !")).toBe("bonjour-le-monde");

    expect(toSlug("Café-déjà-vu")).toBe("cafe-deja-vu");

    expect(toSlug("  Test avec    plusieurs   espaces   ")).toBe("test-avec-plusieurs-espaces");

    expect(toSlug("Salut----le----monde")).toBe("salut-le-monde");

    expect(toSlug("--Hello World--")).toBe("hello-world");
});