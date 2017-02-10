# html-minify-loader
Loader for webpack that minifies HTML using [minimize](https://github.com/Moveo/minimize)

To install
---

```
npm install html-minify-loader --save-dev
```

Use Case
---
Use it when you need to reduce the file size of your webpack template modules by removing comments and extra spaces from your templates

Example
---
```
module: {
    loaders: [
        {
                test: /\.html$/,
                name: "mandrillTemplates",
                loader: 'raw!html-minify'
        }
    ]
}
```

You can pass [minimize](https://github.com/Moveo/minimize) parameters via 'html-minify-loader' property of webpack config.

```
module: {
    loaders: [
        {
                test: /\.html$/,
                name: "mandrillTemplates",
                loader: 'raw!html-minify'
        }
    ]
},
'html-minify-loader': {
     empty: true,        // KEEP empty attributes
     cdata: true,        // KEEP CDATA from scripts
     comments: true,     // KEEP comments
     dom: {                            // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
            lowerCaseAttributeNames: false,      // do not call .toLowerCase for each attribute name (Angular2 use camelCase attributes)
     }
}

```

## Webpack 2

Webpack 2 does not allow a `html-minify-loader` option to be added to it's config.  Instead use loader options.

```javascript
module: {
    rules: [
        {
            test: /\.html$/,
            use: [
                'raw-loader',
                {
                    loader: 'html-minify-loader',
                    options: {
                        quotes: true
                    }
                }
            ]
        }
    ]
}
```
