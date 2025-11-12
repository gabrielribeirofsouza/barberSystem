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
import { ClientesProvider } from './store/context/ClientesContext.jsx'
import { UserProvider } from './store/context/UserContext.jsx'
import { ProdutosProvider } from './store/context/ProdutoContext.jsx'
import { ServicosProvider } from './store/context/ServicosContext.jsx'
import Login from './pages/Login/Login.jsx'
import RoleProtectedRoute from './components/RoleProtectedRoute/RoleProtectedRoute.jsx'


const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element:(
      <RoleProtectedRoute>
        <Home />
      </RoleProtectedRoute>
    ) 
  },
  {
    path: '/clientes',
    element: (
      <RoleProtectedRoute allowed={['admin']}>
        <Clientes />,
      </RoleProtectedRoute>
    ),
    children: [{
      path: '/clientes',
      element: <Sidebar />
    }]
  },
  {
    path: '/horarios',
    element:(
      <RoleProtectedRoute  allowed={['barbeiro']}>
       <Horarios />
      </RoleProtectedRoute>
    ),
    children: [{
      path: '/horarios',
      element: <Sidebar />
    }]
  },
  {
    path: '/agendamentos',
    element: (
      <RoleProtectedRoute allowed={['barbeiro']}>
          <Agendamentos />
      </RoleProtectedRoute>
    
  ),
    children: [{
      path: '/agendamentos',
      element: <Sidebar />
    }]
  },
  {
    path: '/servicos',
    element: (
      <RoleProtectedRoute allowed={['admin']}>
        <Servicos />
      </RoleProtectedRoute>
  ),
    children: [{
      path: '/servicos',
      element: <Sidebar />
    }]
  },
  {
    path: '/produtos',
    element: (
    <RoleProtectedRoute allowed={['admin']}>
      <Produtos />
    </RoleProtectedRoute>

    ),
    children: [{
      path: '/produtos',
      element: <Sidebar/>
    }]
  },{
    path: '/configuracoes',
    element: (
      <RoleProtectedRoute allowed={['admin','barbeiro']}>
        <Configuracoes />
      </RoleProtectedRoute>
  ),
    children: [{
      path: '/configuracoes',
      element: <Sidebar/>
    }]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
        <ServicosProvider>
          <ProdutosProvider>
              <ClientesProvider>
                <RouterProvider router={rotas}/>
              </ClientesProvider>
          </ProdutosProvider>
        </ServicosProvider>
       
   </UserProvider>
  </StrictMode>,
)
