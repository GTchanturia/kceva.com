<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Our Services - Kceva | Complete Digital Solutions & AI Integration</title>
	<meta name="description" content="Explore Kceva's comprehensive digital services: AI integration, custom model training, cloud solutions, web & mobile development, e-commerce platforms, and digital strategy consulting." />
	<meta name="keywords" content="AI integration, custom AI models, cloud solutions, web development, mobile apps, e-commerce, DevOps, automation tools, API development, SaaS development" />
</svelte:head>

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">
				Complete Digital Solutions
			</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">
				From AI-powered applications to scalable cloud infrastructure, we provide end-to-end digital solutions that transform your business and accelerate growth.
			</p>
		</div>
	</section>
	
	<!-- Services Grid -->
	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				
				<!-- Website Development & Design -->
				<div id="website-development" class="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-3xl">
					<div class="bg-gradient-to-r from-blue-500 to-cyan-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
						</svg>
					</div>
					<h2 class="text-3xl font-bold text-gray-900 mb-6">Website Development & Design</h2>
					<p class="text-gray-600 mb-8 text-lg">
						Fast, fully responsive, SEO-optimized websites tailored to your brand and business needs. Built with modern technologies for optimal performance and user experience.
					</p>
					
					<div class="space-y-6 mb-8">
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Technologies We Use:</h3>
							<div class="flex flex-wrap gap-2">
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SvelteKit</span>
								<span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">React</span>
								<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Next.js</span>
								<span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">WordPress</span>
								<span class="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
							</div>
						</div>
						
						<div>
							<h3 class="font-bold text-gray-900 mb-3">What's Included:</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Custom Responsive Design</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> SEO Optimization</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Performance Optimization</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Security Implementation</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Content Management System</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Analytics Integration</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<a href="/quote" class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
							Get Quote
						</a>
						<a href="/portfolio" class="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
							View Examples
						</a>
					</div>
				</div>
				
				<!-- Web & Mobile App Development -->
				<div id="mobile-development" class="bg-gradient-to-br from-indigo-50 to-purple-50 p-12 rounded-3xl">
					<div class="bg-gradient-to-r from-indigo-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
						</svg>
					</div>
					<h2 class="text-3xl font-bold text-gray-900 mb-6">Web & Mobile App Development</h2>
					<p class="text-gray-600 mb-8 text-lg">
						High-quality native and cross-platform applications for iOS and Android using React Native, Flutter, and modern web technologies.
					</p>
					
					<div class="space-y-6 mb-8">
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Platforms & Technologies:</h3>
							<div class="flex flex-wrap gap-2">
								<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React Native</span>
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Flutter</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">iOS Native</span>
								<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Android Native</span>
								<span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Progressive Web Apps</span>
							</div>
						</div>
						
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Features We Implement:</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Push Notifications</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> In-App Purchases</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Social Media Integration</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Offline Functionality</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Real-time Synchronization</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> App Store Optimization</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<a href="/quote" class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
							Get Quote
						</a>
						<a href="/portfolio" class="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all">
							View Apps
						</a>
					</div>
				</div>
				
				<!-- AI Integration for Businesses -->
				<div id="ai-integration" class="bg-gradient-to-br from-emerald-50 to-teal-50 p-12 rounded-3xl">
					<div class="bg-gradient-to-r from-emerald-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
						</svg>
					</div>
					<h2 class="text-3xl font-bold text-gray-900 mb-6">AI Integration for Businesses</h2>
					<p class="text-gray-600 mb-8 text-lg">
						Embed AI technologies into your workflows with intelligent chatbots, predictive analytics, and process automation that enhance efficiency and decision-making.
					</p>
					
					<div class="space-y-6 mb-8">
						<div>
							<h3 class="font-bold text-gray-900 mb-3">AI Solutions We Implement:</h3>
							<div class="flex flex-wrap gap-2">
								<span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Chatbots</span>
								<span class="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Predictive Analytics</span>
								<span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Process Automation</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Document Processing</span>
								<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Recommendation Systems</span>
							</div>
						</div>
						
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Capabilities:</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Natural Language Processing</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Computer Vision</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Workflow Automation</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Data Analysis & Insights</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Real-time Decision Making</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Custom AI Integrations</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<a href="/quote" class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
							Get Quote
						</a>
						<a href="/contact" class="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all">
							Book Consultation
						</a>
					</div>
				</div>
				
				<!-- Custom AI Model Training -->
				<div id="ai-training" class="bg-gradient-to-br from-orange-50 to-red-50 p-12 rounded-3xl">
					<div class="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
						</svg>
					</div>
					<h2 class="text-3xl font-bold text-gray-900 mb-6">Custom AI Model Training</h2>
					<p class="text-gray-600 mb-8 text-lg">
						Training and deploying AI models like Gemini, GPT, and LLaMA customized to your specific data and use cases for maximum accuracy and relevance.
					</p>
					
					<div class="space-y-6 mb-8">
						<div>
							<h3 class="font-bold text-gray-900 mb-3">AI Models We Work With:</h3>
							<div class="flex flex-wrap gap-2">
								<span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">GPT Models</span>
								<span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Google Gemini</span>
								<span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">LLaMA</span>
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Claude</span>
								<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Custom Models</span>
							</div>
						</div>
						
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Our Process:</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Data Collection & Preprocessing</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Model Architecture Design</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Training & Fine-tuning</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Performance Optimization</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Deployment & Monitoring</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Continuous Improvement</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<a href="/quote" class="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
							Get Quote
						</a>
						<a href="/contact" class="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all">
							Discuss Project
						</a>
					</div>
				</div>
				
				<!-- Cloud & DevOps Solutions -->
				<div id="cloud-devops" class="bg-gradient-to-br from-violet-50 to-purple-50 p-12 rounded-3xl">
					<div class="bg-gradient-to-r from-violet-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
						</svg>
					</div>
					<h2 class="text-3xl font-bold text-gray-900 mb-6">Cloud & DevOps Solutions</h2>
					<p class="text-gray-600 mb-8 text-lg">
						Scalable cloud infrastructures, CI/CD pipelines, and secure environments on AWS, GCP, and Azure platforms with automated deployment and monitoring.
					</p>
					
					<div class="space-y-6 mb-8">
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Cloud Platforms:</h3>
							<div class="flex flex-wrap gap-2">
								<span class="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm">AWS</span>
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Google Cloud</span>
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Microsoft Azure</span>
								<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Docker</span>
								<span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
							</div>
						</div>
						
						<div>
							<h3 class="font-bold text-gray-900 mb-3">Services We Provide:</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Cloud Architecture Design</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> CI/CD Pipeline Setup</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Infrastructure as Code</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Security & Compliance</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Monitoring & Alerting</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Cost Optimization</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<a href="/quote" class="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
							Get Quote
						</a>
						<a href="/contact" class="border-2 border-violet-600 text-violet-600 px-6 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-all">
							Schedule Audit
						</a>
					</div>
				</div>
				
				<!-- E-commerce Platform Development -->
				<div id="ecommerce" class="bg-gradient-to-br from-pink-50 to-rose-50 p-12 rounded-3xl">
					<div class="bg-gradient-to-r from-pink-500 to-rose-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
						<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
						</svg>
					</div>
					<h2 class="text-3xl font-bold text-gray-900 mb-6">E-commerce Platform Development</h2>
					<p class="text-gray-600 mb-8 text-lg">
						Full-featured, customizable online stores with payment gateways, inventory management, and comprehensive analytics to drive sales and growth.
					</p>
					
					<div class="space-y-6 mb-8">
						<div>
							<h3 class="font-bold text-gray-900 mb-3">E-commerce Features:</h3>
							<div class="flex flex-wrap gap-2">
								<span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Payment Processing</span>
								<span class="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm">Inventory Management</span>
								<span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Order Management</span>
								<span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Multi-vendor Support</span>
								<span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Mobile Commerce</span>
							</div>
						</div>
						
						<div>
							<h3 class="font-bold text-gray-900 mb-3">What's Included:</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Custom Store Design</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Payment Gateway Integration</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Inventory & Order Management</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Customer Management System</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Analytics & Reporting</li>
								<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> SEO & Marketing Tools</li>
							</ul>
						</div>
					</div>
					
					<div class="flex space-x-4">
						<a href="/quote" class="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
							Get Quote
						</a>
						<a href="/portfolio" class="border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all">
							View Stores
						</a>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	
	<!-- Additional Services -->
	<section class="py-20 bg-gray-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-4xl font-bold text-center text-gray-900 mb-16">Additional Specialized Services</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Automation Tools & Internal Dashboards -->
				<div class="bg-white p-8 rounded-2xl shadow-lg">
					<div class="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">Automation Tools & Internal Dashboards</h3>
					<p class="text-gray-600 mb-6">Custom internal business tools for management, reporting, and process automation that streamline operations and improve productivity.</p>
					<ul class="space-y-2 text-gray-600 mb-6">
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Custom Dashboard Development</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Business Process Automation</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Reporting & Analytics Tools</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Workflow Management Systems</li>
					</ul>
					<a href="/quote" class="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
						Learn More →
					</a>
				</div>
				
				<!-- API Development & Integration -->
				<div class="bg-white p-8 rounded-2xl shadow-lg">
					<div class="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">API Development & Integration</h3>
					<p class="text-gray-600 mb-6">Designing custom RESTful APIs and integrating with third-party services like Stripe, Firebase, Twilio, and other business-critical platforms.</p>
					<ul class="space-y-2 text-gray-600 mb-6">
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Custom API Development</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Third-party Integrations</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> API Documentation</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Security & Authentication</li>
					</ul>
					<a href="/quote" class="text-green-600 font-semibold hover:text-green-700 transition-colors">
						Learn More →
					</a>
				</div>
				
				<!-- SaaS Product Prototyping -->
				<div class="bg-white p-8 rounded-2xl shadow-lg">
					<div class="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">SaaS Product Prototyping</h3>
					<p class="text-gray-600 mb-6">Supporting clients from concept to MVP launch of scalable SaaS platforms with user management, billing, and analytics built-in.</p>
					<ul class="space-y-2 text-gray-600 mb-6">
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> MVP Development</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> User Management Systems</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Subscription & Billing</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Scalable Architecture</li>
					</ul>
					<a href="/quote" class="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
						Learn More →
					</a>
				</div>
				
				<!-- AI Consulting & Digital Strategy -->
				<div class="bg-white p-8 rounded-2xl shadow-lg md:col-span-2 lg:col-span-1">
					<div class="bg-gradient-to-r from-indigo-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-4">AI Consulting & Digital Strategy</h3>
					<p class="text-gray-600 mb-6">Expert guidance on AI adoption, digital transformation, and innovation strategy to help businesses navigate the evolving technology landscape.</p>
					<ul class="space-y-2 text-gray-600 mb-6">
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> AI Readiness Assessment</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Digital Transformation Planning</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Technology Stack Optimization</li>
						<li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Innovation Strategy Development</li>
					</ul>
					<a href="/quote" class="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
						Learn More →
					</a>
				</div>
			</div>
		</div>
	</section>
	
	<!-- CTA Section -->
	<section class="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Ready to Transform Your Business?
			</h2>
			<p class="text-xl text-gray-300 mb-8">
				Let's discuss your project and create a custom solution that drives real results and accelerates your growth.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/quote" 
					class="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
					Get Free Consultation
				</a>
				<a href="/contact" 
					class="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10">
					Talk to an Expert
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />