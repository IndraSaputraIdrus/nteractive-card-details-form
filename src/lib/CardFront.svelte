<script lang="ts">
	import { cardStore } from './store';
</script>

<div
	class="absolute bottom-0 left-6 w-3/4 tablet:left-0 tablet:w-[85%] laptop:bottom-auto laptop:left-8 laptop:left-auto laptop:top-0"
>
	<img src="/images/bg-card-front.png" alt="card-front" class="h-full w-full" />

	<img
		class="absolute left-5 top-5 w-14 tablet:w-20 laptop:left-7"
		src="/images/card-logo.svg"
		alt="card-logo"
	/>
	<p
		class="absolute left-5 top-1/2 text-lg font-medium text-primary-100 tablet:text-3xl laptop:left-7 laptop:top-[55%] laptop:tracking-wider"
	>
		{$cardStore.number}
	</p>
	<p
		class="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-widest text-primary-100 tablet:text-base laptop:bottom-7 laptop:left-7"
	>
		{$cardStore.name}
	</p>
	<p
		class="absolute bottom-5 right-5 text-xs font-medium tracking-widest text-primary-100 tablet:text-base laptop:bottom-7 laptop:right-7"
	>
		{$cardStore.date.month}/{$cardStore.date.year}
	</p>
</div>
