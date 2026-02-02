import { FeaturesSection } from './components/Features';
import Footer from './components/Footer';
import { HeroSection } from './components/Hero-section';
import { Navbar } from './components/Navbar';
import { PartnersSection } from './components/Partners';
import { QueueSection } from './components/Queue';
import { WorkflowSection } from './components/Workflow';

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Navbar /> 
			<HeroSection />
			<PartnersSection />
			<FeaturesSection />
			<WorkflowSection />
			<QueueSection />
			<Footer />
		</main>
	);
}
