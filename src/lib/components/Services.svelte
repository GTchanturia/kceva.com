<section class="py-20 bg-white">
	<script>
		import { onMount } from 'svelte';
		
		let hoveredService = null;
		
		function handleServiceHover(serviceId) {
			hoveredService = serviceId;
		}
		
		function handleServiceLeave() {
			hoveredService = null;
		}
	</script>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Our Digital Solutions
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Comprehensive technology services designed to accelerate your business growth and digital transformation.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Website Development & Design -->
			<div 
				class="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
				on:mouseenter={() => handleServiceHover('website')}
				on:mouseleave={handleServiceLeave}
			>
				<div class="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Website Development & Design</h3>
				<p class="text-gray-600 mb-6">Modern, responsive websites built with cutting-edge technologies. Optimized for performance, SEO, and user experience to drive business growth.</p>
				<ul class="text-sm text-gray-500 space-y-2 mb-6">
					<li class="flex items-center"><span class="text-blue-500 mr-2">✓</span> Responsive Design</li>
					<li class="flex items-center"><span class="text-blue-500 mr-2">✓</span> SEO Optimization</li>
					<li class="flex items-center"><span class="text-blue-500 mr-2">✓</span> Performance Focus</li>
					<li class="flex items-center"><span class="text-blue-500 mr-2">✓</span> Modern UI/UX</li>
				</ul>
				<a href="/services#website-development" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
					Learn More →
				</a>
			</div>
			
			<!-- Web & Mobile App Development -->
			<div 
				class="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
				on:mouseenter={() => handleServiceHover('mobile')}
				on:mouseleave={handleServiceLeave}
			>
				<div class="bg-gradient-to-r from-indigo-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Web & Mobile App Development</h3>
				<p class="text-gray-600 mb-6">Cross-platform mobile applications and progressive web apps. Built for performance, scalability, and exceptional user experience.</p>
				<ul class="text-sm text-gray-500 space-y-2 mb-6">
					<li class="flex items-center"><span class="text-indigo-500 mr-2">✓</span> Cross-Platform Apps</li>
					<li class="flex items-center"><span class="text-indigo-500 mr-2">✓</span> Progressive Web Apps</li>
					<li class="flex items-center"><span class="text-indigo-500 mr-2">✓</span> Native Performance</li>
					<li class="flex items-center"><span class="text-indigo-500 mr-2">✓</span> App Store Ready</li>
				</ul>
				<a href="/services#mobile-development" class="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors inline-flex items-center">
					Learn More →
				</a>
			</div>
			
			<!-- AI Integration for Businesses -->
			<div 
				class="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
				on:mouseenter={() => handleServiceHover('ai')}
				on:mouseleave={handleServiceLeave}
			>
				<div class="bg-gradient-to-r from-emerald-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">AI Integration for Businesses</h3>
				<p class="text-gray-600 mb-6">Intelligent automation and AI-powered solutions that enhance efficiency, decision-making, and customer experience.</p>
				<ul class="text-sm text-gray-500 space-y-2 mb-6">
					<li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Smart Chatbots</li>
					<li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Predictive Analytics</li>
					<li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Process Automation</li>
					<li class="flex items-center"><span class="text-emerald-500 mr-2">✓</span> Custom AI Models</li>
				</ul>
				<a href="/services#ai-integration" class="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center">
					Learn More →
				</a>
			</div>
			
			<!-- Custom AI Model Training -->
			<div 
				class="group bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
				on:mouseenter={() => handleServiceHover('training')}
				on:mouseleave={handleServiceLeave}
			>
				<div class="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Custom AI Model Training</h3>
				<p class="text-gray-600 mb-6">Custom AI models trained on your data for maximum accuracy and relevance to your specific business needs.</p>
				<ul class="text-sm text-gray-500 space-y-2 mb-6">
					<li class="flex items-center"><span class="text-orange-500 mr-2">✓</span> Custom Models</li>
					<li class="flex items-center"><span class="text-orange-500 mr-2">✓</span> Data Processing</li>
					<li class="flex items-center"><span class="text-orange-500 mr-2">✓</span> Model Fine-tuning</li>
					<li class="flex items-center"><span class="text-orange-500 mr-2">✓</span> Cloud Deployment</li>
				</ul>
				<a href="/services#ai-training" class="text-orange-600 font-semibold hover:text-orange-700 transition-colors inline-flex items-center">
					Learn More →
				</a>
			</div>
			
			<!-- Cloud & DevOps Solutions -->
			<div 
				class="group bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
				on:mouseenter={() => handleServiceHover('cloud')}
				on:mouseleave={handleServiceLeave}
			>
				<div class="bg-gradient-to-r from-violet-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Cloud & DevOps Solutions</h3>
				<p class="text-gray-600 mb-6">Scalable cloud infrastructure and automated deployment pipelines for reliable, secure, and cost-effective operations.</p>
				<ul class="text-sm text-gray-500 space-y-2 mb-6">
					<li class="flex items-center"><span class="text-violet-500 mr-2">✓</span> Cloud Architecture</li>
					<li class="flex items-center"><span class="text-violet-500 mr-2">✓</span> CI/CD Pipelines</li>
					<li class="flex items-center"><span class="text-violet-500 mr-2">✓</span> Infrastructure as Code</li>
					<li class="flex items-center"><span class="text-violet-500 mr-2">✓</span> Security & Monitoring</li>
				</ul>
				<a href="/services#cloud-devops" class="text-violet-600 font-semibold hover:text-violet-700 transition-colors inline-flex items-center">
					Learn More →
				</a>
			</div>
			
			<!-- E-commerce Platform Development -->
			<div 
				class="group bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
				on:mouseenter={() => handleServiceHover('ecommerce')}
				on:mouseleave={handleServiceLeave}
			>
				<div class="bg-gradient-to-r from-pink-500 to-rose-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">E-commerce Platform Development</h3>
				<p class="text-gray-600 mb-6">Complete e-commerce solutions with secure payments, inventory management, and analytics to maximize online sales.</p>
				<ul class="text-sm text-gray-500 space-y-2 mb-6">
					<li class="flex items-center"><span class="text-pink-500 mr-2">✓</span> Custom Stores</li>
					<li class="flex items-center"><span class="text-pink-500 mr-2">✓</span> Secure Payments</li>
					<li class="flex items-center"><span class="text-pink-500 mr-2">✓</span> Inventory System</li>
					<li class="flex items-center"><span class="text-pink-500 mr-2">✓</span> Sales Analytics</li>
				</ul>
				<a href="/services#ecommerce" class="text-pink-600 font-semibold hover:text-pink-700 transition-colors inline-flex items-center">
					Learn More →
				</a>
			</div>
		</div>
		
		<div class="text-center mt-16">
			<a href="/services" 
				class="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
				View All Services
			</a>
		</div>
	</div>
</section>