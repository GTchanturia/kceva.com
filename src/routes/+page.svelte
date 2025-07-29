<script>
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>NovaForge Digital - From Vision to Execution | Complete Digital Services</title>
	<meta name="description" content="Transform your business with NovaForge Digital's complete digital services: web development, mobile apps, AI tools, UI/UX design, SEO, and digital strategy consulting." />
	<meta name="keywords" content="digital services, web development, mobile apps, AI tools, UI/UX design, SEO, digital strategy" />
</svelte:head>

<main class="min-h-screen">
	<Hero />
	<Services />
	<WhyChooseUs />
	<Testimonials />
	<CTA />
</main>

<Footer />