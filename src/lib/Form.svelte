<form class="grow px-6 pb-10">
	<div class="space-y-6 max-w-[700px] mx-auto">
		<div class="form-control">
			<label for="name">Cardholder name</label>
			<input type="text" placeholder="e.g. Jane Appleseed" />
		</div>
		<div class="form-control">
			<label for="number">Card Number</label>
			<input type="text" placeholder="e.g. 1234 5678 9123" />
		</div>
		<div class="form-control">
			<label for="date">Exp. date (mm/yy)</label>
			<div class="flex gap-6">
				<input class="w-1/2" type="text" placeholder="MM" />
				<input class="w-1/2" type="text" placeholder="YY" />
			</div>
		</div>
		<div class="form-control">
			<label for="cvc">cvc</label>
			<input type="text" placeholder="e.g. 123" />
		</div>
		<button class="bg-primary-400 text-primary-100 block w-full rounded py-4">Confirm</button>
	</div>
</form>
