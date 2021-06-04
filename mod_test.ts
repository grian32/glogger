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
    //console.log(stdout.match(/\\x1b\[36m\[\d+\/\d+\/\d+ \d+:\d+:\d+ (?:PM|AM)]\\x1b\[39m \\x1b\[94m\[(?:(?:.+\.ts|.+\.js)|(?:.+(?:\.ts|\.js)@.+(?:\/.+)+)|(?:.+(?:\.ts|\.js)@.+))]\\x1b\[39m \\x1b\[32m\[INFO]\\x1b\[39m .+\\n/gm));
})