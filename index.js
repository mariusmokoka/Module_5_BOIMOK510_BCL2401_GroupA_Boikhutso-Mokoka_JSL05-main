// Array of song objects
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = {};

    // Iterate through each Guardian
    for (const guardian in guardians) {
        const preferredGenre = guardians[guardian];
        // Filter songs based on the preferred genre
        const playlist = songs.filter(song => song.genre === preferredGenre);
        // Store the playlist in the playlists object
        playlists[guardian] = playlist;
    }

    return playlists;
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
for (const guardian in playlists) {
    console.log(`${guardian}'s Playlist:`);
    playlists[guardian].forEach(song => {
        console.log(`${song.title} - ${song.artist}`);
    });
    console.log(); // Empty line for separation
}
