import columns from './utils/columns';
import lines from './utils/lines';
import HeaderTable from './components/HeaderTable';
import LinesTable from './components/LinesTable';


function CoolTable({data}){
    const columnsName = columns(data);
    const linesValues = lines(data, columnsName);
    return (<div>
        <HeaderTable columnsName={columnsName}/>
        <LinesTable linesValue={linesValues}/>
    </div>
    )   
}

export default CoolTable;

