import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {

    const { prodid } = useParams();

    // const [prodata, prodatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/cruds-project/" + prodid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            titlechange(resp.title);
            pricechange(resp.price);
            quantitychange(resp.quantity);
            activechange(resp.active);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id, idchange]=useState("");
    const[title, titlechange]=useState("");
    const[price, pricechange]=useState("");
    const[quantity, quantitychange]=useState("");
    const[active, activechange]=useState(true);
    const[validation, valchange]=useState(false);

    const navigate=useNavigate();


    const handlesubmit = (e) => {
        e.preventDefault();

        const prodata={id, title, price, quantity, active};

        fetch("http://localhost:8000/cruds-project/" + prodid, {

            method: "PUT",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(prodata),
        }).then((res) => {
            alert("Saved Successfully.")
            navigate("/");
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{"textAlign" : "left"}}>
                            <div className="card-title">
                                <h2>Modification Du Produit</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="from-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="from-group">
                                                <label>Titre</label>
                                                <input required value={title} onMouseDown={e=>valchange(true)} onChange={e=>titlechange(e.target.value)} className="form-control"></input>
                                            {title.length==0 && validation && <span className="text-danger">Entrez Le Titre</span>}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="from-group">
                                                <label>Prix</label>
                                                <input value={price} onChange={e=>pricechange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="from-group">
                                                <label>Quantité</label>
                                                <input value={quantity} onChange={e=>quantitychange(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">                                    <div className="col-lg-12">
                                            <div className="form-check">
                                            <input type="checkbox" className="form-check-input"></input>
                                                <label checked={active} onChange={e=>activechange(e.target.value)} className="form-check-label">Actif</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-success">Sauvegarder</button>
                                                <Link to="/" className="btn btn-danger">Retour</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductEdit;