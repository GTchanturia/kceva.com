<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>About Kceva - Expert Digital Solutions Team | AI & Cloud Specialists</title>
	<meta name="description" content="Meet the Kceva team. Expert developers, AI specialists, and cloud architects passionate about delivering cutting-edge digital solutions for businesses worldwide." />
	<meta name="keywords" content="about Kceva, digital solutions team, AI experts, cloud architects, software developers" />
</svelte:head>

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h1 class="text-5xl md:text-6xl font-bold mb-6">
					About Kceva
				</h1>
				<p class="text-xl text-gray-300 max-w-3xl mx-auto">
					We're a team of passionate technologists, dedicated to transforming businesses through cutting-edge AI, cloud solutions, and innovative digital technologies.
				</p>
			</div>
		</div>
	</section>
	
	<!-- Mission & Vision -->
	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<div>
					<h2 class="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
					<p class="text-lg text-gray-600 mb-6">
						To empower businesses of all sizes with cutting-edge digital solutions that drive innovation, enhance efficiency, and create sustainable competitive advantages in the rapidly evolving digital landscape.
					</p>
					<p class="text-lg text-gray-600 mb-8">
						We believe that every business deserves access to world-class AI, cloud, and digital technologies. That's why we've built a comprehensive suite of services that can scale from startup MVPs to enterprise-grade solutions.
					</p>
					
					<div class="space-y-4">
						<div class="flex items-center">
							<div class="bg-blue-100 p-2 rounded-lg mr-4">
								<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
								</svg>
							</div>
							<span class="text-gray-700 font-semibold">Innovation-First Approach</span>
						</div>
						<div class="flex items-center">
							<div class="bg-emerald-100 p-2 rounded-lg mr-4">
								<svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
								</svg>
							</div>
							<span class="text-gray-700 font-semibold">Client-Centric Solutions</span>
						</div>
						<div class="flex items-center">
							<div class="bg-violet-100 p-2 rounded-lg mr-4">
								<svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
								</svg>
							</div>
							<span class="text-gray-700 font-semibold">Quality & Security Guaranteed</span>
						</div>
					</div>
				</div>
				
				<div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl">
					<h3 class="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
					<p class="text-gray-600 mb-4">
						Founded in 2021, Kceva emerged from a vision to democratize access to cutting-edge digital technologies. Our founders, experienced in AI research and enterprise software development, recognized that businesses were struggling to navigate the complex landscape of AI, cloud computing, and digital transformation.
					</p>
					<p class="text-gray-600 mb-4">
						We set out to bridge this gap by building a team of specialists who could deliver enterprise-level AI and cloud solutions with the agility and personal attention of a boutique consultancy.
					</p>
					<p class="text-gray-600">
						Today, we've helped over 100 businesses transform their operations, from startups launching AI-powered products to established enterprises implementing comprehensive digital transformation strategies.
					</p>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Team Section -->
	<section class="py-20 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					Our diverse team of specialists brings together decades of experience in AI, cloud architecture, software development, and digital strategy.
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Team Member 1 -->
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center">
					<div class="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
						TL
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Tech Lead</h3>
					<p class="text-blue-600 font-semibold mb-4">AI & Cloud Architect</p>
					<p class="text-gray-600 mb-4">
						Expert in machine learning and AI systems with extensive experience in enterprise solutions, specializing in custom model development and cloud deployment.
					</p>
				</div>
				
				<!-- Team Member 2 -->
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center">
					<div class="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
						CA
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Cloud Architect</h3>
					<p class="text-emerald-600 font-semibold mb-4">Infrastructure Specialist</p>
					<p class="text-gray-600 mb-4">
						Certified cloud solutions architect with extensive experience in scalable infrastructure design, DevOps practices, and enterprise system optimization.
					</p>
				</div>
				
				<!-- Team Member 3 -->
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center">
					<div class="w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
						FD
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Full-Stack Developer</h3>
					<p class="text-violet-600 font-semibold mb-4">Web & Mobile Specialist</p>
					<p class="text-gray-600 mb-4">
						Expert in modern web technologies including React, SvelteKit, and Node.js with extensive experience in building scalable applications and e-commerce platforms.
					</p>
				</div>
				
		</div>
	</section>
	
	<!-- Values Section -->
	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					These principles guide everything we do and shape how we work with our clients and each other.
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<div class="text-center">
					<div class="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
					<p class="text-gray-600">We stay at the forefront of AI and cloud technologies to deliver cutting-edge solutions that give our clients a competitive advantage.</p>
				</div>
				
				<div class="text-center">
					<div class="bg-gradient-to-r from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
					<p class="text-gray-600">Every solution undergoes rigorous testing and quality assurance to ensure exceptional performance, security, and user experience.</p>
				</div>
				
				<div class="text-center">
					<div class="bg-gradient-to-r from-violet-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-4">Partnership</h3>
					<p class="text-gray-600">We build long-term relationships with our clients, becoming trusted partners in their digital transformation and growth journey.</p>
				</div>
				
				<div class="text-center">
					<div class="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
					<p class="text-gray-600">Clear communication, honest pricing, and regular updates ensure our clients are always informed and confident in our progress.</p>
				</div>
			</div>
		</div>
	</section>
	
	<!-- CTA Section -->
	<section class="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Ready to Work with Our Team?
			</h2>
			<p class="text-xl text-gray-300 mb-8">
				Let's discuss your project and see how our expertise can help transform your digital vision into reality.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/quote" 
					class="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
					Get Free Consultation
				</a>
				<a href="/contact" 
					class="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10">
					Contact Our Team
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />