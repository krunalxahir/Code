import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";

import { ThemeProvider } from "@/contexts/theme-context";
import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Login from "./routes/dashboard/login";
import SignupForm from "./routes/dashboard/signup";
import Analytics from "./routes/dashboard/Analytics";

// ✅ Create Auth Context
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuthenticated");
        if (storedAuth === "true") {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
    };

    if (loading) return <div className="h-screen w-screen bg-slate-900 dark:bg-slate-950" />;

    // ✅ Redirect `/dashboard` to `/dashboard/dashboard`
    const DashboardRedirect = () => <DashboardPage />;

    const router = createBrowserRouter([
        {
            path: "/",
            element: isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={login} />,
        },
        {
            path: "/signup",
            element: <SignupForm />,
        },
        {
            path: "/dashboard",
            element: isAuthenticated ? <Layout /> : <Navigate to="/" replace />,
            children: [
                { index: true, element: <DashboardRedirect /> }, // ✅ Redirect to the main dashboard
                { path: "dashboard", element: <DashboardPage /> },
                { path: "analytics", element: <Analytics /> },
                { path: "reports", element: <h1 className="title">Reports</h1> },
                { path: "customers", element: <h1 className="title">Customers</h1> },
                { path: "new-customer", element: <h1 className="title">New Customer</h1> },
                { path: "verified-customers", element: <h1 className="title">Verified Customers</h1> },
                { path: "products", element: <h1 className="title">Products</h1> },
                { path: "new-product", element: <h1 className="title">New Product</h1> },
                { path: "inventory", element: <h1 className="title">Inventory</h1> },
                { path: "settings", element: <h1 className="title">Settings</h1> },
            ],
        },
        { path: "*", element: <Navigate to="/" replace /> }, // ✅ Catch-all route
    ]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            <ThemeProvider storageKey="theme" defaultTheme="dark">
                <RouterProvider router={router} />
            </ThemeProvider>
        </AuthContext.Provider>
    );
}

export { useAuth };
export default App;