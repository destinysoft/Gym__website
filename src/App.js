import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home/>} />
				<Route path= 'About' element={<About/>} />
				<Route path= 'Contact' element={<Contact/>} />
				<Route path= 'Gallery' element={<Gallery/>} />
				<Route path= 'Plans' element={<Plans/>} />
				<Route path= 'Trainers' element={<Trainers/>} />
				<Route path= '*' element={<NotFound/>} />
			</Routes>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
