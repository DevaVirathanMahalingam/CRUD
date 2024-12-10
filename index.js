const express = require('express');
const mongoose = require('mongoose');
const Product = require('./model/product.model.js'); 
const productRoute = require('./route/product.route.js')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use('/api/products' , productRoute)


app.get('/', (req, res) => {
    res.send("i'm created the CRUD OPERATION using node , express , mongoDB ...... ");
});



// app.get('/api/products', async (req, res) => {
//     try {
//         console.log("Fetching all products...");
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         res.status(200).json(product);
//     } catch (error) {
//         if (error.kind === "ObjectId") {
//             return res.status(400).json({ message: "Invalid product ID" });
//         }
//         res.status(500).json({ message: error.message });
//     }
// });


// app.post('/api/products', async (req, res) => {
//     try {
//         const newProduct = await Product.create(req.body);
//         res.status(200).json(newProduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params; 
//         const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         res.status(200).json(product);
//     } catch (error) {
//         if (error.kind === "ObjectId") {
//             return res.status(400).json({ message: "Invalid product ID" });
//         }
//         res.status(500).json({ message: error.message });
//     }
// });



// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ message: "Invalid product ID format" });
//         }

//         const product = await Product.findByIdAndDelete(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         res.status(200).json({ message: "Product deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });



mongoose.connect( "mongodb+srv://devavirathanmahalingam:KgUXHJKAWJ18SW7W@backenddb.n70iu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendD", )
    .then(() => {
        console.log("Database connected successfully");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log("Database connection failed:", error.message);
    });
