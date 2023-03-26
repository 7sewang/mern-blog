import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { IndexPage } from "./pages/IndexPage";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import { UserContextProvider } from "./UserContext";



export function App() {
  return (
    <>
      <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />

        {/* <Route path="/create" element={<CreatePost />} /> */}
          {/* <Route path="/post/:id" element={<PostPage />} /> */}
          {/* <Route path="/edit/:id" element={<EditPost />} />  */}
          </Route>
        </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}
