# ravynOS Wiki

The ravynOS Wiki is a static-site documentation hub for the ravynOS project. This website contains information related to system structure, building ravynOS from source, supported hardware, and among other things ravynOS related.

## General Information

The website is organized into sections, with each section providing detailed information about a specific tool or service. The website also includes a search feature, making it easy for developers to find the information they need quickly and easily.

## Getting Started

Building `wiki` is simple, see below.

For these examples, we're using yarn, however you can use whatever you want.

To installed the components required to run docs, run:

```sh
yarn install
```

To begin the development server with live-reload enabled, run:

```sh
yarn dev
```

To export docs as a static website, run:

```
yarn next build \
yarn next export
```

This will export the project into the `out/` directory.
