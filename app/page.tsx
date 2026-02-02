import Footer from './components/Footer';
import { HeroSection } from './components/Hero-section';
import { Navbar } from './components/Navbar';

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Navbar /> 
			<HeroSection />
			<Footer />
		</main>
	);
}
