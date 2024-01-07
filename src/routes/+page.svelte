<script>
	import Form from '$lib/Form.svelte';
	import Header from '$lib/Header.svelte';
	import Complete from '$lib/Complete.svelte';
	import { cardStore } from '$lib/store';
</script>

<main class="flex h-svh min-w-[375px] flex-col gap-11 bg-primary-100 laptop:flex-row laptop:gap-0">
	<Header />
	{#if $cardStore.completed}
		<Complete />
	{:else}
		<Form />
	{/if}
</main>
