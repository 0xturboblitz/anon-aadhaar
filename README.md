# Anon Aadhaar

![Anon Aadhaar card lite](https://github.com/privacy-scaling-explorations/anon-aadhaar/assets/67648863/b29d784b-610a-4222-8fa5-4a2972e492fd)

Anon Aadhaar is a protocol that let users anonymously prove their Aadhaar identity, in a very fast and simple way.
The core of the procotocol is the circuits, but we also provide a SDK to let any app use our protocol.

## 📦 Packages

- [anon-aadhaar-pcd](packages/anon-aadhaar-pcd/)
- [anon-aadhaar-react](packages/anon-aadhaar-react/)
- [anon-aadhaar-contracts](packages/anon-aadhaar-contracts/)

## Documentation

- [Anon Aadhaar Documentation](https://anon-aadhaar-documentation.vercel.app/docs/intro)

## Examples
Explore our SDK in action by visiting our example website and repository, where you can see how it's implemented in a real-world scenario. Get inspired and learn how to integrate it into your own projects!

- [Example Website](https://anon-aadhaar-example.vercel.app/)
- [Example Repository](https://github.com/anon-aadhaar-private/anon-aadhaar-example)

## Contributing

Contributions are always welcome!

Please check the [PR template](.github/PULL_REQUEST_TEMPLATE.md)

#### Requirements

Install `rust` and `nodejs v18`, `openssl`(Usually installed in macOS and Linux).

#### Installation

Install nodejs dependencies.

```bash
yarn
```

Install `circom` and download powers of tau file.

```bash
yarn dev-install:pcd
```

Generate verification key and proving key.

**NOTE:This action use for development only. Don't use it in product, please!**

```bash
yarn dev-setup:pcd
```

Run test

```bash
yarn test:libraries
```

Generate pdf file with pkcs#1 schema. This action will create a pdf file name `signed.pdf` signed by `certificate.cer` in `packages/anon-aadhaar-pcd/build` folder.

```bash
yarn pdf:pcd
```

Generate a proof. This action will create a proof and its public scheme in `proofs/` in `packages/anon-aadhaar-pcd/build` folder.

```bash
yarn proof:pcd
```
