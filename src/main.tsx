import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Welcome, SignIn, Home, ModalsGallery } from './pages'
import { screens } from './pages/screens'
import AllPages from './pages/AllPages'

const withContainer = (element: ReactNode) => (
  <div style={{ maxWidth: 520, margin: '0 auto', width: '100%' }}>
    {element}
  </div>
)

const router = createBrowserRouter([
  { path: '/', element: withContainer(<AllPages />) },
  { path: '/page/welcome', element: withContainer(<Welcome />) },
  { path: '/page/signin', element: withContainer(<SignIn />) },
  { path: '/page/home', element: withContainer(<Home />) },
  { path: '/modals', element: withContainer(<ModalsGallery />) },
  ...screens.map(s => ({ path: `/page/${s.slug}`, element: withContainer(<s.Component />) })),
  // generic placeholder for yet-unported screens
  { path: '/page/:slug', element: withContainer(
    <div style={{ padding: 20 }}>
      <h3>Placeholder</h3>
      <p>Вёрстка для данного экрана пока не перенесена. Страница создана для просмотра навигации.</p>
    </div>
  ) },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
