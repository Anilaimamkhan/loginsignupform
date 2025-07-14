// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//    base: '/loginsignupform/',
// })



// vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // Detecting deployment environment
// const base = process.env.VITE_ENV === 'GH_PAGES' ? '/loginsignupform/' : '/'

// export default defineConfig({
//   plugins: [react()],
//   base,
// })




// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.VITE_ENV === 'GH_PAGES' ? '/loginsignupform/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})

