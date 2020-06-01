import React, { Component } from 'react'
import axios from 'axios';
import Pagination from './Pagination';




export class Episodes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
            pages: 0,
            search: ""
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

    //handleChange function to handle episode search
    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    //fetching user entered episodes
    filterEpisodes = () => {
        axios.get(`https://rickandmortyapi.com/api/episode/?name=${this.state.search}`)
            .then((res) => res.data)
            .then((res) => {
                this.setState({
                    episodes: res.results,
                    pages: res.info.pages
                })
            })
            .catch((error) => alert("Invalid Episode Name, Please Retype!!!"))

        this.reset();
    }

    //reset search function
    reset = () => {
        this.setState({
            search: ""
        })
    }
    render() {
        console.log(this.state);
        return (
            <div className="container">
                <h1 className="text-center text-dark mx-5 display-4">All Episodes</h1>
                <hr />
                <div className="row className">
                    <div className="col-12 col-md-6">
                        <Pagination
                            pages={this.state.pages}
                            handleClick={(ele) => this.handleClick(ele)}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Episodes Name"
                                aria-label="Search"
                                onChange={this.handleChange}
                                value={this.state.search}
                            />
                            <button
                                className="btn btn-outline-info my-2 my-sm-0"
                                type="submit"
                                onClick={() => this.filterEpisodes()}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <table className="table table-striped">
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
