import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ProviderProducts } from './providers/Products-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderProducts > 
      <App />
    </ProviderProducts>
  </StrictMode>,
)
