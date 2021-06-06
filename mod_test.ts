import { assert } from "./deps.ts";

const decoder = new TextDecoder();

// sets NO_COLOR so there's no color codes polluting the output.
Deno.test("logger.info()", async () => {
    const p = Deno.run({
        cmd: ["deno", "run", "testfiles/info.ts"],
        stdout: "piped",
        env: {
            "NO_COLOR": "",
        }
    });
    const stdout = decoder.decode(await p.output());
    p.close();
    assert(/\[\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2} (?:AM|PM)\] \[(?:(?:.+\.ts|.+\.js)|(?:.+\.ts@.+|.+\.js@.+))\] \[INFO\] .+\n/gm.test(stdout));
})

Deno.test("logger.error()", async () => {
    const p = Deno.run({
        cmd: ["deno", "run", "testfiles/error.ts"],
        stdout: "piped",
        env: {
            "NO_COLOR": "",
        }
    });
    const stdout = decoder.decode(await p.output());
    p.close();
    assert(/\[\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2} (?:AM|PM)\] \[(?:(?:.+\.ts|.+\.js)|(?:.+\.ts@.+|.+\.js@.+))\] \[ERROR\] .+\n/gm.test(stdout));
})

Deno.test("logger.debug()", async () => {
    const p = Deno.run({
        cmd: ["deno", "run", "testfiles/debug.ts"],
        stdout: "piped",
        env: {
            "NO_COLOR": "",
        }
    });
    const stdout = decoder.decode(await p.output());
    p.close();
    assert(/\[\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2} (?:AM|PM)\] \[(?:(?:.+\.ts|.+\.js)|(?:.+\.ts@.+|.+\.js@.+))\] \[DEBUG\] .+\n/gm.test(stdout));
})

Deno.test("logger.warn()", async () => {
    const p = Deno.run({
        cmd: ["deno", "run", "testfiles/warn.ts"],
        stdout: "piped",
        env: {
            "NO_COLOR": "",
        }
    });
    const stdout = decoder.decode(await p.output());
    p.close();
    assert(/\[\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2} (?:AM|PM)\] \[(?:(?:.+\.ts|.+\.js)|(?:.+\.ts@.+|.+\.js@.+))\] \[WARN\] .+\n/gm.test(stdout));
})
