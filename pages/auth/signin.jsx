import { Header } from '@/components/index';
import { getProviders, signIn } from 'next-auth/react';

const SignIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center flex-col min-h-screen  -mt-56 px-14 py-2 text-center">
        <img
          src="https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1641425447/coffmanjrp.io/2880px_Instagram_logo_73fba851e4.png"
          alt="Next Instagram"
          className="w-80"
        />
        <p className="font-xs italic">
          This is not a REAL app, its is built for educational puposes only.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                type="button"
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};

export default SignIn;
