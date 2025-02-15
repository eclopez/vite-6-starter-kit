interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
}

function Header(props: HeaderProps) {
  const { title, ...rest } = props;
  return (
    <header {...rest}>
      <h1>{title}</h1>
    </header>
  );
}

export { Header };
