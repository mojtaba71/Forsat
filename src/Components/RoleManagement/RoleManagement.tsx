import {
  Button,
  Collapse,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import Fieldset from "../../Utils/Fieldset/Fieldset";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

interface IProps {}

const RoleManagement: React.FC<IProps> = ({}) => {
  const [data, setData] = useState<any[]>([
    {
      id: 3,
      name: "admin",
    },
    {
      id: 2,
      name: "supervisor",
    },
    {
      id: 4,
      name: "sysadmin",
    },
    {
      id: 1,
      name: "user",
    },
  ]);
  const [page, setPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [allRows, setAllRows] = useState(0);
  const history = useHistory();
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  let defaultVariables = {
    pl: "10",
    pn: String(page === 0 ? 1 : page),
  };

  useEffect(() => {
    getStoreData(defaultVariables);
  }, []);

  const getStoreData = (command: any) => {
    //   StoreServices.GetStores(command, (res: StoreTable) => {
    //     Object.assign(res.units, { expanded: false });
    //     setData(res.units);
    //     setAllRows(+res.count);
    //   });
  };

  return (
    <>
      <Grid container xs={12}>
        <Grid
          item
          xs={12}
          container
          justify="space-between"
          alignContent="center"
        >
          <Fieldset name={"مدیریت نقش ها"} />
        </Grid>

        <TableContainer component={Paper} square elevation={0}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>ردیف</TableCell>
                <TableCell>نام نقش</TableCell>
                <TableCell>تعداد کاربران الحاق شده</TableCell>
                <TableCell>عملیات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item: any, index: number) => (
                <>
                  <TableRow hover key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{2}</TableCell>

                    <TableCell width="240px" className="">
                      <Grid container justifyContent="center" wrap="nowrap">
                        <IconButton onClick={() => {}}>
                          <EditRoundedIcon
                            style={{ color: "rgb(44 93 225)" }}
                          />
                        </IconButton>
                        <IconButton onClick={() => {}}>
                          <DeleteForeverIcon color="error" />
                        </IconButton>
                      </Grid>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            // component="div"
            count={allRows}
            page={page}
            rowsPerPage={pageLimit}
            rowsPerPageOptions={[10, 15, 25]}
            onPageChange={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage={"تعداد سطر"}
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} از ${count !== -1 ? count : 0}${to}`
            }
          />
        </TableContainer>
      </Grid>
    </>
  );
};

export default RoleManagement;
