import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaUsers, FaBox, FaCog } from "react-icons/fa";
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
                "fixed z-[100] flex h-full flex-col overflow-hidden border-r border-slate-300 bg-white transition-all duration-300 dark:border-slate-700 dark:bg-slate-900",
                collapsed ? "w-0 md:w-[0px] -translate-x-full" : "w-[240px] translate-x-0"
            )}
        >
            {/* ✅ Sidebar Header (Logo) - LEFT ALIGNED */}
            <div className="flex items-center justify-start pl-4 py-4">
                <svg
                    className="w-8 h-8 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 2a4 4 0 00-4 4v1H5a3 3 0 00-3 3v5a3 3 0 003 3h10a3 3 0 003-3v-5a3 3 0 00-3-3h-1V6a4 4 0 00-4-4zM8 6a2 2 0 014 0v1H8V6z" />
                </svg>
                {!collapsed && (
                    <span className="text-xl font-semibold text-slate-900 dark:text-slate-50 ml-2">
                        UCL CSC
                    </span>
                )}
            </div>

            {/* Sidebar Links */}
            <div className="flex w-full flex-col gap-y-4 overflow-y-auto p-3">
                {sidebarLinks.map((group) => (
                    <nav key={group.title} className="sidebar-group">
                        {!collapsed && <p className="sidebar-group-title">{group.title}</p>}
                        {group.links.map((link) => (
                            <NavLink
                                key={link.label}
                                to={`/dashboard/${link.path}`}
                                className={({ isActive }) =>
                                    cn(
                                        "sidebar-item flex items-center gap-x-2 px-3 py-2 rounded-md transition-colors",
                                        isActive
                                            ? "bg-blue-500 text-white"
                                            : "text-slate-700 hover:bg-gray-200 dark:text-slate-300 dark:hover:bg-gray-700"
                                    )
                                }
                                onClick={() => {
                                    if (!window.matchMedia("(min-width: 768px)").matches) {
                                        onClose();
                                    }
                                }}
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
    onClose: PropTypes.func,
};