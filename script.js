const songs = [
    {number: 1, title: "Elegie", duration: "1:27"},
    {number: 2, title: "IDK", duration: "3:16"},
    {number: 3, title: "Wtf Bby I'm Lit", duration: "2:46"},
    {number: 4, title: "Anh Không Muốn Nó Dễ Dàng", duration: "2:45"},
    {number: 5, title: "Baby (feat. marzuz)", duration: "2:53"},
    {number: 6, title: "Yêu Anh Giết Anh", duration: "2:45"},
    {number: 7, title: "Mắt Môi Tay Chân (feat.Tage)", duration: "3:12"},
    {number: 8, title: "Đao Của Anh Vừa", duration: "2:04"},
    {number: 9, title: "Là Gì Của Nhau", duration: "2:22"},
    {number: 10, title: "Night In Prague", duration: "3:33"},
    {number: 11, title: "Một Cái Ôm", duration: "3:21"},
    {number: 12, title: "Liệm", duration: "3:53"},
    {number: 13, title: "Nếu Như Ta Chẳng Còn (feat.A$AP Ướt Mi)", duration: "5:17"},
    {number: 14, title: "Ai Mới Là Kẻ Xấu Xa", duration: "3:11"},
    {number: 15, title: "Slippery (feat.Tùng Dương)", duration: "3:35"},
    {number: 16, title: "Intenpol", duration: "0:53"},
    {number: 17, title: "Tây Thi", duration: "1:44"},
    {number: 18, title: "Hút Và Hút", duration: "2:14"},
    {number: 19, title: "Dưa Chua", duration: "3:02"},
    {number: 20, title: "Xa Xôi (feat.Obito)", duration: "3:37"},
    {number: 21, title: "Che Phủ", duration: "2:35"},
    {number: 22, title: "Oanh M = Thuoc", duration: "3:24"},
    {number: 23, title: "Ghet Xog Lai Thik", duration: "1:53"},
    {number: 24, title: "Nhìn Kẻ Thù Của Tao", duration: "3:54"},
    {number: 25, title: "Envy (feat.THANHDRAW)", duration: "3:55"},
    {number: 26, title: "Cảm Ơn", duration: "2:39"},
    {number: 27, title: "Không Cần Lo Cho Tao", duration: "2:36"},
    {number: 28, title: "Huh (feat.RPT Orijinn & THANKDRAW)", duration: "4:11"},
    {number: 29, title: "Nguyễn Văn Mười", duration: "4:02"},
    {number: 30, title: "Thịt Lợn", duration: "3:48"},
]

function createSong(song) {
    const track = document.createElement('div');
    track.className = 'track';
    track.dataset.trackNumber = song.number;

    track.innerHTML = `
                    <div class="left-side">
                        <span class="track-number">${song.number}</span>
                        <span class="play-button">▶</span>
                    </div>

                    <div class="song-info">
                        <p class="track-name">${song.title}</p>
                        <p class="artist">RPT MCK</p>
                    </div>

                    <button class="save">+</button>
                    <span class="duration">${song.duration}</span>
                    <button class="more-option">⋯</button>
    `;

    return track;
}


const musicList = document.querySelector('.music');

songs.forEach (song => {
    const track = createSong(song);
    musicList.appendChild(track);
});