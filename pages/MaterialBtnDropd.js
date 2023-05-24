import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const MaterialBtnDropd = () => {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<div>
			<Stack direction="row" spacing={2}>
				<Button variant="outlined" startIcon={<DeleteIcon />}>
					Delete
				</Button>
				<Button variant="contained" endIcon={<SendIcon />}>
					Send
				</Button>
			</Stack>

			<Box sx={{ '& button': { m: 1 } }}>
				<div>
					<Button size="small">Small</Button>
					<Button size="medium">Medium</Button>
					<Button size="large">Large</Button>
				</div>
				<div>
					<Button variant="outlined" size="small">
						Small
					</Button>
					<Button variant="outlined" size="medium">
						Medium
					</Button>
					<Button variant="outlined" size="large">
						Large
					</Button>
				</div>
				<div>
					<Button variant="contained" size="small">
						Small
					</Button>
					<Button variant="contained" size="medium">
						Medium
					</Button>
					<Button variant="contained" size="large">
						Large
					</Button>
				</div>
			</Box>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<FormControl sx={{ m: 1, minWidth: 120 }} disabled>
				<InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-disabled-label"
					id="demo-simple-select-disabled"
					value={age}
					label="Age"
					onChange={handleChange}>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
				<FormHelperText>Disabled</FormHelperText>
			</FormControl>
			<FormControl sx={{ m: 1, minWidth: 120 }} error>
				<InputLabel id="demo-simple-select-error-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-error-label"
					id="demo-simple-select-error"
					value={age}
					label="Age"
					onChange={handleChange}
					renderValue={(value) => `⚠️  - ${value}`}>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
				<FormHelperText>Error</FormHelperText>
			</FormControl>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-readonly-label"
					id="demo-simple-select-readonly"
					value={age}
					label="Age"
					onChange={handleChange}
					inputProps={{ readOnly: true }}>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
				<FormHelperText>Read only</FormHelperText>
			</FormControl>
			<FormControl required sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-required-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-required-label"
					id="demo-simple-select-required"
					value={age}
					label="Age *"
					onChange={handleChange}>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
				<FormHelperText>Required</FormHelperText>
			</FormControl>
		</div>
	)
}
export default MaterialBtnDropd