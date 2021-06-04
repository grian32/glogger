// TODO: change to deps.ts
import { brightBlue, brightCyan, cyan, green, yellow, red } from "https://deno.land/std@0.97.0/fmt/colors.ts";
import { assert, assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";

const decoder = new TextDecoder();

Deno.test("logger.info()", async () => {
    const p = Deno.run({
        cmd: ["deno", "run", "testfiles/info.ts"],
        stdout: "piped",
        env: {
            "NO_COLOR": "", // sets NO_COLOR so there's no color codes polluting the output.
        }
    });
    const stdout = decoder.decode(await p.output());
    p.close();
    assertEquals("dn", stdout)
    // TODO: regex
})