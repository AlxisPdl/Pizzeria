import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableContent = () => {
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [newPizza, setNewPizza] = useState({
        nom: '',
        description: '',
        prix_petite: '',
        prix_moyenne: '',
        prix_grande: '',
        image: '',
    });

    useEffect(() => {
        axios.get('http://localhost:3030/pizzas/')
            .then(response => {
                setTableData(response.data.pizzas);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log('tableData updated:', tableData);
    }, [tableData]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPizza({
            ...newPizza,
            [name]: value,
        });
    };


    const handleCreate = () => {
        axios.post('http://localhost:3030/pizzas/create', newPizza)
            .then(response => {
                setTableData([...tableData, response.data]);
                setNewPizza({
                    nom: '',
                    description: '',
                    prix_petite: '',
                    prix_moyenne: '',
                    prix_grande: '',
                    image: '',
                });
            })
            .catch(error => {
                console.error('Error creating pizza:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3030/pizzas/delete/${id}`)
            .then(response => {
                if (response.status === 200) {
                    setTableData(tableData.filter(pizza => pizza.id !== id));
                }
            })
            .catch(error => {
                console.error('Error deleting pizza:', error);
            });
    };

    if (isLoading) {
        return <p>Chargement des données...</p>;
    }

    if (!Array.isArray(tableData) || tableData.length === 0) {
        return <p>Aucune donnée disponible.</p>;
    };


    return (
        <div>

            <h1>Contenu de la table</h1>
            <table>
                <thead>
                    <tr>
                        <th>nom</th>
                        <th>description</th>
                        <th>prix_petite</th>
                        <th>prix_moyenne</th>
                        <th>prix_grande</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(pizzas => (
                        <tr key={pizzas.id}>
                            <td>{pizzas.nom}</td>
                            <td>{pizzas.description}</td>
                            <td>{pizzas.prix_petite}</td>
                            <td>{pizzas.prix_moyenne}</td>
                            <td>{pizzas.prix_grande}</td>
                            <td>
                                {pizzas.image ? (
                                    <img src={`data:image/jpeg;base64,${btoa(String.fromCharCode(...pizzas.image.data))}`} alt="Pizza" />
                                    ) : (
                                    console.log(pizzas.image),
                                    <span>Aucune image disponible</span>
                                )}
                            </td>
                            <td>
                            <button onClick={() => handleDelete(pizzas.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <h2>Ajouter une nouvelle pizza</h2>
                <form action="http://localhost:3030/pizzas/create" method='POST' enctype='multipart/form-data'>
                <input type="text" name="nom" value={newPizza.nom} onChange={handleInputChange} placeholder="Nom" />
                <input type="text" name="description" value={newPizza.description} onChange={handleInputChange} placeholder="Description" />
                <input type="decimal" name="prix_petite" value={newPizza.prix_petite} onChange={handleInputChange} placeholder="Prix petite" />
                <input type="decimal" name="prix_moyenne" value={newPizza.prix_moyenne} onChange={handleInputChange} placeholder="Prix moyenne" />
                <input type="decimal" name="prix_grande" value={newPizza.prix_grande} onChange={handleInputChange} placeholder="Prix grande" />
                {/* <input type="file" accept=".jpeg" onChange={(event) => setNewPizza({ ...newPizza, image: event.target.files[0] })} /> */}
                <input type="file" name="image" />
                <button onClick={handleCreate}>Ajouter</button>
                </form>
            </div>
        </div>
    );
};

export default TableContent;



