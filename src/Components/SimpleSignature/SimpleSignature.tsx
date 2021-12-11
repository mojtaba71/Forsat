import { FC, useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FileInput from "../../Utils/HookForm/FileInput";
import Fieldset from "../../Utils/Fieldset/Fieldset";

interface IProps {}

const SimpleSignature: FC<IProps> = ({}) => {
  const schema = yup.object().shape({});

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<any>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const submit = () => {};

  return (
    <>
      <Grid container alignItems="center">
        <Grid
          item
          xs={12}
          container
          justify="space-between"
          alignContent="center"
        >
          <Fieldset name={"تایید امضا ساده"} />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={1}
            justify="space-between"
            component="form"
            id="header-form"
            onSubmit={handleSubmit(submit)}
          >
            <Grid container>
              <Grid container item lg={4} xs={4} justifyContent="center">
                <FileInput
                  name="file1"
                  entityType="GUARANTEE"
                  control={control}
                  accept=".docx,.xlsx,.PDF,.JPEG,.PNG"
                />
              </Grid>
              <Grid container item lg={4} xs={4} justifyContent="center">
                <FileInput
                  name="file2"
                  entityType="GUARANTEE"
                  control={control}
                  accept=".docx,.xlsx,.PDF,.JPEG,.PNG"
                />
              </Grid>
              <Grid
                container
                item
                lg={4}
                xs={4}
                justifyContent="center"
                alignItems="center"
              >
                <Button variant="contained" color="primary">
                  شباهت سنجی
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SimpleSignature;
