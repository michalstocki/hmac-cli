# HMAC-CLI
## Simple Node.js HMAC Command Line Utility

I made this to quickly create and verify hashed message authentication codes

### Installation

```
$ git clone git@github.com:thinaire/hmac-cli.git
$ cd hmac-cli
hmac-cli$ export CONTENT_HMAC=MY_SECRET_KEY
hmac-cli$ node hmac 'Message to Hash' MY_SECRET_KEY

HMAC:
NqLxyz53OE9dmNrDTlAdk2dXBAjStft1GYCMNEQ9w6Y=

hmac-cli$ node verify 'Message to Hash' NqLxyz53OE9dmNrDTlAdk2dXBAjStft1GYCMNEQ9w6Y=


Message is Valid


```

### More Useage

Run without any parameters (or erroneous ones) to see useage:

```
hmac-cli$ node hmac

Usage: node hmac [MESSAGE] [HASH] [ENCODING]

SECRET should be in the CONTENT_HMAC environment variable. `export CONTENT_HMAC=YOUR_SECRET`
HASH defaults to `sha256`.
ENCODING defaults to `base64`.

hmac-cli$ node verify

Usage: node verify-hmac [MESSAGE] [HMAC] [HASH] [ENCODING]

SECRET should be in the CONTENT_HMAC environment variable. `export CONTENT_HMAC=YOUR_SECRET`
HASH defaults to `sha256`.
ENCODING defaults to `base64`.

```

* Hash can be any hashing algorithm on your current system [see crypto docs](https://nodejs.org/dist/v4.2.2/docs/api/crypto.html#crypto_crypto_createhash_algorithm)
* Encoding can be any valid string encoding

## LICENSE

MIT

