export const calcTotal = (items) => {
	const totalArr = items.map((item) => {
		const unTaxed = item.price * item.quantity;
		const tax = (item.price * item.quantity * item.tax_pct) / 100;
		return { taxedTotalArr: unTaxed + tax, untaxedArr: unTaxed };
	});
	const taxedTotal = totalArr.map((total) => {
		return total.taxedTotalArr;
	});
	const unTaxedTotal = totalArr.map((total) => {
		return total.untaxedArr;
	});
	return {
		total: taxedTotal.reduce((a, b) => a + b),
		subTotal: unTaxedTotal.reduce((a, b) => a + b),
	};
};
