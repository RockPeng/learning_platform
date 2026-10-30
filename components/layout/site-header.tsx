import { Bell } from "lucide-react";
import { Navbar } from "@/components/nav/navbar";
import { Avatar } from "@/components/ui/avatar";

export function SiteHeader() {
  return (
    <header className="vertex-site-header">
      <Navbar active="none" className="vertex-site-header__nav" />
      <div className="vertex-site-header__actions">
        <button className="vertex-site-header__notification" type="button" aria-label="Notifications">
          <Bell size={20} aria-hidden="true" />
        </button>
        <Avatar initials="JD" label="Jordan Davis" />
      </div>
    </header>
  );
}
