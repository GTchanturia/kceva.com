<script>
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import InteractiveDemo from '$lib/components/InteractiveDemo.svelte';
	import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Kceva - AI & Digital Solutions | Custom Development & Cloud Services</title>
	<meta name="description" content="Transform your business with Kceva's AI integration, custom development, and cloud solutions. Expert web & mobile development, e-commerce platforms, and digital transformation services." />
	<meta name="keywords" content="AI integration, custom development, cloud solutions, web development, mobile apps, e-commerce platforms, digital transformation, automation, SaaS development" />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Kceva" />
	<link rel="canonical" href="https://kceva.com" />
	<meta property="og:title" content="Kceva - Cutting-Edge Digital Solutions" />
	<meta property="og:description" content="Expert AI integration, custom development, and cloud solutions to transform your business operations and drive growth." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://kceva.com" />
	<meta property="og:site_name" content="Kceva" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Kceva - AI & Digital Solutions" />
	<meta name="twitter:description" content="Expert AI integration, custom development, and cloud solutions for business transformation." />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Kceva",
		"description": "AI integration, custom development, and cloud solutions for business transformation",
		"url": "https://kceva.com",
		"logo": "https://kceva.com/logo.png",
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+1-234-567-8900",
			"contactType": "customer service",
			"email": "hello@kceva.com"
		},
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "123 Innovation Drive",
			"addressLocality": "Tech City",
			"addressRegion": "TC",
			"postalCode": "12345"
		},
		"sameAs": [
			"https://linkedin.com/company/kceva",
			"https://twitter.com/kceva",
			"https://github.com/kceva"
		],
		"service": [
			{
				"@type": "Service",
				"name": "AI Integration",
				"description": "Custom AI solutions and automation for business processes"
			},
			{
				"@type": "Service", 
				"name": "Web Development",
				"description": "Modern, responsive websites and web applications"
			},
			{
				"@type": "Service",
				"name": "Cloud Solutions",
				"description": "Scalable cloud infrastructure and DevOps services"
			}
		]
	}
	</script>
</svelte:head>

<main class="min-h-screen">
	<Hero />
	<Services />
	<InteractiveDemo />
	<WhyChooseUs />
	<Testimonials />
	<CTA />
</main>

<Footer />