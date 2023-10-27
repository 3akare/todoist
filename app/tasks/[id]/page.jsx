import PageHolder from "./PageHolder";

const Page = ({ params: { id } }) => {
  return <PageHolder id={id} />;
};

export default Page;
