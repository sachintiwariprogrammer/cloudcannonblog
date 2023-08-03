import BlogCard from '@/components/BlogCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const posts = await getData()


  return (
    <>
    <Box>
      <Grid container justifyContent="center" rowSpacing={3}>
        <Grid item xs={8}>
           <h1>Latest Blogs</h1>
        </Grid>
        {posts.map((data, index)=>(
          <Grid item xs={8} key={index}>
           <BlogCard data={data}/>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}
