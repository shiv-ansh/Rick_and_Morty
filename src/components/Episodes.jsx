import React, { Component } from 'react'
import axios from 'axios';
import Pagination from './Pagination';




export class Episodes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
            pages: 0
        }


    }

    //mounting 
    componentDidMount() {
        console.log("component did Mout", this.state.currentPage);

        axios.get(`https://rickandmortyapi.com/api/episode/`)
            .then((res) => res.data)
            .then((res) => {
                this.setState({
                    episodes: res.results,
                    pages: res.info.pages
                })
            })
            .catch((error) => console.log(error))

    }

    //fetching the requested page data
    handleClick = (ele) => {
        console.log("Inside Handle Click", ele);
        axios.get(`https://rickandmortyapi.com/api/episode/?page=${ele}`)
            .then((res) => res.data)
            .then((res) => {
                this.setState({
                    episodes: res.results,
                    pages: res.info.pages
                })
            })
            .catch((error) => console.log(error))



    }
    render() {
        console.log(this.state);
        return (
            <div className="container">
                <Pagination
                    pages={this.state.pages}
                    handleClick={(ele) => this.handleClick(ele)}
                />
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Code</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.episodes.length !== 0 && this.state.episodes.map((ele) => (
                            <tr key={ele.id}>
                                <td>{ele.name}</td>
                                <td>{ele.air_date}</td>
                                <td>{ele.episode}</td>



                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    pages={this.state.pages}
                    handleClick={(ele) => this.handleClick(ele)}
                />
            </div>
        )
    }
}




export default Episodes
