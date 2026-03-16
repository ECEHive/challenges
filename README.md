# Hive Challenges

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A new way to learn about the tools at the Hive Makerspace.

## Project Structure

Challenges are under `content/docs` and written with `.mdx`. Each file is exposed as a route based on its file name.

Images are colocated so they can be accessed with just their name. Follow the format `${CHALLENGE}_${NUMBER}.{jpg,png,svg}`, i.e. something like `basic_1.png` or `advanced_2.svg`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npx astro dev`             | Launch local dev server                            |
| `npx astro build && npx astro preview`             | Build site and preview it (needed to test search functionality)      |
| `npx @astrojs/upgrade`           | Upgrade Astro and other dependencies          |