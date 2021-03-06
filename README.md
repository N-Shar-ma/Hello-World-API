# Hello World API

A free unlimited API that serves the basic **hello world code in over 650 programming languages.**

## Base URL: 
https://hello-world-codes-api.herokuapp.com/

## Endpoints:

### `/languages/`

- returns list of all available languages
- form of data returned: array of strings like:
```js
["Java", "JavaScript", ... "Python", "TypeScript"]
```

### `/codes/`

- returns hello world program in all available languages
- form of data returned: array of objects like:
```js
{
    "language_name": "Typescript",
    "extension": "ts",
    "program": "console.log(\"Hello World\");\n"
}
```

### `/codes/{language}`

- returns hello world program in the requested language (case insensitive)
- form of data returned: an object like:
```js
{
    "language_name": "Typescript",
    "extension": "ts",
    "program": "console.log(\"Hello World\");\n"
}
```

## Contributing

Pull Requests are welcome! 

Can't find a language in the API? Or maybe spotted a typo? Create an issue for it!

## Credits

Data sourced from [this csv Kaggle dataset](https://www.kaggle.com/ihelon/hello-world-in-programming-languages), cleaned and transformed into JSON using [this script](https://github.com/N-Shar-ma/Hello-World-API/blob/master/HelloWorldCleanUp.ipynb)
