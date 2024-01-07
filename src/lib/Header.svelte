<script>
	import CardBack from './CardBack.svelte';
	import CardFront from './CardFront.svelte';
</script>

<header
	class="relative max-h-[450px] min-h-[190px] flex-none pb-14 laptop:min-h-full laptop:w-1/2 laptop:pb-0"
>
	<picture>
		<source srcset="/images/bg-main-desktop.png" media="(min-width: 1024px)" />
		<img src="/images/bg-main-mobile.png" alt="hero" class="h-full w-full laptop:w-[75%]" />
	</picture>

	<div
		class="absolute left-1/2 top-0 h-full w-full max-w-lg -translate-x-1/2 laptop:left-auto laptop:right-0 laptop:top-1/2 laptop:h-[510px] laptop:-translate-y-1/2 laptop:translate-x-0"
	>
		<CardBack />
		<CardFront />
	</div>
</header>
