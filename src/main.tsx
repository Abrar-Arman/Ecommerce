import { createRoot } from 'react-dom/client'
import router from './my-routes/route'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
    import { QueryClientProvider,  QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
)
