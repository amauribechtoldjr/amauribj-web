# Project Guidelines

## Design System

Read `DESIGN.md` for the full design system specification before creating or modifying any UI components. Key principles: "The Terminal Sovereign" aesthetic — high-contrast dark theme, zero border-radius, no soft grays, no rounded icons, instant/step animations only.

## Code Style

- Never use inline prop type definitions on components. Always define a dedicated `type` for props using the pattern `type {ComponentName}Props = { ... }` and reference it in the function signature. Example:
  ```tsx
  type NavLinkProps = {
    href: string;
    children: React.ReactNode;
  };

  export const NavLink = ({ href, children }: NavLinkProps) => { ... };
  ```
