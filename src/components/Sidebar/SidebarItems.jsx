import { useState } from "react";

export function SidebarItems({ routes, nested }) {
  const [isOpen, setIsOpen] = useState(false);
  return routes.map((item) => {
    if (item?.nested) {
      return (
        <>
          <div className="sidebar__item" onClick={() => setIsOpen(!isOpen)}>
            {item?.name}
          </div>
          {isOpen && (
            <SidebarItems nested={item?.nested} routes={item?.route} />
          )}
        </>
      );
    }
    return (
      <div className="sidebar__item" style={{ padding: nested && `0 15px` }}>
        <a className="navlink" href={item?.route}>
          {item?.name}
        </a>
      </div>
    );
  });
}
