import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import {
    CreateClientValidationSchema,
    CreateClientValidationSchemaType,
} from "../../../validations/private/client";
import get from "lodash/get";

const CreateClient = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateClientValidationSchemaType>({
        resolver: zodResolver(CreateClientValidationSchema),
        defaultValues: {
            contactNumber: "",
            email: "",
            firstName: "",
            lastName: "",
        },
    });
    const onSubmit = (data: CreateClientValidationSchemaType) => {
        console.log(data);
    };

    return (
        <Box>
            <Typography variant="h5">Create new client</Typography>

            <Paper
                elevation={4}
                sx={{
                    p: 2,
                    mt: 2,
                }}
            >
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        flexGrow: 1,
                    }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <TextField
                                {...register("firstName")}
                                required
                                id="firstName"
                                label="First name"
                                fullWidth
                                helperText={get(errors, "firstName.message")}
                                error={Boolean(get(errors, "firstName"))}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <TextField
                                {...register("lastName")}
                                required
                                id="lastName"
                                label="Last name"
                                fullWidth
                                helperText={get(errors, "lastName.message")}
                                error={Boolean(get(errors, "lastName"))}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <TextField
                                {...register("email")}
                                required
                                id="email"
                                label="Email address"
                                type="email"
                                fullWidth
                                helperText={get(errors, "email.message")}
                                error={Boolean(get(errors, "email"))}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <TextField
                                {...register("contactNumber")}
                                required
                                id="contactNumber"
                                label="Contact number"
                                type="tel"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            +91
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={get(
                                    errors,
                                    "contactNumber.message",
                                )}
                                error={Boolean(get(errors, "contactNumber"))}
                            />
                        </Grid>
                    </Grid>

                    <Button type="submit">Submit</Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default CreateClient;
