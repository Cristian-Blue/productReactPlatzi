import { Header } from "./components/layout/header"
import './App.css'
import { Box } from "@mui/material"
import { DrawerCustom } from "./components/layout/drawer"
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsPages } from "./pages/products/products.pages";
import { CategoryPages } from "./pages/category/category.pages";
import { UsersPages } from "./pages/users/users.pages";
import RegisterPage from "./pages/products/register.pages";
 
function App() {
  const [open, setOpen] = useState(true);
  const [width, setWidth] = useState(300);

  const handleDrawerOpen = () => {
    console.log('adsfadf')
    setOpen(!open);
    setWidth(open ? 0 : 300);
  };


  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <Header click={handleDrawerOpen} />
        <DrawerCustom open={open} width={width}/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 , paddingTop: '5em'}}>
          <Routes>
            <Route index element={<ProductsPages />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/category" element={<CategoryPages />}></Route>
            <Route path="/users" element={<UsersPages />}></Route>
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  )
}

export default App
