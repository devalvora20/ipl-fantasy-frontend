import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider,
    Accordion, AccordionSummary, Typography, AccordionDetails, Chip, Paper
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// const PLAYERS = ["Kohli", "Rohit", "David Warner", "de Villiers", "Buttler", "Steven Smith", "Lokesh Rahul", "Andre Russell", "Hardik Pandya", "Shane Watson",
//     "Ravindra Jadeja", "Glenn Maxwell", "Krunal Pandya", "Bravo", "Rashid Khan", "Jasprit Bumrah", "Sunil Narine", "Yuzvendra Chahal", "Mujeeb", "Kagiso Rabada",
//     "Bhuvneshwar", "Finch", "Dhawan", "Shreyas Iyer", "Eoin Morgan", "Manish Pandey", "Samson", "Gayle", "Vijay Shankar", "Pollard",
//     "Ben Stokes", "Shreyas Gopal", "Kedar Jadhav", "Jofra Archer", "Moeen Ali", "Kuldeep Yadav", "D Chahar", "Umesh Yadav", "Shami", "Rahul Chahar",
//     "Khalil Ahmed", "Suryakumar Yadav", "Prithvi Shaw", "Ambati Rayudu", "de Kock", "Jonny Bairstow", "Pant", "MS Dhoni", "Pat Cummins", "Sandeep Sharma", "Jaydev Unadkat", "Prasidh",
//     "Imran Tahir", "Navdeep Saini", "Dale Steyn", "Ishant Sharma"]

const BACKEND_URL = "https://agile-brushlands-63159.herokuapp.com";

const ABHISHEK_TEAM = ["de Villiers", "Suryakumar Yadav", "Gayle", "Ben Stokes", "Glenn Maxwell", "Jasprit Bumrah", "Umesh Yadav", "Sandeep Sharma"];
const ARNAV_TEAM = ["Buttler", "Eoin Morgan", "Pant", "Andre Russell", "Vijay Shankar", "Yuzvendra Chahal", "Khalil Ahmed", "Jaydev Unadkat"];
const DEVAL_TEAM = ["Lokesh Rahul", "Shreyas Iyer", "Jonny Bairstow", "Hardik Pandya", "Shreyas Gopal", "Sunil Narine", "D Chahar", "Imran Tahir"];
const DHAWAN_TEAM = ["Rohit", "Dhawan", "Bravo", "Jofra Archer", "Kagiso Rabada", "Kuldeep Yadav", "Dale Steyn", "Ambati Rayudu"];
const CHINTAN_TEAM = ["Steven Smith", "Finch", "Prithvi Shaw", "Pollard", "Krunal Pandya", "Mujeeb", "Shami", "Pat Cummins"];
const MOHIL_TEAM = ["Kohli", "de Kock", "Manish Pandey", "Ravindra Jadeja", "Kedar Jadhav", "Bhuvneshwar", "Navdeep Saini", "Ishant Sharma"];
const RISHAB_TEAM = ["David Warner", "Samson", "MS Dhoni", "Shane Watson", "Moeen Ali", "Rashid Khan", "Rahul Chahar", "Prasidh"];





const PointsTable = () => {

    const [rows, setRows] = useState([]);
    const [showStats, setShowStats] = useState(false);
    const [detailedTeam, setDetailedTeam] = useState([]);

    const getTeam = (name) => {
        console.log(name);
        let players = [];
        if (name === "Abhishek") {
            for (let player1 of ABHISHEK_TEAM) {
                players.push(<Chip style={{ marginRight: 8 }} variant="outlined" label={player1} icon={<PersonIcon />} />)
            }
        }
        else if (name === "Arnav") {
            for (let player1 of ARNAV_TEAM) {
                players.push(<Chip style={{ marginRight: 8 }} variant="outlined" label={player1} icon={<PersonIcon />} />)
            }
        }
        else if (name === "Deval") {
            for (let player1 of DEVAL_TEAM) {
                players.push(<Chip style={{ marginRight: 8 }} variant="outlined" label={player1} icon={<PersonIcon />} />)
            }
        }
        else if (name === "Chintan") {
            for (let player1 of CHINTAN_TEAM) {
                players.push(<Chip style={{ marginRight: 8 }} variant="outlined" label={player1} icon={<PersonIcon />} />)
            }
        }
        else if (name === "Dhawan") {
            for (let player1 of DHAWAN_TEAM) {
                players.push(<Chip style={{ marginRight: 8 }} variant="outlined" label={player1} icon={<PersonIcon />} />)
            }
        }
        else if (name === "Rishab") {
            for (let player1 of RISHAB_TEAM) {
                players.push(<Chip style={{ marginRight: 8 }} variant="outlined" label={player1} icon={<PersonIcon />} />)
            }
        }
        else if (name === "Mohil") {
            for (let player1 of MOHIL_TEAM) {
                players.push(<Chip style={{ marginRight: 8 }} variant="outlined" label={player1} icon={<PersonIcon />} />)
            }
        }
        return players;
    }

    const getAllData = (playerStats) => {

        let abhishek = { name: "Abhishek" };
        let arnav = { name: "Arnav" };
        let deval = { name: "Deval" };
        let dhawan = { name: "Dhawan" };
        let chintan = { name: "Chintan" };
        let mohil = { name: "Mohil" };
        let rishab = { name: "Rishab" };

        let totalPoints = 0
        let players = []
        for (let player of ABHISHEK_TEAM) {
            totalPoints += playerStats[player].totalPoints;
            players.push({ "name": player, "stats": playerStats[player].stats })
        }
        abhishek["players"] = players
        abhishek["totalPoints"] = totalPoints

        totalPoints = 0
        players = []
        for (let player of ARNAV_TEAM) {
            totalPoints += playerStats[player].totalPoints;
            players.push({ "name": player, "stats": playerStats[player].stats })
        }
        arnav["players"] = players
        arnav["totalPoints"] = totalPoints

        totalPoints = 0
        players = []
        for (let player of DEVAL_TEAM) {
            totalPoints += playerStats[player].totalPoints;
            players.push({ "name": player, "stats": playerStats[player].stats })
        }
        deval["players"] = players
        deval["totalPoints"] = totalPoints

        totalPoints = 0
        players = []
        for (let player of DHAWAN_TEAM) {
            totalPoints += playerStats[player].totalPoints;
            players.push({ "name": player, "stats": playerStats[player].stats })
        }
        dhawan["players"] = players
        dhawan["totalPoints"] = totalPoints

        totalPoints = 0
        players = []
        for (let player of CHINTAN_TEAM) {
            totalPoints += playerStats[player].totalPoints;
            players.push({ "name": player, "stats": playerStats[player].stats })
        }
        chintan["players"] = players
        chintan["totalPoints"] = totalPoints

        totalPoints = 0
        players = []
        for (let player of RISHAB_TEAM) {
            totalPoints += playerStats[player].totalPoints;
            players.push({ "name": player, "stats": playerStats[player].stats })
        }
        rishab["players"] = players
        rishab["totalPoints"] = totalPoints

        totalPoints = 0
        players = []
        for (let player of MOHIL_TEAM) {
            totalPoints += playerStats[player].totalPoints;
            players.push({ "name": player, "stats": playerStats[player].stats })
        }
        mohil["players"] = players
        mohil["totalPoints"] = totalPoints

        let response = [];
        response.push(abhishek)
        response.push(deval)
        response.push(arnav)
        response.push(chintan)
        response.push(dhawan)
        response.push(rishab)
        response.push(mohil)

        return response;
    }

    const classes = useStyles();
    // let controller;
    useEffect(() => {
        // controller = new Controller();
        fetch(BACKEND_URL + "/get-all-stats")
            .then(response => response.json())
            .then((data) => {
                // state = { playerStats: data.stats }
                // setPlayerStats(data.stats)
                let d = getAllData(data.stats);
                setRows(d);
            });
    }, []);
    // setTimeout(() => {
    //     console.log(playerStats)
    //     if (playerStats.length > 0) {
    //         let d = getAllData();
    //         console.log(d);
    //         setRows(d);
    //     }
    // }, 6000);

    const showDetailedStats = (playerStats) => {
        setShowStats(true);
        setDetailedTeam(playerStats);
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Player</TableCell>
                                    <TableCell>Team</TableCell>
                                    <TableCell>Points</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            <Button variant="outlined" color="primary" onClick={() => { showDetailedStats(row) }}>
                                                {row.name}
                                            </Button>
                                        </TableCell>
                                        <TableCell align="left">{getTeam(row.name)}</TableCell>
                                        <TableCell align="left">{row.totalPoints}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Divider orientation="horizontal" style={{ height: 3, color: "black" }} />
                <Grid item xs={12}>
                    {showStats &&
                        <Paper style={{ padding: 10 }}>
                            <div>
                                <Typography >{detailedTeam["name"]}'s Team</Typography>
                            </div>
                            {detailedTeam["players"].map((player, i) => {
                                return (
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>{player["name"]}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <TableContainer component={Paper}>
                                                <Table className={classes.table} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Index</TableCell>
                                                            <TableCell>Match</TableCell>
                                                            <TableCell align="right">Runs</TableCell>
                                                            <TableCell align="right">Fours</TableCell>
                                                            <TableCell align="right">Sixs</TableCell>
                                                            <TableCell align="right">Strike Rate</TableCell>
                                                            <TableCell align="right">Wicket</TableCell>
                                                            <TableCell align="right">Maiden</TableCell>
                                                            <TableCell align="right">Economy</TableCell>
                                                            <TableCell align="right">Total Points</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {player["stats"].map((player, i) => (
                                                            <TableRow key={player.match}>
                                                                <TableCell component="th" scope="row">{i + 1}</TableCell>
                                                                <TableCell component="th" scope="row">{player.match}</TableCell>
                                                                <TableCell align="right">{player.match_stats.runs | 0}</TableCell>
                                                                <TableCell align="right">{player.match_stats.fours | 0}</TableCell>
                                                                <TableCell align="right">{player.match_stats.sixs | 0}</TableCell>
                                                                <TableCell align="right">{player.match_stats.sr | 0}</TableCell>
                                                                <TableCell align="right">{player.match_stats.wicket | 0}</TableCell>
                                                                <TableCell align="right">{player.match_stats.maiden | 0}</TableCell>
                                                                <TableCell align="right">{player.match_stats.economy | 0}</TableCell>
                                                                <TableCell align="right">{player.match_stats.total_match_points | 0}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })}
                        </Paper>
                    }
                </Grid>
            </Grid>
        </div>
    );
}


export default PointsTable;