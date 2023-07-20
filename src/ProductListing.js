import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductListing = () => {
    const[prodata, prodatachange]= useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/cruds-project/detail/" + id);
    }
    const LoadEdit=(id) => {
        navigate("/cruds-project/edit/" + id);
    }
    const RemoveFunction=(id) => {
        if (window.confirm("Voulez-vous supprimer?")){
            fetch("http://localhost:8000/cruds-project/" + id, {

            method: "DELETE",
        }).then((res) => {
            alert("Supprimé avec succès.")
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
        };
    }

    useEffect(() => {
        fetch("http://localhost:8000/cruds-project").then((res) => {
            return res.json();
        }).then((resp)=> {
            prodatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Liste Des Produits</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="cruds-project/create" className="btn btn-success">Ajouter Nouveau(+)</Link>
                        <Link to="/cruds-project/search" className="btn btn-primary">Recherche</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Titre</td>
                                <td>Prix</td>
                                <td>Quantité</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            { prodata &&
                                prodata.map(item => (
                                    <tr key={item.id}>
                                       <td>{item.id}</td>
                                       <td>{item.title}</td> 
                                       <td>{item.price}</td> 
                                       <td>{item.quantity}</td>
                                       <td>
                                        <a onClick={() => {LoadEdit(item.id)}} className="btn btn-success">Modifier</a>
                                        <a onClick={() => {RemoveFunction(item.id)}} className="btn btn-danger">Retirer</a>
                                        <a onClick={() => {LoadDetail(item.id)}} className="btn btn-primary">Détails</a>
                                       </td> 
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductListing;
