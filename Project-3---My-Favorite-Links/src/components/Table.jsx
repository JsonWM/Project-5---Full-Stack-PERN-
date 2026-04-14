function TableHeader() {
    return (
        <thead>
            <tr>
                <th className="px-5 border-bottom-0">Name</th>
                <th className="px-5 border-bottom-0">Url</th>
                <th className="px-5 border-bottom-0"><span>Update</span><span className="ms-4">Remove</span></th>
            </tr>
        </thead>
    );
}
function TableBody(props) {

    let dataTable = props.data.map((d) => {
        return (
            <tr key={d.id}>
                <td className="px-4  text-center">{d.name}</td>
                <td className="px-4 text-center ">
                    <a href={d.url} target="_blank">{d.url}</a>
                </td>
                <td className="text-center">
                    <button onClick={() => props.onEdit(d)} className="btn btn-warning me-2">Update</button>
                    <button onClick={() => props.remover(d.id)} className="btn btn-danger">Remove</button>
                </td>
            </tr>
        )
    }
    )

    if (props.data.length > 0) {
        return (<tbody>{dataTable}</tbody>)
    } else {
        return (

            <tbody className="text-center">
                <tr>
                    <td colSpan="3" className="p-5  border-sm"><label htmlFor="linkName" className="text-muted fw-light display-6">There are no links, Add your favorite links</label></td>
                </tr>
            </tbody>

        )
    }


}

function Table(props) {

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-8">
                <table className="table table-hover text-center mt-6">
                    <TableHeader></TableHeader>
                    <TableBody data={props.data} onEdit={props.onEdit} remover={props.remover}></TableBody>
                </table>

            </div>

        </div>





    )
}

export default Table;