import { FC } from "react";
import { Navbar } from "..";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
