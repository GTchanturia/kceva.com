<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Portfolio - Kceva | Our Digital Solutions & Success Stories</title>
	<meta name="description" content="Explore Kceva's portfolio of successful digital projects: AI-powered applications, cloud solutions, e-commerce platforms, and mobile apps that drive business growth." />
	<meta name="keywords" content="Kceva portfolio, digital solutions case studies, AI projects, cloud implementations, mobile apps, e-commerce platforms" />
</svelte:head>

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">
				Our Portfolio
			</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">
				Discover how we've helped businesses transform their operations with cutting-edge AI, cloud solutions, and innovative digital platforms.
			</p>
		</div>
	</section>
	
	<!-- Portfolio Grid -->
	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Project 1: AI-Powered E-commerce Platform -->
				<div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl shadow-lg">
					<div class="bg-gradient-to-r from-blue-500 to-cyan-600 w-full h-48 rounded-2xl mb-8 flex items-center justify-center">
						<div class="text-center text-white">
							<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
							</svg>
							<p class="text-lg font-semibold">AI-Powered E-commerce</p>
						</div>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">SmartCommerce Platform</h3>
					<p class="text-gray-600 mb-6">
						Built a comprehensive e-commerce platform with AI-powered product recommendations, inventory management, and predictive analytics for a retail chain with 50+ locations.
					</p>
					
					<div class="space-y-4 mb-6">
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
							<div class="flex flex-wrap gap-2">
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
								<span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Node.js</span>
								<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">AWS</span>
							</div>
						</div>
						
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Key Results:</h4>
							<ul class="space-y-1 text-gray-600">
								<li>• 300% increase in online sales</li>
								<li>• 45% improvement in conversion rate</li>
								<li>• 60% reduction in inventory costs</li>
								<li>• 25% increase in customer retention</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">E-commerce</span>
						<span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">AI Integration</span>
					</div>
				</div>
				
				<!-- Project 2: Healthcare Mobile App -->
				<div class="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl shadow-lg">
					<div class="bg-gradient-to-r from-emerald-500 to-teal-600 w-full h-48 rounded-2xl mb-8 flex items-center justify-center">
						<div class="text-center text-white">
							<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
							</svg>
							<p class="text-lg font-semibold">Healthcare Mobile App</p>
						</div>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">MediConnect App</h3>
					<p class="text-gray-600 mb-6">
						Developed a cross-platform mobile application for a healthcare network, enabling patients to book appointments, access medical records, and consult with doctors remotely.
					</p>
					
					<div class="space-y-4 mb-6">
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
							<div class="flex flex-wrap gap-2">
								<span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">React Native</span>
								<span class="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Firebase</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">WebRTC</span>
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">HIPAA Compliance</span>
							</div>
						</div>
						
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Key Results:</h4>
							<ul class="space-y-1 text-gray-600">
								<li>• 100,000+ active users</li>
								<li>• 4.8-star app store rating</li>
								<li>• 70% reduction in appointment no-shows</li>
								<li>• 50% increase in patient engagement</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">Mobile App</span>
						<span class="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">Healthcare</span>
					</div>
				</div>
				
				<!-- Project 3: AI Document Processing System -->
				<div class="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-3xl shadow-lg">
					<div class="bg-gradient-to-r from-violet-500 to-purple-600 w-full h-48 rounded-2xl mb-8 flex items-center justify-center">
						<div class="text-center text-white">
							<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
							</svg>
							<p class="text-lg font-semibold">AI Document Processing</p>
						</div>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">IntelliDoc System</h3>
					<p class="text-gray-600 mb-6">
						Created an AI-powered document processing system for a financial services company, automating contract analysis, data extraction, and compliance checking.
					</p>
					
					<div class="space-y-4 mb-6">
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
							<div class="flex flex-wrap gap-2">
								<span class="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm">Python</span>
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">OpenAI GPT</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">OCR</span>
								<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Docker</span>
							</div>
						</div>
						
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Key Results:</h4>
							<ul class="space-y-1 text-gray-600">
								<li>• 90% reduction in processing time</li>
								<li>• 99.5% accuracy in data extraction</li>
								<li>• $500K annual cost savings</li>
								<li>• 85% reduction in manual errors</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<span class="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-semibold">AI Automation</span>
						<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Document Processing</span>
					</div>
				</div>
				
				<!-- Project 4: Cloud Infrastructure Migration -->
				<div class="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl shadow-lg">
					<div class="bg-gradient-to-r from-orange-500 to-red-600 w-full h-48 rounded-2xl mb-8 flex items-center justify-center">
						<div class="text-center text-white">
							<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
							</svg>
							<p class="text-lg font-semibold">Cloud Migration</p>
						</div>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Enterprise Cloud Migration</h3>
					<p class="text-gray-600 mb-6">
						Migrated a manufacturing company's entire IT infrastructure to AWS, implementing microservices architecture, CI/CD pipelines, and automated scaling.
					</p>
					
					<div class="space-y-4 mb-6">
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
							<div class="flex flex-wrap gap-2">
								<span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">AWS</span>
								<span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
								<span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Terraform</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Jenkins</span>
							</div>
						</div>
						
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Key Results:</h4>
							<ul class="space-y-1 text-gray-600">
								<li>• 60% reduction in infrastructure costs</li>
								<li>• 99.9% uptime achievement</li>
								<li>• 80% faster deployment cycles</li>
								<li>• Zero-downtime migration</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Cloud Migration</span>
						<span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">DevOps</span>
					</div>
				</div>
				
				<!-- Project 5: SaaS Analytics Platform -->
				<div class="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-3xl shadow-lg">
					<div class="bg-gradient-to-r from-pink-500 to-rose-600 w-full h-48 rounded-2xl mb-8 flex items-center justify-center">
						<div class="text-center text-white">
							<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
							</svg>
							<p class="text-lg font-semibold">SaaS Analytics Platform</p>
						</div>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">DataInsights Pro</h3>
					<p class="text-gray-600 mb-6">
						Developed a comprehensive SaaS analytics platform from MVP to full product, serving 1000+ businesses with real-time data visualization and predictive analytics.
					</p>
					
					<div class="space-y-4 mb-6">
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
							<div class="flex flex-wrap gap-2">
								<span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">SvelteKit</span>
								<span class="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">D3.js</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Stripe</span>
							</div>
						</div>
						
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Key Results:</h4>
							<ul class="space-y-1 text-gray-600">
								<li>• 1000+ active business users</li>
								<li>• $2M ARR within 18 months</li>
								<li>• 95% customer satisfaction</li>
								<li>• Series A funding secured</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">SaaS Platform</span>
						<span class="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-semibold">Analytics</span>
					</div>
				</div>
				
				<!-- Project 6: AI Chatbot System -->
				<div class="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl shadow-lg">
					<div class="bg-gradient-to-r from-indigo-500 to-blue-600 w-full h-48 rounded-2xl mb-8 flex items-center justify-center">
						<div class="text-center text-white">
							<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
							</svg>
							<p class="text-lg font-semibold">AI Customer Support</p>
						</div>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">SmartSupport AI</h3>
					<p class="text-gray-600 mb-6">
						Built an intelligent customer support system with custom-trained AI models for a telecommunications company, handling 10,000+ daily customer interactions.
					</p>
					
					<div class="space-y-4 mb-6">
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
							<div class="flex flex-wrap gap-2">
								<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Custom GPT</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">NLP</span>
								<span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">WebSocket</span>
								<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Redis</span>
							</div>
						</div>
						
						<div>
							<h4 class="font-semibold text-gray-900 mb-2">Key Results:</h4>
							<ul class="space-y-1 text-gray-600">
								<li>• 85% query resolution rate</li>
								<li>• 40% reduction in support costs</li>
								<li>• 24/7 availability</li>
								<li>• 92% customer satisfaction</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">AI Chatbot</span>
						<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Customer Support</span>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	
	<!-- Stats Section -->
	<section class="py-20 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Our Focus Areas</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					We specialize in delivering high-quality solutions across key technology domains.
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
					<div class="text-4xl mb-4">🤖</div>
					<div class="text-gray-900 font-semibold">AI Integration</div>
					<div class="text-gray-600 text-sm mt-2">Smart automation solutions</div>
				</div>
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
					<div class="text-4xl mb-4">☁️</div>
					<div class="text-gray-900 font-semibold">Cloud Solutions</div>
					<div class="text-gray-600 text-sm mt-2">Scalable infrastructure</div>
				</div>
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
					<div class="text-4xl mb-4">💻</div>
					<div class="text-gray-900 font-semibold">Web Development</div>
					<div class="text-gray-600 text-sm mt-2">Modern applications</div>
				</div>
				<div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
					<div class="text-4xl mb-4">📱</div>
					<div class="text-gray-900 font-semibold">Mobile Apps</div>
					<div class="text-gray-600 text-sm mt-2">Cross-platform solutions</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Industries Section -->
	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs.
				</p>
			</div>
			
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
				<div class="text-center">
					<div class="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
						</svg>
					</div>
					<h3 class="font-semibold text-gray-900">E-commerce</h3>
				</div>
				
				<div class="text-center">
					<div class="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
						</svg>
					</div>
					<h3 class="font-semibold text-gray-900">Healthcare</h3>
				</div>
				
				<div class="text-center">
					<div class="bg-violet-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
						</svg>
					</div>
					<h3 class="font-semibold text-gray-900">FinTech</h3>
				</div>
				
				<div class="text-center">
					<div class="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
						</svg>
					</div>
					<h3 class="font-semibold text-gray-900">Manufacturing</h3>
				</div>
				
				<div class="text-center">
					<div class="bg-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
						</svg>
					</div>
					<h3 class="font-semibold text-gray-900">Education</h3>
				</div>
				
				<div class="text-center">
					<div class="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
						<svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
						</svg>
					</div>
					<h3 class="font-semibold text-gray-900">SaaS</h3>
				</div>
			</div>
		</div>
	</section>
	
	<!-- CTA Section -->
	<section class="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Ready to Join Our Success Stories?
			</h2>
			<p class="text-xl text-gray-300 mb-8">
				Let's discuss your project and create a solution that drives measurable results for your business.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/quote" 
					class="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
					Start Your Project
				</a>
				<a href="/contact" 
					class="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10">
					Schedule Consultation
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />