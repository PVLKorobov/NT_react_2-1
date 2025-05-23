import { Component } from "react";
import Toolbar from "./Toolbar.jsx";
import ProjectList from "./ProjectList.jsx";


class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = { selected: "All" }
    }
    
    onSelectFilter (selectedFilter) {
        this.setState({ selected: selectedFilter })
        console.log(`set filter to ${selectedFilter}`)
    }
    
    render () {
        const filteredProjectList = this.props.projects.filter((project) => this.state.selected === 'All' || project.category === this.state.selected)

        return (
            <div className="portfolio">
                <Toolbar
                filters={this.props.filters}
                selected={this.state.selected}
                onSelectFilter={this.onSelectFilter.bind(this)}
                />
                <ProjectList projects={filteredProjectList} />
            </div>
        )
    }
}


export default Portfolio