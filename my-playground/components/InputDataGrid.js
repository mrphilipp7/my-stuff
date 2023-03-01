import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { GridToolbarContainer } from "@mui/x-data-grid";
import { GridToolbarExport } from "@mui/x-data-grid";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
/*
------------------------------------------------------props-----------------------------------------------------------
Rows ->(needed) fill with rows --- more row props can be found @ https://mui.com/x/react-data-grid/row-definition/
Columns -> (needed) fill with columns --- more column props can be found @ https://mui.com/x/react-data-grid/column-definition/ 
styling - (optional) pass tailwind formated css to the div container for the table  --- documentation @https://tailwindcss.com/ --- generally p-4 is standard 
 
------------------------------------------------------dependencies-------------------------------------------------------
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @mui/x-data-grid

---------------------------------------------------toolbar information--------------------------------------------------
GridToolBarExport -> will allow the user to export data to CSV or print option. 
More API information can be found @https://mui.com/x/api/data-grid/grid-csv-export-options/ and @https://mui.com/x/api/data-grid/grid-print-export-options/
*/

export function SortedDescendingIcon() {
  return <ExpandMoreIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ExpandLessIcon className="icon" />;
}

const InputDataGrid = ({ Rows = null, Columns = null, styling = null }) => {
  // const [pageSize, setPageSize] = useState(5);

  return (
    <div className={`${styling}`}>
      <DataGrid
        editMode="row"
        rows={Rows}
        columns={Columns}
        // pageSize={pageSize}
        // onPageChange={(newPageSize) => setPageSize(newPageSize)}
        // rowsPerPageOptions={[5, 10, 50]}
        //-----on row/cell edit-----//
        //-----on row/cell edit stop-----//
        sx={{ borderRadius: 1, borderColor: "#D1D5DB" }}
        components={{
          Toolbar: () => {
            return (
              <GridToolbarContainer>
                <div className="w-full flex justify-end pr-4 space-x-4 ">
                  <GridToolbarQuickFilter />
                  <GridToolbarExport />
                </div>
              </GridToolbarContainer>
            );
          },
          ColumnSortedDescendingIcon: SortedDescendingIcon,
          ColumnSortedAscendingIcon: SortedAscendingIcon,
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  );
};

export default InputDataGrid;
