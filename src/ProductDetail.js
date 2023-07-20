import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const ProductDetail = () => {
    const { prodid } = useParams();

    const [prodata, prodatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/cruds-project/" + prodid).then((res) => {
            return res.json();
        }).then((resp) => {
            prodatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>

            <div className="container">
                
                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Produit Créer</h2>
                    </div>
                    <div className="card-body"></div>

                    {prodata &&
                        <div>
                            <h2>Le Titre du produit est : <b>{prodata.title}</b>  ({prodata.id})</h2>
                            <h3>Détails du produit</h3>
                            <h5>Le Prix est : {prodata.price}</h5>
                            <h5>La Quantité est : {prodata.quantity}</h5>
                            <Link className="btn btn-danger" to="/">Retour à la liste</Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default ProductDetail;