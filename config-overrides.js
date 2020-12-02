const {
    override,
    addWebpackModuleRule,
    addWebpackExternals
} = require('customize-cra')

module.exports = override(
    // 添加外部依赖代替打包
    addWebpackExternals({
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'antd': 'antd'
    }),

    // CSS
    addWebpackModuleRule({test: /\.css$/, use: ['style-loader', 'css-loader', 'less-loader']})
)