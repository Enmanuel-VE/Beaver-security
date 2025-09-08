import { useEffect } from "react";
import {
	BrowserRouter,
	Route,
	Routes,
	Navigate,
	useNavigate,
	useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Safe from "./pages/Safe";
import SignIn from "./pages/SignIn";
import PasswordsGenerator from "./pages/PasswordsGenerator";
import Config from "./pages/Config";
import Layout from "./components/Layouts";
import CreateItem from "./pages/CreateItem";
import ItemDetail from "./pages/ItemDetail";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AuthHandler />
				<Routes>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/" element={<Layout />}>
						<Route path="/safe" element={<Safe />} />
						<Route path="/safe/:itemId" element={<ItemDetail />} />

						<Route
							path="/safe/create-item"
							element={<CreateItem />}
						/>
						<Route path="/config" element={<Config />} />
						<Route
							path="/passwords-generator"
							element={<PasswordsGenerator />}
						/>
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/not-found" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/not-found" />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
};
const paths = ["/login", "/sign-in"];

const AuthHandler = () => {
	const navigate = useNavigate();

	const { pathname: currentPage } = useLocation();

	const session = JSON.parse(
		localStorage.getItem("sb-tflmyuxuzdttwclohqmg-auth-token")
	);

	useEffect(() => {
		if (currentPage !== "/not-found") {
			if (!session && !paths.includes(currentPage)) {
				navigate("/login");
				return;
			}
			if (session && paths.includes(currentPage)) {
				navigate("/safe");
				return;
			}
		}
	}, [navigate, currentPage, session]);
};

export default App;
