import { useState } from "react";

export function SidebarItems({ routes, nested }) {
  const [isOpen, setIsOpen] = useState(false);

  return routes.map((item) => {
    if (item?.nested) {
      return (
        <>
          <div className="sidebar__item" onClick={() => setIsOpen(!isOpen)}>
            <div className="navlink">
              {item?.icon?.({ color: "#8D91A0" })}
              {item?.name}
            </div>
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
          {item?.icon?.({ color: "#8D91A0" })}
          {item?.name}
        </a>
      </div>
    );
  });
}
