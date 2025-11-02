export default async function handler(req,res){
  const q = req.query.q?.toLowerCase()||'';
  const dummy = [
    {title:'Avatar 2', image:'https://image.tmdb.org/t/p/w500/tn2ahY7NqS8EzXx5U4T6YvFJ0.jpg', video:'https://www.w3schools.com/html/mov_bbb.mp4'},
    {title:'Barbie', image:'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg', video:'https://www.w3schools.com/html/mov_bbb.mp4'},
    {title:'Oppenheimer', image:'https://image.tmdb.org/t/p/w500/bJFKsV3gF3sYp4ovPqGNsq4CPGK.jpg', video:'https://www.w3schools.com/html/mov_bbb.mp4'}
  ];
  const results = dummy.filter(m=>m.title.toLowerCase().includes(q));
  res.status(200).json(results);
}const key = '3ed6afc36dca3cbe76326252923044e9';
