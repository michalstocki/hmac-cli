"use strict";

var args = process.argv.slice(2),
	message = args[0],
	secret = process.env.CONTENT_HMAC,
	hash = args[1] || "sha256",
	enc = args[2] || "base64";

function showHelpAndExit() {
	console.log("\nUsage: node hmac [MESSAGE] [HASH] [ENCODING]");
	console.log("\nSECRET should be in the CONTENT_HMAC environment variable. `export CONTENT_HMAC=YOUR_SECRET`");
	console.log("HASH defaults to `sha256`.");
	console.log("ENCODING defaults to `base64`.");
	console.log("");
	process.exit(0);
}

if(!message || !secret) {
	showHelpAndExit();

}

console.log("\nHMAC:");
console.log(require("crypto").createHmac(hash, secret).update(message).digest(enc));
console.log("\n");

process.exit(1);
