import { NextPage } from "next";

type PageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

const Logout: PageWithLayout = () => {
  return <div>Logout</div>;
};

Logout.getLayout = (page) => <>{page}</>;

export default Logout;
