<script lang="ts">
	import { cardStore } from "./store";
</script>

<div
	class="absolute right-6 top-8 w-3/4 tablet:right-0 tablet:w-[85%] laptop:bottom-0 laptop:right-0 laptop:top-auto"
>
	<img src="/images/bg-card-back.png" alt="card-back" class="w-full" />
	<p
		class="absolute right-[12%] top-[43.5%] text-xs text-primary-100 tablet:text-base laptop:top-[44%]"
	>{$cardStore.cvc}</p>
</div>
