import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <h2>This page does not exist...</h2>
      <Link href="/">Return home</Link>
    </div>
  );
};

export default PageNotFound;
