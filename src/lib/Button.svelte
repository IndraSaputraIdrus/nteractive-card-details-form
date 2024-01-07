<script lang="ts">
	export let type: 'submit' | 'button' | 'reset';
	let className: string = "";
	export { className as class };
</script>

<button
	{type}
	on:click
	class={`block w-full rounded bg-primary-400 py-4 text-primary-100 transition hover:opacity-90 ${className}`}
>
	<slot />
</button>
