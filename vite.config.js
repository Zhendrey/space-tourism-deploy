import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    base: '/space-tourism-deploy/',
    plugins: [
        viteStaticCopy({
        targets: [
            {
            src: 'src/json/destination.json',
            dest: ''
            },
            {
            src: 'src/json/crew.json',
            dest: ''
            },
            {
            src: 'src/json/technology.json',
            dest: ''
            },
            {
                src: 'assets/**/*', // Copy all images from assets directory
                dest: 'assets' // Maintain the directory structure in the dist folder
            }
        ]
        })
        ]
})