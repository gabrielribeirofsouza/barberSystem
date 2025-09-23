import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Clientes from './pages/Clientes/Clientes.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Horarios from './pages/Horarios/Horarios.jsx'
import Agendamentos from './pages/Agendamentos/Agendamentos.jsx'
import Servicos from './pages/Servicos/Servicos.jsx'
import Produtos from './pages/Produtos/Produtos.jsx'
import Configuracoes from './pages/Configuracoes/Configuracoes.jsx'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/clientes',
    element: <Clientes />,
    children: [{
      path: '/clientes',
      element: <Sidebar />
    }]
  },
  {
    path: '/horarios',
    element: <Horarios />,
    children: [{
      path: '/horarios',
      element: <Sidebar />
    }]
  },
  {
    path: '/agendamentos',
    element: <Agendamentos />,
    children: [{
      path: '/agendamentos',
      element: <Sidebar />
    }]
  },
  {
    path: '/servicos',
    element: <Servicos />,
    children: [{
      path: '/servicos',
      element: <Sidebar />
    }]
  },
  {
    path: '/produtos',
    element: <Produtos />,
    children: [{
      path: '/produtos',
      element: <Sidebar/>
    }]
  },{
    path: '/configuracoes',
    element: <Configuracoes />,
    children: [{
      path: '/configuracoes',
      element: <Sidebar/>
    }]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={rotas}/>
  </StrictMode>,
)
