var Product =require('./models/product');
var mongoose= require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products =[new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic video game',
    description:' Awesome game',
    price : 10
}),
new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic video game',
    description:' Awesome game',
    price : 10
}),
new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic video game',
    description:' Awesome game',
    price : 10
}),
new Product({imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',title: 'Gothic video game',description:' Awesome game',price : 10})

];
var done=0;
for( var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done==products.length){
            ExtensionScriptApis();
        }
    });
}

function exit(){
    mongoose.disconnect();
}