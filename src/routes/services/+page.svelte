<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Our Services - NovaForge Digital | Complete Digital Solutions</title>
	<meta name="description" content="Explore NovaForge Digital's comprehensive services: web development, mobile apps, AI tools, UI/UX design, SEO, and digital strategy consulting." />
</svelte:head>

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">
				Complete Digital Services
			</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">
				From concept to launch, we provide end-to-end digital solutions that transform your business and drive sustainable growth.
			</p>
		</div>
	</section>
	
	<!-- Services Grid -->
	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Website Development -->
				<div class="bg-gradient-to-br from-indigo-50 to-purple-50 p-12 rounded-3xl">
					<div class="bg-gradient-to-r from-indigo-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
						</svg>
					</div>
					<h2 class="text-3xl font-bold text-gray-900 mb-6">Website Development</h2>
					<p class="text-gray-600 mb-8 text-lg">
						Custom websites built with cutting-edge technologies. Fast, secure, mobile-responsive, and optimized for search engines and conversions.
					</p>
					
					<div class="space-y-6 mb-8">
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Technologies We Use:</h3>
							<div class="flex flex-wrap gap-2">
								<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React</span>
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">SvelteKit</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">WordPress</span>
								<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">HTML/CSS/JS</span>
								<span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">eCommerce</span>
							</div>
						</div>
						
						<div>
							<h3 class="font-bold text-gray-900 mb-3">What's Included:</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Responsive Design</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> SEO Optimization</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Performance Optimization</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Security Implementation</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Content Management</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Analytics Integration</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<a href="/quote" class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
							Get Quote
						</a>
						<a href="/portfolio" class="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all">
							View Examples
						</a>
					</div>
				</div>
				
				<!-- Mobile App Development -->
				<div class="bg-gradient-to-br from-cyan-50 to-blue-50 p-12 rounded-3xl">
					<div class="bg-gradient-to-r from-cyan-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
						</svg>
					</div>
					<h2 class="text-3xl font-bold text-gray-900 mb-6">Mobile App Development</h2>
					<p class="text-gray-600 mb-8 text-lg">
						Native iOS and Android apps, plus cross-platform solutions. User-friendly interfaces with powerful functionality and seamless performance.
					</p>
					
					<div class="space-y-6 mb-8">
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Platforms & Technologies:</h3>
							<div class="flex flex-wrap gap-2">
								<span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">iOS Native</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Android Native</span>
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Flutter</span>
								<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">React Native</span>
							</div>
						</div>
						
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Features We Implement:</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Push Notifications</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> In-App Purchases</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Social Media Integration</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Offline Functionality</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Analytics & Tracking</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> App Store Optimization</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<a href="/quote" class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
							Get Quote
						</a>
						<a href="/portfolio" class="border-2 border-cyan-600 text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-all">
							View Apps
						</a>
					</div>
				</div>
				
				<!-- AI-Powered Tools -->
				<div class="bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-3xl">
					<div class="bg-gradient-to-r from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
						</svg>
					</div>
					<h2 class="text-3xl font-bold text-gray-900 mb-6">AI-Powered Tools</h2>
					<p class="text-gray-600 mb-8 text-lg">
						Custom AI solutions that automate processes, enhance user experiences, and provide intelligent insights for your business operations.
					</p>
					
					<div class="space-y-6 mb-8">
						<div>
							<h3 class="font-bold text-gray-900 mb-3">AI Solutions We Build:</h3>
							<div class="flex flex-wrap gap-2">
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Chatbots</span>
								<span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Automation</span>
								<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Image Generation</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Data Analysis</span>
							</div>
						</div>
						
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Capabilities:</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Natural Language Processing</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Machine Learning Models</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Computer Vision</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Predictive Analytics</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Process Automation</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Custom AI Integrations</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<a href="/quote" class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
							Get Quote
						</a>
						<a href="/tools" class="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all">
							Try Free Tools
						</a>
					</div>
				</div>
				
				<!-- UI/UX Design -->
				<div class="bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl">
					<div class="bg-gradient-to-r from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
						</svg>
					</div>
					<h2 class="text-3xl font-bold text-gray-900 mb-6">UI/UX Design</h2>
					<p class="text-gray-600 mb-8 text-lg">
						Beautiful, intuitive designs that convert visitors into customers. From wireframes to high-fidelity prototypes using modern design principles.
					</p>
					
					<div class="space-y-6 mb-8">
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Design Services:</h3>
							<div class="flex flex-wrap gap-2">
								<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">User Research</span>
								<span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Wireframing</span>
								<span class="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Prototyping</span>
								<span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Design Systems</span>
							</div>
						</div>
						
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Our Process:</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> User Journey Mapping</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Competitive Analysis</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Information Architecture</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Visual Design</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Usability Testing</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Design Handoff</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<a href="/quote" class="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
							Get Quote
						</a>
						<a href="/portfolio" class="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all">
							View Designs
						</a>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	
	<!-- Additional Services -->
	<section class="py-20 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-4xl font-bold text-center text-gray-900 mb-16">Additional Services</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<!-- SEO & Growth -->
				<div class="bg-white p-8 rounded-2xl shadow-lg">
					<div class="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">SEO & Growth Hacking</h3>
					<p class="text-gray-600 mb-6">Data-driven strategies to boost your online visibility, drive organic traffic, and accelerate business growth through proven SEO techniques and growth hacking tactics.</p>
					<ul class="space-y-2 text-gray-600 mb-6">
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Technical SEO Audits</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Keyword Research & Strategy</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Content Optimization</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Link Building Campaigns</li>
					</ul>
					<a href="/quote" class="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
						Learn More →
					</a>
				</div>
				
				<!-- Digital Strategy -->
				<div class="bg-white p-8 rounded-2xl shadow-lg">
					<div class="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Digital Strategy Consulting</h3>
					<p class="text-gray-600 mb-6">Comprehensive digital transformation consulting to align technology with your business goals, identify market opportunities, and optimize your digital presence for maximum ROI.</p>
					<ul class="space-y-2 text-gray-600 mb-6">
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Digital Transformation Planning</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Technology Stack Optimization</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Market Analysis & Research</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> ROI Measurement & Optimization</li>
					</ul>
					<a href="/quote" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
						Learn More →
					</a>
				</div>
			</div>
		</div>
	</section>
	
	<!-- CTA Section -->
	<section class="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Ready to Transform Your Business?
			</h2>
			<p class="text-xl text-gray-300 mb-8">
				Let's discuss your project and create a custom solution that drives real results.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/quote" 
					class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
					Get Free Consultation
				</a>
				<a href="/contact" 
					class="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10">
					Contact Us
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />