<script>
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
	<!-- Animated background elements -->
	<div class="absolute inset-0 opacity-20">
		<div class="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
		<div class="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
		<div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
	</div>
	
	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<div class="space-y-8" class:animate-fade-in={mounted}>
			<!-- Logo/Brand -->
			<div class="flex justify-center mb-8">
				<div class="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-2xl">
					<svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
					</svg>
				</div>
			</div>
			
			<h1 class="text-5xl md:text-7xl font-bold text-white leading-tight">
				<span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
					NovaForge
				</span>
				<br>
				<span class="text-white">Digital</span>
			</h1>
			
			<p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
				From Vision to Execution — We Build Your Digital Empire
			</p>
			
			<p class="text-lg text-gray-400 max-w-2xl mx-auto">
				Complete digital services for individuals, startups, and businesses. 
				Transform your ideas into powerful digital solutions with our expert team.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
				<a href="/quote" 
					class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
					Get Free Consultation
				</a>
				<a href="/portfolio" 
					class="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10">
					View Our Work
				</a>
			</div>
			
			<!-- Trust indicators -->
			<div class="pt-12 text-gray-400">
				<p class="text-sm mb-4">Trusted by 200+ businesses worldwide</p>
				<div class="flex justify-center items-center space-x-8 opacity-60">
					<div class="text-2xl font-bold">★★★★★</div>
					<div class="text-sm">5.0 Rating</div>
					<div class="text-sm">|</div>
					<div class="text-sm">50+ Projects</div>
					<div class="text-sm">|</div>
					<div class="text-sm">24/7 Support</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
		<svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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