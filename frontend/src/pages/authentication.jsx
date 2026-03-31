import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4f46e5', // modern indigo
        },
        secondary: {
            main: '#9333ea',
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});

export default function Authentication() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false)

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                await handleLogin(username, password);
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("");
                setFormState(0);
                setPassword("");
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else if (err.request) {
                setError("Cannot connect to server.");
            } else {
                setError(err.message || "Something went wrong.");
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                {/* LEFT SIDE */}
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        background: 'linear-gradient(135deg, #3d3992, #9333ea)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexDirection: 'column',
                        textAlign: 'center',
                        p: 5
                    }}
                >
                    <Typography variant="h3" fontWeight="bold">
                        StackMeet
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Connect. Collaborate. Communicate.
                    </Typography>
                </Grid>

                {/* RIGHT SIDE */}
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(to right, #15142b, #475276)'
                    }}
                >
                    <Box
                        sx={{
                            width: '80%',
                            p: 4,
                            borderRadius: 4,
                            backdropFilter: 'blur(10px)',
                            background: 'rgb(249, 249, 249)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            textAlign: 'center'
                        }}
                    >
                        <Avatar sx={{ m: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography variant="h5" fontWeight="bold">
                            {formState === 0 ? "Welcome Back" : "Create Account"}
                        </Typography>

                        {/* TOGGLE */}
                        <Box sx={{ mt: 2 }}>
                            <Button
                                variant={formState === 0 ? "contained" : "text"}
                                onClick={() => setFormState(0)}
                                sx={{ mr: 1, borderRadius: 3 }}
                            >
                                Sign In
                            </Button>
                            <Button
                                variant={formState === 1 ? "contained" : "text"}
                                onClick={() => setFormState(1)}
                                sx={{ borderRadius: 3 }}
                            >
                                Sign Up
                            </Button>
                        </Box>

                        {/* FORM */}
                        <Box component="form" noValidate sx={{ mt: 3 }}>

                            {formState === 1 && (
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            )}

                            <TextField
                                margin="normal"
                                fullWidth
                                label="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Typography color="error" variant="body2">
                                {error}
                            </Typography>

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    py: 1.2,
                                    borderRadius: 3,
                                    fontSize: '1rem'
                                }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Login" : "Register"}
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar open={open} autoHideDuration={4000} message={message} />
        </ThemeProvider>
    );
}

