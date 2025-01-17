import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div data-theme="light">
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <LoginForm />
        </div>

        <div className="hidden lg:flex h-full w-1/2 bg-gray-200 justify-center items-center">
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
