module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/autopub/'
    : '/',
	devServer: {
		port: '8080',
		noInfo: true,
		overlay: true,
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET',
			'Access-Control-Allow-Headers':
				'X-Requested-With, content-type, Authorization'
		},
		https: false
	}
};
