import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


export default function TodoForm({ add }) {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        add(text);
        setText("");
    }

    return (
        <ListItem disableGutters>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Add Todo"
                    placeholder="Do Something!"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="Create Todo" edge="end" type="submit">
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ListItem>
    );
}
