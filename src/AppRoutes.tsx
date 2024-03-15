import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import AuthCallBackPage from "./pages/AuthCallBackPage";
import ProtectedRoute from "./auth/ProtectedRoute";



const AppRoutes=()=>{
    return(
        <Routes>
            <Route 
                path="/" 
                element={
                    <Layout showHero>
                        <HomePage/>
                    </Layout>
                }
            />
            <Route path="/auth-callback" element={<AuthCallBackPage/>}/>


            <Route element={<ProtectedRoute/>}>
            <Route 
            path="/user-profile" 
            element={
            <Layout>
                <UserProfilePage />
            </Layout>
            }
            />
            </Route>
           
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    );

};
export default AppRoutes;