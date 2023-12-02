import columns from './utils/columns';
import HeaderTable from './components/HeaderTable';


function CoolTable({data}){
    const columnsName = columns(data);
    return (<div>
        <HeaderTable columnsName={columnsName}/>
    </div>
    )   
}

export default CoolTable;

