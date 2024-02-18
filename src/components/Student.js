import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paperStyle: {
    padding: '50px 20px',
    width: 600,
    margin: '20px auto',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('https://i.pinimg.com/originals/6f/a7/0b/6fa70b3e02061709004d9bcd76bd74ea.jpg')`, // Background image URL with opacity
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerStyle: {
    minHeight: '100vh', // Ensure the container fills the entire viewport vertically
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  field: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  backgroundImage: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundImage: 'url("https://wallpapercave.com/wp/bVNflg7.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

export default function Person() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [caste, setCaste] = useState('');
  const [religion, setReligion] = useState('');
  const [persons, setPersons] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const person = { name, age, gender, caste, religion };
    console.log(person);
    fetch("http://localhost:8080/person/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(person)
    }).then(() => {
      console.log("New Person added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/person/getAll")
      .then(res => res.json())
      .then((result) => {
        setPersons(result);
      });
  }, []);

  return (
    <div className={classes.containerStyle}>
      <div className={classes.backgroundImage}></div>
      <Container>
        <Paper elevation={3} className={classes.paperStyle}>
          <h1 style={{ color: "blue" }}><u>Add Person</u></h1>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.field}
            />
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              fullWidth
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={classes.field}
            />
            <TextField
              id="outlined-basic"
              label="Gender"
              variant="outlined"
              fullWidth
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={classes.field}
            />
            <TextField
              id="outlined-basic"
              label="Caste"
              variant="outlined"
              fullWidth
              value={caste}
              onChange={(e) => setCaste(e.target.value)}
              className={classes.field}
            />
            <TextField
              id="outlined-basic"
              label="Religion"
              variant="outlined"
              fullWidth
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              className={classes.field}
            />
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Submit
            </Button>
          </form>
        </Paper>
        <h1>Persons</h1>
        {persons.map(person => (
          <Paper elevation={3} className={classes.paperStyle} key={person.id}>
            <p className={classes.field}><strong>Name:</strong> {person.name}</p>
            <p className={classes.field}><strong>Age:</strong> {person.age}</p>
            <p className={classes.field}><strong>Gender:</strong> {person.gender}</p>
            <p className={classes.field}><strong>Caste:</strong> {person.caste}</p>
            <p className={classes.field}><strong>Religion:</strong> {person.religion}</p>
          </Paper>
        ))}
      </Container>
    </div>
  );
}
