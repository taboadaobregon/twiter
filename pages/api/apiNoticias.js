// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const getServerNoticias = async () => {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/business/us.json"
  ).then((res) => res.json);

  return {
    props:{
        newsResults,
    }
  }
};

export default getServerNoticias;
