import { useEffect, useState } from "react";
import axios from "axios";
import './Content.css';

const Content = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
            });
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <div className="Full_products">
            {filteredProducts.map((product) => (
                <li key={product.id}>
                    <div className="cards">
                        <div className="card">
                            <img src={product.image} style={{ width: 100 }} alt={product.title} />
                            <div className="Container">
                                <h4><b>{product.title}</b></h4>
                                <h4><b>${product.price}</b></h4>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default Content;
