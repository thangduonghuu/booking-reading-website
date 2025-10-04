'use client';
import { Grid, Tab, Tabs } from "@mui/material";
import Container from "../components/Container/container";
import { SearchBar } from "../components/Searchbar/SearchBar";
import { useState } from "react";
import CardBook from "../components/CardBook/CardBook";
import AudioBar from "../components/AudioBar/AudioBar";

export default function HomePage() {
    const [tab, setTab] = useState(1)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue)
    }

    return (
        <Container className="flex flex-col min-h-screen">
            <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
            <p className="text-lg text-left mb-4">What do you want to read today?</p>
            <SearchBar />
            <div className="pt-4">
                <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Novel" onClick={() => setTab(0)} />
                    <Tab label="Self-Love" onClick={() => setTab(1)} />
                    <Tab label="Science" onClick={() => setTab(2)} />
                </Tabs>
            </div>
            <div className="pt-4">
                <Grid container spacing={2}>
                    <Grid size={2}>
                        <CardBook title="Beyond the ocean door" author="J.D. Salinger" coverImage="/images/book-cover.jpg" />
                    </Grid>
                    <Grid size={2}>
                        <CardBook title="Beyond the ocean door" author="J.D. Salinger" coverImage="/images/book-cover-1.jpeg" />
                    </Grid>
                    <Grid size={2}>
                        <CardBook title="Beyond the ocean door" author="J.D. Salinger" coverImage="/images/book-cover-1.jpeg" />
                    </Grid>
                    <Grid size={2}>
                        <CardBook title="Beyond the ocean door" author="J.D. Salinger" coverImage="/images/book-cover-1.jpeg" />
                    </Grid>
                    <Grid size={2}>
                        <CardBook title="Beyond the ocean door" author="J.D. Salinger" coverImage="/images/book-cover-1.jpeg" />
                    </Grid>
                    <Grid size={2}>
                        <CardBook title="Beyond the ocean door" author="J.D. Salinger" coverImage="/images/book-cover-1.jpeg" />
                    </Grid>
                </Grid>
            </div>
            <AudioBar src="/path/to/your/audio/file.mp3" />
        </Container>
    )
}