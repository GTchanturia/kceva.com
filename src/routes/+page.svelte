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
	<title>Kceva - AI Integration & Digital Solutions | Transform Your Business</title>
	<meta name="description" content="Expert AI integration, cloud solutions, and custom development services. Transform your business with cutting-edge technology solutions that drive growth and efficiency." />
	<meta name="keywords" content="AI integration, digital transformation, cloud solutions, custom development, business automation, web development, mobile apps, SaaS development" />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Kceva" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="canonical" href="https://kceva.com" />
	<meta property="og:title" content="Kceva - AI Integration & Digital Solutions" />
	<meta property="og:description" content="Transform your business with expert AI integration, cloud solutions, and custom development services that drive measurable results." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://kceva.com" />
	<meta property="og:site_name" content="Kceva" />
	<meta property="og:image" content="https://kceva.com/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Kceva - AI & Digital Solutions" />
	<meta name="twitter:description" content="Transform your business with expert AI integration and digital solutions." />
	<meta name="twitter:image" content="https://kceva.com/og-image.jpg" />
	
	<!-- Performance and SEO optimizations -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<meta name="theme-color" content="#3B82F6" />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Kceva",
		"description": "Expert AI integration, cloud solutions, and custom development services for business transformation",
		"url": "https://kceva.com",
		"logo": {
			"@type": "ImageObject",
			"url": "https://kceva.com/logo.png",
			"width": 200,
			"height": 200
		},
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+1-555-123-456",
			"contactType": "customer service",
			"email": "contact@kceva.com",
			"availableLanguage": "English"
		},
		"sameAs": [
			"https://linkedin.com/company/kceva",
			"https://twitter.com/kceva",
			"https://github.com/kceva"
		],
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Digital Solutions Services",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "AI Integration",
						"description": "Custom AI solutions and automation for business processes"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Web Development",
						"description": "Modern, responsive websites and web applications"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Cloud Solutions",
						"description": "Scalable cloud infrastructure and DevOps services"
					}
				}
			]
		},
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.9",
			"reviewCount": "50"
		},
		"foundingDate": "2021",
		"numberOfEmployees": {
			"@type": "QuantitativeValue",
			"value": "10-50"
		},
		"knowsAbout": [
			"Artificial Intelligence",
			"Cloud Computing",
			"Web Development",
			"Mobile App Development",
			"Digital Transformation"
		],
		"areaServed": {
			"@type": "Place",
			"name": "Worldwide"
		},
		"priceRange": "$10,000 - $500,000+",
		"paymentAccepted": [
			"Credit Card",
			"Bank Transfer",
			"PayPal"
		],
		"currenciesAccepted": "USD"
	}
	</script>
	
	<!-- FAQ Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "What AI integration services do you offer?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "We offer comprehensive AI integration services including chatbots, predictive analytics, process automation, document processing, and custom AI model training using GPT, Gemini, and other leading AI technologies."
				}
			},
			{
				"@type": "Question",
				"name": "How long does a typical project take?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Project timelines vary based on complexity. Simple integrations take 2-4 weeks, while comprehensive AI implementations and custom development projects typically take 2-6 months."
				}
			},
			{
				"@type": "Question",
				"name": "Do you provide ongoing support?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Yes, we provide 24/7 technical support, proactive monitoring, maintenance services, regular updates, security patches, and performance optimization for all our solutions."
				}
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