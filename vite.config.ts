import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // Required for GitHub project pages: https://umairmehsud05.github.io/UmairPortfolio/
  base: '/UmairPortfolio/',
})
