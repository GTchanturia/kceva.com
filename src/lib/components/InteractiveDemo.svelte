<script>
	import { onMount } from 'svelte';
	
	let currentDemo = 'ai';
	let isAnimating = false;
	
	const demos = {
		ai: {
			title: 'AI Integration Demo',
			description: 'See how AI can transform your business processes',
			color: 'from-blue-500 to-cyan-600',
			icon: '🤖'
		},
		cloud: {
			title: 'Cloud Architecture',
			description: 'Scalable infrastructure that grows with you',
			color: 'from-emerald-500 to-teal-600',
			icon: '☁️'
		},
		mobile: {
			title: 'Mobile Experience',
			description: 'Cross-platform apps with native performance',
			color: 'from-violet-500 to-purple-600',
			icon: '📱'
		}
	};
	
	function switchDemo(demoType) {
		if (demoType === currentDemo || isAnimating) return;
		
		isAnimating = true;
		setTimeout(() => {
			currentDemo = demoType;
			isAnimating = false;
		}, 300);
	}
	
	onMount(() => {
		const interval = setInterval(() => {
			const demoKeys = Object.keys(demos);
			const currentIndex = demoKeys.indexOf(currentDemo);
			const nextIndex = (currentIndex + 1) % demoKeys.length;
			switchDemo(demoKeys[nextIndex]);
		}, 4000);
		
		return () => clearInterval(interval);
	});
</script>

<section class="py-20 bg-gradient-to-br from-gray-50 to-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Experience Our Solutions
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Interactive demonstrations of how our technology solutions can transform your business operations.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<!-- Demo Controls -->
			<div class="space-y-6">
				{#each Object.entries(demos) as [key, demo]}
					<button
						on:click={() => switchDemo(key)}
						class="w-full text-left p-6 rounded-2xl transition-all duration-300 {currentDemo === key ? 'bg-white shadow-xl scale-105' : 'bg-gray-100 hover:bg-gray-200'}"
					>
						<div class="flex items-center">
							<div class="text-3xl mr-4">{demo.icon}</div>
							<div>
								<h3 class="text-xl font-bold text-gray-900 mb-2">{demo.title}</h3>
								<p class="text-gray-600">{demo.description}</p>
							</div>
						</div>
					</button>
				{/each}
			</div>
			
			<!-- Demo Visualization -->
			<div class="relative">
				<div class="bg-white rounded-3xl shadow-2xl p-8 min-h-[400px] flex items-center justify-center transition-all duration-500 {isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}">
					{#if currentDemo === 'ai'}
						<div class="text-center">
							<div class="bg-gradient-to-r from-blue-500 to-cyan-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
								<svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
								</svg>
							</div>
							<h3 class="text-2xl font-bold text-gray-900 mb-4">AI-Powered Analytics</h3>
							<div class="space-y-3 text-left max-w-sm mx-auto">
								<div class="flex items-center p-3 bg-blue-50 rounded-lg">
									<div class="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
									<span class="text-gray-700">Processing customer data...</span>
								</div>
								<div class="flex items-center p-3 bg-green-50 rounded-lg">
									<div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
									<span class="text-gray-700">Insights generated</span>
								</div>
								<div class="flex items-center p-3 bg-purple-50 rounded-lg">
									<div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
									<span class="text-gray-700">Recommendations ready</span>
								</div>
							</div>
						</div>
					{:else if currentDemo === 'cloud'}
						<div class="text-center">
							<div class="bg-gradient-to-r from-emerald-500 to-teal-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
								</svg>
							</div>
							<h3 class="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
							<div class="grid grid-cols-3 gap-4 max-w-sm mx-auto">
								<div class="bg-emerald-100 p-4 rounded-lg text-center">
									<div class="text-2xl mb-2">🖥️</div>
									<div class="text-sm text-gray-600">Servers</div>
								</div>
								<div class="bg-teal-100 p-4 rounded-lg text-center">
									<div class="text-2xl mb-2">🗄️</div>
									<div class="text-sm text-gray-600">Database</div>
								</div>
								<div class="bg-cyan-100 p-4 rounded-lg text-center">
									<div class="text-2xl mb-2">🔒</div>
									<div class="text-sm text-gray-600">Security</div>
								</div>
							</div>
						</div>
					{:else if currentDemo === 'mobile'}
						<div class="text-center">
							<div class="bg-gradient-to-r from-violet-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
								</svg>
							</div>
							<h3 class="text-2xl font-bold text-gray-900 mb-4">Mobile App Experience</h3>
							<div class="bg-gray-900 rounded-3xl p-6 max-w-xs mx-auto">
								<div class="bg-white rounded-2xl p-4 space-y-3">
									<div class="flex items-center justify-between">
										<div class="w-8 h-8 bg-violet-500 rounded-full"></div>
										<div class="text-sm text-gray-500">9:41 AM</div>
									</div>
									<div class="space-y-2">
										<div class="h-3 bg-gray-200 rounded w-3/4"></div>
										<div class="h-3 bg-gray-200 rounded w-1/2"></div>
									</div>
									<div class="bg-violet-100 p-3 rounded-lg">
										<div class="h-2 bg-violet-300 rounded w-full"></div>
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>