const Product = require('../model/product.model.js')

const getproducts= async (req, res) => {
    try {
        console.log("Fetching all products...");
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(400).json({ message: "Invalid product ID" });
        }
        res.status(500).json({ message: error.message });
    }
};

const creatproduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateproduct = async (req, res) => {
    try {
        const { id } = req.params; 
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(400).json({ message: "Invalid product ID" });
        }
        res.status(500).json({ message: error.message });
    }
};

const deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID format" });
        }

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports={
    
    getproducts,
    getproduct,
    creatproduct,
    updateproduct,
    deleteproduct
} 