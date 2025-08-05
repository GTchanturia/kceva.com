<script>
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Kceva - Cutting-Edge Digital Solutions | AI, Cloud & Web Development</title>
	<meta name="description" content="Transform your business with Kceva's innovative digital solutions: AI integration, custom model training, cloud infrastructure, web & mobile development, and e-commerce platforms." />
	<meta name="keywords" content="AI integration, custom AI models, cloud solutions, web development, mobile apps, e-commerce, DevOps, digital transformation, SaaS development" />
	<meta property="og:title" content="Kceva - Cutting-Edge Digital Solutions" />
	<meta property="og:description" content="Transform your business with innovative AI, cloud, and digital solutions from Kceva." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://kceva.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Kceva - Cutting-Edge Digital Solutions" />
	<meta name="twitter:description" content="Transform your business with innovative AI, cloud, and digital solutions from Kceva." />
</svelte:head>

<main class="min-h-screen">
	<Hero />
	<Services />
	<WhyChooseUs />
	<Testimonials />
	<CTA />
</main>

<Footer />