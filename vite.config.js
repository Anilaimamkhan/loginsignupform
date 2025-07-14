// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//    base: '/loginsignupform/',
// })



// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHub = process.env.VITE_ENV === 'GH_PAGES'

export default defineConfig({
  plugins: [react()],
  base: isGitHub ? '/loginsignupform/' : '/', // Dynamic base
})

