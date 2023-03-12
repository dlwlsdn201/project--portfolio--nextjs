export default function theme() {
	return {
		palette: {
			mode: 'dark',
			text: {
				secondary: 'white'
			}
		},
		typography: {
			body2: {}
		},
		spacing: (param: number | string) => `${param}em`
	};
}
