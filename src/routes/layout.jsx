import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useClickOutside } from "@/hooks/use-click-outside";
import { Sidebar } from "@/layouts/sidebar";
import { Header } from "@/layouts/header";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

const Layout = () => {
    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    const [collapsed, setCollapsed] = useState(!isDesktopDevice);
    const sidebarRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setCollapsed(!isDesktopDevice);
    }, [isDesktopDevice]);

    useClickOutside([sidebarRef], () => {
        if (!isDesktopDevice && !collapsed) {
            setCollapsed(true);
        }
    });

    // ✅ Hide sidebar when route changes on mobile
    useEffect(() => {
        if (!isDesktopDevice) {
            setCollapsed(true);
        }
    }, [location, isDesktopDevice]);

    return (
        <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
            <div
                className={cn(
                    "pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",
                    !collapsed && "max-md:pointer-events-auto max-md:z-50 max-md:opacity-30",
                )}
            />
            {/* Sidebar ko `w-0` aur transition de diya */}
            <div ref={sidebarRef} className={cn("fixed h-full transition-all duration-300", collapsed ? "w-0" : "w-[240px]")}>
                <Sidebar collapsed={collapsed} onClose={() => setCollapsed(true)} />
            </div>

            {/* Main Content - Sidebar ka gap hata diya */}
            <div className={cn("transition-all duration-300", collapsed ? "ml-0" : "ml-[240px]")}>
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;