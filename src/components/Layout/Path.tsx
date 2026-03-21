import { useLocation } from "@tanstack/react-router";
import { getPagePath } from "@/utils/getPagePath";

export const Path = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center gap-4 tracking-huge text-off-primary">
      <span>PATH: </span>
      <div className="flex items-center gap-1">
        {getPagePath(pathname)
          .split("/")
          .filter(Boolean)
          .map((segment) => (
            <>
              <span>/</span>
              <span>{segment}</span>
            </>
          ))}
      </div>
    </div>
  );
};
