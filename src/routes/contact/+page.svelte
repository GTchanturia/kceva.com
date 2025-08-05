<script>
	import Footer from '$lib/components/Footer.svelte';
	
	let formData = {
		name: '',
		email: '',
		company: '',
		phone: '',
		service: '',
		budget: '',
		message: '',
		timeline: ''
	};
	
	function handleSubmit(event) {
		event.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		alert('Thank you for your message! We\'ll get back to you within 24 hours.');
	}
</script>

<svelte:head>
	<title>Contact Kceva - Get Your Free Digital Solutions Consultation</title>
	<meta name="description" content="Contact Kceva for your digital transformation project. Get a free consultation and custom quote for AI integration, cloud solutions, web development, and more." />
	<meta name="keywords" content="contact Kceva, digital solutions consultation, AI integration quote, cloud solutions contact, web development inquiry" />
</svelte:head>

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">
				Let's Build the Future Together
			</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">
				Ready to transform your business with cutting-edge AI and digital solutions? Get in touch with our expert team for a free consultation and custom strategy.
			</p>
		</div>
	</section>
	
	<!-- Contact Form & Info -->
	<section class="py-20 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
				<!-- Contact Form -->
				<div>
					<h2 class="text-3xl font-bold text-gray-900 mb-8">Get Your Free Strategy Consultation</h2>
					<form on:submit={handleSubmit} class="space-y-6">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
								<input 
									type="text" 
									id="name" 
									bind:value={formData.name}
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
									placeholder="John Doe"
								>
							</div>
							<div>
								<label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
								<input 
									type="email" 
									id="email" 
									bind:value={formData.email}
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
									placeholder="john@company.com"
								>
							</div>
						</div>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="company" class="block text-sm font-semibold text-gray-700 mb-2">Company</label>
								<input 
									type="text" 
									id="company" 
									bind:value={formData.company}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
									placeholder="Your Company"
								>
							</div>
							<div>
								<label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
								<input 
									type="tel" 
									id="phone" 
									bind:value={formData.phone}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
									placeholder="+1 (555) 123-4567"
								>
							</div>
						</div>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="service" class="block text-sm font-semibold text-gray-700 mb-2">Service Needed *</label>
								<select 
									id="service" 
									bind:value={formData.service}
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
								>
									<option value="">Select a service</option>
									<option value="ai-integration">AI Integration</option>
									<option value="ai-training">Custom AI Model Training</option>
									<option value="website">Website Development</option>
									<option value="mobile">Mobile App Development</option>
									<option value="cloud">Cloud & DevOps Solutions</option>
									<option value="ecommerce">E-commerce Platform</option>
									<option value="saas">SaaS Development</option>
									<option value="automation">Automation Tools</option>
									<option value="api">API Development</option>
									<option value="consulting">Digital Strategy Consulting</option>
									<option value="multiple">Multiple Services</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div>
								<label for="budget" class="block text-sm font-semibold text-gray-700 mb-2">Project Budget</label>
								<select 
									id="budget" 
									bind:value={formData.budget}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
								>
									<option value="">Select budget range</option>
									<option value="10k-25k">$10,000 - $25,000</option>
									<option value="25k-50k">$25,000 - $50,000</option>
									<option value="50k-100k">$50,000 - $100,000</option>
									<option value="100k-250k">$100,000 - $250,000</option>
									<option value="250k+">$250,000+</option>
									<option value="discuss">Let's discuss</option>
								</select>
							</div>
						</div>
						
						<div>
							<label for="timeline" class="block text-sm font-semibold text-gray-700 mb-2">Project Timeline</label>
							<select 
								id="timeline" 
								bind:value={formData.timeline}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
							>
								<option value="">Select timeline</option>
								<option value="asap">ASAP</option>
								<option value="1-3months">1-3 months</option>
								<option value="3-6months">3-6 months</option>
								<option value="6months+">6+ months</option>
								<option value="flexible">Flexible</option>
							</select>
						</div>
						
						<div>
							<label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
							<textarea 
								id="message" 
								bind:value={formData.message}
								required
								rows="6"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
								placeholder="Tell us about your project goals, current challenges, and how we can help transform your business..."
							></textarea>
						</div>
						
						<button 
							type="submit"
							class="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
						>
							Send Message & Get Free Consultation
						</button>
						
						<p class="text-sm text-gray-500 text-center">
							We'll respond within 24 hours with a detailed proposal and next steps.
						</p>
					</form>
				</div>
				
				<!-- Contact Information -->
				<div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl">
					<h3 class="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
					
					<div class="space-y-6 mb-8">
						<div class="flex items-start space-x-4">
							<div class="bg-gradient-to-r from-blue-500 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
								</svg>
							</div>
							<div>
								<h4 class="font-bold text-gray-900 mb-1">Phone</h4>
								<p class="text-gray-600">+1 (234) 567-8900</p>
								<p class="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
							</div>
						</div>
						
						<div class="flex items-start space-x-4">
							<div class="bg-gradient-to-r from-emerald-500 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
								</svg>
							</div>
							<div>
								<h4 class="font-bold text-gray-900 mb-1">Email</h4>
								<p class="text-gray-600">hello@kceva.com</p>
								<p class="text-sm text-gray-500">We respond within 24 hours</p>
							</div>
						</div>
						
						<div class="flex items-start space-x-4">
							<div class="bg-gradient-to-r from-violet-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
								</svg>
							</div>
							<div>
								<h4 class="font-bold text-gray-900 mb-1">Office</h4>
								<p class="text-gray-600">123 Innovation Drive<br>Tech City, TC 12345</p>
								<p class="text-sm text-gray-500">By appointment only</p>
							</div>
						</div>
						
						<div class="flex items-start space-x-4">
							<div class="bg-gradient-to-r from-orange-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
								</svg>
							</div>
							<div>
								<h4 class="font-bold text-gray-900 mb-1">Response Time</h4>
								<p class="text-gray-600">24 hours or less</p>
								<p class="text-sm text-gray-500">Emergency support available</p>
							</div>
						</div>
					</div>
					
					<!-- Quick Stats -->
					<div class="bg-white p-6 rounded-2xl shadow-lg">
						<h4 class="font-bold text-gray-900 mb-4">Why Choose Kceva?</h4>
						<div class="grid grid-cols-2 gap-4 text-center">
							<div>
								<div class="text-2xl font-bold text-blue-600">100+</div>
								<div class="text-sm text-gray-600">Projects</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-emerald-600">99%</div>
								<div class="text-sm text-gray-600">Satisfaction</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-violet-600">24/7</div>
								<div class="text-sm text-gray-600">Support</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-orange-600">5.0</div>
								<div class="text-sm text-gray-600">Rating</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- FAQ Section -->
	<section class="py-20 bg-gray-50">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
				<p class="text-xl text-gray-600">
					Quick answers to common questions about our services and process.
				</p>
			</div>
			
			<div class="space-y-8">
				<div class="bg-white p-6 rounded-2xl shadow-lg">
					<h3 class="text-xl font-bold text-gray-900 mb-3">How long does a typical AI integration project take?</h3>
					<p class="text-gray-600">AI integration projects typically take 2-6 months depending on complexity. Simple chatbot implementations can be completed in 2-4 weeks, while custom model training and enterprise-wide AI deployment may take 3-6 months. We'll provide a detailed timeline during our initial consultation.</p>
				</div>
				
				<div class="bg-white p-6 rounded-2xl shadow-lg">
					<h3 class="text-xl font-bold text-gray-900 mb-3">Do you provide ongoing support and maintenance?</h3>
					<p class="text-gray-600">Yes! We provide 24/7 technical support, proactive monitoring, and maintenance services to ensure your systems run smoothly. Our support packages include regular updates, security patches, performance optimization, and continuous model improvement for AI solutions.</p>
				</div>
				
				<div class="bg-white p-6 rounded-2xl shadow-lg">
					<h3 class="text-xl font-bold text-gray-900 mb-3">What's included in the free consultation?</h3>
					<p class="text-gray-600">Our free consultation includes a comprehensive analysis of your current systems, AI readiness assessment, technology recommendations, project timeline estimation, detailed quote, and strategic roadmap. You'll receive valuable insights regardless of whether you choose to work with us.</p>
				</div>
				
				<div class="bg-white p-6 rounded-2xl shadow-lg">
					<h3 class="text-xl font-bold text-gray-900 mb-3">Can you work with our existing development team?</h3>
					<p class="text-gray-600">Absolutely! We frequently collaborate with in-house teams, providing specialized AI and cloud expertise where needed. We can integrate seamlessly with your existing workflows, provide training to your team, and establish knowledge transfer processes.</p>
				</div>
				
				<div class="bg-white p-6 rounded-2xl shadow-lg">
					<h3 class="text-xl font-bold text-gray-900 mb-3">What industries do you specialize in?</h3>
					<p class="text-gray-600">We work across multiple industries including e-commerce, healthcare, fintech, manufacturing, education, and SaaS. Our team has deep expertise in industry-specific regulations, compliance requirements, and best practices for each sector.</p>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />