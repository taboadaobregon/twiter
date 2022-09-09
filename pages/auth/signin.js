import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-40 space-x-4">
      <img
        className="hidden object-cover md:w-44 md:h-80 rotate-6  md:inline-flex"
        src="https://i2.wp.com/devdactic.com/wp-content/uploads/2021/01/twitter-ui-with-ionic.gif?resize=463%2C900&ssl=1"
        alt="img"
      ></img>

      <div className="">
        {Object.values(providers).map((key,provider) => (
          <div key={key} className="">
            <img
              className="w-36 object-cover"
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
              alt="twitter logo"
            />
              <p className="text-center text-sm italic my-10">
              This app is created for learning purposes
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
