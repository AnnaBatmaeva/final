import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Box } from "@mui/material";
import { loginUser } from '../../slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./account.module.scss"

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, error } = useSelector(state => state.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setValidationError('Всі поля обовʼязкові');
            return;
        }

        setValidationError('');
        const result = await dispatch(loginUser({ email, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/');
        }
    };

    return (
        <div className={styles.AccountPage}>
            <Box className={styles.card}>
                <Typography className={styles.title}>LOG IN</Typography>
                {validationError && <Typography color="error">{validationError}</Typography>}
                {error && <Typography color="error">{error}</Typography>}

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

                    <Link className={styles.forgot}>Forgot Password?</Link>

                    <Button
                        variant="contained"
                        fullWidth
                        className={styles.loginBtn}
                        disableElevation
                        onClick={handleLogin}
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'loading...' : 'LOG IN'}
                    </Button>
                </div>

                <div className={styles.divider} />

                <Typography className={styles.newText}>
                    New to Shoe All Brand?
                </Typography>

                <Link to="/registration">
                <Button
                    variant="outlined"
                    fullWidth
                    className={styles.createBtn}
                >
                    CREATE ACCOUNT
                </Button>
                </Link>
            </Box>
        </div>
    )
}

export default Login