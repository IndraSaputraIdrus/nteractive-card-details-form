<script>
	import CardBack from './CardBack.svelte';
	import CardFront from './CardFront.svelte';
</script>

<header class="relative max-h-[500px] min-h-[190px] flex-none pb-14">
	<picture>
		<source srcset="/images/bg-main-desktop.png" media="(min-width: 1280px)" />
		<img src="/images/bg-main-mobile.png" alt="hero" class="h-full w-full" />
	</picture>

	<div
		class="absolute left-1/2 top-0 h-full w-full max-w-[700px] -translate-x-1/2"
	>
		<CardBack />
		<CardFront />
	</div>
</header>
