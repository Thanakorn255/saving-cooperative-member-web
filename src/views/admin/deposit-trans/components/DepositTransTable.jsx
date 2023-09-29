import CardMenu from "components/card/CardMenu";
import Card from "components/card";

import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const DepositTransTable = (props) => {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  return (
    <Card extra={"w-full h-full p-4"}>
      <div class="relative flex items-center justify-between">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
        รายการเงินฝากออมทรัพย์ประจำปี
        <span className="text-[14px] ml-5 text-[#595959] font-normal">อัพเดทข้อมูลครั้งล่าสุด 18/08/2566</span>
        </div>
        <CardMenu />
      </div>

      <div class="h-full overflow-x-scroll xl:overflow-x-hidden">
        <table
          {...getTableProps()}
          className="mt-8 h-max w-full"
          variant="simple"
          color="gray-500"
          mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700 "
                    key={index}
                  >
                    <div className="text-xs font-bold tracking-wide text-gray-600">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "No") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white ">
                          {index+1}
                        </p>
                      );
                    } else if (cell.column.Header === "PostingDate") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white ml-2">
                        {cell.value}
                      </p>
                      );
                    } else if (cell.column.Header === "Deposit") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white ml-2">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "Balance") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white ml-2">
                        {cell.value === null ? <>0.00</>:<>{cell.value}</>}
                      </p>
                      );
                    }
                    else if (cell.column.Header === "AccumulatInterest") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white ml-2">
                        {cell.value}
                      </p>
                      );
                    }
                    else if (cell.column.Header === "Status") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white ml-2">
                        {cell.value}
                      </p>
                      );
                    }
              
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                        className="pt-[14px] pb-3 text-[14px]"
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default DepositTransTable;
