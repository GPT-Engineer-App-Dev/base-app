import { Home, FileText } from "lucide-react";
import Index from "./pages/Index.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Placeholder",
    to: "/placeholder",
    icon: <FileText className="h-4 w-4" />,
    page: <PlaceholderPage />,
  },
];