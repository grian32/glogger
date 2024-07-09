# glogger
A simple logger for Deno

![image](https://user-images.githubusercontent.com/54550982/125192859-81559f80-e252-11eb-8829-31d6f9423090.png)

## Example Code

### Regular Logging
```typescript
import GLogger from "https://deno.land/x/glogger@2.1.0/mod.ts";

let logger = new GLogger("Example");
logger.info("Hello from Example");
```

### File Logging

To enable file logging you must pass `true` to the `logToFile` parameter, and pass a location to the `logFolder` parameter, the `logFolder` paramater defaults to `./logs/`

```typescript
import GLogger from "https://deno.land/x/glogger@2.1.0/mod.ts";

// this enables file logging, and puts the `.log` files in `my/path/to/log/folder`
let logger = new GLogger("Example", true, "my/path/to/log/folder");
logger.info("Hello from Example");
```

## Contributing

If you have any contributions, feel free to make a PR.
