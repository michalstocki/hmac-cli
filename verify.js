"use strict";

var args = process.argv.slice(2),
	message = args[0],
	code = args[1],
	secret = args[2] || process.env.CONTENT_HMAC,
	hash = args[3] || "sha256",
	enc = args[4] || "base64";

function showHelpAndExit() {
	console.log("\nUsage: node verify-hmac [MESSAGE] [HMAC] [HASH] [ENCODING]");
	console.log("\nSECRET should be in the CONTENT_HMAC environment variable. `export CONTENT_HMAC=YOUR_SECRET`");
	console.log("HASH defaults to `sha256`.");
	console.log("ENCODING defaults to `base64`.");
	console.log("");
	process.exit(0);
}

if(!message || !code) {
	showHelpAndExit();
}

var hmac = require("crypto").createHmac(hash, secret).update(message).digest(enc);

console.log("\n");
if(hmac==code) {
	console.log("Message is Valid");
} else {
	console.log("Message is Invalid");
}
console.log("\n");
