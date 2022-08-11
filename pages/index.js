import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

export default function Home({ newsResults, randomUsersResults }) {
  return (
    <div>
      <Head>
        <title>Twiter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://img.icons8.com/color/344/twitter--v1.png"
        />
      </Head>

      <main className="flex min-h-screen mx-auto">
        {/* sidebar */}

        <Sidebar></Sidebar>

        {/* feed */}

        <Feed />

        {/* widgets */}

        <Widgets
          newsResults={newsResults.articles}
          randomUsersResults={randomUsersResults.results}
        />
        {/* modal */}
      </main>
    </div>
  );
}

//https://saurav.tech/NewsAPI/top-headlines/business/us.json

export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  const randomUsersResults = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}
