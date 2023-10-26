const product = [ { title: 'Cabbage', id: 1 }, { title: 'Garlic', id: 2 }, { title: 'apple', id: 3 } ];

// const listItems = product.map(product =>
//     <li key={product.id}>
//         {product.title}
//     </li>
// );
export default function ShoppingList() {
	const listItems = product.map((product) => (
		<li
			key={product.id}
			style={{
				color: product.isFruits ? 'magenta' : 'darkgreen'
			}}
		>
			{product.title}
		</li>
	));
	return <ul>{listItems}</ul>;
}
