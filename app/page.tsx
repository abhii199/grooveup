import { FeaturesSection } from './components/Features';
import Footer from './components/Footer';
import { HeroSection } from './components/Hero-section';
import { Navbar } from './components/Navbar';
import { PartnersSection } from './components/Partners';

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Navbar /> 
			<HeroSection />
			<PartnersSection />
			<FeaturesSection />
			<Footer />
		</main>
	);
}
