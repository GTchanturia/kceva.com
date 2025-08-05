<script>
	import Footer from '$lib/components/Footer.svelte';
	
	let currentStep = 1;
	const totalSteps = 4;
	
	let formData = {
		// Step 1: Project Type
		projectType: '',
		services: [],
		
		// Step 2: Project Details
		description: '',
		features: [],
		timeline: '',
		budget: '',
		
		// Step 3: Technical Requirements
		platforms: [],
		integrations: [],
		aiRequirements: '',
		
		// Step 4: Contact Info
		name: '',
		email: '',
		company: '',
		phone: ''
	};
	
	const serviceOptions = [
		{ id: 'ai-integration', label: 'AI Integration', icon: '🤖' },
		{ id: 'ai-training', label: 'Custom AI Model Training', icon: '🧠' },
		{ id: 'website', label: 'Website Development', icon: '🌐' },
		{ id: 'mobile', label: 'Mobile App Development', icon: '📱' },
		{ id: 'cloud', label: 'Cloud & DevOps Solutions', icon: '☁️' },
		{ id: 'ecommerce', label: 'E-commerce Platform', icon: '🛒' },
		{ id: 'saas', label: 'SaaS Development', icon: '💻' },
		{ id: 'automation', label: 'Automation Tools', icon: '⚙️' },
		{ id: 'api', label: 'API Development', icon: '🔗' },
		{ id: 'consulting', label: 'Digital Strategy Consulting', icon: '💡' }
	];
	
	const featureOptions = [
		'AI Chatbot', 'Predictive Analytics', 'User Authentication', 'Payment Processing', 
		'Admin Dashboard', 'API Integration', 'Real-time Chat', 'Push Notifications', 
		'Analytics & Reporting', 'Multi-language Support', 'Social Media Integration', 
		'Content Management', 'Search Functionality', 'File Upload', 'Document Processing',
		'Computer Vision', 'Natural Language Processing', 'Machine Learning Models'
	];
	
	const platformOptions = [
		'Web Application', 'iOS App', 'Android App', 'Progressive Web App', 
		'Desktop Application', 'API/Backend Only'
	];
	
	const integrationOptions = [
		'Payment Gateways (Stripe, PayPal)', 'CRM Systems (Salesforce, HubSpot)', 
		'Email Marketing (Mailchimp, SendGrid)', 'Social Media APIs', 'Analytics Tools (Google Analytics)', 
		'Cloud Storage (AWS S3, Google Cloud)', 'Third-party APIs', 'Database Systems',
		'AI/ML Services (OpenAI, Google AI)', 'Communication APIs (Twilio, SendBird)'
	];
	
	function nextStep() {
		if (currentStep < totalSteps) {
			currentStep++;
		}
	}
	
	function prevStep() {
		if (currentStep > 1) {
			currentStep--;
		}
	}
	
	function toggleService(serviceId) {
		if (formData.services.includes(serviceId)) {
			formData.services = formData.services.filter(s => s !== serviceId);
		} else {
			formData.services = [...formData.services, serviceId];
		}
	}
	
	function toggleFeature(feature) {
		if (formData.features.includes(feature)) {
			formData.features = formData.features.filter(f => f !== feature);
		} else {
			formData.features = [...formData.features, feature];
		}
	}
	
	function togglePlatform(platform) {
		if (formData.platforms.includes(platform)) {
			formData.platforms = formData.platforms.filter(p => p !== platform);
		} else {
			formData.platforms = [...formData.platforms, platform];
		}
	}
	
	function toggleIntegration(integration) {
		if (formData.integrations.includes(integration)) {
			formData.integrations = formData.integrations.filter(i => i !== integration);
		} else {
			formData.integrations = [...formData.integrations, integration];
		}
	}
	
	function submitForm() {
		console.log('Form submitted:', formData);
		alert('Thank you! We\'ll send you a detailed quote within 24 hours.');
	}
	
	function canProceed() {
		switch (currentStep) {
			case 1:
				return formData.projectType && formData.services.length > 0;
			case 2:
				return formData.description && formData.timeline && formData.budget;
			case 3:
				return true; // Optional step
			case 4:
				return formData.name && formData.email;
			default:
				return false;
		}
	}
</script>

<svelte:head>
	<title>Get Quote - Kceva | Free Digital Solutions Project Estimate</title>
	<meta name="description" content="Get a free, detailed quote for your digital transformation project. Custom estimates for AI integration, cloud solutions, web development, mobile apps, and more from Kceva." />
	<meta name="keywords" content="Kceva quote, digital solutions estimate, AI integration cost, cloud solutions pricing, custom development quote" />
</svelte:head>

<main class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl md:text-6xl font-bold mb-6">
				Get Your Free Quote
			</h1>
			<p class="text-xl text-gray-300 mb-8">
				Tell us about your digital transformation project and receive a detailed, custom quote within 24 hours.
			</p>
			
			<!-- Progress Bar -->
			<div class="max-w-md mx-auto">
				<div class="flex justify-between items-center mb-4">
					{#each Array(totalSteps) as _, i}
						<div class="flex items-center">
							<div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
								{currentStep > i + 1 ? 'bg-green-500' : currentStep === i + 1 ? 'bg-blue-500' : 'bg-gray-600'}">
								{currentStep > i + 1 ? '✓' : i + 1}
							</div>
							{#if i < totalSteps - 1}
								<div class="w-8 h-1 mx-2 {currentStep > i + 1 ? 'bg-green-500' : 'bg-gray-600'}"></div>
							{/if}
						</div>
					{/each}
				</div>
				<p class="text-sm text-gray-400">Step {currentStep} of {totalSteps}</p>
			</div>
		</div>
	</section>
	
	<!-- Quote Form -->
	<section class="py-20">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="bg-white rounded-3xl shadow-xl p-8 md:p-12">
				
				{#if currentStep === 1}
					<!-- Step 1: Project Type -->
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">What type of project do you have?</h2>
						<p class="text-gray-600">Select your primary project type and any additional services you need.</p>
					</div>
					
					<div class="space-y-8">
						<div>
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Primary Project Type</h3>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label class="cursor-pointer">
									<input type="radio" bind:group={formData.projectType} value="ai-transformation" class="sr-only">
									<div class="p-6 border-2 rounded-xl transition-all {formData.projectType === 'ai-transformation' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}">
										<div class="text-2xl mb-2">🤖</div>
										<h4 class="font-semibold text-gray-900">AI Transformation</h4>
										<p class="text-sm text-gray-600">Integrate AI into existing systems</p>
									</div>
								</label>
								
								<label class="cursor-pointer">
									<input type="radio" bind:group={formData.projectType} value="new-application" class="sr-only">
									<div class="p-6 border-2 rounded-xl transition-all {formData.projectType === 'new-application' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}">
										<div class="text-2xl mb-2">💻</div>
										<h4 class="font-semibold text-gray-900">New Application</h4>
										<p class="text-sm text-gray-600">Build from scratch</p>
									</div>
								</label>
								
								<label class="cursor-pointer">
									<input type="radio" bind:group={formData.projectType} value="cloud-migration" class="sr-only">
									<div class="p-6 border-2 rounded-xl transition-all {formData.projectType === 'cloud-migration' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}">
										<div class="text-2xl mb-2">☁️</div>
										<h4 class="font-semibold text-gray-900">Cloud Migration</h4>
										<p class="text-sm text-gray-600">Move to cloud infrastructure</p>
									</div>
								</label>
								
								<label class="cursor-pointer">
									<input type="radio" bind:group={formData.projectType} value="system-modernization" class="sr-only">
									<div class="p-6 border-2 rounded-xl transition-all {formData.projectType === 'system-modernization' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}">
										<div class="text-2xl mb-2">🔄</div>
										<h4 class="font-semibold text-gray-900">System Modernization</h4>
										<p class="text-sm text-gray-600">Upgrade existing systems</p>
									</div>
								</label>
							</div>
						</div>
						
						<div>
							<h3 class="text-xl font-semibold text-gray-900 mb-4">Services Needed</h3>
							<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{#each serviceOptions as service}
									<label class="cursor-pointer">
										<input type="checkbox" class="sr-only" on:change={() => toggleService(service.id)}>
										<div class="p-4 border-2 rounded-xl transition-all {formData.services.includes(service.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}">
											<div class="text-xl mb-2">{service.icon}</div>
											<h4 class="font-semibold text-gray-900 text-sm">{service.label}</h4>
										</div>
									</label>
								{/each}
							</div>
						</div>
					</div>
				{/if}
				
				{#if currentStep === 2}
					<!-- Step 2: Project Details -->
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">Tell us about your project</h2>
						<p class="text-gray-600">Provide details about your vision, timeline, and budget.</p>
					</div>
					
					<div class="space-y-8">
						<div>
							<label for="description" class="block text-lg font-semibold text-gray-900 mb-4">Project Description *</label>
							<textarea 
								id="description" 
								bind:value={formData.description}
								rows="6"
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
								placeholder="Describe your project goals, current challenges, target audience, and how you envision AI or digital solutions transforming your business..."
							></textarea>
						</div>
						
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4">Key Features & Capabilities (Select all that apply)</h3>
							<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
								{#each featureOptions as feature}
									<label class="cursor-pointer">
										<input type="checkbox" class="sr-only" on:change={() => toggleFeature(feature)}>
										<div class="p-3 border-2 rounded-lg text-sm transition-all {formData.features.includes(feature) ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300'}">
											{feature}
										</div>
									</label>
								{/each}
							</div>
						</div>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<label for="timeline" class="block text-lg font-semibold text-gray-900 mb-4">Project Timeline *</label>
								<select 
									id="timeline" 
									bind:value={formData.timeline}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
								>
									<option value="">Select timeline</option>
									<option value="asap">ASAP (Rush project)</option>
									<option value="1-3months">1-3 months</option>
									<option value="3-6months">3-6 months</option>
									<option value="6months+">6+ months</option>
									<option value="flexible">Flexible</option>
								</select>
							</div>
							
							<div>
								<label for="budget" class="block text-lg font-semibold text-gray-900 mb-4">Project Budget *</label>
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
									<option value="250k-500k">$250,000 - $500,000</option>
									<option value="500k+">$500,000+</option>
									<option value="discuss">Let's discuss</option>
								</select>
							</div>
						</div>
					</div>
				{/if}
				
				{#if currentStep === 3}
					<!-- Step 3: Technical Requirements -->
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">Technical Requirements</h2>
						<p class="text-gray-600">Help us understand your technical needs and preferences.</p>
					</div>
					
					<div class="space-y-8">
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4">Target Platforms</h3>
							<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{#each platformOptions as platform}
									<label class="cursor-pointer">
										<input type="checkbox" class="sr-only" on:change={() => togglePlatform(platform)}>
										<div class="p-4 border-2 rounded-xl transition-all {formData.platforms.includes(platform) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}">
											<h4 class="font-semibold text-gray-900">{platform}</h4>
										</div>
									</label>
								{/each}
							</div>
						</div>
						
						<div>
							<h3 class="text-lg font-semibold text-gray-900 mb-4">Required Integrations</h3>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
								{#each integrationOptions as integration}
									<label class="cursor-pointer">
										<input type="checkbox" class="sr-only" on:change={() => toggleIntegration(integration)}>
										<div class="p-3 border-2 rounded-lg text-sm transition-all {formData.integrations.includes(integration) ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300'}">
											{integration}
										</div>
									</label>
								{/each}
							</div>
						</div>
						
						<div>
							<label for="aiRequirements" class="block text-lg font-semibold text-gray-900 mb-4">AI/ML Requirements</label>
							<select 
								id="aiRequirements" 
								bind:value={formData.aiRequirements}
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
							>
								<option value="">Select AI requirements</option>
								<option value="basic-chatbot">Basic Chatbot</option>
								<option value="advanced-ai">Advanced AI Integration</option>
								<option value="custom-models">Custom Model Training</option>
								<option value="computer-vision">Computer Vision</option>
								<option value="nlp">Natural Language Processing</option>
								<option value="predictive-analytics">Predictive Analytics</option>
								<option value="no-ai">No AI needed</option>
								<option value="not-sure">Not sure yet</option>
							</select>
						</div>
					</div>
				{/if}
				
				{#if currentStep === 4}
					<!-- Step 4: Contact Information -->
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold text-gray-900 mb-4">Almost done!</h2>
						<p class="text-gray-600">Provide your contact information to receive your custom quote.</p>
					</div>
					
					<div class="space-y-6">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="name" class="block text-lg font-semibold text-gray-900 mb-2">Full Name *</label>
								<input 
									type="text" 
									id="name" 
									bind:value={formData.name}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
									placeholder="John Doe"
								>
							</div>
							<div>
								<label for="email" class="block text-lg font-semibold text-gray-900 mb-2">Email Address *</label>
								<input 
									type="email" 
									id="email" 
									bind:value={formData.email}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
									placeholder="john@company.com"
								>
							</div>
						</div>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="company" class="block text-lg font-semibold text-gray-900 mb-2">Company</label>
								<input 
									type="text" 
									id="company" 
									bind:value={formData.company}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
									placeholder="Your Company"
								>
							</div>
							<div>
								<label for="phone" class="block text-lg font-semibold text-gray-900 mb-2">Phone Number</label>
								<input 
									type="tel" 
									id="phone" 
									bind:value={formData.phone}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
									placeholder="+1 (555) 123-4567"
								>
							</div>
						</div>
						
						<div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
							<h3 class="font-bold text-gray-900 mb-2">What happens next?</h3>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-center">
									<span class="text-green-500 mr-2">✓</span>
									We'll review your requirements within 24 hours
								</li>
								<li class="flex items-center">
									<span class="text-green-500 mr-2">✓</span>
									You'll receive a detailed quote with project timeline
								</li>
								<li class="flex items-center">
									<span class="text-green-500 mr-2">✓</span>
									We'll schedule a free strategy consultation call
								</li>
								<li class="flex items-center">
									<span class="text-green-500 mr-2">✓</span>
									No obligation - explore your options freely
								</li>
							</ul>
						</div>
					</div>
				{/if}
				
				<!-- Navigation Buttons -->
				<div class="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
					<button 
						on:click={prevStep}
						disabled={currentStep === 1}
						class="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
					>
						← Previous
					</button>
					
					<div class="text-sm text-gray-500">
						Step {currentStep} of {totalSteps}
					</div>
					
					{#if currentStep < totalSteps}
						<button 
							on:click={nextStep}
							disabled={!canProceed()}
							class="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Next →
						</button>
					{:else}
						<button 
							on:click={submitForm}
							disabled={!canProceed()}
							class="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Get My Quote
						</button>
					{/if}
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />