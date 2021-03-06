import { assert } from "./deps.ts";

const decoder = new TextDecoder();

// sets NO_COLOR so there's no color codes polluting the output.
Deno.test("logger.info()", async () => {
    const p = Deno.run({
        cmd: ["deno", "run", "--unstable",  "./testfiles/info.ts"],
        stdout: "piped",
        env: {
            "NO_COLOR": "",
        }
    });
    const stdout = decoder.decode(await p.output());
    p.close();
    assert(/\[\d{4}\/\d{2}\/\d{2} \d{1,2}:\d{2}:\d{2} (?:AM|PM)\] \[info test\] \[INFO\] .+\n/gm.test(stdout));
})

Deno.test("logger.error()", async () => {
    const p = Deno.run({
        cmd: ["deno", "run", "--unstable",  "./testfiles/error.ts"],
        stdout: "piped",
        env: {
            "NO_COLOR": "",
        }
    });
    const stdout = decoder.decode(await p.output());
    p.close();
    assert(/\[\d{4}\/\d{2}\/\d{2} \d{1,2}:\d{2}:\d{2} (?:AM|PM)\] \[error test\] \[ERROR\] .+\n/gm.test(stdout));
})

Deno.test("logger.debug()", async () => {
    const p = Deno.run({
        cmd: ["deno", "run", "--unstable", "./testfiles/debug.ts"],
        stdout: "piped",
        env: {
            "NO_COLOR": "",
        }
    });
    const stdout = decoder.decode(await p.output());
    p.close();
    assert(/\[\d{4}\/\d{2}\/\d{2} \d{1,2}:\d{2}:\d{2} (?:AM|PM)\] \[debug test\] \[DEBUG\] .+\n/gm.test(stdout));
})

Deno.test("logger.warn()", async () => {
    const p = Deno.run({
        cmd: ["deno", "run", "--unstable", "./testfiles/warn.ts"],
        stdout: "piped",
        env: {
            "NO_COLOR": "",
        }
    });
    const stdout = decoder.decode(await p.output());
    p.close();
    assert(/\[\d{4}\/\d{2}\/\d{2} \d{1,2}:\d{2}:\d{2} (?:AM|PM)\] \[warn test\] \[WARN\] .+\n/gm.test(stdout));
})
