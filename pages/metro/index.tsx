import React, { useState, useEffect } from 'react';
import { getDistance } from 'geolib';
import { metroStations } from "../../utils/station";
import { StationInfo } from "../../Interfaces/MetroInterface";
import { CircularProgress, Typography, Card, CardContent, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        margin: '20px',
        textAlign: 'center'
    },
    progress: {
        display: 'block',
        margin: '40px auto'
    },
});

const averageWalkingSpeed = 5000; // meters per hour (about 5 km/h)

const MetroLocator: React.FC = () => {
    const classes = useStyles();
    const [stationInfo, setStationInfo] = useState<StationInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const updateLocation = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                setLoading(false);
                const userLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };

                const nearestStations = metroStations
                    .map((station) => ({
                        ...station,
                        distance: getDistance(userLocation, station),
                    }))
                    .sort((a, b) => a.distance - b.distance);

                const first = nearestStations[0];
                const second = nearestStations[1];

                if (first.distance < 200) {
                    setStationInfo({
                        type: 'station',
                        name: first.name,
                        line: first.line,
                    });
                } else if (first.distance < 500 && second.distance < 500) {
                    const timeToNextStation = (first.distance / averageWalkingSpeed) * 60;
                    setStationInfo({
                        type: 'between',
                        first: first.name,
                        second: second.name,
                        timeToNextStation,
                    });
                } else {
                    setStationInfo({ type: 'none' });
                }
            });
        };

        updateLocation();
        const intervalId = setInterval(updateLocation, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            {loading ? (
                <CircularProgress className={classes.progress} />
            ) : (
                stationInfo && (
                    <Card className={classes.card}>
                        <CardContent>
                            {stationInfo.type === 'station' && (
                                <Typography variant="h5" style={{ color: stationInfo.line }}>
                                    Вы находитесь на станции {stationInfo.name}
                                </Typography>
                            )}
                            {stationInfo.type === 'between' && (
                                <Typography variant="h5">
                                    Вы находитесь между станциями {stationInfo.first} и {stationInfo.second}
                                    <br />
                                    Ориентировочное время до следующей станции: {stationInfo.timeToNextStation.toFixed(2)} минут
                                </Typography>
                            )}
                            {stationInfo.type === 'none' && (
                                <Typography variant="h5">
                                    Вы находитесь не в метро
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                )
            )}
        </Box>
    );
};

export default MetroLocator;
