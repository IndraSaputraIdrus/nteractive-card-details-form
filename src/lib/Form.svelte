<script lang="ts">
	import Button from './Button.svelte';
	import { cardStore } from '$lib/store';
	import ErrorMessage from '$lib/ErrorMessage.svelte';
	import { fade } from 'svelte/transition';
	import { formValidation, formatCreditCardNumber } from '$lib';

	let errors: {
		number?: string[] | undefined;
		name?: string[] | undefined;
		month?: string[] | undefined;
		year?: string[] | undefined;
		cvc?: string[] | undefined;
	} = {};

	function handleSubmit(event: SubmitEvent) {
		const element = event.target as HTMLFormElement;
		const data = Object.fromEntries(new FormData(element));

		const validation = formValidation(data);

		if (validation.error || !validation.result) {
			errors = { ...validation.errors };
			return (errors = errors);
		}

		const { result } = validation;
		cardStore.update(() => ({
			name: result.data.name,
			number: formatCreditCardNumber(result.data.number),
			date: {
				month: result.data.month,
				year: result.data.year
			},
			cvc: result.data.cvc,
			completed: true
		}));

    element.reset()
	}
</script>

<form
	transition:fade={{
		duration: 200
	}}
	on:submit|preventDefault={handleSubmit}
	class="flex grow justify-center px-6 pb-10 laptop:w-1/2 laptop:items-center laptop:pb-0"
>
	<div class="mx-auto grid max-w-lg grid-cols-2 gap-6">
		<div class="form-control col-span-2">
			<label for="name">Cardholder name</label>
			<input
				class={errors?.name ? 'border-error' : 'border-primary-200'}
				name="name"
				type="text"
				placeholder="e.g. Jane Appleseed"
			/>
			{#if errors?.name}
				<ErrorMessage>{errors?.name[0]}</ErrorMessage>
			{/if}
		</div>
		<div class="form-control col-span-2">
			<label for="number">Card Number</label>
			<input
				class={errors?.number ? 'border-error' : 'border-primary-200'}
				name="number"
				type="text"
				placeholder="e.g. 1234 5678 9123 0000"
			/>
			{#if errors?.number}
				<ErrorMessage>{errors?.number[0]}</ErrorMessage>
			{/if}
		</div>
		<div class="form-control col-span-1">
			<label for="date">Exp. date (mm/yy)</label>
			<div class="flex gap-6">
				<input
					name="month"
					class={`w-1/2 ${errors?.month ? 'border-error' : 'border-primary-200'}`}
					type="text"
					placeholder="MM"
				/>
				<input
					class={`w-1/2 ${errors?.year ? 'border-error' : 'border-primary-200'}`}
					name="year"
					type="text"
					placeholder="YY"
				/>
			</div>
			{#if errors?.month}
				<ErrorMessage>{errors?.month[0]}</ErrorMessage>
			{:else if errors?.year}
				<ErrorMessage>{errors?.year[0]}</ErrorMessage>
			{/if}
		</div>
		<div class="form-control col-span-1">
			<label for="cvc">cvc</label>
			<input
				class={errors?.cvc ? 'border-error' : 'border-primary-200'}
				name="cvc"
				type="number"
				placeholder="e.g. 123"
			/>
			{#if errors?.cvc}
				<ErrorMessage>{errors?.cvc[0]}</ErrorMessage>
			{/if}
		</div>
		<Button type="submit" class="col-span-2">Confirm</Button>
	</div>
</form>
