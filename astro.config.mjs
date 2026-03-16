// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Rubik",
            cssVariable: "--font-rubik",
            weights: [700],
        },
        {
            provider: fontProviders.google(),
            name: "Sora",
            cssVariable: "--font-sora",
        }
    ],
    integrations: [starlight({
        title: 'Hive Challenges',
        sidebar: [
            {
                label: 'Benchtop Challenges',
                items: [
                    { label: 'Basic', slug: 'benchtop/basic' },
                    { label: 'Intermediate', slug: 'benchtop/intermediate' },
                    { label: 'Advanced', slug: 'benchtop/advanced', badge: "WIP" },
                ],
                collapsed: true,
            },
            {
                label: 'Crafts Challenges',
                items: [
                    { label: 'Basic', slug: 'crafts/basic' },
                    { label: 'Intermediate', slug: 'crafts/intermediate' },
                    { label: 'Advanced', slug: 'crafts/advanced' },
                ],
                collapsed: true,
            },
            {
                label: '3D Printing Challenges',
                items: [
                    { label: 'Basic', slug: '3d-printing/basic' },
                    { label: 'Intermediate', slug: '3d-printing/intermediate' },
                    { label: 'Advanced', slug: '3d-printing/advanced' },
                ],
                collapsed: true,
            },
            {
                label: 'Laser Cutting Challenges',
                items: [
                    { label: 'Basic', slug: 'laser-cutting/basic' },
                    { label: 'Intermediate', slug: 'laser-cutting/intermediate' },
                    { label: 'Advanced', slug: 'laser-cutting/advanced' },
                ],
                collapsed: true,
            },
            {
                label: 'Machine Shop Challenges',
                items: [
                    { label: 'Basic', slug: 'machine-shop/basic', badge: "WIP" },
                    { label: 'Intermediate', slug: 'machine-shop/intermediate' },
                    { label: 'Advanced', slug: 'machine-shop/advanced', badge: "WIP" },
                ],
                collapsed: true,
            },
        ],
        logo: {
            light: "./src/assets/logo-light.svg",
            dark: "./src/assets/logo-dark.svg",
            replacesTitle: true,
        },
        components: {
            Head: "./src/components/Head.astro"
        },
        customCss: ["./src/styles/custom.css"]
    }), mdx()],
});