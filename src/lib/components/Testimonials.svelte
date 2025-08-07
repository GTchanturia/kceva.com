<script>
	import { onMount } from 'svelte';
	
	let currentTestimonial = 0;
	let testimonials = [
		{
			name: "Sarah Johnson",
			role: "CTO, TechStart Inc",
			content: "Kceva helped us implement AI-powered analytics that transformed our decision-making process. Their expertise in machine learning and cloud architecture is exceptional.",
			initial: "S",
			color: "from-blue-500 to-cyan-600"
		},
		{
			name: "Michael Chen",
			role: "Founder, DataFlow Solutions",
			content: "The custom e-commerce platform they built scaled perfectly with our growth. Their attention to performance and user experience made all the difference.",
			initial: "M",
			color: "from-emerald-500 to-teal-600"
		},
		{
			name: "Lisa Rodriguez",
			role: "VP Engineering, CloudTech",
			content: "Their cloud migration strategy reduced our infrastructure costs by 40% while improving reliability. The DevOps automation they implemented is world-class.",
			initial: "L",
			color: "from-violet-500 to-purple-600"
		}
	];
	
	let autoRotate = true;
	
	onMount(() => {
		const interval = setInterval(() => {
			if (autoRotate) {
				currentTestimonial = (currentTestimonial + 1) % testimonials.length;
			}
		}, 5000);
		
		return () => clearInterval(interval);
	});
	
	function selectTestimonial(index) {
		currentTestimonial = index;
		autoRotate = false;
		setTimeout(() => autoRotate = true, 10000);
	}
</script>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Client Success Stories
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Real feedback from businesses we've helped transform with innovative digital solutions.
			</p>
		</div>
		
		<!-- Interactive Testimonial Carousel -->
		<div class="max-w-4xl mx-auto">
			<div class="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-xl relative overflow-hidden">
				<!-- Background decoration -->
				<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br {testimonials[currentTestimonial].color} opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
				
				<div class="relative z-10">
					<!-- Quote icon -->
					<div class="text-6xl text-gray-200 mb-6">"</div>
					
					<!-- Testimonial content -->
					<div class="transition-all duration-500 ease-in-out">
						<p class="text-xl text-gray-700 italic mb-8 leading-relaxed">
							{testimonials[currentTestimonial].content}
						</p>
						
						<div class="flex items-center">
							<div class="w-16 h-16 bg-gradient-to-r {testimonials[currentTestimonial].color} rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
								{testimonials[currentTestimonial].initial}
							</div>
							<div>
								<h4 class="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
								<p class="text-gray-600">{testimonials[currentTestimonial].role}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Navigation dots -->
			<div class="flex justify-center mt-8 space-x-3">
				{#each testimonials as _, index}
					<button
						on:click={() => selectTestimonial(index)}
						class="w-3 h-3 rounded-full transition-all duration-300 {currentTestimonial === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}"
						aria-label="View testimonial {index + 1}"
					></button>
				{/each}
			</div>
		</div>
		
		<!-- Technology Focus Areas -->
		<div class="mt-20">
			<h3 class="text-2xl font-bold text-center text-gray-900 mb-12">Our Expertise Areas</h3>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
				<div class="text-center group cursor-pointer">
					<div class="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
						</svg>
					</div>
					<h4 class="font-semibold text-gray-900">AI Integration</h4>
				</div>
				
				<div class="text-center group cursor-pointer">
					<div class="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
						</svg>
					</div>
					<h4 class="font-semibold text-gray-900">Cloud Solutions</h4>
				</div>
				
				<div class="text-center group cursor-pointer">
					<div class="bg-violet-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<svg class="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
						</svg>
					</div>
					<h4 class="font-semibold text-gray-900">Web Development</h4>
				</div>
				
				<div class="text-center group cursor-pointer">
					<div class="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
						<svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
						</svg>
					</div>
					<h4 class="font-semibold text-gray-900">Mobile Apps</h4>
				</div>
			</div>
		</div>
	</div>
</section>