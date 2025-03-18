import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaUsers, FaBox, FaCog } from "react-icons/fa"; 
import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-dark.svg";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ collapsed, onClose }, ref) => {
    const sidebarLinks = [
        {
            title: "Dashboard",
            links: [
                { label: "Dashboard", path: "/dashboard", icon: FaChartBar },
                { label: "Analytics", path: "analytics", icon: FaChartBar },
                { label: "Reports", path: "reports", icon: FaChartBar },
            ],
        },
        {
            title: "Customers",
            links: [
                { label: "All Customers", path: "customers", icon: FaUsers },
                { label: "New Customer", path: "new-customer", icon: FaUsers },
                { label: "Verified Customers", path: "verified-customers", icon: FaUsers },
            ],
        },
        {
            title: "Products",
            links: [
                { label: "All Products", path: "products", icon: FaBox },
                { label: "New Product", path: "new-product", icon: FaBox },
                { label: "Inventory", path: "inventory", icon: FaBox },
            ],
        },
        {
            title: "Settings",
            links: [{ label: "Settings", path: "settings", icon: FaCog }],
        },
    ];

    return (
        <aside
            ref={ref}
            className={cn(
                "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white transition-all dark:border-slate-700 dark:bg-slate-900",
                collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
                collapsed ? "max-md:-left-full" : "max-md:left-0",
            )}
        >
            <div className="flex gap-x-3 p-3">
                <img src={logoLight} alt="Logoipsum" className="dark:hidden" />
                <img src={logoDark} alt="Logoipsum" className="hidden dark:block" />
                {!collapsed && <p className="text-lg font-medium text-slate-900 dark:text-slate-50">Logoipsum</p>}
            </div>

            <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3">
                {sidebarLinks.map((group) => (
                    <nav key={group.title} className={cn("sidebar-group", collapsed && "md:items-center")}>
                        <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{group.title}</p>
                        {group.links.map((link) => (
                            <NavLink
                                key={link.label}
                                to={`/dashboard/${link.path}`}
                                className={({ isActive }) =>
                                    cn(
                                        "sidebar-item flex items-center gap-x-2 px-3 py-2 rounded-md transition-colors",
                                        isActive
                                            ? "bg-blue-500 text-white"
                                            : "text-slate-700 hover:bg-gray-200 dark:text-slate-300 dark:hover:bg-gray-700",
                                        collapsed && "md:w-[45px]"
                                    )
                                }
                                onClick={() => onClose()} // ✅ Close sidebar on mobile click
                            >
                                <link.icon size={22} className="flex-shrink-0" />
                                {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                            </NavLink>
                        ))}
                    </nav>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
    onClose: PropTypes.func, // ✅ Added function prop
};
