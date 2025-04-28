function Toolbar (props) {
    return (
        <div className="toolbar">
            {props.filters.map((filter, index) => (
                <button
                key={index}
                className={"toolbar__option" + (filter === props.selected ? ' selected' : '')}
                onClick={() => {props.onSelectFilter(filter)}}>
                    {filter}
                </button>
            ))}
        </div>
    )
}


export default Toolbar