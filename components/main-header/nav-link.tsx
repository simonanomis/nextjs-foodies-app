"use client";

import Link from "next/link";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export interface NavLinkProps {
  children: any;
  href: string;
}
export default function NavLink(props: NavLinkProps) {
  const { children, href } = props;
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
