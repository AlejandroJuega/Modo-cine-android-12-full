const tabs = document.querySelectorAll('.bottom-nav button');
const sections = document.querySelectorAll('section');
tabs.forEach(btn=>{
  btn.onclick=()=>{
    tabs.forEach(b=>b.classList.remove('active'));
    sections.forEach(s=>s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  };
});

const playerModal = document.getElementById('playerModal');
const player = document.getElementById('player');
document.getElementById('closePlayer').onclick=()=>{playerModal.classList.add('hidden');player.pause();};

function openPlayer(src){
  playerModal.classList.remove('hidden');
  player.src=src;
  player.play();
  player.requestFullscreen().catch(()=>{});
}

async function searchMovies(query){
  const res = await fetch(`api/searchProxy.js?q=${encodeURIComponent(query)}`);
  const data = await res.json();
  const cont = document.getElementById('resultados');
  cont.innerHTML = '';
  data.forEach(m=>{
    const c = document.createElement('div');
    c.className='card';
    c.innerHTML=`<img src="${m.image}"><div class="info"><h3>${m.title}</h3></div>`;
    c.onclick=()=>openPlayer(m.video);
    cont.appendChild(c);
  });
}

document.getElementById('searchBtn').onclick=()=>{
  const q = document.getElementById('searchInput').value.trim();
  if(q) searchMovies(q);
};
