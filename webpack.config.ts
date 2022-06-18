import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
	mode: 'development',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				include: path.resolve(__dirname, 'src'),
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.svg$/,
				include: ['src', 'src/custom.d.ts'],
				// include: path.resolve(__dirname, 'src'),
				use: ['@svgr/webpack'],
			},
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
};

export default config;
