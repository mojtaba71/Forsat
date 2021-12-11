import React, { useState } from "react";
import { createStyles } from "@material-ui/styles";
import {
  Box,
  makeStyles,
  IconButton,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Controller, Control } from "react-hook-form";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "../Modal/Modal";
import DescriptionIcon from "@material-ui/icons/Description";

export type FileUploadProps = {
  control: Control<any>;
  name: string;
  accept: string;
  entityType: string;
  label?: string;
};

const Styles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      textAlign: "center",
      display: "flex",
      "&:hover p,&:hover svg,& img": {
        opacity: 1,
      },
      "& p, svg": {
        opacity: 0.4,
      },
      "&:hover img": {
        opacity: 0.3,
      },
    },
    uploadContainer: {
      pointerEvents: "none",
      background: "linear-gradient(#FCD300 ,#BC7708)",
      borderRadius: "10px",
      position: "relative",
    },
    iconText: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
    },
    hidden: {
      display: "none",
    },
    preview: {
      width: "100px",
      height: "100px",
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPositionY: "center",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      cursor: "pointer",
    },
    backgroundYellow: {
      background: "linear-gradient(#FCD300 ,#BC7708)",
      borderRadius: "10px",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    fullViewImage: {
      objectFit: "contain",
      width: "-webkit-fill-available",
      height: "-webkit-fill-available",
    },
    curserPointer: {
      cursor: "pointer",
    },
    deleteBtnContainer: {
      position: "absolute",
      top: "0",
    },
    previewContainer: {
      "& img": {
        with: "100%",
      },
    },
    label: {
      display: "block",
      marginLeft: 5,
      color: theme.palette.text.primary,
      fontSize: 16,
    },
  })
);

const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  name,
  control,
  entityType,
  label,
}) => {
  const classes = Styles();
  const [fileUrl, setFileUrl] = useState<any>();
  const [fileType, setFileType] = useState<string>("");
  const [modalSwitch, setModalSwitch] = useState(false);
  const [loading, setLoading] = useState(false);

  // const [deleteFile, { loading: uploadLoaing, error: uploadError }] =
  //   useMutation(DELETE_FILE, {
  //     onCompleted: (e: any) => {
  //       // console.log(e);
  //     },
  //   });
  // const [uploadFile, { loading: createLoading, error: createError }] =
  //   useMutation(UPLOAD_FILE, {
  //     onCompleted: (e: any) => {
  //       setLoading(false);
  //     },
  //     onError: () => {
  //       setFileUrl(null);
  //     },
  //   });

  const handleChange = (event: any, field: any) => {
    setLoading(true);
    var reader = new FileReader();
    let file = event?.target?.files[0];
    if (file) {
      reader.readAsDataURL(file ?? {});
      reader.onloadend = async () => {
        let splited = String(reader.result).split(",");
        let type = file?.name?.split(".").pop();
        setFileType(type);
        let uploadVariables = {
          binary: Array.isArray(splited) ? splited[1] : null,
          size: file.size,
          name: file.name,
          entityType: entityType,
          type: type,
        };
        // let response: any = await uploadFile({
        //   variables: { entity: uploadVariables },
        // });
        // field.onChange(response?.data?.createFile?.url);
      };
    }
  };
  return (
    <>
      {label && <label className={classes.label}>{label}</label>}
      <Controller
        render={({ field }) => (
          <>
            {field.value !== fileUrl && setFileUrl(field.value)}
            {field.value && setFileType(field?.value?.split(".").pop())}
            <Modal
              open={modalSwitch}
              handleClose={() => setModalSwitch(false)}
              fullWidth
              maxWidth="md"
              body={
                <>
                  <Grid xs={12}>
                    {fileType === "pdf" ? (
                      <iframe
                        title={fileUrl}
                        src={fileUrl}
                        width="100%"
                        height="400"
                        className={classes.previewContainer}
                      />
                    ) : (
                      <img
                        src={fileUrl?.constUrl ? fileUrl?.constUrl : fileUrl}
                        alt="previewImage"
                        className={classes.fullViewImage}
                      />
                    )}
                  </Grid>
                </>
              }
            />
            <input
              id={name}
              accept={accept}
              className={classes.hidden}
              type="file"
              onChange={(event: any) => {
                handleChange(event, field);
              }}
            />
            {!fileUrl && (
              <>
                {loading ? (
                  <Box
                    width="100px"
                    height="100px"
                    className={classes.backgroundYellow}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <label htmlFor={name} className={classes.root}>
                    <Box
                      width="100px"
                      height="100px"
                      className={classes.uploadContainer}
                      hidden={fileUrl ? true : false}
                    >
                      <label htmlFor={name}>
                        <Box
                          height="100px"
                          width="100px"
                          className={classes.iconText}
                        >
                          <AttachFileIcon fontSize="large" />
                        </Box>
                      </label>
                    </Box>
                  </label>
                )}
              </>
            )}

            {fileUrl && (
              <>
                <Box
                  width="100px"
                  height="100px"
                  className={classes.backgroundYellow}
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <>
                      <div
                        onClick={() => {
                          if (fileType === "xlsx" || fileType === "docx") {
                            window.open(fileUrl, "_blank");
                          } else {
                            setModalSwitch(true);
                          }
                        }}
                        className={classes.preview}
                        style={{
                          backgroundImage: `url(${fileUrl})`,
                        }}
                      >
                        {(fileType === "pdf" ||
                          fileType === "xlsx" ||
                          fileType === "docx") && (
                          <Grid
                            container
                            justify="center"
                            alignItems="center"
                            alignContent="center"
                            style={{ height: "100%" }}
                          >
                            <DescriptionIcon
                              fontSize="large"
                              color="disabled"
                            />
                          </Grid>
                        )}
                      </div>
                      <div className={classes.deleteBtnContainer}>
                        <IconButton>
                          <DeleteIcon
                            fontSize="default"
                            color="error"
                            onClick={() => {
                              // deleteFile({
                              //   variables: { entity: { url: fileUrl } },
                              // });
                              field.onChange(null);
                              setFileUrl(null);
                              setFileType("");
                            }}
                          />
                        </IconButton>
                      </div>
                    </>
                  )}
                </Box>
              </>
            )}
          </>
        )}
        name={name}
        control={control}
      />
    </>
  );
};

export default FileUpload;
