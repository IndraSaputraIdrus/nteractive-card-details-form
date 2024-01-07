<script>
	import Button from './Button.svelte';
	import { fade } from 'svelte/transition';
	import { cardStore, initialValue } from './store';

	function handleClick() {
		cardStore.set(initialValue)
	}
</script>

<div
	transition:fade={{
		duration: 200
	}}
	class="flex grow items-center justify-center"
>
	<div class="w-full max-w-lg space-y-8 px-6 text-center text-primary-400">
		<img src="/images/icon-complete.svg" alt="complete" class="mx-auto mb-2" />
		<div class="space-y-5">
			<p class="text-3xl font-medium uppercase tracking-wider">Thank you</p>
			<p class="font-medium text-primary-300">We've added your card details</p>
		</div>
		<Button on:click={handleClick} type="button">Continue</Button>
	</div>
</div>
