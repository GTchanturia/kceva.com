<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<section class="hero-section relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
	<!-- Animated background elements -->
	<div class="absolute inset-0 opacity-20" aria-hidden="true">
		<div class="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
		<div class="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
		<div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
	</div>
	
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<div class="space-y-8" class:animate-fade-in={mounted}>
			<!-- Logo/Brand -->
			<div class="flex justify-center mb-8">
				<div class="bg-gradient-to-r from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-2xl">
					<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Kceva Logo">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
					</svg>
				</div>
			</div>
			
			<h1 class="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
				<span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
					Kceva
				</span>
			</h1>
			
			<p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
				AI Integration & Digital Solutions
			</p>
			
			<p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
				Transform your business with expert AI integration, cloud solutions, and custom development services that drive measurable results.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 mb-12">
				<a href="/quote" 
					class="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
					aria-label="Get free consultation for your project">
					Get Free Consultation
				</a>
				<a href="/portfolio" 
					class="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
					aria-label="View our portfolio of successful projects">
					View Our Work
				</a>
			</div>
			
			<!-- Trust indicators -->
			<div class="text-gray-400">
				<p class="text-sm mb-4">Innovative digital solutions for modern businesses</p>
				<div class="flex justify-center items-center space-x-8 opacity-60">
					<div class="text-sm">AI Integration</div>
					<div class="text-sm">|</div>
					<div class="text-sm">Cloud Solutions</div>
					<div class="text-sm">|</div>
					<div class="text-sm">Custom Development</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
		<svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
		</svg>
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	.animate-fade-in {
		animation: fade-in 1s ease-out;
	}
</style>