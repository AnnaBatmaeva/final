import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Box, Snackbar, Alert } from "@mui/material";
import { registerUser } from '../../slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./account.module.scss"

function Registration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, error } = useSelector(state => state.user);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('');
    const [successOpen, setSuccessOpen] = useState(false);

    const handleRegister = async () => {
        if (!username || !email || !password) {
            setValidationError('Всі поля обовʼязкові');
            return;
        }

        if (password.length < 6) {
            setValidationError('Пароль мінімум 6 символів');
            return;
        }

        setValidationError('');
        const result = await dispatch(registerUser({ username, email, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/');
        }
    };

    return (
        <div className={styles.AccountPage}>
            <Box className={styles.card}>
                <Typography className={styles.title}>Registration</Typography>
                {validationError && <Typography color="error">{validationError}</Typography>}
                {error && <Typography color="error">{error}</Typography>}

                <TextField
                    label="User name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />

                <div className={styles.form}>
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        size="medium"
                    />

                    <TextField
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        type="password"
                        size="medium"
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        className={styles.loginBtn}
                        disableElevation
                        onClick={handleRegister}
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'loading...' : 'Sign up'}
                    </Button>
                </div>

                <div className={styles.divider} />

                <Typography className={styles.newText}>
                    Already have an account?
                </Typography>

                <Link to="/login">
                    <Button
                        variant="outlined"
                        fullWidth
                        className={styles.createBtn}
                    >
                        Sign in
                    </Button>
                </Link>
            </Box>
            <Snackbar
                open={successOpen}
                autoHideDuration={2000}
                onClose={() => setSuccessOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="success" variant="filled">
                    Account successfully created 🎉
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Registration