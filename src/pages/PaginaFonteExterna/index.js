
import React from "react";
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { forwardRef } from 'react';
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import stockMetaData from './../../assets/stockMetaData.json';



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };





const PageGrid = styled.div`
padding: 64px;
margin-top: 32px;


`




const InfoGrid = styled.div`

display: flex;
padding: 32px;
justify-content: space-between;

`






const DatePicker = styled.div`




display:grid; 
  grid-template-columns: 1fr 1fr ;
 column-gap: 32px;
row-gap: 32px;
padding: 0px 32px; 
padding-bottom: 32px;


@media(max-width: 1200px){


display :none; 
}





`

const DatePickerMobile = styled.div`
display:none; 

@media(max-width: 1200px){
  

  display: grid;
 grid-template-columns: 1fr 1fr ;
 column-gap: 32px;
row-gap: 32px;
padding: 0px 32px; 
padding-bottom: 32px;
}


`



const PaginaFonteExterna = () => {
    const navigate = useNavigate();

    var EndDefault = new Date(); 
    var x = 360; 
    EndDefault.setDate(EndDefault.getDate() - x);
  
    const [Indicator, setIndicator] = React.useState('macd');
    const [startDateValue, setSartDateValue] = React.useState(EndDefault);
    const [endDateValue, setEndDateValue] =   React.useState(new Date());
  
      const [value, setValue] = React.useState(0);
        
  
  
  
      const [response, setResponse] = useState(null)
      const [loading, setLoading] = useState(true)
      const [hasError, setHasError] = useState(false)
  

 

    const RenderLink = ( source, stock ,label  ) =>{



        return(<div onClick={() => navigate(`/indicator/${source}/${stock}/${label}/`)} style = {{color: 'red'}}> {label} </div>)

    }


    return (

        <> <Header />
 
        <PageGrid>
        <InfoGrid> 
      <div>
  <Typography variant = "h3" > Escolha sua ação</Typography>

  </div>
  <div>
  
  </div>
  </InfoGrid>



<div style={{ maxWidth: "100%" , padding :"16px"}}>
        <MaterialTable
          icons={tableIcons}
          columns={[
            { title: "Fonte", field: "Source" },
            { title: "Ação", 
            field: "Label name" ,
            render: rowData =>  RenderLink(rowData.Source, rowData.Stock ,rowData['Label name'])
            },
            { title: "Sigla", field: "Stock" },
          ]}
          data={stockMetaData}
       
          style={{
            padding: '32px',
          }}
          
          options={{
            headerStyle: {
              padding: '8px',
              width: 'bolder'
            },
            cellStyle: {
                padding: '8px'
              },
              pageSize : 25,
              pageSizeOptions : [25, 50, 100],
          }}

          title = "Base de dados"
      

        />
      </div>

            
        </PageGrid>
        
        <Footer/>
        </>
        
        
              
               
            );
};

export default PaginaFonteExterna;
