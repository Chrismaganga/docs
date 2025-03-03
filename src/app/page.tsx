import Link from "next/link";

type HomePageProps = object;

const HomePage = ({}: HomePageProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click{" "}
      <Link href="/documents/1">
        {" "}
       <span className="text-blue-800 underline"> &nbsp;here&nbsp;</span>
      </Link>
    </div>
  );
};

export default HomePage;
