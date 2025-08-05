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
						AK
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Arjun Kumar</h3>
					<p class="text-blue-600 font-semibold mb-4">CEO & AI Architect</p>
					<p class="text-gray-600 mb-4">
						PhD in Machine Learning with 10+ years in AI research and enterprise solutions. Former lead AI engineer at Google, specializing in custom model development and deployment.
					</p>
					<div class="flex justify-center space-x-3">
						<a href="#" class="text-gray-400 hover:text-blue-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
							</svg>
						</a>
						<a href="#" class="text-gray-400 hover:text-blue-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</a>
					</div>
				</div>
				
				<!-- Team Member 2 -->
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center">
					<div class="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
						SP
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Sarah Patel</h3>
					<p class="text-emerald-600 font-semibold mb-4">CTO & Cloud Architect</p>
					<p class="text-gray-600 mb-4">
						AWS Certified Solutions Architect with 12+ years in cloud infrastructure. Former principal engineer at Microsoft Azure, expert in scalable system design and DevOps.
					</p>
					<div class="flex justify-center space-x-3">
						<a href="#" class="text-gray-400 hover:text-emerald-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
							</svg>
						</a>
						<a href="#" class="text-gray-400 hover:text-emerald-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</a>
					</div>
				</div>
				
				<!-- Team Member 3 -->
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center">
					<div class="w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
						MJ
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Michael Johnson</h3>
					<p class="text-violet-600 font-semibold mb-4">Lead Full-Stack Developer</p>
					<p class="text-gray-600 mb-4">
						Expert in React, SvelteKit, and Node.js with 8+ years building scalable web applications. Specializes in e-commerce platforms and SaaS development.
					</p>
					<div class="flex justify-center space-x-3">
						<a href="#" class="text-gray-400 hover:text-violet-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
							</svg>
						</a>
						<a href="#" class="text-gray-400 hover:text-violet-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</a>
					</div>
				</div>
				
				<!-- Team Member 4 -->
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center">
					<div class="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
						LW
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Lisa Wang</h3>
					<p class="text-orange-600 font-semibold mb-4">Mobile Development Lead</p>
					<p class="text-gray-600 mb-4">
						React Native and Flutter expert with 7+ years building cross-platform mobile applications. Former mobile architect at Uber, specializing in high-performance apps.
					</p>
					<div class="flex justify-center space-x-3">
						<a href="#" class="text-gray-400 hover:text-orange-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
							</svg>
						</a>
						<a href="#" class="text-gray-400 hover:text-orange-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</a>
					</div>
				</div>
				
				<!-- Team Member 5 -->
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center">
					<div class="w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
						DR
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">David Rodriguez</h3>
					<p class="text-pink-600 font-semibold mb-4">UI/UX Design Director</p>
					<p class="text-gray-600 mb-4">
						Design systems expert with 9+ years creating user-centered digital experiences. Former design lead at Airbnb, specializing in conversion optimization and accessibility.
					</p>
					<div class="flex justify-center space-x-3">
						<a href="#" class="text-gray-400 hover:text-pink-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
							</svg>
						</a>
						<a href="#" class="text-gray-400 hover:text-pink-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
							</svg>
						</a>
					</div>
				</div>
				
				<!-- Team Member 6 -->
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center">
					<div class="w-24 h-24 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
						ET
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-2">Emily Thompson</h3>
					<p class="text-indigo-600 font-semibold mb-4">Digital Strategy Consultant</p>
					<p class="text-gray-600 mb-4">
						MBA with 11+ years in digital transformation consulting. Former strategy director at McKinsey, expert in AI adoption and business process optimization.
					</p>
					<div class="flex justify-center space-x-3">
						<a href="#" class="text-gray-400 hover:text-indigo-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
							</svg>
						</a>
						<a href="#" class="text-gray-400 hover:text-indigo-600 transition-colors">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
							</svg>
						</a>
					</div>
				</div>
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