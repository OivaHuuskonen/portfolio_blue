import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // Tämä sallii kaikkien IP-osoitteiden käytön
    port: 5173, // Oletusportti, voit vaihtaa tarvittaessa
  },
  plugins: [react()],
})
