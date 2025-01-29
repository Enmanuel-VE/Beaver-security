import RegisterForm from "../components/Forms/RegisterForm";

const SignIn = () => {
  return (
    <div data-theme="light">
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <RegisterForm />
        </div>

        <div className="hidden lg:flex h-full w-1/2 bg-[#f1f1f1] justify-center items-center">
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
