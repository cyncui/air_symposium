import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-4 sticky top-0 bg-background z-50">
      <nav className="container mx-auto">
        <ul className="flex gap-8 justify-end">
          <LinkItem href="/schedule">Schedule</LinkItem>
          <LinkItem href="/schedule">Schedule</LinkItem>
        </ul>
      </nav>
    </header>
  );
};

const LinkItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link href={href} className="relative">
        {children}
        <div className="absolute right-0 bg-gray-200 w-40 h-10 border border-background" />
      </Link>
    </li>
  );
};
