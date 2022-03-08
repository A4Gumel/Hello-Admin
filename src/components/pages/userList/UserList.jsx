import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { userRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 160, renderCell: (params)=>{
            return(
                <div className="userListUser">
                    <img src={params.row.avatar} alt="" className="userListImg"/>
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'E-mail', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          sortable: true,
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            width: 160,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/user/"+params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutlineRoundedIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            } 
        },
      ];

  return (
    <div className="userList">
        <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}
