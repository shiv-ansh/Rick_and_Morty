import React from 'react'
import { Link } from "react-router-dom";

const data = [{ avatar: "Cronenberg.jpeg", name: "Cronenberg Morty" },
{ avatar: "kristen.jpeg", name: "Kristen Stewart" },
{ avatar: "miles.jpeg", name: "Miles Knightly" },
{ avatar: "plutonia_hostess.jpeg", name: "Plutonian Hostess" },
{ avatar: "slow_mobius.jpeg", name: "Slow Mobius" },
{ avatar: "teddy.jpeg", name: "Fascist Teddy Bear Rick" }]

const Home = () => {

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">Rick and Morty</h1>
                <p className="lead">Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland
                and Dan Harmon for Cartoon Network's late-night programming block Adult Swim.</p>
                <hr className="my-4" />

                <Link className="btn btn-primary btn-lg" to="/episodes" role="button">Browse Episode</Link>
            </div>
            <div className="row p-2">
                {data.map((ele) => (<div className="card mb-3 col-12 col-md-6">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={`/images/${ele.avatar}`} className="card-img img-fluid" alt={ele.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>

                            </div>
                        </div>
                    </div>
                </div>))}
            </div>


        </>

    )
}


export default Home